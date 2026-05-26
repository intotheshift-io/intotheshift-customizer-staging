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

  }); // fin Object.assign

  window.ITS_registerTheme("transformation", "Transformation & Management", "🔄", [

    ["changer-sans-se-crisper", "Changer sans se crisper", "Tous publics",
      "Comprendre ses réflexes face aux changements de méthode, d'outil ou d'organisation.",
      { domain: "transformation", chapters: [
        ["Comprendre ses réflexes face au changement", "Identifier son mode de réaction habituel et passer de la protection à l'exploration."],
        ["Traverser la période de transition",          "Signaler les difficultés, demander de l'aide et soutenir ses collègues."],
        ["Contribuer positivement à la dynamique",      "Quick wins, retours terrain, influence sur le collectif."],
        ["Développer sa flexibilité dans la durée",     "Traiter les transformations continues comme des opportunités de développement."]
      ]}
    ],

  ]);

})();