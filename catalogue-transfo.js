/**
 * catalogue-transfo.js — INTO THE SHIFT
 * Domaine : Transformation & Management
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  Object.assign(window.CUSTOM_QUESTIONS, {

  "changer-sans-se-crisper": {
    0: [
      {
        type: "choix",
        text: "Votre entreprise annonce la migration vers un nouvel outil de gestion de projet. Vous maîtrisez parfaitement l'ancien et votre équipe tourne bien. La formation est planifiée dans trois semaines.",
        tags: ["changement", "réflexe"],
        answers: [
          { text: "J'attends la formation pour me positionner — je verrai si le nouvel outil vaut vraiment l'ancien.", score: 0.5 },
          { text: "Je demande à accéder à l'outil en avance pour explorer avant la formation.", score: 2 },
          { text: "Je prépare une liste des fonctionnalités que j'utilise dans l'ancien outil pour vérifier qu'elles existent dans le nouveau.", score: 1.5 },
          { text: "Je signale à mon responsable que le changement risque de perturber la productivité de l'équipe.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "choix",
        text: "Une nouvelle procédure administrative remplace celle que vous appliquiez depuis quatre ans. Votre collègue Béatrice dit que 'l'ancienne était parfaitement adaptée' et propose de continuer à l'utiliser en parallèle.",
        tags: ["changement", "résistance"],
        answers: [
          { text: "Je la rejoins — conserver l'ancienne procédure en parallèle limite les risques pendant la transition.", score: 0 },
          { text: "J'applique la nouvelle procédure et j'encourage Béatrice à faire de même.", score: 2 },
          { text: "Je lui propose de remonter ses réserves aux personnes qui ont décidé du changement.", score: 1.5 },
          { text: "Je fais la nouvelle procédure officiellement et l'ancienne quand je peux — le résultat est le même.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "likert",
        text: "Quand un changement est annoncé dans votre organisation, votre premier réflexe est de chercher ce qu'il peut vous apporter plutôt que ce qu'il va vous coûter.",
        tags: ["changement", "ouverture"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "choix",
        text: "Votre organisation passe d'une structure par fonction à une organisation par projets transversaux. Votre périmètre change significativement. Vous vous sentiez compétent dans l'ancienne configuration.",
        tags: ["changement", "inconfort"],
        answers: [
          { text: "Je me concentre sur ce que je maîtrise encore et j'attends que la nouvelle organisation se stabilise.", score: 0 },
          { text: "J'identifie rapidement les nouvelles compétences requises et je demande un accompagnement.", score: 2 },
          { text: "J'accepte l'inconfort en me disant que les autres vivent la même chose.", score: 1 },
          { text: "Je signale à mon responsable que la réorganisation fragilise mon efficacité.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "choix",
        text: "Une décision de votre direction vous semble peu cohérente avec les objectifs annoncés. Vous ne comprenez pas la logique de ce choix.",
        tags: ["changement", "compréhension"],
        answers: [
          { text: "Je l'applique sans chercher à comprendre — ce n'est pas mon niveau de décision.", score: 0.5 },
          { text: "Je pose la question directement à mon responsable pour comprendre le raisonnement.", score: 2 },
          { text: "J'attends que quelqu'un d'autre pose la question en réunion pour en profiter.", score: 0 },
          { text: "J'explique à mes collègues pourquoi la décision me semble incohérente.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "likert",
        text: "Face à une décision que vous ne comprenez pas bien, vous posez des questions pour comprendre la logique avant de vous forger une opinion définitive.",
        tags: ["changement", "questions"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "choix",
        text: "Un consultant externe vient présenter une nouvelle méthode de travail à votre équipe. Vous avez dix ans d'expérience dans votre domaine et certaines recommandations vous semblent théoriques.",
        tags: ["changement", "expertise"],
        answers: [
          { text: "J'exprime mes réserves en réunion pour que le consultant confronte ses recommandations à la réalité du terrain.", score: 2 },
          { text: "Je m'abstiens — contester un consultant devant mon équipe serait contre-productif.", score: 0 },
          { text: "Je lui pose des questions précises sur les cas concrets pour voir si sa méthode tient la route.", score: 2 },
          { text: "J'attends de voir les résultats avant de me prononcer.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "choix",
        text: "Votre organisation veut déployer un changement important en deux mois. Vous pensez que quatre mois seraient nécessaires pour bien le faire.",
        tags: ["changement", "vitesse"],
        answers: [
          { text: "Je m'aligne sur le calendrier — la direction a sa vision des contraintes globales.", score: 0.5 },
          { text: "Je documente mes réserves sur le délai et les risques associés, puis je m'engage à faire au mieux dans le temps imparti.", score: 2 },
          { text: "Je travaille sur le calendrier de deux mois sans mentionner mes doutes.", score: 0 },
          { text: "Je négocie un déploiement partiel en deux mois et complet en quatre.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "likert",
        text: "Vous exprimez vos réserves sur un changement par les voies appropriées avant de vous y engager, plutôt que de les exprimer après ou de les taire.",
        tags: ["changement", "expression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }, 
      {
        type: "choix",
        text: "Une nouvelle organisation est en place depuis deux mois. Les résultats ne sont pas encore au niveau attendu. Des voix s'élèvent pour revenir à l'ancienne façon de faire.",
        tags: ["changement", "retour arrière"],
        answers: [
          { text: "Je rejoins les voix — deux mois sans résultats probants, c'est un signal que le changement ne fonctionne pas.", score: 0 },
          { text: "Je rappelle que deux mois est un délai court pour juger un changement organisationnel et je propose des indicateurs de suivi.", score: 2 },
          { text: "Je reste neutre — le débat doit se faire sans que je prenne position.", score: 0 },
          { text: "J'attends que la direction tranche plutôt que de m'exprimer.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face au changement, votre premier réflexe est encore de vous protéger plutôt que de chercher comment vous adapter", desc: "Attendre la formation plutôt que d'explorer, revenir aux anciennes procédures parce qu'elles 'fonctionnaient', s'aligner sur les collègues résistants par confort social : ces réflexes de protection sont compréhensibles mais ils prolongent l'inconfort plutôt que de l'écourter. Le changement coûte moins cher à ceux qui s'y engagent tôt qu'à ceux qui le subissent." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous adaptez aux changements mais votre réflexe initial est encore souvent de résister avant d'explorer", desc: "Vous finissez par vous adapter aux changements et vous posez des questions pour comprendre. Mais votre première réaction est souvent de souligner ce qui va être perdu ou difficile avant de chercher ce qui peut être gagné. Ce délai initial — qui peut sembler anodin — influence l'ensemble de votre équipe si vous avez un rôle d'ancienneté ou de référence." },
          haut: { label: "Réflexes installés", titre: "Face au changement, votre premier réflexe est de chercher comment vous y engager et ce qu'il peut vous apporter", desc: "Vous explorez le nouvel outil avant la formation. Vous appliquez la nouvelle procédure même quand Béatrice propose de garder l'ancienne. Vous documentez vos réserves sur le calendrier tout en vous engageant à faire au mieux. Vous rappelez qu'un délai de deux mois est court pour juger une transformation. Cette posture d'engagement précoce — qui suppose d'accepter l'inconfort de la nouveauté — est ce qui rend les changements moins coûteux pour vous et pour votre entourage." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Pendant la période de transition vers un nouveau système, vous devez gérer à la fois l'ancien et le nouveau en parallèle. Votre charge de travail a augmenté de 30%.",
        tags: ["transition", "double charge"],
        answers: [
          { text: "J'absorbe la surcharge sans en parler — tout le monde est dans le même cas.", score: 0 },
          { text: "Je le signale à mon responsable avec une proposition de priorisation entre les deux systèmes.", score: 2 },
          { text: "J'allège la qualité sur certaines tâches de l'ancien système pour tenir le rythme.", score: 0.5 },
          { text: "Je demande à mon équipe de m'aider sur certaines tâches de l'ancienne organisation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Pendant une période de changement, vous signalez les surcharges et les incompatibilités que vous rencontrez plutôt que de les absorber silencieusement.",
        tags: ["transition", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "choix",
        text: "En apprenant un nouvel outil, vous faites plusieurs erreurs qui entraînent des retards. Un collègue, Thibault, gère la transition beaucoup plus facilement que vous.",
        tags: ["transition", "erreurs"],
        answers: [
          { text: "Je m'en veux — je devrais maîtriser ça plus vite.", score: 0 },
          { text: "Je demande à Thibault de me montrer comment il s'y prend.", score: 2 },
          { text: "Je continue à essayer seul — demander de l'aide montrerait que j'ai du mal.", score: 0 },
          { text: "Je signale à mon responsable que l'outil est plus complexe que prévu.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Trois semaines après la mise en place d'une nouvelle méthode, vous réalisez que vous êtes moins efficace qu'avant. C'est décourageant.",
        tags: ["transition", "régression"],
        answers: [
          { text: "Je reviens aux anciennes habitudes — la nouvelle méthode ne me convient pas.", score: 0 },
          { text: "Je reconnais que la régression temporaire fait partie de l'apprentissage et je maintiens le cap.", score: 2 },
          { text: "Je mélange ancienne et nouvelle méthode selon les situations.", score: 0.5 },
          { text: "Je remonte ma difficulté à mon responsable pour obtenir un accompagnement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre direction n'a pas communiqué clairement les raisons du changement en cours. Vos collègues commencent à remplir le vide avec des rumeurs.",
        tags: ["transition", "sens"],
        answers: [
          { text: "Je participe aux échanges informels — c'est un moyen de comprendre ce qui se passe vraiment.", score: 0 },
          { text: "Je demande directement à mon responsable une communication claire sur les raisons du changement.", score: 2 },
          { text: "Je me concentre sur mon travail quotidien sans m'impliquer dans les rumeurs.", score: 1 },
          { text: "Je rappelle à mes collègues que les rumeurs sont contre-productives sans chercher à obtenir plus d'information.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Pendant une période de transition, vous demandez de l'aide ou un accompagnement quand vous en avez besoin, sans attendre que les difficultés soient trop importantes.",
        tags: ["transition", "demande d'aide"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre indicateur de performance a baissé pendant la période de transition. Votre évaluation annuelle approche.",
        tags: ["transition", "résultats"],
        answers: [
          { text: "Je ne mentionne pas le lien avec la transition — ça ressemblerait à une excuse.", score: 0 },
          { text: "Je documente le lien entre la baisse de performance et la période de transition pour mon évaluation.", score: 2 },
          { text: "J'attends que mon responsable fasse lui-même le lien.", score: 0 },
          { text: "Je compense en travaillant plus pour que les chiffres remontent avant l'évaluation.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre collègue Nadia est en grande difficulté avec le changement en cours. Elle ne le montre pas en réunion mais vous le voyez dans son travail quotidien.",
        tags: ["transition", "collègues"],
        answers: [
          { text: "Je laisse — si elle voulait de l'aide, elle le demanderait.", score: 0 },
          { text: "Je lui en parle en tête-à-tête et je lui propose mon soutien.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il l'aide.", score: 1 },
          { text: "Je l'aide discrètement sur certaines tâches sans en faire un sujet.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Pendant les périodes de changement, vous soutenez activement les collègues qui sont en difficulté, sans attendre qu'ils demandent.",
        tags: ["transition", "soutien"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }, 
      {
        type: "choix",
        text: "La nouvelle méthode de travail déployée dans votre organisation a des défauts réels que vous avez identifiés après six semaines de pratique.",
        tags: ["transition", "apprentissage"],
        answers: [
          { text: "Je les documente et je les remonte avec des propositions d'amélioration concrètes.", score: 2 },
          { text: "Je les partage avec mes collègues pour confirmer que c'est bien un problème collectif.", score: 1 },
          { text: "J'attends que ça soit remonté par quelqu'un d'autre — ça ne fait que six semaines.", score: 0 },
          { text: "Je les garde pour moi — remonter des problèmes si tôt risque d'être mal perçu.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Pendant la transition, vous absorbez les difficultés seul·e plutôt que de les signaler ou de demander de l'aide", desc: "Absorber la surcharge sans en parler, ne pas demander d'aide à Thibault, ne pas mentionner le lien entre la transformation et la baisse de performance : ces comportements isolent pendant les moments qui demandent le plus de ressources. La période de transition est précisément celle où signaler les difficultés et demander de l'aide est le plus utile." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les difficultés de transition mais vous attendez souvent qu'elles soient importantes avant d'agir", desc: "Vous signalez quand les difficultés deviennent importantes et vous demandez de l'aide quand vous êtes clairement en difficulté. Mais la surcharge de 30%, la régression temporaire des premières semaines, la baisse de performance pendant la transition : ces signaux arrivent parfois trop tard dans votre remontée. L'enjeu est d'agir plus tôt, quand les solutions sont encore simples." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les difficultés de transition tôt, vous demandez de l'aide sans attendre, et vous soutenez vos collègues", desc: "Vous signalez la surcharge de 30% avec une proposition de priorisation. Vous demandez à Thibault de vous montrer comment il s'y prend. Vous aidez Nadia sans attendre qu'elle demande. Vous documentez le lien entre la transformation et la baisse de performance. Cette façon d'utiliser le changement comme un contexte de collaboration — plutôt que de le traverser seul·e — est ce qui rend les transitions plus efficaces pour l'ensemble de l'équipe." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Dans votre équipe, deux collègues ont une influence négative sur le changement en cours — ils expriment des doutes en réunion sans proposition constructive. L'ambiance se dégrade.",
        tags: ["contribution", "influence"],
        answers: [
          { text: "Je laisse — ils ont le droit d'exprimer leurs doutes et ce n'est pas à moi de les recadrer.", score: 0 },
          { text: "Je les interpelle en réunion en leur demandant ce qu'ils proposeraient à la place.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il gère la dynamique collective.", score: 1 },
          { text: "Je compense leur négativité en étant moi-même très positif dans mes interventions.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous exprimez des doutes sur un changement, vous les accompagnez systématiquement d'une proposition ou d'une question constructive.",
        tags: ["contribution", "constructif"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau collaborateur arrive dans une équipe en pleine transformation. Il observe les réticences de certains anciens et commence à se demander s'il a fait le bon choix.",
        tags: ["contribution", "nouveaux arrivants"],
        answers: [
          { text: "Je le laisse se faire sa propre opinion — interférer maintenant serait manipuler son jugement.", score: 0 },
          { text: "Je lui partage ma lecture du changement en cours et pourquoi j'y vois des opportunités malgré les tensions.", score: 2 },
          { text: "Je le rassure en lui disant que les tensions sont normales dans une transformation.", score: 1 },
          { text: "Je lui conseille de s'aligner sur le groupe pour s'intégrer.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "choix",
        text: "Vous identifiez une amélioration rapide liée au changement en cours — quelque chose qui pourrait montrer concrètement la valeur du nouveau fonctionnement.",
        tags: ["contribution", "quick wins"],
        answers: [
          { text: "J'attends que la transformation soit stabilisée avant de mettre en avant des résultats partiels.", score: 0 },
          { text: "Je la teste, je la documente et je la partage avec mon équipe et mon responsable.", score: 2 },
          { text: "Je la mets en œuvre sans en faire un sujet — les résultats parleront d'eux-mêmes.", score: 1 },
          { text: "Je la propose à mon responsable pour qu'il décide de la mettre en avant ou non.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous demande de participer à un groupe de travail pour accompagner le déploiement du changement auprès des autres équipes. Vous n'êtes pas enthousiaste.",
        tags: ["contribution", "ambassadeur"],
        answers: [
          { text: "Je décline — participer à quelque chose auquel je ne crois pas serait contre-productif.", score: 0 },
          { text: "J'accepte en étant honnête sur mes réserves — ma contribution sera plus utile si elle est authentique.", score: 2 },
          { text: "J'accepte en mettant de côté mes réserves — ma loyauté envers l'organisation prime.", score: 1 },
          { text: "Je lui demande du temps de réflexion avant de répondre.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "likert",
        text: "Une fois une décision de changement prise, vous vous engagez dans sa mise en œuvre même si vous n'étiez pas convaincu au départ.",
        tags: ["contribution", "engagement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "choix",
        text: "Après deux mois de mise en œuvre, vous avez des retours terrain très riches sur ce qui fonctionne et ce qui coince dans le nouveau fonctionnement.",
        tags: ["contribution", "retour terrain"],
        answers: [
          { text: "Je les garde pour le bilan de fin de déploiement prévu dans quatre mois.", score: 0 },
          { text: "Je les remonte maintenant — attendre quatre mois c'est laisser les problèmes s'installer.", score: 2 },
          { text: "Je les partage avec mes collègues pour enrichir la réflexion collective.", score: 1 },
          { text: "Je les transmets à l'équipe projet pour qu'elle décide quoi en faire.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous demande de 'porter le changement' auprès de collègues résistants. Vous ne vous sentez pas légitime pour ce rôle.",
        tags: ["contribution", "résistances"],
        answers: [
          { text: "Je refuse — ce n'est pas mon rôle de convaincre mes pairs.", score: 0 },
          { text: "J'accepte en posant des conditions — je peux partager mon expérience mais pas faire de la pression.", score: 2 },
          { text: "J'accepte et j'essaie de convaincre mes collègues de l'intérêt du changement.", score: 0.5 },
          { text: "Je demande à mon responsable de me former à l'accompagnement du changement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "likert",
        text: "Vous partagez activement votre expérience du changement avec vos collègues — ce qui fonctionne, ce qui est difficile, comment vous avez surmonté les obstacles.",
        tags: ["contribution", "transmission"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }, 
      {
        type: "choix",
        text: "Le changement est en place depuis six mois. Certains collègues ont repris d'anciennes habitudes sans que personne ne réagisse. La nouvelle façon de faire est en train de se déliter.",
        tags: ["contribution", "stabilisation"],
        answers: [
          { text: "Je laisse — si tout le monde revient aux anciennes habitudes, c'est que le changement n'était pas adapté.", score: 0 },
          { text: "Je soulève le sujet en réunion en montrant les glissements que j'observe.", score: 2 },
          { text: "Je maintiens mes propres nouvelles pratiques sans chercher à influencer les autres.", score: 1 },
          { text: "J'en parle à mon responsable pour qu'il remette le sujet à l'ordre du jour.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution au changement reste passive — vous appliquez sans influencer la dynamique collective", desc: "Laisser les collègues négatifs occuper l'espace sans les interpeller, attendre quatre mois avant de remonter des retours terrain utiles, maintenir ses propres pratiques sans s'intéresser à celles des autres : contribuer positivement au changement ne se résume pas à bien l'appliquer soi-même. L'influence sur la dynamique collective est une responsabilité partagée." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez au changement mais votre influence sur la dynamique collective reste encore limitée", desc: "Vous vous engagez dans les changements une fois décidés et vous partagez vos retours terrain. Mais interpeller les collègues qui exercent une influence négative, proposer et tester des quick wins, soulever les glissements vers les anciennes habitudes : ces comportements d'influence active sur la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la dynamique du changement — quick wins, retours terrain, influence sur le collectif", desc: "Vous interpellez les collègues négatifs en leur demandant ce qu'ils proposeraient. Vous testez et partagez les quick wins. Vous remontez les retours terrain sans attendre le bilan formel. Vous soulevez les glissements vers les anciennes habitudes quand la transformation se délite. Cette contribution active à la dynamique collective — qui suppose parfois d'occuper un rôle inconfortable — est ce qui fait qu'une transformation produit durablement ses effets." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre organisation annonce une nouvelle transformation alors que la précédente n'est pas encore stabilisée. Vous sentez de la lassitude dans votre équipe.",
        tags: ["flexibilité", "changement permanent"],
        answers: [
          { text: "Je rejoins la lassitude — accumuler les transformations sans laisser le temps de respirer est une erreur de management.", score: 0 },
          { text: "Je reconnais la lassitude de l'équipe et je cherche comment prioriser les efforts sans nier la réalité.", score: 2 },
          { text: "Je me concentre sur ce qui est concret et actionnable dans la nouvelle transformation.", score: 1.5 },
          { text: "Je remonte à mon responsable la saturation de l'équipe avant de m'engager sur la nouvelle transformation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "likert",
        text: "Dans un environnement qui change vite, vous considérez l'adaptabilité comme une compétence à développer plutôt que comme une contrainte à subir.",
        tags: ["flexibilité", "adaptabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "choix",
        text: "Un changement important modifie le cœur de votre métier. Vous aviez construit votre identité professionnelle autour de compétences qui seront moins valorisées demain.",
        tags: ["flexibilité", "identité professionnelle"],
        answers: [
          { text: "Je résiste — mon expertise est une valeur pour l'organisation et je ne vais pas la laisser dévaluer.", score: 0 },
          { text: "J'identifie comment mes compétences existantes peuvent se déplacer vers les nouvelles exigences.", score: 2 },
          { text: "J'accepte la dévaluation de certaines compétences et je me concentre sur l'acquisition des nouvelles.", score: 1.5 },
          { text: "Je demande à mon responsable comment mon profil s'insère dans la nouvelle organisation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez apprendre à utiliser un outil d'IA dans votre travail quotidien. Vous n'êtes pas à l'aise avec les nouvelles technologies.",
        tags: ["flexibilité", "apprentissage"],
        answers: [
          { text: "J'attends qu'on me force à l'utiliser — si c'est vraiment utile, ça s'imposera naturellement.", score: 0 },
          { text: "Je me fixe un objectif d'apprentissage concret et je demande un accompagnement si nécessaire.", score: 2 },
          { text: "Je l'utilise sur des tâches à faible enjeu pour apprivoiser l'outil progressivement.", score: 1.5 },
          { text: "Je demande à un collègue plus à l'aise de l'utiliser à ma place.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "choix",
        text: "Un projet intéressant vous est proposé mais il vous demanderait de travailler dans un domaine où vous n'avez pas encore d'expérience.",
        tags: ["flexibilité", "zone de confort"],
        answers: [
          { text: "Je décline — prendre un projet dans un domaine non maîtrisé exposerait l'équipe à des risques.", score: 0 },
          { text: "J'accepte en identifiant clairement les compétences que je devrai développer et les ressources dont j'aurai besoin.", score: 2 },
          { text: "J'accepte sans mentionner mes lacunes — elles se combleront en cours de route.", score: 0 },
          { text: "J'accepte uniquement si je peux être accompagné d'un expert du domaine.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous acceptez des missions qui vous placent hors de votre zone de confort, en les traitant comme des opportunités d'apprentissage.",
        tags: ["flexibilité", "inconfort"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "choix",
        text: "Après un changement difficile, vous faites le bilan. Vous avez développé des compétences nouvelles mais perdu en efficacité sur certains aspects de votre travail.",
        tags: ["flexibilité", "bilan"],
        answers: [
          { text: "Je retiens surtout la perte d'efficacité — le changement a coûté plus qu'il n'a rapporté.", score: 0 },
          { text: "Je documente ce que j'ai gagné et ce que j'ai perdu pour alimenter ma réflexion sur les prochains changements.", score: 2 },
          { text: "Je me concentre sur ce que j'ai gagné pour maintenir ma motivation.", score: 1 },
          { text: "Je partage le bilan avec mon responsable pour qu'il prenne en compte le coût réel des transformations.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "choix",
        text: "Une nouvelle recrue arrive dans votre équipe alors que vous traversez une période de transformation intense. Elle vous demande comment vous gérez les changements continus.",
        tags: ["flexibilité", "transmission"],
        answers: [
          { text: "Je lui dis que c'est difficile mais normal — mieux vaut être honnête dès le départ.", score: 1 },
          { text: "Je lui partage concrètement les stratégies qui m'aident à traverser les changements.", score: 2 },
          { text: "Je lui dis que ça s'améliore avec le temps — le plus dur c'est le début.", score: 0.5 },
          { text: "Je la rassure en lui disant que l'organisation est solide malgré les changements.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous considérez les périodes de changement difficiles comme des éléments formateurs pour votre développement professionnel.",
        tags: ["flexibilité", "croissance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }, 
      {
        type: "choix",
        text: "Six mois après un changement majeur, votre organisation ne demande pas de retour formel sur la transformation. Vous avez des observations utiles.",
        tags: ["flexibilité", "feedback"],
        answers: [
          { text: "Je garde mes observations pour moi — si l'organisation ne demande pas, c'est qu'elle ne veut pas.", score: 0 },
          { text: "Je les remonte de façon proactive à mon responsable ou à l'équipe projet.", score: 2 },
          { text: "J'attends la prochaine transformation pour intégrer mes observations.", score: 0 },
          { text: "Je les partage avec mes collègues pour enrichir la réflexion collective.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre rapport au changement permanent est encore marqué par la résistance plutôt que par la curiosité", desc: "Résister à l'apprentissage d'un outil IA, décliner un projet hors de sa zone de confort, retenir principalement ce qui a été perdu dans un changement : ces comportements réduisent progressivement la capacité d'adaptation. Dans un environnement de transformation continue, l'adaptabilité est une compétence qui se développe ou s'érode selon qu'on la sollicite ou non." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez développé une certaine flexibilité mais les changements qui touchent votre identité professionnelle créent encore des résistances", desc: "Vous acceptez les changements de méthode et d'outils. Mais quand le changement touche le cœur de votre métier ou vous pousse hors de votre zone de confort professionnel : des résistances plus profondes peuvent apparaître. L'enjeu est de traiter ces moments comme des opportunités de développement plutôt que comme des menaces à l'identité." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les transformations continues comme des opportunités de développement, y compris quand elles touchent votre identité professionnelle", desc: "Vous identifiez comment vos compétences existantes peuvent se transposer aux nouvelles exigences. Vous acceptez des projets hors de votre zone de confort en nommant clairement vos lacunes et vos besoins. Vous traitez les pertes d'efficacité temporaires comme une donnée normale de l'apprentissage. Vous transmettez à la nouvelle recrue les stratégies concrètes qui vous aident. Cette flexibilité profonde — qui touche l'identité professionnelle pas seulement les méthodes — est ce qui rend durablement adaptable." },
        },
      }
    ],

  },

  "feedback-utile": {
    0: [
      {
        type: "choix",
        text: "Votre collègue vient de faire une présentation client qui manquait de structure. Le client a posé beaucoup de questions de clarification. Vous êtes seuls après la réunion.",
        tags: ["feedback", "factuels"],
        answers: [
          { text: "Je lui dis que la présentation était 'un peu confuse' — c'est déjà honnête.", score: 0.5 },
          { text: "Je lui décris précisément ce que j'ai observé — les moments où le client a dû demander des clarifications et ce que ça signale.", score: 2 },
          { text: "Je ne dis rien — ce n'est pas mon rôle de commenter la prestation d'un collègue.", score: 0 },
          { text: "Je lui dis que 'pour la prochaine fois' il faudrait mieux préparer.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'une réunion d'équipe, vous observez qu'Hamid prend systématiquement la parole avant que les autres aient fini leur pensée. Le reste de l'équipe semble s'auto-censurer.",
        tags: ["feedback", "timing"],
        answers: [
          { text: "Je lui fais la remarque devant tout le monde — le comportement se passe en groupe, le feedback peut l'être aussi.", score: 0 },
          { text: "Je lui en parle en tête-à-tête après la réunion avec des exemples précis.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il gère la dynamique.", score: 1 },
          { text: "Je laisse — ce n'est probablement pas intentionnel et il finira par le remarquer seul.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "likert",
        text: "Vos feedbacks décrivent des comportements observables précis plutôt que des jugements sur la personne ou des impressions générales.",
        tags: ["feedback", "précision"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "choix",
        text: "Un membre de votre équipe a géré une situation difficile avec un client de façon exemplaire. Vous trouvez les compliments un peu embarrassants à formuler.",
        tags: ["feedback", "positif"],
        answers: [
          { text: "Je lui dis 'bien joué' en passant — c'est suffisant.", score: 0 },
          { text: "Je lui décris précisément ce qu'il a fait et l'impact que ça a eu sur le client et l'équipe.", score: 2 },
          { text: "Je le mentionne en réunion d'équipe pour valoriser devant le groupe.", score: 1 },
          { text: "Je laisse — trop valoriser crée des attentes difficiles à tenir.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez donner un feedback à une collaboratrice sur une erreur répétée dans ses rapports. Elle est perfectionniste et prend les critiques très à cœur.",
        tags: ["feedback", "impact"],
        answers: [
          { text: "Je l'adoucis tellement pour ne pas la blesser que le message principal se perd.", score: 0 },
          { text: "Je lui donne le feedback factuel en adaptant ma façon de le formuler, sans atténuer le fond.", score: 2 },
          { text: "Je lui envoie un mail pour qu'elle ait le temps d'y réfléchir avant d'en parler.", score: 1 },
          { text: "Je laisse passer encore une fois — l'enjeu ne vaut pas le risque de la déstabiliser.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous donnez les feedbacks difficiles en face-à-face, sans les atténuer au point que le message devient flou.",
        tags: ["feedback", "courage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "choix",
        text: "En formulant un feedback à votre collègue Céline, vous réalisez que vous êtes agacé·e par elle depuis plusieurs semaines. Vous vous demandez si c'est le bon moment.",
        tags: ["feedback", "intention"],
        answers: [
          { text: "Je lui donne quand même — le feedback est légitime même si je suis agacé·e.", score: 0 },
          { text: "J'attends d'être dans un état émotionnel plus neutre avant de lui parler.", score: 2 },
          { text: "Je lui donne en prenant soin de ne pas laisser transparaître mon agacement.", score: 0.5 },
          { text: "Je lui envoie un message écrit pour éviter que mon ton trahisse mon état.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez observé quelque chose d'utile à partager avec un collègue mais il ne vous a pas demandé votre avis. Vous vous interrogez sur la légitimité d'un feedback non sollicité.",
        tags: ["feedback", "sans demande"],
        answers: [
          { text: "Je ne dis rien — un feedback non sollicité risque d'être mal reçu.", score: 0 },
          { text: "Je lui demande s'il est ouvert à un retour avant de le lui donner.", score: 2 },
          { text: "Je lui donne quand même — si c'est utile, c'est suffisant.", score: 0.5 },
          { text: "Je cherche une ouverture naturelle dans la conversation pour l'amener.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "likert",
        text: "Avant de donner un feedback non sollicité, vous vérifiez que votre interlocuteur est disponible et ouvert à le recevoir.",
        tags: ["feedback", "permission"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez donné un feedback important à un collègue il y a trois semaines. Le comportement n'a pas changé. Vous ne l'avez pas suivi.",
        tags: ["feedback", "suivi"],
        answers: [
          { text: "Je laisse — si le feedback était clair, c'est à lui de s'en emparer.", score: 0 },
          { text: "Je reviens vers lui pour voir comment il a reçu le feedback et ce qui l'a empêché de changer.", score: 2 },
          { text: "Je lui redonne le même feedback en espérant que cette fois il portera.", score: 0.5 },
          { text: "J'en parle à notre responsable — si ça ne change pas après un feedback, c'est un sujet managérial.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos feedbacks sont encore vagues, tardifs ou atténués par peur de froisser", desc: "Dire que la présentation était 'un peu confuse', adoucir tellement le fond que le message se perd, laisser passer un comportement problématique pour ne pas froisser : ces comportements protègent la relation à court terme mais privent l'autre d'une information utile. Un feedback vague ou retardé est souvent moins utile qu'une absence de feedback — il crée une impression sans donner les moyens d'agir." },
          moyen: { label: "Pratiques en développement", titre: "Vous donnez des feedbacks factuels dans les situations claires mais les situations complexes ou émotionnelles créent encore des hésitations", desc: "Vous donnez des feedbacks précis dans les situations ordinaires. Mais quand la personne est perfectionniste, quand vous êtes vous-même dans un état émotionnel difficile, quand le feedback n'a pas été demandé : vous pouvez encore hésiter ou atténuer le fond. L'enjeu est de tenir la qualité factuelle du feedback dans ces situations précises." },
          haut: { label: "Réflexes installés", titre: "Vos feedbacks sont précis, courageux et adaptés à la personne — sans perdre le fond", desc: "Vous décrivez précisément ce que vous avez observé chez Hamid en tête-à-tête après la réunion. Vous donnez un feedback factuel à la collaboratrice perfectionniste sans diluer le fond. Vous demandez à Céline si elle est disponible pour un retour avant de le lui donner. Vous revenez vers le collaborateur dont le comportement n'a pas changé pour comprendre ce qui bloque. Cette rigueur dans la façon de donner des feedbacks — précis, courageux, bien timés — est ce qui fait qu'ils sont réellement utiles." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Votre responsable vous donne un feedback sur votre façon de gérer les réunions — vous prenez trop de place et ne laissez pas assez les autres s'exprimer. Vous ne le voyez pas du tout ainsi.",
        tags: ["recevoir", "écoute"],
        answers: [
          { text: "Je lui explique pourquoi je prends de la place — les réunions sont inefficaces quand personne ne structure.", score: 0 },
          { text: "J'écoute jusqu'au bout, je pose des questions pour comprendre ce qu'il observe, puis je prends le temps de réfléchir.", score: 2 },
          { text: "Je hoche la tête et j'acquiesce — il a peut-être raison, je verrai.", score: 0.5 },
          { text: "Je lui demande des exemples précis pour évaluer si son observation est fondée.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous recevez un feedback négatif, vous laissez votre interlocuteur aller jusqu'au bout avant de répondre.",
        tags: ["recevoir", "écoute active"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un feedback que vous estimez partiellement injuste — les faits sont réels mais le contexte n'a pas été pris en compte.",
        tags: ["recevoir", "désaccord"],
        answers: [
          { text: "Je m'explique immédiatement en donnant le contexte — le feedback est biaisé sans ça.", score: 0 },
          { text: "Je commence par reconnaître ce qui est juste dans le feedback, puis j'ajoute le contexte que mon interlocuteur n'avait peut-être pas.", score: 2 },
          { text: "J'accepte le feedback sans mentionner le contexte — m'expliquer ressemblerait à une excuse.", score: 0.5 },
          { text: "Je lui demande s'il est ouvert à entendre ma version des faits avant de lui donner le contexte.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un feedback sévère en réunion de groupe sur votre dernier livrable. Vous sentez la colère monter.",
        tags: ["recevoir", "émotionnel"],
        answers: [
          { text: "Je défends mon travail immédiatement — une erreur en réunion doit être corrigée sur le moment.", score: 0 },
          { text: "Je prends note, je dis que j'ai besoin de temps pour y réfléchir et je propose d'en reparler en tête-à-tête.", score: 2 },
          { text: "Je reste silencieux — mieux vaut ne rien dire que dire quelque chose que je regretterais.", score: 0.5 },
          { text: "Je réponds calmement mais je montre que le mode de livraison du feedback est inapproprié.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un feedback d'un collègue avec qui vous avez des divergences régulières. Le fond vous semble juste mais vous suspectez une arrière-pensée.",
        tags: ["recevoir", "biais"],
        answers: [
          { text: "Je rejette le feedback — la relation biaisée invalide le message.", score: 0 },
          { text: "Je sépare le fond de la relation et je traite le message sur ses mérites propres.", score: 2 },
          { text: "Je l'écoute mais je le vérifierai auprès d'une autre personne avant de le prendre en compte.", score: 1 },
          { text: "Je lui demande directement s'il y a une arrière-pensée derrière son retour.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous recevez un feedback, vous prenez le temps de réfléchir à ce qu'il contient d'utile avant de décider si vous l'intégrez.",
        tags: ["recevoir", "utilisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous dit que votre travail sur ce projet était excellent. Vous avez tendance à minimiser.",
        tags: ["recevoir", "feedback positif"],
        answers: [
          { text: "Je réponds 'c'est l'équipe qui a bien travaillé' — partager le mérite est plus élégant.", score: 0.5 },
          { text: "Je remercie et je lui demande ce qui a particulièrement fonctionné pour capitaliser dessus.", score: 2 },
          { text: "Je remercie simplement.", score: 1.5 },
          { text: "Je dis que ça aurait pu être encore mieux si on avait eu plus de temps.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "choix",
        text: "Vous venez de terminer une mission importante. Votre responsable ne vous donne pas spontanément de retour.",
        tags: ["recevoir", "demander"],
        answers: [
          { text: "J'attends — si mon travail avait été problématique, j'aurais entendu quelque chose.", score: 0 },
          { text: "Je lui demande un moment pour avoir son retour sur la mission.", score: 2 },
          { text: "Je lui envoie un mail de bilan de mission en espérant qu'il réagira.", score: 1 },
          { text: "Je demande un retour lors de notre prochain entretien formel.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "likert",
        text: "Vous demandez proactivement des feedbacks sur votre travail sans attendre les évaluations formelles.",
        tags: ["recevoir", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez reçu le même feedback de trois personnes différentes sur un comportement que vous n'arrivez pas à changer malgré vos efforts.",
        tags: ["recevoir", "intégration"],
        answers: [
          { text: "Je continue à essayer seul — les feedbacks répétés signifient que c'est un point important.", score: 0.5 },
          { text: "Je cherche un accompagnement ciblé — un feedback répété sans changement signale que j'ai besoin de soutien pour progresser.", score: 2 },
          { text: "Je remets en question la pertinence du feedback — si autant de personnes le voient, c'est peut-être eux qui ont un biais.", score: 0 },
          { text: "J'accepte que ce comportement fait partie de qui je suis.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Recevoir un feedback déclenche encore une réaction défensive avant une écoute réelle", desc: "S'expliquer immédiatement sur le contexte, défendre son travail avant d'avoir entendu l'ensemble du retour, rejeter un feedback parce qu'il vient de quelqu'un avec qui on a des tensions : ces réflexes défensifs sont compréhensibles mais ils ferment l'accès à une information potentiellement précieuse. Le feedback le plus utile est souvent celui qui surprend." },
          moyen: { label: "Pratiques en développement", titre: "Vous écoutez les feedbacks jusqu'au bout mais la réaction défensive peut encore apparaître quand le fond vous surprend", desc: "Vous laissez votre interlocuteur aller jusqu'au bout et vous prenez le temps de réfléchir. Mais quand le feedback vient d'un collègue avec qui vous avez des tensions, quand il vous semble partiellement injuste, quand il vous surprend vraiment : une réaction défensive peut encore apparaître. L'enjeu est de séparer la réception du feedback de l'évaluation de sa pertinence." },
          haut: { label: "Réflexes installés", titre: "Vous recevez les feedbacks avec curiosité, même ceux qui vous surprennent ou qui viennent d'une source inattendue", desc: "Vous laissez votre interlocuteur aller au bout, vous posez des questions pour comprendre avant de répondre, vous séparez le fond du message de la relation avec la personne qui le porte. Vous demandez proactivement des feedbacks sans attendre les évaluations formelles. Quand le même feedback revient de plusieurs sources, vous cherchez un accompagnement plutôt que de continuer seul·e. Cette réceptivité — qui suppose d'accepter d'être surpris·e par ce qu'on apprend sur soi — est ce qui rend les feedbacks vraiment formateurs." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous souhaitez développer une culture du feedback dans votre équipe. Vous n'avez pas encore reçu de feedback de vos collaborateurs sur votre propre management.",
        tags: ["culture feedback", "modèle"],
        answers: [
          { text: "Je lance un rituel de feedback en commençant par en donner à mes collaborateurs.", score: 0.5 },
          { text: "Je commence par demander moi-même un feedback à mon équipe sur mon management avant de lancer le rituel.", score: 2 },
          { text: "Je mets en place une boîte à feedback anonyme pour que tout le monde puisse s'exprimer librement.", score: 1 },
          { text: "Je propose le feedback comme outil collectif sans le relier à moi-même dans un premier temps.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous demandez régulièrement des feedbacks sur votre propre façon de travailler ou de manager, pas seulement sur les projets.",
        tags: ["culture feedback", "exemplarité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, personne ne se donne de feedback en dehors des évaluations formelles. Vous pensez que la peur de froisser bloque les échanges.",
        tags: ["culture feedback", "peur"],
        answers: [
          { text: "Je laisse — forcer les feedbacks dans une équipe qui n'en a pas l'habitude crée plus de tension qu'autre chose.", score: 0 },
          { text: "Je propose un format structuré et sécurisé pour commencer — un feedback par projet, sur des éléments précis.", score: 2 },
          { text: "Je propose une formation sur le feedback pour lever les résistances.", score: 1 },
          { text: "Je donne moi-même des feedbacks plus réguliers pour montrer l'exemple.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "choix",
        text: "Un collaborateur vous donne un feedback sur votre communication en réunion. Il soulève un point que vous trouvez pertinent mais qui vous surprend.",
        tags: ["culture feedback", "réaction"],
        answers: [
          { text: "Je le remercie et je prends note sans m'engager sur un changement que je n'ai pas encore réfléchi.", score: 2 },
          { text: "Je m'explique immédiatement sur les raisons de mon comportement.", score: 0 },
          { text: "Je le remercie chaleureusement et je lui annonce que je vais changer — pour l'encourager.", score: 0.5 },
          { text: "Je lui demande comment il aurait préféré que je communique.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "choix",
        text: "Deux collaborateurs de votre équipe ont une tension latente. Ni l'un ni l'autre ne se donne de feedback direct. La tension affecte l'ambiance.",
        tags: ["culture feedback", "entre pairs"],
        answers: [
          { text: "Je les laisse gérer — les adultes peuvent régler leurs désaccords sans que je m'en mêle.", score: 0 },
          { text: "Je leur propose un cadre pour qu'ils s'échangent un feedback structuré, en étant présent si nécessaire.", score: 2 },
          { text: "J'en parle à chacun séparément pour comprendre la situation avant de décider comment intervenir.", score: 1.5 },
          { text: "Je réunis les deux pour qu'ils s'expliquent — la transparence est la meilleure solution.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous créez activement des occasions d'échanges de feedback dans votre équipe, sans vous limiter aux évaluations formelles.",
        tags: ["culture feedback", "facilitation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "choix",
        text: "Un collaborateur vous donne un feedback que vous avez bien reçu et sur lequel vous avez changé votre comportement. Il ne l'a pas remarqué.",
        tags: ["culture feedback", "reconnaissance"],
        answers: [
          { text: "Je laisse — si le changement est réel, il finira par le voir.", score: 0 },
          { text: "Je lui signale que son feedback a eu un impact et que j'ai ajusté ma façon de faire.", score: 2 },
          { text: "J'attends la prochaine occasion pour lui montrer concrètement que j'ai changé.", score: 1 },
          { text: "Je ne dis rien — mentionner que j'ai changé grâce à lui serait trop démonstratif.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez mis en place un rituel de feedback post-projet dans votre équipe. Après quelques mois, les feedbacks sont devenus polis et superficiels.",
        tags: ["culture feedback", "rituel"],
        answers: [
          { text: "Je laisse — avoir un rituel en place est déjà bien même s'il perd en qualité.", score: 0 },
          { text: "Je fais évoluer le format — questions plus précises, feedback ciblé sur des comportements spécifiques.", score: 2 },
          { text: "Je rappelle à l'équipe l'importance d'être sincère dans les feedbacks.", score: 0.5 },
          { text: "Je remplace le rituel collectif par des feedbacks bilatéraux entre personnes qui ont travaillé ensemble.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "likert",
        text: "Quand les échanges de feedback dans votre équipe perdent en qualité, vous intervenez pour les relancer plutôt que de maintenir la forme sans le fond.",
        tags: ["culture feedback", "qualité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous demande de partager les feedbacks que vos collaborateurs vous ont donnés sur votre management. C'était une conversation privée.",
        tags: ["culture feedback", "hiérarchie"],
        answers: [
          { text: "Je lui partage les feedbacks — il a la légitimité de savoir comment je suis perçu par mon équipe.", score: 0 },
          { text: "Je lui partage les grandes thématiques sans attribuer les feedbacks à des personnes.", score: 2 },
          { text: "Je lui dis que ces échanges sont confidentiels et je lui propose de lui partager mes propres apprentissages.", score: 2 },
          { text: "Je lui partage uniquement les feedbacks positifs.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture du feedback dans votre équipe est encore absente ou superficielle", desc: "Ne pas donner de feedback en dehors des évaluations formelles, laisser les rituals de feedback devenir polis et superficiels, ne pas demander soi-même de retour sur son management : la culture du feedback ne se décrète pas, elle se construit par l'exemple et la cohérence dans la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez mis en place des moments de feedback mais leur qualité n'est pas encore maintenue dans la durée", desc: "Vous avez des moments de feedback réguliers. Mais relancer un rituel qui perd en qualité, faciliter un échange de feedback entre deux collègues en tension, demander vous-même du feedback sur votre management avant de lancer un rituel collectif : ces aspects de facilitation active restent encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture du feedback dans votre équipe par l'exemple et la facilitation", desc: "Vous commencez par demander du feedback à votre équipe avant de lancer un rituel collectif. Vous faites évoluer les formats qui deviennent superficiels. Vous faciliter les échanges entre collègues en tension. Vous bouclez la boucle en signalant à ceux qui vous ont donné des feedbacks utiles ce que vous avez changé. Cette cohérence entre ce que vous demandez à votre équipe et ce que vous faites vous-même est ce qui rend une culture du feedback durable." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous avez reçu plusieurs feedbacks convergents sur un même point fort toute l'année. Vous ne savez pas quoi en faire.",
        tags: ["progression", "plan"],
        answers: [
          { text: "Je maintiens ce point fort — il est reconnu, pas besoin d'en faire plus.", score: 0.5 },
          { text: "Je cherche comment capitaliser dessus plus largement — dans quelles situations nouvelles ce point fort serait utile.", score: 2 },
          { text: "Je le mentionne dans mon bilan d'évaluation.", score: 0 },
          { text: "Je me concentre plutôt sur mes axes d'amélioration.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "likert",
        text: "Vous utilisez les feedbacks reçus pour identifier des opportunités de développement concrètes, pas seulement pour corriger des erreurs.",
        tags: ["progression", "capitalisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez reçu trois feedbacks contradictoires sur la même situation. Vous ne savez pas lequel prendre en compte.",
        tags: ["progression", "sélectivité"],
        answers: [
          { text: "Je prends la moyenne — la vérité est probablement au milieu.", score: 0 },
          { text: "Je cherche à comprendre pourquoi ils divergent — ils viennent peut-être de personnes avec des cadres de référence très différents.", score: 2 },
          { text: "Je prends celui qui vient de la personne la plus légitime sur le sujet.", score: 1.5 },
          { text: "Je laisse tomber — des feedbacks contradictoires ne sont pas exploitables.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez travaillé sur un axe d'amélioration pendant six mois. Vous avez progressé dans les situations habituelles mais pas dans les situations nouvelles ou stressantes.",
        tags: ["progression", "transfert"],
        answers: [
          { text: "Je considère que le travail est fait — j'ai progressé dans les situations habituelles.", score: 0 },
          { text: "Je reconnais que le vrai test d'un changement, c'est les situations inhabituelles, et je continue le travail.", score: 2 },
          { text: "Je cherche des situations nouvelles pour m'y entraîner délibérément.", score: 2 },
          { text: "Je demande à mon responsable si mes progrès sont perceptibles depuis l'extérieur.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "choix",
        text: "Un feedback reçu il y a deux ans sur votre style de communication vous revient en mémoire. Vous n'y aviez pas vraiment travaillé à l'époque.",
        tags: ["progression", "long terme"],
        answers: [
          { text: "Je le laisse de côté — deux ans après, c'est prescrit.", score: 0 },
          { text: "Je reprends ce feedback à la lumière de ce que je sais maintenant sur moi-même.", score: 2 },
          { text: "Je contacte la personne qui me l'avait donné pour lui demander si elle observe encore ce comportement.", score: 1.5 },
          { text: "Je me demande si ce feedback est encore pertinent avec le recul.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "likert",
        text: "Vous travaillez sur vos axes d'amélioration dans la durée, pas seulement dans les semaines qui suivent une évaluation.",
        tags: ["progression", "durée"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez travaillé sur un point d'amélioration mais vous n'êtes pas sûr·e que les changements sont visibles de l'extérieur.",
        tags: ["progression", "observable"],
        answers: [
          { text: "Je fais confiance — si j'ai travaillé dessus, ça se verra.", score: 0 },
          { text: "Je demande explicitement à quelqu'un de confiance s'il observe une évolution.", score: 2 },
          { text: "J'attends l'évaluation annuelle pour savoir si c'est perceptible.", score: 0.5 },
          { text: "Je multiplie les occasions de mettre en pratique pour que le changement devienne plus visible.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez appris quelque chose d'important sur vous-même grâce à un feedback difficile à recevoir. Un collègue semble traverser la même situation.",
        tags: ["progression", "partage"],
        answers: [
          { text: "Je ne lui en parle pas — mon expérience est personnelle et il trouvera sa propre façon.", score: 0 },
          { text: "Je lui partage mon expérience en lui laissant décider ce qu'il en fait.", score: 2 },
          { text: "Je lui suggère de demander des feedbacks à son équipe.", score: 1 },
          { text: "Je lui donne directement le feedback que je pense qu'il devrait entendre.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "likert",
        text: "Vous partagez vos apprentissages personnels issus de feedbacks difficiles quand c'est utile à un collègue.",
        tags: ["progression", "partage apprentissage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }, 
      {
        type: "choix",
        text: "Quelqu'un vous a donné un feedback de façon maladroite — le fond était juste mais la forme était dure. Vous ne savez pas si vous devez lui dire.",
        tags: ["progression", "feedback sur le feedback"],
        answers: [
          { text: "Je ne dis rien — le fond compte plus que la forme et ça risque de créer une tension inutile.", score: 0.5 },
          { text: "Je lui dis que son feedback m'a été utile et que la façon dont il était formulé m'a rendu difficile à recevoir.", score: 2 },
          { text: "Je lui dis que j'ai trouvé son feedback dur sans préciser pourquoi.", score: 0 },
          { text: "Je lui envoie un article sur les bonnes pratiques du feedback.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les feedbacks reçus restent des informations ponctuelles et non des leviers de développement continu", desc: "Ne pas savoir quoi faire d'un feedback positif, laisser tomber des feedbacks contradictoires, ne travailler sur un axe d'amélioration que dans les semaines qui suivent une évaluation : le feedback n'est utile que si on en fait quelque chose de délibéré. L'information sans travail sur soi reste une information." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les feedbacks pour corriger des erreurs mais moins pour capitaliser sur vos points forts ou progresser en profondeur", desc: "Vous travaillez sur les feedbacks qui pointent des axes d'amélioration clairs. Mais capitaliser sur un feedback positif, travailler sur un changement jusqu'à ce qu'il soit visible dans les situations stressantes, reprendre un feedback ancien avec un regard nouveau : ces usages plus avancés du feedback comme outil de développement sont encore peu présents." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez les feedbacks comme un outil de développement continu — points forts, contradictions et progression dans la durée", desc: "Vous cherchez comment capitaliser sur vos points forts dans de nouvelles situations. Vous analysez pourquoi des feedbacks contradictoires divergent plutôt que de les moyenner. Vous testez vos changements dans les situations stressantes pas seulement les habituelles. Vous donnez du feedback sur la façon dont un feedback vous a été donné. Ce rapport au feedback comme outil de développement continu — et non comme évaluation ponctuelle — est ce qui fait progresser en profondeur." },
        },
      }
    ],

  },

  }); // fin Object.assign

  window.ITS_registerTheme("transformation", "Transformation & Management", "🔄", [

    ["changer-sans-se-crisper", "Changer sans se crisper", "Tous publics",
      "Comprendre ses réflexes face aux changements de méthode, d'outil ou d'organisation.",
      { domain: "transformation", chapters: [
        ["Comprendre ses réflexes face au changement", "Identifier son mode de réaction habituel et passer de la protection à l'exploration."],
        ["Traverser la période de transition", "Signaler les difficultés, demander de l'aide et soutenir ses collègues."],
        ["Contribuer positivement à la dynamique", "Quick wins, retours terrain, influence sur le collectif."],
        ["Développer sa flexibilité dans la durée", "Traiter les transformations continues comme des opportunités de développement."],
      ]}
    ],

    ["feedback-utile", "Donner et recevoir du feedback utile", "Managers",
      "Installer des échanges réguliers, factuels et mobilisables sans créer de posture défensive.",
      { domain: "transformation", chapters: [
        ["Donner un feedback factuel et utile", "Précision, timing, courage — sans diluer le fond pour ménager la relation."],
        ["Recevoir un feedback sans se défendre", "Écoute active, séparation du fond et de la source, intégration réelle."],
        ["Créer une culture du feedback dans son équipe", "Exemplarité, facilitation, maintien de la qualité dans la durée."],
        ["Utiliser le feedback pour progresser", "Points forts, contradictions, travail en profondeur et dans la durée."],
      ]}
    ],

  ]);

})();