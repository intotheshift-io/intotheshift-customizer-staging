function itsGetCurrentUserKey() {
  const userId =
    localStorage.getItem("its_user_id") ||
    localStorage.getItem("user_id") ||
    localStorage.getItem("id");

  const email =
    localStorage.getItem("its_user_email") ||
    localStorage.getItem("user_email") ||
    localStorage.getItem("email");

  const role =
    localStorage.getItem("its_user_role") ||
    localStorage.getItem("user_role") ||
    localStorage.getItem("role");

  if (userId) return "user_" + userId;
  if (email) return "email_" + String(email).toLowerCase().trim();

  return role ? "role_" + role : "anonymous";
}

function itsGetStorageKey() {
  const projectId =
    localStorage.getItem("its_current_project_id") ||
    localStorage.getItem("its_current_ad_id") ||
    "";

  const base = "intotheshift_customizer_state_v1_" + itsGetCurrentUserKey();
  return projectId ? base + "_project_" + String(projectId) : base;
}

const ITS_LEGACY_KEY = "intotheshift_customizer_state_v1";
const ITS_API_BASE =
  window.ITS_API_BASE ||
  localStorage.getItem("its_api_base") ||
  (window.location.hostname === "localhost"
    ? "https://into-the-shift-studio-api-staging.osc-fr1.scalingo.io"
    : "https://into-the-shift-studio-api.osc-fr1.scalingo.io");

let itsSaveTimer = null;
let itsIsRestoringProject = false;

(function itsCaptureProjectIdFromUrl(){
  try {
    const id = new URLSearchParams(window.location.search).get("projectId");
    if (id) itsSetCurrentProjectId(id);
  } catch(e) {}
})();


function itsPickFirstNonEmpty(values) {
  for (const value of values) {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return String(value).trim();
    }
  }
  return "";
}

function itsCanonicalizeCampaignDates(state) {
  if (!state || typeof state !== "object") return state || {};
  state.parametrage = state.parametrage || {};

  const start = itsPickFirstNonEmpty([
    state.parametrage.date_lancement,
    state.parametrage.dateLancement,
    state.campaignStartDate,
    state.campaign_start_date,
    state.startDate,
    state.start_date,
    state.meta?.date_lancement,
    state.meta?.dateLancement
  ]);

  const end = itsPickFirstNonEmpty([
    state.parametrage.date_cloture,
    state.parametrage.dateCloture,
    state.campaignEndDate,
    state.campaign_end_date,
    state.endDate,
    state.end_date,
    state.meta?.date_cloture,
    state.meta?.dateCloture
  ]);

  state.parametrage.date_lancement = start;
  state.parametrage.dateLancement = start;
  state.parametrage.date_cloture = end;
  state.parametrage.dateCloture = end;
  state.campaignStartDate = start;
  state.campaign_start_date = start;
  state.startDate = start;
  state.start_date = start;
  state.campaignEndDate = end;
  state.campaign_end_date = end;
  state.endDate = end;
  state.end_date = end;

  return state;
}

function itsGetToken() {
  return (
    localStorage.getItem("its_token") ||
    localStorage.getItem("token") ||
    localStorage.getItem("auth_token") ||
    ""
  );
}

function itsGetCurrentProjectId() {
  return (
    localStorage.getItem("its_current_project_id") ||
    localStorage.getItem("its_current_ad_id") ||
    ""
  );
}

function itsSetCurrentProjectId(id) {
  if (!id) return;
  localStorage.setItem("its_current_project_id", String(id));
  localStorage.setItem("its_current_ad_id", String(id));
}

function itsClearCurrentProjectId() {
  localStorage.removeItem("its_current_project_id");
  localStorage.removeItem("its_current_ad_id");
}

function itsParseMaybeJson(value) {
  if (!value) return {};
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch(e) {
    return {};
  }
}

function itsUnwrapProjectData(rawData) {
  let data = itsParseMaybeJson(rawData);
  if (!data || typeof data !== "object") return {};

  // Ancienne sauvegarde questions.html : { step, status, configTransmise, state: {...} }
  if (data.state && typeof data.state === "object") {
    const state = data.state;
    return {
      ...state,
      current_step: data.step || data.current_step || state.current_step || state.step || "questions",
      step: data.step || data.current_step || state.step || state.current_step || "questions",
      status: data.status || state.status || "draft",
      configTransmise: data.configTransmise === true || state.configTransmise === true
    };
  }

  // Variante possible : { payload: { state: {...} } }
  if (data.payload && typeof data.payload === "object") {
    return itsUnwrapProjectData(data.payload);
  }

  return data;
}

