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
})();
