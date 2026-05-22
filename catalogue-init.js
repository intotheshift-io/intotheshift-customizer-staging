/**
 * catalogue-init.js — INTO THE SHIFT
 * Validation du catalogue au démarrage. Doit être chargé EN DERNIER.
 *
 * Vérifie :
 *  - Absence de doublons d'ID
 *  - 4 chapitres par AD
 *  - Présence des profils sur chaque chapitre
 *  - Minimum 5 questions par chapitre (si CUSTOM_QUESTIONS chargé)
 *  - Cohérence des scores (valeurs 0 / 0.5 / 1 / 1.5 / 2)
 *
 * Affiche un résumé propre en console (aucun throw en production).
 */

(function () {
  var VALID_SCORES = [0, 0.5, 1, 1.5, 2];
  var errors   = [];
  var warnings = [];
  var ids      = {};

  if (!window.ITS_CATALOGUE || !Array.isArray(window.ITS_CATALOGUE)) {
    console.error("[ITS-INIT] ❌ window.ITS_CATALOGUE introuvable — catalogue-core.js chargé ?");
    return;
  }

  window.ITS_CATALOGUE.forEach(function (ad) {

    // ── Doublon d'ID ──────────────────────────────────────────────────────
    if (ids[ad.id]) {
      errors.push("ID en doublon : \"" + ad.id + "\" (thème : " + ad.themeKey + ")");
    }
    ids[ad.id] = true;

    // ── 4 chapitres ───────────────────────────────────────────────────────
    if (!ad.chapters || ad.chapters.length !== 4) {
      errors.push("[" + ad.id + "] — " + (ad.chapters ? ad.chapters.length : 0) + " chapitre(s) au lieu de 4");
    }

    if (!ad.chapters) return;

    ad.chapters.forEach(function (chap, ci) {

      var chapRef = "[" + ad.id + "] chap " + (ci + 1);

      // ── Profils présents ───────────────────────────────────────────────
      if (!chap.profiles || !Array.isArray(chap.profiles) || chap.profiles.length < 3) {
        errors.push(chapRef + " — profils manquants ou incomplets (" + (chap.profiles ? chap.profiles.length : 0) + "/3)");
      }

      // ── Minimum 5 questions ────────────────────────────────────────────
      if (!chap.questions || chap.questions.length < 5) {
        warnings.push(chapRef + " — seulement " + (chap.questions ? chap.questions.length : 0) + " question(s) (min. 5 recommandé)");
      }

      if (!chap.questions) return;

      chap.questions.forEach(function (q, qi) {
        var qRef = chapRef + " q" + (qi + 1);

        // ── Réponses présentes ─────────────────────────────────────────
        if (!q.answers || q.answers.length < 2) {
          errors.push(qRef + " — moins de 2 réponses");
          return;
        }

        // ── Scores valides ─────────────────────────────────────────────
        q.answers.forEach(function (a, ai) {
          if (VALID_SCORES.indexOf(a.score) === -1) {
            errors.push(qRef + " réponse " + (ai + 1) + " — score invalide : " + a.score + " (attendu : 0 / 0.5 / 1 / 1.5 / 2)");
          }
        });

        // ── Score max atteignable ─────────────────────────────────────
        var maxScore = Math.max.apply(null, q.answers.map(function (a) { return a.score; }));
        if (maxScore < 2) {
          warnings.push(qRef + " — score max = " + maxScore + " (aucune réponse à 2)");
        }
      });
    });
  });

  // ── Résumé console ───────────────────────────────────────────────────────
  var totalADs    = window.ITS_CATALOGUE.length;
  var totalThemes = window.ITS_THEMES ? window.ITS_THEMES.length : 0;

  if (errors.length === 0 && warnings.length === 0) {
    console.log(
      "%c[ITS-INIT] ✅ Catalogue valide — "
      + totalThemes + " domaine(s), "
      + totalADs    + " AD(s)",
      "color:#007883;font-weight:bold"
    );
  } else {
    console.groupCollapsed(
      "%c[ITS-INIT] Catalogue chargé — "
      + totalThemes + " domaine(s), "
      + totalADs    + " AD(s) | "
      + errors.length   + " erreur(s), "
      + warnings.length + " avertissement(s)",
      errors.length > 0 ? "color:#c0392b;font-weight:bold" : "color:#e67e22;font-weight:bold"
    );

    if (errors.length > 0) {
      console.group("%c❌ Erreurs (" + errors.length + ")", "color:#c0392b");
      errors.forEach(function (e) { console.error(e); });
      console.groupEnd();
    }

    if (warnings.length > 0) {
      console.group("%c⚠ Avertissements (" + warnings.length + ")", "color:#e67e22");
      warnings.forEach(function (w) { console.warn(w); });
      console.groupEnd();
    }

    console.groupEnd();
  }

  // Expose le rapport pour debugging externe
  window._ITS_INIT_REPORT = { errors: errors, warnings: warnings, totalADs: totalADs, totalThemes: totalThemes };

})();
