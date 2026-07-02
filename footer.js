(function () {
  const currentPage = window.location.pathname.split("/").pop() || "home.html";

  const hiddenPages = new Set([
    "questions.html",
    "profils.html",
    "profiles.html",
    "scoring.html",
    "parametrage.html",
    "parametres.html",
    "campaign.html",
    "campagne.html",
    "validation.html",
    "publication.html",
    "kit-communication.html"
  ]);

  if (hiddenPages.has(currentPage)) return;

  function renderFooter() {
    let footer = document.getElementById("footer");

    if (!footer) {
      footer = document.createElement("footer");
      footer.id = "footer";
      document.body.appendChild(footer);
    }

    footer.className = "its-footer";
    footer.innerHTML = `
      <div class="its-footer-inner">
        <div class="its-footer-brand">
          <img src="/into-the-shift-logo-light.png" alt="Into The Shift" class="its-footer-logo">
          <p>Des diagnostics comportementaux anonymes pour transformer les intentions en pratiques observables.</p>
        </div>

        <nav class="its-footer-nav" aria-label="Navigation de pied de page">
          <div>
            <strong>Plateforme</strong>
            <a href="/home.html">Accueil</a>
            <a href="/index.html">Bibliothèque</a>
            <a href="/tarifs.html">Tarifs</a>
          </div>

          <div>
            <strong>Ressources</strong>
            <a href="/ressources.html">Tous les articles</a>
            <a href="/resources/cyber/guide-metier-cybersecurite.html">Cybersécurité</a>
            <a href="/resources/rse/guide-metier-rse.html">RSE & environnement</a>
          </div>

          <div>
            <strong>Contact</strong>
            <a href="/demande-information.html">Demande d’information</a>
            <a href="https://meandyoutoo.app/fr/autodiagnostic-diversite-et-inclusion" target="_blank" rel="noopener">Catalogue Inclusion Expert</a>
          </div>
        </nav>
      </div>

      <div class="its-footer-bottom">
        <span>© Into The Shift</span>
        <span>Diagnostic anonyme · Sans compte répondant · Résultats collectifs</span>
      </div>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderFooter);
  } else {
    renderFooter();
  }
})();
