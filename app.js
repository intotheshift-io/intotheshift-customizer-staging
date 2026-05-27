(function itsLoadHubSpotTracking(){
  if (document.getElementById("hs-script-loader")) return;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.id = "hs-script-loader";
  script.async = true;
  script.defer = true;
  script.src = "//js-eu1.hs-scripts.com/139575435.js";
  document.head.appendChild(script);
})();

function itsDecodeJwtPayloadForStorage() {
  const token =
    localStorage.getItem("its_token") ||
    localStorage.getItem("token") ||
    localStorage.getItem("auth_token") ||
    "";

  if (!token || !token.includes(".")) return null;

  try {
    const payload = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(payload));
  } catch(e) {
    return null;
  }
}

function itsGetCurrentUserKey() {
  const tokenUser = itsDecodeJwtPayloadForStorage();

  const userId =
    localStorage.getItem("its_user_id") ||
    localStorage.getItem("user_id") ||
    localStorage.getItem("id") ||
    tokenUser?.id ||
    tokenUser?.user_id ||
    "";

  const email =
    localStorage.getItem("its_user_email") ||
    localStorage.getItem("user_email") ||
    localStorage.getItem("email") ||
    tokenUser?.email ||
    "";

  const role =
    localStorage.getItem("its_user_role") ||
    localStorage.getItem("user_role") ||
    localStorage.getItem("role") ||
    tokenUser?.role ||
    "";

  if (userId) return "user_" + String(userId);
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


function itsGetCurrentUserSignature() {
  const tokenUser = itsDecodeJwtPayloadForStorage() || {};
  const userId =
    localStorage.getItem("its_user_id") ||
    localStorage.getItem("user_id") ||
    tokenUser.id ||
    tokenUser.user_id ||
    "";
  const email =
    localStorage.getItem("its_user_email") ||
    localStorage.getItem("user_email") ||
    tokenUser.email ||
    "";
  if (userId) return "user_" + String(userId);
  if (email) return "email_" + String(email).toLowerCase().trim();
  return "";
}

function itsGetUserSignatureFromObject(user) {
  if (!user || typeof user !== "object") return "";
  const userId = user.id || user.user_id || user.userId || "";
  const email = user.email || user.mail || "";
  if (userId) return "user_" + String(userId);
  if (email) return "email_" + String(email).toLowerCase().trim();
  return "";
}

function itsClearProjectContextOnly() {
  const currentProjectId = itsGetCurrentProjectId();
  try {
    localStorage.removeItem("its_current_project_id");
    localStorage.removeItem("its_current_ad_id");
    localStorage.removeItem("its_current_project");
    localStorage.removeItem("its_state");
    localStorage.removeItem(ITS_LEGACY_KEY);
    Object.keys(localStorage)
      .filter(key => key.indexOf("intotheshift_customizer_state_v1") === 0)
      .forEach(key => localStorage.removeItem(key));
    sessionStorage.removeItem("its_state");
    sessionStorage.removeItem(ITS_LEGACY_KEY);
    if (currentProjectId) sessionStorage.removeItem("its_project_cache_" + currentProjectId);
    Object.keys(sessionStorage)
      .filter(key => key.indexOf("its_project_cache_") === 0)
      .forEach(key => sessionStorage.removeItem(key));
  } catch(e) {}
  window.ITS_CURRENT_PROJECT_STATE = null;
}

function itsResetProjectContextForUserSwitch(nextUser) {
  const before = itsGetCurrentUserSignature();
  const after = itsGetUserSignatureFromObject(nextUser);
  if (before && after && before !== after) {
    itsClearProjectContextOnly();
  }
}

function itsProjectBelongsToCurrentFrontendUser(project) {
  const role = String(localStorage.getItem("its_user_role") || "").toLowerCase();
  if (role === "admin" || role === "partner") return true;

  const currentUserId = String(
    localStorage.getItem("its_user_id") ||
    localStorage.getItem("user_id") ||
    itsDecodeJwtPayloadForStorage()?.id ||
    ""
  );
  if (!currentUserId) return true;

  const projectUserId = String(project?.user_id || project?.userId || project?.client?.id || "");
  const createdBy = String(project?.created_by || project?.createdBy || "");

  if (projectUserId && projectUserId !== currentUserId) return false;
  if (!projectUserId && createdBy && createdBy !== currentUserId) return false;
  return true;
}

const ITS_LEGACY_KEY = "intotheshift_customizer_state_v1";
const ITS_IS_STAGING =
  window.location.hostname === "localhost" ||
  window.location.hostname.startsWith("staging.") ||
  window.location.pathname.startsWith("/staging/") ||
  window.location.pathname === "/staging";

const ITS_API_BASE =
  window.ITS_API_BASE ||
  localStorage.getItem("its_api_base") ||
  (ITS_IS_STAGING
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
  localStorage.removeItem("its_current_project");
  window.ITS_CURRENT_PROJECT_STATE = null;
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
    p.titre_repondants ||
    p.titreRespondants ||
    p.titre_visible_repondants ||
    p.titreVisibleRepondants ||
    p.titre_visible ||
    p.titreVisible ||
    p.titre ||
    state?.titre_repondants ||
    state?.titreRespondants ||
    state?.autodiagTitle ||
    state?.title ||
    p.nom ||
    state?.subject ||
    state?.theme ||
    "Nouveau projet"
  );
}