function itsLoad() {
  try {
    const current = JSON.parse(localStorage.getItem(itsGetStorageKey())) || {};
    return itsUnwrapProjectData(current);
  } catch(e) {
    return {};
  }
}

function itsInferCurrentStep() {
  const page = window.location.pathname.split("/").pop() || "";
  if (page.includes("questions")) return "questions";
  if (page.includes("parametrage")) return "parametrage";
  if (page.includes("campagne")) return "campagne";
  if (page.includes("validation")) return "validation";
  return "";
}

function itsProjectTitleFromState(state) {
  const p = state?.parametrage || state?.meta || {};
  return (
    p.nom ||
    p.titre ||
    state?.autodiagTitle ||
    state?.title ||
    state?.subject ||
    state?.theme ||
    "Nouveau projet"
  );
}

function itsSave(state) {
  const safeState = itsCanonicalizeCampaignDates(itsUnwrapProjectData(state || {}));
  const step = safeState.current_step || safeState.currentStep || safeState.step || itsInferCurrentStep();

  if (step) {
    safeState.current_step = step;
    safeState.step = step;
  }

  const projectId = safeState.currentAdId || safeState.project_id || safeState.projectId || itsGetCurrentProjectId();
  if (projectId) {
    safeState.currentAdId = projectId;
    safeState.project_id = projectId;
    itsSetCurrentProjectId(projectId);
  }

  localStorage.setItem(itsGetStorageKey(), JSON.stringify(safeState));

  if (!itsIsRestoringProject) {
    itsScheduleProjectSync(safeState);
  }
}

function itsScheduleProjectSync(state) {
  const token = itsGetToken();
  if (!token) return;

  clearTimeout(itsSaveTimer);
  itsSaveTimer = setTimeout(() => itsSyncProjectToApi(state), 700);
}

