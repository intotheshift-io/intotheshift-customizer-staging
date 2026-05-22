/**
 * catalogue-ethique.js — INTO THE SHIFT
 * Domaine : Éthique & compliance (4 ADs)
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  // ─────────────────────────────────────────────────────────────────────────
  //  QUESTIONS RÉDIGÉES — Éthique & compliance
  // ─────────────────────────────────────────────────────────────────────────

  Object.assign(window.CUSTOM_QUESTIONS, {
  "conflits-interets": {
    0: [
        {
          text: "Vous participez à une commission d'évaluation d'un prestataire. Votre conjoint(e) travaille pour ce prestataire. Que faites-vous ?",
          answers: [
          {text: "Je participe mais je reste objectif.", score: 0},
          {text: "Je le mentionne à mon responsable.", score: 1},
          {text: "Je me déclare en situation de conflit d'intérêts et je me retire de la commission.", score: 2}
          ]
        },
        {
          text: "Votre frère crée une société qui pourrait répondre à un appel d'offres de votre organisation. Que faites-vous ?",
          answers: [
          {text: "Je laisse le processus se dérouler — je ne vais pas influencer la décision.", score: 0},
          {text: "J'en parle à mon responsable avant que le processus démarre.", score: 1},
          {text: "Je déclare la situation à la personne compétente et je m'exclus de toute décision liée à ce dossier.", score: 2}
          ]
        },
        {
          text: "Vous avez un investissement personnel dans une société qui est en négociation avec votre organisation. Vous ne l'avez jamais déclaré. Que faites-vous ?",
          answers: [
          {text: "Je continue — mon investissement est minoritaire et je ne prends pas les décisions finales.", score: 0},
          {text: "Je surveille si la situation évolue vers un vrai conflit.", score: 1},
          {text: "Je déclare immédiatement l'investissement aux personnes compétentes.", score: 2}
          ]
        },
        {
          text: "Vous recrutez et un ami proche pose sa candidature. Il est qualifié. Que faites-vous ?",
          answers: [
          {text: "J'évalue sa candidature — il est qualifié comme les autres.", score: 0},
          {text: "Je le mentionne à mon responsable.", score: 1},
          {text: "Je me retire du processus de recrutement et laisse quelqu'un d'autre évaluer sa candidature.", score: 2}
          ]
        },
        {
          text: "Vous évaluez des projets et l'un d'eux est porté par un ancien collègue avec qui vous avez gardé une relation amicale forte. Que faites-vous ?",
          answers: [
          {text: "J'évalue tous les projets de la même façon — ma professionnalisme suffit.", score: 0},
          {text: "Je le mentionne de façon informelle.", score: 1},
          {text: "Je déclare la relation et demande si je dois m'exclure de l'évaluation de ce projet spécifique.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Une situation vous semble être un conflit d'intérêts mais vous n'en êtes pas certain. Que faites-vous ?",
          answers: [
          {text: "J'attends d'en être sûr pour agir.", score: 0},
          {text: "J'en parle à un collègue de confiance.", score: 1},
          {text: "Je consulte la personne compétente (déontologue, compliance) dès que j'ai un doute.", score: 2}
          ]
        },
        {
          text: "Un responsable vous demande de participer à une décision où vous avez un intérêt indirect. Vous pensez pouvoir rester objectif. Que faites-vous ?",
          answers: [
          {text: "Je participe — je suis capable de rester objectif.", score: 0},
          {text: "Je mentionne l'intérêt indirect mais je participe si le responsable le valide.", score: 1},
          {text: "Je déclare la situation et laisse la décision sur la participation à quelqu'un d'autre.", score: 2}
          ]
        },
        {
          text: "Vous avez déclaré un conflit d'intérêts mais votre responsable dit que ce n'est pas grave et vous demande de continuer. Que faites-vous ?",
          answers: [
          {text: "Je continue — mon responsable a validé.", score: 0},
          {text: "Je note l'échange par précaution.", score: 1},
          {text: "Je documente la situation et cherche une confirmation de la position du responsable par écrit, au cas où.", score: 2}
          ]
        },
        {
          text: "Une situation de conflit d'intérêts vous concerne mais elle est difficile à prouver. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — sans preuve, mieux vaut ne pas signaler.", score: 0},
          {text: "J'en parle à quelqu'un de confiance.", score: 1},
          {text: "Je signale avec les éléments factuels que j'ai, même s'ils sont incomplets.", score: 2}
          ]
        },
        {
          text: "Vous devez conseiller votre organisation sur un sujet où vous avez un intérêt financier personnel non déclaré. Que faites-vous ?",
          answers: [
          {text: "Je donne le meilleur conseil possible — mes intérêts financiers n'influencent pas ma recommandation.", score: 0},
          {text: "Je minimise mon implication dans ce dossier.", score: 1},
          {text: "Je déclare l'intérêt financier avant de me positionner sur ce sujet.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous avez identifié une situation de conflit d'intérêts. Que documentez-vous ?",
          answers: [
          {text: "Je note la situation dans un email à moi-même.", score: 0},
          {text: "Je remplis le registre prévu si je le connais.", score: 1},
          {text: "Je documente les faits précis, les relations en jeu, les décisions potentiellement affectées et je transmets aux personnes compétentes.", score: 2}
          ]
        },
        {
          text: "Vous avez signalé un conflit d'intérêts mais rien n'a changé dans le processus de décision. Que faites-vous ?",
          answers: [
          {text: "J'ai fait ma part — le reste appartient à la hiérarchie.", score: 0},
          {text: "Je relance.", score: 1},
          {text: "Je demande une confirmation formelle du traitement de ma déclaration.", score: 2}
          ]
        },
        {
          text: "Un collègue vous confie être dans une situation de conflit d'intérêts. Il ne sait pas quoi faire. Que faites-vous ?",
          answers: [
          {text: "Je lui conseille d'en parler à son responsable.", score: 0},
          {text: "Je l'aide à évaluer si c'est réellement un conflit.", score: 1},
          {text: "Je lui explique la procédure de déclaration et l'oriente vers la personne compétente.", score: 2}
          ]
        },
        {
          text: "Vous êtes dans une situation de conflit d'intérêts que vous avez déclarée. Votre organisation prend du temps à statuer. Que faites-vous ?",
          answers: [
          {text: "Je continue à agir en attendant.", score: 0},
          {text: "Je limite mon implication dans le dossier.", score: 1},
          {text: "Je ne prends aucune décision sur le dossier concerné jusqu'à avoir une réponse formelle.", score: 2}
          ]
        },
        {
          text: "Vous avez déclaré une situation mais la réponse de votre organisation vous semble incomplète. Que faites-vous ?",
          answers: [
          {text: "J'accepte la réponse — j'ai fait ce qu'il fallait.", score: 0},
          {text: "Je pose des questions supplémentaires.", score: 1},
          {text: "Je m'assure que la réponse couvre vraiment la situation et relance si nécessaire.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre équipe ne semble pas connaître les règles sur les conflits d'intérêts. Que faites-vous ?",
          answers: [
          {text: "Je laisse le service compliance s'en occuper.", score: 0},
          {text: "Je sensibilise de façon informelle.", score: 1},
          {text: "Je cherche à intégrer le sujet dans un moment d'équipe de façon concrète.", score: 2}
          ]
        },
        {
          text: "Les règles sur les conflits d'intérêts de votre organisation sont vagues. Que faites-vous ?",
          answers: [
          {text: "J'interprète les règles selon mon jugement.", score: 0},
          {text: "Je demande des précisions à la compliance.", score: 1},
          {text: "Je demande des précisions et propose des exemples concrets pour clarifier l'application.", score: 2}
          ]
        },
        {
          text: "Un collègue minimise l'importance de déclarer ses conflits d'intérêts. Que faites-vous ?",
          answers: [
          {text: "Je le laisse — c'est sa responsabilité.", score: 0},
          {text: "Je lui explique brièvement pourquoi c'est important.", score: 1},
          {text: "J'engage une discussion factuelle sur les risques réels pour lui et pour l'organisation.", score: 2}
          ]
        },
        {
          text: "Vous avez eu une situation de conflit d'intérêts passée non déclarée. Que faites-vous maintenant ?",
          answers: [
          {text: "Je laisse passer — c'est du passé.", score: 0},
          {text: "Je prends note pour l'avenir.", score: 1},
          {text: "Je consulte la compliance pour comprendre si je dois régulariser la situation.", score: 2}
          ]
        },
        {
          text: "Votre organisation n'a pas de registre formel des conflits d'intérêts. Que faites-vous ?",
          answers: [
          {text: "Je fais de mon mieux avec ce qui existe.", score: 0},
          {text: "Je demande si un registre pourrait être créé.", score: 1},
          {text: "Je propose concrètement comment mettre en place un registre simple.", score: 2}
          ]
        }
    ],
  },

  "cadeaux-invitations": {
    0: [
        {
          text: "Un fournisseur vous offre un cadeau modeste (bouteille de vin, chocolats) lors d'une visite de fin d'année. Que faites-vous ?",
          answers: [
          {text: "J'accepte — c'est un geste habituel.", score: 0},
          {text: "J'accepte mais je le signale à mon responsable.", score: 1},
          {text: "Je vérifie la politique de mon organisation avant d'accepter ou de refuser.", score: 2}
          ]
        },
        {
          text: "Vous recevez une invitation à un événement sportif haut de gamme de la part d'un prestataire en cours de négociation. Que faites-vous ?",
          answers: [
          {text: "J'accepte — c'est une opportunité de renforcer la relation.", score: 0},
          {text: "Je refuse par précaution.", score: 1},
          {text: "Je refuse et le signale à la compliance — le timing crée un risque réel d'influence.", score: 2}
          ]
        },
        {
          text: "Un fournisseur vous offre un cadeau dont la valeur dépasse clairement les seuils de votre politique. Que faites-vous ?",
          answers: [
          {text: "Je l'accepte — refuser serait gênant.", score: 0},
          {text: "Je le prends et en informe mon responsable.", score: 1},
          {text: "Je le refuse poliment en expliquant la politique de mon organisation.", score: 2}
          ]
        },
        {
          text: "Lors d'un déplacement chez un client, il vous offre un cadeau de valeur. Vous n'avez pas votre politique en tête. Que faites-vous ?",
          answers: [
          {text: "J'accepte et je vérifierai plus tard.", score: 0},
          {text: "Je le prends en précisant que je dois vérifier si c'est conforme.", score: 1},
          {text: "Je reporte l'acceptation au lendemain le temps de vérifier.", score: 2}
          ]
        },
        {
          text: "Un cadeau vous est offert par un partenaire dans un contexte culturel où c'est la norme. Que faites-vous ?",
          answers: [
          {text: "J'accepte — les normes culturelles justifient l'exception.", score: 0},
          {text: "J'accepte mais je note la situation.", score: 1},
          {text: "J'accepte si la valeur est raisonnable et je le déclare à la compliance en précisant le contexte.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous avez organisé un événement client avec une hospitalité généreuse. Votre responsable vous questionne. Que faites-vous ?",
          answers: [
          {text: "Je défends mes choix — c'est dans l'intérêt de la relation client.", score: 0},
          {text: "Je m'explique en précisant le contexte.", score: 1},
          {text: "Je fournis les éléments de justification et m'assure que cela a été validé par les bonnes personnes en amont.", score: 2}
          ]
        },
        {
          text: "Vous êtes invité à un voyage professionnel offert par un partenaire. Votre conjoint(e) peut vous accompagner aux frais du partenaire. Que faites-vous ?",
          answers: [
          {text: "J'accepte — c'est une pratique courante dans ce secteur.", score: 0},
          {text: "J'accepte pour moi mais pas pour mon conjoint(e).", score: 1},
          {text: "Je vérifie la politique de mon organisation et je n'accepte que ce qui est clairement autorisé.", score: 2}
          ]
        },
        {
          text: "Un client vous propose de vous rembourser un voyage personnel en échange d'un service. Que faites-vous ?",
          answers: [
          {text: "J'évalue si c'est vraiment problématique.", score: 0},
          {text: "Je refuse mais sans explication.", score: 1},
          {text: "Je refuse clairement et documente la proposition reçue.", score: 2}
          ]
        },
        {
          text: "Vous invitez un partenaire à un événement d'entreprise de valeur. Votre politique ne précise pas si c'est permis pour ce type d'événement. Que faites-vous ?",
          answers: [
          {text: "Je l'invite — si ce n'est pas interdit, c'est permis.", score: 0},
          {text: "Je demande à mon responsable.", score: 1},
          {text: "Je consulte la compliance ou la politique pour m'assurer que l'invitation est conforme.", score: 2}
          ]
        },
        {
          text: "Vous voulez offrir un cadeau de fin d'année à un client. Vous ne savez pas si sa politique lui permet de l'accepter. Que faites-vous ?",
          answers: [
          {text: "Je l'envoie — s'il ne peut pas l'accepter, il me le dira.", score: 0},
          {text: "Je lui demande avant d'envoyer.", score: 1},
          {text: "Je vérifie sa politique ou je choisis un cadeau symbolique qui ne pose pas de problème.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous avez reçu un cadeau que vous pensiez pouvoir accepter. En le redéclarant à votre service compliance, ils disent qu'il dépasse le seuil. Que faites-vous ?",
          answers: [
          {text: "Je le garde — je l'avais accepté de bonne foi.", score: 0},
          {text: "Je propose de le reverser à une association.", score: 1},
          {text: "Je suis les instructions de la compliance sur la façon de gérer la situation.", score: 2}
          ]
        },
        {
          text: "Vous pensez que votre organisation est trop restrictive sur les cadeaux et invitations. Que faites-vous ?",
          answers: [
          {text: "J'applique les règles mais avec réticence.", score: 0},
          {text: "J'exprime mon désaccord et applique quand même.", score: 1},
          {text: "J'applique les règles et propose une révision via les voies appropriées si je pense qu'elles peuvent être améliorées.", score: 2}
          ]
        },
        {
          text: "Un partenaire offre un cadeau à votre équipe (pas à vous personnellement). Que faites-vous ?",
          answers: [
          {text: "Je laisse l'équipe gérer.", score: 0},
          {text: "Je m'assure que le cadeau est modeste.", score: 1},
          {text: "Je traite ça comme si c'était un cadeau personnel — je vérifie la conformité et déclare si nécessaire.", score: 2}
          ]
        },
        {
          text: "Vous avez refusé une invitation et votre partenaire l'a mal vécu. Que faites-vous ?",
          answers: [
          {text: "Je regrette mon refus — la relation est plus importante.", score: 0},
          {text: "J'explique ma position sans m'excuser.", score: 1},
          {text: "Je lui explique honnêtement les contraintes de ma politique sans sous-entendre que les règles sont excessives.", score: 2}
          ]
        },
        {
          text: "Vous avez accepté une invitation qui rétrospectivement dépasse les limites admissibles. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — ce qui est fait est fait.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je le déclare à la compliance et propose comment gérer la situation.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre équipe ne connaît pas vraiment les règles sur les cadeaux et invitations. Que faites-vous ?",
          answers: [
          {text: "Je laisse le service compliance gérer la formation.", score: 0},
          {text: "Je leur explique les grandes lignes.", score: 1},
          {text: "Je crée un moment concret pour partager des exemples pratiques et les aider à naviguer.", score: 2}
          ]
        },
        {
          text: "Les règles de votre organisation sur les cadeaux sont complexes et personne ne les applique vraiment. Que faites-vous ?",
          answers: [
          {text: "Je fais comme tout le monde.", score: 0},
          {text: "J'applique pour moi en restant prudent.", score: 1},
          {text: "Je remonte la situation à la compliance avec des exemples pour qu'une simplification soit envisagée.", score: 2}
          ]
        },
        {
          text: "Un collègue accepte régulièrement des invitations qui semblent dépasser les seuils. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle de surveiller les autres.", score: 0},
          {text: "Je lui en parle discrètement.", score: 1},
          {text: "Je l'aborde de façon factuelle ou en réfère à la compliance si le sujet est sérieux.", score: 2}
          ]
        },
        {
          text: "Votre secteur a une culture d'hospitalité forte qui entre en tension avec votre politique interne. Que faites-vous ?",
          answers: [
          {text: "J'adapte mes pratiques à la culture du secteur.", score: 0},
          {text: "J'applique ma politique interne même si c'est inconfortable.", score: 1},
          {text: "J'applique ma politique et cherche des façons de maintenir la relation sans franchir les limites.", score: 2}
          ]
        },
        {
          text: "Vous n'avez jamais eu de formation sur les règles cadeaux et invitations. Que faites-vous ?",
          answers: [
          {text: "Je me débrouille avec mon bon sens.", score: 0},
          {text: "Je cherche la politique interne.", score: 1},
          {text: "Je cherche la politique ET je demande à la compliance de me clarifier les points ambigus.", score: 2}
          ]
        }
    ],
  },

  "alerte-ethique": {
    0: [
        {
          text: "Vous observez une situation potentiellement illégale dans votre organisation mais vous n'en êtes pas certain. Que faites-vous ?",
          answers: [
          {text: "J'attends d'être certain avant d'agir.", score: 0},
          {text: "J'en parle à un collègue de confiance.", score: 1},
          {text: "Je consulte le dispositif d'alerte ou la compliance pour décrire ce que j'ai observé.", score: 2}
          ]
        },
        {
          text: "Vous suspectez une fraude mineure dans votre équipe. Les faits sont fragmentaires. Que faites-vous ?",
          answers: [
          {text: "J'attends d'avoir plus d'éléments.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je signale les éléments que j'ai via le canal prévu, en précisant leur caractère fragmentaire.", score: 2}
          ]
        },
        {
          text: "Vous avez observé quelque chose d'inquiétant mais vous craignez de vous tromper et de nuire à quelqu'un injustement. Que faites-vous ?",
          answers: [
          {text: "Je ne signale pas — le risque d'injustice est trop grand.", score: 0},
          {text: "J'en parle anonymement.", score: 1},
          {text: "Je signale en étant transparent sur mes doutes et les limites de ce que j'ai observé.", score: 2}
          ]
        },
        {
          text: "Vous avez identifié une pratique illégale. Elle implique votre responsable direct. Que faites-vous ?",
          answers: [
          {text: "Je ne signale pas — ma hiérarchie directe est concernée.", score: 0},
          {text: "Je cherche quelqu'un d'autre à alerter dans ma hiérarchie.", score: 1},
          {text: "Je signale via un canal indépendant de ma hiérarchie directe (compliance, référent éthique).", score: 2}
          ]
        },
        {
          text: "Vous voyez quelque chose d'anormal mais vous ne connaissez pas le canal de signalement. Que faites-vous ?",
          answers: [
          {text: "Je ne signale pas faute de savoir comment.", score: 0},
          {text: "Je cherche quelqu'un à qui en parler.", score: 1},
          {text: "Je prends le temps de trouver le bon canal avant de me décourager.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous souhaitez signaler mais vous craignez des représailles. Que faites-vous ?",
          answers: [
          {text: "Je renonce — les représailles sont trop risquées.", score: 0},
          {text: "Je signale anonymement.", score: 1},
          {text: "Je me renseigne sur les protections auxquelles j'ai droit avant de décider.", score: 2}
          ]
        },
        {
          text: "Vous avez signalé et votre responsable vous a demandé d'expliquer d'où venait votre information. Que faites-vous ?",
          answers: [
          {text: "Je lui explique en détail.", score: 0},
          {text: "Je minimise les informations partagées.", score: 1},
          {text: "Je rappelle que la confidentialité du signalement doit être respectée et que je ne peux pas en dire plus.", score: 2}
          ]
        },
        {
          text: "Un collègue a également observé la situation et hésite à signaler. Que faites-vous ?",
          answers: [
          {text: "Je le laisse décider.", score: 0},
          {text: "Je l'encourage à signaler.", score: 1},
          {text: "Je lui explique le dispositif disponible et les protections qui existent, et je lui laisse la décision.", score: 2}
          ]
        },
        {
          text: "Vous avez signalé mais vous n'avez aucun retour depuis plusieurs semaines. Que faites-vous ?",
          answers: [
          {text: "J'attends — les procédures prennent du temps.", score: 0},
          {text: "Je relance informellement.", score: 1},
          {text: "Je relance formellement pour demander une confirmation de la prise en compte de mon signalement.", score: 2}
          ]
        },
        {
          text: "Vous avez signalé une situation mais les faits sont difficiles à documenter. Que faites-vous ?",
          answers: [
          {text: "Je retire mon signalement — sans preuve, il est fragile.", score: 0},
          {text: "Je maintiens mon signalement tel quel.", score: 1},
          {text: "Je maintiens mon signalement en précisant clairement les limites de ce que je peux prouver.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous devez mettre par écrit votre observation pour le signalement. Que faites-vous ?",
          answers: [
          {text: "Je décris la situation telle que je la comprends globalement.", score: 0},
          {text: "Je note les faits principaux.", score: 1},
          {text: "Je décris uniquement les faits observés directement, en séparant les faits de mes interprétations.", score: 2}
          ]
        },
        {
          text: "Vous avez des éléments à l'appui de votre signalement (documents, emails). Que faites-vous ?",
          answers: [
          {text: "Je les garde — je ne sais pas si je dois les fournir.", score: 0},
          {text: "Je les transmets avec mon signalement.", score: 1},
          {text: "Je les conserve de façon sécurisée et je les transmets uniquement via le canal prévu.", score: 2}
          ]
        },
        {
          text: "Votre signalement pourrait exposer des informations confidentielles. Que faites-vous ?",
          answers: [
          {text: "Je ne signale pas pour protéger la confidentialité.", score: 0},
          {text: "Je signale sans les informations confidentielles.", score: 1},
          {text: "Je consulte la compliance sur la façon de signaler sans compromettre la confidentialité nécessaire.", score: 2}
          ]
        },
        {
          text: "Vous hésitez à mettre votre nom sur un signalement. Que faites-vous ?",
          answers: [
          {text: "Je ne signale pas — je ne veux pas être identifié.", score: 0},
          {text: "Je signale anonymement.", score: 1},
          {text: "Je m'informe sur les options disponibles : signalement anonyme, canal confidentiel, référent éthique.", score: 2}
          ]
        },
        {
          text: "Vous avez signalé une situation. On vous demande de garder le silence pendant l'enquête. Que faites-vous ?",
          answers: [
          {text: "Je continue à en parler à mes proches de confiance.", score: 0},
          {text: "J'accepte de garder le silence.", score: 1},
          {text: "J'accepte et je demande à quelle échéance je peux espérer un retour.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous avez signalé une situation qui s'avère finalement non fondée après enquête. Que faites-vous ?",
          answers: [
          {text: "Je regrette d'avoir signalé — c'était une erreur.", score: 0},
          {text: "Je prends la décision au sérieux pour l'avenir.", score: 1},
          {text: "Je maintiens que signaler était la bonne décision — l'enquête a fait son travail.", score: 2}
          ]
        },
        {
          text: "Votre organisation traite peu visiblement les alertes éthiques reçues. Que faites-vous ?",
          answers: [
          {text: "Je perds confiance dans le dispositif.", score: 0},
          {text: "Je signale quand même en cas de besoin.", score: 1},
          {text: "Je signale l'opacité à la compliance ou aux instances compétentes.", score: 2}
          ]
        },
        {
          text: "Vous constatez que peu de personnes dans votre organisation connaissent le dispositif d'alerte. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle de le diffuser.", score: 0},
          {text: "Je le mentionne informellement.", score: 1},
          {text: "Je cherche une occasion de le faire connaître concrètement dans mon entourage.", score: 2}
          ]
        },
        {
          text: "Vous avez utilisé le dispositif d'alerte et l'expérience a été difficile. Que faites-vous a posteriori ?",
          answers: [
          {text: "Je me dis que je ne recommencerai pas.", score: 0},
          {text: "J'en tire des leçons pour moi.", score: 1},
          {text: "Je cherche à comprendre ce qui aurait pu être mieux géré et je partage ce retour si je peux.", score: 2}
          ]
        },
        {
          text: "Un collègue vous demande votre avis sur sa décision de signaler ou non. Que faites-vous ?",
          answers: [
          {text: "Je lui donne mon opinion sur la situation.", score: 0},
          {text: "Je l'encourage à signaler.", score: 1},
          {text: "Je l'aide à clarifier ce qu'il a observé et l'oriente vers le bon canal — sans décider à sa place.", score: 2}
          ]
        }
    ],
  },

  "manager-compliance": {
    0: [
        {
          text: "Votre équipe est confrontée à une zone grise éthique. Personne ne sait quelle règle s'applique. Que faites-vous ?",
          answers: [
          {text: "Je tranche selon mon jugement.", score: 0},
          {text: "Je cherche la règle applicable moi-même.", score: 1},
          {text: "Je contacte la compliance pour obtenir une interprétation officielle.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous signale une situation qui lui semble douteuse mais il hésite à qualifier. Que faites-vous ?",
          answers: [
          {text: "Je le rassure que tout va bien.", score: 0},
          {text: "Je l'écoute et je décide si c'est vraiment un problème.", score: 1},
          {text: "Je l'aide à décrire les faits objectivement et je l'oriente vers le bon canal.", score: 2}
          ]
        },
        {
          text: "Votre équipe est confrontée à une demande d'un client qui semble en tension avec les règles de compliance. Que faites-vous ?",
          answers: [
          {text: "J'essaie de satisfaire le client dans les limites que je comprends.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je consulte la compliance avant de répondre au client.", score: 2}
          ]
        },
        {
          text: "Une règle de compliance semble excessive à votre équipe et personne ne la respecte vraiment. Que faites-vous ?",
          answers: [
          {text: "Je m'aligne sur la pratique collective — si tout le monde fait pareil, c'est que la règle est inadaptée.", score: 0},
          {text: "Je l'applique pour moi sans intervenir sur l'équipe.", score: 1},
          {text: "Je l'applique et propose via les voies officielles une révision si elle est vraiment inadaptée.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous dit qu'une règle de compliance ne s'applique pas à son cas précis. Vous n'en êtes pas sûr. Que faites-vous ?",
          answers: [
          {text: "Je lui fais confiance — il connaît mieux son activité.", score: 0},
          {text: "Je cherche la réponse moi-même.", score: 1},
          {text: "Je cherche la confirmation auprès de la compliance avant de valider son interprétation.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un collaborateur vous consulte avant de prendre une décision qui pourrait poser un problème éthique. Que faites-vous ?",
          answers: [
          {text: "Je lui donne mon avis personnel.", score: 0},
          {text: "Je l'aide à réfléchir mais sans l'orienter vers un expert.", score: 1},
          {text: "Je lui pose des questions pour clarifier la situation et je l'oriente vers la compliance si nécessaire.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande s'il doit signaler une situation qu'il a observée. Que faites-vous ?",
          answers: [
          {text: "Je lui dis que c'est à lui de décider.", score: 0},
          {text: "Je l'encourage à signaler.", score: 1},
          {text: "Je l'aide à évaluer objectivement la situation et je lui explique comment signaler si c'est la bonne décision.", score: 2}
          ]
        },
        {
          text: "Votre équipe traite des informations confidentielles et vous avez un doute sur si les pratiques actuelles respectent les règles. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — les pratiques ont toujours été comme ça.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je consulte la compliance pour vérifier la conformité des pratiques.", score: 2}
          ]
        },
        {
          text: "Un collaborateur refuse de se plier à une règle de compliance qu'il trouve injuste. Que faites-vous ?",
          answers: [
          {text: "Je lui laisse le choix — la règle est effectivement discutable.", score: 0},
          {text: "Je lui dis qu'il doit s'y conformer.", score: 1},
          {text: "Je lui explique pourquoi la règle existe, je l'écoute et je propose de remonter son retour par les voies officielles.", score: 2}
          ]
        },
        {
          text: "Votre équipe est confrontée à une pression commerciale qui l'incite à assouplir certaines règles. Que faites-vous ?",
          answers: [
          {text: "Je cherche un compromis.", score: 0},
          {text: "Je maintiens les règles sans explication.", score: 1},
          {text: "Je maintiens les règles ET j'alerte ma hiérarchie sur la pression subie.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un problème éthique que vous aviez identifié dans votre équipe a été signalé à votre place par quelqu'un d'autre. Que faites-vous ?",
          answers: [
          {text: "Je suis soulagé — quelqu'un d'autre a géré.", score: 0},
          {text: "Je regarde comment la situation est traitée.", score: 1},
          {text: "Je coopère pleinement avec l'enquête et j'examine pourquoi je n'avais pas encore agi.", score: 2}
          ]
        },
        {
          text: "Un signalement concerne un comportement dans votre équipe. On vous interroge. Que faites-vous ?",
          answers: [
          {text: "Je défends mon équipe.", score: 0},
          {text: "Je coopère à l'enquête en répondant aux questions.", score: 1},
          {text: "Je coopère pleinement, je fournis les faits objectivement et je reste neutre dans mes interprétations.", score: 2}
          ]
        },
        {
          text: "Vous identifiez une pratique non conforme dans votre équipe que vous n'avez pas initiée vous-même. Que faites-vous ?",
          answers: [
          {text: "Je ferme les yeux — je n'en suis pas responsable.", score: 0},
          {text: "J'en parle informellement au collaborateur concerné.", score: 1},
          {text: "Je traite la non-conformité formellement, quelle que soit son origine.", score: 2}
          ]
        },
        {
          text: "Une non-conformité dans votre équipe remonte à avant votre prise de poste. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon problème — c'était avant moi.", score: 0},
          {text: "Je corrige la pratique pour l'avenir.", score: 1},
          {text: "Je déclare la situation à la compliance et je traite le passé comme le présent.", score: 2}
          ]
        },
        {
          text: "Vous devez donner un feedback à un collaborateur sur un comportement éthiquement limite. Que faites-vous ?",
          answers: [
          {text: "Je lui exprime mes valeurs personnelles.", score: 0},
          {text: "Je lui rappelle les règles.", score: 1},
          {text: "Je m'appuie sur des faits précis, je lui explique l'impact et je lui indique le cadre applicable.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre équipe ne parle jamais d'éthique dans les réunions. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas le bon cadre pour ce type de discussion.", score: 0},
          {text: "Je soulève le sujet quand une occasion se présente.", score: 1},
          {text: "Je cherche à intégrer le sujet dans les rituels d'équipe de façon naturelle et concrète.", score: 2}
          ]
        },
        {
          text: "Des collaborateurs pensent que les règles de compliance ne s'appliquent pas à eux ou à leur activité. Que faites-vous ?",
          answers: [
          {text: "Je les laisse s'auto-réguler.", score: 0},
          {text: "Je leur rappelle que les règles sont universelles.", score: 1},
          {text: "Je crée un moment pour traiter des cas concrets liés à leur activité spécifique.", score: 2}
          ]
        },
        {
          text: "Les ressources de la compliance sont peu accessibles pour votre équipe. Que faites-vous ?",
          answers: [
          {text: "Je gère de mon mieux avec ce que j'ai.", score: 0},
          {text: "Je cherche le bon contact.", score: 1},
          {text: "Je remonte le problème d'accessibilité et facilite le lien entre mon équipe et les ressources compétentes.", score: 2}
          ]
        },
        {
          text: "Votre équipe a eu un incident éthique. Comment vous en assurez-vous que ça ne se reproduise pas ?",
          answers: [
          {text: "Je rappelle les règles après l'incident.", score: 0},
          {text: "Je cherche la cause de l'incident.", score: 1},
          {text: "J'analyse les causes profondes et j'intègre des garde-fous concrets dans les pratiques de l'équipe.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que les comportements éthiques sont surtout présents quand quelqu'un surveille. Que faites-vous ?",
          answers: [
          {text: "Je maintiens la surveillance — c'est efficace.", score: 0},
          {text: "Je cherche à réduire les opportunités de comportements non éthiques.", score: 1},
          {text: "Je travaille à créer une culture où les comportements éthiques sont internalisés, pas seulement conformes.", score: 2}
          ]
        }
    ],
  },

  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("ethique", "Éthique & compliance", "⚖️", [
    ["conflits-interets",  "Repérer les conflits d'intérêts",       "Tous publics", "Identifier les zones grises, déclarer et demander conseil avant que la situation ne s'installe.", T.ethique],
    ["cadeaux-invitations","Cadeaux, invitations et avantages",      "Tous publics", "Savoir arbitrer entre relation professionnelle, usage courant et risque de dépendance.",         T.ethique],
    ["alerte-ethique",     "Alerter face à une situation sensible",  "Tous publics", "Réagir à un doute, documenter les faits et mobiliser le bon canal sans dramatiser.",             T.ethique],
    ["manager-compliance", "Faire vivre l'éthique dans son équipe", "Managers",     "Traiter les dilemmes, protéger la parole et installer des repères concrets.",                    T.ethique]
  ]);

})();