function itsCompactStateForLocalStorage(value) {
  if (!value || typeof value !== "object") return value || {};
  const cloned = JSON.parse(JSON.stringify(value));

  function walk(obj) {
    if (!obj || typeof obj !== "object") return;
    Object.keys(obj).forEach((key) => {
      const v = obj[key];
      const lowerKey = String(key).toLowerCase();
      const isHeavyImageKey = lowerKey.includes("dataurl") || lowerKey.includes("data_url") || lowerKey.includes("base64");
      const isHeavyValue = typeof v === "string" && (v.startsWith("data:image/") || v.length > 250000);

      const isGeneratedAttachmentKey =
        lowerKey === "payload" ||
        lowerKey === "excel_html" ||
        lowerKey === "pdf_html" ||
        lowerKey === "data" ||
        lowerKey === "attachments" ||
        lowerKey === "excel" ||
        lowerKey === "recap";

      if (isGeneratedAttachmentKey) {
        obj[key] = "";
        return;
      }

      if (isHeavyImageKey || isHeavyValue) {
        obj[key] = "";
        return;
      }

      if (v && typeof v === "object") walk(v);
    });
  }

  walk(cloned);
  cloned.localStorageCompacted = true;
  cloned.localStorageCompactedAt = new Date().toISOString();
  return cloned;
}

function itsSafeSetLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    if (err && err.name === "QuotaExceededError") {
      try {
        const compact = itsCompactStateForLocalStorage(value);
        localStorage.setItem(key, JSON.stringify(compact));
        console.warn("État local allégé : images/base64 retirées pour éviter le quota localStorage.");
        return true;
      } catch (err2) {
        console.warn("Sauvegarde locale impossible même après allègement. Navigation non bloquée.", err2);
        return false;
      }
    }
    console.warn("Sauvegarde locale impossible. Navigation non bloquée.", err);
    return false;
  }
}

