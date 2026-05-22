/**
 * catalogue-custom.js — INTO THE SHIFT
 * Fichier réservé aux contenus créés par le compte client.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  COMMENT AJOUTER UN AD PERSONNALISÉ
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  1. Ajoutez vos questions rédigées dans window.CUSTOM_QUESTIONS :
 *
 *     Object.assign(window.CUSTOM_QUESTIONS, {
 *       "mon-ad-id": {
 *         0: [ // chapitre 1 (index 0)
 *           { text: "Énoncé de la question", type: "choix", answers: [
 *               { text: "Réponse A", score: 0   },
 *               { text: "Réponse B", score: 1   },
 *               { text: "Réponse C", score: 2   }
 *             ]
 *           },
 *           // ... 4 autres questions minimum
 *         ],
 *         1: [ ... ], // chapitre 2
 *         2: [ ... ], // chapitre 3
 *         3: [ ... ]  // chapitre 4
 *       }
 *     });
 *
 *  2. Enregistrez votre thème et vos ADs via ITS_registerTheme :
 *
 *     window.ITS_registerTheme("mon-theme", "Mon Thème", "🏷️", [
 *       [
 *         "mon-ad-id",          // id unique kebab-case
 *         "Titre de l'AD",      // affiché dans la bibliothèque
 *         "Collaborateurs",     // audience
 *         "Description courte", // sous-titre bibliothèque
 *         {                     // template minimal requis
 *           domain: "management",
 *           chapters: [
 *             ["Titre chapitre 1", "Description chapitre 1"],
 *             ["Titre chapitre 2", "Description chapitre 2"],
 *             ["Titre chapitre 3", "Description chapitre 3"],
 *             ["Titre chapitre 4", "Description chapitre 4"]
 *           ]
 *         }
 *       ]
 *     ]);
 *
 *  3. Ajoutez <script src="catalogue-custom.js?v=1"></script>
 *     dans index.html APRÈS catalogue-ethique.js et AVANT catalogue-init.js.
 *
 *  Note : ce fichier n'ajoute rien au catalogue par défaut.
 *         Il sert uniquement de point d'entrée pour vos contenus propres.
 * ─────────────────────────────────────────────────────────────────────────
 */

(function () {
  // Aucun contenu par défaut.
  // Décommentez et adaptez le bloc ci-dessus pour ajouter vos ADs.
})();
