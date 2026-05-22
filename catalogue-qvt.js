/**
 * catalogue-qvt.js — INTO THE SHIFT
 * Domaine : QVT & RPS (8 ADs)
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  // ─────────────────────────────────────────────────────────────────────────
  //  QUESTIONS RÉDIGÉES — QVT & RPS
  // ─────────────────────────────────────────────────────────────────────────

  Object.assign(window.CUSTOM_QUESTIONS, {
  "rps-signaux-faibles": {
    0: [
        {
          text: "Vous êtes habituellement quelqu'un d'impliqué. Depuis quelques semaines, vous avez du mal à vous concentrer et les tâches simples vous prennent deux fois plus de temps. Que faites-vous ?",
          answers: [
          {text: "Je pousse encore un peu — c'est probablement temporaire.", score: 0},
          {text: "J'en parle à un proche mais pas dans le contexte professionnel.", score: 1},
          {text: "Je prends cela comme un signal sérieux et cherche à en comprendre la cause.", score: 2}
          ]
        },
        {
          text: "Vous observez qu'un collègue habituellement positif fait des remarques de plus en plus acerbes en réunion depuis plusieurs semaines. Que faites-vous ?",
          answers: [
          {text: "Je lui dis de se calmer.", score: 0},
          {text: "Je note le changement mais n'interviens pas.", score: 1},
          {text: "Je prends un moment pour lui demander comment il va, en dehors des réunions.", score: 2}
          ]
        },
        {
          text: "Vous sentez une tension latente dans votre équipe depuis quelques semaines. Les échanges sont cordiaux en surface mais les non-dits s'accumulent. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça se désamorce seul.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je cherche à créer un espace où les vrais sujets peuvent être mis sur la table.", score: 2}
          ]
        },
        {
          text: "Un collègue que vous voyez tous les jours s'est isolé progressivement. Il mange seul et répond de façon courte. Que faites-vous ?",
          answers: [
          {text: "Je respecte son besoin d'espace.", score: 0},
          {text: "Je lui demande rapidement si tout va bien.", score: 1},
          {text: "Je crée une occasion d'échange non forcée et reste disponible sur la durée.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à récupérer le week-end. Le dimanche soir, vous êtes déjà épuisé à l'idée du lundi. Que faites-vous ?",
          answers: [
          {text: "C'est la période — ça va passer.", score: 0},
          {text: "Je cherche à mieux gérer mon temps le week-end.", score: 1},
          {text: "Je prends cela comme un signal de surcharge durable et cherche à en parler.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vos priorités changent deux fois par semaine et vous ne savez plus quoi traiter en premier. Que faites-vous ?",
          answers: [
          {text: "Je jongle avec tout et m'adapte.", score: 0},
          {text: "Je reviens vers mon responsable pour qu'il tranche.", score: 1},
          {text: "Je clarifie avec mon responsable les critères de priorisation pour les semaines à venir.", score: 2}
          ]
        },
        {
          text: "Vous avez dit oui à trop de demandes cette semaine. Vous êtes saturé. Que faites-vous ?",
          answers: [
          {text: "Je travaille plus longtemps pour tout tenir.", score: 0},
          {text: "Je préviens les personnes concernées que j'aurai du retard.", score: 1},
          {text: "Je priorise avec mon responsable et reviens vers les demandeurs pour redéfinir les délais.", score: 2}
          ]
        },
        {
          text: "Une urgence imprévue tombe alors que vous avez déjà une journée chargée. Votre manager vous demande d'absorber. Que faites-vous ?",
          answers: [
          {text: "J'absorbe — c'est mon rôle d'être flexible.", score: 0},
          {text: "Je demande ce qui peut être décalé pour intégrer l'urgence.", score: 1},
          {text: "Je lui expose l'impact sur les autres engagements et demande qu'un arbitrage soit fait.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous avez beaucoup de tâches qui durent depuis longtemps sans avancer vraiment, faute de temps pour les traiter. Que faites-vous ?",
          answers: [
          {text: "Je les garde dans ma liste en espérant trouver du temps.", score: 0},
          {text: "Je les délègue à quelqu'un de disponible.", score: 1},
          {text: "Je les remets sur la table avec mon responsable pour décider lesquelles sont encore pertinentes.", score: 2}
          ]
        },
        {
          text: "Votre charge de travail a augmenté progressivement sans que les ressources évoluent. Vous tenez mais à la limite. Que faites-vous ?",
          answers: [
          {text: "Je continue — si ça tenait jusqu'ici, ça peut durer.", score: 0},
          {text: "J'en parle à mon responsable en passant.", score: 1},
          {text: "Je formalise la situation et demande un échange dédié pour trouver une solution durable.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Deux collègues ont une tension ouverte depuis une semaine et ça affecte le travail de toute l'équipe. Que faites-vous ?",
          answers: [
          {text: "Je les laisse gérer entre eux.", score: 0},
          {text: "Je parle à l'un des deux pour l'aider.", score: 1},
          {text: "Je leur propose un espace de discussion factuel sur les points qui bloquent leur coopération.", score: 2}
          ]
        },
        {
          text: "Lors d'une réunion, un collègue vous coupe la parole systématiquement. Ça arrive régulièrement. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte et attends qu'il ait fini.", score: 0},
          {text: "Je lui en parle discrètement après la réunion.", score: 1},
          {text: "Je lui en parle directement avec des faits précis et en cherchant à comprendre sa perspective.", score: 2}
          ]
        },
        {
          text: "Une décision vient d'être prise sans que votre équipe soit consultée. Les réactions sont vives. Que faites-vous ?",
          answers: [
          {text: "J'attends que l'agitation se calme.", score: 0},
          {text: "J'exprime ma frustration à mes collègues.", score: 1},
          {text: "Je cherche à comprendre le contexte de la décision et crée un espace pour que l'équipe puisse s'exprimer de façon constructive.", score: 2}
          ]
        },
        {
          text: "Votre équipe traverse une période difficile et le climat est tendu. Vous avez vous-même du mal à rester positif. Que faites-vous ?",
          answers: [
          {text: "Je mets de côté mes propres émotions pour être disponible pour les autres.", score: 0},
          {text: "Je me concentre sur ce que je peux contrôler directement.", score: 1},
          {text: "Je cherche à la fois un appui pour moi et des façons de soutenir le collectif sans porter seul le poids de l'ambiance.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'une personne de l'équipe est souvent la cible de remarques ironiques lors des réunions. Personne ne réagit. Que faites-vous ?",
          answers: [
          {text: "Je n'interviens pas — c'est entre eux.", score: 0},
          {text: "Je lui exprime mon soutien en privé.", score: 1},
          {text: "Je nomme les comportements que j'observe et recadre dans le moment si c'est possible.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous traversez une période difficile et avez besoin d'aide mais vous ne savez pas à qui vous adresser. Que faites-vous ?",
          answers: [
          {text: "Je gère seul — ce sont des affaires personnelles.", score: 0},
          {text: "Je cherche quelqu'un de confiance dans mon entourage proche.", score: 1},
          {text: "Je me renseigne sur les dispositifs d'écoute disponibles dans mon organisation.", score: 2}
          ]
        },
        {
          text: "Un collègue vous confie qu'il pense à démissionner à cause du stress. Vous le trouvez vraiment épuisé. Que faites-vous ?",
          answers: [
          {text: "Je l'écoute et lui dis que ça va passer.", score: 0},
          {text: "Je lui conseille de prendre des congés.", score: 1},
          {text: "Je l'écoute vraiment et l'oriente vers les ressources adaptées tout en lui laissant la décision.", score: 2}
          ]
        },
        {
          text: "Votre responsable est disponible mais vous avez peur que signaler votre charge soit perçu comme un manque de compétence. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien pour éviter d'être jugé.", score: 0},
          {text: "Je laisse entendre que c'est chargé sans formaliser.", score: 1},
          {text: "Je me prépare à formuler clairement la situation en termes factuels et je demande un échange dédié.", score: 2}
          ]
        },
        {
          text: "Vous avez alerté votre responsable il y a deux semaines sur une situation difficile. Rien n'a changé. Que faites-vous ?",
          answers: [
          {text: "Je lâche l'affaire — il n'y a rien à faire.", score: 0},
          {text: "J'en reparle informellement.", score: 1},
          {text: "Je relance formellement et clarifie ce dont j'ai besoin.", score: 2}
          ]
        },
        {
          text: "Vous sentez que vous avez besoin de soutien psychologique mais vous ne savez pas si votre organisation le propose. Que faites-vous ?",
          answers: [
          {text: "Je ne cherche pas — c'est une démarche personnelle qui n'a pas à passer par l'entreprise.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je me renseigne auprès des RH sur ce qui existe sans forcément exposer ma situation.", score: 2}
          ]
        }
    ],
  },

  "charge-priorites": {
    0: [
        {
          text: "Votre to-do list est pleine et tout semble urgent. Quelle est votre première réaction ?",
          answers: [
          {text: "Je prends la première tâche et j'avance.", score: 0},
          {text: "Je fais une rapide sélection des tâches les plus importantes.", score: 1},
          {text: "Je prends un moment pour hiérarchiser en distinguant urgent, important et ni l'un ni l'autre.", score: 2}
          ]
        },
        {
          text: "Vous finissez régulièrement votre journée sans avoir traité les tâches que vous aviez prévues le matin. Que faites-vous ?",
          answers: [
          {text: "C'est normal — l'imprévu fait partie du travail.", score: 0},
          {text: "Je reste plus tard pour rattraper le retard.", score: 1},
          {text: "J'analyse ce qui génère cet écart et cherche à mieux protéger du temps pour mes priorités.", score: 2}
          ]
        },
        {
          text: "Vous avez des réunions qui se succèdent sans pause. En fin de journée, vous n'avez rien produit de concret. Que faites-vous ?",
          answers: [
          {text: "Je rattrape le travail le lendemain matin.", score: 0},
          {text: "Je réduis ma participation à certaines réunions.", score: 1},
          {text: "Je remets en question mon planning de réunions et cherche à dégager des plages de travail.", score: 2}
          ]
        },
        {
          text: "Plusieurs personnes vous sollicitent en parallèle pour des urgences différentes. Que faites-vous ?",
          answers: [
          {text: "Je réponds à tout dans l'ordre d'arrivée.", score: 0},
          {text: "Je sélectionne celle qui me semble la plus urgente.", score: 1},
          {text: "Je demande à chacun un délai réel et je priorise en conséquence.", score: 2}
          ]
        },
        {
          text: "Une tâche longue et complexe avance peu car vous êtes constamment interrompu. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — les interruptions font partie du travail.", score: 0},
          {text: "J'essaie de trouver un endroit plus calme pour travailler.", score: 1},
          {text: "Je pose des créneaux bloqués dans mon agenda pour avancer sur la tâche sans interruption.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous avez trois deadlines majeures la même semaine. Vous ne pourrez pas tout tenir. Que faites-vous ?",
          answers: [
          {text: "Je fais de mon mieux sur les trois.", score: 0},
          {text: "J'en choisis une et je demande un délai sur les autres sans expliquer.", score: 1},
          {text: "J'alerte les parties prenantes en amont et propose des solutions concrètes pour chaque deadline.", score: 2}
          ]
        },
        {
          text: "Votre responsable ajoute une nouvelle tâche urgente à votre liste déjà pleine. Que faites-vous ?",
          answers: [
          {text: "J'absorbe — c'est mon rôle.", score: 0},
          {text: "Je lui dis que c'est beaucoup mais je prends la tâche.", score: 1},
          {text: "Je lui expose ma charge actuelle et lui demande d'arbitrer entre les priorités.", score: 2}
          ]
        },
        {
          text: "Votre charge de travail a doublé suite à un départ dans l'équipe. Aucun remplacement n'est prévu à court terme. Que faites-vous ?",
          answers: [
          {text: "Je fais ce que je peux.", score: 0},
          {text: "Je signale à mon responsable que la situation est difficile.", score: 1},
          {text: "Je fais un bilan factuel de ce qui n'est plus tenable et demande un arbitrage sur les activités à prioriser.", score: 2}
          ]
        },
        {
          text: "Un projet important est bloqué en attente d'une décision d'une autre équipe. Vous perdez du temps à attendre. Que faites-vous ?",
          answers: [
          {text: "J'attends — ce n'est pas de mon ressort.", score: 0},
          {text: "Je relance l'autre équipe régulièrement.", score: 1},
          {text: "Je cherche ce que je peux faire avancer en parallèle et je remonte le blocage à mon responsable.", score: 2}
          ]
        },
        {
          text: "En fin de semaine, vous réalisez que vous avez travaillé principalement sur des urgences et rien sur les sujets de fond importants. Que faites-vous ?",
          answers: [
          {text: "C'est normal — les urgences passent toujours avant.", score: 0},
          {text: "Je planifie du temps pour les sujets de fond la semaine suivante.", score: 1},
          {text: "J'analyse si cette situation est récurrente et cherche à construire un rythme qui protège les deux types de travail.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Votre équipe est sous pression et les tensions montent entre membres. Vous observez des conflits sur les priorités. Que faites-vous ?",
          answers: [
          {text: "Je laisse chaque personne gérer ses propres urgences.", score: 0},
          {text: "Je clarifie mes propres priorités sans intervenir sur les autres.", score: 1},
          {text: "Je propose un moment de synchronisation collective pour aligner les priorités de l'équipe.", score: 2}
          ]
        },
        {
          text: "Deux collègues vous sollicitent en même temps pour des demandes légitimes mais incompatibles. Que faites-vous ?",
          answers: [
          {text: "Je réponds au premier qui m'a contacté.", score: 0},
          {text: "Je fais la moitié de chaque.", score: 1},
          {text: "Je les mets en relation pour qu'ils trouvent un accord sur ce qui est prioritaire.", score: 2}
          ]
        },
        {
          text: "La charge de votre équipe empêche toute remontée d'information vers les autres équipes. Des problèmes s'accumulent en silence. Que faites-vous ?",
          answers: [
          {text: "Je gère mon côté — la communication, c'est pour les managers.", score: 0},
          {text: "Je cherche à envoyer des mises à jour sommaires.", score: 1},
          {text: "Je signale à mon responsable que la surcharge génère des risques d'information et de coordination.", score: 2}
          ]
        },
        {
          text: "Un collègue dit qu'il gère bien alors qu'il accumule visiblement du retard et du stress. Que faites-vous ?",
          answers: [
          {text: "Je le crois — c'est à lui de dire si ça ne va pas.", score: 0},
          {text: "Je lui demande si je peux l'aider.", score: 1},
          {text: "Je lui offre un espace pour parler de sa charge de façon factuelle, sans jugement.", score: 2}
          ]
        },
        {
          text: "Votre équipe a des réunions qui pourraient être des emails. Elles mobilisent beaucoup de temps. Que faites-vous ?",
          answers: [
          {text: "Je continue à participer — c'est décidé par la hiérarchie.", score: 0},
          {text: "Je manque certaines réunions si elles ne me concernent pas directement.", score: 1},
          {text: "Je propose une revue du format et de la fréquence pour récupérer du temps de travail.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous êtes régulièrement le dernier à partir et le premier à arriver. Vos collègues font des journées normales. Que faites-vous ?",
          answers: [
          {text: "C'est mon rythme — je suis plus efficace ainsi.", score: 0},
          {text: "Je me demande si je pourrais être plus efficace.", score: 1},
          {text: "Je prends cela comme un signal et cherche à comprendre si ma charge est réellement différente ou si c'est mon organisation qui est à revoir.", score: 2}
          ]
        },
        {
          text: "Votre responsable n'est jamais disponible pour prioriser avec vous. Vous décidez seul en permanence. Que faites-vous ?",
          answers: [
          {text: "Je fais de mon mieux avec les informations disponibles.", score: 0},
          {text: "Je lui envoie des emails pour le tenir informé.", score: 1},
          {text: "Je formalise une demande d'entretien régulier et explique pourquoi c'est important pour la qualité de mon travail.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous n'avez pas pris une vraie pause depuis des semaines. Que faites-vous ?",
          answers: [
          {text: "Je continue — je rattrapais un retard important.", score: 0},
          {text: "Je prends une demi-journée quand je peux.", score: 1},
          {text: "Je pose une vraie période de déconnexion et en informe mon entourage professionnel.", score: 2}
          ]
        },
        {
          text: "Vous avez fait remonter votre surcharge à votre responsable et rien n'a changé deux semaines plus tard. Que faites-vous ?",
          answers: [
          {text: "J'arrête de signaler — ça ne sert à rien.", score: 0},
          {text: "Je relance à nouveau.", score: 1},
          {text: "Je fais une demande formelle d'arbitrage en précisant les conséquences concrètes de la surcharge.", score: 2}
          ]
        },
        {
          text: "Votre charge ne diminue pas et vous commencez à faire des erreurs inhabituelles. Que faites-vous ?",
          answers: [
          {text: "Je fais encore plus attention.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je traite cela comme un signal d'alarme sérieux et prends les mesures nécessaires, même si c'est inconfortable.", score: 2}
          ]
        }
    ],
  },

  "cooperation-climat": {
    0: [
        {
          text: "Vous ressentez une atmosphère moins agréable dans votre équipe depuis une décision récente que certains ont mal vécue. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça passe.", score: 0},
          {text: "J'exprime ma propre opinion sur la décision.", score: 1},
          {text: "Je cherche à créer un espace où les ressentis peuvent être exprimés de façon constructive.", score: 2}
          ]
        },
        {
          text: "Deux collègues ne se parlent plus depuis un désaccord la semaine dernière. L'équipe fait comme si de rien n'était. Que faites-vous ?",
          answers: [
          {text: "Je m'aligne sur la norme collective : on n'en parle pas.", score: 0},
          {text: "Je parle à l'un d'eux discrètement.", score: 1},
          {text: "Je propose à l'équipe un moment pour clarifier la situation.", score: 2}
          ]
        },
        {
          text: "Lors d'une réunion, quelqu'un fait une remarque qui blesse visiblement un collègue mais tout le monde continue comme si rien ne s'était passé. Que faites-vous ?",
          answers: [
          {text: "Je continue aussi — ce n'est pas le moment de créer un incident.", score: 0},
          {text: "Je vérifie que mon collègue va bien après la réunion.", score: 1},
          {text: "Je nomme ce que j'ai observé dans le moment, de façon factuelle et calme.", score: 2}
          ]
        },
        {
          text: "Le ton des échanges dans votre équipe est devenu de plus en plus sec et formel depuis quelques semaines. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte au ton du groupe.", score: 0},
          {text: "Je continue à être chaleureux dans mes propres échanges.", score: 1},
          {text: "Je propose un moment informel pour recréer du lien.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'une personne de votre équipe est régulièrement mise à l'écart des échanges informels. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle de gérer ça.", score: 0},
          {text: "Je l'inclus dans mes propres échanges.", score: 1},
          {text: "J'essaie de comprendre ce qui crée cette mise à l'écart et agis en conséquence.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous avez un désaccord professionnel avec un collègue qui devient un peu personnel. Que faites-vous ?",
          answers: [
          {text: "Je maintiens ma position sans me préoccuper du relationnel.", score: 0},
          {text: "Je recule pour préserver la relation.", score: 1},
          {text: "Je cherche à séparer le désaccord professionnel de la relation personnelle et à traiter les deux.", score: 2}
          ]
        },
        {
          text: "Un membre de l'équipe qui a du retard rejette la faute sur les autres en réunion. L'accusation est injuste. Que faites-vous ?",
          answers: [
          {text: "Je ne réagis pas — pas la peine de créer un conflit.", score: 0},
          {text: "Je rectifie les faits calmement.", score: 1},
          {text: "Je rectifie les faits et propose de traiter le problème de fond ensemble.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous avez contribué à une tension avec un collègue par une réaction un peu sèche. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça se passe tout seul.", score: 0},
          {text: "Je lui dis que je n'avais pas l'intention d'être sec.", score: 1},
          {text: "Je reviens vers lui pour reconnaître ma réaction et m'assurer que ça n'a pas affecté notre relation de travail.", score: 2}
          ]
        },
        {
          text: "Une décision collective a été prise mais vous n'y adhérez pas vraiment. Que faites-vous ?",
          answers: [
          {text: "Je fais semblant d'adhérer pour que ça avance.", score: 0},
          {text: "Je continue à défendre ma position après la décision.", score: 1},
          {text: "Je m'engage à appliquer la décision tout en gardant un espace pour faire remonter mon point de vue par les voies appropriées.", score: 2}
          ]
        },
        {
          text: "Votre équipe a du mal à prendre des décisions collectives : les réunions tournent en rond. Que faites-vous ?",
          answers: [
          {text: "Je laisse les choses se décanter naturellement.", score: 0},
          {text: "Je prends la main et impose une décision.", score: 1},
          {text: "Je propose une méthode pour structurer la prise de décision et avancer.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Les échanges dans votre équipe restent très superficiels. Les vrais problèmes ne sont jamais nommés. Que faites-vous ?",
          answers: [
          {text: "Je m'accommode — c'est le style de l'équipe.", score: 0},
          {text: "Je pose les vrais sujets quand l'occasion se présente.", score: 1},
          {text: "Je propose un espace dédié pour que les sujets de fond puissent être abordés.", score: 2}
          ]
        },
        {
          text: "Une friction récurrente entre deux personnes de l'équipe nuit à la qualité du travail. Tout le monde le sait mais personne n'intervient. Que faites-vous ?",
          answers: [
          {text: "Je laisse les managers gérer.", score: 0},
          {text: "Je parle à chacun séparément pour les aider.", score: 1},
          {text: "Je nomme la situation à l'équipe ou au responsable selon le contexte et propose d'y travailler.", score: 2}
          ]
        },
        {
          text: "Un bon résultat collectif n'est pas reconnu. Les personnes qui ont contribué semblent déçues. Que faites-vous ?",
          answers: [
          {text: "C'est à la hiérarchie de reconnaître — pas à moi.", score: 0},
          {text: "Je félicite mes proches collaborateurs.", score: 1},
          {text: "Je cherche à rendre visible la contribution collective, à mon niveau.", score: 2}
          ]
        },
        {
          text: "Votre équipe a tendance à se plaindre collectivement mais sans jamais chercher à changer les choses. Que faites-vous ?",
          answers: [
          {text: "Je me plains avec eux — ça aide à évacuer.", score: 0},
          {text: "Je ne me plains pas mais je n'interviens pas non plus.", score: 1},
          {text: "Je cherche à transformer les plaintes en problèmes à résoudre.", score: 2}
          ]
        },
        {
          text: "Vous observez que certains membres de l'équipe font plus d'efforts que d'autres. L'inégalité crée des tensions silencieuses. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon problème à régler.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "J'essaie de comprendre les causes de cet écart et d'agir à mon niveau sur ce qui est de mon ressort.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un conflit dans l'équipe dépasse ce que vous pouvez gérer seul. Que faites-vous ?",
          answers: [
          {text: "Je tente encore de gérer de mon côté.", score: 0},
          {text: "J'en informe le responsable.", score: 1},
          {text: "Je remonte la situation clairement et demande un soutien approprié — RH, médiation, responsable.", score: 2}
          ]
        },
        {
          text: "Votre équipe traverse une crise et vous vous sentez seul à essayer de maintenir le cap. Que faites-vous ?",
          answers: [
          {text: "Je continue à porter le collectif de mon mieux.", score: 0},
          {text: "Je cherche du soutien auprès d'un collègue de confiance.", score: 1},
          {text: "Je cherche un appui adapté — responsable, RH — pour ne pas porter seul une situation qui dépasse mon périmètre.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que le problème de coopération dans votre équipe est lié à un problème organisationnel plus profond (rôles flous, objectifs contradictoires). Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — je ne peux pas changer l'organisation.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je formule clairement l'analyse et la remonte pour que les causes structurelles soient traitées.", score: 2}
          ]
        },
        {
          text: "Une personne de votre équipe vous confie être épuisée et penser à s'arrêter. Que faites-vous ?",
          answers: [
          {text: "Je l'écoute et lui dis que tout le monde traverse des phases difficiles.", score: 0},
          {text: "Je lui conseille de prendre des vacances.", score: 1},
          {text: "Je l'écoute vraiment, l'encourage à chercher un soutien professionnel et, avec son accord, en informe le responsable.", score: 2}
          ]
        },
        {
          text: "Vous avez été le relais d'un problème de l'équipe auprès de la hiérarchie et rien n'a changé. Votre crédibilité en souffre. Que faites-vous ?",
          answers: [
          {text: "Je cesse d'être le relais — c'est trop risqué.", score: 0},
          {text: "Je continue mais je préviens l'équipe que les changements prennent du temps.", score: 1},
          {text: "Je relance la hiérarchie avec des éléments plus précis et plus concrets sur les conséquences de l'inaction.", score: 2}
          ]
        }
    ],
  },

  "manager-qvt-rps": {
    0: [
        {
          text: "Un membre de votre équipe a un comportement inhabituel depuis quelques jours : moins disponible, plus irritable, travail moins soigné. Que faites-vous ?",
          answers: [
          {text: "J'attends de voir si c'est passager.", score: 0},
          {text: "Je lui demande directement si tout va bien.", score: 1},
          {text: "Je crée une occasion naturelle d'échange en dehors du flux habituel de travail.", score: 2}
          ]
        },
        {
          text: "Deux membres de votre équipe sont en tension ouverte. L'ambiance générale en pâtit. Que faites-vous ?",
          answers: [
          {text: "Je les laisse régler ça entre eux.", score: 0},
          {text: "Je parle à chacun séparément pour les calmer.", score: 1},
          {text: "Je rencontre chacun, comprends les enjeux et propose un cadre pour traiter le problème.", score: 2}
          ]
        },
        {
          text: "Lors d'une réunion d'équipe, le silence sur un sujet sensible est éloquent. Personne ne s'exprime. Que faites-vous ?",
          answers: [
          {text: "Je passe au point suivant — le silence signifie accord.", score: 0},
          {text: "Je pose une question ouverte pour relancer.", score: 1},
          {text: "Je nomme le silence et crée les conditions pour que les personnes puissent s'exprimer si elles le souhaitent.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'un collaborateur très impliqué ne délègue rien et accumule. Il dit que tout va bien. Que faites-vous ?",
          answers: [
          {text: "Je le laisse gérer — il est adulte.", score: 0},
          {text: "Je lui propose de l'aide ponctuellement.", score: 1},
          {text: "J'ouvre un échange sur sa charge réelle et l'aide à réfléchir à comment mieux répartir.", score: 2}
          ]
        },
        {
          text: "Un membre de l'équipe fait régulièrement des heures supplémentaires non demandées. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — si c'est son choix, c'est son droit.", score: 0},
          {text: "Je lui dis que ce n'est pas nécessaire.", score: 1},
          {text: "Je comprends pourquoi il fait ces heures et j'agis sur les causes si elles sont organisationnelles.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Votre équipe est en surcharge depuis trois semaines. Vous attendez une décision de la direction pour alléger. Elle n'arrive pas. Que faites-vous ?",
          answers: [
          {text: "J'attends la décision — je ne peux rien faire seul.", score: 0},
          {text: "Je protège mes collaborateurs des sollicitations les plus évitables.", score: 1},
          {text: "Je prends des mesures provisoires à mon niveau ET je remonte avec insistance le besoin de décision.", score: 2}
          ]
        },
        {
          text: "Vous devez donner une charge supplémentaire à quelqu'un de votre équipe déjà chargée. Que faites-vous ?",
          answers: [
          {text: "Je lui donne — c'est la meilleure personne pour cette tâche.", score: 0},
          {text: "Je lui explique que c'est temporaire et important.", score: 1},
          {text: "J'explique le contexte, je donne la tâche ET je retrace avec lui ce qui peut être décalé ou délégué pour compenser.", score: 2}
          ]
        },
        {
          text: "Un projet est en retard et vous devez demander un effort supplémentaire à votre équipe. Comment le faites-vous ?",
          answers: [
          {text: "Je leur dis simplement ce qui est attendu.", score: 0},
          {text: "Je leur explique pourquoi c'est important.", score: 1},
          {text: "J'explique pourquoi, je reconnais l'effort demandé et je cherche avec eux ce qui peut être allégé ailleurs.", score: 2}
          ]
        },
        {
          text: "Votre équipe travaille sous pression depuis longtemps sans reconnaissance visible. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle de compenser les silences de la direction.", score: 0},
          {text: "Je les remercie personnellement.", score: 1},
          {text: "Je cherche à rendre visible leur travail auprès de la direction ET je leur témoigne ma reconnaissance directement.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que certains membres de votre équipe portent une charge invisible (coordination, soutien aux autres) non reconnue. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — cette charge fait partie du travail en équipe.", score: 0},
          {text: "Je les remercie en privé.", score: 1},
          {text: "Je rends cette contribution visible, la nomme collectivement et cherche à équilibrer la charge si elle est excessive.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un collaborateur a un conflit avec un autre service. Il vous demande d'intervenir. Que faites-vous ?",
          answers: [
          {text: "Je l'envoie gérer seul — il est adulte.", score: 0},
          {text: "Je l'écoute et interviens à sa demande.", score: 1},
          {text: "Je comprends les enjeux, évalue si mon intervention est la bonne réponse et agis en conséquence.", score: 2}
          ]
        },
        {
          text: "Un collaborateur exprime ouvertement qu'il n'est plus motivé. Que faites-vous ?",
          answers: [
          {text: "Je lui rappelle ses obligations professionnelles.", score: 0},
          {text: "Je cherche à comprendre ce qui ne va pas.", score: 1},
          {text: "Je crée un vrai espace d'échange sur ses attentes, ses difficultés et les marges de manœuvre disponibles.", score: 2}
          ]
        },
        {
          text: "Lors d'un entretien individuel, un collaborateur évoque des tensions avec un collègue. Que faites-vous ?",
          answers: [
          {text: "Je note l'information et passe à autre chose.", score: 0},
          {text: "Je lui demande de gérer directement avec l'autre personne.", score: 1},
          {text: "J'explore le sujet pour comprendre si c'est une tension ponctuelle ou quelque chose qui doit être traité.", score: 2}
          ]
        },
        {
          text: "Vous êtes vous-même sous pression et ne vous sentez pas en état d'accompagner votre équipe comme vous le souhaiteriez. Que faites-vous ?",
          answers: [
          {text: "Je gère les deux en parallèle — c'est mon rôle.", score: 0},
          {text: "Je priorise l'équipe et je gère ma propre charge après.", score: 1},
          {text: "Je cherche du soutien pour ma propre situation ET j'adapte mon disponibilité à ce qui est réellement tenable.", score: 2}
          ]
        },
        {
          text: "Un collaborateur demande une mutation interne parce qu'il ne se sent plus bien dans l'équipe. Que faites-vous ?",
          answers: [
          {text: "Je l'aide dans sa démarche — s'il veut partir, c'est son choix.", score: 0},
          {text: "Je cherche à le retenir.", score: 1},
          {text: "Je comprends les raisons profondes, cherche si quelque chose est réparable ET respecte sa décision si ce n'est pas le cas.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un collaborateur en souffrance vous demande de garder la situation confidentielle. Vous êtes préoccupé. Que faites-vous ?",
          answers: [
          {text: "Je respecte sa demande — la confidentialité est sacrée.", score: 0},
          {text: "Je lui dis que je dois en parler à quelqu'un.", score: 1},
          {text: "J'évalue la gravité de la situation et agis en conséquence, en lui expliquant clairement ce que je peux et ne peux pas garder pour moi.", score: 2}
          ]
        },
        {
          text: "Vous pensez qu'un collaborateur a besoin d'un soutien psychologique mais il refuse toute aide. Que faites-vous ?",
          answers: [
          {text: "Je respecte son refus.", score: 0},
          {text: "Je continue à insister pour l'aider.", score: 1},
          {text: "Je reste disponible, lui laisse l'information sur ce qui existe et, si la situation se dégrade, je consulte les RH ou le médecin du travail.", score: 2}
          ]
        },
        {
          text: "Votre propre hiérarchie minimise les signaux de mal-être que vous remontez sur votre équipe. Que faites-vous ?",
          answers: [
          {text: "Je cesse de remonter — inutile d'insister.", score: 0},
          {text: "Je continue à remonter informellement.", score: 1},
          {text: "Je documente les signaux et les remonte formellement, en demandant une position claire.", score: 2}
          ]
        },
        {
          text: "Un membre de l'équipe est en arrêt depuis plusieurs semaines. L'équipe n'en parle pas mais c'est présent. Que faites-vous ?",
          answers: [
          {text: "Je laisse les choses se dérouler naturellement.", score: 0},
          {text: "Je prépare son retour quand il sera prêt.", score: 1},
          {text: "Je prépare les conditions du retour ET je gère l'absence de façon équitable et transparente avec le reste de l'équipe.", score: 2}
          ]
        },
        {
          text: "Votre équipe accumule des signaux de fatigue collective depuis des mois. Vous êtes convaincu qu'une décision organisationnelle est nécessaire. Que faites-vous ?",
          answers: [
          {text: "J'attends — les décisions organisationnelles ne dépendent pas de moi.", score: 0},
          {text: "Je remonte le problème.", score: 1},
          {text: "Je construis un argumentaire factuel et demande une décision formelle avec des délais clairs.", score: 2}
          ]
        }
    ],
  },

  "teletravail-hybridation": {
    0: [
        {
          text: "En télétravail, vous finissez régulièrement votre journée deux heures après l'horaire habituel sans que rien ne l'exige vraiment. Que faites-vous ?",
          answers: [
          {text: "Je profite de l'absence de transport pour travailler plus.", score: 0},
          {text: "Je remarque le phénomène mais ne change pas mes habitudes.", score: 1},
          {text: "Je pose des limites horaires claires et les tiens comme si j'étais au bureau.", score: 2}
          ]
        },
        {
          text: "Votre espace de télétravail n'est pas adapté (bruit, manque de lumière, espace insuffisant). Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — c'est temporaire.", score: 0},
          {text: "Je signale le problème à mon responsable.", score: 1},
          {text: "Je cherche une solution concrète (autre lieu, équipement) et informe mon responsable des contraintes.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à démarrer la journée en télétravail — vous repoussez les tâches et perdez du temps le matin. Que faites-vous ?",
          answers: [
          {text: "J'attends d'être dans l'élan.", score: 0},
          {text: "Je commence par les tâches les plus faciles pour démarrer.", score: 1},
          {text: "Je mets en place un rituel de démarrage pour structurer ma journée à distance.", score: 2}
          ]
        },
        {
          text: "Les notifications de vos outils de travail vous distraient en permanence en télétravail. Que faites-vous ?",
          answers: [
          {text: "Je les laisse actives — je dois être disponible.", score: 0},
          {text: "Je les coupe pendant mes plages de travail focalisé.", score: 1},
          {text: "J'organise ma disponibilité de façon explicite et j'informe mon équipe de mes plages de concentration.", score: 2}
          ]
        },
        {
          text: "En fin de semaine de télétravail, vous réalisez que vous avez encore moins bien récupéré que lors des semaines au bureau. Que faites-vous ?",
          answers: [
          {text: "J'accepte — le télétravail est plus fatiguant pour moi.", score: 0},
          {text: "Je cherche à faire plus de pauses.", score: 1},
          {text: "J'analyse ce qui génère cette fatigue supplémentaire et cherche à modifier mes habitudes.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "En semaine entièrement à distance, vous n'avez eu aucun échange informel avec vos collègues. Que faites-vous ?",
          answers: [
          {text: "Je me concentre sur le travail — les échanges informels ne sont pas prioritaires.", score: 0},
          {text: "Je profite d'une réunion pour glisser un échange informel.", score: 1},
          {text: "Je crée délibérément des occasions d'échange informel avec mes collègues.", score: 2}
          ]
        },
        {
          text: "Vous avez l'impression de passer sous le radar en télétravail. Votre travail n'est pas visible. Que faites-vous ?",
          answers: [
          {text: "Je travaille plus pour compenser.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je prends des initiatives pour rendre mon travail visible sans avoir besoin de me sur-justifier.", score: 2}
          ]
        },
        {
          text: "Lors d'une réunion hybride, les participants à distance n'ont pas accès aux mêmes informations que ceux en présentiel (tableau, conversations de couloir). Que faites-vous ?",
          answers: [
          {text: "J'essaie de suivre du mieux que je peux.", score: 0},
          {text: "Je demande à quelqu'un de retranscrire les informations importantes.", score: 1},
          {text: "Je nomme le problème et propose une organisation qui équilibre la participation entre présents et distants.", score: 2}
          ]
        },
        {
          text: "Vous êtes à distance et votre équipe prend des décisions sans vous lors de réunions informelles au bureau. Que faites-vous ?",
          answers: [
          {text: "J'accepte — ce n'est pas évitable.", score: 0},
          {text: "Je demande à être tenu informé.", score: 1},
          {text: "Je propose un cadre de décision qui inclut explicitement les personnes à distance.", score: 2}
          ]
        },
        {
          text: "Vous sentez que votre engagement est moins perceptible depuis que vous êtes davantage à distance. Que faites-vous ?",
          answers: [
          {text: "J'envoie plus de messages pour montrer que je travaille.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je cherche à contribuer de façon visible sur les sujets importants sans surinvestir en quantité.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "En mode hybride, vous constatez que certains échanges se passent en français pour les présents et en anglais pour les distants — métaphoriquement : deux niveaux d'information. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — c'est inévitable.", score: 0},
          {text: "Je mets en place mes propres canaux d'information.", score: 1},
          {text: "Je propose que les canaux de communication soient uniformisés pour que tout le monde ait le même niveau d'accès.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à vous faire entendre lors des réunions hybrides. Votre temps de parole est réduit. Que faites-vous ?",
          answers: [
          {text: "Je fais des efforts pour m'imposer.", score: 0},
          {text: "Je compense en envoyant mes contributions par écrit.", score: 1},
          {text: "Je nomme le problème en réunion et propose des ajustements de format.", score: 2}
          ]
        },
        {
          text: "Les messages écrits dans vos outils collaboratifs sont souvent mal interprétés par rapport à ce que vous souhaitiez dire. Que faites-vous ?",
          answers: [
          {text: "Je fais plus attention à la formulation.", score: 0},
          {text: "Je passe au téléphone quand les sujets sont sensibles.", score: 1},
          {text: "Je réfléchis à quels sujets méritent un échange oral et lesquels peuvent rester à l'écrit, et j'adapte.", score: 2}
          ]
        },
        {
          text: "Un désaccord naît par message interposé et s'emballe. Que faites-vous ?",
          answers: [
          {text: "Je continue à argumenter par écrit pour clarifier ma position.", score: 0},
          {text: "Je propose de faire un point téléphonique.", score: 1},
          {text: "Je stoppe l'échange écrit et propose un appel rapide pour clarifier de vive voix.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous passez votre journée à répondre à des messages en temps réel et n'avancez plus sur vos sujets de fond. Que faites-vous ?",
          answers: [
          {text: "Je réponds en temps réel — c'est ce qu'on attend de moi.", score: 0},
          {text: "Je coupe les notifications par moments.", score: 1},
          {text: "Je clarifie avec mon équipe mes temps de disponibilité et mes plages de travail focalisé.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "L'organisation hybride crée des tensions entre ceux qui viennent souvent et ceux qui viennent peu. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — ce n'est pas mon rôle de gérer les frustrations des autres.", score: 0},
          {text: "Je pose la question à mon responsable.", score: 1},
          {text: "Je nomme le sujet et propose un échange collectif sur les attentes et les règles du jeu.", score: 2}
          ]
        },
        {
          text: "Vous n'arrivez pas à déconnecter le week-end à cause des outils collaboratifs accessibles en permanence. Que faites-vous ?",
          answers: [
          {text: "Je reste connecté — c'est la réalité du travail aujourd'hui.", score: 0},
          {text: "Je désactive les notifications le week-end.", score: 1},
          {text: "Je pose des règles claires de disponibilité et les communique à mon entourage professionnel.", score: 2}
          ]
        },
        {
          text: "Un collègue vous sollicite régulièrement en dehors des heures de travail via les outils collaboratifs. Que faites-vous ?",
          answers: [
          {text: "Je réponds — il a peut-être une bonne raison.", score: 0},
          {text: "Je réponds quand je le veux mais sans explication.", score: 1},
          {text: "Je lui explique mes règles de disponibilité et cherche à comprendre pourquoi il contacte en dehors des heures habituelles.", score: 2}
          ]
        },
        {
          text: "L'organisation hybride génère chez vous un sentiment de ne jamais être vraiment ni au bureau ni chez vous. Que faites-vous ?",
          answers: [
          {text: "J'accepte — c'est le prix du télétravail.", score: 0},
          {text: "Je cherche à mieux séparer les deux environnements.", score: 1},
          {text: "J'analyse ce qui crée ce flou et cherche à construire des rituels qui délimitent clairement les deux espaces.", score: 2}
          ]
        },
        {
          text: "Vous vous sentez moins bien dans l'équipe depuis que l'organisation hybride est en place. Le lien est moins fort. Que faites-vous ?",
          answers: [
          {text: "J'attends que les choses s'arrangent.", score: 0},
          {text: "J'en parle à quelqu'un de confiance.", score: 1},
          {text: "Je l'exprime à mon équipe ou à mon responsable et propose des pistes pour recréer du lien.", score: 2}
          ]
        }
    ],
  },

  "epuisement-prevention": {
    0: [
        {
          text: "Depuis plusieurs semaines, vous êtes épuisé dès le matin et les journées vous semblent interminables. Vous vous dites que c'est la période. Que faites-vous ?",
          answers: [
          {text: "Je pousse encore — ça va passer.", score: 0},
          {text: "Je cherche à me ménager un peu plus.", score: 1},
          {text: "Je prends ce signal au sérieux et cherche à en comprendre les causes réelles.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à vous souvenir de la dernière fois où vous vous êtes senti vraiment récupéré. Que faites-vous ?",
          answers: [
          {text: "Je note que je suis fatigué et continue.", score: 0},
          {text: "Je cherche à mieux dormir.", score: 1},
          {text: "Je vois cela comme un signe d'épuisement cumulatif et cherche à agir sur les causes.", score: 2}
          ]
        },
        {
          text: "Les tâches que vous trouviez stimulantes il y a quelques mois vous semblent maintenant sans intérêt. Que faites-vous ?",
          answers: [
          {text: "Je fais le minimum pour avancer.", score: 0},
          {text: "Je cherche à retrouver de la motivation.", score: 1},
          {text: "Je prends cela comme un signal de burnout possible et cherche à en parler.", score: 2}
          ]
        },
        {
          text: "Votre irritabilité augmente au travail. Des situations habituellement neutres vous agacent fortement. Que faites-vous ?",
          answers: [
          {text: "Je m'excuse après coup et continue.", score: 0},
          {text: "Je cherche à mieux gérer mes réactions.", score: 1},
          {text: "J'interprète cela comme un signe de surcharge et cherche à agir en amont.", score: 2}
          ]
        },
        {
          text: "Vous faites des erreurs inhabituelles dans votre travail depuis quelques semaines. Que faites-vous ?",
          answers: [
          {text: "Je redouble d'attention.", score: 0},
          {text: "Je prends note et cherche à m'organiser différemment.", score: 1},
          {text: "Je prends ce signal au sérieux : des erreurs inhabituelles peuvent indiquer un épuisement cognitif.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous avez du mal à dire non à de nouvelles demandes même quand vous êtes déjà saturé. Que faites-vous ?",
          answers: [
          {text: "Je continue à dire oui — refuser m'est difficile.", score: 0},
          {text: "Je dis oui mais en précisant que ce sera pour plus tard.", score: 1},
          {text: "Je cherche à formuler un refus respectueux et à en comprendre les raisons qui me retiennent.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous ne prenez jamais de pause dans la journée. Que faites-vous ?",
          answers: [
          {text: "Les pauses me font perdre du temps.", score: 0},
          {text: "Je prends une pause quand j'ai fini une tâche.", score: 1},
          {text: "Je planifie des pauses dans ma journée comme des engagements non négociables.", score: 2}
          ]
        },
        {
          text: "Votre charge a augmenté mais vous n'avez pas revu vos priorités ni demandé un arbitrage. Que faites-vous ?",
          answers: [
          {text: "J'absorbe — c'est mon rôle de m'adapter.", score: 0},
          {text: "Je signale que c'est beaucoup.", score: 1},
          {text: "Je demande explicitement un arbitrage avec des éléments concrets sur ce qui n'est plus tenable.", score: 2}
          ]
        },
        {
          text: "Vous travaillez souvent le soir et le week-end pour tenir votre charge. Que faites-vous ?",
          answers: [
          {text: "C'est nécessaire pour livrer ce qui est attendu.", score: 0},
          {text: "Je cherche à être plus efficace pendant les heures de travail.", score: 1},
          {text: "Je prends cela comme un signal que ma charge dépasse ma capacité normale et j'en parle à mon responsable.", score: 2}
          ]
        },
        {
          text: "Vous n'avez pas pris de congés depuis plusieurs mois et vous ne savez pas quand vous pourrez en prendre. Que faites-vous ?",
          answers: [
          {text: "Quand la charge baisse, je prendrai des congés.", score: 0},
          {text: "Je pose quelques jours quand c'est possible.", score: 1},
          {text: "Je pose des congés comme une nécessité, pas comme une récompense, et j'anticipe l'organisation.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous savez que vous devriez récupérer mais dès que vous avez un moment libre, vous pensez au travail. Que faites-vous ?",
          answers: [
          {text: "Je laisse aller — c'est difficile à contrôler.", score: 0},
          {text: "Je cherche des activités pour m'occuper l'esprit.", score: 1},
          {text: "Je travaille à créer des espaces de déconnexion réels — activité physique, limites numériques.", score: 2}
          ]
        },
        {
          text: "Votre sommeil est perturbé par des pensées liées au travail depuis plusieurs semaines. Que faites-vous ?",
          answers: [
          {text: "Je m'y habitue — c'est une période tendue.", score: 0},
          {text: "Je prends des médicaments pour dormir.", score: 1},
          {text: "Je vois cela comme un signal sérieux et cherche un appui : médecin, psychologue, employeur.", score: 2}
          ]
        },
        {
          text: "Vous continuez à aller travailler alors que vous vous sentez vraiment au bout du rouleau. Que faites-vous ?",
          answers: [
          {text: "Je tiens — les congés arrivent bientôt.", score: 0},
          {text: "Je travaille à mi-régime sans le dire.", score: 1},
          {text: "Je prends le problème au sérieux et consulte un médecin pour évaluer ma situation.", score: 2}
          ]
        },
        {
          text: "Vous avez l'habitude de ne jamais demander d'aide même quand vous en avez besoin. Que faites-vous face à une surcharge importante ?",
          answers: [
          {text: "Je gère seul — c'est ma façon de fonctionner.", score: 0},
          {text: "Je cherche à me débrouiller avec les ressources disponibles.", score: 1},
          {text: "Je travaille à dépasser cet automatisme et à formuler une demande d'aide explicite.", score: 2}
          ]
        },
        {
          text: "Des activités qui vous ressourçaient habituellement ne vous font plus d'effet. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça revienne.", score: 0},
          {text: "Je cherche de nouvelles activités.", score: 1},
          {text: "Je vois cela comme un signe d'épuisement avancé et cherche un soutien professionnel.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous savez que vous avez besoin d'aide mais vous avez honte de l'admettre. Que faites-vous ?",
          answers: [
          {text: "Je gère seul et personne ne sait.", score: 0},
          {text: "J'en parle à un proche hors travail.", score: 1},
          {text: "Je cherche à mettre de côté la honte et à accéder à un soutien adapté, professionnel ou médical.", score: 2}
          ]
        },
        {
          text: "Vous pensez à consulter un médecin ou un psychologue mais vous vous demandez si votre situation est vraiment assez grave. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça empire pour être sûr.", score: 0},
          {text: "J'en parle à un proche pour avoir son avis.", score: 1},
          {text: "Je consulte — l'anticipation est toujours plus efficace que l'attente.", score: 2}
          ]
        },
        {
          text: "Vous n'êtes pas sûr que votre organisation dispose de ressources d'accompagnement psychologique. Que faites-vous ?",
          answers: [
          {text: "Je suppose qu'il n'y a rien et je ne cherche pas.", score: 0},
          {text: "J'en parle à un collègue.", score: 1},
          {text: "Je me renseigne directement auprès des RH ou du service de santé au travail.", score: 2}
          ]
        },
        {
          text: "Vous traversez un épuisement sérieux et votre responsable ne l'a pas remarqué. Que faites-vous ?",
          answers: [
          {text: "J'attends qu'il le voie.", score: 0},
          {text: "Je lui laisse entendre que ça va mieux de toute façon.", score: 1},
          {text: "Je prends l'initiative d'en parler directement à mon responsable ou aux RH.", score: 2}
          ]
        },
        {
          text: "Vous êtes revenu d'un arrêt maladie lié à l'épuisement mais vous ne sentez pas les conditions changer. Que faites-vous ?",
          answers: [
          {text: "Je reprends comme avant — ça s'est passé, je passe à autre chose.", score: 0},
          {text: "Je signale que les conditions n'ont pas changé.", score: 1},
          {text: "Je prends le temps de redéfinir avec mon responsable les conditions de reprise pour éviter une rechute.", score: 2}
          ]
        }
    ],
  },

  "retour-apres-absence": {
    0: [
        {
          text: "Vous revenez d'un arrêt de plusieurs semaines. Votre boîte mail contient des centaines de messages. Que faites-vous ?",
          answers: [
          {text: "Je traite tout du premier jour pour être à jour rapidement.", score: 0},
          {text: "Je trie les messages les plus importants et traite le reste au fil de l'eau.", score: 1},
          {text: "Je commence par demander à mon responsable quelles sont les priorités avant de plonger dans ma messagerie.", score: 2}
          ]
        },
        {
          text: "Vous revenez d'une longue absence et réalisez que certains de vos projets ont évolué sans vous. Que faites-vous ?",
          answers: [
          {text: "Je reprends le pilotage comme avant.", score: 0},
          {text: "Je me tiens informé de ce qui a changé.", score: 1},
          {text: "Je prends le temps de comprendre les évolutions avant de prendre des décisions.", score: 2}
          ]
        },
        {
          text: "À votre retour, votre périmètre a légèrement changé sans que vous en ayez été informé. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte sans poser de questions.", score: 0},
          {text: "J'en prends note et attends de voir comment ça se passe.", score: 1},
          {text: "Je demande un point clair sur les nouvelles attentes avant de reprendre pleinement.", score: 2}
          ]
        },
        {
          text: "À votre retour, vos collègues vous traitent comme si vous n'aviez jamais été absent. Ça vous met mal à l'aise. Que faites-vous ?",
          answers: [
          {text: "Je fais pareil et reprends le rythme.", score: 0},
          {text: "Je leur signale discrètement que j'ai besoin d'un peu de temps.", score: 1},
          {text: "Je m'accorde le droit de reprendre progressivement et je le communique clairement.", score: 2}
          ]
        },
        {
          text: "Au retour de votre absence, votre responsable vous charge dès le premier jour. Il semble ne pas réaliser l'impact. Que faites-vous ?",
          answers: [
          {text: "Je prends tout — je veux montrer que je suis de retour.", score: 0},
          {text: "Je fais ce que je peux sans le dire.", score: 1},
          {text: "J'expose clairement ce que je peux absorber dans un premier temps.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous revenez d'une longue absence et vous n'êtes plus tout à fait sûr de vos compétences sur certains sujets qui ont évolué. Que faites-vous ?",
          answers: [
          {text: "Je fais comme si j'étais à jour.", score: 0},
          {text: "Je me mets à niveau discrètement.", score: 1},
          {text: "Je reconnais clairement ce dont j'ai besoin pour être opérationnel et demande un accompagnement.", score: 2}
          ]
        },
        {
          text: "Des décisions ont été prises pendant votre absence que vous n'auriez peut-être pas prises de la même façon. Que faites-vous ?",
          answers: [
          {text: "Je les remets en question.", score: 0},
          {text: "Je les accepte sans en parler.", score: 1},
          {text: "Je les accepte et, si elles ont un impact important, j'ouvre une discussion constructive sur les adaptations possibles.", score: 2}
          ]
        },
        {
          text: "Au retour, vous réalisez que certaines relations de travail ont changé pendant votre absence. Que faites-vous ?",
          answers: [
          {text: "Je reprends là où j'étais — les relations se reconstruisent d'elles-mêmes.", score: 0},
          {text: "Je m'y adapte au fil du temps.", score: 1},
          {text: "Je prends des initiatives pour reconstruire les liens importants.", score: 2}
          ]
        },
        {
          text: "Vous devez rattraper un retard professionnel mais vous sentez que votre capacité de travail n'est pas encore à 100%. Que faites-vous ?",
          answers: [
          {text: "Je compense par du volume horaire.", score: 0},
          {text: "Je priorise l'essentiel.", score: 1},
          {text: "Je suis honnête avec mon responsable sur mon état réel et je propose un plan de reprise réaliste.", score: 2}
          ]
        },
        {
          text: "Votre équipe vous sollicite beaucoup à votre retour. C'est valorisant mais épuisant. Que faites-vous ?",
          answers: [
          {text: "Je réponds à tout — je suis de retour.", score: 0},
          {text: "Je gère au cas par cas selon mon énergie.", score: 1},
          {text: "Je pose des limites claires sur ma disponibilité dans les premiers jours.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous avez du mal à retrouver votre rythme de travail après votre absence. Que faites-vous ?",
          answers: [
          {text: "Je force et ça finit par venir.", score: 0},
          {text: "Je me fixe des objectifs simples pour les premiers jours.", score: 1},
          {text: "Je construis une reprise progressive et en parle ouvertement à mon responsable.", score: 2}
          ]
        },
        {
          text: "À votre retour, vous avez l'impression de ne plus être dans la boucle et d'avoir raté des choses importantes. Que faites-vous ?",
          answers: [
          {text: "Je remonte aux derniers emails importants.", score: 0},
          {text: "Je demande à un collègue de me mettre à jour.", score: 1},
          {text: "Je demande un point structuré à mon responsable sur les évolutions importantes et les priorités actuelles.", score: 2}
          ]
        },
        {
          text: "Vous vous surcompensez pour montrer que vous êtes pleinement opérationnel, mais vous vous épuisez à nouveau. Que faites-vous ?",
          answers: [
          {text: "Je continue — il faut que je sois à la hauteur.", score: 0},
          {text: "Je lève le pied discrètement.", score: 1},
          {text: "Je reconnais cette dynamique et agis pour casser le cercle vicieux.", score: 2}
          ]
        },
        {
          text: "Au retour, un collègue vous pose des questions sur les raisons de votre absence. Vous ne souhaitez pas en parler. Que faites-vous ?",
          answers: [
          {text: "Je lui donne une réponse vague et change de sujet.", score: 0},
          {text: "Je lui dis que c'était personnel sans aller plus loin.", score: 1},
          {text: "Je pose clairement une limite, de façon calme : il n'est pas nécessaire que je m'en explique.", score: 2}
          ]
        },
        {
          text: "Vous êtes revenu mais vous ne vous sentez pas vraiment prêt. Que faites-vous ?",
          answers: [
          {text: "Je fais bonne figure — ça reviendra.", score: 0},
          {text: "Je travaille à mi-régime sans le dire.", score: 1},
          {text: "J'en parle à mon médecin et à mon responsable pour définir des conditions de reprise adaptées.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Plusieurs semaines après votre retour, vous sentez que votre énergie ne remonte pas vraiment. Que faites-vous ?",
          answers: [
          {text: "J'attends encore — le retour prend du temps.", score: 0},
          {text: "Je prends des congés supplémentaires.", score: 1},
          {text: "Je consulte à nouveau un médecin : ce signal n'est pas à ignorer.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que les conditions qui ont causé votre absence n'ont pas changé. Que faites-vous ?",
          answers: [
          {text: "Je reprends en espérant que ça se passe mieux.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je formalise clairement les conditions nécessaires à un retour durable et demande un engagement concret.", score: 2}
          ]
        },
        {
          text: "À votre retour, votre responsable vous charge progressivement plus vite que vous ne le souhaiteriez. Que faites-vous ?",
          answers: [
          {text: "Je tiens — il faut montrer que je suis capable.", score: 0},
          {text: "Je lui dis que c'est un peu tôt.", score: 1},
          {text: "J'exprime clairement mon rythme de reprise et les limites que je dois respecter pour ne pas rechuter.", score: 2}
          ]
        },
        {
          text: "Vous avez encore des moments difficiles ponctuels depuis votre retour. Vous ne savez pas si vous devez en parler. Que faites-vous ?",
          answers: [
          {text: "Je garde ça pour moi — ça peut faire peur aux autres.", score: 0},
          {text: "J'en parle à quelqu'un de confiance hors travail.", score: 1},
          {text: "J'en parle à la personne la plus adaptée selon la nature du problème : médecin, RH, ou responsable.", score: 2}
          ]
        },
        {
          text: "Une situation similaire à celle qui vous a causé votre absence se reproduit. Que faites-vous ?",
          answers: [
          {text: "J'essaie de la gérer autrement cette fois.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "J'agis rapidement pour ne pas laisser la situation s'installer : signalement, ajustement de charge, demande d'aide.", score: 2}
          ]
        }
    ],
  },

  "manager-signaux-rps": {
    0: [
        {
          text: "Un collaborateur qui était toujours à l'heure commence à arriver en retard régulièrement. Il ne donne pas d'explication. Que faites-vous ?",
          answers: [
          {text: "Je note le retard et lui rappelle les règles.", score: 0},
          {text: "Je lui demande si tout va bien.", score: 1},
          {text: "Je crée un espace pour échanger sur sa situation sans le mettre en difficulté.", score: 2}
          ]
        },
        {
          text: "Un collaborateur habitué à contribuer activement en réunion ne dit plus rien depuis deux semaines. Que faites-vous ?",
          answers: [
          {text: "J'attends de voir si ça change.", score: 0},
          {text: "Je lui pose la question en réunion pour le faire participer.", score: 1},
          {text: "Je crée un moment en dehors des réunions pour lui demander comment il se sent.", score: 2}
          ]
        },
        {
          text: "Vous constatez que la qualité du travail d'un collaborateur a baissé sans raison apparente. Que faites-vous ?",
          answers: [
          {text: "Je lui fais un retour sur la qualité de son travail.", score: 0},
          {text: "Je lui demande si quelque chose le perturbe.", score: 1},
          {text: "Je crée un espace d'échange sur sa charge et son vécu avant d'aborder la performance.", score: 2}
          ]
        },
        {
          text: "Un collaborateur est de plus en plus absent pour des arrêts courts et répétitifs. Que faites-vous ?",
          answers: [
          {text: "Je note les absences et les suis administrativement.", score: 0},
          {text: "Je lui demande si quelque chose ne va pas.", score: 1},
          {text: "Je crée un espace d'échange bienveillant et, si nécessaire, je l'oriente vers le médecin du travail.", score: 2}
          ]
        },
        {
          text: "Un collaborateur est de plus en plus irritable avec ses collègues. Ça commence à affecter l'ambiance. Que faites-vous ?",
          answers: [
          {text: "Je lui rappelle l'importance du respect dans l'équipe.", score: 0},
          {text: "Je l'aborde sur l'impact de son comportement.", score: 1},
          {text: "Je l'aborde d'abord sur comment il va lui, avant de parler de l'impact sur l'équipe.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un collaborateur vous dit que tout va bien mais son comportement dit le contraire. Que faites-vous ?",
          answers: [
          {text: "Je le crois sur parole.", score: 0},
          {text: "Je continue à observer sans intervenir.", score: 1},
          {text: "Je lui reflète ce que j'observe de façon factuelle et lui laisse l'espace de s'exprimer.", score: 2}
          ]
        },
        {
          text: "Vous avez la conviction qu'un collaborateur est en souffrance mais il nie toute difficulté. Que faites-vous ?",
          answers: [
          {text: "Je respecte sa version.", score: 0},
          {text: "J'insiste pour qu'il reconnaisse la situation.", score: 1},
          {text: "Je reste disponible, lui fais savoir que la porte est ouverte et reste attentif à la situation.", score: 2}
          ]
        },
        {
          text: "Un collaborateur partage avec vous une difficulté personnelle qui affecte son travail. Que faites-vous ?",
          answers: [
          {text: "Je l'écoute et lui dis d'essayer de séparer vie personnelle et vie professionnelle.", score: 0},
          {text: "Je l'écoute et lui propose de prendre des congés.", score: 1},
          {text: "Je l'écoute vraiment, j'évalue avec lui ce que l'organisation peut faire et je l'oriente vers les bons relais si nécessaire.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande de ne rien dire à personne d'une situation difficile qu'il traverse. Que faites-vous ?",
          answers: [
          {text: "Je respecte sa demande totalement.", score: 0},
          {text: "Je lui promets la confidentialité et respecte cela.", score: 1},
          {text: "Je l'écoute, lui explique ce que je peux et ne peux pas garder pour moi selon la gravité, et je prends une décision responsable.", score: 2}
          ]
        },
        {
          text: "Vous intervenez sur la situation d'un collaborateur et vous réalisez que ça dépasse vos compétences. Que faites-vous ?",
          answers: [
          {text: "Je continue à gérer — c'est mon rôle de manager.", score: 0},
          {text: "Je lui suggère de consulter un médecin.", score: 1},
          {text: "Je passe clairement la main au bon interlocuteur (médecin du travail, RH) en lui expliquant pourquoi.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous voulez orienter un collaborateur vers le médecin du travail mais il vit cela comme une mise à l'écart. Que faites-vous ?",
          answers: [
          {text: "Je renonce — il n'est pas prêt.", score: 0},
          {text: "Je lui explique que c'est obligatoire.", score: 1},
          {text: "Je lui explique le rôle du médecin du travail et en quoi c'est une ressource pour lui, pas une sanction.", score: 2}
          ]
        },
        {
          text: "Vous avez des doutes sur un collaborateur mais vous ne voulez pas le stigmatiser en intervenant trop tôt. Que faites-vous ?",
          answers: [
          {text: "J'attends d'être certain.", score: 0},
          {text: "J'observe plus attentivement.", score: 1},
          {text: "Je trouve une façon d'ouvrir la discussion sans poser de diagnostic, de façon naturelle et factuelle.", score: 2}
          ]
        },
        {
          text: "Le service RH que vous devriez solliciter n'est pas facilement accessible. Que faites-vous ?",
          answers: [
          {text: "Je gère seul.", score: 0},
          {text: "Je cherche une autre personne de confiance.", score: 1},
          {text: "Je cherche le bon canal formel et j'insiste pour accéder aux ressources nécessaires.", score: 2}
          ]
        },
        {
          text: "Votre propre hiérarchie vous dit de ne pas trop chercher à comprendre les difficultés personnelles des collaborateurs. Que faites-vous ?",
          answers: [
          {text: "Je suis la consigne — je ne veux pas créer de conflit.", score: 0},
          {text: "Je continue discrètement à être attentif.", score: 1},
          {text: "Je défends ma vision de ce qu'implique mon rôle et j'explique en quoi ignorer ces signaux a des conséquences.", score: 2}
          ]
        },
        {
          text: "Vous avez orienté un collaborateur vers un soutien externe mais il ne s'y est pas rendu. Que faites-vous ?",
          answers: [
          {text: "Je laisse — c'est son choix.", score: 0},
          {text: "Je lui redemande d'y aller.", score: 1},
          {text: "Je comprends ce qui l'a empêché d'y aller et je cherche à lever les obstacles avec lui.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "L'organisation de votre équipe génère structurellement de la surcharge. Que faites-vous au-delà de gérer les symptômes individuels ?",
          answers: [
          {text: "Je gère les cas au fil de l'eau.", score: 0},
          {text: "Je remonte la situation à ma hiérarchie.", score: 1},
          {text: "Je construis une analyse factuelle des causes organisationnelles et demande une décision sur la structure.", score: 2}
          ]
        },
        {
          text: "Votre équipe a des objectifs qui conduisent mécaniquement à des situations de surcharge. Que faites-vous ?",
          answers: [
          {text: "J'aide chacun à s'organiser mieux.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je formalise le lien entre objectifs et surcharge et demande un arbitrage sur les objectifs eux-mêmes.", score: 2}
          ]
        },
        {
          text: "Vous vous rendez compte que vous n'avez pas les connaissances suffisantes pour détecter les signaux de RPS correctement. Que faites-vous ?",
          answers: [
          {text: "Je fais de mon mieux avec ce que je sais.", score: 0},
          {text: "Je cherche des informations en ligne.", score: 1},
          {text: "Je demande une formation ou un appui à ma hiérarchie ou aux RH.", score: 2}
          ]
        },
        {
          text: "Vous constatez que les alertes RPS dans votre équipe se multiplient et que les ressources disponibles sont insuffisantes. Que faites-vous ?",
          answers: [
          {text: "Je gère avec ce que j'ai.", score: 0},
          {text: "J'en informe les RH.", score: 1},
          {text: "Je construis un argumentaire factuel pour demander des ressources supplémentaires adaptées.", score: 2}
          ]
        },
        {
          text: "Vous avez géré plusieurs situations difficiles de RPS en peu de temps. Vous êtes vous-même épuisé. Que faites-vous ?",
          answers: [
          {text: "Je continue — les collaborateurs ont besoin de moi.", score: 0},
          {text: "Je cherche à déléguer certaines responsabilités.", score: 1},
          {text: "Je cherche un soutien pour moi-même : ma hiérarchie, les RH, ou un professionnel.", score: 2}
          ]
        }
    ],
  },

  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("qvt-rps", "QVT & RPS", "🌿", [
    ["rps-signaux-faibles",    "Repérer les signaux faibles de RPS",          "Tous publics",          "Identifier les tensions, alertes et situations d'isolement dans le quotidien professionnel.",                                                                     T.qvtRps],
    ["charge-priorites",       "Charge de travail et priorisation",           "Tous publics",          "Prendre du recul sur l'urgence, les arbitrages et les limites soutenables.",                                                                                      T.qvtRps],
    ["cooperation-climat",     "Coopération et climat de travail",            "Collaborateurs",        "Agir dans les irritants du quotidien, désamorcer et préserver la qualité relationnelle.",                                                                         T.qvtRps],
    ["manager-qvt-rps",        "Manager la charge et les tensions d'équipe",  "Managers",              "Identifier, réguler et orienter sans porter seul les situations sensibles.",                                                                                       T.qvtRps],
    ["teletravail-hybridation","Télétravail et travail hybride",              "Collaborateurs",        "Organiser sa présence à distance, maintenir le lien collectif et gérer les irritants de l'hybridation.",                                                          T.qvtTeletravail],
    ["epuisement-prevention",  "Prévenir l'épuisement professionnel",        "Collaborateurs",        "Reconnaître ses signaux d'alerte, réguler sa charge dans la durée et oser chercher un appui.",                                                                    T.qvtEpuisement],
    ["retour-apres-absence",   "Reprendre le travail après une absence",      "Tous publics",          "Préparer son retour, réintégrer son collectif et calibrer la reprise en charge sans surcompenser.",                                                               T.qvtRetourAbsence],
    ["manager-signaux-rps",    "Détecter et orienter sans psychologiser",     "Managers / Encadrants", "Repérer les signaux faibles, intervenir sur le travail et orienter vers les bons relais sans se substituer aux spécialistes.",                                    T.qvtManagerSignaux]
  ]);

})();