function itsSave(state) {
  const safeState = itsCanonicalizeCampaignDates(itsCompactStateForLocalStorage(itsUnwrapProjectData(state || {})));
  const step = safeState.current_step || safeState.currentStep || safeState.step || itsInferCurrentStep();

  if (step) {
    safeState.current_step = step;
    safeState.step = step;
  }

  const isExplicitNewProject =
    safeState.mode === "blank" ||
    safeState.source === "blank" ||
    Boolean(safeState.selectedAdId && !safeState.currentAdId && !safeState.project_id && !safeState.projectId);

  const projectId = safeState.currentAdId || safeState.project_id || safeState.projectId || (isExplicitNewProject ? "" : itsGetCurrentProjectId());
  if (projectId) {
    safeState.currentAdId = projectId;
    safeState.project_id = projectId;
    itsSetCurrentProjectId(projectId);
  }

  itsSafeSetLocalStorage(itsGetStorageKey(), safeState);

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

    if (!res.ok) {
      let errorPayload = {};
      try { errorPayload = await res.json(); } catch(e) {}

      if (res.status === 404 && errorPayload?.code === "PROJECT_NOT_FOUND_NO_RECREATE") {
        const staleProjectId = String(projectId || "");

        try {
          localStorage.removeItem(itsGetStorageKey());
          if (staleProjectId) {
            localStorage.removeItem("intotheshift_customizer_state_v1_" + itsGetCurrentUserKey() + "_project_" + staleProjectId);
            sessionStorage.removeItem("its_project_cache_" + staleProjectId);
          }
        } catch(e) {}

        itsClearCurrentProjectId();
        console.warn("Projet supprimé côté API : sauvegarde locale nettoyée", staleProjectId);
      }

      return;
    }

    const json = await res.json();
    const savedId = json?.project?.id || json?.id || json?.project_id;
    if (savedId) {
      try {
        const latest = itsUnwrapProjectData(state || {});
        latest.currentAdId = savedId;
        latest.project_id = savedId;
        latest.projectId = savedId;
        itsSetCurrentProjectId(savedId);
        itsSafeSetLocalStorage(itsGetStorageKey(), latest);
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

  // Source de vérité immédiate en mémoire : la navigation avec ?projectId=
  // ne doit pas dépendre du localStorage, qui peut être plein sur de gros projets.
  window.ITS_CURRENT_PROJECT_STATE = data;

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
  itsSafeSetLocalStorage(itsGetStorageKey(), itsCompactStateForLocalStorage(data));

  if (projectId) {
    try {
      const compactProject = {
        ...realProject,
        data: itsCompactStateForLocalStorage(data)
      };
      sessionStorage.setItem("its_project_cache_" + projectId, JSON.stringify(compactProject));
    } catch(e) {
      console.warn("Cache session projet non enregistré. Navigation non bloquée.", e);
    }
  }

  itsIsRestoringProject = false;
  window.ITS_CURRENT_PROJECT_STATE = data;

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
  const id = encodeURIComponent(project?.id || project?.project_id || rawData.project_id || rawData.projectId || "");
  const suffix = id ? `?projectId=${id}` : "";

  const status = itsNormalizeProjectStatus(project);
  if (status === "published" || status === "unpublished" || status === "archived" || status === "sent" || status === "submitted") {
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
  try {
    localStorage.removeItem("intotheshift_customizer_state_v1_" + itsGetCurrentUserKey());
  } catch(e) {}

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
    createdAt: new Date().toISOString(),
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

  if (raw === "archived" || raw.includes("archiv")) return "archived";

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
  if (
    raw === "sent" ||
    raw === "submitted" ||
    raw === "transmitted" ||
    raw === "transmis" ||
    sentFlag
  ) return "sent";
  return "draft";
}

function itsGetFrontendUserRole() {
  return String(
    localStorage.getItem("its_user_role") ||
    localStorage.getItem("user_role") ||
    localStorage.getItem("role") ||
    itsDecodeJwtPayloadForStorage()?.role ||
    ""
  ).toLowerCase();
}

function itsIsAdminLikeRole() {
  const role = itsGetFrontendUserRole();
  return role === "admin" || role === "partner";
}

function itsIsPendingPublicationStatus(state) {
  const status = itsNormalizeProjectStatus(state || itsLoad());
  return status === "sent" || status === "submitted";
}

function itsIsProjectReadOnly(state) {
  const currentState = state || itsLoad();
  const status = itsNormalizeProjectStatus(currentState);

  // Seuls les états réellement verrouillés bloquent l'édition globale.
  // Un projet "transmis / en attente de publication" doit rester navigable :
  // la page validation affiche l'état transmis, mais Paramétrage/Campagne restent consultables.
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

    if (!res.ok) {
      if (res.status === 403 || res.status === 404) {
        const currentProjectId = itsGetCurrentProjectId();
        if (String(currentProjectId) === String(projectId)) itsClearProjectContextOnly();
      }
      return null;
    }

    const json = await res.json();
    const project = json.project || json.data || json;

    if (!itsProjectBelongsToCurrentFrontendUser(project)) {
      console.warn("Projet ignoré : il n'appartient pas au compte client connecté", { projectId });
      const currentProjectId = itsGetCurrentProjectId();
      if (String(currentProjectId) === String(projectId)) itsClearProjectContextOnly();
      return null;
    }

    return project;
  } catch(e) {
    console.warn("Chargement projet API impossible", e);
    return null;
  }
}

async function itsBootstrapProjectFromUrl() {
  const projectId = itsGetCurrentProjectId();
  if (!projectId) return window.ITS_CURRENT_PROJECT_STATE || itsLoad();

  // Priorité au backend : cela évite qu'un ancien localStorage sans dates
  // écrase les dates enregistrées dans le projet après Paramétrage.
  const project = await itsFetchProjectById(projectId);
  if (project) {
    itsRestoreProject(project);
    return window.ITS_CURRENT_PROJECT_STATE || itsUnwrapProjectData(project.data || project.payload || project.configuration || project) || {};
  }

  try {
    const cached = sessionStorage.getItem("its_project_cache_" + projectId);
    if (cached) {
      const cachedProject = JSON.parse(cached);
      if (itsProjectBelongsToCurrentFrontendUser(cachedProject)) {
        itsRestoreProject(cachedProject);
        return window.ITS_CURRENT_PROJECT_STATE || itsLoad() || {};
      }
    }
  } catch(e) {}

  itsClearProjectContextOnly();
  return {};
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
  const state = window.ITS_CURRENT_PROJECT_STATE || itsLoad();
  if (!itsIsProjectReadOnly(state)) return false;

  const status = itsNormalizeProjectStatus(state);
  const isPendingPublication = (status === "sent" || status === "submitted") && !itsIsAdminLikeRole();
  const message = options.message || (isPendingPublication
    ? "Cet autodiagnostic a été transmis à Into The Shift et il est maintenant en attente de publication. Cette page est en lecture seule. Pour toute modification, contactez <a href=\"mailto:contact@intotheshift.io\" style=\"color:#0d4c72;font-weight:900;text-decoration:none\">contact@intotheshift.io</a>."
    : "");

  document.body.classList.add("its-readonly-mode");
  itsInjectReadOnlyBanner(message);

  document.querySelectorAll(".step-link").forEach(link => {
    if (isPendingPublication) {
      const projectId = itsGetCurrentProjectId();
      const href = link.getAttribute("href") || "";
      if (href && projectId && !href.includes("projectId=")) {
        const separator = href.includes("?") ? "&" : "?";
        link.setAttribute("href", href + separator + "projectId=" + encodeURIComponent(projectId));
      }
      link.style.pointerEvents = "";
      link.style.opacity = ".85";
      link.title = "Projet transmis : consultation en lecture seule";
      return;
    }

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


function itsNormalizeProjectState(state) {
  const next = itsCanonicalizeCampaignDates(itsUnwrapProjectData(state || {}));
  next.parametrage = next.parametrage || {};

  const projectId = next.currentAdId || next.project_id || next.projectId || itsGetCurrentProjectId();
  if (projectId) {
    next.currentAdId = projectId;
    next.project_id = projectId;
    next.projectId = projectId;
  }

  const visibleTitle = itsPickFirstNonEmpty([
    next.parametrage.titre_repondants,
    next.parametrage.titreRespondants,
    next.parametrage.titre_visible_repondants,
    next.parametrage.titreVisibleRepondants,
    next.parametrage.titre_visible,
    next.parametrage.titreVisible,
    next.parametrage.titre,
    next.titre_repondants,
    next.titreRespondants,
    next.autodiagTitle,
    next.title,
    next.parametrage.nom,
    next.themeTitle,
    next.theme?.title,
    next.selectedTheme?.title
  ]);

  if (visibleTitle) {
    next.parametrage.titre = visibleTitle;
    next.parametrage.titre_repondants = visibleTitle;
    next.parametrage.titreRespondants = visibleTitle;
    next.parametrage.titre_visible_repondants = visibleTitle;
    next.parametrage.titreVisibleRepondants = visibleTitle;
    next.titre_repondants = visibleTitle;
    next.titreRespondants = visibleTitle;
  }

  const step = next.current_step || next.currentStep || next.step || itsInferCurrentStep() || "questions";
  next.current_step = step;
  next.step = step;
  next.status = itsNormalizeProjectStatus(next);
  return next;
}

function itsGetProjectData(project) {
  const raw = project?.data || project?.payload || project?.configuration || project || {};
  return itsUnwrapProjectData(raw);
}

function itsCleanAdTitle(title) {
  const cleaned = String(title || "")
    .replace(/^\s*Autodiagnostic\s*[-–—:]?\s*/i, "")
    .replace(/^\s*Autodiag\s*[-–—:]?\s*/i, "")
    .trim();
  return cleaned && !/^(mon projet|nouveau projet|mon premier customizer)$/i.test(cleaned) ? cleaned : "Projet sans titre";
}

function itsGetProjectTitle(project) {
  const data = itsGetProjectData(project);
  const param = data.parametrage || {};
  return itsCleanAdTitle(itsPickFirstNonEmpty([
    param.titre_repondants,
    param.titreRespondants,
    param.titre_visible_repondants,
    param.titreVisibleRepondants,
    param.titre_visible,
    param.titreVisible,
    param.titre,
    data.titre_repondants,
    data.titreRespondants,
    data.autodiagTitle,
    data.title,
    param.nom,
    project?.title,
    project?.name,
    project?.project_name,
    project?.ad_title
  ]));
}

function itsNormalizeTextForTheme(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function itsInferThemeFromProject(project) {
  const data = itsGetProjectData(project);
  const text = itsNormalizeTextForTheme(JSON.stringify(data || {}) + " " + itsGetProjectTitle(project));
  if (text.includes("cyber") || text.includes("phishing") || text.includes("fraude numerique")) return "Cybersécurité";
  if (text.includes("qvt") || text.includes("rps") || text.includes("risques psychosociaux") || text.includes("signaux faibles")) return "QVT & RPS";
  if (text.includes("btp") || text.includes("accident") || text.includes("surete") || text.includes("securite")) return "Sécurité & sûreté au travail";
  if (text.includes("management") || text.includes("manager") || text.includes("transformation")) return "Transformation & management";
  if (text.includes("rse") || text.includes("environnement") || text.includes("sobriete")) return "RSE";
  if (text.includes("ethique") || text.includes("compliance") || text.includes("conformite")) return "Éthique & compliance";
  return "";
}

function itsGetProjectThemes(project) {
  const data = itsGetProjectData(project);
  const param = data.parametrage || {};
  const titleNorm = itsNormalizeTextForTheme(itsGetProjectTitle(project));
  const forbidden = [
    "base assistee par ia", "aide a la redaction", "relecture obligatoire",
    "concu par un expert", "concu par the big factory", "copie",
    "brouillon", "publie", "transmis", "en attente"
  ];
  const businessKeywords = [
    "cyber", "cybersecurite", "qvt", "rps", "risques psychosociaux", "management", "manager", "transformation",
    "compliance", "conformite", "ethique", "diversite", "inclusion", "handicap", "sexisme", "lgbt", "religieuse", "origines",
    "rse", "environnement", "sobriete", "securite", "surete", "btp"
  ];
  const themes = [];

  function add(value, strictTag) {
    if (Array.isArray(value)) { value.forEach(v => add(v, strictTag)); return; }
    if (value && typeof value === "object") { add(value.title || value.name || value.label || value.titre || value.nom || "", strictTag); return; }
    const raw = String(value || "").trim();
    if (!raw) return;
    const norm = itsNormalizeTextForTheme(raw);
    if (!norm || norm === titleNorm) return;
    if (forbidden.includes(norm) || forbidden.some(f => norm.includes(f))) return;
    if (strictTag && !businessKeywords.some(k => norm.includes(k))) return;
    if (!themes.some(existing => itsNormalizeTextForTheme(existing) === norm)) themes.push(raw);
  }

  [
    project?.theme, project?.themeName, project?.themeLabel, project?.themeTitle, project?.thematique, project?.thématique,
    data.theme, data.themeName, data.themeLabel, data.themeTitle, data.thematique, data.thématique,
    param.theme, param.themeName, param.themeLabel, param.themeTitle, param.thematique, param.thématique,
    data.selectedTheme, param.selectedTheme, data.category, param.category,
    data.catalogTheme, data.catalog_theme, data.baseTheme, data.base_theme
  ].forEach(v => add(v, false));

  if (!themes.length) [data.themeTags, data.tags, data.theme?.tags, project?.themeTags, project?.tags].forEach(v => add(v, true));
  if (!themes.length) {
    const inferred = itsInferThemeFromProject(project);
    if (inferred) themes.push(inferred);
  }
  return themes.slice(0, 4);
}

function itsGetProjectShareUrl(project) {
  const data = itsGetProjectData(project);
  return itsPickFirstNonEmpty([project?.shareUrl, project?.share_url, project?.adUrl, project?.ad_url, data.shareUrl, data.share_url, data.publicUrl, data.public_url]);
}

function itsGetProjectResultsUrl(project) {
  const data = itsGetProjectData(project);
  return itsPickFirstNonEmpty([project?.resultsUrl, project?.results_url, project?.resultUrl, project?.result_url, data.resultsUrl, data.results_url, data.dashboardUrl, data.dashboard_url]);
}

window.ITSProject = Object.assign(window.ITSProject || {}, {
  normalizeState: itsNormalizeProjectState,
  normalizeStatus: itsNormalizeProjectStatus,
  getData: itsGetProjectData,
  getTitle: itsGetProjectTitle,
  getThemes: itsGetProjectThemes,
  getShareUrl: itsGetProjectShareUrl,
  getResultsUrl: itsGetProjectResultsUrl,
  resumeUrl: itsResumeUrlForProject,
  isReadOnly: itsIsProjectReadOnly
});

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

