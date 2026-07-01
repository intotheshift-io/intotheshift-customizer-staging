(function(){
  const TAGS = [
    {key:'method', label:'🧠 Méthodologie', href:'ressources.html?tag=method#articles'},
    {key:'management', label:'👥 Management & Transformation', href:'ressources.html?tag=management#articles'},
    {key:'formation', label:'🎓 Formation professionnelle', href:'ressources.html?tag=formation#articles'},
    {key:'qvct', label:'💚 QVCT & RPS', href:'ressources.html?tag=qvct#articles'},
    {key:'cyber', label:'🔐 Cybersécurité', href:'ressources.html?tag=cyber#articles'},
    {key:'rse', label:'🌍 RSE & Environnement', href:'ressources.html?tag=rse#articles'},
    {key:'security', label:'🦺 Santé & Sécurité', href:'ressources.html?tag=security#articles'},
    {key:'ethique', label:'⚖️ Éthique & Compliance', href:'ressources.html?tag=ethique#articles'}
  ];

    const PAGE_TAGS = {
    'accompagnement-au-changement.html':["management"],
    'barometre-qvct.html':["qvct"],
    'bore-out.html':["qvct"],
    'brown-out.html':["qvct", "management"],
    'burn-out.html':["qvct"],
    'charge-de-travail-ressenti-comportements.html':["qvct"],
    'charge-mentale-au-travail.html':["qvct"],
    'comment-mesurer-les-comportements-plutot-que-les-connaissances.html':["method"],
    'comportements-securite.html':["security"],
    'conduite-du-changement.html':["management"],
    'culture-juste-entreprise.html':["security", "management"],
    'culture-securite.html':["security"],
    'desamorcer-un-conflit.html':["management"],
    'desengagement-au-travail.html':["qvct"],
    'diagnostic-comportemental-formation-professionnelle.html':["formation"],
    'diagnostic-comportemental-vs-questionnaire-classique.html':["method"],
    'shadow-it.html':["cyber"],
    'teletravail-cybersecurite.html':["cyber"],
    'ia-generative-et-cybersecurite.html':["cyber"],
    'gestion-incident-cyber.html':["cyber"],
    'signaler-un-incident-cyber.html':["cyber"],
    'comportements-cyber-a-risque.html':["cyber"],
    'formation-cybersecurite.html':["cyber"],
    'diagnostic-cybersecurite.html':["cyber"],

    'comment-sensibiliser-les-collaborateurs-a-la-cybersecurite.html':["cyber"],
    'pourquoi-les-salaries-restent-la-premiere-faille-de-cybersecurite.html':["cyber"],
    'comment-developper-une-culture-cybersecurite-en-entreprise.html':["cyber"],
    'comment-mesurer-la-culture-cybersecurite.html':["cyber"],
    'comment-savoir-si-une-campagne-de-sensibilisation-cybersecurite-fonctionne.html':["cyber"],
    'fraude-au-dirigeant-et-demandes-urgentes.html':["cyber"],
    'phishing-fraude-president-manipulation.html':["cyber"],
    'phishing.html':["cyber"],
    'mots-de-passe.html':["cyber"],
    'authentification-multifacteur.html':["cyber"],
    'diagnostic-management.html':["management"],
    'diagnostic-rps.html':["qvct"],
    'droit-a-la-deconnexion.html':["qvct"],
    'fatigue-professionnelle.html':["qvct"],
    'feedback-et-comportements.html':["management"],
    'formation-conduite-du-changement.html':["formation"],
    'formation-gestion-des-conflits.html':["formation"],
    'formation-management.html':["formation"],
    'formation-sante-securite-au-travail.html':["formation"],
    'gestion-des-conflits.html':["management"],
    'guide-metier-cybersecurite.html':["cyber"],
    'guide-metier-ethique.html':["ethique"],
    'ethique-compliance-definition.html':["ethique"],
    'culture-ethique-entreprise.html':["ethique"],
    'conflits-interets-entreprise.html':["ethique"],
    'cadeaux-invitations-compliance.html':["ethique"],
    'alerte-ethique-entreprise.html':["ethique"],
    'charte-ethique-entreprise.html':["ethique"],
    'prevention-corruption-entreprise.html':["ethique"],
    'devoir-vigilance-entreprise.html':["ethique"],
    'rgpd-comportements-protection-donnees.html':["ethique"],
    'formation-ethique-compliance.html':["ethique"],
    'mesurer-culture-integrite.html':["ethique"],
    'diagnostic-comportemental-ethique.html':["ethique"],
    'gouvernance-ethique-compliance.html':["ethique"],
    'tiers-fournisseurs-compliance.html':["ethique"],
    'guide-metier-qvt-rps.html':["qvct"],
    'guide-metier-rse.html':["rse"],
    'rse-definition-enjeux-objectifs.html':["rse"],
    'les-3-piliers-rse.html':["rse"],
    'pourquoi-mettre-en-place-demarche-rse.html':["rse"],
    'strategie-rse.html':["rse"],
    'politique-rse.html':["rse"],
    'feuille-de-route-rse.html':["rse"],
    'plan-action-rse.html':["rse"],
    'gouvernance-rse.html':["rse"],
    'culture-rse-entreprise.html':["rse"],
    'engagement-collaborateurs-rse.html':["rse"],
    'mesurer-comportements-rse.html':["rse"],
    'diagnostic-comportemental-rse.html':["rse"],
    'indicateurs-rse-mesure-impact.html':["rse"],
    'environnement-en-entreprise.html':["rse"],
    'sobriete-numerique.html':["rse"],
    'numerique-responsable.html':["rse"],
    'ecogestes-au-bureau.html':["rse"],
    'reduction-dechets-entreprise.html':["rse"],
    'tri-dechets-entreprise.html':["rse"],
    'achats-responsables.html':["rse"],
    'economie-circulaire.html':["rse"],
    'mobilite-durable.html':["rse"],
    'deplacements-professionnels-responsables.html':["rse"],
    'reduction-consommation-energetique.html':["rse"],
    'reduction-consommation-papier.html':["rse"],
    'transition-ecologique-entreprise.html':["rse"],
    'empreinte-carbone-organisations.html':["rse"],
    'bilan-carbone-enjeux.html':["rse"],
    'sensibiliser-collaborateurs-enjeux-environnementaux.html':["rse"],
    'guide-metier-securite.html':["security"],
    'guide-metier-transfo.html':["management"],
    'hyperconnexion-au-travail.html':["qvct"],
    'leadership.html':["management"],
    'management-et-rps.html':["qvct", "management"],
    'management-securite.html':["security", "management"],
    'port-des-epi.html':["security"],
    'pourquoi-diffuser-un-diagnostic-comportemental.html':["method", "formation", "management"],
    'pourquoi-les-formations-cyber-echouent-elles-souvent.html':["cyber"],
    'presenteisme-absenteisme.html':["qvct"],
    'presque-accident.html':["security"],
    'prevention-accidents-travail.html':["security"],
    'prevention-risques-psychosociaux.html':["qvct"],
    'quart-dheure-securite.html':["security"],
    'qvct-definition-enjeux-methodes.html':["qvct"],
    'securite-psychologique-au-travail.html':["qvct", "management"],
    'signalement-situation-dangereuse.html':["security"],
    'simulateur-comportemental.html':["method"],
    'stress-au-travail.html':["qvct"],
    'transformation-manageriale.html':["management"],
  };

  function pageName(){
    const path = window.location.pathname.split('/').pop();
    return path || 'ressources.html';
  }

  function normalize(value){
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  }

  function rootPrefix(){
    return window.location.pathname.includes('/resources/') ? '../../' : '';
  }

  function withRoot(href){
    return rootPrefix() + href;
  }

  function redirectToResourcesSearch(query){
    const value = String(query || '').trim();
    window.location.href = value ? withRoot('ressources.html?search=' + encodeURIComponent(value) + '#articles') : withRoot('ressources.html#articles');
  }

  function injectContentTagMenu(){
    if(document.body.classList.contains('resources-body')) return;
    if(document.querySelector('.content-tag-menu')) return;

    const name = pageName();
    if(!PAGE_TAGS[name]) return;

    const activeTags = PAGE_TAGS[name] || [];
    const wrapper = document.createElement('section');
    wrapper.className = 'content-tag-menu';
    wrapper.setAttribute('aria-label','Explorer les ressources par tags');
    wrapper.innerHTML = `
      <div class="content-tag-menu-inner">
        <div class="content-tag-menu-head">
          <a class="content-tag-home" href="${withRoot('ressources.html#articles')}">📚 Toutes les ressources</a>
          <label class="content-tag-search" aria-label="Rechercher dans les ressources">
            <span>🔎</span>
            <input type="search" placeholder="Rechercher un sujet…" autocomplete="off">
          </label>
        </div>
        <nav class="content-tag-chips" aria-label="Tags des ressources">
          ${TAGS.map(tag => `<a class="content-tag-chip ${activeTags.includes(tag.key) ? 'is-active' : ''}" href="${withRoot(tag.href)}">${tag.label}</a>`).join('')}
        </nav>
      </div>`;

    const header = document.getElementById('header');
    const firstMain = document.querySelector('main');
    if(header && header.parentNode){
      header.insertAdjacentElement('afterend', wrapper);
    }else if(firstMain && firstMain.parentNode){
      firstMain.parentNode.insertBefore(wrapper, firstMain);
    }else{
      document.body.insertBefore(wrapper, document.body.firstChild);
    }

    const input = wrapper.querySelector('input[type="search"]');
    input.addEventListener('keydown', function(event){
      if(event.key !== 'Enter') return;
      event.preventDefault();
      redirectToResourcesSearch(input.value);
    });
  }

  function applyResourcePageParams(){
    if(!document.body.classList.contains('resources-body')) return;
    const params = new URLSearchParams(window.location.search);
    const tag = params.get('tag');
    const format = params.get('format');
    const search = params.get('search');
    if(!tag && !format && !search) return;

    setTimeout(function(){
      const searchInput = document.getElementById('resourceSearch');
      if(searchInput && search){
        searchInput.value = search;
        searchInput.dispatchEvent(new Event('input', {bubbles:true}));
      }

      if(tag){
        const chip = document.querySelector(`.filter-chip:not(.format-chip)[data-filter="${CSS.escape(tag)}"]`);
        if(chip) chip.click();
      }

      if(format){
        const formatChip = document.querySelector(`.format-chip[data-format="${CSS.escape(format)}"]`);
        if(formatChip) formatChip.click();
      }
    }, 0);
  }

  document.addEventListener('DOMContentLoaded', function(){
  injectContentTagMenu();
  applyResourcePageParams();
});
})();
