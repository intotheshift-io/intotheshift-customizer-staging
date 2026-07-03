// Google Tag + Google Analytics 4 - Into The Shift
(function () {
  if (window.__ITS_GOOGLE_TAG_LOADED__) return;
  window.__ITS_GOOGLE_TAG_LOADED__ = true;

  // Garde-fou : ne pas envoyer de données Google depuis le staging.
  if (window.location.hostname.includes("staging.")) return;

  const googleTagId = "GT-PLW5S2GX";
  const gaMeasurementId = "G-JC95LF9TF0";

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(googleTagId);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());

  // Google Tag global, utile notamment pour Google Ads.
  window.gtag("config", googleTagId);

  // Propriété Google Analytics 4.
  window.gtag("config", gaMeasurementId);

  window.ITSAnalytics = window.ITSAnalytics || {};

  function isBlockedHost() {
    return window.location.hostname.includes("staging.");
  }

  function getUrlProjectId() {
    try {
      const params = new URLSearchParams(window.location.search || "");
      return params.get("projectId") || params.get("projectid") || params.get("id") || "";
    } catch (e) {
      return "";
    }
  }

  function safeJsonParse(value, fallback) {
    try {
      return value ? JSON.parse(value) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function getCurrentState() {
    return safeJsonParse(localStorage.getItem("its_state"), {}) || {};
  }

  function countQuestions(state) {
    const chapters = Array.isArray(state.chapters) ? state.chapters : [];
    return chapters.reduce(function (sum, chapter) {
      return sum + (Array.isArray(chapter.questions) ? chapter.questions.length : 0);
    }, 0);
  }

  function getCommonParams(extra) {
    const state = getCurrentState();
    const user = safeJsonParse(localStorage.getItem("its_user"), {}) || {};
    const param = state.parametrage || {};
    const chapters = Array.isArray(state.chapters) ? state.chapters : [];

    return Object.assign({
      page_path: window.location.pathname,
      page_title: document.title || "",
      project_id: getUrlProjectId() || state.projectId || state.project_id || state.currentAdId || localStorage.getItem("its_current_project_id") || localStorage.getItem("its_current_ad_id") || "",
      user_id: localStorage.getItem("its_user_id") || user.id || "",
      company: param.entreprise || user.companyName || user.company_name || localStorage.getItem("its_user_company") || "",
      pack: param.pack_choisi || param.packChoisi || state.pack_choisi || "",
      theme: state.themeLabel || state.theme_label || state.theme || state.title || state.name || "",
      chapter_count: chapters.length || undefined,
      question_count: chapters.length ? countQuestions(state) : undefined
    }, extra || {});
  }

  function track(eventName, params) {
    if (isBlockedHost()) return;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", eventName, getCommonParams(params));
  }

  window.ITSAnalytics.track = track;

  window.ITSAnalytics.signUp = function () {
    track("sign_up", { method: "email" });
  };

  window.ITSAnalytics.login = function () {
    track("login", { method: "email" });
  };

  window.ITSAnalytics.createBlankDiagnostic = function (params) {
    track("create_blank_diagnostic", params);
  };

  window.ITSAnalytics.selectCatalogItem = function (params) {
    track("select_catalog_item", params);
  };

  window.ITSAnalytics.questionsCompleted = function (params) {
    track("questions_completed", params);
  };

  window.ITSAnalytics.parametrageCompleted = function (params) {
    track("parametrage_completed", params);
  };

  window.ITSAnalytics.submitConfiguration = function (params) {
    track("submit_configuration", params);
  };

  window.ITSAnalytics.informationRequest = function (params) {
    track("information_request_submit", params);
    track("generate_lead", Object.assign({ currency: "EUR", value: 1 }, params || {}));
  };

  window.ITSAnalytics.publishAutodiagnostic = function (params) {
    track("publish_autodiagnostic", params);
    if (params && params.first_publish === true) {
      track("first_publish", params);
    }
  };

  window.ITSAnalytics.reprogramCampaign = function (params) {
    track("campaign_reprogrammed", params);
  };

  window.ITSAnalytics.extendCampaign = function (params) {
    track("campaign_extended", params);
  };
})();