async function itsSyncProjectToApi(state) {
  const token = itsGetToken();
  if (!token || !state || typeof state !== "object") return;

  const projectId = state.currentAdId || state.project_id || state.projectId || itsGetCurrentProjectId();
  const title = itsProjectTitleFromState(state);
  const currentStep = state.current_step || state.step || itsInferCurrentStep();
  const configSent = state.configTransmise === true || state.config_transmise === true || state.submitted === true;
  const status = state.status || (configSent ? "sent" : "draft");

  state = itsCanonicalizeCampaignDates(state);
  const campaignStartDate = state.parametrage?.date_lancement || "";
  const campaignEndDate = state.parametrage?.date_cloture || "";

  const body = {
    projectId: projectId || undefined,
    title,
    status,
    currentStep,
    campaignStartDate: campaignStartDate || undefined,
    campaignEndDate: campaignEndDate || undefined,
    data: state
  };

  try {
    const res = await fetch(ITS_API_BASE + "/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) return;

    const json = await res.json();
    const savedId = json?.project?.id || json?.id || json?.project_id;
    if (savedId) {
      try {
        const latest = itsUnwrapProjectData(state || {});
        latest.currentAdId = savedId;
        latest.project_id = savedId;
        latest.projectId = savedId;
        itsSetCurrentProjectId(savedId);
        localStorage.setItem(itsGetStorageKey(), JSON.stringify(latest));
      } catch(e) {
        itsSetCurrentProjectId(savedId);
      }
    }
  } catch(e) {
    console.warn("Sauvegarde projet API impossible", e);
  }
}

function itsPatch(patch) {
  const current = itsLoad();
  const next = Object.assign({}, current, patch || {});
  itsSave(next);
  return next;
}

function itsClear() {
  localStorage.removeItem(itsGetStorageKey());
  itsClearCurrentProjectId();
}

function itsClearLegacyDraft() {
  localStorage.removeItem(ITS_LEGACY_KEY);
}

function itsRestoreProject(project) {
  if (!project) return false;

  const realProject = project.project || project;
  const projectId = realProject.id || realProject.project_id || realProject.projectId || "";
  const rawData = realProject.data || realProject.payload || realProject.configuration || {};
  const data = itsCanonicalizeCampaignDates(itsUnwrapProjectData(rawData));

  if (!data || typeof data !== "object") return false;

  if (projectId) {
    data.currentAdId = projectId;
    data.project_id = projectId;
    itsSetCurrentProjectId(projectId);
  }

  if (realProject.currentStep || realProject.current_step) {
    data.current_step = realProject.currentStep || realProject.current_step;
    data.step = realProject.currentStep || realProject.current_step;
  }

  if (realProject.status) {
    data.status = realProject.status;
  }

  if (realProject.share_url || realProject.shareUrl) {
    data.share_url = realProject.share_url || realProject.shareUrl;
    data.shareUrl = realProject.share_url || realProject.shareUrl;
  }

  if (realProject.results_url || realProject.resultsUrl) {
    data.results_url = realProject.results_url || realProject.resultsUrl;
    data.resultsUrl = realProject.results_url || realProject.resultsUrl;
  }

  if (realProject.published_at || realProject.publishedAt) {
    data.published_at = realProject.published_at || realProject.publishedAt;
    data.publishedAt = realProject.published_at || realProject.publishedAt;
  }

  if (realProject.unpublished_at || realProject.unpublishedAt) {
    data.unpublished_at = realProject.unpublished_at || realProject.unpublishedAt;
    data.unpublishedAt = realProject.unpublished_at || realProject.unpublishedAt;
  }

  const passationLogoName = realProject.passation_logo_name || realProject.passationLogoName || data.passation_logo_name || data.passationLogoName || "";
  const passationLogoDataUrl = realProject.passation_logo_data_url || realProject.passationLogoDataUrl || data.passation_logo_data_url || data.passationLogoDataUrl || "";

  if (passationLogoName || passationLogoDataUrl) {
    data.passationLogoName = passationLogoName;
    data.passationLogoDataUrl = passationLogoDataUrl;
    data.passation_logo_name = passationLogoName;
    data.passation_logo_data_url = passationLogoDataUrl;
    data.parametrage = data.parametrage || {};
    data.parametrage.passationLogoName = passationLogoName;
    data.parametrage.passationLogoDataUrl = passationLogoDataUrl;
    data.parametrage.passation_logo_name = passationLogoName;
    data.parametrage.passation_logo_data_url = passationLogoDataUrl;
  }

  const startDate = realProject.campaign_start_date || realProject.campaignStartDate || realProject.start_date || realProject.startDate || "";
  const endDate = realProject.campaign_end_date || realProject.campaignEndDate || realProject.end_date || realProject.endDate || "";

  if (startDate) {
    data.parametrage = data.parametrage || {};
    data.parametrage.date_lancement = startDate;
    data.parametrage.dateLancement = startDate;
  }

  if (endDate) {
    data.parametrage = data.parametrage || {};
    data.parametrage.date_cloture = endDate;
    data.parametrage.dateCloture = endDate;
  }

  itsCanonicalizeCampaignDates(data);

  itsIsRestoringProject = true;
  localStorage.setItem(itsGetStorageKey(), JSON.stringify(data));
  if (projectId) {
    sessionStorage.setItem("its_project_cache_" + projectId, JSON.stringify(realProject));
  }
  itsIsRestoringProject = false;

  return true;
}

function itsResumeUrlForProject(project) {
  const rawData = itsUnwrapProjectData(project?.data || {});
  const rawStep = String(
    project?.currentStep ||
    project?.current_step ||
    rawData.current_step ||
    rawData.step ||
    ""
  ).toLowerCase();
  const id = encodeURIComponent(project?.id || project?.project_id || "");
  const suffix = id ? `?projectId=${id}` : "";

  const status = itsNormalizeProjectStatus(project);
  if (status === "published" || status === "unpublished" || status === "sent" || status === "submitted" || status === "archived") {
    return "validation.html" + suffix;
  }

  if (rawStep.includes("validation")) return "validation.html" + suffix;
  if (rawStep.includes("campagne")) return "campagne.html" + suffix;
  if (rawStep.includes("param")) return "parametrage.html" + suffix;
  return "questions.html" + suffix;
}

function itsSlugify(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "et")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function itsFormatDateFR(dateStr) {
  if (!dateStr) return "—";
  const p = String(dateStr).split("-");
  return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : dateStr;
}

function itsGetAdById(id) {
  return (window.ITS_CATALOGUE || []).find(ad => ad.id === id);
}

function itsClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function itsStartFromCatalogue(adId) {
  const ad = itsGetAdById(adId);
  if (!ad) return null;

  itsClearCurrentProjectId();

  const state = {
    selectedAdId: ad.id,
    title: ad.title,
    theme: ad.theme,
    audience: ad.audience,
    tags: ad.tags || ["Base assistée par IA", "Aide à la rédaction", "Relecture obligatoire"],
    duration: ad.duration || "8 à 12 min",
    chapters: itsClone(ad.chapters || []),
    meta: {
      nom: "Autodiagnostic " + ad.title,
      titre: "",
      desc: "Campagne interne sur " + ad.title + ".",
      slug: itsSlugify(ad.title),
      date_lancement: "",
      date_cloture: ""
    },
    intro: ad.intro || "",
    parametrage: {
      nom: "Autodiagnostic " + ad.title,
      titre: "",
      desc: "Campagne interne sur " + ad.title + ".",
      slug: itsSlugify(ad.title),
      entreprise: "",
      date_lancement: "",
      date_cloture: "",
      pack_choisi: "",
      nb_repondants: 120,
      intro: ad.intro || (
        "Bienvenue dans cet autodiagnostic consacré à " + ad.title + ". Vous allez découvrir des situations concrètes du quotidien professionnel et choisir les réactions qui correspondent le mieux à vos réflexes. Il ne s’agit pas d’une évaluation individuelle : l’objectif est de favoriser la prise de conscience et d’identifier des pistes d’action utiles. Cet autodiagnostic est entièrement anonyme : aucun login, aucun mot de passe, aucun cookie, aucun suivi d’adresse IP. Répondez sincèrement, sans chercher la bonne réponse. Les résultats seront analysés de manière agrégée."
      ),
      sociodemo: [
        { q:"À quelle catégorie appartenez-vous ?", opts:["Collaborateur·rice","Manager","Direction"], min_groupe:25 },
        { q:"Quel est votre service principal ?", opts:["Production","Maintenance","RH","Fonctions support","Autre"], min_groupe:10 }
      ],
      resources: []
    },
    packPassations: "",
    demographics: [
      { q:"À quelle catégorie appartenez-vous ?", opts:["Collaborateur·rice","Manager","Direction"], min_groupe:25 },
      { q:"Quel est votre service principal ?", opts:["Production","Maintenance","RH","Fonctions support","Autre"], min_groupe:10 }
    ],
    resources: [],
    status: "draft",
    step: "questions",
    current_step: "questions"
  };

  itsCanonicalizeCampaignDates(state);
  itsSave(state);
  return state;
}



function itsNormalizeProjectStatus(projectOrState) {
  const project = projectOrState || {};
  const data = itsUnwrapProjectData(project.data || project.payload || project.configuration || project);
  const raw = String(
    project.status ||
    project.project_status ||
    data.status ||
    data.project_status ||
    ""
  ).toLowerCase();

  const sentFlag =
    project.configTransmise === true ||
    project.config_transmise === true ||
    project.submitted === true ||
    data.configTransmise === true ||
    data.config_transmise === true ||
    data.submitted === true ||
    data.transmission?.status === "sent" ||
    !!data.submitted_at;

  if (raw.includes("unpublished") || raw.includes("dépub") || raw.includes("depub")) return "unpublished";
  if (raw.includes("archiv")) return "archived";
  if (raw.includes("publish") || raw.includes("publi") || raw.includes("ligne") || raw.includes("result")) return "published";
  if (raw.includes("sent") || raw.includes("submitted") || raw.includes("transmis") || sentFlag) return "sent";
  return "draft";
}

function itsIsProjectReadOnly(state) {
  const status = itsNormalizeProjectStatus(state || itsLoad());
  return status === "published" || status === "unpublished" || status === "archived";
}

async function itsFetchProjectById(projectId) {
  const token = itsGetToken();
  if (!token || !projectId) return null;

  try {
    const res = await fetch(
      ITS_API_BASE + "/api/projects/" + encodeURIComponent(projectId),
      {
        headers: {
          "Authorization": "Bearer " + token
        }
      }
    );

    if (!res.ok) return null;

    const json = await res.json();

    return (
      json.project ||
      json.data ||
      json
    );
  } catch(e) {
    console.warn("Chargement projet API impossible", e);
    return null;
  }
}

async function itsBootstrapProjectFromUrl() {
  const projectId = itsGetCurrentProjectId();
  if (!projectId) return itsLoad();

  try {
    const cached = sessionStorage.getItem("its_project_cache_" + projectId);
    if (cached) {
      itsRestoreProject(JSON.parse(cached));
      return itsLoad();
    }
  } catch(e) {}

  const local = itsLoad();
  if (local && Array.isArray(local.chapters) && local.chapters.length) {
    return local;
  }

  const project = await itsFetchProjectById(projectId);
  if (project) {
    itsRestoreProject(project);
    return itsLoad();
  }

  return local || {};
}

function itsInjectReadOnlyBanner(message) {
  if (document.getElementById("its-readonly-banner")) return;

  const banner = document.createElement("div");
  banner.id = "its-readonly-banner";
  banner.style.cssText = "background:#f0fbf2;border-bottom:1px solid #b8e8c0;color:#18375d;padding:12px 24px;font-family:Asap,sans-serif;font-size:13px;line-height:1.45;font-weight:700";
  banner.innerHTML = message || "Cet autodiagnostic est publié. Cette page est en lecture seule. Pour toute modification, contactez <a href=\"mailto:contact@intotheshift.io\" style=\"color:#0d4c72;font-weight:900;text-decoration:none\">contact@intotheshift.io</a>.";

  const header = document.getElementById("header");
  if (header && header.parentNode) {
    header.parentNode.insertBefore(banner, header.nextSibling);
  } else {
    document.body.insertBefore(banner, document.body.firstChild);
  }
}

function itsApplyReadOnlyMode(options = {}) {
  const state = itsLoad();
  if (!itsIsProjectReadOnly(state)) return false;

  document.body.classList.add("its-readonly-mode");
  itsInjectReadOnlyBanner(options.message);

  document.querySelectorAll(".step-link").forEach(link => {
    link.removeAttribute("href");
    link.style.pointerEvents = "none";
    link.style.opacity = ".55";
    link.title = "Navigation bloquée : projet publié";
  });

  document.querySelectorAll("input, textarea, select").forEach(el => {
    el.disabled = true;
    el.style.cursor = "not-allowed";
  });

  document.querySelectorAll("[contenteditable='true']").forEach(el => {
    el.setAttribute("contenteditable", "false");
    el.style.cursor = "not-allowed";
    el.style.opacity = ".78";
  });

  document.querySelectorAll("button").forEach(btn => {
    const txt = (btn.textContent || "").toLowerCase();
    const keep =
      txt.includes("copier") ||
      txt.includes("tester") ||
      txt.includes("télécharger") ||
      txt.includes("telecharger") ||
      btn.classList.contains("pass-close") ||
      btn.classList.contains("preview-close");
    if (!keep) {
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
      btn.style.opacity = ".55";
    }
  });

  const style = document.createElement("style");
  style.textContent = ".its-readonly-mode .bottom-actions{display:none!important}.its-readonly-mode .btn-add-chapter,.its-readonly-mode .btn-save{display:none!important}";
  document.head.appendChild(style);

  return true;
}

function itsShouldApplyReadOnlyOnThisPage() {
  const page = (window.location.pathname.split("/").pop() || "").toLowerCase();

  // On bloque uniquement les pages d'édition / consultation d'un projet précis.
  // Les pages de liste ou de navigation globale doivent rester utilisables.
  const editablePages = [
    "questions.html",
    "parametrage.html",
    "campagne.html",
    "validation.html"
  ];

  const hasProjectId = new URLSearchParams(window.location.search).has("projectId");
  return editablePages.includes(page) && hasProjectId;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (itsShouldApplyReadOnlyOnThisPage()) itsApplyReadOnlyMode();
  });
} else {
  setTimeout(() => {
    if (itsShouldApplyReadOnlyOnThisPage()) itsApplyReadOnlyMode();
  }, 0);
}

