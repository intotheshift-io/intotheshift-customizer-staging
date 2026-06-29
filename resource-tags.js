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
    'simulateur-comportemental.html':['method','formation'],
    'diagnostic-comportemental-vs-questionnaire-classique.html':['method','formation'],
    'comment-mesurer-les-comportements-plutot-que-les-connaissances.html':['method','formation'],
    'pourquoi-diffuser-un-diagnostic-comportemental.html':['method','formation','management'],
    'diagnostic-comportemental-formation-professionnelle.html':['formation','method'],
    'conduite-du-changement.html':['management','formation','method'],
    'accompagnement-au-changement.html':['management','formation'],
    'transformation-manageriale.html':['management'],
    'formation-conduite-du-changement.html':['formation','management'],
    'formation-management.html':['formation','management'],
    'leadership.html':['management','formation'],
    'gestion-des-conflits.html':['management','formation'],
    'formation-gestion-des-conflits.html':['formation','management'],
    'desamorcer-un-conflit.html':['management'],
    'diagnostic-management.html':['management'],
    'guide-metier-transfo.html':['management'],
    'feedback-et-comportements.html':['management'],
    'diagnostic-rps.html':['qvct'],
    'guide-metier-qvt-rps.html':['qvct'],
    'charge-de-travail-ressenti-comportements.html':['qvct'],
    'prevention-risques-psychosociaux.html':['qvct'],
    'qvct-definition-enjeux-methodes.html':['qvct'],
    'securite-psychologique-au-travail.html':['qvct','management'],
    'management-et-rps.html':['qvct','management'],
    'charge-mentale-au-travail.html':['qvct'],
    'barometre-qvct.html':['qvct'],
    'burn-out.html':['qvct'],
    'bore-out.html':['qvct'],
    'brown-out.html':['qvct'],
    'stress-au-travail.html':['qvct'],
    'fatigue-professionnelle.html':['qvct'],
    'hyperconnexion-au-travail.html':['qvct'],
    'droit-a-la-deconnexion.html':['qvct'],
    'desengagement-au-travail.html':['qvct'],
    'presenteisme-absenteisme.html':['qvct'],
    'diagnostic-cybersecurite.html':['cyber'],
    'guide-metier-cybersecurite.html':['cyber'],
    'pourquoi-les-formations-cyber-echouent-elles-souvent.html':['cyber','formation'],
    'guide-metier-rse.html':['rse'],
    'guide-metier-ethique.html':['ethique'],
    'guide-metier-securite.html':['security'],
    'culture-securite.html':['security'],
    'prevention-accidents-travail.html':['security'],
    'presque-accident.html':['security'],
    'port-des-epi.html':['security'],
    'signalement-situation-dangereuse.html':['security'],
    'comportements-securite.html':['security'],
    'management-securite.html':['security','management'],
    'formation-sante-securite-au-travail.html':['security','formation'],
    'quart-dheure-securite.html':['security'],
    'culture-juste-entreprise.html':['ethique','security','management'],
  };

  function pageName(){
    const path = window.location.pathname.split('/').pop();
    return path || 'ressources.html';
  }

  function normalize(value){
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  }

  function redirectToResourcesSearch(query){
    const value = String(query || '').trim();
    window.location.href = value ? 'ressources.html?search=' + encodeURIComponent(value) + '#articles' : 'ressources.html#articles';
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
          <a class="content-tag-home" href="ressources.html#articles">📚 Toutes les ressources</a>
          <label class="content-tag-search" aria-label="Rechercher dans les ressources">
            <span>🔎</span>
            <input type="search" placeholder="Rechercher un sujet…" autocomplete="off">
          </label>
        </div>
        <nav class="content-tag-chips" aria-label="Tags des ressources">
          ${TAGS.map(tag => `<a class="content-tag-chip ${activeTags.includes(tag.key) ? 'is-active' : ''}" href="${tag.href}">${tag.label}</a>`).join('')}
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
