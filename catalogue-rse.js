/**
 * catalogue-rse.js — INTO THE SHIFT
 * Domaine : RSE — Environnement
 * 9 autodiagnostics — 360 questions
 * Dépend de : catalogue-core.js
 */

(function () {

  Object.assign(window.CUSTOM_QUESTIONS, {

  "sobriete-quotidien": {
    0: [
      {
        type: "choix",
        text: "Votre bureau est chauffé à 22°C. Vous avez la possibilité de régler le thermostat. Il fait 19°C dehors.",
        tags: ["sobriété", "énergie"],
        answers: [
          { text: "Je laisse à 22°C — c'est la température recommandée pour le confort au travail.", score: 0 },
          { text: "Je descends à 19-20°C et j'adapte ma tenue si nécessaire.", score: 2 },
          { text: "Je descends légèrement à 21°C pour un compromis.", score: 1 },
          { text: "Je vérifie la politique de l'organisation avant de toucher au thermostat.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "choix",
        text: "Vous quittez une salle de réunion. La lumière et le vidéoprojecteur sont allumés mais d'autres personnes pourraient arriver.",
        tags: ["sobriété", "éclairage"],
        answers: [
          { text: "Je laisse — quelqu'un d'autre éteindra ou des gens arriveront.", score: 0 },
          { text: "J'éteins et je laisse un message indiquant que la salle est disponible.", score: 2 },
          { text: "J'éteins le vidéoprojecteur mais je laisse la lumière.", score: 1 },
          { text: "Je demande à l'accueil de gérer.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "likert",
        text: "Vous éteignez systématiquement les équipements et lumières non utilisés, même dans les espaces communs.",
        tags: ["sobriété", "comportements simples"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "choix",
        text: "Votre stylo est vide. Vous avez besoin d'en racheter un. Votre organisation a un stock de fournitures.",
        tags: ["sobriété", "achats"],
        answers: [
          { text: "Je commande un nouveau stylo en ligne pour l'avoir rapidement.", score: 0 },
          { text: "Je vérifie d'abord le stock de fournitures existant.", score: 2 },
          { text: "Je demande à un collègue s'il en a un disponible.", score: 1.5 },
          { text: "Je prends n'importe quoi dans la salle de reprographie.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "choix",
        text: "Vous imprimez régulièrement vos emails et présentations pour les réunions. Vous avez accès à votre ordinateur ou tablette en réunion.",
        tags: ["sobriété", "usages quotidiens"],
        answers: [
          { text: "Je continue d'imprimer — j'ai besoin du papier pour prendre des notes.", score: 0 },
          { text: "Je passe au tout numérique pour les réunions.", score: 2 },
          { text: "Je réduis les impressions aux documents qui nécessitent vraiment une version papier.", score: 1.5 },
          { text: "J'imprime en recto verso pour diviser par deux le papier utilisé.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "likert",
        text: "Vous limitez les impressions aux cas où elles sont vraiment nécessaires.",
        tags: ["sobriété", "numérique"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "choix",
        text: "Vous devez vous rendre dans un bâtiment à 300m du vôtre pour une réunion d'une heure. Il fait beau.",
        tags: ["sobriété", "déplacements courts"],
        answers: [
          { text: "Je prends ma voiture ou appelle un taxi — c'est plus pratique.", score: 0 },
          { text: "J'y vais à pied.", score: 2 },
          { text: "Je cherche si un collègue va au même endroit pour covoiturer.", score: 1 },
          { text: "Je propose de tenir la réunion en visio.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "choix",
        text: "Vous utilisez des gobelets jetables à la machine à café chaque jour.",
        tags: ["sobriété", "eau"],
        answers: [
          { text: "Je continue — c'est plus pratique et les gobelets sont recyclés.", score: 0 },
          { text: "J'apporte mon propre mug et je l'utilise.", score: 2 },
          { text: "J'utilise les gobelets jetables uniquement pour les visiteurs.", score: 1 },
          { text: "Je réduis ma consommation de café pour réduire les gobelets.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "likert",
        text: "Vous avez supprimé les objets jetables à usage unique dans votre usage quotidien au bureau.",
        tags: ["sobriété", "réduction déchets"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez atteindre votre objectif professionnel de deux façons : l'une consomme beaucoup plus d'énergie que l'autre, l'autre prend 15 minutes de plus.",
        tags: ["sobriété", "arbitrage"],
        answers: [
          { text: "Je choisis la façon la plus rapide — le temps professionnel est précieux.", score: 0 },
          { text: "Je choisis la façon moins consommatrice si la différence de temps est raisonnable.", score: 2 },
          { text: "Je choisis selon le contexte — parfois la rapidité prime.", score: 1 },
          { text: "Je cherche une troisième option qui combine les deux avantages.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos arbitrages quotidiens ne tiennent pas encore compte de leur impact environnemental", desc: "Laisser les lumières et équipements allumés sans utilisation, prendre le chemin le plus pratique plutôt que le moins énergivore, utiliser des gobelets jetables par habitude, continuer à imprimer systématiquement quand le numérique suffirait : ces comportements ne font pas encore entrer l'impact environnemental dans les arbitrages du quotidien. Ce n'est pas une question de sacrifice — c'est une question d'attention." },
          moyen: { label: "Pratiques en développement", titre: "Vous faites les gestes de sobriété les plus évidents mais les arbitrages moins visibles sont encore peu intégrés", desc: "Vous éteignez les équipements et choisissez les options plus sobres quand elles sont visibles. Mais intégrer les critères environnementaux dans tous vos arbitrages, y compris ceux où l'option sobre demande un effort — 15 minutes de plus, légèrement moins de confort — est encore partiel. L'enjeu est d'élargir le périmètre des décisions où l'impact compte." },
          haut: { label: "Réflexes installés", titre: "Vous intégrez l'impact environnemental dans vos arbitrages quotidiens — énergie, déchets, achats, comportements", desc: "Vous éteignez tout ce qui n'est plus utilisé. Vous choisissez la version sobre quand la différence est raisonnable. Vous triez correctement même quand la signalétique est floue. Vous apportez votre mug. Vous imprimez seulement ce qui le nécessite vraiment. Vous choisissez les produits éco-labellisés quand le surcoût est modeste. Ce souci d'impact dans les arbitrages du quotidien — sans sacrifice majeur — est ce qui crée un comportement collectif dès lors que d'autres font de même." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous déjeunez à la cantine de votre organisation. Vous avez le choix entre un plat végétarien et un plat avec viande rouge au même prix.",
        tags: ["sobriété", "alimentation"],
        answers: [
          { text: "Je prends le plat avec viande — mes préférences alimentaires sont personnelles.", score: 0 },
          { text: "Je choisis en tenant compte de l'impact environnemental parmi mes critères de choix.", score: 2 },
          { text: "Je prends parfois le végétarien mais pas systématiquement.", score: 1 },
          { text: "Je prends ce dont j'ai envie ce jour-là.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "choix",
        text: "Il reste de la nourriture non consommée à la fin d'un repas d'équipe que vous avez organisé.",
        tags: ["sobriété", "gaspillage"],
        answers: [
          { text: "Je laisse le traiteur gérer — c'est leur responsabilité.", score: 0 },
          { text: "Je m'assure que la nourriture restante est partagée ou récupérée avant de jeter.", score: 2 },
          { text: "Je demande à l'équipe de prendre ce qui reste.", score: 1.5 },
          { text: "Je commande moins la prochaine fois.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "likert",
        text: "Vous prenez des mesures concrètes pour éviter le gaspillage alimentaire lors des repas professionnels que vous organisez.",
        tags: ["sobriété", "gaspillage alimentaire"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez aller au travail en transport en commun en 35 minutes ou en voiture en 20 minutes.",
        tags: ["sobriété", "mobilité domicile"],
        answers: [
          { text: "Je prends toujours la voiture — 15 minutes c'est significatif dans une journée.", score: 0 },
          { text: "Je prends les transports en commun par défaut et j'utilise ce temps autrement.", score: 2 },
          { text: "Je prends les transports en commun certains jours et la voiture d'autres.", score: 1 },
          { text: "Je cherche à covoiturer pour réduire l'impact de ma voiture.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez faire du télétravail deux jours par semaine. Votre trajet domicile-bureau est long et polluant.",
        tags: ["sobriété", "télétravail"],
        answers: [
          { text: "Je viens au bureau cinq jours — la présence physique est importante.", score: 0 },
          { text: "J'utilise le télétravail de façon stratégique pour réduire mes déplacements.", score: 2 },
          { text: "Je fais du télétravail quand ça m'arrange sans raisonnement environnemental.", score: 0.5 },
          { text: "Je fais du télétravail les jours où j'aurais eu de longs déplacements.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "likert",
        text: "Vous intégrez l'impact environnemental de vos déplacements domicile-bureau dans vos choix de mode de transport.",
        tags: ["sobriété", "mobilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "choix",
        text: "Votre téléphone professionnel fonctionne encore bien mais il a trois ans. Vous pouvez en demander un nouveau.",
        tags: ["sobriété", "objets"],
        answers: [
          { text: "Je demande le renouvellement — trois ans c'est le cycle normal.", score: 0 },
          { text: "Je continue à utiliser mon téléphone tant qu'il fonctionne bien.", score: 2 },
          { text: "Je demande si une réparation est possible avant de renouveler.", score: 1.5 },
          { text: "Je demande un refurbishé plutôt qu'un neuf.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "choix",
        text: "Vous envoyez régulièrement des pièces jointes volumineuses alors qu'un lien de partage suffirait.",
        tags: ["sobriété", "numérique lourd"],
        answers: [
          { text: "Je continue — les pièces jointes c'est plus simple pour le destinataire.", score: 0 },
          { text: "Je passe aux liens de partage systématiquement pour les fichiers volumineux.", score: 2 },
          { text: "Je réduis la taille des pièces jointes en compressant les fichiers.", score: 1 },
          { text: "Je n'envoie les pièces jointes volumineuses que quand c'est vraiment nécessaire.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez à allonger la durée de vie de vos équipements professionnels avant de demander un remplacement.",
        tags: ["sobriété", "allongement durée vie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      },
      {
        type: "choix",
        text: "Vous faites des gestes sobres au quotidien mais vous ne les rendez jamais visibles à votre équipe.",
        tags: ["sobriété", "visibilité action"],
        answers: [
          { text: "Je laisse — mes gestes personnels ne regardent que moi.", score: 0.5 },
          { text: "Je les rends visibles naturellement pour inspirer sans moraliser.", score: 2 },
          { text: "Je les mentionne quand c'est pertinent dans une conversation.", score: 1 },
          { text: "Je les communique en réunion pour encourager les autres.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos choix de mobilité et de consommation sont guidés par la commodité plutôt que par la sobriété", desc: "Choisir systématiquement la voiture sur les transports en commun, ne pas utiliser le télétravail pour réduire les déplacements, renouveler les équipements au premier cycle sans chercher à prolonger leur durée de vie, envoyer des pièces jointes volumineuses par habitude : ces comportements créent un impact environnemental évitable avec peu d'effort." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit votre impact sur les usages simples mais mobilité et équipements restent des angles morts", desc: "Vous avez supprimé les gobelets jetables et vous triez bien. Mais utiliser le télétravail pour réduire vos déplacements, choisir les transports en commun par défaut, prolonger la durée de vie de vos équipements : ces arbitrages de mobilité et d'équipements restent des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos choix de mobilité, d'alimentation et d'équipements intègrent systématiquement les critères environnementaux", desc: "Vous prenez les transports en commun par défaut et utilisez le télétravail stratégiquement. Vous prolongez la durée de vie de vos équipements. Vous tenez compte de l'impact alimentaire dans vos choix à la cantine. Vous passez aux liens de partage pour les fichiers volumineux. Ces arbitrages de mobilité et d'équipements — qui demandent un ajustement d'habitudes — sont ce qui fait la différence sur les postes d'émission les plus importants." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Votre organisation a mis en place le tri sélectif mais la signalétique n'est pas toujours claire.",
        tags: ["sobriété", "déchets tri"],
        answers: [
          { text: "Je jette dans la poubelle la plus proche — si le tri n'est pas clair, ce n'est pas ma responsabilité.", score: 0 },
          { text: "Je prends le temps de comprendre le système en vigueur et de trier correctement.", score: 2 },
          { text: "Je trie ce que je connais et je laisse tomber ce qui n'est pas clair.", score: 1 },
          { text: "Je signale à la direction que la signalétique n'est pas assez claire.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "likert",
        text: "Vous triez vos déchets correctement selon le système en vigueur dans votre organisation.",
        tags: ["sobriété", "tri"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Il y a une fuite d'eau dans les sanitaires de votre étage. Ce n'est pas votre responsabilité directe.",
        tags: ["sobriété", "consommation eau"],
        answers: [
          { text: "Je laisse — ce n'est pas mon problème.", score: 0 },
          { text: "Je le signale à la maintenance immédiatement.", score: 2 },
          { text: "Je le signale si personne d'autre ne l'a fait.", score: 1 },
          { text: "J'attends que ça empire avant de signaler.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Vous observez une pratique énergivore dans votre organisation qui pourrait facilement être améliorée.",
        tags: ["sobriété", "signal"],
        answers: [
          { text: "Je laisse — ce n'est pas mon rôle de changer les pratiques de l'organisation.", score: 0 },
          { text: "Je le remonte aux personnes compétentes avec une suggestion concrète.", score: 2 },
          { text: "J'en parle à un collègue pour voir s'il partage mon observation.", score: 1 },
          { text: "Je le signale dans la boîte à idées si elle existe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Vous ne faites pas tous les gestes verts possibles et vous vous sentez parfois coupable.",
        tags: ["sobriété", "éviter culpabilité"],
        answers: [
          { text: "Je laisse la culpabilité m'envahir — c'est le signe que je prends la situation au sérieux.", score: 0 },
          { text: "Je me concentre sur les gestes que je peux faire de façon réaliste et durable.", score: 2 },
          { text: "Je cherche à faire plus pour me sentir mieux.", score: 0.5 },
          { text: "Je relativise — mon impact individuel est limité de toute façon.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "likert",
        text: "Vous adoptez des gestes de sobriété que vous pouvez tenir dans la durée plutôt que des efforts ponctuels motivés par la culpabilité.",
        tags: ["sobriété", "réalisme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Vous commandez des produits de bureau. Deux options existent : l'une est éco-labellisée et légèrement plus chère, l'autre non.",
        tags: ["sobriété", "choix produits"],
        answers: [
          { text: "Je prends le moins cher — les critères environnementaux ne justifient pas le surcoût.", score: 0 },
          { text: "Je prends l'éco-labellisée si la différence de prix est raisonnable.", score: 2 },
          { text: "Je vérifie si la politique de l'organisation encourage ce type de choix.", score: 1 },
          { text: "Je fais une demande à ma direction pour valider le surcoût.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Vous laissez votre ordinateur allumé toute la nuit et pendant les week-ends en mode veille.",
        tags: ["sobriété", "sobriété numérique"],
        answers: [
          { text: "Je laisse — la veille consomme peu et redémarrer prend du temps.", score: 0 },
          { text: "J'éteins complètement mon ordinateur en fin de journée et avant les week-ends.", score: 2 },
          { text: "Je mets en veille prolongée mais pas en veille simple.", score: 1 },
          { text: "Je l'éteins en week-end mais je le laisse en veille la nuit.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "likert",
        text: "Vous éteignez complètement vos équipements professionnels en fin de journée et avant les week-ends.",
        tags: ["sobriété", "équipements"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation lance une initiative de sobriété énergétique. Vous pensez que vos actions individuelles n'ont que peu d'impact.",
        tags: ["sobriété", "collectif"],
        answers: [
          { text: "Je participe minimalement — l'impact individuel est trop faible pour que ça compte.", score: 0 },
          { text: "Je participe pleinement — les comportements collectifs ont un impact réel.", score: 2 },
          { text: "Je participe si les initiatives sont concrètes et mesurables.", score: 1.5 },
          { text: "Je propose des actions supplémentaires plus ambitieuses.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos comportements de réduction des déchets et de signalement sont encore peu développés", desc: "Jeter sans trier parce que la signalétique n'est pas claire, laisser une fuite d'eau sans la signaler, observer des pratiques énergivores sans les remonter, ne pas adopter l'éco-labellisé quand le surcoût est modeste : ces comportements laissent des gains simples inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous triez et signalez mais vous n'allez pas encore chercher les améliorations moins visibles", desc: "Vous triez correctement et vous signalez les dysfonctionnements. Mais chercher activement les pratiques énergivores à remonter, choisir les produits éco-labellisés quand le surcoût est modeste, partager vos bonnes pratiques sans moraliser : ces comportements de contribution active sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — signalement, remontées, partage de pratiques — sans attendre que les conditions soient parfaites", desc: "Vous signalez les fuites et dysfonctionnements. Vous remontez les pratiques énergivores avec des suggestions concrètes. Vous partagez vos bonnes pratiques naturellement. Vous participez activement aux initiatives de mesure. Vous remontez les obstacles structurels plutôt que de vous y résigner. Cette contribution active — qui dépasse vos comportements individuels pour améliorer le contexte collectif — est ce qui multiplie l'impact." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous avez découvert un geste simple qui réduit significativement votre consommation au bureau. Vos collègues ne le font pas.",
        tags: ["sobriété", "partage pratiques"],
        answers: [
          { text: "Je laisse — chacun fait ses propres choix.", score: 0 },
          { text: "Je le partage naturellement sans pression ni jugement.", score: 2 },
          { text: "Je l'affiche dans l'espace commun pour que chacun puisse l'adopter.", score: 1.5 },
          { text: "Je l'intègre dans une communication d'équipe si l'occasion se présente.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous partagez vos bonnes pratiques de sobriété avec vos collègues sans moraliser.",
        tags: ["sobriété", "partage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Un collègue vous demande de faire un geste de sobriété qui empiète sur votre confort de travail de façon significative.",
        tags: ["sobriété", "limites"],
        answers: [
          { text: "Je cède — la sobriété demande des sacrifices.", score: 0 },
          { text: "J'explique mes limites et je propose une alternative.", score: 2 },
          { text: "Je fais le geste demandé mais je me sens contraint·e.", score: 0 },
          { text: "Je refuse sans explication.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation vous propose de mesurer l'empreinte carbone de vos activités professionnelles.",
        tags: ["sobriété", "mesure impact"],
        answers: [
          { text: "Je refuse — ça prendrait trop de temps et mon impact est faible.", score: 0 },
          { text: "Je participe avec intérêt — mesurer aide à prioriser les efforts.", score: 2 },
          { text: "Je participe par obligation sans m'y impliquer.", score: 0.5 },
          { text: "Je participe et je cherche à utiliser les résultats pour changer mes pratiques.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous avez fait des efforts de sobriété pendant le 'mois sans voiture' de votre organisation. L'initiative est terminée.",
        tags: ["sobriété", "engagement durable"],
        answers: [
          { text: "Je reviens à mes habitudes — les initiatives temporaires ne créent pas de changements durables.", score: 0 },
          { text: "Je maintiens les gestes qui ont bien fonctionné pour moi.", score: 2 },
          { text: "Je maintiens tous les gestes quelle que soit ma motivation.", score: 1 },
          { text: "Je continue quelques semaines avant de progressivement revenir à mes habitudes.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez les gestes de sobriété qui fonctionnent pour vous même après la fin des initiatives collectives.",
        tags: ["sobriété", "durabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous prônez la sobriété en réunion mais vos comportements individuels ne sont pas alignés.",
        tags: ["sobriété", "cohérence"],
        answers: [
          { text: "Je laisse — les injonctions collectives et les comportements individuels sont différents.", score: 0 },
          { text: "Je cherche à aligner mes comportements individuels sur ce que je défends collectivement.", score: 2 },
          { text: "Je prends conscience de l'écart et je le réduis progressivement.", score: 1.5 },
          { text: "Je reconnais que c'est difficile — la cohérence totale est un idéal.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Des obstacles pratiques vous empêchent de mettre en place certains gestes de sobriété au bureau — manque d'infrastructure, temps, soutien.",
        tags: ["sobriété", "obstacles"],
        answers: [
          { text: "J'abandonne — si les conditions ne sont pas réunies, je ne peux pas faire plus.", score: 0 },
          { text: "Je remonte les obstacles aux personnes compétentes pour qu'ils soient levés.", score: 2 },
          { text: "Je cherche des solutions de contournement dans les contraintes existantes.", score: 1.5 },
          { text: "Je fais ce qui est possible sans me battre contre les obstacles structurels.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous remontez les obstacles pratiques à la sobriété au lieu de vous y résigner.",
        tags: ["sobriété", "obstacles"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous faites les gestes de sobriété les plus faciles et vous évitez ceux qui demandent plus d'effort ou de changement d'habitudes.",
        tags: ["sobriété", "ambition"],
        answers: [
          { text: "Je laisse — les petits gestes faciles ont aussi un impact cumulé.", score: 0.5 },
          { text: "Je cherche régulièrement à élargir mes gestes à des domaines plus challengeants.", score: 2 },
          { text: "Je fais ce que je peux selon mes contraintes du moment.", score: 1 },
          { text: "Je liste les gestes difficiles et j'en adopte un nouveau chaque mois.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après une initiative de sobriété, prôner la sobriété sans l'incarner, faire uniquement les gestes les plus faciles, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la sobriété un événement ponctuel plutôt qu'une pratique installée." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais leur périmètre reste limité aux plus faciles", desc: "Vous maintenez les gestes simples dans la durée. Mais étendre vos gestes aux domaines plus challengeants, aligner vos comportements individuels sur ce que vous défendez collectivement, remonter les obstacles structurels : votre périmètre est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Vos gestes sont durables, cohérents et vous les élargissez progressivement aux domaines plus challengeants", desc: "Vous maintenez vos gestes après les initiatives collectives. Vous alignez vos comportements sur ce que vous défendez. Vous adoptez progressivement des gestes plus challengeants. Vous posez vos limites quand on vous demande des gestes irréalistes. Vous mesurez et utilisez les résultats pour progresser. Cette sobriété installée et évolutive — qui n'est ni culpabilisante ni superficielle — est ce qui crée un impact réel dans la durée." },
        },
      }
    ],

  },

  "reduire-dechets": {
    0: [
      {
        type: "choix",
        text: "Votre organisation commande régulièrement des fournitures en excès. Il en reste souvent en fin d'année.",
        tags: ["déchets", "source"],
        answers: [
          { text: "Je laisse — les commandes sont gérées par les achats.", score: 0 },
          { text: "Je signale l'excédent et propose d'ajuster les commandes futures.", score: 2 },
          { text: "Je prends ce dont j'ai besoin dans le stock avant de commander.", score: 1.5 },
          { text: "Je propose de partager le stock avec d'autres équipes.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "choix",
        text: "Vous avez du matériel professionnel fonctionnel dont vous n'avez plus l'utilité.",
        tags: ["déchets", "réemploi"],
        answers: [
          { text: "Je le jette — l'espace de stockage est limité.", score: 0 },
          { text: "Je cherche à le donner à un collègue ou à le faire récupérer par l'organisation.", score: 2 },
          { text: "Je le range au cas où j'en aurais besoin plus tard.", score: 0.5 },
          { text: "Je le propose sur la plateforme interne d'échange si elle existe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "likert",
        text: "Avant de jeter un objet professionnel fonctionnel, vous cherchez à le réemployer ou à le faire récupérer.",
        tags: ["déchets", "réemploi"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "choix",
        text: "Vous recevez régulièrement des livraisons avec beaucoup d'emballage. Les cartons et plastiques s'accumulent.",
        tags: ["déchets", "emballages"],
        answers: [
          { text: "Je jette tout ensemble — trier les emballages prend trop de temps.", score: 0 },
          { text: "Je trie les emballages et je signale les excès d'emballage au fournisseur ou aux achats.", score: 2 },
          { text: "Je trie les emballages mais je ne remonte pas le problème.", score: 1 },
          { text: "Je garde les cartons pour d'autres usages.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "choix",
        text: "Votre boîte mail contient des milliers d'emails archivés depuis des années que vous ne consultez jamais.",
        tags: ["déchets", "numérique"],
        answers: [
          { text: "Je les garde — on ne sait jamais, ils pourraient être utiles.", score: 0 },
          { text: "Je les nettoie régulièrement et je me désinscris des newsletters inutiles.", score: 2 },
          { text: "Je les compresse dans un dossier archive.", score: 0 },
          { text: "Je nettoie les plus anciens chaque année.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "likert",
        text: "Vous nettoyez régulièrement vos emails, fichiers et données numériques inutiles.",
        tags: ["déchets", "numérique"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez réaliser votre mission en utilisant moins de matières premières sans en impacter la qualité.",
        tags: ["déchets", "matières premières"],
        answers: [
          { text: "Je maintiens mes pratiques habituelles — réduire les matières risque d'impacter la qualité.", score: 0 },
          { text: "Je teste la version allégée et je l'adopte si la qualité est maintenue.", score: 2 },
          { text: "Je le propose à mon responsable pour validation avant de changer.", score: 1 },
          { text: "Je note l'idée sans passer à l'action.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "choix",
        text: "Un équipement est en panne. Vous pouvez le faire réparer ou le remplacer pour un coût similaire.",
        tags: ["déchets", "réparation"],
        answers: [
          { text: "Je remplace — le neuf sera plus fiable.", score: 0 },
          { text: "Je fais réparer — prolonger la durée de vie est toujours préférable.", score: 2 },
          { text: "Je compare la durée de vie restante attendue avant de décider.", score: 1.5 },
          { text: "Je demande une évaluation au technicien avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "likert",
        text: "Quand un équipement peut être réparé à un coût comparable au remplacement, vous choisissez la réparation.",
        tags: ["déchets", "réparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      },
      {
        type: "choix",
        text: "Dans votre équipe, les déchets inutiles sont normalisés. Personne ne les questionne.",
        tags: ["déchets", "culture"],
        answers: [
          { text: "Je laisse — ce n'est pas à moi de changer les habitudes collectives.", score: 0 },
          { text: "Je propose des alternatives concrètes à l'occasion sans imposer.", score: 2 },
          { text: "J'en parle à mon responsable pour qu'il adresse le sujet.", score: 1 },
          { text: "J'adopte moi-même des pratiques différentes de façon visible.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réduction des déchets n'est pas encore un critère dans vos décisions et comportements quotidiens", desc: "Ne pas chercher à réemployer le matériel fonctionnel, ne pas trier les emballages, ne pas nettoyer les données numériques inutiles, jeter sans chercher les alternatives : ces comportements génèrent des déchets évitables. La règle des 5R — refuser, réduire, réutiliser, recycler, valoriser — s'applique aussi au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous réduisez les déchets évidents mais les déchets numériques et les achats restent des angles morts", desc: "Vous triez, réemployez et réduisez les consommables jetables. Mais nettoyer régulièrement vos données numériques, intégrer les critères environnementaux dans vos achats sans politique formelle, proposer activement vos idées de réduction : ces domaines sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "La réduction des déchets est intégrée dans vos décisions quotidiennes — réemploi, numérique, achats, consommables", desc: "Vous cherchez à réemployer avant de jeter. Vous nettoyez vos données et emails régulièrement. Vous faites réparer quand c'est comparable au remplacement. Vous choisissez les consommables durables. Vous signalez les excédents de commandes. Vous intégrez les critères environnementaux dans vos achats. Cette réduction active des déchets à toutes les étapes — avant production, en usage, en fin de vie — est ce qui crée un impact réel." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Les robinets de votre organisation fuient légèrement. C'est en cours de signalement depuis deux semaines.",
        tags: ["ressources", "eau"],
        answers: [
          { text: "Je laisse — c'est déjà signalé et je fais confiance au processus.", score: 0.5 },
          { text: "Je relance la maintenance — une fuite non traitée depuis deux semaines mérite un suivi.", score: 2 },
          { text: "Je laisse — ce n'est pas ma responsabilité de suivre la maintenance.", score: 0 },
          { text: "Je bloque le robinet avec du ruban adhésif en attendant.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "likert",
        text: "Vous relancez les demandes de maintenance environnementale non traitées dans des délais raisonnables.",
        tags: ["ressources", "suivi"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous recevez des documents papier que vous pourriez recevoir en version numérique.",
        tags: ["ressources", "papier"],
        answers: [
          { text: "Je laisse — j'ai besoin du papier pour annoter.", score: 0 },
          { text: "Je demande à basculer sur la version numérique quand c'est possible.", score: 2 },
          { text: "Je scanne les documents reçus et je recycle l'original.", score: 1 },
          { text: "Je garde le papier uniquement pour les documents importants.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous utilisez un équipement rarement mais vous en avez un dédié. D'autres équipes pourraient en avoir besoin.",
        tags: ["ressources", "mutualisation"],
        answers: [
          { text: "Je garde mon équipement dédié — la disponibilité immédiate est importante.", score: 0 },
          { text: "Je propose de le mutualiser avec les équipes qui en ont besoin.", score: 2 },
          { text: "Je les informe qu'ils peuvent l'emprunter.", score: 1.5 },
          { text: "Je l'offre et je me mets sur la liste de mutualisation.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous pourriez regrouper vos commandes pour réduire les livraisons mais ça implique d'anticiper davantage.",
        tags: ["ressources", "commandes groupées"],
        answers: [
          { text: "Je commande selon mes besoins du moment — anticiper est difficile.", score: 0 },
          { text: "Je regroupe mes commandes quand c'est possible pour réduire les livraisons.", score: 2 },
          { text: "Je regroupe uniquement les commandes importantes.", score: 1 },
          { text: "Je demande à l'organisation de mettre en place une commande groupée mensuelle.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "likert",
        text: "Vous regroupez vos commandes pour réduire le nombre de livraisons.",
        tags: ["ressources", "commandes"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Pour documenter un projet, vous imprimez de nombreuses photos en couleur.",
        tags: ["ressources", "photos documentation"],
        answers: [
          { text: "Je continue — la qualité de présentation est importante.", score: 0 },
          { text: "Je passe à la documentation numérique pour les projets internes.", score: 2 },
          { text: "Je réduis le nombre de photos imprimées à l'essentiel.", score: 1.5 },
          { text: "J'imprime en noir et blanc pour réduire l'encre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous stockez des données professionnelles en double ou triple sauvegarde sans vous demander si c'est nécessaire.",
        tags: ["ressources", "donnée"],
        answers: [
          { text: "Je laisse — la redondance protège contre les pertes de données.", score: 0 },
          { text: "Je vérifie quelle redondance est vraiment nécessaire selon la politique de l'organisation.", score: 2 },
          { text: "Je supprime les doublons évidents.", score: 1 },
          { text: "Je demande à la DSI quelle est la bonne pratique.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "likert",
        text: "Vous nettoyez régulièrement vos données dupliquées et inutiles pour réduire votre empreinte numérique.",
        tags: ["ressources", "stockage données"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous avez une idée pour réduire significativement les déchets ou la consommation de ressources dans votre équipe.",
        tags: ["ressources", "idée amélioration"],
        answers: [
          { text: "Je la garde pour moi — ce n'est pas à moi de lancer des initiatives.", score: 0 },
          { text: "Je la propose concrètement avec un plan d'action simple.", score: 2 },
          { text: "J'en parle informellement à un collègue.", score: 1 },
          { text: "Je l'inclus dans le bilan annuel de l'équipe.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La préservation des ressources matérielles et numériques n'est pas encore intégrée dans vos pratiques", desc: "Ne pas relancer la maintenance, ne pas basculer sur le numérique quand c'est possible, ne pas mutualiser les équipements peu utilisés, accumuler des données en double sans vérification : ces comportements consomment inutilement des ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous préservez les ressources matérielles mais la mutualisation et les données numériques sont encore insuffisantes", desc: "Vous relancez la maintenance et réduisez le papier. Mais proposer de mutualiser vos équipements peu utilisés, regrouper vos commandes, vérifier la redondance de vos données : votre gestion des ressources est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vous préservez activement les ressources — mutualisation, commandes groupées, données, maintenance", desc: "Vous relancez la maintenance non traitée. Vous proposez de mutualiser les équipements. Vous regroupez vos commandes. Vous nettoyez les données en double. Vous passez au numérique quand c'est possible. Cette préservation active des ressources — qui suppose de questionner les automatismes de consommation — est ce qui réduit l'empreinte structurelle." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous organisez un événement d'équipe. Vous pouvez choisir entre une version avec beaucoup de déchets et une version plus sobre.",
        tags: ["déchets", "événement"],
        answers: [
          { text: "Je choisis l'option habituelle — l'événement doit être agréable.", score: 0 },
          { text: "Je choisis la version sobre sans compromettre la qualité de l'événement.", score: 2 },
          { text: "Je propose aux participants de voter entre les deux versions.", score: 1 },
          { text: "Je réduis certains aspects mais maintiens les éléments essentiels.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "likert",
        text: "Quand vous organisez des événements professionnels, vous choisissez des formats qui génèrent moins de déchets.",
        tags: ["déchets", "événements"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Vous sélectionnez un prestataire. Deux offres sont équivalentes mais l'un a une politique de réduction des déchets, l'autre non.",
        tags: ["déchets", "prestataires"],
        answers: [
          { text: "Je prends le moins cher ou le plus connu — la politique déchets n'est pas un critère.", score: 0 },
          { text: "Je favorise le prestataire avec la politique de réduction des déchets, à qualité égale.", score: 2 },
          { text: "Je mentionne ce critère mais je ne le pondère pas fortement.", score: 1 },
          { text: "Je demande à l'autre prestataire de s'aligner avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation emballe ses produits de façon excessive. Vous pouvez soulever le sujet.",
        tags: ["déchets", "suremballage client"],
        answers: [
          { text: "Je laisse — la décision d'emballage ne me concerne pas.", score: 0 },
          { text: "Je le remonte avec des exemples concrets d'alternatives.", score: 2 },
          { text: "Je teste une version moins emballée sur un projet pilote.", score: 1.5 },
          { text: "J'en parle à mon manager pour qu'il gère.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "En fin de projet, il reste des matériaux ou équipements inutilisés. La procédure standard est de les éliminer.",
        tags: ["déchets", "fin de projet"],
        answers: [
          { text: "Je suis la procédure standard sans la questionner.", score: 0 },
          { text: "Je cherche à valoriser ces matériaux avant de les éliminer — don, réemploi, revente.", score: 2 },
          { text: "Je trie au moins les matériaux éliminés.", score: 1 },
          { text: "Je remonte à la direction pour qu'une procédure de valorisation soit mise en place.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "likert",
        text: "En fin de projet, vous cherchez à valoriser les matériaux inutilisés plutôt que de les éliminer directement.",
        tags: ["déchets", "valorisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Vous utilisez des consommables jetables dans votre bureau — couverts, serviettes, bouteilles d'eau.",
        tags: ["déchets", "consommables bureau"],
        answers: [
          { text: "Je continue — les consommables jetables sont une norme au bureau.", score: 0 },
          { text: "Je les remplace par des alternatives durables — couverts réutilisables, gourde, serviettes en tissu.", score: 2 },
          { text: "Je réduis ma consommation sans les supprimer.", score: 1 },
          { text: "Je le fais uniquement si l'organisation fournit les alternatives.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas d'idée précise de la quantité de déchets que vous générez au bureau chaque semaine.",
        tags: ["déchets", "mesure"],
        answers: [
          { text: "Je laisse — mesurer ses déchets n'apporterait rien de concret.", score: 0 },
          { text: "J'observe pendant une semaine pour prendre conscience de mon volume réel.", score: 2 },
          { text: "Je fais confiance à mon estimation intuitive.", score: 0 },
          { text: "Je participe si l'organisation organise une mesure collective.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez à avoir une idée concrète de la quantité de déchets que vous générez pour mieux les réduire.",
        tags: ["déchets", "prise de conscience"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe génère collectivement beaucoup de déchets. Vous vous demandez si vous devez en parler.",
        tags: ["déchets", "collectif"],
        answers: [
          { text: "Je laisse — c'est à chacun de gérer ses propres déchets.", score: 0 },
          { text: "J'aborde le sujet en équipe avec des propositions concrètes.", score: 2 },
          { text: "J'adopte moi-même des pratiques visibles pour créer une dynamique.", score: 1.5 },
          { text: "Je mets des panneaux de sensibilisation dans l'espace commun.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne cherchez pas encore à valoriser les matériaux en fin de vie ou à influencer les pratiques collectives", desc: "Suivre la procédure standard d'élimination en fin de projet sans chercher à valoriser, ne pas intégrer les critères déchets dans la sélection des prestataires, ne pas remonter les excès d'emballage : ces comportements laissent des gains collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous valorisez en fin de projet mais l'influence sur les pratiques collectives et les prestataires est encore limitée", desc: "Vous cherchez à valoriser en fin de projet et vous raisonnez sur les événements. Mais remonter les excès d'emballage avec des solutions, favoriser les prestataires avec une politique déchets, aborder le sujet en équipe avec des propositions : votre contribution collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez à la réduction collective — valorisation fin de projet, prestataires, remontées", desc: "Vous valorisez les matériaux de fin de projet. Vous favorisez les prestataires avec une politique déchets. Vous remontez les excès d'emballage. Vous abordez les déchets collectifs en équipe. Vous mesurez votre impact et utilisez les résultats. Cette contribution au-delà de votre périmètre direct est ce qui multiplie l'impact." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous devez acheter un équipement professionnel. Vous ne savez pas si l'organisation a une politique d'achat responsable.",
        tags: ["ressources", "achat responsable perso"],
        answers: [
          { text: "J'achète le plus performant sans considération environnementale.", score: 0 },
          { text: "Je me renseigne sur la politique d'achat de l'organisation avant de décider.", score: 2 },
          { text: "J'intègre l'impact environnemental dans mes critères même sans politique formelle.", score: 2 },
          { text: "Je prends l'option la moins chère.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "likert",
        text: "Vous intégrez des critères environnementaux dans vos achats professionnels, même sans politique formelle de l'organisation.",
        tags: ["ressources", "achat"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "choix",
        text: "Vous avez réduit significativement vos déchets grâce à une méthode simple. Vos collègues ne le savent pas.",
        tags: ["ressources", "partage retours"],
        answers: [
          { text: "Je laisse — c'est mon choix personnel.", score: 0 },
          { text: "Je le partage naturellement si ça peut les aider.", score: 2 },
          { text: "Je l'affiche dans l'espace commun.", score: 1.5 },
          { text: "Je l'intègre dans une communication lors d'une réunion.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation a lancé un défi 'zéro déchet' pendant un mois. Il se termine cette semaine.",
        tags: ["ressources", "durabilité engagement"],
        answers: [
          { text: "Je reviens à mes habitudes — les défis ne sont pas faits pour durer.", score: 0 },
          { text: "Je garde les habitudes qui m'ont été naturelles et je continue à les tenir.", score: 2 },
          { text: "Je garde toutes mes nouvelles habitudes par principe.", score: 1 },
          { text: "Je continue pendant encore un mois pour consolider.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation propose de calculer votre empreinte déchets. Ça prendrait 30 minutes.",
        tags: ["ressources", "impact mesurable"],
        answers: [
          { text: "Je refuse — 30 minutes est trop long pour quelque chose qui ne changera rien.", score: 0 },
          { text: "Je participe et j'utilise les résultats pour identifier mes points d'amélioration.", score: 2 },
          { text: "Je participe par obligation.", score: 0.5 },
          { text: "Je participe si tout le monde le fait.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "likert",
        text: "Vous participez aux initiatives de mesure de l'impact environnemental proposées par votre organisation.",
        tags: ["ressources", "mesure impact"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "choix",
        text: "Des obstacles structurels — manque de bacs de tri, pas de politique de réemploi — vous empêchent de réduire vos déchets.",
        tags: ["ressources", "obstacles structure"],
        answers: [
          { text: "J'abandonne — sans infrastructure, mes efforts sont inutiles.", score: 0 },
          { text: "Je remonte les obstacles avec des propositions concrètes d'infrastructure.", score: 2 },
          { text: "Je fais ce qui est possible dans les contraintes existantes.", score: 1 },
          { text: "Je cherche des alternatives créatives dans les contraintes existantes.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "choix",
        text: "Une formation sur la réduction des déchets au bureau est proposée. Elle dure deux heures.",
        tags: ["ressources", "formation"],
        answers: [
          { text: "Je n'y vais pas — je connais déjà les bases.", score: 0 },
          { text: "Je participe — il y a toujours quelque chose de nouveau à apprendre.", score: 2 },
          { text: "Je participe si la formation semble concrète et non théorique.", score: 1 },
          { text: "Je consulte le support après coup.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "likert",
        text: "Vous participez aux formations et initiatives sur la réduction des déchets proposées par votre organisation.",
        tags: ["ressources", "apprentissage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation cherche des référents RSE dans chaque équipe. Vous hésitez à vous proposer.",
        tags: ["ressources", "ambassadeur"],
        answers: [
          { text: "Je ne me propose pas — ce n'est pas mon rôle.", score: 0 },
          { text: "Je me propose si le sujet me tient à cœur.", score: 2 },
          { text: "Je recommande un collègue plus engagé.", score: 1 },
          { text: "Je soutiens le référent qui sera nommé.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement dans la réduction des déchets est ponctuel et non durable", desc: "Revenir aux habitudes après les défis, ne pas mesurer son impact, abandonner face aux obstacles structurels sans les remonter : ces comportements font de la réduction des déchets un effort conjoncturel." },
          moyen: { label: "Pratiques en développement", titre: "Vos engagements sont relativement durables mais leur périmètre et votre contribution aux obstacles structurels sont insuffisants", desc: "Vous maintenez les gestes naturels après les défis. Mais participer aux mesures d'impact pour progresser, remonter les obstacles structurels, vous proposer comme référent RSE : votre contribution à la démarche collective est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est durable, mesuré et vous contribuez à lever les obstacles structurels", desc: "Vous maintenez les gestes qui fonctionnent après les défis. Vous participez aux mesures d'impact. Vous remontez les obstacles structurels avec des solutions. Vous partagez vos bonnes pratiques. Vous vous proposez comme référent RSE si le sujet vous tient à cœur. Cet engagement durable et systémique est ce qui fait progresser l'organisation." },
        },
      }
    ],

  },

  "achats-responsables": {
    0: [
      {
        type: "choix",
        text: "Une nouvelle version d'un logiciel est disponible. Votre version actuelle couvre tous vos besoins.",
        tags: ["achats", "besoin réel"],
        answers: [
          { text: "Je mets à jour automatiquement — rester à jour est une bonne pratique.", score: 0 },
          { text: "Je vérifie si la nouvelle version apporte quelque chose d'utile avant de décider.", score: 2 },
          { text: "Je mets à jour si tout le monde le fait.", score: 0 },
          { text: "Je mets à jour uniquement en cas de faille de sécurité.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez commander un équipement neuf ou louer celui d'une autre équipe pour un projet ponctuel.",
        tags: ["achats", "sobriété achat"],
        answers: [
          { text: "Je commande le neuf — plus pratique et disponible immédiatement.", score: 0 },
          { text: "Je loue ou emprunte l'équipement existant — l'achat neuf n'est pas justifié.", score: 2 },
          { text: "Je loue si le délai est compatible avec mon projet.", score: 1.5 },
          { text: "Je vérifie d'abord le coût comparé avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "likert",
        text: "Avant tout achat, vous questionnez si l'acquisition est vraiment nécessaire ou si une alternative existe.",
        tags: ["achats", "questionnement besoin"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "choix",
        text: "Deux fournisseurs proposent des offres comparables. L'un publie un rapport RSE détaillé, l'autre non.",
        tags: ["achats", "critères RSE"],
        answers: [
          { text: "Je prends le moins cher — le rapport RSE n'est souvent que du marketing.", score: 0 },
          { text: "Je favorise celui qui publie un rapport RSE, à conditions équivalentes.", score: 2 },
          { text: "Je note ce critère mais je ne lui donne pas de poids décisif.", score: 1 },
          { text: "Je demande au fournisseur sans rapport RSE de me fournir des éléments équivalents.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez choisir entre un fournisseur local à qualité équivalente et un fournisseur lointain moins cher de 5%.",
        tags: ["achats", "local"],
        answers: [
          { text: "Je prends le moins cher — 5% c'est significatif sur un budget d'achat.", score: 0 },
          { text: "Je favorise le fournisseur local si l'écart est raisonnable.", score: 2 },
          { text: "Je dépend de la politique de l'organisation sur ce sujet.", score: 1 },
          { text: "Je compare les deux en incluant l'empreinte transport.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "likert",
        text: "À qualité et prix raisonnablement comparables, vous favorisez les fournisseurs locaux.",
        tags: ["achats", "local"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "choix",
        text: "Vous achetez régulièrement des consommables de mauvaise qualité qui durent peu et doivent être renouvelés souvent.",
        tags: ["achats", "durée vie"],
        answers: [
          { text: "Je continue — le prix unitaire est plus faible.", score: 0 },
          { text: "Je passe à des versions plus durables même si le prix unitaire est plus élevé.", score: 2 },
          { text: "Je compare le coût total sur la durée de vie avant de décider.", score: 2 },
          { text: "Je cherche un compromis entre qualité et prix.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "choix",
        text: "Vous devez acheter un ordinateur. Une option reconditionnée existe à 30% moins cher.",
        tags: ["achats", "refurbished"],
        answers: [
          { text: "Je prends le neuf — le reconditionné peut avoir des problèmes.", score: 0 },
          { text: "Je prends le reconditionné si la garantie est suffisante.", score: 2 },
          { text: "Je compare les deux avant de décider.", score: 1.5 },
          { text: "Je demande à la DSI son avis avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "likert",
        text: "Vous considérez les équipements reconditionnés comme une option sérieuse pour vos achats professionnels.",
        tags: ["achats", "reconditionné"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez acheter en plus grande quantité pour obtenir une remise, ce qui entraîne du stockage et potentiellement des pertes.",
        tags: ["achats", "volume"],
        answers: [
          { text: "Je prends la plus grande quantité — la remise est trop avantageuse.", score: 0 },
          { text: "J'achète ce dont j'ai besoin en évitant le sur-stock même si la remise est attractive.", score: 2 },
          { text: "Je calcule si la remise compense le risque de perte.", score: 1.5 },
          { text: "Je partage la commande avec d'autres équipes pour profiter de la remise sans sur-stock.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions d'achat sont guidées par le prix et la commodité, sans critères environnementaux", desc: "Acheter neuf sans chercher à louer ou emprunter, renouveler les équipements fonctionnels au premier cycle, prendre le fournisseur sans rapport RSE, ignorer les options reconditionnées : ces comportements ne font pas entrer le critère environnemental dans la décision d'achat." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez certains critères RSE dans vos achats mais les critères locaux, de durée de vie et reconditionnés sont encore insuffisants", desc: "Vous questionnez le besoin avant d'acheter et vous favorisez les options éco-labellisées. Mais favoriser les fournisseurs locaux à qualité comparable, comparer le coût total sur la durée de vie, considérer le reconditionné comme option sérieuse, acheter uniquement ce dont vous avez besoin en évitant le sur-stock : ces critères sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vos décisions d'achat intègrent systématiquement les critères environnementaux — local, durée de vie, reconditionné, RSE fournisseur", desc: "Vous questionnez le besoin avant tout achat. Vous louez ou empruntez pour les besoins ponctuels. Vous considérez le reconditionné sérieusement. Vous favorisez les fournisseurs avec rapport RSE et les locaux à conditions comparables. Vous comparez le coût total sur la durée de vie. Vous achetez la quantité juste sans sur-stock. Cette prise en compte systématique des critères environnementaux dans tous les achats est ce qui crée un impact collectif réel." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous utilisez une salle de réunion de grande capacité pour une réunion de 3 personnes parce qu'elle était disponible.",
        tags: ["usage", "partage ressource"],
        answers: [
          { text: "Je laisse — c'était la seule disponible ou la plus pratique.", score: 0.5 },
          { text: "Je cherche une salle adaptée à la taille réelle du groupe.", score: 2 },
          { text: "Je prends la grande salle uniquement si les petites sont réservées.", score: 1 },
          { text: "Je fais la réunion en visio pour éviter la question.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous choisissez les ressources adaptées à vos besoins réels plutôt que les plus grandes disponibles.",
        tags: ["usage", "ressources adaptées"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "choix",
        text: "Votre choix d'achat le moins cher implique une logistique complexe qui génère de nombreux allers-retours.",
        tags: ["usage", "coûts cachés"],
        answers: [
          { text: "Je laisse — le prix initial est ce qui compte pour mon budget.", score: 0 },
          { text: "J'intègre les coûts logistiques complets dans ma comparaison.", score: 2 },
          { text: "Je mentionne la logistique à mon responsable.", score: 1 },
          { text: "Je cherche un fournisseur avec une meilleure logistique au même prix.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous signez un contrat avec un prestataire pour deux ans sans inclure de clause d'évaluation environnementale.",
        tags: ["usage", "durée contrat"],
        answers: [
          { text: "Je laisse — les clauses environnementales ne sont pas standard.", score: 0 },
          { text: "Je demande l'ajout d'une clause de performance environnementale.", score: 2 },
          { text: "Je mentionne les attentes environnementales sans les formaliser.", score: 1 },
          { text: "Je le note pour le prochain renouvellement de contrat.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation est tentée par de nouveaux équipements dernier cri alors que les équipements actuels sont fonctionnels.",
        tags: ["usage", "obsolescence"],
        answers: [
          { text: "Je laisse — l'organisation décide de ses investissements.", score: 0 },
          { text: "Je questionne le besoin réel avant que la décision soit prise.", score: 2 },
          { text: "Je propose d'évaluer l'utilisation des équipements actuels avant d'investir.", score: 2 },
          { text: "Je suggère de faire une analyse coût-bénéfice incluant le critère environnemental.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous questionnez le renouvellement des équipements fonctionnels avant que la décision d'achat soit prise.",
        tags: ["usage", "prolongation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "choix",
        text: "Lors de l'achat d'équipements, vous ne regardez pas leur consommation énergétique.",
        tags: ["usage", "consommation eau énergie"],
        answers: [
          { text: "Je laisse — la consommation se gère à l'usage.", score: 0 },
          { text: "Je compare la consommation énergétique lors de l'achat.", score: 2 },
          { text: "Je regarde le label énergétique mais ce n'est pas décisif.", score: 1 },
          { text: "Je cherche les données de consommation mais elles sont souvent difficiles à comparer.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "choix",
        text: "Vos équipements en fin de vie sont jetés sans vérifier s'il existe des filières de collecte spécifiques.",
        tags: ["usage", "fin de vie"],
        answers: [
          { text: "Je jette — c'est plus simple.", score: 0 },
          { text: "Je cherche les filières de collecte adaptées — DEEE, cartouches, piles.", score: 2 },
          { text: "Je trie ce que je connais — piles, cartouches — et je jette le reste.", score: 1 },
          { text: "Je demande à la DSI ou au service général de gérer.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous utilisez les filières de collecte adaptées pour les équipements en fin de vie.",
        tags: ["usage", "fin de vie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas d'idée de l'impact environnemental des achats que vous effectuez dans votre fonction.",
        tags: ["usage", "impact achat"],
        answers: [
          { text: "Je laisse — l'impact de mes achats est géré par l'organisation.", score: 0 },
          { text: "Je cherche à comprendre quels sont les postes d'achat les plus impactants pour prioriser.", score: 2 },
          { text: "Je présume que les achats les plus chers sont les plus impactants.", score: 0 },
          { text: "Je demande au service RSE de me donner cette information.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'usage de vos ressources n'intègre pas encore les critères de sobriété et de durabilité", desc: "Prendre la grande salle de réunion par commodité, ne pas intégrer la consommation énergétique dans l'achat d'équipements, ne pas utiliser les filières de collecte en fin de vie : ces comportements créent un impact évitable sur les ressources." },
          moyen: { label: "Pratiques en développement", titre: "Vous adaptez vos usages mais l'évaluation des coûts complets et les fins de vie sont encore des angles morts", desc: "Vous choisissez les ressources adaptées à votre besoin réel. Mais intégrer la consommation énergétique dans l'achat d'équipements, utiliser systématiquement les filières de collecte en fin de vie, questionner le renouvellement des équipements fonctionnels : ces comportements sont encore partiels." },
          haut: { label: "Réflexes installés", titre: "Vous adaptez vos usages aux besoins réels et traitez les fins de vie correctement", desc: "Vous choisissez les ressources adaptées à votre besoin. Vous intégrez la consommation énergétique dans vos achats d'équipements. Vous utilisez les filières de collecte en fin de vie. Vous questionnez le renouvellement des équipements fonctionnels. Vous intégrez les coûts logistiques dans votre comparaison. Cette sobriété dans l'usage — qui s'applique du premier jour jusqu'à la fin de vie — est ce qui réduit l'empreinte sur toute la durée." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Votre principal fournisseur ne publie pas d'information sur son impact environnemental.",
        tags: ["fournisseurs", "dialogue"],
        answers: [
          { text: "Je laisse — ce n'est pas mon rôle d'exiger des informations RSE à mes fournisseurs.", score: 0 },
          { text: "Je lui demande des informations sur ses pratiques environnementales.", score: 2 },
          { text: "Je cherche ces informations sur ses publications disponibles.", score: 1 },
          { text: "Je le remonte aux achats pour qu'ils gèrent.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "likert",
        text: "Vous demandez des informations environnementales à vos fournisseurs si elles ne sont pas disponibles.",
        tags: ["fournisseurs", "dialogue"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes sur le point de renouveler un contrat fournisseur. Vous n'avez pas évalué sa performance environnementale sur la période.",
        tags: ["fournisseurs", "évaluation"],
        answers: [
          { text: "Je renouvelle — si la qualité est bonne, l'environnement n'est pas un critère de renouvellement.", score: 0 },
          { text: "J'inclus une évaluation de la performance environnementale dans mon bilan de fin de contrat.", score: 2 },
          { text: "Je mentionne l'environnement lors des discussions de renouvellement.", score: 1 },
          { text: "Je le fais si l'organisation a une politique formelle sur ce sujet.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Votre fournisseur propose une solution moins impactante qui nécessite que vous adaptiez légèrement votre façon de travailler.",
        tags: ["fournisseurs", "co-construction"],
        answers: [
          { text: "Je refuse — adapter mes pratiques dépasse le cadre de la relation fournisseur.", score: 0 },
          { text: "J'évalue l'adaptation demandée — si elle est raisonnable, j'accepte.", score: 2 },
          { text: "Je refuse dans l'immédiat mais j'en discute avec mon équipe.", score: 1 },
          { text: "Je demande au fournisseur de trouver une solution qui ne m'impose pas d'adaptation.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Votre fournisseur préféré a des pratiques sociales ou environnementales douteuses. Vous avez une relation de longue date.",
        tags: ["fournisseurs", "pression"],
        answers: [
          { text: "Je continue la relation — la qualité et la relation prime.", score: 0 },
          { text: "J'aborde directement le sujet et je lui fais savoir que ces pratiques sont un facteur dans ma décision.", score: 2 },
          { text: "Je cherche discrètement des alternatives sans lui dire pourquoi.", score: 0.5 },
          { text: "Je remonte le problème aux achats pour qu'ils gèrent la relation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "likert",
        text: "Vous utilisez votre relation avec vos fournisseurs pour les encourager à améliorer leurs pratiques environnementales.",
        tags: ["fournisseurs", "pression positive"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Un nouveau fournisseur propose une solution plus innovante et moins impactante mais nécessite une période de test.",
        tags: ["fournisseurs", "innovation"],
        answers: [
          { text: "Je m'en tiens à mon fournisseur habituel — le risque n'est pas justifié.", score: 0 },
          { text: "Je teste la solution sur un projet pilote avant de décider.", score: 2 },
          { text: "Je le soumets à l'organisation pour que la décision soit collective.", score: 1 },
          { text: "Je continue avec mon fournisseur actuel mais je reste attentif à l'évolution.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Vous ne savez pas si vos fournisseurs respectent les normes sociales minimales dans leur chaîne de production.",
        tags: ["fournisseurs", "transparence"],
        answers: [
          { text: "Je laisse — ces informations ne sont pas accessibles.", score: 0 },
          { text: "Je cherche à obtenir des informations sur les conditions de production.", score: 2 },
          { text: "Je m'appuie sur les certifications disponibles comme proxy.", score: 1.5 },
          { text: "Je remonte ce sujet aux achats de l'organisation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez à vous informer sur les conditions sociales et environnementales dans la chaîne de production de vos fournisseurs clés.",
        tags: ["fournisseurs", "chaîne valeur"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "La politique d'achat de votre organisation n'inclut pas de critères RSE. Vous avez une marge de décision.",
        tags: ["fournisseurs", "politique interne"],
        answers: [
          { text: "J'applique les critères standard — les critères RSE ne sont pas dans ma feuille de route.", score: 0 },
          { text: "J'intègre des critères RSE dans mes propres décisions d'achat même sans politique formelle.", score: 2 },
          { text: "Je propose à l'organisation d'inclure des critères RSE dans sa politique d'achat.", score: 2 },
          { text: "J'attends que la politique évolue avant d'agir.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre relation avec les fournisseurs est transactionnelle sans dimension environnementale", desc: "Ne pas demander d'informations environnementales aux fournisseurs, renouveler les contrats sans bilan environnemental, ne pas utiliser la relation pour encourager les améliorations : ces comportements traitent les achats comme une transaction sans dimension de valeur." },
          moyen: { label: "Pratiques en développement", titre: "Vous dialoguez avec vos fournisseurs sur l'environnement mais votre influence active est encore limitée", desc: "Vous demandez des informations environnementales à vos fournisseurs. Mais évaluer la performance environnementale lors du renouvellement des contrats, utiliser la relation pour encourager les améliorations, tester les solutions innovantes plus responsables : votre influence active est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez activement votre relation fournisseurs pour améliorer les pratiques et inclure les critères RSE dans les contrats", desc: "Vous demandez des informations environnementales aux fournisseurs. Vous évaluez la performance environnementale lors des renouvellements. Vous utilisez la relation pour encourager les améliorations. Vous incluez des clauses environnementales dans les contrats. Vous testez les solutions innovantes plus responsables. Cette influence active sur la chaîne d'approvisionnement est ce qui crée un levier bien au-delà de votre consommation directe." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous êtes prescripteur dans votre organisation — vos recommandations influencent les achats de vos collègues.",
        tags: ["achats responsables", "influence"],
        answers: [
          { text: "Je recommande les meilleures options sans critère environnemental.", score: 0 },
          { text: "J'intègre systématiquement les critères environnementaux dans mes recommandations.", score: 2 },
          { text: "Je mentionne les options plus responsables sans les imposer.", score: 1 },
          { text: "Je recommande les options responsables uniquement si la qualité est équivalente.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "likert",
        text: "En tant que prescripteur, vous intégrez les critères environnementaux dans vos recommandations d'achat.",
        tags: ["achats responsables", "prescripteur"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "choix",
        text: "Vous ne savez pas vraiment ce que signifient les labels environnementaux sur les produits que vous achetez.",
        tags: ["achats responsables", "formation"],
        answers: [
          { text: "Je laisse — les labels sont souvent du greenwashing.", score: 0 },
          { text: "Je me forme pour comprendre quels labels sont pertinents dans mon contexte.", score: 2 },
          { text: "Je fais confiance aux labels des organisations reconnues.", score: 1 },
          { text: "Je demande aux achats de me donner une liste de labels fiables.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "choix",
        text: "Vous n'évaluez jamais l'impact de vos choix d'achat sur les indicateurs RSE de votre organisation.",
        tags: ["achats responsables", "bilan"],
        answers: [
          { text: "Je laisse — c'est le service RSE qui suit ces indicateurs.", score: 0 },
          { text: "Je cherche à comprendre comment mes achats contribuent aux objectifs RSE.", score: 2 },
          { text: "Je regarde les indicateurs globaux sans les relier à mes achats.", score: 0.5 },
          { text: "Je le fais lors du bilan annuel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "choix",
        text: "Vous avez trouvé un fournisseur plus responsable et de qualité équivalente. Vos collègues utilisent encore l'ancien.",
        tags: ["achats responsables", "partage"],
        answers: [
          { text: "Je laisse — chacun fait ses propres choix d'achat.", score: 0 },
          { text: "Je partage mon expérience avec mes collègues pour qu'ils puissent décider.", score: 2 },
          { text: "Je le transmets aux achats pour une adoption plus large.", score: 1.5 },
          { text: "Je l'affiche dans l'espace commun.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "likert",
        text: "Vous partagez vos découvertes de fournisseurs ou produits plus responsables avec vos collègues.",
        tags: ["achats responsables", "partage bonnes pratiques"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation n'a pas de politique d'achats responsables. Vous pourriez contribuer à en créer une.",
        tags: ["achats responsables", "politique"],
        answers: [
          { text: "Je laisse — créer une politique dépasse mon rôle.", score: 0 },
          { text: "Je propose de contribuer à l'élaboration d'une politique si on me le demande.", score: 1.5 },
          { text: "Je propose spontanément de contribuer même sans qu'on me le demande.", score: 2 },
          { text: "J'attends que quelqu'un d'autre prenne l'initiative.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "choix",
        text: "Un achat responsable coûte 15% plus cher que l'alternative standard. Votre budget est serré.",
        tags: ["achats responsables", "compromis"],
        answers: [
          { text: "Je prends le moins cher — le budget est prioritaire.", score: 0 },
          { text: "Je cherche à justifier le surcoût par les bénéfices à long terme ou je remonte le besoin de budget.", score: 2 },
          { text: "Je demande à mon responsable d'arbitrer.", score: 1 },
          { text: "Je prends l'option responsable et j'assume le dépassement de budget.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "likert",
        text: "Quand un achat responsable est plus cher, vous cherchez à justifier le surcoût plutôt que d'y renoncer automatiquement.",
        tags: ["achats responsables", "argumentation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      },
      {
        type: "choix",
        text: "Vous avez pris de bonnes résolutions d'achats responsables en début d'année. En juin, vous revenez à vos habitudes.",
        tags: ["achats responsables", "durabilité engagement"],
        answers: [
          { text: "C'est normal — les bonnes résolutions sont difficiles à tenir.", score: 0 },
          { text: "Je cherche à installer des routines durables plutôt que des résolutions ponctuelles.", score: 2 },
          { text: "Je me fixe des objectifs trimestriels plutôt qu'annuels.", score: 1.5 },
          { text: "Je crée des rappels pour maintenir mes nouvelles pratiques.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos achats responsables sont ponctuels et ne s'inscrivent pas dans une démarche durable", desc: "Revenir aux habitudes après les résolutions de début d'année, ne pas partager les bonnes découvertes de fournisseurs, attendre une politique formelle avant d'agir : ces comportements font des achats responsables un effort ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais votre contribution systémique est encore insuffisante", desc: "Vous maintenez vos pratiques et partagez vos découvertes. Mais contribuer à l'élaboration d'une politique d'achats responsables, argumenter pour des achats responsables plus chers plutôt que d'y renoncer, vous informer sur les labels pour décider de façon éclairée : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vos achats responsables sont durables, documentés et vous contribuez à diffuser les bonnes pratiques", desc: "Vous maintenez vos pratiques dans la durée. Vous partagez vos découvertes de fournisseurs responsables. Vous contribuez à l'élaboration de politiques d'achats. Vous argumentez pour les surcoûts justifiés. Vous vous informez sur les labels. Vous intégrez les critères RSE même sans politique formelle. Cet engagement durable et contributif est ce qui fait évoluer les pratiques collectives d'achat." },
        },
      }
    ],

  },

  "manager-transition": {
    0: [
      {
        type: "choix",
        text: "Vous demandez à votre équipe de trier les déchets mais votre propre bureau est désorganisé et vos pratiques peu rigoureuses.",
        tags: ["manager RSE", "exemplarité"],
        answers: [
          { text: "Je laisse — ce que je demande et ce que je fais sont deux registres différents.", score: 0 },
          { text: "J'aligne mes propres pratiques avant de demander des changements à mon équipe.", score: 2 },
          { text: "Je reconnais l'incohérence mais j'agis sur les deux en parallèle.", score: 1.5 },
          { text: "Je demande à l'équipe de ne pas me prendre comme exemple.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "choix",
        text: "Votre direction vous demande des résultats rapides qui entrent en tension avec les pratiques environnementales que vous essayez d'installer.",
        tags: ["manager RSE", "injonctions"],
        answers: [
          { text: "Je priorise les résultats — les exigences de la direction passent avant.", score: 0 },
          { text: "J'exprime la tension à ma direction et je cherche une approche qui concilie les deux.", score: 2 },
          { text: "Je maintiens les pratiques environnementales même si ça ralentit légèrement.", score: 1.5 },
          { text: "Je laisse l'équipe décider de ses priorités.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "likert",
        text: "Vos comportements environnementaux personnels sont cohérents avec ce que vous demandez à votre équipe.",
        tags: ["manager RSE", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe n'a jamais l'occasion de parler de sujets environnementaux. Personne ne soulève ces questions.",
        tags: ["manager RSE", "espace parole"],
        answers: [
          { text: "Je laisse — si personne ne soulève le sujet, c'est que ça ne les intéresse pas.", score: 0 },
          { text: "Je crée un espace dans nos temps d'équipe pour ces questions.", score: 2 },
          { text: "J'aborde le sujet lors des entretiens individuels.", score: 1 },
          { text: "Je les encourage à participer aux initiatives RSE de l'organisation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "choix",
        text: "Les objectifs de votre équipe ne comprennent aucune dimension environnementale.",
        tags: ["manager RSE", "objectifs"],
        answers: [
          { text: "Je laisse — les objectifs environnementaux relèvent de la direction RSE.", score: 0 },
          { text: "Je propose d'intégrer des objectifs environnementaux adaptés à notre activité.", score: 2 },
          { text: "Je mentionne l'environnement informellement sans en faire un objectif formel.", score: 1 },
          { text: "J'attends que la direction décide d'inclure des objectifs RSE.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "likert",
        text: "Vous proposez d'intégrer des dimensions environnementales dans les objectifs de votre équipe.",
        tags: ["manager RSE", "objectifs"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe manque de temps et de ressources pour mettre en place de bonnes pratiques environnementales.",
        tags: ["manager RSE", "ressources"],
        answers: [
          { text: "Je laisse — sans ressources dédiées, ce n'est pas réaliste.", score: 0 },
          { text: "Je cherche à intégrer ces pratiques dans les processus existants plutôt que d'y dédier des ressources séparées.", score: 2 },
          { text: "Je remonte le besoin de ressources à ma direction.", score: 1.5 },
          { text: "Je mobilise les personnes volontaires dans l'équipe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur prend des initiatives environnementales intéressantes. Vous ne les valorisez pas.",
        tags: ["manager RSE", "valorisation"],
        answers: [
          { text: "Je laisse — valoriser des initiatives non demandées crée des inégalités.", score: 0 },
          { text: "Je les valorise explicitement pour encourager ce type de comportement.", score: 2 },
          { text: "Je les mentionne dans l'évaluation annuelle.", score: 1 },
          { text: "Je les partage avec l'équipe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "likert",
        text: "Vous valorisez explicitement les initiatives environnementales de vos collaborateurs.",
        tags: ["manager RSE", "valorisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      },
      {
        type: "choix",
        text: "Une partie de votre équipe est résistante aux pratiques environnementales. Elle les perçoit comme une contrainte supplémentaire.",
        tags: ["manager RSE", "résistance"],
        answers: [
          { text: "Je laisse — la contrainte est réelle et il ne faut pas imposer.", score: 0 },
          { text: "Je cherche à comprendre les résistances et à trouver des approches qui réduisent la contrainte perçue.", score: 2 },
          { text: "Je mobilise les membres volontaires pour créer une dynamique.", score: 1.5 },
          { text: "Je maintiens les exigences sans chercher à convaincre.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité et votre posture de management de la transition environnementale sont encore peu développées", desc: "Demander à l'équipe de trier sans aligner ses propres pratiques, prioriser les résultats face aux tensions sans chercher à concilier, ne pas valoriser les initiatives de collaborateurs engagés, ne pas créer d'espace pour que les questions environnementales soient soulevées : ces comportements privent votre équipe du signal managérial dont elle a besoin." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la transition mais la gestion des résistances et l'ancrage structurel sont encore insuffisants", desc: "Vous êtes exemplaire et vous valorisez les initiatives. Mais gérer les résistances en cherchant à comprendre et réduire la contrainte perçue, ancrer les pratiques dans les processus pour qu'elles tiennent sans vous, gérer les signaux contradictoires de la direction : votre gestion des obstacles est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez la transition et gérez les résistances avec une approche ancrée dans les processus collectifs", desc: "Vos pratiques personnelles sont alignées sur ce que vous demandez. Vous exprimez les tensions aux résultats et cherchez à les concilier. Vous créez des espaces pour les questions environnementales. Vous gérez les résistances en cherchant à réduire la contrainte perçue. Vous ancrez les pratiques dans les processus pour qu'elles tiennent sans vous. Vous demandez des clarifications face aux signaux contradictoires. Cette exemplarité structurelle — qui ne se limite pas aux comportements visibles — est ce qui crée une équipe qui s'engage par contagion." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Votre équipe n'a pas les connaissances minimales sur l'impact environnemental de son activité.",
        tags: ["manager RSE", "formation"],
        answers: [
          { text: "Je laisse — les connaissances environnementales ne sont pas dans les fiches de poste.", score: 0 },
          { text: "Je cherche à développer ces connaissances dans l'équipe de façon pratique et concrète.", score: 2 },
          { text: "Je les dirige vers les ressources disponibles.", score: 1 },
          { text: "J'attends que l'organisation propose des formations.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "likert",
        text: "Vous développez les connaissances environnementales de votre équipe en lien avec son activité.",
        tags: ["manager RSE", "montée en compétences"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "choix",
        text: "Les processus de votre équipe pourraient être améliorés pour réduire leur impact environnemental sans perte de qualité.",
        tags: ["manager RSE", "processus"],
        answers: [
          { text: "Je laisse — les processus existent pour une raison et les modifier prend du temps.", score: 0 },
          { text: "Je lance une réflexion collective sur la façon d'améliorer les processus.", score: 2 },
          { text: "J'identifie et modifie les quick wins les plus simples.", score: 1.5 },
          { text: "Je le note pour une revue de processus future.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "choix",
        text: "Vous ne communiquez jamais sur les progrès environnementaux de votre équipe.",
        tags: ["manager RSE", "communication"],
        answers: [
          { text: "Je laisse — ce n'est pas le rôle d'une communication d'équipe.", score: 0 },
          { text: "Je communique régulièrement sur les progrès pour créer de la fierté collective.", score: 2 },
          { text: "Je communique lors des bilans annuels.", score: 0.5 },
          { text: "Je partage les bonnes pratiques sans donner de chiffres.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation met en avant des initiatives environnementales en communication mais elles sont surtout symboliques.",
        tags: ["manager RSE", "greenwashing"],
        answers: [
          { text: "Je m'aligne sur la communication — si c'est la politique de l'organisation, je la porte.", score: 0 },
          { text: "Je distingue ce qui est réel et mesurable de ce qui est symbolique dans ce que je communique.", score: 2 },
          { text: "J'évite de parler de RSE pour ne pas participer au greenwashing.", score: 0.5 },
          { text: "Je remonte le décalage à ma direction.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "likert",
        text: "Vous ne communiquez sur les actions environnementales de votre équipe que lorsqu'elles sont réelles et mesurables.",
        tags: ["manager RSE", "authenticité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "choix",
        text: "Vous voulez aller trop vite sur la transition environnementale de votre équipe. Vous créez de la résistance.",
        tags: ["manager RSE", "tempo"],
        answers: [
          { text: "Je maintiens le rythme — la transition ne peut pas attendre.", score: 0 },
          { text: "J'adapte le rythme aux capacités de l'équipe sans abandonner la direction.", score: 2 },
          { text: "Je ralentis et j'accepte un rythme de changement plus lent.", score: 1 },
          { text: "Je cherche à comprendre quelle part de la résistance est légitime.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "choix",
        text: "Votre direction envoie des signaux contradictoires sur les priorités environnementales.",
        tags: ["manager RSE", "signaux direction"],
        answers: [
          { text: "Je m'aligne sur les priorités opérationnelles — les contradictions sont gérées à la direction.", score: 0 },
          { text: "Je demande des clarifications sur les priorités réelles pour avoir un message cohérent.", score: 2 },
          { text: "Je protège les pratiques environnementales que j'ai installées même sans signal clair.", score: 1.5 },
          { text: "J'en parle à mon équipe avec transparence sur l'incertitude.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "likert",
        text: "Vous demandez des clarifications sur les priorités environnementales quand les signaux de la direction sont contradictoires.",
        tags: ["manager RSE", "clarté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      },
      {
        type: "choix",
        text: "Les bonnes pratiques environnementales de votre équipe ne tiennent que parce que vous les portez. Elles disparaissent quand vous êtes absent·e.",
        tags: ["manager RSE", "ancrage"],
        answers: [
          { text: "Je laisse — mon leadership est nécessaire pour maintenir ces pratiques.", score: 0 },
          { text: "Je travaille à les ancrer dans les processus et la culture collective pour qu'elles tiennent sans moi.", score: 2 },
          { text: "Je désigne des référents pour maintenir les pratiques en mon absence.", score: 1.5 },
          { text: "Je reconnais la dépendance et j'y travaille progressivement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'avez pas encore développé les compétences ni créé les conditions pour que la transition se fasse dans votre équipe", desc: "Ne pas développer les connaissances environnementales de l'équipe, ne pas mesurer l'impact de l'activité, laisser les pratiques dépendre uniquement de votre présence, ne pas aborder la dimension environnementale dans le recrutement : ces comportements ne créent pas les conditions structurelles de la transition." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des conditions pour la transition mais la mesure d'impact et la formation de l'équipe sont encore perfectibles", desc: "Vous créez des espaces de parole et vous proposez des objectifs environnementaux. Mais développer les connaissances environnementales de l'équipe sur son propre métier, mesurer l'impact de l'activité, s'appuyer sur les membres engagés pour créer une dynamique : ces conditions structurelles sont encore perfectibles." },
          haut: { label: "Réflexes installés", titre: "Vous avez créé les conditions structurelles — formation, mesure, dynamique, recrutement — pour que la transition tienne", desc: "Vous développez les connaissances environnementales de l'équipe sur son métier. Vous mesurez l'impact. Vous vous appuyez sur les membres engagés pour créer une dynamique. Vous intégrez la culture environnementale dans le recrutement. Vous évaluez sérieusement les idées de réduction d'impact. Ces conditions structurelles — qui supposent d'investir dans les compétences et les processus — sont ce qui crée une transition durable." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "L'activité principale de votre équipe a un impact environnemental significatif. C'est son cœur de métier.",
        tags: ["manager RSE", "dilemme impact activité"],
        answers: [
          { text: "Je laisse — si c'est le cœur de métier, je ne peux pas le remettre en question.", score: 0 },
          { text: "Je cherche à réduire l'impact dans les marges de manœuvre disponibles.", score: 2 },
          { text: "J'ouvre une réflexion sur des façons alternatives de faire le même métier.", score: 2 },
          { text: "Je travaille sur les impacts périphériques en laissant le cœur de métier.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez à réduire l'impact environnemental dans le cœur de métier de votre équipe et pas seulement dans ses marges.",
        tags: ["manager RSE", "réduction impact cœur métier"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "choix",
        text: "Vous ne mesurez pas l'impact environnemental des activités de votre équipe.",
        tags: ["manager RSE", "bilan équipe"],
        answers: [
          { text: "Je laisse — mesurer est trop complexe pour une équipe.", score: 0 },
          { text: "Je cherche les indicateurs simples et pertinents pour notre activité.", score: 2 },
          { text: "Je me base sur les indicateurs globaux de l'organisation.", score: 0.5 },
          { text: "Je demande au service RSE de nous aider à mesurer.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "choix",
        text: "Une partie de votre équipe est très engagée sur les sujets environnementaux. Une autre est indifférente.",
        tags: ["manager RSE", "motivation"],
        answers: [
          { text: "Je concentre mes efforts sur les indifférents pour les convaincre.", score: 0.5 },
          { text: "Je m'appuie sur les engagés pour créer une dynamique qui entraîne progressivement les autres.", score: 2 },
          { text: "Je traite les deux de la même façon sans chercher à différencier.", score: 1 },
          { text: "Je laisse chacun à son niveau d'engagement.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur propose une idée pour réduire l'impact environnemental de votre activité mais elle implique un investissement initial.",
        tags: ["manager RSE", "innovation"],
        answers: [
          { text: "Je refuse — ce n'est pas mon rôle de financer des initiatives RSE.", score: 0 },
          { text: "Je l'évalue sérieusement et j'aide à construire le business case si elle est prometteuse.", score: 2 },
          { text: "Je la remonte à la direction pour qu'elle décide.", score: 1 },
          { text: "Je la soutiens moralement sans prendre d'engagement.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "likert",
        text: "Vous évaluez sérieusement les idées d'amélioration environnementale de vos collaborateurs et vous aidez à les concrétiser.",
        tags: ["manager RSE", "innovation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "choix",
        text: "Votre reporting d'équipe ne comprend pas de dimension environnementale même si votre organisation a des objectifs RSE.",
        tags: ["manager RSE", "reporting"],
        answers: [
          { text: "Je laisse — le reporting est défini par la direction.", score: 0 },
          { text: "Je propose d'inclure des indicateurs environnementaux pertinents.", score: 2 },
          { text: "Je mentionne les progrès environnementaux en commentaire sans indicateur formel.", score: 1 },
          { text: "J'attends que la direction l'exige.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "choix",
        text: "Dans le processus de recrutement, la dimension environnementale n'est pas abordée avec les candidats.",
        tags: ["manager RSE", "candidature"],
        answers: [
          { text: "Je laisse — ce n'est pas un critère de recrutement.", score: 0 },
          { text: "J'intègre la culture environnementale de l'équipe dans la présentation du poste.", score: 2 },
          { text: "Je mentionne les engagements RSE de l'organisation.", score: 1 },
          { text: "Je cherche des candidats qui ont déjà une sensibilité à ces sujets.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "likert",
        text: "Vous intégrez la culture environnementale de l'équipe dans vos processus de recrutement.",
        tags: ["manager RSE", "recrutement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      },
      {
        type: "choix",
        text: "Vous ne faites jamais de bilan sur votre propre façon de manager la transition environnementale.",
        tags: ["manager RSE", "bilan personnel"],
        answers: [
          { text: "Je laisse — les résultats suffisent à évaluer.", score: 0 },
          { text: "Je prends régulièrement du recul sur ce qui fonctionne et ce qui mérite d'être amélioré.", score: 2 },
          { text: "Je le fais lors des entretiens annuels.", score: 0.5 },
          { text: "Je demande un feedback à mon équipe sur ce sujet.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La transition environnementale reste un sujet périphérique dans le management de votre équipe", desc: "Laisser le cœur de métier sans questionnement environnemental, ne pas intégrer les indicateurs RSE dans le reporting, ne pas évaluer les initiatives de collaborateurs, ne pas demander de clarifications face aux signaux contradictoires de la direction : ces comportements traitent l'environnement comme un sujet extérieur à votre gestion." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez l'environnement dans la gestion mais le cœur de métier et le reporting restent des angles morts", desc: "Vous communiquez sur les progrès et vous évitez le greenwashing. Mais questionner l'impact dans le cœur de métier, intégrer des indicateurs RSE dans le reporting, évaluer les idées innovantes de collaborateurs : l'environnement n'est pas encore pleinement intégré dans votre gestion." },
          haut: { label: "Réflexes installés", titre: "L'environnement est pleinement intégré dans votre gestion — cœur de métier, reporting, innovation, objectifs", desc: "Vous questionnez l'impact dans le cœur de métier. Vous proposez des indicateurs RSE dans le reporting. Vous évaluez les idées innovantes des collaborateurs. Vous intégrez l'environnement dans les objectifs. Vous adaptez le rythme aux capacités de l'équipe. Cette intégration complète dans la gestion — qui fait de l'environnement un critère de performance et non un sujet à part — est ce qui transforme les intentions en résultats." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre équipe adopte des pratiques environnementales par obligation mais sans compréhension ni conviction.",
        tags: ["manager RSE", "culture durable"],
        answers: [
          { text: "Je laisse — l'obligation produit les mêmes comportements que la conviction.", score: 0 },
          { text: "Je travaille à donner du sens aux pratiques pour que la conviction remplace progressivement l'obligation.", score: 2 },
          { text: "J'accepte l'obligation — le sens viendra avec le temps.", score: 1 },
          { text: "Je cherche à comprendre ce qui manque pour créer la conviction.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "likert",
        text: "Vous travaillez à donner du sens aux pratiques environnementales plutôt qu'à les imposer par obligation.",
        tags: ["manager RSE", "sens"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe a fait des progrès significatifs sur ses pratiques environnementales. Vous ne les célébrez pas.",
        tags: ["manager RSE", "célébrer"],
        answers: [
          { text: "Je laisse — célébrer des pratiques normales crée des attentes excessives.", score: 0 },
          { text: "Je les célèbre explicitement — la reconnaissance renforce les comportements.", score: 2 },
          { text: "Je les mentionne lors du bilan annuel.", score: 0.5 },
          { text: "Je les partage avec la direction pour valoriser l'équipe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "choix",
        text: "Une initiative environnementale de votre équipe n'a pas donné les résultats attendus. Vous n'en tirez pas de leçons.",
        tags: ["manager RSE", "apprentissage"],
        answers: [
          { text: "Je laisse — l'échec est suffisamment décourageant sans l'analyser.", score: 0 },
          { text: "Je prends le temps d'analyser pourquoi et d'en tirer des leçons pour la prochaine fois.", score: 2 },
          { text: "Je passe à une autre initiative sans analyser.", score: 0 },
          { text: "Je demande à l'équipe ce qu'elle en retient.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "choix",
        text: "Vous avez développé des approches de management de la transition environnementale qui fonctionnent bien. Vos collègues managers ne le savent pas.",
        tags: ["manager RSE", "pairs"],
        answers: [
          { text: "Je laisse — chaque manager doit trouver sa propre façon.", score: 0 },
          { text: "Je partage mes approches avec mes pairs managers.", score: 2 },
          { text: "Je le partage si on me le demande.", score: 1 },
          { text: "Je propose un atelier de partage de pratiques entre managers.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "likert",
        text: "Vous partagez vos approches de management de la transition environnementale avec vos pairs managers.",
        tags: ["manager RSE", "partage pairs"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "choix",
        text: "Vos pratiques environnementales d'équipe sont correctes mais sans ambition — vous vous contentez des minimums.",
        tags: ["manager RSE", "ambition"],
        answers: [
          { text: "Je laisse — les minimums suffisent.", score: 0 },
          { text: "Je cherche régulièrement à élever les ambitions de façon réaliste.", score: 2 },
          { text: "Je travaille sur les minimums de façon rigoureuse avant d'aller plus loin.", score: 1 },
          { text: "Je consulte l'équipe sur ses propres ambitions environnementales.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "choix",
        text: "Vous aimeriez faire plus sur la transition environnementale mais vous attendez un signal fort de votre direction.",
        tags: ["manager RSE", "direction"],
        answers: [
          { text: "J'attends — agir sans signal fort de la direction risque d'être mal perçu.", score: 0 },
          { text: "J'agis dans mon périmètre de responsabilité sans attendre un signal fort.", score: 2 },
          { text: "J'en parle à ma direction pour clarifier ses attentes.", score: 1.5 },
          { text: "Je prends des initiatives visibles pour signaler mon engagement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "likert",
        text: "Vous agissez sur la transition environnementale dans votre périmètre sans attendre un signal fort de la direction.",
        tags: ["manager RSE", "autonomie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      },
      {
        type: "choix",
        text: "L'engagement environnemental ne fait pas partie de l'identité de votre équipe. C'est une contrainte externe.",
        tags: ["manager RSE", "identité équipe"],
        answers: [
          { text: "Je laisse — l'identité d'une équipe ne se décrète pas.", score: 0 },
          { text: "Je travaille à intégrer l'engagement environnemental dans ce qui rend l'équipe fière d'elle-même.", score: 2 },
          { text: "Je maintiens les pratiques sans chercher à les relier à l'identité.", score: 0.5 },
          { text: "Je cherche à comprendre ce qui crée la fierté collective avant d'y relier l'environnement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture environnementale de votre équipe ne tient que par l'obligation et non par la conviction", desc: "Laisser les pratiques reposer sur l'obligation sans travailler sur le sens, ne pas célébrer les progrès, attendre un signal fort de la direction pour agir, se contenter des minimums sans chercher à progresser : ces comportements créent une équipe qui fait ce qu'on lui dit mais ne s'engage pas." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture est en construction mais la conviction remplaçant l'obligation et l'ambition au-delà des minimums sont encore insuffisantes", desc: "Vous travaillez à donner du sens aux pratiques. Mais célébrer explicitement les progrès, partager vos approches avec vos pairs managers, agir dans votre périmètre sans attendre un signal fort, travailler à faire de l'engagement environnemental une fierté de l'équipe : votre culture est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre équipe est engagée par conviction, célèbre ses progrès et vous partagez vos approches avec vos pairs", desc: "Vous travaillez à remplacer l'obligation par la conviction. Vous célébrez explicitement les progrès. Vous tirez des leçons des initiatives qui n'ont pas fonctionné. Vous partagez vos approches avec vos pairs. Vous agissez dans votre périmètre sans attendre. Vous travaillez à faire de l'engagement environnemental une fierté de l'équipe. Cette construction de culture par le sens — qui prend plus de temps que l'obligation mais tient dans la durée — est ce qui distingue une équipe engagée d'une équipe conforme." },
        },
      }
    ],

  },

  "empreinte-numerique": {
    0: [
      {
        type: "choix",
        text: "Vous utilisez le streaming vidéo en arrière-plan pendant vos heures de travail.",
        tags: ["numérique", "streaming"],
        answers: [
          { text: "Je laisse — ça m'aide à me concentrer.", score: 0 },
          { text: "Je le coupe — le streaming vidéo consomme beaucoup de données et d'énergie.", score: 2 },
          { text: "Je remplace par du streaming audio moins énergivore.", score: 1.5 },
          { text: "Je réduis la qualité vidéo.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "choix",
        text: "Vos réunions en visioconférence se font systématiquement avec les caméras allumées même quand ce n'est pas nécessaire.",
        tags: ["numérique", "réunions visio"],
        answers: [
          { text: "Je laisse — la caméra améliore la qualité des échanges.", score: 0.5 },
          { text: "J'adapte — caméra allumée quand c'est utile pour la relation, coupée quand c'est inutile.", score: 2 },
          { text: "Je coupe la caméra systématiquement.", score: 1 },
          { text: "Je propose à l'équipe d'en discuter collectivement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous adaptez l'usage de la caméra en visioconférence selon l'utilité réelle pour la qualité de l'échange.",
        tags: ["numérique", "visio"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous répondez à tous vos emails avec des accusés de réception ou des 'ok merci' systématiques.",
        tags: ["numérique", "mails"],
        answers: [
          { text: "Je continue — la politesse numérique est importante.", score: 0 },
          { text: "Je supprime les réponses vides de sens qui encombrent les boîtes mail.", score: 2 },
          { text: "Je garde les accusés de réception pour les emails importants.", score: 1 },
          { text: "Je remplace par des réactions emoji.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous avez des gigaoctets de données dans votre cloud professionnel que vous n'avez pas consultés depuis plus de deux ans.",
        tags: ["numérique", "stockage cloud"],
        answers: [
          { text: "Je laisse — le coût de stockage est absorbé par l'organisation.", score: 0 },
          { text: "Je les archive ou les supprime — le stockage en ligne consomme de l'énergie.", score: 2 },
          { text: "Je les compresse pour réduire l'espace.", score: 1 },
          { text: "Je les vérifie et je supprime ce qui est clairement inutile.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous nettoyez régulièrement vos données cloud inutiles ou obsolètes.",
        tags: ["numérique", "nettoyage données"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes inscrit·e à de nombreuses newsletters professionnelles que vous ne lisez jamais.",
        tags: ["numérique", "réseaux"],
        answers: [
          { text: "Je laisse — elles pourraient être utiles un jour.", score: 0 },
          { text: "Je me désinscris des newsletters que je ne lis jamais.", score: 2 },
          { text: "Je les filtre automatiquement.", score: 0.5 },
          { text: "Je garde uniquement celles que je lis régulièrement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "choix",
        text: "Votre téléphone professionnel contient des applications que vous n'utilisez jamais mais qui consomment des données en arrière-plan.",
        tags: ["numérique", "applications"],
        answers: [
          { text: "Je laisse — les désinstaller prendrait du temps.", score: 0 },
          { text: "Je désinstalle les applications inutilisées.", score: 2 },
          { text: "Je coupe les permissions de données en arrière-plan.", score: 1.5 },
          { text: "Je mets à jour uniquement les applications que j'utilise.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous désinstallez régulièrement les applications professionnelles inutilisées.",
        tags: ["numérique", "applications"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez faire une réunion en visio ou vous déplacer. La visio évite le déplacement mais consomme du numérique.",
        tags: ["numérique", "présentiel vs distanciel"],
        answers: [
          { text: "Je me déplace toujours — la présence physique est plus productive.", score: 0 },
          { text: "J'évalue selon la nature de la réunion — visio pour les échanges d'information, présentiel pour les sujets qui nécessitent la relation.", score: 2 },
          { text: "Je fais la visio pour éviter le déplacement.", score: 1.5 },
          { text: "Je laisse les participants décider selon leurs contraintes.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos usages numériques ne tiennent pas encore compte de leur empreinte environnementale", desc: "Streaming vidéo en arrière-plan, caméra systématiquement allumée sans nécessité, réponses vides de sens qui encombrent les boîtes mail, stockage cloud non nettoyé, abonnements à des newsletters non lues : ces usages créent une empreinte numérique évitable." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez réduit les usages les plus visibles mais le streaming, l'IA et le stockage sont encore des angles morts", desc: "Vous adaptez la caméra en visio et nettoyez vos données. Mais supprimer le streaming vidéo en arrière-plan, calibrer vos usages d'IA, choisir l'appel téléphonique pour les échanges courts : ces usages spécifiques sont encore des angles morts." },
          haut: { label: "Réflexes installés", titre: "Vos usages numériques intègrent systématiquement des critères de sobriété — streaming, mails, visio, stockage, IA", desc: "Vous coupez le streaming vidéo en arrière-plan. Vous adaptez la caméra selon l'utilité réelle. Vous supprimez les réponses vides de sens. Vous nettoyez vos données cloud. Vous vous désabonnez des newsletters inutiles. Vous calibrez vos usages d'IA. Ces usages raisonnés — qui supposent de remettre en question les automatismes numériques — créent une empreinte réelle." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Votre téléphone professionnel fonctionne parfaitement mais a trois ans. L'organisation propose un renouvellement.",
        tags: ["numérique", "équipements"],
        answers: [
          { text: "Je renouvelle — trois ans c'est raisonnable.", score: 0 },
          { text: "Je refuse le renouvellement tant que le téléphone fonctionne bien.", score: 2 },
          { text: "Je renouvelle par un reconditionné.", score: 2 },
          { text: "Je renouvelle si la différence de performance est significative.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "likert",
        text: "Vous refusez le renouvellement de vos équipements numériques tant qu'ils fonctionnent correctement.",
        tags: ["numérique", "durée vie équipements"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous envoyez le même document volumineux à 50 personnes par email.",
        tags: ["numérique", "pièces jointes multiples"],
        answers: [
          { text: "Je laisse — c'est plus simple qu'un lien.", score: 0 },
          { text: "Je partage via un lien unique — 50 copies d'un document c'est 50 fois l'empreinte.", score: 2 },
          { text: "Je compresse le document avant d'envoyer.", score: 1 },
          { text: "Je n'envoie qu'aux personnes qui en ont vraiment besoin.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous utilisez des outils d'IA générative pour des tâches qui ne le nécessitent pas vraiment.",
        tags: ["numérique", "intelligence artificielle"],
        answers: [
          { text: "Je laisse — les outils d'IA sont là pour être utilisés.", score: 0 },
          { text: "Je réserve les outils d'IA aux usages où ils apportent vraiment une valeur.", score: 2 },
          { text: "J'utilise l'IA pour tout — c'est plus efficace.", score: 0 },
          { text: "Je m'interroge sur la nécessité avant d'utiliser l'IA pour une tâche.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous utilisez des paramètres d'affichage à haute luminosité en permanence.",
        tags: ["numérique", "mode sombre"],
        answers: [
          { text: "Je laisse — la luminosité n'a pas d'impact significatif.", score: 0 },
          { text: "J'utilise le mode sombre et je réduis la luminosité — ça réduit la consommation.", score: 2 },
          { text: "Je réduis la luminosité la nuit uniquement.", score: 1 },
          { text: "Je règle automatiquement selon la luminosité ambiante.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "likert",
        text: "Vous avez optimisé les paramètres de vos équipements — luminosité, mode sombre, veille — pour réduire leur consommation.",
        tags: ["numérique", "paramètres"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous convertissez souvent des emails ou pages web en PDF avant de les imprimer.",
        tags: ["numérique", "impressions pdf"],
        answers: [
          { text: "Je continue — j'ai besoin d'une version papier.", score: 0 },
          { text: "Je garde le PDF numérique sans imprimer — le PDF stocké est moins impactant que l'impression.", score: 2 },
          { text: "Je lis directement à l'écran plutôt que de créer un PDF.", score: 2 },
          { text: "Je n'imprime que les pages pertinentes.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Pour un échange de 10 minutes, vous lancez une visioconférence au lieu d'un appel téléphonique.",
        tags: ["numérique", "appels vs visio"],
        answers: [
          { text: "Je laisse — la visio est devenue la norme.", score: 0 },
          { text: "Je préfère l'appel simple pour les échanges courts — moins d'énergie et plus efficace.", score: 2 },
          { text: "J'utilise la visio uniquement quand le partage d'écran ou la relation l'exige.", score: 2 },
          { text: "Je laisse l'initiateur décider.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "likert",
        text: "Vous choisissez l'outil numérique proportionné à la nature de l'échange — appel, chat, email, visio selon le besoin réel.",
        tags: ["numérique", "choix outil"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas d'idée de l'empreinte numérique de vos usages professionnels.",
        tags: ["numérique", "conscience impact"],
        answers: [
          { text: "Je laisse — les actions individuelles ne changent pas grand-chose.", score: 0 },
          { text: "Je cherche à mieux comprendre mon empreinte numérique pour prioriser les changements.", score: 2 },
          { text: "Je sais que c'est significatif sans en connaître les détails.", score: 0.5 },
          { text: "Je participe si l'organisation propose un outil de mesure.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos équipements numériques sont renouvelés trop tôt et vos paramètres non optimisés", desc: "Renouveler au premier cycle même si l'équipement fonctionne, ne pas optimiser luminosité et mode sombre, envoyer des documents volumineux en pièce jointe à 50 personnes, multiplier les visioconférences pour des échanges qui pourraient être des appels : ces comportements surconsomment inutilement." },
          moyen: { label: "Pratiques en développement", titre: "Vous prolongez la durée de vie de vos équipements mais les paramètres et les choix d'outils sont encore perfectibles", desc: "Vous refusez le renouvellement prématuré. Mais optimiser vos paramètres d'affichage, partager via liens plutôt que pièces jointes à grande liste, évaluer régulièrement vos archives numériques : votre gestion des équipements est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Vos équipements sont prolongés, vos paramètres optimisés et vos choix d'outils proportionnés", desc: "Vous refusez le renouvellement prématuré. Vous activez le mode sombre et réduisez la luminosité. Vous partagez via liens. Vous choisissez l'appel pour les échanges courts. Vous évaluez vos archives. Vous désinstallez les applications inutilisées. Cette sobriété sur les équipements et les usages — qui suppose d'aller contre les automatismes de commodité — est ce qui réduit l'empreinte structurelle." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous avez réduit votre empreinte numérique par des gestes simples. Vos collègues ne les pratiquent pas.",
        tags: ["numérique", "partage pratiques"],
        answers: [
          { text: "Je laisse — c'est un choix personnel.", score: 0 },
          { text: "Je partage ces gestes naturellement.", score: 2 },
          { text: "Je les partage lors d'une réunion d'équipe.", score: 1.5 },
          { text: "Je les publie dans un canal interne.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "likert",
        text: "Vous partagez vos bonnes pratiques de sobriété numérique avec vos collègues.",
        tags: ["numérique", "partage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "choix",
        text: "Une formation sur la sobriété numérique est proposée. Elle dure une heure.",
        tags: ["numérique", "formation"],
        answers: [
          { text: "Je n'y vais pas — je connais déjà les bases.", score: 0 },
          { text: "Je participe — il y a toujours quelque chose à apprendre.", score: 2 },
          { text: "Je consulte le support ensuite.", score: 0.5 },
          { text: "Je participe si ça s'intègre dans mon planning.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation impose des outils numériques dont certains sont clairement plus énergivores que leurs alternatives.",
        tags: ["numérique", "outils organisation"],
        answers: [
          { text: "Je laisse — les outils sont décidés par la DSI.", score: 0 },
          { text: "Je remonte l'information à la DSI pour qu'elle soit prise en compte.", score: 2 },
          { text: "J'utilise les outils imposés mais j'optimise mon usage.", score: 1 },
          { text: "J'utilise des alternatives personnelles plus sobres.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "choix",
        text: "Vous ne savez pas si les serveurs de votre organisation sont alimentés par de l'énergie renouvelable.",
        tags: ["numérique", "infra"],
        answers: [
          { text: "Je laisse — ce n'est pas mon niveau de responsabilité.", score: 0 },
          { text: "Je m'informe et je remonte le sujet si c'est un angle mort de la politique RSE.", score: 2 },
          { text: "Je pose la question à la direction RSE.", score: 1.5 },
          { text: "Je cherche l'information dans le rapport RSE si il existe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "likert",
        text: "Vous vous informez sur les pratiques environnementales de l'infrastructure numérique de votre organisation.",
        tags: ["numérique", "infrastructure"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "choix",
        text: "Vous proposez souvent des fonctionnalités numériques complexes pour des besoins simples.",
        tags: ["numérique", "sobriété fonctionnelle"],
        answers: [
          { text: "Je laisse — les fonctionnalités avancées apportent toujours de la valeur.", score: 0 },
          { text: "Je recherche la solution la plus simple qui répond au besoin.", score: 2 },
          { text: "Je propose les deux et je laisse le choix.", score: 1 },
          { text: "Je demande à l'utilisateur ce dont il a vraiment besoin.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "choix",
        text: "Vos anciens projets génèrent des archives volumineuses que vous ne consultez jamais.",
        tags: ["numérique", "archivage"],
        answers: [
          { text: "Je les garde — on ne sait jamais.", score: 0 },
          { text: "Je les évalue et je supprime ce qui n'a plus de valeur.", score: 2 },
          { text: "Je les compresse et je les archive sur un support moins énergivore.", score: 1.5 },
          { text: "Je les migre vers un stockage froid moins consommateur.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "likert",
        text: "Vous évaluez régulièrement la nécessité de conserver vos archives numériques.",
        tags: ["numérique", "archivage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      },
      {
        type: "choix",
        text: "Vous n'êtes pas informé·e de l'impact énergétique des outils d'IA que vous utilisez au quotidien.",
        tags: ["numérique", "IA énergie"],
        answers: [
          { text: "Je laisse — l'impact est géré par les fournisseurs d'IA.", score: 0 },
          { text: "Je cherche à m'informer pour calibrer mes usages.", score: 2 },
          { text: "Je présume que l'impact est géré par les certifications des fournisseurs.", score: 0 },
          { text: "Je réduis mes usages par précaution.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne partagez pas encore vos pratiques et ne contribuez pas à l'évolution des outils de l'organisation", desc: "Ne pas partager ses bonnes pratiques, ne pas s'informer sur l'infrastructure numérique de l'organisation, ne pas remonter les outils énergivores : ces comportements laissent des leviers collectifs inexploités." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais la contribution systémique est encore insuffisante", desc: "Vous partagez vos bonnes pratiques. Mais vous informer sur l'infrastructure numérique, remonter les outils énergivores, intégrer des critères de sobriété dans les nouveaux services numériques : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement — partage, infrastructure, remontées, sobriété des services développés", desc: "Vous partagez vos bonnes pratiques. Vous vous informez sur l'infrastructure de l'organisation. Vous remontez les outils énergivores à la DSI. Vous intégrez la sobriété dans les projets numériques. Vous faites un bilan annuel. Cette contribution au-delà de votre périmètre direct est ce qui fait évoluer les pratiques collectives." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous consultez vos emails en continu toute la journée y compris le soir et le week-end.",
        tags: ["numérique", "présence mail"],
        answers: [
          { text: "Je continue — être disponible est important.", score: 0 },
          { text: "Je définis des plages de consultation et je respecte le droit à la déconnexion.", score: 2 },
          { text: "Je consulte seulement en cas d'urgence hors des heures de travail.", score: 1.5 },
          { text: "Je désactive les notifications hors des heures de travail.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "likert",
        text: "Vous respectez votre propre droit à la déconnexion numérique en dehors des heures de travail.",
        tags: ["numérique", "déconnexion"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "choix",
        text: "Vous avez pris de bonnes habitudes numériques pendant le 'digital cleanup day' annuel. Elles ont duré deux semaines.",
        tags: ["numérique", "durabilité engagement"],
        answers: [
          { text: "C'est normal — ces habitudes ne durent jamais.", score: 0 },
          { text: "Je cherche à installer les gestes qui m'ont été naturels de façon permanente.", score: 2 },
          { text: "Je répète l'exercice chaque année.", score: 1 },
          { text: "Je mets des rappels dans mon calendrier pour maintenir les routines.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "choix",
        text: "Vous parlez de sobriété numérique mais vous multipliez les outils et abonnements numériques.",
        tags: ["numérique", "cohérence"],
        answers: [
          { text: "Je laisse — les usages personnels et les discours professionnels sont distincts.", score: 0 },
          { text: "Je cherche à aligner mes usages numériques sur ce que je défends.", score: 2 },
          { text: "Je prends conscience de l'écart et je le réduis progressivement.", score: 1.5 },
          { text: "Je reconnais l'incohérence sans y remédier pour l'instant.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "choix",
        text: "Un collègue vous demande comment réduire son empreinte numérique. Il ne sait pas par où commencer.",
        tags: ["numérique", "conseil collègues"],
        answers: [
          { text: "Je lui dis que c'est complexe et que l'impact est limité.", score: 0 },
          { text: "Je lui donne deux ou trois gestes concrets et impactants pour démarrer.", score: 2 },
          { text: "Je lui envoie une liste complète de bonnes pratiques.", score: 1 },
          { text: "Je lui recommande une formation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "likert",
        text: "Vous aidez vos collègues à identifier des gestes concrets pour réduire leur empreinte numérique.",
        tags: ["numérique", "accompagnement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation développe de nouveaux services numériques sans critères de sobriété.",
        tags: ["numérique", "innovation sobre"],
        answers: [
          { text: "Je laisse — les critères de performance priment sur la sobriété.", score: 0 },
          { text: "Je remonte la nécessité d'intégrer des critères de sobriété dans les projets numériques.", score: 2 },
          { text: "Je l'aborde lors des revues de projet.", score: 1 },
          { text: "Je cherche comment intégrer la sobriété dans mon périmètre de contribution.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "choix",
        text: "Vous ne faites jamais le bilan de votre empreinte numérique professionnelle.",
        tags: ["numérique", "bilan annuel"],
        answers: [
          { text: "Je laisse — les actions individuelles changent peu.", score: 0 },
          { text: "Je fais un bilan annuel pour suivre ma progression et identifier les priorités.", score: 2 },
          { text: "Je le fais si l'organisation propose un outil.", score: 1 },
          { text: "Je me base sur mes impressions sans mesure formelle.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "likert",
        text: "Vous suivez votre progression sur la sobriété numérique pour ajuster vos priorités.",
        tags: ["numérique", "suivi progression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      },
      {
        type: "choix",
        text: "La sobriété numérique vous semble incompatible avec l'efficacité professionnelle.",
        tags: ["numérique", "équilibre"],
        answers: [
          { text: "Je partage ce point de vue — sacrifier l'efficacité n'est pas raisonnable.", score: 0 },
          { text: "Je pense au contraire que les usages sobres sont souvent plus efficaces — moins de bruit, plus de concentration.", score: 2 },
          { text: "Je reconnais une tension réelle qui demande des arbitrages.", score: 1 },
          { text: "Je cherche les usages où sobriété et efficacité se renforcent.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos gestes de sobriété numérique sont ponctuels et il y a un décalage entre vos usages et vos discours", desc: "Revenir aux habitudes après le digital cleanup day, ne pas aligner ses usages sur ses discours, ne pas faire de bilan annuel : ces comportements font de la sobriété numérique un exercice ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos gestes sont relativement durables mais la cohérence discours-usages et le suivi sont encore insuffisants", desc: "Vous maintenez les gestes naturels. Mais aligner vos usages numériques sur ce que vous défendez, faire un bilan annuel de votre empreinte, aider vos collègues à identifier leurs priorités : votre engagement durable est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Votre sobriété numérique est durable, cohérente et vous l'accompagnez chez vos collègues", desc: "Vous maintenez vos gestes dans la durée. Vous alignez vos usages sur ce que vous défendez. Vous respectez votre droit à la déconnexion. Vous aidez vos collègues à prioriser leurs gestes. Vous pensez que sobriété et efficacité se renforcent. Cet engagement cohérent et contributif est ce qui crée une culture de sobriété numérique." },
        },
      }
    ],

  },

  "deplacements-sobriete": {
    0: [
      {
        type: "choix",
        text: "Vous devez rencontrer un partenaire à 400km. La réunion durera deux heures. Elle pourrait se faire en visio.",
        tags: ["déplacements", "nécessité"],
        answers: [
          { text: "Je me déplace — la présence physique améliore la qualité de la relation.", score: 0 },
          { text: "Je propose la visio et j'explique que ça préserve nos temps et réduit l'empreinte.", score: 2 },
          { text: "Je me déplace pour la première rencontre, visio ensuite.", score: 1 },
          { text: "Je laisse le partenaire choisir.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "choix",
        text: "Vous devez vous rendre à Paris depuis Lyon pour une réunion d'une journée. L'avion est 30 minutes plus rapide que le train.",
        tags: ["déplacements", "mode"],
        answers: [
          { text: "Je prends l'avion — 30 minutes font une différence dans une journée chargée.", score: 0 },
          { text: "Je prends le train — l'empreinte carbone est sans commune mesure et le train me permet de travailler.", score: 2 },
          { text: "Je laisse l'organisation décider selon la politique de déplacements.", score: 0.5 },
          { text: "Je prends le train sauf si le temps économisé est vraiment critique.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "likert",
        text: "Pour les trajets inférieurs à 4-5 heures de train, vous privilégiez systématiquement le train à l'avion.",
        tags: ["déplacements", "train vs avion"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "choix",
        text: "Vous effectuez deux déplacements séparés en deux semaines dans la même ville pour deux sujets différents.",
        tags: ["déplacements", "regroupement"],
        answers: [
          { text: "Je fais les deux déplacements séparément — les sujets ne sont pas liés.", score: 0 },
          { text: "Je cherche à regrouper les deux visites en un seul déplacement.", score: 2 },
          { text: "Je regroupe si les deux parties sont d'accord.", score: 1.5 },
          { text: "Je cherche à traiter l'un des deux sujets en visio.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "choix",
        text: "Vous réservez souvent vos déplacements à la dernière minute ce qui vous force à prendre des options moins écologiques.",
        tags: ["déplacements", "anticipation"],
        answers: [
          { text: "Je laisse — le planning l'impose souvent.", score: 0 },
          { text: "Je planifie mieux pour avoir accès aux options plus écologiques.", score: 2 },
          { text: "Je compense par d'autres gestes.", score: 0 },
          { text: "Je reconnais le problème et j'essaie d'anticiper davantage.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "likert",
        text: "Vous planifiez vos déplacements suffisamment à l'avance pour pouvoir choisir les options les moins impactantes.",
        tags: ["déplacements", "planification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "choix",
        text: "À destination, vous prenez systématiquement un taxi ou VTC même quand les transports en commun sont disponibles.",
        tags: ["déplacements", "dernier kilomètre"],
        answers: [
          { text: "Je continue — c'est plus pratique et efficace.", score: 0 },
          { text: "Je prends les transports en commun ou je marche quand c'est raisonnable.", score: 2 },
          { text: "Je prends les transports en commun uniquement si le trajet est simple.", score: 1 },
          { text: "Je covoiture avec des collègues si nous allons au même endroit.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "choix",
        text: "Vous devez louer une voiture pour un déplacement. Une électrique est disponible pour 20% plus cher.",
        tags: ["déplacements", "voiture électrique"],
        answers: [
          { text: "Je prends la thermique — 20% plus cher n'est pas justifié.", score: 0 },
          { text: "Je prends l'électrique si c'est dans la politique de l'organisation.", score: 1 },
          { text: "Je prends l'électrique même si je dois justifier le surcoût.", score: 2 },
          { text: "Je cherche d'abord si le déplacement peut être évité.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "likert",
        text: "Vous utilisez les mobilités douces disponibles — marche, vélo, transports en commun — pour les déplacements de courte distance.",
        tags: ["déplacements", "mobilité douce"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation exige votre présence physique à des réunions qui pourraient se tenir en visio.",
        tags: ["déplacements", "visio vs présentiel"],
        answers: [
          { text: "Je m'y plie — la politique de l'organisation prime.", score: 0.5 },
          { text: "Je questionne la pertinence du déplacement au cas par cas.", score: 2 },
          { text: "Je respecte la politique mais je l'aborde lors des revues de processus.", score: 1.5 },
          { text: "Je propose des alternatives en montrant la valeur ajoutée de la visio.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos décisions de déplacement sont guidées par la commodité sans critères environnementaux", desc: "Prendre l'avion quand le train est possible en 4-5 heures, ne pas regrouper les déplacements, multiplier les aller-retours inutiles, prendre un taxi systématiquement à destination : ces décisions créent une empreinte évitable. Le déplacement professionnel est le poste le plus impactant pour beaucoup de collaborateurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous privilégiez le train sur l'avion mais d'autres critères — regroupement, dernier kilomètre — sont encore insuffisants", desc: "Vous prenez le train pour les trajets courts. Mais regrouper les déplacements dans la même ville, prendre les transports en commun à destination, planifier suffisamment à l'avance pour accéder aux meilleures options : ces dimensions sont encore insuffisantes." },
          haut: { label: "Réflexes installés", titre: "Vos décisions de déplacement intègrent systématiquement les critères environnementaux — mode, regroupement, dernier kilomètre", desc: "Vous proposez la visio pour les réunions de deux heures à 400km. Vous prenez le train sur les trajectoires inférieures à 4-5h. Vous regroupez les déplacements dans la même ville. Vous utilisez les transports en commun à destination. Vous évaluez si un déplacement international est vraiment nécessaire. Vous choisissez la voiture électrique quand c'est disponible. Ces arbitrages de déplacement — qui supposent de questionner les habitudes — créent un impact réel sur le poste le plus émetteur." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Votre trajet domicile-bureau en voiture émet significativement plus que le même trajet en transports en commun.",
        tags: ["déplacements", "domicile bureau"],
        answers: [
          { text: "Je maintiens la voiture — la flexibilité est indispensable.", score: 0 },
          { text: "J'évalue si les transports en commun peuvent fonctionner pour moi.", score: 2 },
          { text: "Je combine voiture et transports selon les jours.", score: 1 },
          { text: "Je compense par d'autres gestes.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "likert",
        text: "Vous avez évalué sérieusement les alternatives à la voiture individuelle pour votre trajet domicile-bureau.",
        tags: ["déplacements", "mode domicile"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "choix",
        text: "Un forfait mobilités durables existe dans votre organisation pour les trajets en vélo. Vous n'y avez pas recours.",
        tags: ["déplacements", "vélo"],
        answers: [
          { text: "Je laisse — le vélo ne s'adapte pas à mes contraintes.", score: 0 },
          { text: "Je l'évalue sérieusement même si c'est pour quelques jours par semaine.", score: 2 },
          { text: "Je l'utilise si je me mets au vélo.", score: 1 },
          { text: "Je me renseigne sur les modalités.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "choix",
        text: "Plusieurs collègues habitent dans la même direction que vous. Vous ne covoiturez pas.",
        tags: ["déplacements", "covoiturage"],
        answers: [
          { text: "Je laisse — le covoiturage implique des contraintes horaires difficiles.", score: 0 },
          { text: "J'explore le covoiturage avec mes collègues même pour quelques jours par semaine.", score: 2 },
          { text: "Je covoiture si les horaires sont parfaitement compatibles.", score: 1 },
          { text: "Je propose le covoiturage ponctuellement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation prend en charge 50% de votre abonnement de transport en commun. Vous continuez à venir en voiture.",
        tags: ["déplacements", "abonnement transport"],
        answers: [
          { text: "Je laisse — la prise en charge partielle ne justifie pas le changement.", score: 0 },
          { text: "Je reconsidère sérieusement les transports en commun avec cette prise en charge.", score: 2 },
          { text: "Je prends les transports en commun quand la voiture n'est pas nécessaire.", score: 1 },
          { text: "J'utilise les transports en commun au moins certains jours.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "likert",
        text: "Vous utilisez les incitations de votre organisation — forfaits mobilité, prise en charge transports — pour réduire votre impact.",
        tags: ["déplacements", "incitations"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "choix",
        text: "Vous avez un voyage professionnel international prévu. Vous n'avez pas évalué si c'était vraiment nécessaire.",
        tags: ["déplacements", "international"],
        answers: [
          { text: "Je pars — si c'est planifié, c'est justifié.", score: 0 },
          { text: "J'évalue si les objectifs du voyage ne peuvent pas être atteints en visio.", score: 2 },
          { text: "Je pars mais je cherche à grouper d'autres objectifs pour rentabiliser le déplacement.", score: 1.5 },
          { text: "Je laisse la décision à ma direction.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "choix",
        text: "Vous pouvez faire un déplacement en aller-retour dans la journée ou dormir sur place. Dormir sur place évite un trajet en avion.",
        tags: ["déplacements", "nuit sur place"],
        answers: [
          { text: "Je fais l'aller-retour — je préfère rentrer le soir.", score: 0 },
          { text: "Je reste sur place si ça évite un trajet en avion.", score: 2 },
          { text: "Je prends la décision selon ma fatigue et mes contraintes personnelles.", score: 0.5 },
          { text: "Je reste sur place uniquement si le trajet est vraiment long.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "likert",
        text: "Vous organisez vos déplacements pour minimiser les voyages aller-retour inutiles.",
        tags: ["déplacements", "organisation optimale"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      },
      {
        type: "choix",
        text: "La politique de déplacements de votre organisation n'intègre pas de critères environnementaux. Vous avez une marge de décision.",
        tags: ["déplacements", "politique organisation"],
        answers: [
          { text: "Je laisse — sans politique formelle, les critères environnementaux ne sont pas ma responsabilité.", score: 0 },
          { text: "J'applique mes propres critères et je propose de les intégrer dans la politique.", score: 2 },
          { text: "J'applique mes propres critères sans chercher à changer la politique.", score: 1.5 },
          { text: "Je remonte l'absence de politique à ma direction.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre mobilité domicile-bureau n'a pas encore été réévaluée avec des critères environnementaux", desc: "Venir en voiture malgré une prise en charge partielle des transports, ne pas évaluer le covoiturage, ne pas avoir essayé le vélo : la mobilité domicile-bureau n'a pas fait l'objet d'une réévaluation." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez évalué des alternatives pour le domicile-bureau mais leur adoption est encore partielle", desc: "Vous avez évalué les alternatives. Mais utiliser les incitations de l'organisation, explorer le covoiturage même pour quelques jours par semaine, évaluer sérieusement les transports en commun avec la prise en charge : l'adoption est encore partielle." },
          haut: { label: "Réflexes installés", titre: "Votre mobilité domicile-bureau a été réévaluée et vous utilisez les incitations disponibles", desc: "Vous avez évalué sérieusement les alternatives à la voiture individuelle. Vous utilisez les incitations de l'organisation. Vous explorez le covoiturage. Vous planifiez à l'avance pour accéder aux options moins impactantes. Cette réévaluation de la mobilité domicile-bureau — qui touche à des habitudes bien ancrées — est ce qui crée une réduction sur 220 jours par an." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous assistez chaque année à une conférence internationale qui nécessite un vol long-courrier.",
        tags: ["déplacements", "sobriété conférence"],
        answers: [
          { text: "Je continue — les conférences internationales sont importantes pour mon réseau.", score: 0 },
          { text: "J'évalue si la valeur de la présence physique justifie l'empreinte du long-courrier.", score: 2 },
          { text: "Je cherche des conférences équivalentes accessibles sans vol long-courrier.", score: 1.5 },
          { text: "Je participe en distanciel si une option est disponible.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "likert",
        text: "Vous évaluez si la valeur de la présence physique à une conférence justifie l'empreinte du déplacement.",
        tags: ["déplacements", "conférences"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas d'idée de l'empreinte carbone de vos déplacements professionnels sur l'année.",
        tags: ["déplacements", "mesure empreinte"],
        answers: [
          { text: "Je laisse — les décisions individuelles changent peu la situation globale.", score: 0 },
          { text: "Je cherche à mesurer pour prioriser mes efforts.", score: 2 },
          { text: "Je présume que l'avion est l'essentiel de mon empreinte sans mesurer.", score: 1 },
          { text: "Je participe si l'organisation propose un outil de mesure.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation propose de compenser vos émissions de déplacements par des projets de compensation carbone.",
        tags: ["déplacements", "compensation"],
        answers: [
          { text: "Je laisse — la compensation permet de voyager sans limites.", score: 0 },
          { text: "Je compense en plus des efforts de réduction — la compensation ne remplace pas la sobriété.", score: 2 },
          { text: "Je compense systématiquement sans chercher à réduire les déplacements.", score: 0 },
          { text: "Je compense seulement les déplacements vraiment nécessaires.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "choix",
        text: "Dans votre organisation, beaucoup de déplacements semblent être des habitudes plutôt que des nécessités.",
        tags: ["déplacements", "culture"],
        answers: [
          { text: "Je laisse — je ne suis pas en position de changer la culture de l'organisation.", score: 0 },
          { text: "Je questionne la nécessité dans mon propre périmètre et j'en parle à ma direction.", score: 2 },
          { text: "Je donne l'exemple dans mon périmètre sans chercher à influencer les autres.", score: 1.5 },
          { text: "J'en parle à mes collègues pour créer une prise de conscience collective.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "likert",
        text: "Vous questionnez les habitudes de déplacement dans votre organisation et vous proposez des alternatives.",
        tags: ["déplacements", "culture"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "choix",
        text: "Vous avez réduit vos déplacements professionnels et constaté que la qualité du travail n'en a pas souffert.",
        tags: ["déplacements", "retour expérience"],
        answers: [
          { text: "Je ne communique pas ce retour d'expérience.", score: 0 },
          { text: "Je le partage avec ma direction et mes collègues pour normaliser la réduction des déplacements.", score: 2 },
          { text: "Je le mentionne informellement.", score: 1 },
          { text: "Je le documente pour un éventuel article ou retour d'expérience.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "choix",
        text: "Un client vous demande un déplacement que vous estimez inutile. Vous hésitez à le refuser.",
        tags: ["déplacements", "argument RSE"],
        answers: [
          { text: "Je me déplace — le client a toujours raison.", score: 0 },
          { text: "Je lui propose la visio en expliquant que c'est notre politique de réduire les déplacements.", score: 2 },
          { text: "Je me déplace mais je le mentionne comme un point d'amélioration pour la prochaine fois.", score: 0.5 },
          { text: "Je demande à mon manager de trancher.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "likert",
        text: "Vous proposez des alternatives distancielles à vos clients quand les déplacements ne sont pas essentiels.",
        tags: ["déplacements", "client"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      },
      {
        type: "choix",
        text: "Réduire vos déplacements professionnels vous permettrait aussi de gagner en qualité de vie.",
        tags: ["déplacements", "bien-être"],
        answers: [
          { text: "Je laisse — les déplacements font partie du métier.", score: 0 },
          { text: "Je prends en compte ce double bénéfice dans mes arbitrages.", score: 2 },
          { text: "Je le mentionne pour justifier mes demandes de réduction.", score: 1 },
          { text: "Je le prends en compte sans en faire un argument principal.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne questionnez pas les habitudes de déplacement et ne proposez pas d'alternatives", desc: "Partir à une conférence internationale sans évaluer si la visio couvrirait les objectifs, ne pas proposer d'alternatives aux clients qui demandent votre présence, ne pas questionner les habitudes de déplacement de l'organisation : ces comportements normalisent des déplacements évitables." },
          moyen: { label: "Pratiques en développement", titre: "Vous questionnez les déplacements dans votre périmètre mais la contribution systémique est encore limitée", desc: "Vous proposez la visio quand c'est possible. Mais questionner les conférences internationales, proposer des formats mixtes aux clients, partager vos retours d'expérience de réduction des déplacements : votre contribution systémique est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous questionnez les habitudes de déplacement, proposez des alternatives et partagez vos retours d'expérience", desc: "Vous questionnez les habitudes de déplacement dans l'organisation. Vous proposez des formats mixtes aux clients. Vous partagez vos retours d'expérience de réduction. Vous mesurez votre empreinte annuelle. Vous distinguez la compensation de la sobriété. Cette contribution systémique — qui suppose d'aller au-delà de son périmètre direct — est ce qui fait évoluer les normes collectives." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous pensez que les relations professionnelles ne peuvent pas se construire en visio.",
        tags: ["déplacements", "visio qualité"],
        answers: [
          { text: "Je partage ce point de vue — la présence physique est irremplaçable.", score: 0 },
          { text: "Je pense que la visio peut construire des relations solides avec les bonnes pratiques.", score: 2 },
          { text: "Je pense que les deux sont complémentaires et que quelques rencontres physiques suffisent.", score: 1.5 },
          { text: "Je reconnais que c'est une question d'habitude que je cherche à changer.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "likert",
        text: "Vous utilisez des pratiques qui rendent la visio aussi efficace que le présentiel pour construire des relations professionnelles.",
        tags: ["déplacements", "visio efficace"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation attire des talents qui souhaitent moins se déplacer. Elle n'a pas adapté sa politique.",
        tags: ["déplacements", "politique RH"],
        answers: [
          { text: "Je laisse — la politique RH ne me concerne pas.", score: 0 },
          { text: "Je remonte cette opportunité — réduire les déplacements peut être un avantage RH.", score: 2 },
          { text: "J'en parle à mon réseau informellement.", score: 1 },
          { text: "Je propose un pilote de télétravail avancé.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "choix",
        text: "Vous ne faites jamais le bilan de vos déplacements professionnels de l'année.",
        tags: ["déplacements", "bilan annuel"],
        answers: [
          { text: "Je laisse — un bilan ne changerait rien.", score: 0 },
          { text: "Je fais un bilan annuel pour identifier mes principaux postes d'émission.", score: 2 },
          { text: "Je le fais si l'organisation le demande.", score: 1 },
          { text: "Je me base sur mon ressenti sans mesure.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "choix",
        text: "Vous avez réduit vos déplacements pendant la crise sanitaire et vous avez constaté que c'était souvent aussi efficace. Vous y êtes progressivement revenu.",
        tags: ["déplacements", "durabilité engagement"],
        answers: [
          { text: "Je laisse — les habitudes reviennent naturellement.", score: 0 },
          { text: "Je cherche à réancrer les apprentissages de cette période dans mes pratiques.", score: 2 },
          { text: "Je maintiens la visio pour certains sujets sans généraliser.", score: 1.5 },
          { text: "Je reviens au présentiel mais je suis plus sélectif qu'avant.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez les apprentissages de la période de forte visioconférence pour éviter de revenir à des habitudes de déplacement non nécessaires.",
        tags: ["déplacements", "apprentissages"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "choix",
        text: "Vous avez développé des pratiques de substitution au déplacement qui fonctionnent bien. Vos collègues ne les connaissent pas.",
        tags: ["déplacements", "partage bonnes pratiques"],
        answers: [
          { text: "Je laisse — chacun trouve ses propres alternatives.", score: 0 },
          { text: "Je les partage pour normaliser les alternatives au déplacement.", score: 2 },
          { text: "Je les partage si on me le demande.", score: 1 },
          { text: "Je les propose lors des revues de processus.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "choix",
        text: "Un client international insiste pour votre présence physique à chaque réunion trimestrielle.",
        tags: ["déplacements", "client international"],
        answers: [
          { text: "Je me déplace à chaque fois — le client prime.", score: 0 },
          { text: "Je propose un format mixte — un déplacement par an et les autres en visio.", score: 2 },
          { text: "Je me déplace pour les réunions stratégiques et je propose la visio pour les autres.", score: 2 },
          { text: "Je laisse mon manager décider.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "likert",
        text: "Vous proposez des formats mixtes présentiel/distanciel à vos clients et partenaires pour réduire la fréquence des déplacements.",
        tags: ["déplacements", "format mixte"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      },
      {
        type: "choix",
        text: "Être beaucoup sur la route est une partie de votre identité professionnelle.",
        tags: ["déplacements", "identité"],
        answers: [
          { text: "Je maintiens — c'est une marque d'engagement et de sérieux.", score: 0 },
          { text: "Je questionne si cette identité est compatible avec les exigences environnementales actuelles.", score: 2 },
          { text: "Je reconnais cette identité mais je la réévalue progressivement.", score: 1.5 },
          { text: "Je maintiens pour les relations clés et je réduis ailleurs.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos pratiques de réduction des déplacements sont ponctuelles et sans ancrage durable", desc: "Revenir aux habitudes post-crise sanitaire, ne pas mesurer son empreinte, traiter la compensation comme une licence pour voyager : ces comportements font des efforts un événement ponctuel." },
          moyen: { label: "Pratiques en développement", titre: "Vos pratiques sont relativement durables mais l'ancrage des apprentissages et la mesure sont encore insuffisants", desc: "Vous maintenez certaines pratiques. Mais mesurer votre empreinte annuelle, réancrer les apprentissages de la période de forte visioconférence, proposer des formats mixtes à vos clients : votre ancrage est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vos pratiques sont durables, ancrées et vous maintenez les apprentissages de la période de forte visioconférence", desc: "Vous maintenez les apprentissages de la période de forte visioconférence. Vous réancrez les pratiques après les périodes de relâchement. Vous proposez des alternatives aux clients sur le long terme. Vous questionnez l'identité professionnelle 'sur la route'. Cet ancrage durable — qui suppose de résister au retour des habitudes — est ce qui crée une réduction pérenne." },
        },
      }
    ],

  },

  "achats-responsables-fournisseurs": {
    0: [
      {
        type: "choix",
        text: "Votre cahier des charges pour sélectionner un fournisseur ne comprend pas de critères RSE.",
        tags: ["achats fournisseurs", "critères sélection"],
        answers: [
          { text: "Je laisse — les critères RSE compliquent la comparaison et l'objectivité.", score: 0 },
          { text: "J'intègre des critères RSE dans le cahier des charges.", score: 2 },
          { text: "J'évalue la RSE après avoir présélectionné sur les critères techniques et financiers.", score: 1 },
          { text: "Je demande aux fournisseurs de me fournir leur politique RSE sans en faire un critère formel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "choix",
        text: "Les critères RSE sont présents dans votre processus d'achat mais pondérés à 5% contre 95% pour le prix et la qualité.",
        tags: ["achats fournisseurs", "pondération"],
        answers: [
          { text: "Je laisse — 5% est déjà une avancée et ne compromet pas l'objectivité.", score: 0 },
          { text: "J'augmente la pondération des critères RSE pour qu'ils aient un impact réel sur les décisions.", score: 2 },
          { text: "Je l'augmente progressivement.", score: 1.5 },
          { text: "Je le justifie par les risques RSE associés au secteur.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "likert",
        text: "Les critères RSE dans vos décisions d'achat ont un poids suffisant pour influencer réellement les décisions.",
        tags: ["achats fournisseurs", "critères RSE"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "choix",
        text: "Vous signez des contrats importants sans avoir vérifié les pratiques RSE du fournisseur.",
        tags: ["achats fournisseurs", "due diligence"],
        answers: [
          { text: "Je laisse — la vérification RSE ralentit le processus.", score: 0 },
          { text: "Je réalise une due diligence RSE avant tout contrat significatif.", score: 2 },
          { text: "Je demande au fournisseur de signer une charte RSE.", score: 1 },
          { text: "Je le fais pour les gros contrats uniquement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas une bonne visibilité sur l'empreinte carbone de vos fournisseurs.",
        tags: ["achats fournisseurs", "scope 3"],
        answers: [
          { text: "Je laisse — l'empreinte fournisseurs est difficile à mesurer.", score: 0 },
          { text: "Je cherche à obtenir les données d'émission de mes fournisseurs principaux.", score: 2 },
          { text: "Je m'appuie sur les certifications disponibles.", score: 1 },
          { text: "Je commence par les fournisseurs à fort impact présumé.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez à mesurer ou estimer l'empreinte carbone de votre chaîne d'approvisionnement.",
        tags: ["achats fournisseurs", "scope 3"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "choix",
        text: "Vos contrats avec les fournisseurs ne comprennent pas de clauses relatives aux engagements RSE.",
        tags: ["achats fournisseurs", "contrats"],
        answers: [
          { text: "Je laisse — les clauses RSE sont difficiles à faire respecter.", score: 0 },
          { text: "J'intègre des clauses RSE dans les contrats significatifs.", score: 2 },
          { text: "Je demande aux fournisseurs de signer une charte RSE séparée.", score: 1.5 },
          { text: "Je le fais pour les renouvellements de contrats futurs.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez jamais audité vos principaux fournisseurs sur leurs pratiques environnementales.",
        tags: ["achats fournisseurs", "audit"],
        answers: [
          { text: "Je laisse — les audits sont coûteux et intrusifs.", score: 0 },
          { text: "J'audite périodiquement les fournisseurs à fort impact.", score: 2 },
          { text: "Je demande des auto-déclarations plutôt que des audits.", score: 1 },
          { text: "Je m'appuie sur les certifications tierces.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "likert",
        text: "Vous suivez la performance RSE de vos fournisseurs principaux au-delà des certifications affichées.",
        tags: ["achats fournisseurs", "suivi"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      },
      {
        type: "choix",
        text: "Vous exigez des certifications RSE de vos fournisseurs mais les petits acteurs ne peuvent pas se les payer.",
        tags: ["achats fournisseurs", "petits fournisseurs"],
        answers: [
          { text: "Je maintiens les exigences — les certifications sont le standard.", score: 0 },
          { text: "J'adapte mes exigences selon la taille du fournisseur tout en maintenant le niveau d'ambition.", score: 2 },
          { text: "Je les exempte de certifications mais je les évalue sur leurs pratiques réelles.", score: 1.5 },
          { text: "Je les aide à se certifier si leur profil RSE réel est bon.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les critères RSE sont absents ou marginaux dans vos décisions d'achat", desc: "Pas de critères RSE dans le cahier des charges, pas de due diligence, pas de clauses RSE dans les contrats, pas d'audit : ces comportements traitent les achats comme une pure transaction sans dimension de responsabilité étendue. La loi sur le devoir de vigilance et les attentes des parties prenantes rendent cette posture de plus en plus risquée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez des critères RSE dans vos achats mais leur poids et l'évaluation scope 3 sont encore insuffisants", desc: "Vous intégrez des critères RSE et faites une due diligence. Mais augmenter la pondération des critères RSE pour qu'ils aient un impact réel, mesurer l'empreinte scope 3 de vos fournisseurs principaux, inclure des clauses RSE dans vos contrats significatifs : ces aspects sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Les critères RSE ont un poids réel dans vos décisions d'achat — scope 3, clauses contractuelles, due diligence", desc: "Les critères RSE ont une pondération significative dans vos décisions. Vous réalisez une due diligence RSE avant les contrats importants. Vous mesurez ou estimez l'empreinte scope 3. Vous incluez des clauses RSE dans les contrats. Vous auditez les fournisseurs à fort impact. Vous adaptez vos exigences à la taille des fournisseurs sans baisser le niveau d'ambition. Cette intégration complète de la RSE dans le processus d'achat est ce qui fait que les achats contribuent réellement aux objectifs RSE." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Votre principal fournisseur a de bonnes performances RSE mais ne les communique pas.",
        tags: ["fournisseurs responsables", "dialogue"],
        answers: [
          { text: "Je laisse — s'ils ne communiquent pas, c'est peut-être parce que ce n'est pas une priorité.", score: 0 },
          { text: "Je les encourage à mieux communiquer leurs performances — ça valorise leur travail et facilite mon évaluation.", score: 2 },
          { text: "Je leur demande les données pour mon propre reporting.", score: 1 },
          { text: "Je le note comme un point d'amélioration lors des revues.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "likert",
        text: "Vous encouragez vos fournisseurs à mesurer et communiquer leurs performances environnementales.",
        tags: ["fournisseurs responsables", "communication"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Un fournisseur a de bonnes performances générales mais de mauvaises pratiques environnementales sur un point précis.",
        tags: ["fournisseurs responsables", "amélioration"],
        answers: [
          { text: "Je laisse — son bilan global est positif.", score: 0 },
          { text: "Je lui signale le point précis et je lui donne un délai pour s'améliorer.", score: 2 },
          { text: "Je prends en compte ce point dans ma prochaine décision.", score: 1 },
          { text: "Je le remplace par un fournisseur plus performant.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Vous pourriez co-développer avec un fournisseur une solution plus durable mais ça nécessite un investissement commun.",
        tags: ["fournisseurs responsables", "innovation partagée"],
        answers: [
          { text: "Je laisse — la co-innovation dépasse le cadre d'une relation fournisseur.", score: 0 },
          { text: "J'évalue la valeur de cette co-innovation et je la propose si c'est justifié.", score: 2 },
          { text: "Je propose l'idée sans m'engager sur l'investissement.", score: 1 },
          { text: "Je remonte l'idée à ma direction pour décision.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation a développé de bonnes pratiques environnementales. Vos fournisseurs pourraient en bénéficier.",
        tags: ["fournisseurs responsables", "partage pratiques"],
        answers: [
          { text: "Je laisse — nos pratiques sont notre compétence distinctive.", score: 0 },
          { text: "Je partage ces pratiques avec nos fournisseurs pour améliorer toute la chaîne.", score: 2 },
          { text: "Je le fais si les fournisseurs le demandent.", score: 1 },
          { text: "Je propose des formations à nos fournisseurs stratégiques.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "likert",
        text: "Vous partagez les bonnes pratiques environnementales de votre organisation avec vos fournisseurs.",
        tags: ["fournisseurs responsables", "partage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Un fournisseur stratégique est impliqué dans un scandale environnemental. Vous avez un contrat long terme.",
        tags: ["fournisseurs responsables", "risque"],
        answers: [
          { text: "Je continue — changer de fournisseur en urgence coûte cher.", score: 0 },
          { text: "J'engage immédiatement un dialogue sur les mesures correctives et j'évalue si le contrat doit continuer.", score: 2 },
          { text: "J'attends de voir comment la situation évolue.", score: 0 },
          { text: "Je demande une déclaration publique d'engagement de leur part.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Un fournisseur local moins certifié RSE peut remplacer un fournisseur certifié mais distant.",
        tags: ["fournisseurs responsables", "local vs global"],
        answers: [
          { text: "Je prends le certifié — la certification prime.", score: 0 },
          { text: "J'évalue les deux en tenant compte de l'empreinte transport.", score: 2 },
          { text: "Je prends le local si la différence de qualité est acceptable.", score: 1.5 },
          { text: "Je demande au fournisseur local de se certifier avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "likert",
        text: "Vous évaluez vos fournisseurs sur l'ensemble de leur impact, y compris l'empreinte transport, et pas seulement sur les certifications.",
        tags: ["fournisseurs responsables", "évaluation globale"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      },
      {
        type: "choix",
        text: "Vos fournisseurs ont eux-mêmes des sous-traitants dont vous ne connaissez pas les pratiques.",
        tags: ["fournisseurs responsables", "transparence chaîne"],
        answers: [
          { text: "Je laisse — la responsabilité de mes fournisseurs s'arrête à leurs propres pratiques.", score: 0 },
          { text: "Je demande à mes fournisseurs clés des informations sur leurs propres sous-traitants.", score: 2 },
          { text: "Je m'appuie sur leurs certifications pour présumer de la chaîne.", score: 0.5 },
          { text: "Je l'intègre dans mes exigences contractuelles.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion de votre portefeuille fournisseurs n'intègre pas de dimension RSE", desc: "Ne pas mesurer l'empreinte scope 3, ne pas dialoguer avec les fournisseurs sur leurs pratiques, ne pas évaluer la chaîne de sous-traitance : ces comportements créent des angles morts sur les risques RSE les plus importants — qui sont souvent dans la chaîne d'approvisionnement." },
          moyen: { label: "Pratiques en développement", titre: "Vous suivez vos fournisseurs sur les pratiques RSE mais le dialogue proactif et le partage de pratiques sont encore limités", desc: "Vous suivez les certifications et signalez les points d'amélioration. Mais encourager les fournisseurs à communiquer leurs performances, partager vos bonnes pratiques avec eux, co-développer des solutions plus durables, gérer activement un scandale RSE chez un fournisseur stratégique : votre influence proactive est encore limitée." },
          haut: { label: "Réflexes installés", titre: "Vous gérez activement votre portefeuille fournisseurs sur les pratiques RSE — dialogue, partage, co-innovation", desc: "Vous encouragez les fournisseurs à mesurer et communiquer leurs performances. Vous signalez les points d'amélioration avec des délais. Vous partagez vos bonnes pratiques. Vous co-développez des solutions plus durables. Vous évaluez la chaîne de sous-traitance. Vous engagez immédiatement le dialogue en cas de scandale RSE. Cette gestion proactive de la relation fournisseurs est ce qui crée un levier d'impact bien au-delà de votre consommation directe." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vos achats contribuent aux objectifs RSE de l'organisation mais vous ne le mesurez pas.",
        tags: ["achats responsables fonctions support", "reporting"],
        answers: [
          { text: "Je laisse — mesurer la contribution des achats à la RSE est complexe.", score: 0 },
          { text: "Je cherche des indicateurs de contribution aux objectifs RSE.", score: 2 },
          { text: "Je remonte les données disponibles au service RSE.", score: 1 },
          { text: "Je propose de créer un tableau de bord achats responsables.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "likert",
        text: "Vous mesurez comment vos achats contribuent aux objectifs RSE de votre organisation.",
        tags: ["achats responsables fonctions support", "contribution RSE"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes soumis·e aux règles des marchés publics. Vous pensez que ça limite l'intégration des critères RSE.",
        tags: ["achats responsables fonctions support", "marché public"],
        answers: [
          { text: "Je laisse — les marchés publics rendent les critères RSE difficiles à intégrer.", score: 0 },
          { text: "J'explore les possibilités offertes par les marchés publics pour intégrer les critères RSE.", score: 2 },
          { text: "Je le fais de façon informelle sans les formaliser dans les appels d'offres.", score: 0.5 },
          { text: "Je demande un accompagnement juridique pour intégrer les critères RSE légalement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe achats ne sait pas comment évaluer les performances RSE des fournisseurs.",
        tags: ["achats responsables fonctions support", "formation équipe"],
        answers: [
          { text: "Je laisse — la RSE est une compétence spécialisée hors du cœur du métier achats.", score: 0 },
          { text: "Je développe la compétence RSE de mon équipe achats.", score: 2 },
          { text: "Je désigne un référent RSE dans l'équipe.", score: 1.5 },
          { text: "Je fais appel à des consultants RSE pour les dossiers importants.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "choix",
        text: "Les autres équipes qui prescrivent des achats ne prennent pas en compte les critères RSE.",
        tags: ["achats responsables fonctions support", "sensibilisation interne"],
        answers: [
          { text: "Je laisse — ce n'est pas ma responsabilité de sensibiliser les autres équipes.", score: 0 },
          { text: "Je sensibilise les prescripteurs internes aux critères RSE.", score: 2 },
          { text: "J'intègre les critères RSE dans le processus d'achat sans former les prescripteurs.", score: 1 },
          { text: "Je remonte le problème à la direction RSE.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "likert",
        text: "Vous sensibilisez les équipes prescriptrices aux critères RSE dans les achats.",
        tags: ["achats responsables fonctions support", "sensibilisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "choix",
        text: "Votre base de données fournisseurs ne comprend pas d'informations RSE.",
        tags: ["achats responsables fonctions support", "base fournisseurs"],
        answers: [
          { text: "Je laisse — la gestion de la base de données est déjà complexe.", score: 0 },
          { text: "J'ajoute des champs RSE dans la base fournisseurs.", score: 2 },
          { text: "Je tiens un fichier séparé avec les informations RSE des fournisseurs.", score: 1 },
          { text: "Je demande à la DSI d'intégrer les champs RSE.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas cartographié les risques RSE de votre portefeuille fournisseurs.",
        tags: ["achats responsables fonctions support", "gestion risque"],
        answers: [
          { text: "Je laisse — la cartographie des risques RSE dépasse les achats.", score: 0 },
          { text: "Je cartographie les risques RSE par catégorie d'achat.", score: 2 },
          { text: "Je priorise les catégories à fort impact présumé.", score: 1.5 },
          { text: "Je demande à la direction RSE de m'accompagner.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "likert",
        text: "Vous avez cartographié les risques RSE de votre portefeuille fournisseurs par catégorie d'achat.",
        tags: ["achats responsables fonctions support", "cartographie risques"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      },
      {
        type: "choix",
        text: "Vous ne présentez pas la performance RSE de vos achats à votre direction.",
        tags: ["achats responsables fonctions support", "reporting direction"],
        answers: [
          { text: "Je laisse — la direction s'intéresse surtout au prix et à la qualité.", score: 0 },
          { text: "Je construis un reporting achats responsables et je le présente régulièrement.", score: 2 },
          { text: "Je le mentionne dans le rapport RSE annuel.", score: 1 },
          { text: "Je le présente si la direction le demande.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La contribution des achats aux objectifs RSE n'est pas mesurée ni pilotée", desc: "Ne pas mesurer la contribution des achats aux objectifs RSE, ne pas sensibiliser les prescripteurs internes, ne pas avoir de base de données fournisseurs avec des données RSE : ces comportements font des achats responsables une intention sans pilotage." },
          moyen: { label: "Pratiques en développement", titre: "Vous mesurez partiellement la contribution RSE des achats mais le reporting et la formation de l'équipe sont encore perfectibles", desc: "Vous construisez des indicateurs de contribution RSE. Mais former votre équipe à l'évaluation RSE, sensibiliser les prescripteurs internes, cartographier les risques RSE par catégorie, présenter la performance RSE à votre direction : votre pilotage est encore partiel." },
          haut: { label: "Réflexes installés", titre: "La contribution RSE des achats est mesurée, pilotée et communiquée à votre direction", desc: "Vous mesurez la contribution des achats aux objectifs RSE. Vous formez votre équipe. Vous sensibilisez les prescripteurs. Vous cartographiez les risques RSE. Vous intégrez les données RSE dans la base fournisseurs. Vous présentez la performance achats responsables à votre direction. Ce pilotage complet est ce qui transforme les achats responsables d'une intention en une démarche gérée." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre organisation n'a pas de politique formelle d'achats responsables.",
        tags: ["achats fournisseurs culture", "politique"],
        answers: [
          { text: "J'attends qu'elle soit mise en place.", score: 0 },
          { text: "Je propose de contribuer à son élaboration.", score: 2 },
          { text: "J'applique des critères personnels en attendant.", score: 1.5 },
          { text: "Je fais référence aux bonnes pratiques sectorielles.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "likert",
        text: "Vous contribuez activement à l'élaboration ou l'amélioration de la politique d'achats responsables de votre organisation.",
        tags: ["achats fournisseurs culture", "politique"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "choix",
        text: "Un achat responsable coûte plus cher. Votre direction ne le comprend pas.",
        tags: ["achats fournisseurs culture", "surcoût"],
        answers: [
          { text: "Je renonce — si la direction ne comprend pas, ce n'est pas le moment.", score: 0 },
          { text: "J'explique le retour sur investissement global — risque, réputation, conformité réglementaire.", score: 2 },
          { text: "Je cherche à réduire l'écart pour le rendre acceptable.", score: 1 },
          { text: "Je le porte progressivement sur des projets pilotes.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "choix",
        text: "Vous ne participez pas aux réseaux professionnels d'achats responsables.",
        tags: ["achats fournisseurs culture", "réseau"],
        answers: [
          { text: "Je laisse — ces réseaux ne m'apportent pas directement.", score: 0 },
          { text: "Je rejoins ces réseaux pour bénéficier des retours d'expérience et partager les miens.", score: 2 },
          { text: "Je consulte leurs publications sans participer.", score: 1 },
          { text: "Je propose à mon organisation d'adhérer.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "choix",
        text: "La réglementation sur le devoir de vigilance et les achats responsables évolue. Vous ne faites pas de veille.",
        tags: ["achats fournisseurs culture", "veille réglementaire"],
        answers: [
          { text: "Je laisse — le service juridique s'en charge.", score: 0 },
          { text: "Je fais une veille sur les évolutions réglementaires qui impactent mes achats.", score: 2 },
          { text: "Je me mets à jour lors des formations annuelles.", score: 1 },
          { text: "Je me base sur les alertes de mes fournisseurs.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "likert",
        text: "Vous faites une veille sur les évolutions réglementaires et les meilleures pratiques en matière d'achats responsables.",
        tags: ["achats fournisseurs culture", "veille"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation achète souvent des produits ou services qui n'ont pas encore d'alternative plus durable sur le marché.",
        tags: ["achats fournisseurs culture", "innovation"],
        answers: [
          { text: "Je laisse — si l'alternative n'existe pas, je ne peux pas faire plus.", score: 0 },
          { text: "Je signale ces cas aux fournisseurs et à la direction pour stimuler l'innovation.", score: 2 },
          { text: "Je cherche des alternatives indirectes ou des substituts.", score: 1.5 },
          { text: "Je le documente pour anticiper la transition quand l'alternative sera disponible.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "choix",
        text: "Vous ne faites jamais de bilan annuel de votre démarche d'achats responsables.",
        tags: ["achats fournisseurs culture", "bilan"],
        answers: [
          { text: "Je laisse — les indicateurs d'achat suffisent.", score: 0 },
          { text: "Je fais un bilan annuel pour mesurer les progrès et définir les priorités suivantes.", score: 2 },
          { text: "Je le fais lors de la revue de processus annuelle.", score: 1 },
          { text: "Je me base sur les audits externes.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "choix",
        text: "Vos pratiques d'achats responsables sont correctes mais sans ambition — vous avancez sur les sujets faciles.",
        tags: ["achats fournisseurs culture", "ambition"],
        answers: [
          { text: "Je laisse — les sujets faciles créent de l'élan.", score: 0.5 },
          { text: "Je cherche à progresser sur les sujets difficiles après avoir consolidé les bases.", score: 2 },
          { text: "Je me fixe des objectifs de progression annuels sur les sujets difficiles.", score: 1.5 },
          { text: "Je propose à ma direction d'élever les ambitions.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      },
      {
        type: "likert",
        text: "Vous fixez des objectifs de progression sur vos pratiques d'achats responsables, y compris sur les sujets difficiles.",
        tags: ["achats fournisseurs culture", "progression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La démarche d'achats responsables n'est pas structurée ni portée activement", desc: "Attendre une politique formelle avant d'agir, ne pas participer aux réseaux professionnels, ne pas faire de veille réglementaire, s'en tenir aux sujets faciles : ces comportements créent une démarche qui stagne." },
          moyen: { label: "Pratiques en développement", titre: "Votre démarche est structurée mais l'ambition, la veille et la contribution à la politique sont encore insuffisantes", desc: "Vous appliquez des critères personnels en l'absence de politique formelle. Mais proposer de contribuer à la politique, faire une veille réglementaire active, rejoindre les réseaux professionnels, vous fixer des objectifs de progression sur les sujets difficiles : votre contribution systémique est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Votre démarche d'achats responsables est ambitieuse, structurée et vous contribuez à la faire progresser", desc: "Vous contribuez à la politique d'achats responsables. Vous argumentez les surcoûts par le retour sur investissement global. Vous faites une veille réglementaire. Vous participez aux réseaux professionnels. Vous signalez les cas sans alternative pour stimuler l'innovation. Vous progressez sur les sujets difficiles. Cette démarche ambitieuse et systémique est ce qui fait des achats un levier stratégique de la RSE." },
        },
      }
    ],

  },

  "engagement-transition": {
    0: [
      {
        type: "choix",
        text: "Vous ne savez pas vraiment où vous en êtes sur votre engagement environnemental personnel au travail.",
        tags: ["engagement", "situer"],
        answers: [
          { text: "Je laisse — s'évaluer n'apporte rien de concret.", score: 0 },
          { text: "Je prends le temps de faire le point sur ce que je fais déjà et ce que je pourrais faire.", score: 2 },
          { text: "Je me compare à mes collègues pour me situer.", score: 0 },
          { text: "Je participe aux bilans carbone proposés par l'organisation.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous souhaitez agir mais ne savez pas par où commencer. La liste des gestes possibles est trop longue.",
        tags: ["engagement", "premier pas"],
        answers: [
          { text: "Je renonce — trop de choix crée de la paralysie.", score: 0 },
          { text: "Je choisis un ou deux gestes concrets et je commence par là.", score: 2 },
          { text: "J'essaie de tout faire en même temps et je m'épuise.", score: 0 },
          { text: "J'attends qu'une initiative collective me donne une direction.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous choisissez des actions concrètes à votre niveau plutôt que d'attendre de pouvoir tout faire.",
        tags: ["engagement", "actions concrètes"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous avez l'impression que vos gestes individuels ne changent rien face à l'ampleur du problème.",
        tags: ["engagement", "découragement"],
        answers: [
          { text: "Je renonce à agir — mon impact marginal ne vaut pas l'effort.", score: 0 },
          { text: "Je continue mes gestes — ils contribuent à une dynamique collective même si l'impact direct est limité.", score: 2 },
          { text: "Je me concentre uniquement sur les gestes à fort impact mesurable.", score: 1 },
          { text: "Je cherche à agir plus collectivement pour avoir un impact visible.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous faites des gestes de sobriété au bureau mais votre comportement personnel hors travail est très différent.",
        tags: ["engagement", "cohérence"],
        answers: [
          { text: "Je laisse — vie professionnelle et vie personnelle sont séparées.", score: 0.5 },
          { text: "Je cherche progressivement à aligner mes comportements dans les deux sphères.", score: 2 },
          { text: "Je me concentre sur le bureau — c'est ce que l'organisation me demande.", score: 0.5 },
          { text: "Je reconnais l'incohérence sans m'en culpabiliser.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous faites régulièrement le point sur vos pratiques pour identifier un nouveau geste à adopter.",
        tags: ["engagement", "progression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Votre contexte de travail rend certains gestes difficiles — pas d'infrastructure, pas de soutien de la direction.",
        tags: ["engagement", "contexte contraignant"],
        answers: [
          { text: "J'abandonne — sans soutien, l'effort est vain.", score: 0 },
          { text: "Je fais ce qui est possible dans mon contexte et je remonte les obstacles.", score: 2 },
          { text: "Je fais uniquement ce qui est facile et visible.", score: 0.5 },
          { text: "Je cherche des alliés pour créer les conditions manquantes.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Votre engagement environnemental fluctue selon l'actualité, les saisons et les initiatives organisationnelles.",
        tags: ["engagement", "motivation"],
        answers: [
          { text: "Je laisse — la fluctuation est normale.", score: 0.5 },
          { text: "Je cherche à m'appuyer sur des routines durables plutôt que sur la motivation du moment.", score: 2 },
          { text: "Je m'engage davantage lors des initiatives organisationnelles.", score: 1 },
          { text: "Je reconnais la fluctuation et j'essaie de maintenir un minimum constant.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vos gestes environnementaux reposent sur des routines durables plutôt que sur la motivation du moment.",
        tags: ["engagement", "routines"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous avez du mal à trouver du sens à votre engagement environnemental au travail.",
        tags: ["engagement", "sens"],
        answers: [
          { text: "Je laisse — le sens vient ou ne vient pas.", score: 0 },
          { text: "Je cherche à relier mes gestes à des objectifs plus larges pour redonner du sens.", score: 2 },
          { text: "Je continue par obligation même sans sens particulier.", score: 0.5 },
          { text: "J'en parle à des collègues plus engagés pour me ressourcer.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre engagement est encore peu structuré — vous ne savez pas par où commencer ni comment situer votre niveau", desc: "Ne pas faire le point sur ses pratiques actuelles, attendre une initiative collective pour commencer, ne pas savoir quels gestes ont le plus d'impact, fluctuer selon la motivation du moment : ces comportements créent un engagement fragile. L'enjeu est de construire des routines qui tiennent indépendamment de la motivation." },
          moyen: { label: "Pratiques en développement", titre: "Vous êtes engagé·e sur les bases mais la progression vers des gestes plus challengeants et la durabilité sont encore insuffisantes", desc: "Vous faites le point et avez des routines. Mais progresser vers des gestes plus challengeants, construire des routines indépendantes de la motivation, relier vos gestes à des objectifs plus larges pour trouver du sens : votre engagement est encore limité aux gestes les plus faciles." },
          haut: { label: "Réflexes installés", titre: "Votre engagement est structuré, situé et progresse régulièrement vers des gestes plus significatifs", desc: "Vous avez fait le point sur vos pratiques et vous savez où vous en êtes. Vous choisissez un ou deux gestes concrets et vous commencez. Vous élargissez progressivement à des gestes plus challengeants. Vous cherchez quels postes d'émission sont les plus importants. Vous reliez vos gestes à des objectifs plus larges. Vous faites régulièrement le point pour identifier le prochain geste. Cet engagement structuré et progressif — qui ne cherche pas la perfection mais l'amélioration continue — est ce qui crée un impact réel dans la durée." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous vous limitez aux gestes les plus simples et évitez ceux qui demandent un vrai changement de comportement.",
        tags: ["transition", "niveau d'action"],
        answers: [
          { text: "Je laisse — les petits gestes sont durables, les grands ne le sont pas.", score: 0.5 },
          { text: "Je cherche progressivement à élargir à des gestes plus challengeants.", score: 2 },
          { text: "Je fais les grands gestes ponctuellement et les petits au quotidien.", score: 1 },
          { text: "Je me fixe un nouveau geste par trimestre hors de ma zone de confort.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "likert",
        text: "Vous sortez progressivement de votre zone de confort pour adopter des gestes environnementaux plus significatifs.",
        tags: ["transition", "progression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "choix",
        text: "Un geste que vous avez essayé n'a pas fonctionné pour vous. Vous abandonnez cette piste.",
        tags: ["transition", "apprentissage"],
        answers: [
          { text: "Je laisse — si ça ne marche pas, c'est que ce n'est pas pour moi.", score: 0 },
          { text: "J'analyse pourquoi ça n'a pas fonctionné et je teste une approche différente.", score: 2 },
          { text: "Je cherche un geste alternatif avec le même impact.", score: 1.5 },
          { text: "Je réessaie dans un meilleur contexte.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "choix",
        text: "Vous ne savez pas très bien quels sont les gestes qui ont le plus d'impact dans votre contexte professionnel.",
        tags: ["transition", "information"],
        answers: [
          { text: "Je laisse — tous les gestes sont utiles.", score: 0.5 },
          { text: "Je cherche à comprendre quels postes d'émission sont les plus importants pour prioriser.", score: 2 },
          { text: "Je m'appuie sur les recommandations générales.", score: 1 },
          { text: "Je demande à mon service RSE de me guider.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "choix",
        text: "Vos gestes ne produisent pas de résultats visibles à court terme. Vous vous découragez.",
        tags: ["transition", "impact visible"],
        answers: [
          { text: "Je renonce — sans résultats visibles, l'effort ne se justifie pas.", score: 0 },
          { text: "Je cherche des indicateurs à court terme pour voir ma progression même si l'impact global est lent.", score: 2 },
          { text: "Je continue par principe sans chercher à mesurer.", score: 1 },
          { text: "Je me concentre sur les gestes avec des résultats mesurables immédiats.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "likert",
        text: "Vous vous donnez des indicateurs de progrès à court terme pour rester motivé malgré l'impact lent.",
        tags: ["transition", "indicateurs progrès"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "choix",
        text: "Vous identifiez des blocages systémiques dans votre organisation qui empêchent des actions plus ambitieuses.",
        tags: ["transition", "blocages systémiques"],
        answers: [
          { text: "Je laisse — les blocages systémiques ne sont pas de mon ressort.", score: 0 },
          { text: "Je les remonte aux personnes compétentes avec des propositions concrètes.", score: 2 },
          { text: "Je travaille dans les marges de manœuvre disponibles.", score: 1.5 },
          { text: "J'en parle à des collègues pour voir si nous pouvons agir collectivement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation offre des ressources — formations, outils, référents — pour soutenir l'engagement environnemental. Vous ne les utilisez pas.",
        tags: ["transition", "ressources"],
        answers: [
          { text: "Je laisse — ces ressources ne correspondent pas à mes besoins.", score: 0 },
          { text: "Je les explore pour voir ce qui peut m'aider.", score: 2 },
          { text: "Je les utilise si elles sont pratiques et sans investissement de temps excessif.", score: 1 },
          { text: "Je propose des ressources complémentaires si celles disponibles sont insuffisantes.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "likert",
        text: "Vous utilisez les ressources proposées par votre organisation pour soutenir votre engagement environnemental.",
        tags: ["transition", "ressources disponibles"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      },
      {
        type: "choix",
        text: "Vous voulez faire beaucoup mais vos contraintes professionnelles et personnelles limitent vos possibilités.",
        tags: ["transition", "ambition réaliste"],
        answers: [
          { text: "Je renonce à des objectifs ambitieux — la réalité l'impose.", score: 0 },
          { text: "Je calibre mes ambitions à mes contraintes réelles pour rester dans une logique durable.", score: 2 },
          { text: "Je maintiens des objectifs élevés même si je les atteins rarement.", score: 0 },
          { text: "Je me donne des priorités claires plutôt qu'une longue liste.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous limitez aux gestes les plus faciles et vous décourager quand les résultats ne sont pas visibles", desc: "S'en tenir aux gestes les plus simples, renoncer quand un geste n'a pas fonctionné, ne pas chercher à mesurer sa progression, ne pas utiliser les ressources disponibles : ces comportements maintiennent l'engagement à un niveau bas sans progression." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez des gestes réguliers mais la priorisation par impact et la gestion des blocages systémiques sont encore perfectibles", desc: "Vous remontez les blocages et utilisez les ressources disponibles. Mais vous donner des indicateurs de progression à court terme, analyser pourquoi un geste n'a pas fonctionné pour tester une approche différente, calibrer vos ambitions à vos contraintes réelles : votre gestion du découragement est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos gestes grâce à des routines durables, vous priorisez par impact et vous remontez les blocages", desc: "Vos gestes reposent sur des routines et non sur la motivation du moment. Vous analysez pourquoi un geste n'a pas fonctionné. Vous vous donnez des indicateurs de progression à court terme. Vous remontez les blocages systémiques avec des propositions. Vous calibrez vos ambitions à vos contraintes réelles. Vous utilisez les ressources proposées par l'organisation. Cette sobriété de l'engagement — qui préfère la durabilité à l'intensité — est ce qui distingue les changements durables des résolutions ponctuelles." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Des collègues vous disent que vos efforts sont inutiles ou exagérés.",
        tags: ["découragement", "pression"],
        answers: [
          { text: "Je m'aligne — si beaucoup pensent ça, je survalorise peut-être la situation.", score: 0 },
          { text: "Je maintiens mon engagement en assumant d'avoir une position différente.", score: 2 },
          { text: "Je continue sans chercher à les convaincre.", score: 1.5 },
          { text: "Je cherche à comprendre leur scepticisme sans me décourager.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez votre engagement face au scepticisme de vos collègues sans vous décourager ni chercher à les convertir.",
        tags: ["découragement", "résistance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "choix",
        text: "L'actualité climatique est anxiogène. Vous avez du mal à vous concentrer sur votre quotidien professionnel.",
        tags: ["découragement", "actualité"],
        answers: [
          { text: "Je me déconnecte de l'actualité climatique — c'est trop pesant.", score: 0 },
          { text: "Je cherche un équilibre entre rester informé et préserver mon énergie pour agir.", score: 2 },
          { text: "Je me concentre sur ce que je peux faire plutôt que sur ce que je ne peux pas contrôler.", score: 2 },
          { text: "Je partage mon anxiété avec des collègues qui partagent mes préoccupations.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous avez relâché vos pratiques environnementales pendant une période difficile professionnellement.",
        tags: ["découragement", "rechute"],
        answers: [
          { text: "Je laisse — les périodes de relâchement sont définitives.", score: 0 },
          { text: "Je reprends sans me culpabiliser — les rechutes font partie du changement.", score: 2 },
          { text: "Je reprends en recommençant de zéro.", score: 1 },
          { text: "Je m'impose des contraintes plus strictes pour compenser.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous ressentez une pression à faire toujours plus qui vous épuise.",
        tags: ["découragement", "injonctions"],
        answers: [
          { text: "Je succombe à la pression — l'urgence climatique justifie l'effort maximum.", score: 0 },
          { text: "Je pose mes limites et je définis un niveau d'engagement durable pour moi.", score: 2 },
          { text: "Je réduis mon engagement pour me protéger.", score: 0.5 },
          { text: "Je cherche un niveau d'engagement qui ne compromet pas mon bien-être.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous définissez un niveau d'engagement environnemental qui est durable pour vous sans vous épuiser.",
        tags: ["découragement", "limites saines"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas l'impression de progresser malgré vos efforts.",
        tags: ["découragement", "progression visible"],
        answers: [
          { text: "Je renonce — si je ne progresse pas, l'effort n'a pas de sens.", score: 0 },
          { text: "Je cherche à mesurer ma progression autrement ou à changer d'approche.", score: 2 },
          { text: "Je continue sans me demander si je progresse.", score: 1 },
          { text: "Je cherche un retour extérieur pour avoir une autre perspective.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas de collègues avec qui partager votre engagement environnemental au travail.",
        tags: ["découragement", "soutien"],
        answers: [
          { text: "Je laisse — l'engagement est personnel.", score: 0.5 },
          { text: "Je cherche des allié·es dans l'organisation — réseau RSE, collègues engagés.", score: 2 },
          { text: "Je rejoins une communauté externe.", score: 1 },
          { text: "Je propose de créer un groupe de partage si l'organisation le soutient.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez des allié·es dans votre organisation pour partager votre engagement et vous ressourcer.",
        tags: ["découragement", "communauté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous ne reconnaissez jamais vos propres progrès, même réels.",
        tags: ["découragement", "fier"],
        answers: [
          { text: "Je laisse — l'auto-satisfaction est dangereuse — il faut rester humble.", score: 0 },
          { text: "Je reconnais mes progrès avec bienveillance — c'est ce qui me permet de continuer.", score: 2 },
          { text: "Je note mes progrès sans les célébrer.", score: 1 },
          { text: "Je partage mes progrès avec des collègues pour créer une dynamique positive.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous êtes facilement découragé·e par les obstacles, le scepticisme de vos collègues ou la pression", desc: "Se décourager face aux collègues sceptiques, abandonner après une période difficile, succomber à la pression à tout faire ou ne rien faire, ne pas trouver d'allié·es : ces comportements créent un engagement instable qui dépend des conditions extérieures." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez au scepticisme ordinaire mais la gestion des periods difficiles et de la pression sont encore des angles morts", desc: "Vous maintenez vos gestes face au scepticisme. Mais reprendre sans culpabilité après un relâchement, trouver l'équilibre entre rester informé et préserver votre énergie, reconnaître vos propres progrès avec bienveillance : les périodes difficiles créent encore des relâchements durables." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — scepticisme, périodes difficiles, pression — sans vous épuiser", desc: "Vous maintenez votre engagement face au scepticisme. Vous reprenez sans culpabilité après un relâchement. Vous trouvez l'équilibre entre information et protection de votre énergie. Vous posez vos limites face à la pression à tout faire. Vous cherchez des allié·es dans l'organisation. Vous reconnaissez vos propres progrès avec bienveillance. Cette résilience de l'engagement — qui suppose d'accepter les hauts et les bas sans en faire des raisons d'arrêter — est ce qui permet de tenir dans la durée." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Un collègue jette ses déchets dans la mauvaise poubelle. Vous êtes tenté·e de le reprendre.",
        tags: ["embarquer", "sans moraliser"],
        answers: [
          { text: "Je le laisse — ce n'est pas mon rôle de le corriger.", score: 0.5 },
          { text: "Je lui signale gentiment en l'informant plutôt qu'en le jugeant.", score: 2 },
          { text: "Je le reprends directement — c'est important.", score: 0 },
          { text: "Je lui montre l'exemple sans rien dire.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "likert",
        text: "Vous partagez vos pratiques environnementales en informant plutôt qu'en jugeant.",
        tags: ["embarquer", "information"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "choix",
        text: "Vous insistez beaucoup sur les sujets environnementaux auprès de vos collègues et vous créez de la résistance.",
        tags: ["embarquer", "pression"],
        answers: [
          { text: "Je maintiens — l'urgence justifie l'insistance.", score: 0 },
          { text: "Je reconsidère mon approche — moins d'insistance et plus d'exemple.", score: 2 },
          { text: "Je réduis ma fréquence de communication sans changer de message.", score: 1 },
          { text: "Je cible les collègues plus réceptifs.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "choix",
        text: "Un collègue vous demande pourquoi vous faites certains gestes environnementaux.",
        tags: ["embarquer", "curiosité"],
        answers: [
          { text: "Je lui donne un cours sur l'urgence climatique.", score: 0 },
          { text: "Je lui explique mes raisons simplement et je lui laisse se faire sa propre opinion.", score: 2 },
          { text: "Je lui donne des chiffres et des faits.", score: 0.5 },
          { text: "Je l'invite à essayer un geste concret.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "choix",
        text: "Vous avez une idée pour améliorer les pratiques environnementales dans votre équipe mais vous ne la soumettez pas.",
        tags: ["embarquer", "initiatives"],
        answers: [
          { text: "Je laisse — ce n'est pas mon rôle de proposer des initiatives RSE.", score: 0 },
          { text: "Je la soumets à mon manager ou aux voies appropriées.", score: 2 },
          { text: "Je la partage informellement avec des collègues.", score: 1 },
          { text: "Je l'essaie moi-même avant de la proposer à d'autres.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "likert",
        text: "Vous soumettez vos idées d'amélioration environnementale aux voies appropriées dans votre organisation.",
        tags: ["embarquer", "initiatives"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "choix",
        text: "Vous pensez que ceux qui ne font pas les mêmes gestes que vous sont irresponsables.",
        tags: ["embarquer", "diversité engagements"],
        answers: [
          { text: "Je partage ce jugement — l'urgence ne laisse pas de place à l'indifférence.", score: 0 },
          { text: "Je reconnais que les personnes s'engagent différemment selon leurs contraintes et leur parcours.", score: 2 },
          { text: "Je réserve mon jugement pour les cas d'ignorance volontaire.", score: 1 },
          { text: "Je cherche à comprendre les raisons du désengagement avant de juger.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation lance une initiative collective environnementale. Vous n'êtes pas convaincu·e de son efficacité.",
        tags: ["embarquer", "collectif"],
        answers: [
          { text: "Je ne participe pas — si je ne suis pas convaincu·e, mon engagement serait superficiel.", score: 0 },
          { text: "Je participe en apportant mes idées d'amélioration — ma contribution peut améliorer l'initiative.", score: 2 },
          { text: "Je participe par solidarité même sans conviction.", score: 1 },
          { text: "Je propose des ajustements avant de m'engager.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "likert",
        text: "Vous participez aux initiatives collectives environnementales même quand vous avez des réserves, en apportant vos idées.",
        tags: ["embarquer", "participation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe ne fait aucune démarche environnementale. Vous ressentez de l'isolement.",
        tags: ["embarquer", "fierté équipe"],
        answers: [
          { text: "Je m'aligne sur la norme de l'équipe — l'isolement n'est pas vivable.", score: 0 },
          { text: "Je maintiens mes gestes individuels et cherche des allié·es progressivement.", score: 2 },
          { text: "Je maintiens mes gestes sans chercher à influencer l'équipe.", score: 1 },
          { text: "Je propose une initiative collective à taille réduite pour créer un premier élan.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'embarquez pas encore vos collègues ou le faites de façon contreproductive", desc: "Ne pas partager ses pratiques, créer de la résistance par l'insistance, juger les collègues moins engagés, ne pas participer aux initiatives collectives parce qu'on n'est pas convaincu : ces comportements isolent plutôt que d'embarquer." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez vos pratiques mais votre approche pour embarquer sans moraliser est encore perfectible", desc: "Vous partagez en informant plutôt qu'en jugeant. Mais reconsidérer votre approche quand vous créez de la résistance, reconnaître que chacun s'engage différemment, participer aux initiatives collectives même sans conviction totale : votre façon d'embarquer crée encore de la résistance." },
          haut: { label: "Réflexes installés", titre: "Vous embarquez sans moraliser, en partageant l'exemple et en participant aux initiatives collectives", desc: "Vous informez sans juger. Vous reconsidérez votre approche quand vous créez de la résistance. Vous expliquez simplement vos raisons et laissez vos collègues décider. Vous soumettez vos idées d'amélioration. Vous reconnaissez que chacun s'engage différemment. Vous participez aux initiatives collectives même avec des réserves. Vous maintenez vos gestes individuels dans l'isolement. Cet embarquement sans pression — qui part de l'exemple et respecte le rythme des autres — est ce qui crée une dynamique collective durable." },
        },
      }
    ],

  },

  "animer-rse-equipe": {
    0: [
      {
        type: "choix",
        text: "Vous parlez de RSE à votre équipe mais vos pratiques personnelles au bureau ne sont pas particulièrement exemplaires.",
        tags: ["animer RSE", "exemplarité"],
        answers: [
          { text: "Je laisse — manager la RSE ne signifie pas être un saint.", score: 0 },
          { text: "J'aligne mes pratiques avant de demander à l'équipe — le message sans l'exemple ne passe pas.", score: 2 },
          { text: "Je reconnais l'incohérence et j'y travaille progressivement.", score: 1.5 },
          { text: "Je sépare les deux — mon rôle est d'animer, pas d'être un modèle.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous avez tendance à sur-communiquer sur la RSE dans votre équipe au point que le sujet lasse.",
        tags: ["animer RSE", "surjouer"],
        answers: [
          { text: "Je maintiens — l'urgence justifie l'insistance.", score: 0 },
          { text: "Je recalibre pour que la RSE soit intégrée normalement dans le travail sans devenir un sujet à part entière.", score: 2 },
          { text: "Je réduis la fréquence sans changer le fond.", score: 1 },
          { text: "Je cherche à comprendre pourquoi ça lasse avant de changer d'approche.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous intégrez la RSE dans les sujets ordinaires du travail plutôt que d'en faire un sujet à part systématiquement.",
        tags: ["animer RSE", "intégration naturelle"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe présente des niveaux d'engagement très différents sur les sujets RSE.",
        tags: ["animer RSE", "diversité engagement"],
        answers: [
          { text: "Je tire vers le bas pour ne pas créer de tensions entre les plus et les moins engagés.", score: 0 },
          { text: "Je m'appuie sur les plus engagés pour tirer les autres sans créer de pression.", score: 2 },
          { text: "Je traite tous les membres de la même façon sans tenir compte des différences.", score: 0.5 },
          { text: "Je travaille avec chacun à son niveau sans chercher à uniformiser.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous animez la RSE parce que c'est attendu par votre direction, pas par conviction personnelle.",
        tags: ["animer RSE", "engagement authentique"],
        answers: [
          { text: "Je l'anime de façon formelle sans chercher à convaincre — c'est honnête.", score: 0 },
          { text: "Je cherche à développer ma propre compréhension des enjeux pour animer avec conviction.", score: 2 },
          { text: "Je délègue l'animation RSE à quelqu'un de plus convaincu.", score: 1 },
          { text: "Je l'anime professionnellement même sans conviction forte.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous animez la RSE avec une conviction authentique, pas seulement parce que c'est attendu.",
        tags: ["animer RSE", "conviction"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe adopte des gestes RSE visibles mais sans impact réel — recyclage de plastique mais vols fréquents non questionnés.",
        tags: ["animer RSE", "greenwashing équipe"],
        answers: [
          { text: "Je laisse — les petits gestes créent une culture.", score: 0.5 },
          { text: "Je guide l'équipe vers les gestes à fort impact en étant transparent sur la hiérarchie des actions.", score: 2 },
          { text: "J'attends que l'équipe fasse le chemin elle-même.", score: 0 },
          { text: "Je mentionne les gestes à fort impact sans dénigrer les petits gestes.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous ne savez pas quelles ressources RSE l'organisation met à disposition de votre équipe.",
        tags: ["animer RSE", "ressources"],
        answers: [
          { text: "Je laisse — le service RSE doit les communiquer directement.", score: 0 },
          { text: "Je me renseigne pour pouvoir orienter mon équipe.", score: 2 },
          { text: "Je leur dis de chercher sur l'intranet.", score: 0.5 },
          { text: "Je demande au service RSE de venir présenter à mon équipe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous connaissez les ressources RSE disponibles pour votre équipe et vous les lui transmettez activement.",
        tags: ["animer RSE", "ressources"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe fait des gestes RSE sans vraiment comprendre pourquoi — c'est une obligation.",
        tags: ["animer RSE", "sens"],
        answers: [
          { text: "Je laisse — l'obligation produit les mêmes gestes que la conviction.", score: 0 },
          { text: "Je travaille à donner du sens en expliquant le lien entre les gestes et les enjeux réels.", score: 2 },
          { text: "Je fournis les informations disponibles sans forcer le sens.", score: 1 },
          { text: "Je cherche ce qui les motiverait intrinsèquement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre animation RSE est formelle et peu convaincante — sans exemplarité ni intégration naturelle dans le travail", desc: "Animer la RSE par obligation sans conviction, sur-communiquer au point de lasser, ne pas être exemplaire dans ses propres comportements, laisser l'équipe faire des gestes visibles sans impact réel : ces comportements créent une culture RSE de façade." },
          moyen: { label: "Pratiques en développement", titre: "Vous animez avec conviction et exemplarité mais l'intégration naturelle et la gestion de la diversité d'engagement sont encore insuffisantes", desc: "Vous êtes exemplaire et vous animez avec conviction. Mais intégrer la RSE naturellement dans les sujets ordinaires plutôt que d'en faire un sujet à part, vous appuyer sur les membres les plus engagés pour tirer les autres, guider l'équipe vers les gestes à fort impact : votre animation est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous animez avec conviction authentique, exemplarité et intégration naturelle dans le travail ordinaire", desc: "Vous êtes exemplaire dans vos comportements. Vous animez avec conviction authentique pas seulement par obligation. Vous intégrez la RSE dans les sujets ordinaires sans en faire un sujet à part. Vous vous appuyez sur les membres engagés. Vous guidez vers les gestes à fort impact. Vous connaissez et transmettez les ressources disponibles. Vous donnez du sens. Cette animation authentique et naturelle — qui commence par l'exemple et intègre la RSE dans le management ordinaire — est ce qui crée une culture réelle." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Les questions RSE n'ont jamais d'espace dans vos réunions d'équipe sauf en cas de problème.",
        tags: ["engagement collectif", "espace dialogue"],
        answers: [
          { text: "Je laisse — la réunion d'équipe est pour les sujets opérationnels.", score: 0 },
          { text: "J'intègre un point RSE régulier dans l'ordre du jour.", score: 2 },
          { text: "J'aborde la RSE lors des temps dédiés proposés par l'organisation.", score: 1 },
          { text: "Je crée un canal de communication dédié pour les sujets RSE.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "likert",
        text: "Vous créez régulièrement des espaces de dialogue sur les sujets RSE dans votre équipe.",
        tags: ["engagement collectif", "espace"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe a des idées pour améliorer les pratiques RSE mais ne les exprime pas.",
        tags: ["engagement collectif", "idées"],
        answers: [
          { text: "Je laisse — si personne ne parle, c'est peut-être qu'il n'y a pas d'idées.", score: 0 },
          { text: "Je crée des occasions explicites pour que les idées émergent.", score: 2 },
          { text: "Je les sollicite individuellement.", score: 1 },
          { text: "Je propose une boîte à idées RSE.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe n'a jamais de projet RSE collectif qui lui appartienne.",
        tags: ["engagement collectif", "projet collectif"],
        answers: [
          { text: "Je laisse — les projets RSE appartiennent au service RSE.", score: 0 },
          { text: "Je propose que l'équipe choisisse et pilote elle-même un projet RSE.", score: 2 },
          { text: "Je co-pilote un projet RSE avec l'équipe.", score: 1.5 },
          { text: "Je désigne un référent RSE dans l'équipe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "choix",
        text: "Les progrès RSE de votre équipe ne sont jamais mesurés ni partagés.",
        tags: ["engagement collectif", "progrès"],
        answers: [
          { text: "Je laisse — mesurer les progrès RSE est complexe.", score: 0 },
          { text: "Je cherche des indicateurs simples et je partage les progrès régulièrement.", score: 2 },
          { text: "Je partage les progrès lors du bilan annuel.", score: 0.5 },
          { text: "Je partage les progrès des initiatives visibles sans mesure formelle.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "likert",
        text: "Vous mesurez et partagez régulièrement les progrès RSE de votre équipe.",
        tags: ["engagement collectif", "mesure"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "choix",
        text: "L'engagement RSE de votre équipe bute sur des obstacles structurels — manque d'infrastructure, de temps, de budget.",
        tags: ["engagement collectif", "obstacles"],
        answers: [
          { text: "Je laisse — les obstacles structurels ne sont pas de mon ressort.", score: 0 },
          { text: "Je remonte les obstacles avec des propositions concrètes pour les lever.", score: 2 },
          { text: "Je cherche des solutions de contournement dans les contraintes.", score: 1.5 },
          { text: "Je protège l'élan collectif en agissant dans les marges de manœuvre disponibles.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe a atteint un objectif RSE. Vous ne le célébrez pas.",
        tags: ["engagement collectif", "célébration"],
        answers: [
          { text: "Je laisse — célébrer des obligations n'est pas utile.", score: 0 },
          { text: "Je célèbre l'atteinte des objectifs RSE comme les autres objectifs.", score: 2 },
          { text: "Je le mentionne lors du bilan annuel.", score: 0.5 },
          { text: "Je le valorise auprès de la direction.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "likert",
        text: "Vous célébrez les progrès RSE de votre équipe avec autant d'enthousiasme que ses autres résultats.",
        tags: ["engagement collectif", "célébration"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      },
      {
        type: "choix",
        text: "La direction valorise publiquement la RSE mais ne l'intègre pas dans les objectifs ni les évaluations.",
        tags: ["engagement collectif", "cohérence"],
        answers: [
          { text: "Je m'aligne sur les priorités réelles — la RSE n'est pas une vraie priorité.", score: 0 },
          { text: "J'intègre la RSE dans les évaluations de mon équipe même sans signal fort de la direction.", score: 2 },
          { text: "Je remonte le décalage à la direction.", score: 1.5 },
          { text: "Je maintiens les pratiques RSE dans mon équipe indépendamment de la direction.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'engagement collectif de votre équipe n'est pas activement construit ni mesuré", desc: "Ne jamais créer d'espace de dialogue RSE dans les réunions, ne pas solliciter les idées de l'équipe, ne pas mesurer ni partager les progrès, ne pas valoriser les résultats RSE autant que les autres : ces comportements laissent l'engagement collectif se construire par défaut." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces et des projets collectifs mais la mesure et l'ancrage des pratiques sont encore perfectibles", desc: "Vous créez des espaces de dialogue et des occasions pour les idées. Mais mesurer et partager régulièrement les progrès, remonter les obstacles structurels avec des propositions, célébrer les progrès RSE autant que les autres résultats : votre construction du collectif est encore insuffisante." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement l'engagement collectif — espaces, projets, mesure, célébration, obstacles", desc: "Vous créez des espaces réguliers de dialogue RSE. Vous sollicitez les idées. Vous proposez des projets collectifs. Vous mesurez et partagez les progrès. Vous remontez les obstacles. Vous célébrez les résultats. Vous intégrez la RSE dans les évaluations même sans signal fort de la direction. Cette construction active de l'engagement collectif — qui traite la RSE comme n'importe quel autre objectif de performance — est ce qui crée une équipe engagée." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous devez choisir entre une approche qui maximise la performance à court terme et une autre qui réduit l'impact environnemental.",
        tags: ["arbitrage RSE", "performance vs impact"],
        answers: [
          { text: "Je priorise la performance — c'est l'objectif premier.", score: 0 },
          { text: "Je cherche une approche qui concilie les deux avant de trancher.", score: 2 },
          { text: "Je priorise la réduction d'impact — c'est une exigence non négociable.", score: 1 },
          { text: "Je rends le dilemme visible à ma direction pour qu'elle arbitre.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "likert",
        text: "Face à un arbitrage performance/impact, vous cherchez d'abord une approche qui concilie les deux avant de trancher.",
        tags: ["arbitrage RSE", "conciliation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "choix",
        text: "Des gestes RSE ambitieux nécessiteraient un budget supplémentaire que vous n'avez pas.",
        tags: ["arbitrage RSE", "budget"],
        answers: [
          { text: "Je renonce aux gestes ambitieux — sans budget, ce n'est pas possible.", score: 0 },
          { text: "Je cherche des gestes ambitieux à coût nul ou faible ET je construis le business case pour les gestes qui nécessitent un investissement.", score: 2 },
          { text: "Je fais des gestes sans investissement et j'attends un budget.", score: 1 },
          { text: "Je remonte le besoin de budget à la direction.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "choix",
        text: "Votre direction vous demande de couper les investissements RSE pour atteindre vos objectifs financiers.",
        tags: ["arbitrage RSE", "pression direction"],
        answers: [
          { text: "Je coupe — la direction a la légitimité pour arbitrer.", score: 0 },
          { text: "J'exprime clairement l'impact de ces coupes et je propose des alternatives moins coûteuses.", score: 2 },
          { text: "Je coupe les investissements visibles en maintenant les comportements.", score: 1 },
          { text: "Je remonte le risque réputationnel de couper la RSE.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "choix",
        text: "Une urgence opérationnelle pousse à oublier temporairement les pratiques RSE installées.",
        tags: ["arbitrage RSE", "urgence court terme"],
        answers: [
          { text: "J'accepte la suspension temporaire — l'urgence prime.", score: 0 },
          { text: "Je maintiens les pratiques RSE même en urgence — les suspensions créent des précédents difficiles à invalider.", score: 2 },
          { text: "Je suspend uniquement les pratiques les plus contraignantes.", score: 0.5 },
          { text: "Je rappelle à l'équipe de reprendre les pratiques une fois l'urgence passée.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez les pratiques RSE installées même sous la pression des urgences opérationnelles.",
        tags: ["arbitrage RSE", "résilience"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "choix",
        text: "Vous avez dû faire un compromis entre performance et impact environnemental. L'équipe l'a observé.",
        tags: ["arbitrage RSE", "compromis visible"],
        answers: [
          { text: "Je laisse — les arbitrages sont une réalité du management.", score: 0.5 },
          { text: "J'explique le dilemme et le raisonnement à l'équipe pour qu'elle comprenne.", score: 2 },
          { text: "Je l'assume sans l'expliquer.", score: 0 },
          { text: "Je cherche à compenser dans un autre domaine.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "choix",
        text: "L'impact environnemental le plus important de votre activité est hors de votre périmètre de décision.",
        tags: ["arbitrage RSE", "périmètre"],
        answers: [
          { text: "Je laisse — ce qui est hors de mon périmètre ne me concerne pas.", score: 0 },
          { text: "Je remonte l'information aux décideurs compétents avec des propositions.", score: 2 },
          { text: "Je travaille sur les sujets dans mon périmètre sans remonter.", score: 1 },
          { text: "Je cherche à élargir mon périmètre d'influence.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "likert",
        text: "Vous remontez les sujets RSE qui dépassent votre périmètre aux décideurs compétents avec des propositions.",
        tags: ["arbitrage RSE", "influence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation ne communique pas honnêtement sur ses performances RSE réelles.",
        tags: ["arbitrage RSE", "transparence"],
        answers: [
          { text: "Je m'aligne — si l'organisation ne veut pas être transparente, je ne peux pas l'imposer.", score: 0 },
          { text: "Je suis transparent avec mon équipe sur les performances réelles dans mon périmètre.", score: 2 },
          { text: "Je remonte le manque de transparence à ma direction.", score: 1.5 },
          { text: "Je ne prends pas position — ce n'est pas mon rôle.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux arbitrages entre performance et impact, la performance l'emporte systématiquement", desc: "Prioriser systématiquement la performance sans chercher à concilier, couper les investissements RSE sans résistance, suspendre les pratiques lors des urgences, ne pas remonter les sujets RSE hors de son périmètre : ces comportements signalent que la RSE est négociable." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez à concilier mais la résilience face aux urgences et aux pressions de direction est encore insuffisante", desc: "Vous cherchez à concilier performance et impact. Mais maintenir les pratiques RSE sous la pression des urgences opérationnelles, résister aux demandes de couper les investissements RSE, expliquer les dilemmes à l'équipe quand vous faites un compromis : votre résilience face aux pressions est encore perfectible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez les arbitrages RSE même sous pression et vous êtes transparent sur les dilemmes", desc: "Vous cherchez à concilier performance et impact avant de trancher. Vous construisez le business case pour les investissements RSE. Vous exprimez l'impact des demandes de coupes. Vous maintenez les pratiques lors des urgences. Vous expliquez vos dilemmes à l'équipe. Vous remontez les sujets hors périmètre. Vous êtes transparent sur les performances réelles. Cette résilience et cette transparence des arbitrages — qui suppose d'accepter d'être en désaccord avec la direction — est ce qui crée la confiance." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "L'engagement RSE de votre équipe est fort lors des moments forts mais retombe ensuite.",
        tags: ["maintenir élan", "durabilité"],
        answers: [
          { text: "Je laisse — c'est la dynamique naturelle des équipes.", score: 0 },
          { text: "Je cherche à créer une dynamique de fond qui tient entre les moments forts.", score: 2 },
          { text: "Je multiplie les moments forts pour compenser.", score: 0.5 },
          { text: "Je m'appuie sur les référents RSE de l'équipe pour maintenir l'élan.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "likert",
        text: "Vous construisez une dynamique RSE de fond dans votre équipe qui ne dépend pas des moments forts.",
        tags: ["maintenir élan", "dynamique de fond"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "choix",
        text: "Vous ne faites jamais de bilan annuel de votre management RSE.",
        tags: ["maintenir élan", "bilan"],
        answers: [
          { text: "Je laisse — les résultats globaux de l'organisation suffisent.", score: 0 },
          { text: "Je fais un bilan annuel avec mon équipe pour mesurer les progrès et définir les priorités.", score: 2 },
          { text: "Je le fais lors de ma propre évaluation.", score: 0.5 },
          { text: "Je demande un feedback à mon équipe sur ce sujet.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "choix",
        text: "Les nouveaux membres de votre équipe ne sont pas sensibilisés à la culture RSE de l'équipe lors de leur onboarding.",
        tags: ["maintenir élan", "nouveaux"],
        answers: [
          { text: "Je laisse — ils s'adapteront progressivement.", score: 0 },
          { text: "J'intègre la dimension RSE dans mon onboarding.", score: 2 },
          { text: "Je les dirige vers les ressources RSE de l'organisation.", score: 1 },
          { text: "Je les jumelle avec un membre engagé de l'équipe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "choix",
        text: "Les bonnes pratiques RSE de votre équipe disparaissent quand vous êtes absent·e ou que vous changez de poste.",
        tags: ["maintenir élan", "ancrage"],
        answers: [
          { text: "Je laisse — l'ancrage dépend d'un leader.", score: 0 },
          { text: "Je travaille à ancrer les pratiques dans les processus et à former des relais dans l'équipe.", score: 2 },
          { text: "Je désigne un référent RSE pour maintenir l'élan.", score: 1.5 },
          { text: "Je documente les pratiques pour faciliter la continuité.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "likert",
        text: "Vous ancrez les pratiques RSE dans les processus collectifs pour qu'elles tiennent sans vous.",
        tags: ["maintenir élan", "ancrage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "choix",
        text: "Vous développez votre management RSE en isolation sans partager avec vos pairs managers.",
        tags: ["maintenir élan", "pairs managers"],
        answers: [
          { text: "Je laisse — chaque manager développe son approche.", score: 0 },
          { text: "Je partage mes approches et mes apprentissages avec mes pairs managers.", score: 2 },
          { text: "Je partage si on me le demande.", score: 1 },
          { text: "Je propose un atelier de partage de pratiques RSE entre managers.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "choix",
        text: "Votre management RSE est stable mais sans ambition de progression — vous vous contentez de maintenir.",
        tags: ["maintenir élan", "ambition"],
        answers: [
          { text: "Je laisse — maintenir est déjà un effort.", score: 0.5 },
          { text: "Je cherche régulièrement à élever les ambitions de façon réaliste.", score: 2 },
          { text: "J'attends que la direction fixe de nouveaux objectifs.", score: 0 },
          { text: "Je consulte l'équipe sur ses ambitions RSE.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "choix",
        text: "Vous ne vous informez jamais sur les bonnes pratiques d'autres organisations ou managers RSE.",
        tags: ["maintenir élan", "inspiration externe"],
        answers: [
          { text: "Je laisse — nos pratiques sont adaptées à notre contexte.", score: 0 },
          { text: "Je cherche régulièrement l'inspiration externe pour enrichir mon management RSE.", score: 2 },
          { text: "Je consulte les ressources de l'organisation.", score: 0.5 },
          { text: "Je participe aux communautés de pratiques RSE.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez régulièrement de l'inspiration externe pour faire progresser votre management RSE.",
        tags: ["maintenir élan", "inspiration"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La dynamique RSE de votre équipe est fragile — dépend des moments forts et de votre présence", desc: "Laisser l'engagement retomber entre les moments forts, ne pas ancrer les pratiques dans les processus, ne pas intégrer la RSE dans l'onboarding, se contenter de maintenir sans ambition : ces comportements créent une culture RSE qui ne tient pas dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Votre dynamique est relativement stable mais l'ancrage, les pairs et l'ambition progressive sont encore insuffisants", desc: "Vous faites un bilan annuel et intégrez la RSE dans l'onboarding. Mais ancrer les pratiques dans les processus collectifs pour qu'elles tiennent sans vous, partager vos approches avec vos pairs managers, élever régulièrement les ambitions, chercher l'inspiration externe : votre management RSE est encore peu ambitieux et peu ancré." },
          haut: { label: "Réflexes installés", titre: "Votre dynamique RSE est ancrée, ambitieuse et vous la faites progresser avec vos pairs", desc: "Vous construisez une dynamique de fond qui tient entre les moments forts. Vous ancrez les pratiques dans les processus. Vous intégrez la RSE dans l'onboarding. Vous faites un bilan annuel. Vous partagez vos approches avec vos pairs. Vous cherchez l'inspiration externe. Vous élevez régulièrement les ambitions. Ce management RSE ancré et progressif — qui ne se contente pas de maintenir mais cherche à progresser — est ce qui crée une culture RSE durable." },
        },
      }
    ],

  },

  }); // fin Object.assign

  window.ITS_registerTheme("rse", "RSE — Environnement", "🌱", [

    ["sobriete-quotidien", "Sobriété environnementale au quotidien", "Tous publics",
      "Agir sur les petits gestes sans tomber dans l'affichage ni la culpabilisation.",
      { domain: "rse", chapters: [
        ["Sobriété dans les usages courants", "Énergie, papier, gobelets, achats, arbitrages."],
        ["Mobilité et consommation", "Transport domicile-bureau, alimentation, équipements, durée de vie."],
        ["Déchets, signalement et réalisme", "Tri, signalement, obstacles, engagement durable."],
        ["Partage et ancrage", "Diffuser sans moraliser, cohérence, obstacles structurels."],
      ]}
    ],

    ["reduire-dechets", "Réduire les déchets et préserver les ressources", "Tous publics",
      "Questionner ce qu'on achète, ce qu'on consomme et ce qu'on jette.",
      { domain: "rse", chapters: [
        ["Réduire à la source", "Réemploi, emballages, numérique, réparation."],
        ["Préserver les ressources", "Eau, papier, mutualisation, commandes groupées."],
        ["Agir au-delà de son poste", "Événements, prestataires, fin de projet, mesure."],
        ["Engagement durable", "Achat responsable, partage, durabilité, référent."],
      ]}
    ],

    ["achats-responsables", "Achats et choix responsables", "Fonctions support",
      "Intégrer les critères environnementaux dans chaque décision d'achat.",
      { domain: "rse", chapters: [
        ["Critères d'achat responsable", "Besoin réel, RSE fournisseur, local, reconditionné."],
        ["Usage et fin de vie", "Ressources adaptées, consommation, filières de collecte."],
        ["Dialogue fournisseurs", "Informations RSE, évaluation, pression positive."],
        ["Durabilité de la démarche", "Prescripteur, labels, partage, politique."],
      ]}
    ],

    ["manager-transition", "Manager la transition environnementale", "Managers",
      "Incarner, animer et arbitrer la transition sans ni greenwashing ni surcharge.",
      { domain: "rse", chapters: [
        ["Exemplarité et conditions", "Cohérence, espace parole, objectifs, résistances."],
        ["Formation et culture", "Compétences, processus, communication, signaux direction."],
        ["Dilemmes managériaux", "Impact cœur métier, motivation, innovation, recrutement."],
        ["Culture durable", "Sens, célébration, apprentissage, partage pairs."],
      ]}
    ],

    ["empreinte-numerique", "Réduire son empreinte numérique", "Tous publics",
      "Choisir les bons outils, limiter les usages inutiles et allonger la durée de vie des équipements.",
      { domain: "rse", chapters: [
        ["Usages courants", "Streaming, visio, mails, stockage, newsletters."],
        ["Équipements et paramètres", "Durée de vie, pièces jointes, IA, mode sombre."],
        ["Contribution systémique", "Partage, infrastructure, sobriété fonctionnelle."],
        ["Durabilité et cohérence", "Déconnexion, routines durables, accompagnement."],
      ]}
    ],

    ["deplacements-sobriete", "Déplacements professionnels et sobriété", "Tous publics",
      "Réduire l'impact de ses déplacements par des choix de mode, de fréquence et d'organisation.",
      { domain: "rse", chapters: [
        ["Mode et nécessité", "Train vs avion, regroupement, dernier kilomètre."],
        ["Mobilité domicile-bureau", "Alternatives voiture, vélo, covoiturage, incitations."],
        ["Culture des déplacements", "Conférences, mesure, compensation vs sobriété."],
        ["Ancrage et formats", "Visio efficace, formats mixtes, apprentissages COVID."],
      ]}
    ],

    ["achats-responsables-fournisseurs", "Achats responsables et impact fournisseurs", "Fonctions support",
      "Intégrer les critères RSE dans la sélection, l'évaluation et l'animation de son portefeuille fournisseurs.",
      { domain: "rse", chapters: [
        ["Critères de sélection", "RSE, due diligence, scope 3, clauses, audit."],
        ["Relation et dialogue", "Communication, amélioration, co-innovation, transparence chaîne."],
        ["Contribution RSE des achats", "Reporting, marché public, formation équipe, risque."],
        ["Culture et ambition", "Politique, surcoût, veille réglementaire, progression."],
      ]}
    ],

    ["engagement-transition", "S'engager dans la transition sans se décourager", "Collaborateurs",
      "Situer son propre niveau d'engagement, agir à son niveau et embarquer ses collègues sans culpabiliser.",
      { domain: "rse", chapters: [
        ["Situer et commencer", "Bilan, premier pas, contexte, routines, sens."],
        ["Progresser et prioriser", "Gestes challengeants, apprentissage, impact, ressources."],
        ["Résister au découragement", "Scepticisme, anxiété, rechute, limites saines, allié·es."],
        ["Embarquer sans moraliser", "Informer, partager, initiatives, collectif."],
      ]}
    ],

    ["animer-rse-equipe", "Animer la RSE dans son équipe", "Managers",
      "Incarner la transition sans surjouer, créer un engagement collectif et arbitrer entre performance et impact.",
      { domain: "rse", chapters: [
        ["Incarner sans surjouer", "Exemplarité, conviction, intégration naturelle, sens."],
        ["Créer l'engagement collectif", "Espaces, projets, mesure, célébration, obstacles."],
        ["Arbitrer entre performance et impact", "Conciliation, budget, pression, urgences, transparence."],
        ["Maintenir l'élan", "Dynamique de fond, ancrage, onboarding, pairs, ambition."],
      ]}
    ],

  ]);

})();