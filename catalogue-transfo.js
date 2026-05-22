/**
 * catalogue-transfo.js — INTO THE SHIFT
 * Domaine : Transformation & management (9 ADs)
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var T      = window._ITS_CORE.templates;
  var BADGES = window._ITS_CORE.BADGES;

  // ─────────────────────────────────────────────────────────────────────────
  //  QUESTIONS RÉDIGÉES — Transformation & management
  // ─────────────────────────────────────────────────────────────────────────

  Object.assign(window.CUSTOM_QUESTIONS, {
  "changement-reflexes": {
    0: [
        {
          text: "Votre organisation annonce un changement important. Les informations sont incomplètes. Que faites-vous ?",
          answers: [
          {text: "J'attends d'avoir toutes les informations avant de m'impliquer.", score: 0},
          {text: "Je pose des questions à mon responsable pour comprendre.", score: 1},
          {text: "Je cherche à clarifier ce qui concerne directement mon périmètre et j'agis sur ce que je maîtrise.", score: 2}
          ]
        },
        {
          text: "Un nouveau processus est introduit. Il est moins efficace que votre méthode actuelle dans certains cas. Que faites-vous ?",
          answers: [
          {text: "Je continue avec ma méthode — elle est plus efficace.", score: 0},
          {text: "J'applique le nouveau processus en faisant des ajustements informels.", score: 1},
          {text: "J'applique le nouveau processus et je remonte formellement les cas où il pose problème.", score: 2}
          ]
        },
        {
          text: "Votre rôle évolue et certaines compétences que vous maîtrisez bien deviennent moins centrales. Que faites-vous ?",
          answers: [
          {text: "Je me concentre sur ce que je sais faire.", score: 0},
          {text: "J'observe comment les autres gèrent la transition.", score: 1},
          {text: "Je cherche activement à développer les compétences dont j'aurai besoin dans le nouveau contexte.", score: 2}
          ]
        },
        {
          text: "Un changement d'outil vous est imposé alors que vous êtes très à l'aise avec l'ancien. Que faites-vous ?",
          answers: [
          {text: "Je résiste passivement en continuant à utiliser l'ancien quand je peux.", score: 0},
          {text: "J'adopte le nouvel outil mais j'exprime ma réticence.", score: 1},
          {text: "J'adopte le nouvel outil et cherche à en comprendre les avantages avant de le juger.", score: 2}
          ]
        },
        {
          text: "Vous devez changer votre façon de travailler avec vos collègues suite à une réorganisation. Les frontières sont floues. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça se clarifie tout seul.", score: 0},
          {text: "Je m'adapte au fil des interactions.", score: 1},
          {text: "Je propose une discussion avec les personnes concernées pour clarifier les nouvelles interfaces.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous devez avancer sur un projet alors que des décisions importantes ne sont pas encore prises. Que faites-vous ?",
          answers: [
          {text: "J'attends les décisions avant de démarrer.", score: 0},
          {text: "Je commence sur les parties qui ne dépendent d'aucune décision.", score: 1},
          {text: "Je clarifie ce que je peux avancer de façon autonome, je le fais, et je signale les blocages.", score: 2}
          ]
        },
        {
          text: "Une information contradictoire circule dans votre équipe sur un changement en cours. Que faites-vous ?",
          answers: [
          {text: "J'attends que la bonne information arrive.", score: 0},
          {text: "Je partage ce que je sais.", score: 1},
          {text: "Je cherche à vérifier la source et à clarifier formellement pour éviter que l'incertitude ne s'installe.", score: 2}
          ]
        },
        {
          text: "Vous devez prendre une décision opérationnelle dans un contexte où les priorités ne sont pas clairement définies. Que faites-vous ?",
          answers: [
          {text: "Je décide en fonction de ce qui me semble logique.", score: 0},
          {text: "Je demande à mon responsable avant d'agir.", score: 1},
          {text: "Je décide avec les informations disponibles et documente mes hypothèses pour les ajuster si besoin.", score: 2}
          ]
        },
        {
          text: "Un projet prend une direction différente de ce qui avait été prévu. Votre travail est partiellement remis en question. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte sans poser de question.", score: 0},
          {text: "J'exprime ma frustration mais je suis la nouvelle direction.", score: 1},
          {text: "J'essaie de comprendre la raison du changement et je clarifie ce qui est désormais attendu de moi.", score: 2}
          ]
        },
        {
          text: "Des personnes de votre équipe ont des informations différentes sur un même sujet. Que faites-vous ?",
          answers: [
          {text: "Je leur dis de chercher par eux-mêmes.", score: 0},
          {text: "Je partage ce que je sais à ceux qui me demandent.", score: 1},
          {text: "Je m'assure qu'une version alignée et fiable soit partagée avec tout le monde.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un collègue vous fait un retour que vous trouvez injuste sur votre façon de travailler. Que faites-vous ?",
          answers: [
          {text: "Je le conteste immédiatement.", score: 0},
          {text: "Je l'écoute mais ne change pas ma façon de travailler.", score: 1},
          {text: "Je l'écoute vraiment, cherche ce qui peut être utile dedans et décide ensuite comment y donner suite.", score: 2}
          ]
        },
        {
          text: "Votre responsable vous fait un retour direct que vous percevez comme maladroit dans la forme. Que faites-vous ?",
          answers: [
          {text: "Je me braque sur la forme et n'entends pas le fond.", score: 0},
          {text: "Je l'écoute poliment sans vraiment retenir le message.", score: 1},
          {text: "Je dépasse la forme pour accéder au fond du retour et l'utilise comme une information utile.", score: 2}
          ]
        },
        {
          text: "Vous réalisez après coup qu'un feedback que vous avez donné a été mal reçu. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — c'est à lui de s'adapter.", score: 0},
          {text: "Je lui explique que ce n'est pas ce que j'avais voulu dire.", score: 1},
          {text: "Je reviens vers lui pour comprendre comment il l'a perçu et ajuste ma communication.", score: 2}
          ]
        },
        {
          text: "Votre équipe vous demande un feedback sur leur travail mais vous n'avez pas toutes les informations pour évaluer correctement. Que faites-vous ?",
          answers: [
          {text: "Je donne un feedback général et positif.", score: 0},
          {text: "Je reporte le feedback à plus tard.", score: 1},
          {text: "Je donne un feedback sur ce que j'ai pu observer et suis transparent sur les zones où je manque d'information.", score: 2}
          ]
        },
        {
          text: "Vous donnez régulièrement du feedback à vos collègues mais vous recevez rarement de retour sur votre propre travail. Que faites-vous ?",
          answers: [
          {text: "Je considère que l'absence de retour négatif est un signe positif.", score: 0},
          {text: "J'attends que quelqu'un prenne l'initiative.", score: 1},
          {text: "Je sollicite explicitement des retours sur mon travail de manière régulière.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous avez adopté une nouvelle pratique de travail mais vous revenez aux anciennes habitudes dès que vous êtes sous pression. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas grave — la pression force les anciens réflexes.", score: 0},
          {text: "Je me rappelle à l'ordre et recommence.", score: 1},
          {text: "J'identifie ce qui déclenche le retour en arrière et travaille sur ce point précis.", score: 2}
          ]
        },
        {
          text: "Votre équipe adopte formellement une nouvelle pratique mais la réalité reste différente. Que faites-vous ?",
          answers: [
          {text: "Je les laisse s'adapter à leur rythme.", score: 0},
          {text: "Je rappelle l'importance de la nouvelle pratique.", score: 1},
          {text: "Je cherche à comprendre ce qui empêche l'ancrage réel et j'agis sur les causes.", score: 2}
          ]
        },
        {
          text: "Une pratique que vous aviez abandonnée revient dans votre équipe parce que la nouvelle n'est pas encore fluide. Que faites-vous ?",
          answers: [
          {text: "J'accepte — c'est une transition normale.", score: 0},
          {text: "J'essaie de trouver un équilibre entre les deux.", score: 1},
          {text: "Je traite cela comme un signal d'ajustement et cherche à rendre la nouvelle pratique plus accessible.", score: 2}
          ]
        },
        {
          text: "Vous avez mis en place une nouvelle façon de travailler qui a bien fonctionné au départ mais perd en vigueur. Que faites-vous ?",
          answers: [
          {text: "J'attends que les personnes se remobilisent d'elles-mêmes.", score: 0},
          {text: "Je rappelle l'importance de la pratique.", score: 1},
          {text: "Je cherche à revitaliser la démarche, peut-être en l'ajustant si elle n'est plus adaptée.", score: 2}
          ]
        },
        {
          text: "Une habitude collective nuisible a été identifiée et des alternatives proposées, mais elle persiste. Que faites-vous ?",
          answers: [
          {text: "Je laisse faire — le changement prend du temps.", score: 0},
          {text: "Je signale à nouveau le problème.", score: 1},
          {text: "Je cherche pourquoi l'alternative n'est pas adoptée et si c'est la bonne solution ou si elle doit être révisée.", score: 2}
          ]
        }
    ],
  },

  "feedback-managerial": {
    0: [
        {
          text: "Vous souhaitez faire un feedback à un collaborateur sur une situation récente. Il est occupé. Que faites-vous ?",
          answers: [
          {text: "Je lui fais le feedback entre deux portes.", score: 0},
          {text: "J'attends une réunion d'équipe pour aborder le sujet.", score: 1},
          {text: "Je prends le temps de trouver un moment approprié, en tête à tête, pour ce type d'échange.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vient de terminer une mission difficile. Vous voulez lui donner un retour. Le contexte est tendu. Que faites-vous ?",
          answers: [
          {text: "Je reporte le feedback à quand l'atmosphère sera meilleure.", score: 0},
          {text: "Je donne le feedback rapidement pour que ce soit fait.", score: 1},
          {text: "Je choisis soigneusement le moment et le lieu pour que le feedback soit réellement reçu.", score: 2}
          ]
        },
        {
          text: "Vous avez du feedback positif et des points d'amélioration à donner. Comment les ordonnez-vous ?",
          answers: [
          {text: "Je commence toujours par le positif pour adoucir la critique.", score: 0},
          {text: "Je donne le plus important en premier, qu'il soit positif ou non.", score: 1},
          {text: "J'adapte l'ordre selon la personne et le contexte pour que le message principal soit clairement entendu.", score: 2}
          ]
        },
        {
          text: "Vous savez qu'un collaborateur est sensible aux critiques. Vous avez un feedback difficile à lui donner. Que faites-vous ?",
          answers: [
          {text: "Je l'édulcore pour qu'il soit mieux reçu.", score: 0},
          {text: "Je donne le feedback clairement mais en restant prudent.", score: 1},
          {text: "Je pense à comment formuler le feedback pour qu'il soit utile sans le retenir ou le transformer.", score: 2}
          ]
        },
        {
          text: "Lors d'un entretien, un collaborateur vous demande un feedback direct sur son travail. Vous n'avez pas tout observé. Que faites-vous ?",
          answers: [
          {text: "Je donne un feedback global positif.", score: 0},
          {text: "Je lui donne un feedback sur ce que j'ai pu observer.", score: 1},
          {text: "Je suis transparent sur mes zones d'observation et lui donne un feedback factuel sur ce que je sais.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous devez donner un feedback négatif à un collaborateur. Il travaille bien en général mais a fait une erreur sérieuse. Comment le formulez-vous ?",
          answers: [
          {text: "Je nomme l'erreur clairement et lui dis ce qu'il doit corriger.", score: 0},
          {text: "Je contextualise avec ses bons points puis j'aborde l'erreur.", score: 1},
          {text: "Je m'appuie sur les faits observés, explique l'impact et oriente vers une piste d'amélioration concrète.", score: 2}
          ]
        },
        {
          text: "Vous observez qu'un collaborateur a des comportements qui freinent la coopération dans l'équipe. Que faites-vous ?",
          answers: [
          {text: "J'en parle à l'équipe de façon générale sans le cibler.", score: 0},
          {text: "Je lui dis qu'il doit mieux coopérer.", score: 1},
          {text: "Je lui donne des exemples concrets de comportements observés et de leur impact sur l'équipe.", score: 2}
          ]
        },
        {
          text: "Votre feedback à un collaborateur n'a pas produit de changement après deux semaines. Que faites-vous ?",
          answers: [
          {text: "Je répète le même feedback.", score: 0},
          {text: "Je lui dis que les choses n'ont pas changé.", score: 1},
          {text: "Je cherche à comprendre ce qui empêche le changement et j'adapte mon approche.", score: 2}
          ]
        },
        {
          text: "Vous avez donné un feedback que le collaborateur a contesté vigoureusement. Que faites-vous ?",
          answers: [
          {text: "Je maintiens ma position.", score: 0},
          {text: "Je réévalue si j'ai tort.", score: 1},
          {text: "J'écoute vraiment ses arguments, distingue ce qui est une perspective utile de ce qui est une défensive, et ajuste si besoin.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande un feedback sur un travail dont vous n'avez pas eu le temps de vérifier les détails. Que faites-vous ?",
          answers: [
          {text: "Je lui donne un retour global.", score: 0},
          {text: "Je reporte le feedback.", score: 1},
          {text: "Je lui explique que mon retour sera limité par le temps que j'ai eu pour l'examiner et je lui donne ce que je peux.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un collaborateur vous donne un retour critique sur votre façon de communiquer. Vous ne l'avez pas sollicité. Que faites-vous ?",
          answers: [
          {text: "Je le recadre — ce n'était pas une invitation à me critiquer.", score: 0},
          {text: "Je l'écoute poliment.", score: 1},
          {text: "Je l'accueille avec curiosité même si c'est inconfortable.", score: 2}
          ]
        },
        {
          text: "Votre responsable vous fait un feedback que vous trouvez injuste. Que faites-vous ?",
          answers: [
          {text: "J'accepte sans répondre.", score: 0},
          {text: "Je le conteste immédiatement.", score: 1},
          {text: "J'écoute, prends le temps de digérer, puis engage un échange construit si je pense qu'il y a un malentendu.", score: 2}
          ]
        },
        {
          text: "Vous recevez un feedback anonyme via un outil RH. Vous pensez savoir qui l'a formulé. Que faites-vous ?",
          answers: [
          {text: "Je cherche à identifier la personne.", score: 0},
          {text: "Je tente de comprendre ce qui a pu motiver ce feedback.", score: 1},
          {text: "Je prends le feedback pour ce qu'il est et travaille sur le fond, sans chercher à l'attribuer.", score: 2}
          ]
        },
        {
          text: "Votre équipe vous donne des feedbacks en collectif lors d'une rétrospective. Certains vous surprennent. Que faites-vous ?",
          answers: [
          {text: "Je défends mes choix.", score: 0},
          {text: "J'écoute et note sans réagir.", score: 1},
          {text: "Je pose des questions pour comprendre ce qui est derrière chaque point et j'en tiens compte.", score: 2}
          ]
        },
        {
          text: "Vous recevez un feedback très positif. Vous avez tendance à le minimiser. Que faites-vous ?",
          answers: [
          {text: "Je le relativise — il n'est peut-être pas sincère.", score: 0},
          {text: "Je le reçois mais je ne lui accorde pas trop d'importance.", score: 1},
          {text: "Je le reçois pleinement et cherche à comprendre ce qui, dans mon comportement, est perçu positivement.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous avez reçu un feedback important il y a un mois. Vous n'avez pas encore ajusté votre comportement. Que faites-vous ?",
          answers: [
          {text: "Je l'avais noté mais d'autres priorités ont pris le dessus.", score: 0},
          {text: "Je cherche à le mettre en pratique dans les prochaines semaines.", score: 1},
          {text: "Je reconnais que je ne l'ai pas appliqué et j'identifie concrètement ce que je vais changer et quand.", score: 2}
          ]
        },
        {
          text: "Un feedback que vous avez reçu a changé votre façon de travailler. Comment vous en assurez-vous dans la durée ?",
          answers: [
          {text: "Je fais confiance à mes nouvelles habitudes.", score: 0},
          {text: "Je reste attentif à ne pas revenir aux anciens comportements.", score: 1},
          {text: "Je demande à mon interlocuteur de continuer à me donner des retours pour valider que le changement s'est ancré.", score: 2}
          ]
        },
        {
          text: "Vous vous rendez compte qu'un feedback que vous avez reçu il y a longtemps était juste mais que vous ne l'aviez pas entendu à l'époque. Que faites-vous ?",
          answers: [
          {text: "Je l'oublie — ce qui est passé est passé.", score: 0},
          {text: "Je repense à la situation mais sans agir.", score: 1},
          {text: "Je reviens vers la personne pour lui signifier que son feedback a finalement eu de l'impact.", score: 2}
          ]
        },
        {
          text: "Une pratique que vous avez ajustée suite à un feedback revient à l'ancienne sous la pression. Que faites-vous ?",
          answers: [
          {text: "Je l'accepte — la pression force les réflexes.", score: 0},
          {text: "Je me recadre quand je m'en aperçois.", score: 1},
          {text: "Je traite cette régression comme un signal : le changement n'est pas encore ancré et j'ai besoin de travail supplémentaire.", score: 2}
          ]
        },
        {
          text: "Vous avez l'habitude de ne pas partager vos propres apprentissages avec votre équipe. Que faites-vous ?",
          answers: [
          {text: "Ce sont mes apprentissages personnels — pas nécessaire de les partager.", score: 0},
          {text: "Je les partage quand l'occasion se présente.", score: 1},
          {text: "Je cherche activement à partager mes apprentissages : ça renforce la culture d'amélioration continue.", score: 2}
          ]
        }
    ],
  },

  "manager-engageant-tbf": {
    0: [
        {
          text: "Votre équipe démarre un projet mais les rôles et les attentes ne sont pas clairement définis. Que faites-vous ?",
          answers: [
          {text: "Je laisse chacun trouver sa place naturellement.", score: 0},
          {text: "Je donne des indications générales au démarrage.", score: 1},
          {text: "Je prends le temps de clarifier les rôles, les objectifs et les marges de décision de chacun.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande la raison d'une décision que vous avez prise. Que faites-vous ?",
          answers: [
          {text: "Je lui dis que c'est une décision que j'ai prise et qu'il doit la suivre.", score: 0},
          {text: "Je lui explique brièvement.", score: 1},
          {text: "Je lui explique le contexte et les critères qui ont guidé ma décision.", score: 2}
          ]
        },
        {
          text: "Votre équipe travaille sur un projet mais le sens de la contribution de chacun n'est pas clair. Que faites-vous ?",
          answers: [
          {text: "Je suppose que chacun comprend sa valeur ajoutée.", score: 0},
          {text: "Je leur rappelle les objectifs du projet.", score: 1},
          {text: "Je crée un moment pour relier le travail de chacun à un enjeu plus large.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande plus d'autonomie sur une décision. Vous n'êtes pas sûr qu'il soit prêt. Que faites-vous ?",
          answers: [
          {text: "Je refuse — il faut qu'il fasse ses preuves d'abord.", score: 0},
          {text: "Je lui donne l'autonomie en restant disponible.", score: 1},
          {text: "Je lui explique ce dont j'ai besoin de voir pour lui accorder cette autonomie et on en reparle.", score: 2}
          ]
        },
        {
          text: "Les membres de votre équipe ont des niveaux très différents sur certains sujets. Que faites-vous ?",
          answers: [
          {text: "Chacun travaille à son niveau — c'est naturel.", score: 0},
          {text: "Je pousse les moins bons à s'améliorer.", score: 1},
          {text: "Je cherche à créer des conditions d'apprentissage mutuel et à valoriser la complémentarité.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un collaborateur prend trop souvent vos décisions à votre place parce que vous n'êtes pas disponible. Que faites-vous ?",
          answers: [
          {text: "Je lui dis de vous consulter avant d'agir.", score: 0},
          {text: "Je lui délègue officiellement ces décisions.", score: 1},
          {text: "Je clarifie ce qu'il peut décider seul et dans quels cas il doit vous solliciter.", score: 2}
          ]
        },
        {
          text: "Votre équipe attend systématiquement votre validation avant d'agir, même sur des sujets simples. Que faites-vous ?",
          answers: [
          {text: "Je valide rapidement pour ne pas les bloquer.", score: 0},
          {text: "Je leur dis qu'ils peuvent décider.", score: 1},
          {text: "Je cherche à comprendre pourquoi ils n'osent pas décider et travaille à créer un environnement plus sécurisant.", score: 2}
          ]
        },
        {
          text: "Vous avez délégué une mission à un collaborateur. Il revient vers vous à chaque étape. Que faites-vous ?",
          answers: [
          {text: "Je réponds à chaque sollicitation — il a besoin de moi.", score: 0},
          {text: "Je lui dis de débrouiller seul.", score: 1},
          {text: "Je l'aide à prendre confiance en analysant avec lui ce qui l'empêche d'avancer seul.", score: 2}
          ]
        },
        {
          text: "Un collaborateur prend une initiative sans vous consulter. Elle est bonne mais hors de son périmètre habituel. Que faites-vous ?",
          answers: [
          {text: "Je lui rappelle qu'il aurait dû me consulter.", score: 0},
          {text: "Je valorise l'initiative et ne dis rien sur le périmètre.", score: 1},
          {text: "Je valorise l'initiative et clarifie ensemble les frontières de son périmètre de décision.", score: 2}
          ]
        },
        {
          text: "Vous constatez que votre présence dans le travail de votre équipe est parfois ressentie comme un contrôle. Que faites-vous ?",
          answers: [
          {text: "Je réduis ma présence.", score: 0},
          {text: "J'explique que ma présence n'est pas un contrôle.", score: 1},
          {text: "Je réfléchis à comment je me positionne dans leurs échanges et j'ajuste pour être un appui plutôt qu'un observateur.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Votre équipe traverse une période difficile. L'énergie est basse. Que faites-vous ?",
          answers: [
          {text: "Je les encourage à tenir encore un peu.", score: 0},
          {text: "Je cherche à soulager la pression.", score: 1},
          {text: "Je nommer ce que j'observe, je reconnais l'effort fourni et je cherche avec eux ce qui peut être allégé.", score: 2}
          ]
        },
        {
          text: "Un collaborateur qui s'investissait beaucoup semble moins impliqué. Que faites-vous ?",
          answers: [
          {text: "Je l'encourage à se remobiliser.", score: 0},
          {text: "Je lui demande si tout va bien.", score: 1},
          {text: "Je crée un espace d'échange sur son vécu de son travail et ce qui a pu changer.", score: 2}
          ]
        },
        {
          text: "L'équipe génère de bons résultats mais l'ambiance est mécanique. Que faites-vous ?",
          answers: [
          {text: "Les résultats sont bons — l'ambiance n'est pas prioritaire.", score: 0},
          {text: "Je cherche à créer des moments conviviaux.", score: 1},
          {text: "J'analyse ce qui crée ce fonctionnement mécanique et travaille sur les conditions qui permettraient plus d'engagement.", score: 2}
          ]
        },
        {
          text: "Certains membres de l'équipe sont très investis, d'autres beaucoup moins. Comment gérez-vous l'inégalité d'engagement ?",
          answers: [
          {text: "C'est naturel — les personnes s'investissent différemment.", score: 0},
          {text: "Je valorise ceux qui s'investissent.", score: 1},
          {text: "Je cherche à comprendre les raisons de l'inégalité et à créer les conditions qui permettraient à chacun de s'investir davantage.", score: 2}
          ]
        },
        {
          text: "Vous réalisez qu'un irritant récurrent dans votre équipe n'a jamais été traité. Que faites-vous ?",
          answers: [
          {text: "Je n'y avais pas pensé — je vais le noter.", score: 0},
          {text: "Je le signale à ma hiérarchie.", score: 1},
          {text: "Je prends l'initiative de le traiter ou d'expliquer pourquoi c'est compliqué à résoudre.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous réalisez que votre façon de manager est trop directionnelle. Certains collaborateurs sont peu autonomes. Que faites-vous ?",
          answers: [
          {text: "Je suis satisfait que les choses soient sous contrôle.", score: 0},
          {text: "Je cherche à être moins présent.", score: 1},
          {text: "Je travaille activement à transférer des espaces de décision et à valoriser l'autonomie progressive.", score: 2}
          ]
        },
        {
          text: "Un nouveau membre de l'équipe remet en question certaines pratiques habituelles. Que faites-vous ?",
          answers: [
          {text: "Je lui explique pourquoi ces pratiques existent.", score: 0},
          {text: "J'écoute ses questions sans m'engager.", score: 1},
          {text: "Je prends ses questions comme une opportunité d'examiner si ces pratiques méritent d'être remises en question.", score: 2}
          ]
        },
        {
          text: "Votre équipe vous apprécie mais ne vous dit jamais vraiment ce qui ne fonctionne pas. Que faites-vous ?",
          answers: [
          {text: "C'est bon signe — tout va bien.", score: 0},
          {text: "Je leur dis qu'ils peuvent m'en parler.", score: 1},
          {text: "Je travaille à créer les conditions pour que la critique constructive soit possible et bienvenue.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous ne faites jamais évoluer vos pratiques managériales. Que faites-vous ?",
          answers: [
          {text: "Si les résultats sont là, pas besoin de changer.", score: 0},
          {text: "Je cherche des inspirations pour évoluer.", score: 1},
          {text: "Je sollicite des feedbacks, expérimente et me forme régulièrement.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à céder du contrôle même sur des sujets où ce n'est pas nécessaire. Que faites-vous ?",
          answers: [
          {text: "Je garde le contrôle — c'est ma responsabilité.", score: 0},
          {text: "J'essaie de déléguer progressivement.", score: 1},
          {text: "Je travaille à comprendre ce qui génère ce besoin de contrôle et à le dépasser de façon consciente.", score: 2}
          ]
        }
    ],
  },

  "pilotage-projet": {
    0: [
        {
          text: "Vous rejoignez un projet mais personne ne vous a clairement expliqué ce qu'on attend de vous. Que faites-vous ?",
          answers: [
          {text: "J'observe comment les autres s'organisent et m'adapte.", score: 0},
          {text: "Je pose des questions à mon responsable.", score: 1},
          {text: "Je prends l'initiative de clarifier mon rôle, mes livrables et mes interactions clés avec les bonnes personnes.", score: 2}
          ]
        },
        {
          text: "Votre livrable est attendu vendredi mais personne ne vous a précisé les critères de validation. Que faites-vous ?",
          answers: [
          {text: "Je produis ce qui me semble logique.", score: 0},
          {text: "Je demande à mon responsable la veille.", score: 1},
          {text: "Je clarifie les critères dès le début pour ne pas avoir à refaire le travail.", score: 2}
          ]
        },
        {
          text: "En cours de projet, vous réalisez que votre périmètre d'action chevauche celui d'un autre interlocuteur. Que faites-vous ?",
          answers: [
          {text: "Je continue sur ma lancée en espérant que ça se régule.", score: 0},
          {text: "J'en informe mon responsable.", score: 1},
          {text: "Je prends contact avec l'autre interlocuteur pour clarifier la répartition.", score: 2}
          ]
        },
        {
          text: "Les livrables attendus de vous ont changé depuis le lancement du projet. Personne ne vous l'a formellement dit. Que faites-vous ?",
          answers: [
          {text: "Je continue avec les livrables initiaux.", score: 0},
          {text: "Je m'adapte à ce que je comprends des nouvelles attentes.", score: 1},
          {text: "Je demande une clarification formelle sur l'évolution des attentes avant de changer de direction.", score: 2}
          ]
        },
        {
          text: "Vous devez coopérer avec un interlocuteur dont les méthodes de travail sont très différentes des vôtres. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte entièrement à ses méthodes.", score: 0},
          {text: "Je défends mes méthodes.", score: 1},
          {text: "Je cherche à comprendre ses méthodes et propose un mode de fonctionnement commun.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un projet dont vous êtes partie prenante prend du retard à cause d'un autre contributeur. Que faites-vous ?",
          answers: [
          {text: "Je signale à mon responsable que le retard n'est pas de mon fait.", score: 0},
          {text: "J'essaie de rattraper par moi-même.", score: 1},
          {text: "Je contacte l'autre contributeur pour comprendre le blocage et cherche une solution avec lui.", score: 2}
          ]
        },
        {
          text: "Vous avez réalisé votre partie mais vous attendez une validation qui bloque la suite. Que faites-vous ?",
          answers: [
          {text: "J'attends — c'est à eux de prendre en charge la validation.", score: 0},
          {text: "Je relance de façon informelle.", score: 1},
          {text: "Je relance formellement, propose une date limite et informe mon responsable si le délai est critique.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que plusieurs interlocuteurs du projet ont des lectures différentes des objectifs. Que faites-vous ?",
          answers: [
          {text: "Je continue avec ma propre lecture.", score: 0},
          {text: "J'essaie d'aligner les personnes autour de moi.", score: 1},
          {text: "Je remonte le désalignement et propose une session de cadrage pour unifier la compréhension.", score: 2}
          ]
        },
        {
          text: "Un projet est ralenti par des décisions qui ne sont pas prises. Personne ne semble vouloir prendre la responsabilité. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte à l'inertie.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je formule la décision manquante, ses enjeux et les options disponibles pour faciliter le passage à l'acte.", score: 2}
          ]
        },
        {
          text: "Vous observez que le projet va dans une direction qui vous semble risquée mais ce n'est pas vous qui décidez. Que faites-vous ?",
          answers: [
          {text: "Je suis la direction — c'est aux décideurs de gérer.", score: 0},
          {text: "J'exprime mon inquiétude informellement.", score: 1},
          {text: "Je formalise ma préoccupation avec des éléments factuels et je la soumets aux bonnes personnes.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous anticipez un risque sur votre partie du projet. Que faites-vous ?",
          answers: [
          {text: "J'attends de voir si le risque se concrétise.", score: 0},
          {text: "Je le mentionne à mon responsable.", score: 1},
          {text: "Je documente le risque, évalue son impact et propose des mesures préventives.", score: 2}
          ]
        },
        {
          text: "Votre contribution dépend de celle d'un interlocuteur qui a du mal à livrer dans les délais. Que faites-vous ?",
          answers: [
          {text: "Je le signale à mon responsable pour qu'il gère.", score: 0},
          {text: "Je prends en compte le retard dans ma propre organisation.", score: 1},
          {text: "Je travaille avec lui pour comprendre les blocages et cherche comment contribuer à les débloquer.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous avez accepté plus d'engagements de projet que vous ne pouvez tenir. Que faites-vous ?",
          answers: [
          {text: "Je fais de mon mieux et espère tenir.", score: 0},
          {text: "Je préviens les parties prenantes qu'il y aura des retards.", score: 1},
          {text: "Je prends le problème tôt, je priorise et j'engage une conversation claire sur ce que je peux tenir et ce qui doit être revu.", score: 2}
          ]
        },
        {
          text: "Un interlocuteur externe ne remplit pas ses engagements de projet. Vous n'avez pas d'autorité sur lui. Que faites-vous ?",
          answers: [
          {text: "Je signale le problème à quelqu'un qui a de l'autorité.", score: 0},
          {text: "Je cherche à le relancer directement.", score: 1},
          {text: "Je remonte le problème avec des éléments factuels sur l'impact et propose une solution concrète.", score: 2}
          ]
        },
        {
          text: "Une dépendance externe crée de l'incertitude sur votre livraison. Que faites-vous ?",
          answers: [
          {text: "J'attends de voir ce que ça donne.", score: 0},
          {text: "J'informe les parties prenantes que ma livraison est incertaine.", score: 1},
          {text: "Je travaille avec les parties prenantes pour construire des plans B réalistes.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Le projet touche à sa fin et vous réalisez que certains apprentissages importants risquent d'être perdus. Que faites-vous ?",
          answers: [
          {text: "Je note les apprentissages pour moi.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je prends l'initiative d'organiser un moment de capitalisation avec les parties prenantes.", score: 2}
          ]
        },
        {
          text: "Vous avez livré votre part du projet mais vous n'avez pas eu de retour. Que faites-vous ?",
          answers: [
          {text: "Si rien n'est dit, c'est que ça convient.", score: 0},
          {text: "Je demande si tout va bien.", score: 1},
          {text: "Je sollicite explicitement un retour pour évaluer la qualité de ma contribution.", score: 2}
          ]
        },
        {
          text: "En fin de projet, vous réalisez que des choses auraient pu être mieux faites avec un cadrage initial différent. Que faites-vous ?",
          answers: [
          {text: "Je passe à la suite.", score: 0},
          {text: "Je note ces éléments pour moi.", score: 1},
          {text: "Je les documente et les partage pour que les prochains projets bénéficient de ces apprentissages.", score: 2}
          ]
        },
        {
          text: "Un projet se termine sans bilan formalisé. Que faites-vous ?",
          answers: [
          {text: "Je passe au prochain — les bilans sont souvent une formalité.", score: 0},
          {text: "Je propose un bilan informel.", score: 1},
          {text: "Je propose un bilan structuré même court pour capitaliser sur l'expérience.", score: 2}
          ]
        },
        {
          text: "Votre contribution à un projet n'a pas été reconnue dans le bilan final. Que faites-vous ?",
          answers: [
          {text: "Je l'accepte — la visibilité n'est pas l'essentiel.", score: 0},
          {text: "Je le signale discrètement.", score: 1},
          {text: "Je cherche à comprendre pourquoi et à établir des pratiques pour rendre les contributions visibles dans les futurs projets.", score: 2}
          ]
        }
    ],
  },

  "conduite-changement": {
    0: [
        {
          text: "Votre équipe résiste à un changement que vous n'avez pas choisi mais que vous devez relayer. Certains contestent ouvertement. Que faites-vous ?",
          answers: [
          {text: "Je leur dis que la décision est prise et qu'ils doivent s'y conformer.", score: 0},
          {text: "J'exprime moi aussi mon désaccord pour montrer que je les comprends.", score: 1},
          {text: "Je sépare clairement mon rôle de relais de mon opinion personnelle et je cherche à comprendre leurs inquiétudes réelles.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande si vous êtes personnellement convaincu par le changement en cours. Vous ne l'êtes pas totalement. Que faites-vous ?",
          answers: [
          {text: "Je mens pour maintenir la confiance.", score: 0},
          {text: "J'exprime mon désaccord.", score: 1},
          {text: "Je dis honnêtement ce que je peux partager tout en maintenant ma posture de relais responsable.", score: 2}
          ]
        },
        {
          text: "La résistance de votre équipe ralentit la mise en œuvre du changement. Votre hiérarchie pousse. Que faites-vous ?",
          answers: [
          {text: "Je force l'application — la hiérarchie attend des résultats.", score: 0},
          {text: "Je laisse davantage de temps à l'équipe.", score: 1},
          {text: "Je traduis les inquiétudes de l'équipe à ma hiérarchie ET j'accompagne l'équipe dans la transition.", score: 2}
          ]
        },
        {
          text: "Un changement arrive alors que votre équipe est déjà fatiguée par plusieurs transformations récentes. Que faites-vous ?",
          answers: [
          {text: "J'impose le changement — c'est inévitable.", score: 0},
          {text: "Je demande à ma hiérarchie de reporter.", score: 1},
          {text: "Je signale la fatigue de changement à ma hiérarchie tout en cherchant comment alléger la transition pour l'équipe.", score: 2}
          ]
        },
        {
          text: "Certains membres de votre équipe adhèrent au changement, d'autres s'y opposent. La fracture crée des tensions. Que faites-vous ?",
          answers: [
          {text: "Je valorise ceux qui adhèrent.", score: 0},
          {text: "Je cherche à convaincre ceux qui s'opposent.", score: 1},
          {text: "Je crée un espace pour que les deux positions puissent s'exprimer et je travaille à construire un terrain commun.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un changement vous est demandé de porter alors que vous n'avez presque pas été consulté. Que faites-vous ?",
          answers: [
          {text: "Je le porte — c'est décidé.", score: 0},
          {text: "J'exprime mon mécontentement d'abord.", score: 1},
          {text: "Je pose les questions nécessaires pour comprendre le contexte, puis je le relaye avec tout ce que j'ai appris.", score: 2}
          ]
        },
        {
          text: "Votre équipe vous demande si le changement est vraiment là pour durer ou si ça va changer encore. Que faites-vous ?",
          answers: [
          {text: "Je leur dis que oui, c'est définitif.", score: 0},
          {text: "Je leur dis que je n'en sais rien.", score: 1},
          {text: "Je suis honnête sur ce que je sais et ne sais pas, et je m'engage à les tenir informés si les choses évoluent.", score: 2}
          ]
        },
        {
          text: "Lors de la mise en œuvre d'un changement, vous réalisez que la communication initiale a créé des malentendus. Que faites-vous ?",
          answers: [
          {text: "Je corrige informellement les malentendus au fil des conversations.", score: 0},
          {text: "Je remonte à ma hiérarchie que la communication a mal fonctionné.", score: 1},
          {text: "Je clarifie activement les malentendus auprès de mon équipe et remonte le problème pour que la communication officielle soit ajustée.", score: 2}
          ]
        },
        {
          text: "Un changement impacte certains membres de votre équipe plus que d'autres. Que faites-vous ?",
          answers: [
          {text: "Je traite tout le monde pareil.", score: 0},
          {text: "Je porte une attention particulière aux plus touchés.", score: 1},
          {text: "Je gère individuellement selon l'impact réel de chacun et je crée les espaces d'expression adaptés.", score: 2}
          ]
        },
        {
          text: "La direction demande une mise en œuvre rapide d'un changement. Votre équipe a besoin de plus de temps. Que faites-vous ?",
          answers: [
          {text: "Je respecte le délai imposé.", score: 0},
          {text: "Je négocie un délai plus long.", score: 1},
          {text: "Je propose un plan de mise en œuvre réaliste avec des jalons clairs et j'explique les risques d'une mise en œuvre trop rapide.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un collaborateur est clairement en difficulté avec le changement. Il ne l'exprime pas ouvertement. Que faites-vous ?",
          answers: [
          {text: "J'attends qu'il le dise.", score: 0},
          {text: "Je lui demande si tout va bien.", score: 1},
          {text: "Je crée un espace d'échange individuel et lui donne les moyens de s'exprimer sans qu'il ait à le demander.", score: 2}
          ]
        },
        {
          text: "Votre équipe a formellement accepté le changement mais en pratique revient aux anciens modes. Que faites-vous ?",
          answers: [
          {text: "Je rappelle les nouvelles règles.", score: 0},
          {text: "J'attends que ça se stabilise.", score: 1},
          {text: "J'analyse ce qui empêche l'adoption réelle : est-ce un manque de compétence, de compréhension ou un problème d'organisation ?", score: 2}
          ]
        },
        {
          text: "Un collaborateur a de vraies difficultés avec la nouvelle méthode. Il met du temps à s'y adapter. Que faites-vous ?",
          answers: [
          {text: "Je lui laisse le temps — il finira par y arriver.", score: 0},
          {text: "Je lui propose de l'aide.", score: 1},
          {text: "Je comprends ce qui lui est difficile spécifiquement et cherche une forme d'appui adaptée.", score: 2}
          ]
        },
        {
          text: "Un collaborateur exprime que le changement l'a vraiment affecté dans son travail quotidien. Que faites-vous ?",
          answers: [
          {text: "Je lui dis que tout le monde s'y adapte.", score: 0},
          {text: "Je l'écoute et l'encourage.", score: 1},
          {text: "J'écoute, reconnais l'impact réel et cherche avec lui des façons concrètes de l'atténuer.", score: 2}
          ]
        },
        {
          text: "Vous êtes vous-même en difficulté pour incarner le changement que vous devez porter. Que faites-vous ?",
          answers: [
          {text: "Je porte le changement malgré tout.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je cherche le soutien nécessaire pour être crédible dans mon rôle de relais.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Six mois après la mise en œuvre, le changement semble acquis en surface mais certains glissements réapparaissent. Que faites-vous ?",
          answers: [
          {text: "Je laisse — le changement prend du temps.", score: 0},
          {text: "Je rappelle les nouvelles règles.", score: 1},
          {text: "J'analyse si c'est un problème d'ancrage ou si le nouveau mode n'est pas adapté et j'agis en conséquence.", score: 2}
          ]
        },
        {
          text: "La direction lance un nouveau changement alors que le précédent n'est pas encore stabilisé. Que faites-vous ?",
          answers: [
          {text: "Je m'y attelle — c'est ma mission.", score: 0},
          {text: "Je signale que c'est beaucoup.", score: 1},
          {text: "Je remonte formellement les risques liés à la superposition des changements avec des éléments concrets.", score: 2}
          ]
        },
        {
          text: "Le changement a été bien implémenté mais a créé de nouvelles rigidités non prévues. Que faites-vous ?",
          answers: [
          {text: "Je vis avec — ce sont les effets du changement.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je signale ces effets de bord avec des exemples factuels et propose des ajustements.", score: 2}
          ]
        },
        {
          text: "Vous réalisez qu'un changement que vous avez porté n'a finalement pas atteint ses objectifs. Que faites-vous ?",
          answers: [
          {text: "Je cherche à qui revient la responsabilité.", score: 0},
          {text: "J'en tire des leçons pour moi.", score: 1},
          {text: "Je contribue à une analyse honnête des raisons et propose des ajustements pour la suite.", score: 2}
          ]
        },
        {
          text: "Votre équipe a bien intégré le changement et est passée à autre chose. Mais un risque de réversion existe si le contexte change. Que faites-vous ?",
          answers: [
          {text: "J'attends que le risque se matérialise.", score: 0},
          {text: "Je note le risque mentalement.", score: 1},
          {text: "Je travaille à ancrer les nouveaux comportements de façon durable pour qu'ils résistent au changement de contexte.", score: 2}
          ]
        }
    ],
  },

  "responsabilisation-equipe": {
    0: [
        {
          text: "Vous avez délégué une tâche à un collaborateur. Après deux jours, il vous revient avec des questions sur chaque étape. Que faites-vous ?",
          answers: [
          {text: "Je réponds à toutes ses questions — il a besoin de moi.", score: 0},
          {text: "Je lui dis de débrouiller davantage.", score: 1},
          {text: "Je cherche à comprendre ce qui l'empêche d'avancer seul et je travaille avec lui sur ce point précis.", score: 2}
          ]
        },
        {
          text: "Un collaborateur réalise une tâche différemment de ce que vous auriez fait. Le résultat est correct. Que faites-vous ?",
          answers: [
          {text: "Je lui explique comment je l'aurais fait.", score: 0},
          {text: "J'accepte le résultat sans rien dire.", score: 1},
          {text: "Je valorise le résultat et, si sa méthode a des avantages, je l'encourage à la partager.", score: 2}
          ]
        },
        {
          text: "Vous êtes sur le point de corriger une erreur d'un collaborateur sans lui en parler. Que faites-vous ?",
          answers: [
          {text: "Je corrige discrètement — c'est plus rapide.", score: 0},
          {text: "Je lui signale l'erreur et je la corrige moi-même.", score: 1},
          {text: "Je lui signale l'erreur et lui laisse l'opportunité de la corriger lui-même.", score: 2}
          ]
        },
        {
          text: "Un collaborateur ne semble pas confiant pour prendre une décision qui est clairement dans son périmètre. Que faites-vous ?",
          answers: [
          {text: "Je prends la décision à sa place.", score: 0},
          {text: "Je lui dis qu'il peut décider.", score: 1},
          {text: "Je l'aide à structurer sa réflexion pour qu'il arrive à la décision par lui-même.", score: 2}
          ]
        },
        {
          text: "Vous constatez que vos collaborateurs ne viennent jamais avec des propositions — uniquement des problèmes. Que faites-vous ?",
          answers: [
          {text: "C'est normal — les propositions sont mon rôle.", score: 0},
          {text: "J'attends qu'ils évoluent.", score: 1},
          {text: "Je crée activement un environnement où les propositions sont valorisées et attendues.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un collaborateur prend une décision dans son périmètre qui aurait pu être meilleure. Il n'a pas fait d'erreur grave. Que faites-vous ?",
          answers: [
          {text: "Je lui explique ce qu'il aurait dû faire.", score: 0},
          {text: "Je ne dis rien — l'essentiel est que ça marche.", score: 1},
          {text: "J'utilise cela comme une occasion d'apprentissage, sans dévaloriser sa décision.", score: 2}
          ]
        },
        {
          text: "Vous avez délégué une mission mais vous êtes tenté de vérifier régulièrement comment ça avance. Que faites-vous ?",
          answers: [
          {text: "Je vérifie régulièrement — c'est ma responsabilité.", score: 0},
          {text: "Je me contiens et attends la livraison.", score: 1},
          {text: "Je pose un cadre de suivi clair en accord avec lui — ni surveillance ni abandon.", score: 2}
          ]
        },
        {
          text: "Un collaborateur ne semble pas développer son autonomie malgré vos efforts. Que faites-vous ?",
          answers: [
          {text: "Je lui donne plus d'instructions.", score: 0},
          {text: "J'accepte qu'il ait besoin d'un fort encadrement.", score: 1},
          {text: "Je cherche si quelque chose dans mon management freine son autonomie, et j'ajuste.", score: 2}
          ]
        },
        {
          text: "Un collaborateur a fait une erreur dans une mission déléguée. Que faites-vous ?",
          answers: [
          {text: "Je reprends le contrôle de la mission.", score: 0},
          {text: "Je lui explique son erreur et le laisse continuer.", score: 1},
          {text: "Je travaille avec lui pour comprendre l'erreur, définir comment y remédier, et maintenir la délégation.", score: 2}
          ]
        },
        {
          text: "La délégation à un collaborateur crée de l'inquiétude chez les autres membres de l'équipe qui ne la comprennent pas. Que faites-vous ?",
          answers: [
          {text: "Je leur explique ma décision de déléguer.", score: 0},
          {text: "Je laisse les choses se clarifier d'elles-mêmes.", score: 1},
          {text: "Je clarifie les critères qui guident mes décisions de délégation pour que tout le monde comprenne.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un collaborateur prend une initiative réussie sans vous le dire au préalable. Que faites-vous ?",
          answers: [
          {text: "Je lui rappelle qu'il aurait dû me consulter.", score: 0},
          {text: "Je valorise l'initiative.", score: 1},
          {text: "Je valorise l'initiative et clarifie ensemble dans quels cas il peut agir de façon autonome.", score: 2}
          ]
        },
        {
          text: "Deux collaborateurs ont réalisé un très bon travail collectif. Comment le valorisez-vous ?",
          answers: [
          {text: "Je les remercie discrètement.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je le rends visible collectivement et avec la hiérarchie si pertinent.", score: 2}
          ]
        },
        {
          text: "Un collaborateur est régulièrement en retrait lors des discussions d'équipe mais produit un excellent travail individuel. Que faites-vous ?",
          answers: [
          {text: "Je le laisse travailler comme il l'entend.", score: 0},
          {text: "Je l'encourage à s'exprimer davantage.", score: 1},
          {text: "Je cherche à comprendre comment valoriser sa contribution sans lui imposer un mode d'interaction qui ne lui correspond pas.", score: 2}
          ]
        },
        {
          text: "Votre équipe a produit un livrable collectif important. Votre hiérarchie ne reconnaît que votre rôle. Que faites-vous ?",
          answers: [
          {text: "J'accepte la reconnaissance — c'est ma mission.", score: 0},
          {text: "Je dis à ma hiérarchie que l'équipe a contribué.", score: 1},
          {text: "Je rends explicitement la contribution de l'équipe visible à ma hiérarchie.", score: 2}
          ]
        },
        {
          text: "Un collaborateur fait des progrès importants mais il ne le voit pas. Que faites-vous ?",
          answers: [
          {text: "Je suppose qu'il finira par s'en rendre compte.", score: 0},
          {text: "Je lui dis qu'il s'améliore.", score: 1},
          {text: "Je lui montre concrètement en quoi ses résultats actuels diffèrent de ceux d'avant.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous avez peur que déléguer une décision clé à un collaborateur crée une erreur difficile à corriger. Que faites-vous ?",
          answers: [
          {text: "Je garde la décision pour moi.", score: 0},
          {text: "Je lui délègue mais je vérifie avant l'exécution.", score: 1},
          {text: "J'évalue le risque réel et, s'il est acceptable, je lui délègue en créant un espace de sécurité pour l'erreur.", score: 2}
          ]
        },
        {
          text: "Un collaborateur fait une erreur dans une tâche déléguée. Cela a des conséquences visibles. Que faites-vous ?",
          answers: [
          {text: "Je reprends la responsabilité pour que ça soit corrigé rapidement.", score: 0},
          {text: "Je l'aide à corriger l'erreur.", score: 1},
          {text: "Je l'aide à corriger, j'analyse avec lui ce qui s'est passé et je maintiens la délégation en tirant les leçons.", score: 2}
          ]
        },
        {
          text: "Un collaborateur prend un risque calculé dans son périmètre qui ne paie pas. Que faites-vous ?",
          answers: [
          {text: "Je lui montre que prendre des risques n'était pas approprié.", score: 0},
          {text: "Je l'encourage malgré l'échec.", score: 1},
          {text: "J'analyse avec lui la qualité du raisonnement qui a conduit à la décision, pas seulement le résultat.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous avez repris une mission déléguée parce que vous la feriez mieux. Que faites-vous ?",
          answers: [
          {text: "Je la garde — c'est plus efficace.", score: 0},
          {text: "Je la lui redonne en lui expliquant comment faire.", score: 1},
          {text: "Je reconnais ce que ça dit de ma difficulté à lâcher et cherche à redonner réellement la mission.", score: 2}
          ]
        },
        {
          text: "Votre équipe est davantage autonome qu'avant. Votre rôle évolue. Que faites-vous ?",
          answers: [
          {text: "Je cherche à maintenir mon niveau d'implication habituel.", score: 0},
          {text: "J'accepte d'être moins dans le détail.", score: 1},
          {text: "Je réfléchis à comment mon rôle doit évoluer pour continuer à apporter de la valeur.", score: 2}
          ]
        }
    ],
  },

  "collaboration-interequipes": {
    0: [
        {
          text: "Vous avez besoin d'un livrable d'une autre équipe pour avancer. Elle est sous pression. Que faites-vous ?",
          answers: [
          {text: "Je relance régulièrement jusqu'à obtenir ce que je veux.", score: 0},
          {text: "J'attends que leur charge baisse.", score: 1},
          {text: "Je comprends leurs contraintes et cherche avec eux comment débloquer la situation de façon réaliste.", score: 2}
          ]
        },
        {
          text: "Une équipe partenaire ne respecte pas un engagement pris en réunion. Que faites-vous ?",
          answers: [
          {text: "Je le signale à ma hiérarchie.", score: 0},
          {text: "Je la relance directement.", score: 1},
          {text: "Je cherche d'abord à comprendre ce qui a empêché l'engagement d'être tenu avant d'agir.", score: 2}
          ]
        },
        {
          text: "Votre travail dépend d'une information que l'autre équipe ne transmet pas de façon fiable. Que faites-vous ?",
          answers: [
          {text: "Je travaille avec les informations disponibles.", score: 0},
          {text: "Je remonte le problème à mon responsable.", score: 1},
          {text: "Je propose à l'autre équipe de construire un mode de transmission plus fiable.", score: 2}
          ]
        },
        {
          text: "Vous constatez que vos attentes sur un livrable interéquipes étaient mal exprimées. L'autre équipe a livré autre chose. Que faites-vous ?",
          answers: [
          {text: "Je leur dis que leur livrable n'est pas ce que j'attendais.", score: 0},
          {text: "J'accepte leur livrable et m'adapte.", score: 1},
          {text: "Je reconnais ma part dans le malentendu et clarifie ensemble les attentes pour la suite.", score: 2}
          ]
        },
        {
          text: "Une autre équipe prend des décisions qui impactent votre travail sans vous consulter. Que faites-vous ?",
          answers: [
          {text: "Je les informe de l'impact après coup.", score: 0},
          {text: "Je remonte à ma hiérarchie.", score: 1},
          {text: "Je propose de créer un moment de coordination pour que ces décisions soient prises ensemble.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Deux équipes ont des objectifs qui entrent en conflit sur un sujet commun. Que faites-vous ?",
          answers: [
          {text: "Je défends les objectifs de mon équipe.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je propose un échange avec l'autre équipe pour identifier les zones de conflit et trouver un terrain commun.", score: 2}
          ]
        },
        {
          text: "Une autre équipe fait les choses différemment de vous sur un sujet partagé. Ce n'est pas faux, mais c'est différent. Que faites-vous ?",
          answers: [
          {text: "Je leur explique que notre méthode est meilleure.", score: 0},
          {text: "Je continue de mon côté sans intervenir.", score: 1},
          {text: "J'ouvre une discussion pour comprendre leurs raisons et voir si une harmonisation serait bénéfique.", score: 2}
          ]
        },
        {
          text: "Votre équipe a besoin de ressources d'une autre équipe. L'autre équipe n'est pas moteur. Que faites-vous ?",
          answers: [
          {text: "Je continue à demander jusqu'à obtenir.", score: 0},
          {text: "J'escalade si je n'obtiens rien.", score: 1},
          {text: "Je cherche à comprendre leurs contraintes et propose une formulation de la demande qui leur soit plus facile à traiter.", score: 2}
          ]
        },
        {
          text: "Un projet impliquant plusieurs équipes donne des résultats inégaux selon les zones. Que faites-vous ?",
          answers: [
          {text: "Je me concentre sur ma zone.", score: 0},
          {text: "Je partage mes bonnes pratiques.", score: 1},
          {text: "Je propose un échange entre équipes pour partager les apprentissages et ajuster collectivement.", score: 2}
          ]
        },
        {
          text: "Votre équipe a de meilleurs résultats qu'une équipe partenaire. Elle s'en attribue tout le crédit. Que faites-vous ?",
          answers: [
          {text: "Je laisse faire — les résultats parlent d'eux-mêmes.", score: 0},
          {text: "Je corrige en privé la perception.", score: 1},
          {text: "Je cherche à rendre visible la contribution collective pour que la comparaison soit juste.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Votre équipe a tendance à voir les autres équipes comme des obstacles plutôt que des partenaires. Que faites-vous ?",
          answers: [
          {text: "Je gère les effets de cette perception au cas par cas.", score: 0},
          {text: "J'encourage mon équipe à être plus collaborative.", score: 1},
          {text: "Je travaille à changer la représentation en cherchant des occasions de collaboration positive.", score: 2}
          ]
        },
        {
          text: "Vous constatez que votre équipe partage peu d'information avec les autres équipes. Que faites-vous ?",
          answers: [
          {text: "Si les autres ont besoin d'information, ils n'ont qu'à demander.", score: 0},
          {text: "J'encourage à partager quand c'est pertinent.", score: 1},
          {text: "Je cherche à comprendre pourquoi cette rétention existe et à créer des pratiques de partage systématiques.", score: 2}
          ]
        },
        {
          text: "Votre équipe est sollicitée par de nombreuses autres équipes et commence à se sentir débordée. Que faites-vous ?",
          answers: [
          {text: "Je gère les sollicitations au fil de l'eau.", score: 0},
          {text: "Je priorise les demandes les plus urgentes.", score: 1},
          {text: "Je clarifie avec ma hiérarchie les priorités d'interaction et j'organise la gestion des sollicitations.", score: 2}
          ]
        },
        {
          text: "Après un échange interéquipes difficile, des non-dits persistent. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — les tensions se résolvent avec le temps.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je propose un moment de clarification avec les bonnes personnes pour dépasser les non-dits.", score: 2}
          ]
        },
        {
          text: "Deux équipes travaillent en parallèle sur des solutions similaires sans se coordonner. Que faites-vous ?",
          answers: [
          {text: "Je les laisse avancer — la concurrence interne est stimulante.", score: 0},
          {text: "J'en informe ma hiérarchie.", score: 1},
          {text: "Je propose une mise en commun pour éviter les doublons et bénéficier des travaux de chacun.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre équipe défend ses méthodes même quand celles d'autres équipes semblent plus efficaces. Que faites-vous ?",
          answers: [
          {text: "Je laisse chaque équipe travailler à sa façon.", score: 0},
          {text: "J'encourage à s'intéresser aux pratiques des autres.", score: 1},
          {text: "Je crée des occasions d'apprentissage mutuel entre équipes.", score: 2}
          ]
        },
        {
          text: "Un processus partagé entre équipes est inefficace mais chacune attend que l'autre le change. Que faites-vous ?",
          answers: [
          {text: "J'attends que quelqu'un prenne l'initiative.", score: 0},
          {text: "Je prends l'initiative de proposer une réforme.", score: 1},
          {text: "Je fédère les équipes concernées pour construire une solution ensemble.", score: 2}
          ]
        },
        {
          text: "Une équipe partenaire a des pratiques que votre équipe juge inutilement complexes. Que faites-vous ?",
          answers: [
          {text: "Je les laisse — ce sont leurs pratiques.", score: 0},
          {text: "J'exprime mon point de vue informellement.", score: 1},
          {text: "Je propose un échange factuel pour comprendre leurs contraintes et voir si une simplification est possible.", score: 2}
          ]
        },
        {
          text: "Votre organisation a tendance à récompenser les performances individuelles des équipes plutôt que la collaboration. Que faites-vous ?",
          answers: [
          {text: "Je joue le jeu — c'est le système.", score: 0},
          {text: "Je cherche à collaborer malgré le système.", score: 1},
          {text: "Je contribue à rendre visibles les bénéfices de la collaboration pour influencer les pratiques d'évaluation.", score: 2}
          ]
        },
        {
          text: "Après avoir travaillé sur un projet interéquipes, votre équipe n'a pas tiré les apprentissages de cette collaboration. Que faites-vous ?",
          answers: [
          {text: "Je passe au suivant — le temps manque.", score: 0},
          {text: "Je note les apprentissages pour moi.", score: 1},
          {text: "Je prends l'initiative d'un temps de bilan collectif même court.", score: 2}
          ]
        }
    ],
  },

  "transformation-digitale": {
    0: [
        {
          text: "Un nouvel outil est déployé dans votre organisation. Il est moins intuitif que l'ancien mais plus puissant. Que faites-vous ?",
          answers: [
          {text: "Je continue avec l'ancien le plus longtemps possible.", score: 0},
          {text: "Je bascule sur le nouveau mais sans formation.", score: 1},
          {text: "Je cherche à comprendre ce que le nouvel outil apporte et à me former pour en tirer parti.", score: 2}
          ]
        },
        {
          text: "Un processus numérique remplace un processus manuel que vous maîtrisez bien. Que faites-vous ?",
          answers: [
          {text: "Je maintiens le processus manuel en parallèle par sécurité.", score: 0},
          {text: "Je bascule sur le numérique en faisant attention.", score: 1},
          {text: "Je bascule pleinement sur le numérique et signale les points qui semblent moins bien couverts.", score: 2}
          ]
        },
        {
          text: "Votre organisation déploie un outil dont vous ne voyez pas clairement l'utilité pour votre travail. Que faites-vous ?",
          answers: [
          {text: "Je l'adopte en surface sans vraiment l'utiliser.", score: 0},
          {text: "J'exprime mes doutes à mon responsable.", score: 1},
          {text: "J'essaie de comprendre quel problème il est censé résoudre avant de me forger un avis.", score: 2}
          ]
        },
        {
          text: "Un collègue dit que le nouvel outil va supprimer des tâches qui lui prenaient beaucoup de temps. Vous n'en êtes pas convaincu. Que faites-vous ?",
          answers: [
          {text: "Je continue à faire comme avant.", score: 0},
          {text: "Je teste pour voir.", score: 1},
          {text: "Je teste sérieusement et compare les résultats avant de conclure.", score: 2}
          ]
        },
        {
          text: "Votre hiérarchie vous demande de vous approprier un outil d'IA pour votre travail. Vous ne savez pas par où commencer. Que faites-vous ?",
          answers: [
          {text: "J'attends qu'une formation soit organisée.", score: 0},
          {text: "Je cherche des tutoriels en ligne.", score: 1},
          {text: "Je commence par identifier un cas d'usage concret et j'expérimente dessus.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un collègue a du mal avec un nouvel outil numérique. Il vous demande de l'aide. Vous êtes occupé. Que faites-vous ?",
          answers: [
          {text: "Je lui dis de contacter le support.", score: 0},
          {text: "Je l'aide rapidement entre deux choses.", score: 1},
          {text: "Je l'aide vraiment ou je lui trouve quelqu'un de disponible pour l'accompagner.", score: 2}
          ]
        },
        {
          text: "Vous réalisez qu'un collègue contourne un nouvel outil parce qu'il ne le maîtrise pas. Que faites-vous ?",
          answers: [
          {text: "Je le laisse — c'est son affaire.", score: 0},
          {text: "Je lui signale que le contournement crée des problèmes.", score: 1},
          {text: "Je cherche à comprendre ses difficultés et à l'aider à s'approprier l'outil.", score: 2}
          ]
        },
        {
          text: "Votre équipe est divisée entre ceux qui adoptent le nouvel outil et ceux qui résistent. Que faites-vous ?",
          answers: [
          {text: "Je laisse les choses évoluer naturellement.", score: 0},
          {text: "J'encourage les résistants à faire un effort.", score: 1},
          {text: "Je cherche à comprendre la résistance et à créer les conditions pour que l'adoption soit progressive et réelle.", score: 2}
          ]
        },
        {
          text: "Vous avez aidé un collègue sur un outil numérique mais il revient vers vous à chaque difficulté. Que faites-vous ?",
          answers: [
          {text: "Je continue à l'aider — il en a besoin.", score: 0},
          {text: "Je l'oriente vers le support.", score: 1},
          {text: "Je l'aide à gagner en autonomie plutôt qu'à créer une dépendance.", score: 2}
          ]
        },
        {
          text: "Le support numérique interne est difficile à joindre. Des collègues bloqués sur un outil perdent beaucoup de temps. Que faites-vous ?",
          answers: [
          {text: "Je laisse chacun se débrouiller.", score: 0},
          {text: "Je remonte le problème à mon responsable.", score: 1},
          {text: "Je cherche des solutions à court terme pour débloquer les collègues ET je remonte le problème structurel.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Votre organisation a adopté beaucoup d'outils numériques. Certains se chevauchent. Que faites-vous ?",
          answers: [
          {text: "J'utilise celui que je maîtrise le mieux.", score: 0},
          {text: "Je signale les chevauchements à mon responsable.", score: 1},
          {text: "Je cherche à clarifier les usages respectifs et, si nécessaire, propose une rationalisation.", score: 2}
          ]
        },
        {
          text: "Un outil numérique est censé améliorer la collaboration mais en pratique il crée plus de charge. Que faites-vous ?",
          answers: [
          {text: "Je continue à l'utiliser — c'est la règle.", score: 0},
          {text: "Je limite son usage au strict nécessaire.", score: 1},
          {text: "Je documente concrètement en quoi il crée de la charge et le remonte pour qu'une révision soit envisagée.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que votre équipe utilise un outil d'une façon qui ne correspond pas à son usage prévu. Que faites-vous ?",
          answers: [
          {text: "Je les laisse — si ça leur convient, tant mieux.", score: 0},
          {text: "Je les recadre vers l'usage prévu.", score: 1},
          {text: "Je cherche à comprendre pourquoi cet usage s'est développé et si l'usage prévu est réellement adapté.", score: 2}
          ]
        },
        {
          text: "Un nouvel outil génère des données que vous ne savez pas vraiment comment interpréter. Que faites-vous ?",
          answers: [
          {text: "Je regarde les données mais ne les utilise pas vraiment.", score: 0},
          {text: "Je cherche de la documentation.", score: 1},
          {text: "Je prends le temps de vraiment comprendre ce que ces données m'apportent et comment les intégrer à mon travail.", score: 2}
          ]
        },
        {
          text: "Votre organisation demande une adoption rapide d'un outil mais les formation prévues ne sont pas suffisantes. Que faites-vous ?",
          answers: [
          {text: "Je fais avec la formation disponible.", score: 0},
          {text: "J'exprime que la formation est insuffisante.", score: 1},
          {text: "Je remonte le gap entre les attentes et les ressources de formation de façon concrète.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "L'ancien et le nouveau système coexistent depuis trop longtemps. Des incohérences s'accumulent. Que faites-vous ?",
          answers: [
          {text: "Je vis avec — c'est une transition normale.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je documente les incohérences et propose un calendrier de bascule définitif.", score: 2}
          ]
        },
        {
          text: "Lors du basculement vers un nouvel outil, des données importantes de l'ancien système ont été perdues. Que faites-vous ?",
          answers: [
          {text: "Je reconstruis ce que je peux de mémoire.", score: 0},
          {text: "Je signale la perte à mon responsable.", score: 1},
          {text: "Je signale avec des éléments précis sur ce qui a été perdu et l'impact pour que la situation soit évaluée et traitée.", score: 2}
          ]
        },
        {
          text: "Vous constatez que votre organisation continue à investir dans un outil que très peu utilisent vraiment. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon problème.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je construis une analyse de l'utilisation réelle et la partage pour éclairer une décision.", score: 2}
          ]
        },
        {
          text: "Après l'adoption d'un outil, les pratiques manuelles parallèles persistent malgré la demande de basculement. Que faites-vous ?",
          answers: [
          {text: "Je les tolère — le temps que les gens s'adaptent.", score: 0},
          {text: "Je rappelle que le basculement est demandé.", score: 1},
          {text: "Je cherche pourquoi les pratiques parallèles persistent et traite les causes.", score: 2}
          ]
        },
        {
          text: "Un changement d'outil a créé une rupture dans les habitudes de travail. L'équipe est déstabilisée. Que faites-vous ?",
          answers: [
          {text: "Je leur dis de s'adapter — c'est inévitable.", score: 0},
          {text: "Je cherche à soutenir les personnes les plus en difficulté.", score: 1},
          {text: "Je crée les conditions pour que la transition soit progressive, accompagnée et que les apprentissages soient capitalisés.", score: 2}
          ]
        }
    ],
  },

  "arbitrage-priorisation": {
    0: [
        {
          text: "Tout est urgent dans votre liste. Vous devez avancer sur quelque chose. Par quoi commencez-vous ?",
          answers: [
          {text: "Par ce qui vient d'arriver — la dernière urgence prime.", score: 0},
          {text: "Par ce qui prend le moins de temps pour avancer vite.", score: 1},
          {text: "Par ce qui a l'impact le plus important si ça n'est pas traité.", score: 2}
          ]
        },
        {
          text: "Vous avez trois demandes urgentes simultanées. Vous ne pouvez pas tout faire en même temps. Que faites-vous ?",
          answers: [
          {text: "Je traite dans l'ordre d'arrivée.", score: 0},
          {text: "Je fais ce que je peux sur les trois en parallèle.", score: 1},
          {text: "Je contacte les trois demandeurs pour évaluer les vraies contraintes et décide en connaissance de cause.", score: 2}
          ]
        },
        {
          text: "Votre responsable vous ajoute une nouvelle priorité sans retirer les anciennes. Que faites-vous ?",
          answers: [
          {text: "J'absorbe — c'est mon rôle d'être flexible.", score: 0},
          {text: "Je lui dis que c'est beaucoup sans demander d'arbitrage.", score: 1},
          {text: "Je lui expose l'état de mes priorités et lui demande de m'aider à arbitrer.", score: 2}
          ]
        },
        {
          text: "Vous êtes sollicité pour plusieurs réunions en même temps. Vous ne pouvez aller qu'à une. Comment décidez-vous ?",
          answers: [
          {text: "Je vais à celle organisée par la personne la plus importante hiérarchiquement.", score: 0},
          {text: "Je vais à celle dont les sujets m'intéressent le plus.", score: 1},
          {text: "J'évalue laquelle a le plus besoin de ma présence et je décline les autres en proposant une alternative.", score: 2}
          ]
        },
        {
          text: "Une demande urgente d'un client interne tombe alors que vous êtes sur un livrable critique pour un client externe. Que faites-vous ?",
          answers: [
          {text: "Je gère le client interne d'abord — il est là.", score: 0},
          {text: "Je gère le client externe d'abord sans prévenir l'interne.", score: 1},
          {text: "J'informe les deux de la contrainte et je cherche un arbitrage avec mon responsable si nécessaire.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous avez deux projets stratégiques et les ressources pour un seul. Personne n'a encore décidé. Que faites-vous ?",
          answers: [
          {text: "J'avance sur les deux en mode minimal.", score: 0},
          {text: "J'attends que la décision tombe.", score: 1},
          {text: "Je formule l'arbitrage clairement — options, conséquences — et je le soumets à qui doit décider.", score: 2}
          ]
        },
        {
          text: "Vous êtes responsable d'un livrable mais vous recevez des demandes contradictoires de deux décideurs différents. Que faites-vous ?",
          answers: [
          {text: "Je suis les instructions du plus haut placé.", score: 0},
          {text: "Je cherche un compromis.", score: 1},
          {text: "Je mets les deux en relation pour qu'ils s'alignent et je ne livre qu'avec une position claire.", score: 2}
          ]
        },
        {
          text: "Une urgence vous est transmise par un collègue mais ce n'est pas clairement une urgence de votre point de vue. Que faites-vous ?",
          answers: [
          {text: "Je la traite par solidarité.", score: 0},
          {text: "Je lui demande pourquoi c'est urgent.", score: 1},
          {text: "Je prends le temps de valider si c'est réellement urgent pour mon propre agenda avant de traiter.", score: 2}
          ]
        },
        {
          text: "Votre to-do list accumule depuis des semaines des tâches non traitées. Que faites-vous ?",
          answers: [
          {text: "Je les garde — je les traiterai quand j'aurai le temps.", score: 0},
          {text: "Je cherche à en déléguer une partie.", score: 1},
          {text: "Je fais un tri radical : lesquelles sont encore pertinentes, lesquelles peuvent être abandonnées.", score: 2}
          ]
        },
        {
          text: "Deux demandes légitimes s'opposent : l'une vient de votre responsable, l'autre d'un client interne clé. Que faites-vous ?",
          answers: [
          {text: "Je suis mon responsable — c'est ma hiérarchie.", score: 0},
          {text: "Je gère les deux.", score: 1},
          {text: "Je signale le conflit à mon responsable et demande qu'il tranche.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous avez pris une décision d'arbitrage qui mécontente une partie de vos interlocuteurs. Que faites-vous ?",
          answers: [
          {text: "Je leur dis que c'était inévitable.", score: 0},
          {text: "Je leur explique brièvement ma décision.", score: 1},
          {text: "Je leur explique les critères qui ont guidé ma décision et l'impact que je cherchais à maximiser.", score: 2}
          ]
        },
        {
          text: "Votre arbitrage a créé une perception d'injustice dans votre équipe. Que faites-vous ?",
          answers: [
          {text: "Je leur rappelle que c'est mon rôle de décider.", score: 0},
          {text: "Je réévalue si j'ai mal décidé.", score: 1},
          {text: "Je crée un espace pour comprendre ce qui a créé la perception d'injustice et j'explique mes critères.", score: 2}
          ]
        },
        {
          text: "Votre arbitrage s'avère en partie erroné après coup. Que faites-vous ?",
          answers: [
          {text: "Je l'accepte — on fait des erreurs.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je reviens sur l'arbitrage, explique ce qui a changé dans mon analyse et propose un ajustement.", score: 2}
          ]
        },
        {
          text: "Une décision d'arbitrage a été remise en question par quelqu'un de haut placé. Vous êtes convaincu qu'elle est juste. Que faites-vous ?",
          answers: [
          {text: "Je reviens sur ma décision — il a plus d'autorité.", score: 0},
          {text: "Je maintiens ma position sans m'expliquer.", score: 1},
          {text: "Je défends ma décision avec des arguments factuels tout en restant ouvert à apprendre des éléments nouveaux.", score: 2}
          ]
        },
        {
          text: "Vous avez communiqué un arbitrage mais des interlocuteurs n'en sont toujours pas informés deux jours après. Que faites-vous ?",
          answers: [
          {text: "Ils finiront par l'apprendre.", score: 0},
          {text: "Je leur renvoie la communication.", score: 1},
          {text: "Je m'assure activement que tous les interlocuteurs concernés ont bien compris l'arbitrage et ses implications.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Le planning d'un projet doit être revu. Des arbitrages de délai sont nécessaires. Comment le gérez-vous ?",
          answers: [
          {text: "Je décide seul quelle date peut être repoussée.", score: 0},
          {text: "Je consulte les parties prenantes et je tranche.", score: 1},
          {text: "Je construis le scénario d'ajustement avec les parties prenantes en explicitant les choix faits.", score: 2}
          ]
        },
        {
          text: "Les priorités ont changé en cours de route. Certains engagements ne peuvent plus être tenus. Que faites-vous ?",
          answers: [
          {text: "J'essaie de tenir tous les engagements malgré tout.", score: 0},
          {text: "J'informe que certains engagements seront en retard.", score: 1},
          {text: "Je reviens vers les parties prenantes proactivement pour redéfinir les engagements de façon réaliste.", score: 2}
          ]
        },
        {
          text: "Une nouvelle priorité forte émergente va perturber un projet avancé. Que faites-vous ?",
          answers: [
          {text: "Je stoppe le projet en cours sans en parler.", score: 0},
          {text: "Je signale le problème à mon responsable.", score: 1},
          {text: "J'évalue l'impact, je le formalise et je propose plusieurs scénarios à mon responsable pour qu'il décide.", score: 2}
          ]
        },
        {
          text: "Votre équipe perd confiance parce que les priorités changent trop souvent. Que faites-vous ?",
          answers: [
          {text: "Je leur explique que c'est inévitable dans ce contexte.", score: 0},
          {text: "Je cherche à stabiliser les priorités à mon niveau.", score: 1},
          {text: "Je nomme la difficulté à mon équipe, je cherche à stabiliser ce que je peux et je remonte le coût humain des changements fréquents.", score: 2}
          ]
        },
        {
          text: "Vous avez dû renoncer à un projet important faute de ressources. L'équipe est déçue. Que faites-vous ?",
          answers: [
          {text: "Je leur explique que c'était inévitable.", score: 0},
          {text: "Je leur promets que le projet sera repris.", score: 1},
          {text: "Je leur explique honnêtement les contraintes qui ont conduit à cette décision et ce que j'ai fait pour explorer les alternatives.", score: 2}
          ]
        }
    ],
  },

  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("management", "Transformation & management", "🔄", [
    ["changement-reflexes",        "Changer sans se crisper",                         "Tous publics",          "Comprendre ses réflexes face aux changements de méthode, d'outil ou d'organisation.",                                                                           T.management],
    ["feedback-managerial",        "Donner et recevoir du feedback utile",            "Managers",              "Installer des échanges réguliers, factuels et mobilisables sans créer de posture défensive.",                                                                  T.mgmtFeedback],
    ["manager-engageant-tbf",      "Êtes-vous un manager engageant ?",                "Managers",              "Questionner sa posture d'engagement, de responsabilisation et de soutien au collectif.",                                                                       T.mgmtManagerEngageant, BADGES.TBF],
    ["pilotage-projet",            "Contribuer efficacement à un projet",             "Collaborateurs",        "Clarifier les rôles, gérer les imprévus et coopérer dans un cadre mouvant.",                                                                                  T.mgmtProjet],
    ["conduite-changement",        "Accompagner son équipe dans la transformation",   "Managers",              "Comprendre les résistances, relayer les décisions et ancrer les nouvelles pratiques dans la durée.",                                                           T.mgmtChangement],
    ["responsabilisation-equipe",  "Responsabiliser sans contrôler",                 "Managers",              "Déléguer avec confiance, développer l'autonomie de décision et valoriser l'initiative sans créer de dépendance.",                                              T.mgmtResponsabilisation],
    ["collaboration-interequipes", "Coopérer avec les autres équipes",               "Tous publics",          "Identifier les frictions interéquipes, gérer les dépendances et dépasser les logiques de silos.",                                                              T.mgmtCollaboration],
    ["transformation-digitale",    "S'adapter aux nouveaux outils et méthodes",      "Tous publics",          "Trouver sa posture face aux transformations numériques, accompagner les moins à l'aise et questionner les usages.",                                            T.mgmtDigital],
    ["arbitrage-priorisation",     "Prioriser et arbitrer quand tout est urgent",     "Managers / Encadrants", "Hiérarchiser les demandes, gérer les injonctions contradictoires et tenir ses arbitrages dans la durée.",                                                     T.mgmtArbitrage]
  ]);

})();
