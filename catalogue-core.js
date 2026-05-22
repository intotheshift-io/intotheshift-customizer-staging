/**
 * catalogue-core.js — INTO THE SHIFT
 * Infrastructure partagée : helpers, templates, enregistrement des ADs.
 * Doit être chargé EN PREMIER avant tout autre fichier catalogue.
 *
 * @version 2.0.0
 * @see catalogue-init.js pour la validation au démarrage
 */

(function () {

  // ─────────────────────────────────────────────────────────────────────────
  //  BADGES
  // ─────────────────────────────────────────────────────────────────────────


  // ─────────────────────────────────────────────────────────────────────────
  //  BADGES
  // ─────────────────────────────────────────────────────────────────────────

  const BADGES = {
  IA:      "Base assistée par IA",
  REVIEW:  "Relecture obligatoire",
  AIDE:    "Aide à la rédaction",
  TBF:     "Conçu par The Big Factory"
};

  // ─────────────────────────────────────────────────────────────────────────
  //  THÈMES CLASSIQUES — réponses génériques
  // ─────────────────────────────────────────────────────────────────────────

  function answerSets(domain, seed) {
    const sets = {
      securite: [
        [
          { text: "Je laisse faire, car l'équipe connaît sûrement la situation.", score: 0 },
          { text: "Je fais une remarque rapide si le risque me semble important.", score: 1 },
          { text: "Je signale le point avec des faits précis et sans accuser.", score: 2 },
          { text: "Je contribue à clarifier la règle pour éviter que cela se reproduise.", score: 2 }
        ],
        [
          { text: "Je privilégie l'avancement, la vérification pourra attendre.", score: 0 },
          { text: "Je vérifie seulement les points qui me semblent les plus critiques.", score: 1 },
          { text: "Je maintiens l'étape de sécurité même si cela prend plus de temps.", score: 2 }
        ],
        [
          { text: "Je considère que chacun est responsable de ses propres gestes.", score: 0 },
          { text: "J'alerte discrètement si je suis directement concerné·e.", score: 1 },
          { text: "J'interviens avec tact pour éviter qu'un risque collectif s'installe.", score: 2 }
        ]
      ],
      qvt: [
        [
          { text: "Je laisse la personne gérer, chacun a sa manière de travailler.", score: 0 },
          { text: "Je prends des nouvelles de manière informelle si l'occasion se présente.", score: 1 },
          { text: "Je propose un échange factuel sur la charge ou les priorités.", score: 2 }
        ],
        [
          { text: "Je m'adapte, même si cela désorganise mon travail.", score: 0 },
          { text: "Je signale que c'est compliqué, sans forcément demander d'arbitrage.", score: 1 },
          { text: "Je clarifie les priorités et les délais avant de m'engager.", score: 2 }
        ],
        [
          { text: "J'évite d'intervenir pour ne pas créer de tension.", score: 0 },
          { text: "Je temporise et j'attends de voir si la situation se calme.", score: 1 },
          { text: "Je contribue à remettre les faits et les besoins au centre de l'échange.", score: 2 },
          { text: "Je mobilise un relais si la situation dépasse le cadre habituel.", score: 2 }
        ]
      ],
      management: [
        [
          { text: "J'avance avec les informations disponibles, quitte à ajuster plus tard.", score: 0 },
          { text: "Je demande quelques précisions mais sans formaliser le cadre.", score: 1 },
          { text: "Je clarifie les attendus, les rôles et les prochaines étapes.", score: 2 }
        ],
        [
          { text: "Je donne mon avis directement, même si la personne peut mal le prendre.", score: 0 },
          { text: "Je formule un retour général pour éviter d'être trop frontal·e.", score: 1 },
          { text: "Je m'appuie sur des faits précis et une piste d'amélioration concrète.", score: 2 }
        ],
        [
          { text: "Je considère que les personnes doivent s'adapter d'elles-mêmes.", score: 0 },
          { text: "J'accompagne ponctuellement quand une difficulté apparaît.", score: 1 },
          { text: "Je crée des repères réguliers pour soutenir l'autonomie et l'engagement.", score: 2 }
        ]
      ],
      environnement: [
        [
          { text: "Je fais comme d'habitude, l'impact est probablement limité.", score: 0 },
          { text: "Je choisis l'option la plus simple si elle reste raisonnable.", score: 1 },
          { text: "Je questionne l'impact réel et propose une option plus sobre.", score: 2 }
        ],
        [
          { text: "Je préfère éviter le sujet pour ne pas passer pour moralisateur·rice.", score: 0 },
          { text: "Je suggère une alternative si elle ne complique pas trop l'organisation.", score: 1 },
          { text: "Je propose un ajustement concret, réaliste et mesurable.", score: 2 }
        ],
        [
          { text: "Je traite l'urgence sans intégrer le critère environnemental.", score: 0 },
          { text: "Je cherche un compromis mais sans remettre en cause la demande.", score: 1 },
          { text: "J'intègre l'impact environnemental dans l'arbitrage dès le départ.", score: 2 }
        ]
      ],
      ethique: [
        [
          { text: "Je règle la situation rapidement, puisqu'elle paraît mineure.", score: 0 },
          { text: "Je demande un avis informel à une personne de confiance.", score: 1 },
          { text: "Je vérifie le cadre applicable avant de décider.", score: 2 },
          { text: "Je trace ou signale le point si le risque est réel.", score: 2 }
        ],
        [
          { text: "Je garde l'information pour moi afin d'éviter de compliquer la relation.", score: 0 },
          { text: "J'attends de voir si la situation se confirme.", score: 1 },
          { text: "Je documente les faits et j'utilise le bon canal de conseil ou d'alerte.", score: 2 }
        ],
        [
          { text: "Je me fie à mon intuition, car les règles ne couvrent pas tout.", score: 0 },
          { text: "Je cherche une solution prudente sans forcément formaliser.", score: 1 },
          { text: "Je clarifie le risque, les personnes concernées et la règle à appliquer.", score: 2 }
        ]
      ],
      sec_nucl: [
        [
          { text: "Je fais confiance au retour de l'équipe et poursuis l'opération.", score: 0 },
          { text: "Je note le point et le signale en fin d'opération.", score: 1 },
          { text: "Je stoppe, signale formellement et attends une validation avant de reprendre.", score: 2 }
        ],
        [
          { text: "Je m'appuie sur l'expérience collective — la procédure peut être adaptée.", score: 0 },
          { text: "J'interpelle le responsable sans bloquer l'opération.", score: 1 },
          { text: "Je remonte le point formellement et n'avance pas sans validation claire.", score: 2 }
        ],
        [
          { text: "Je laisse passer : l'écart est mineur et n'a pas eu de conséquence.", score: 0 },
          { text: "J'en parle informellement à un collègue pour avoir son avis.", score: 1 },
          { text: "Je déclenche le processus de signalement prévu, même pour un écart apparemment mineur.", score: 2 },
          { text: "Je documente et contribue à l'analyse de retour d'expérience.", score: 2 }
        ]
      ],
      sec_btp: [
        [
          { text: "Je continue : la pression du planning ne laisse pas d'autre choix.", score: 0 },
          { text: "Je signale verbalement mais ne bloque pas les travaux.", score: 1 },
          { text: "Je stoppe l'activité concernée jusqu'à correction de la situation.", score: 2 }
        ],
        [
          { text: "Je laisse l'encadrement gérer : ce n'est pas directement ma zone.", score: 0 },
          { text: "J'alerte verbalement la personne concernée.", score: 1 },
          { text: "Je signale formellement et m'assure que la correction est effectuée.", score: 2 },
          { text: "Je contribue à trouver une solution immédiate et documente le problème.", score: 2 }
        ],
        [
          { text: "Je finalise la tâche en cours avant d'agir.", score: 0 },
          { text: "Je vérifie l'urgence réelle avant d'intervenir.", score: 1 },
          { text: "Je réagis immédiatement pour éviter toute aggravation.", score: 2 }
        ]
      ]
    };
    const selected = sets[domain] || sets.management;
    return selected[seed % selected.length];
  }

  // ─────────────────────────────────────────────────────────────────────────
  //  THÈMES CLASSIQUES — profils génériques
  //  Seuils : 0 → 0.99 → 1.59 → 2 (bornes jointes)
  // ─────────────────────────────────────────────────────────────────────────

  function makeProfiles(chapterTitle) {
    return [
      {
        level: "Repères à consolider",
        min: 0, max: 0.99,
        title: "Repères à consolider — " + chapterTitle,
        summary: "Les réflexes existent, mais restent encore irréguliers.",
        description: "Sur cette dimension, les repères ne sont pas encore assez stables pour guider les décisions dans les situations moins évidentes. L'enjeu est de mieux identifier les situations sensibles et de s'appuyer davantage sur le cadre, les faits ou les bons relais."
      },
      {
        level: "Pratiques en construction",
        min: 0.99, max: 1.59,
        title: "Pratiques en construction — " + chapterTitle,
        summary: "Les pratiques sont présentes, mais peuvent se fragiliser dans les zones grises.",
        description: "Sur cette dimension, les bases sont présentes. L'enjeu est maintenant de gagner en constance, de mieux formaliser les arbitrages et de ne pas rester seul·e face aux situations ambiguës."
      },
      {
        level: "Réflexes installés",
        min: 1.59, max: 2,
        title: "Réflexes installés — " + chapterTitle,
        summary: "Les réflexes sont structurés et mobilisables dans le quotidien.",
        description: "Sur cette dimension, les comportements sont installés. Ils peuvent devenir un point d'appui pour le collectif, notamment pour clarifier les règles, sécuriser les pratiques et encourager des décisions plus responsables."
      }
    ];
  }

  // ─────────────────────────────────────────────────────────────────────────
  //  V2 — VARIATION PAR AUTODIAG
  //  Calcule un offset déterministe à partir du préfixe (ID de l'AD)
  //  pour que chaque autodiag pioche dans une zone différente de la bank
  // ─────────────────────────────────────────────────────────────────────────

  const VARIANT_OFFSETS = {
    "culture-securite-terrain":    0,
    "presquaccidents-signalement":  5,
    "acces-sites-surete":          10,
    "managers-securite":           15,
    "coactivite-sous-traitance":    20,
    "epi-gestes-securite":          25,
    "securite-manager-arbitrage":   30,
    "securite-nucleaire":            0,
    "securite-chantier-btp":         0,
    "rps-signaux-faibles":          0,
    "charge-priorites":             5,
    "cooperation-climat":          10,
    "manager-qvt-rps":             15,
    "teletravail-hybridation":     20,
    "epuisement-prevention":       30,
    "retour-apres-absence":        35,
    "manager-signaux-rps":         40,
    "changement-reflexes":          0,
    "feedback-managerial":          5,
    "manager-engageant-tbf":       10,
    "pilotage-projet":             15,
    "conduite-changement":         20,
    "arbitrage-priorisation":      25,
    "collaboration-interequipes":  31,
    "responsabilisation-equipe":   40,
    "transformation-digitale":     50,
    "sobriete-quotidien":           0,
    "dechets-ressources":           5,
    "achats-responsables":         10,
    "manager-transition-eco":      15,
    "numerique-responsable":       20,
    "deplacements-sobriete":       25,
    "achats-impact":               30,
    "engagement-rse":              37,
    "manager-rse-equipe":          44,
    "conflits-interets":            0,
    "cadeaux-invitations":          5,
    "alerte-ethique":              10,
    "manager-compliance":          15
  };

  function makeVariantOffset(prefix) {
    return VARIANT_OFFSETS[prefix] || 0;
  }

  // ─────────────────────────────────────────────────────────────────────────
  //  V2 — TAGS MÉTIER PAR CHAPITRE
  //  Enrichit chaque question avec des tags spécifiques au domaine et au
  //  chapitre, utiles pour le filtrage, les analytics et les futures IA
  // ─────────────────────────────────────────────────────────────────────────

  function chaptersTags(domain, chapterIndex) {
    var map = {
      securite: [
        ["Risque terrain", "Observation", "Prévention", "EPI", "Détection"],
        ["Gestes sûrs", "Pression opérationnelle", "Réflexes", "Procédure", "EPI"],
        ["Collectif", "Intervention", "Culture sécurité", "Coactivité", "Sous-traitance"],
        ["Signalement", "Alerte", "REX", "Presqu'accident", "Urgence opérationnelle"]
      ],
      sec_nucl: [
        ["Nucléaire", "Questioning attitude", "Rigueur", "Sûreté"],
        ["Nucléaire", "Procédure", "Référentiel", "Gamme opératoire"],
        ["Nucléaire", "Situation imprévue", "Escalade", "Sûreté"],
        ["Nucléaire", "Déclaration", "REX", "Culture de sûreté"]
      ],
      sec_btp: [
        ["BTP", "Chantier", "EPI", "EPC", "Risque terrain"],
        ["BTP", "Coactivité", "Corps de métier", "Coordination chantier"],
        ["BTP", "PPSPS", "Permis de travail", "Habilitation"],
        ["BTP", "Incident chantier", "Urgence", "Signalement"]
      ],
      qvt: [
        ["Signaux faibles", "RPS", "Vigilance", "Isolement", "Prévention"],
        ["Charge de travail", "Priorisation", "Urgences", "Épuisement professionnel", "Droit à la déconnexion"],
        ["Relations", "Coopération", "Tensions", "Climat de travail", "Télétravail"],
        ["Relais RH", "Alerte", "Soutien", "Retour d'absence", "Orientation"]
      ],
      management: [
        ["Cadre", "Clarté", "Rôles", "Changement", "Transformation"],
        ["Incertitude", "Coopération", "Agilité", "Résistance au changement", "Arbitrage"],
        ["Feedback", "Communication", "Retour", "Responsabilisation", "Engagement"],
        ["Pratiques", "Ancrage", "Autonomie", "Collaboration interéquipes", "Transformation digitale"]
      ],
      environnement: [
        ["RSE", "Impact", "Gestes quotidiens", "Empreinte", "Énergie"],
        ["Sobriété", "Arbitrage", "Choix", "Déchets", "Numérique responsable"],
        ["Coopération", "Achats responsables", "Déplacements", "Engagement", "Fournisseurs"],
        ["Durabilité", "Habitudes", "Long terme", "Managers", "Transition"]
      ],
      ethique: [
        ["Zone grise",    "Conformité",        "Risque"],
        ["Conseil",       "Doute",             "Conflit d'intérêts"],
        ["Documentation", "Alerte",            "Protection"],
        ["Culture",       "Règles",            "Vigilance"]
      ]
    };
    var domainTags = map[domain] || map.management;
    return domainTags[chapterIndex % domainTags.length] || [];
  }

  // ─────────────────────────────────────────────────────────────────────────
  //  THÈMES CLASSIQUES — banques de questions
  // ─────────────────────────────────────────────────────────────────────────

  const questionBanks = {
    securite: [
      "Une intervention prend du retard et l'équipe envisage de raccourcir une étape de vérification. Que faites-vous ?",
      "Vous remarquez qu'un équipement de protection est mal porté dans une zone active. Quelle réaction adoptez-vous ?",
      "Un prestataire externe intervient sans connaître clairement les règles du site. Que faites-vous ?",
      "Un presque-accident vient de se produire mais personne ne semble vouloir le signaler. Que faites-vous ?",
      "Une porte d'accès reste ouverte alors qu'elle devrait être fermée. Comment réagissez-vous ?",
      "Une personne inconnue circule dans une zone où l'accès est habituellement contrôlé. Que faites-vous ?",
      "Un collègue contourne une consigne pour gagner quelques minutes. Quelle est votre réaction ?",
      "Un objet encombre une zone de passage utilisée par plusieurs personnes. Que faites-vous ?",
      "Une alerte est minimisée avec la phrase : ça arrive souvent ici. Comment vous positionnez-vous ?",
      "Un matériel semble défectueux mais reste utilisé pour terminer une tâche. Que faites-vous ?",
      "Vous observez une situation dangereuse mais vous n'êtes pas directement responsable de l'activité. Que faites-vous ?",
      "Une consigne de sécurité vient de changer mais tout le monde n'a pas l'air informé. Quelle réaction adoptez-vous ?",
      "Une urgence opérationnelle pousse l'équipe à travailler dans la précipitation. Que privilégiez-vous ?",
      "Un signalement précédent n'a pas donné lieu à un retour visible. Comment réagissez-vous la fois suivante ?",
      "Vous constatez un écart répété entre la procédure et la pratique réelle. Que faites-vous ?",
      "Une personne nouvelle dans l'équipe hésite à poser une question sur une règle de sécurité. Que faites-vous ?",
      "Une zone est mal rangée après une intervention. Quelle réaction adoptez-vous ?",
      "Un accès badge est prêté pour dépanner quelqu'un. Que faites-vous ?",
      "Un briefing sécurité est écourté car la journée est chargée. Comment réagissez-vous ?",
      "Vous identifiez un risque qui concerne plusieurs équipes. Que faites-vous ?",
      "Deux équipes travaillent simultanément dans la même zone sans avoir coordonné leurs interventions. Que faites-vous ?",
      "Un sous-traitant réalise une tâche sans avoir reçu le plan de prévention. Quelle est votre réaction ?",
      "Un EPI obligatoire est inconfortable et ralentit l'exécution de la tâche. Comment réagissez-vous ?",
      "Un équipement de protection collectif a été déplacé sans raison apparente. Que faites-vous ?",
      "Une zone balisée est franchie par des personnes qui ne participent pas à l'intervention. Que faites-vous ?",
      "Un intervenant externe ne connaît pas les consignes de sécurité du site. Comment réagissez-vous ?",
      "Une tâche nécessite une habilitation spécifique, mais la personne disponible ne l'a pas. Que faites-vous ?",
      "Vous constatez qu'un EPI est endommagé mais encore utilisé. Quelle réaction adoptez-vous ?",
      "Un permis de travail est en cours mais les conditions ont changé depuis sa délivrance. Que faites-vous ?",
      "Une procédure d'urgence est affichée mais peu de personnes semblent la connaître. Comment réagissez-vous ?",
      "Un travailleur isolé n'a pas déclenché sa vérification périodique depuis un moment. Que faites-vous ?",
      "Vous observez de la fatigue visible chez un collègue qui doit réaliser une tâche à risque. Que faites-vous ?",
      "Un mode opératoire n'a pas été actualisé après un changement d'équipement. Quelle réaction adoptez-vous ?",
      "Une situation d'urgence survient mais le responsable sécurité n'est pas joignable. Que faites-vous ?",
      "Une consigne de sécurité semble inadaptée à la réalité du terrain. Comment vous positionnez-vous ?",
      "Un incident implique à la fois votre équipe et un prestataire. Qui doit prendre en charge le signalement ?",
      "Un exercice d'évacuation est programmé pendant une période de forte activité. Comment réagissez-vous ?",
      "Une étiquette de signalisation est illisible ou absente sur un équipement potentiellement dangereux. Que faites-vous ?",
      "Un accès à une zone dangereuse est possible sans habilitation requise en raison d'un défaut de balisage. Que faites-vous ?"
    ],
    sec_nucl: [
      "Vous constatez un écart entre la procédure écrite et la pratique réelle lors d'une opération. Que faites-vous ?",
      "Une déviation technique mineure survient en cours d'opération. L'équipe pense pouvoir la gérer sans escalade. Que faites-vous ?",
      "Vous avez un doute sur l'interprétation d'un référentiel technique mais la pression de délai est forte. Comment réagissez-vous ?",
      "Une gamme d'intervention comporte une étape ambiguë. Votre collègue l'interprète différemment de vous. Que faites-vous ?",
      "Un événement significatif de sûreté semble s'être produit mais aucun dommage n'est visible. Quelle réaction adoptez-vous ?",
      "Le chef de chantier vous demande de commencer une intervention avant que la consignation soit complète. Que faites-vous ?",
      "Vous êtes témoin d'un contournement de procédure qui n'a entraîné aucun incident. Comment vous positionnez-vous ?",
      "Une situation non prévue par les procédures se présente lors d'une opération. Que faites-vous ?",
      "Un collègue minimise l'importance d'un signalement car il pense que ça n'a pas de conséquence réelle. Quelle est votre réaction ?",
      "Vous identifiez un signal faible qui pourrait être précurseur d'un problème plus grave. Que faites-vous ?",
      "La pression de remise en service d'un équipement est forte, mais une question technique reste ouverte. Comment réagissez-vous ?",
      "Un prestataire habituel semble moins rigoureux dans l'application des règles. Que faites-vous ?",
      "Vous constatez qu'une modification temporaire d'installation n'a pas été correctement documentée. Que faites-vous ?",
      "Un retour d'expérience d'un autre site mentionne un incident similaire à une situation rencontrée chez vous. Comment réagissez-vous ?",
      "Vous avez eu un doute en cours d'opération mais avez continué. L'opération s'est bien passée. Que faites-vous a posteriori ?",
      "Un opérateur expérimenté déclare qu'une vérification systématique est inutile dans ce cas précis. Que faites-vous ?",
      "Une nouvelle recrue signale une anomalie que personne d'autre n'avait remarquée. Quelle réaction adoptez-vous ?",
      "Vous êtes fatigué en fin de poste et devez encore réaliser une vérification documentée. Que faites-vous ?",
      "Une situation ambiguë se présente entre une règle formelle et une pratique acceptée de longue date. Comment vous positionnez-vous ?",
      "Un défaut d'information pourrait induire un autre intervenant en erreur sur l'état d'un équipement. Que faites-vous ?"
    ],
    sec_btp: [
      "Vous débutez une journée sur chantier et constatez que le balisage de la veille a été modifié sans information. Que faites-vous ?",
      "Un engin de chantier manœuvre dans une zone piétonne sans signalement préalable. Quelle réaction adoptez-vous ?",
      "Une fouille est ouverte sans étaiement alors que le terrain est instable. Que faites-vous ?",
      "Vous devez travailler en hauteur mais le harnais disponible n'a pas été vérifié récemment. Comment réagissez-vous ?",
      "Deux corps de métier se trouvent simultanément dans la même zone sans coordination préalable. Que faites-vous ?",
      "Un chef de chantier demande d'avancer les travaux avant que les protections collectives ne soient en place. Quelle est votre réaction ?",
      "Un intérimaire commence une tâche risquée sans avoir reçu l'accueil sécurité chantier. Que faites-vous ?",
      "Les conditions météo se dégradent et rendent dangereuse la poursuite de certains travaux. Comment vous positionnez-vous ?",
      "Un matériel de levage est utilisé sans vérification périodique à jour. Quelle réaction adoptez-vous ?",
      "Les protections contre les chutes ne couvrent pas l'ensemble de la zone concernée. Que faites-vous ?",
      "Un sous-traitant ne respecte pas les consignes de sécurité spécifiques au chantier. Comment réagissez-vous ?",
      "Des travaux de soudure sont réalisés à proximité de matériaux inflammables non protégés. Que faites-vous ?",
      "Le délai est avancé et plusieurs équipes travaillent en même temps dans un espace réduit. Quelle réaction adoptez-vous ?",
      "Un permis de feu a expiré mais les travaux n'ont pas encore été terminés. Que faites-vous ?",
      "Vous constatez qu'une canalisation ou un câble n'est pas à l'endroit indiqué sur les plans. Comment réagissez-vous ?",
      "Un opérateur travaille seul dans une tranchée sans dispositif de surveillance. Quelle réaction adoptez-vous ?",
      "Des déchets de chantier sont stockés sur un cheminement d'évacuation d'urgence. Que faites-vous ?",
      "Un incident mineur survient mais l'équipe préfère ne pas le signaler pour ne pas ralentir le chantier. Comment vous positionnez-vous ?",
      "La réception de travaux révèle que certaines protections définitives n'ont pas été posées. Que faites-vous ?",
      "Un nouvel arrivant sur le chantier n'a pas eu de présentation des risques spécifiques de la zone. Quelle réaction adoptez-vous ?"
    ],
    qvt: [
      "Vous constatez qu'une personne répond régulièrement très tard le soir. Que faites-vous ?",
      "Une réunion est ajoutée à la dernière minute sur un créneau déjà saturé. Quelle réaction adoptez-vous ?",
      "Un livrable urgent crée des tensions entre deux équipes. Que faites-vous ?",
      "Vous avez du mal à tenir vos priorités mais personne ne semble disponible pour en parler. Comment réagissez-vous ?",
      "Un collègue semble s'isoler progressivement des échanges collectifs. Que faites-vous ?",
      "Une personne fait une remarque sèche en réunion après plusieurs semaines tendues. Quelle réaction adoptez-vous ?",
      "Une urgence est présentée comme prioritaire alors que tout est déjà prioritaire. Que faites-vous ?",
      "Vous recevez plusieurs demandes contradictoires dans la même journée. Comment vous positionnez-vous ?",
      "Un irritant récurrent crée de la fatigue dans l'équipe mais personne ne le traite. Que faites-vous ?",
      "Une personne minimise sa surcharge en disant qu'elle va tenir encore un peu. Quelle réaction adoptez-vous ?",
      "Une réunion déborde régulièrement sur les temps de pause ou de fin de journée. Que faites-vous ?",
      "Un désaccord de fond se transforme en tension personnelle. Comment réagissez-vous ?",
      "Une personne prend beaucoup de tâches supplémentaires sans demander d'aide. Que faites-vous ?",
      "Vous sentez que votre charge devient difficile à absorber durablement. Quelle réaction adoptez-vous ?",
      "Une décision organisationnelle crée de l'incompréhension et des rumeurs. Que faites-vous ?",
      "Un collègue vous confie une difficulté mais vous ne savez pas quoi répondre. Comment réagissez-vous ?",
      "Une équipe voisine sollicite souvent votre aide dans l'urgence. Que faites-vous ?",
      "Un canal de discussion devient le lieu de remarques tendues ou passives-agressives. Quelle réaction adoptez-vous ?",
      "Une personne revient après une absence et semble vouloir reprendre trop vite. Que faites-vous ?",
      "Une charge invisible repose toujours sur les mêmes personnes. Comment réagissez-vous ?",
      "En télétravail, vous finissez régulièrement votre journée bien après l'horaire habituel. Que faites-vous ?",
      "Un collègue en distanciel est de moins en moins réactif lors des réunions d'équipe. Quelle réaction adoptez-vous ?",
      "Vous constatez que les personnes en présentiel ont plus facilement accès aux décisions que celles à distance. Que faites-vous ?",
      "Une réunion hybride crée régulièrement un déséquilibre entre participants en salle et ceux à distance. Comment réagissez-vous ?",
      "Vous n'arrivez plus à déconnecter en fin de journée lors des semaines entièrement en télétravail. Quelle réaction adoptez-vous ?",
      "Un collègue en hybride semble moins bien informé que les autres des décisions prises en présentiel. Que faites-vous ?",
      "Votre espace de télétravail ne vous permet pas de travailler dans de bonnes conditions. Comment vous positionnez-vous ?",
      "Vous ressentez une forme d'isolement lors des semaines entièrement à distance. Que faites-vous ?",
      "Un désaccord surgit entre collègues sur le nombre de jours de présence attendus dans l'équipe. Quelle réaction adoptez-vous ?",
      "Vous observez que certains membres de l'équipe évitent systématiquement les jours en présentiel. Que faites-vous ?",
      "Vous vous réveillez régulièrement fatigué·e avant même de commencer la journée. Que faites-vous ?",
      "Des tâches qui vous plaisaient habituellement vous semblent désormais pesantes et difficiles. Quelle réaction adoptez-vous ?",
      "Vous avez du mal à vous souvenir des dernières fois où vous avez réellement récupéré. Que faites-vous ?",
      "Un collègue revient d'un arrêt maladie et semble vouloir rattraper immédiatement tout ce qu'il a manqué. Que faites-vous ?",
      "Vous sentez que vous n'arrivez plus à vous investir comme avant dans votre travail. Comment vous positionnez-vous ?",
      "Une personne en retour d'absence semble éviter de parler de ce qui s'est passé. Quelle réaction adoptez-vous ?",
      "Vous avez pris l'habitude de ne jamais refuser une demande supplémentaire, même quand vous êtes déjà saturé·e. Que faites-vous ?",
      "Un collègue vous confie qu'il envisage de prendre un arrêt mais qu'il hésite par peur du regard des autres. Que faites-vous ?",
      "Vous sentez que vos limites ne sont pas respectées dans l'organisation de votre charge. Comment réagissez-vous ?",
      "Une personne de retour après une longue absence est confrontée à des changements importants dans son équipe. Que faites-vous ?",
      "Un membre de votre équipe semble de moins en moins impliqué sans raison apparente. Que faites-vous ?",
      "Lors d'un échange, un collègue vous dit qu'il ne se sent plus à sa place dans l'équipe. Comment réagissez-vous ?",
      "Deux personnes de votre équipe ont visiblement des tensions mais personne n'en parle ouvertement. Que faites-vous ?",
      "Un collaborateur traverse une période personnelle difficile qui commence à affecter son travail. Comment vous positionnez-vous ?",
      "Vous constatez qu'un collègue fait des erreurs inhabituelles depuis quelques semaines. Quelle réaction adoptez-vous ?",
      "Un collègue vous demande si vous pouvez alléger sa charge. Vous n'avez pas de marge immédiate. Que faites-vous ?",
      "Lors d'une réunion, quelqu'un fond en larmes brièvement. Comment réagissez-vous ?",
      "Vous suspectez qu'un collègue est en épuisement professionnel mais il nie toute difficulté. Que faites-vous ?",
      "Un collègue vous indique qu'il se sent mal dans l'équipe sans pouvoir préciser pourquoi. Comment réagissez-vous ?",
      "La charge de votre équipe dépasse ce qui est tenable mais vous n'avez pas d'arbitrage de votre hiérarchie. Que faites-vous ?",
      "Un membre de l'équipe signale qu'il ne peut pas tenir un délai sans explication supplémentaire. Quelle réaction adoptez-vous ?",
      "Un collègue orienté vers les ressources RH revient vous voir sans avoir contacté personne. Que faites-vous ?",
      "Vous observez un changement progressif dans le comportement d'un collègue depuis une réorganisation. Comment réagissez-vous ?",
      "Une personne est clairement en difficulté mais refuse toute aide formelle. Que faites-vous ?",
      "Votre équipe sort d'une période de forte pression. Certains semblent ne pas décompresser. Quelle réaction adoptez-vous ?",
      "Un collègue ne prend jamais ses congés et semble en tirer une certaine fierté. Que faites-vous ?",
      "Lors du retour d'absence d'un collègue, l'équipe n'avait pas vraiment préparé son accueil. Que faites-vous ?",
      "Vous sentez que vous n'avez pas les ressources suffisantes pour accompagner la situation difficile d'un collègue. Comment réagissez-vous ?",
      "Un collègue développe une dépendance au travail qui commence à inquiéter l'entourage. Que faites-vous ?",
      "Vous constatez que votre équipe fonctionne à flux tendu depuis trop longtemps sans régulation. Comment vous positionnez-vous ?"
    ],
    management: [
      "Deux personnes n'ont pas la même compréhension du livrable attendu. Que faites-vous ?",
      "Une demande urgente remet en cause les priorités de la semaine. Quelle réaction adoptez-vous ?",
      "Une personne avec qui vous travaillez contourne le nouveau process pour gagner du temps. Que faites-vous ?",
      "Une réunion projet se termine sans décision claire sur les prochaines étapes. Comment réagissez-vous ?",
      "Vous recevez un feedback direct sur votre manière d'animer un échange. Que faites-vous ?",
      "Un collègue vous remet un livrable incomplet juste avant une échéance. Quelle réaction adoptez-vous ?",
      "Une personne demande un retour mais semble sensible aux critiques. Comment formulez-vous votre feedback ?",
      "Un changement d'outil crée des résistances dans l'équipe projet. Que faites-vous ?",
      "Un objectif est fixé mais les moyens disponibles ne semblent pas alignés. Comment réagissez-vous ?",
      "Une personne attend une validation sur chaque décision, même mineure. Que faites-vous ?",
      "Un projet avance mais les rôles deviennent flous. Quelle réaction adoptez-vous ?",
      "Une difficulté est connue mais chacun pense qu'elle relève de quelqu'un d'autre. Que faites-vous ?",
      "Une décision change en cours de route sans être clairement expliquée. Comment vous positionnez-vous ?",
      "Une personne très impliquée prend toute la place dans les échanges projet. Que faites-vous ?",
      "Un retard apparaît mais personne n'ose le dire clairement. Quelle réaction adoptez-vous ?",
      "Un retour d'expérience est organisé mais chacun reste général et prudent. Que faites-vous ?",
      "Une nouvelle méthode est lancée alors que l'ancienne n'est pas totalement stabilisée. Comment réagissez-vous ?",
      "Un contributeur dit oui à tout mais ne tient pas ses engagements. Que faites-vous ?",
      "Une tension apparaît entre qualité attendue et délai disponible. Quelle réaction adoptez-vous ?",
      "Après plusieurs feedbacks, les mêmes difficultés reviennent. Que faites-vous ?",
      "Un nouveau process est déployé sans que les équipes n'aient été consultées. Comment réagissez-vous ?",
      "Une réorganisation est annoncée mais les nouvelles responsabilités ne sont pas clarifiées. Que faites-vous ?",
      "Vous constatez que les résistances au changement se manifestent par des retards répétés plutôt que par des refus explicites. Quelle réaction adoptez-vous ?",
      "Un outil numérique est imposé mais il ne correspond pas aux usages réels de votre équipe. Que faites-vous ?",
      "Une transformation importante est lancée alors que l'équipe est déjà en surcharge. Comment vous positionnez-vous ?",
      "Une décision stratégique vous semble peu adaptée au terrain mais vous devez la relayer. Que faites-vous ?",
      "Un projet de transformation avance mais une partie de l'équipe n'a pas encore compris ce qui va changer pour elle. Quelle réaction adoptez-vous ?",
      "Vous percevez que certaines personnes feignent l'adhésion au changement sans vraiment y croire. Que faites-vous ?",
      "Un changement de processus crée des erreurs en période de transition. Comment réagissez-vous ?",
      "Une personne exprime publiquement son désaccord sur une décision déjà actée. Quelle réaction adoptez-vous ?",
      "Deux équipes ont des pratiques différentes pour accomplir la même tâche, ce qui crée des frictions. Comment réagissez-vous ?",
      "Une collaboration interéquipes échoue à produire un résultat parce que chacun attend que l'autre avance. Que faites-vous ?",
      "Vous constatez qu'une équipe partenaire ne respecte pas les engagements pris conjointement. Quelle réaction adoptez-vous ?",
      "Un projet implique plusieurs équipes mais personne ne semble coordonner l'ensemble. Que faites-vous ?",
      "Une information importante n'est pas partagée entre équipes, ce qui crée des doublons ou des incohérences. Comment vous positionnez-vous ?",
      "Une collaboration est bloquée par une rivalité tacite entre deux équipes. Que faites-vous ?",
      "Vous devez travailler avec une personne d'une autre équipe dont les méthodes sont très différentes des vôtres. Quelle réaction adoptez-vous ?",
      "Un partenaire interne ne tient pas ses délais mais il est dans une autre chaîne hiérarchique. Que faites-vous ?",
      "Un projet interéquipes avance mais les décisions sont prises sans toujours associer les bonnes personnes. Comment réagissez-vous ?",
      "Une personne vous demande systématiquement de valider ses décisions même mineures. Que faites-vous ?",
      "Vous avez délégué une tâche importante mais la personne ne semble pas avancer. Comment réagissez-vous ?",
      "Quelqu'un prend une initiative hors de son périmètre sans en avoir parlé. Quelle réaction adoptez-vous ?",
      "Vous constatez qu'une personne compétente ne s'investit plus comme avant. Que faites-vous ?",
      "Un collaborateur refuse une mission qu'il estime en dehors de son rôle. Comment vous positionnez-vous ?",
      "Vous devez arbitrer entre deux projets urgents avec des ressources limitées. Que faites-vous ?",
      "Une priorité définie collectivement est remise en question en cours de route par un membre de l'équipe. Quelle réaction adoptez-vous ?",
      "Plusieurs demandes urgentes arrivent simultanément et vous ne pouvez pas tout traiter. Comment réagissez-vous ?",
      "Un arbitrage difficile doit être rendu sans que toutes les informations soient disponibles. Que faites-vous ?",
      "Vous vous rendez compte que vous avez accepté trop d'engagements simultanément. Quelle réaction adoptez-vous ?",
      "Un collaborateur fait régulièrement des efforts supplémentaires sans les valoriser lui-même. Que faites-vous ?",
      "Vous observez que l'engagement collectif dans votre équipe diminue progressivement. Comment réagissez-vous ?",
      "Une personne semble très investie mais au détriment de sa propre santé. Quelle réaction adoptez-vous ?",
      "Une décision que vous avez prise ne produit pas les effets attendus. Que faites-vous ?",
      "Votre équipe fonctionne bien mais semble manquer d'élan ou d'ambition collective. Comment vous positionnez-vous ?",
      "Un collaborateur développe une expertise que vous ne maîtrisez pas vous-même. Quelle réaction adoptez-vous ?",
      "Vous constatez que certaines réunions d'équipe n'apportent plus rien de concret. Que faites-vous ?",
      "Un retour d'expérience collectif révèle une erreur partiellement attribuable à une décision que vous avez prise. Comment réagissez-vous ?",
      "Vous sentez que votre équipe attend de vous que vous preniez toutes les décisions à leur place. Quelle réaction adoptez-vous ?",
      "Un collègue extérieur à votre équipe vous sollicite fréquemment pour des arbitrages qui devraient relever de son propre manager. Que faites-vous ?",
      "Un outil adopté récemment est contourné par la majorité de l'équipe qui revient aux anciennes habitudes. Comment réagissez-vous ?"
    ],
    environnement: [
      "Une réunion courte est prévue en présentiel alors que plusieurs personnes doivent se déplacer loin. Que faites-vous ?",
      "Un support imprimé est demandé pour un événement alors qu'une version digitale existe. Quelle réaction adoptez-vous ?",
      "Vous devez choisir entre une livraison express et une option moins impactante. Que faites-vous ?",
      "Une pratique peu durable est installée dans l'équipe mais personne ne la remet en question. Comment réagissez-vous ?",
      "Un achat est renouvelé automatiquement alors que le besoin réel a diminué. Que faites-vous ?",
      "Un matériel encore utilisable est remplacé par habitude. Quelle réaction adoptez-vous ?",
      "Un événement interne prévoit beaucoup de goodies peu utiles. Que faites-vous ?",
      "Un déplacement professionnel est organisé sans comparer les alternatives. Comment vous positionnez-vous ?",
      "Un fichier très lourd est envoyé à de nombreuses personnes alors qu'un lien suffirait. Que faites-vous ?",
      "Une demande client semble encourager une solution plus coûteuse et plus impactante. Quelle réaction adoptez-vous ?",
      "Une équipe veut lancer une action environnementale très visible mais peu utile. Que faites-vous ?",
      "Un fournisseur moins cher présente peu de garanties environnementales. Comment réagissez-vous ?",
      "Un usage numérique génère beaucoup de stockage inutile. Que faites-vous ?",
      "Un arbitrage oppose confort immédiat et réduction d'impact. Quelle réaction adoptez-vous ?",
      "Une règle de tri existe mais elle est peu suivie. Comment vous positionnez-vous ?",
      "Une personne propose une amélioration sobre mais elle est perçue comme contraignante. Que faites-vous ?",
      "Un process oblige à produire des documents rarement consultés. Quelle réaction adoptez-vous ?",
      "Une initiative écologique repose toujours sur les mêmes volontaires. Que faites-vous ?",
      "Une contrainte environnementale est vécue comme une injonction de plus. Comment réagissez-vous ?",
      "Une décision rapide risque d'entraîner des achats ou déplacements évitables. Que faites-vous ?",
      "Votre ordinateur ou téléphone professionnel fonctionne encore bien mais un renouvellement est prévu. Que faites-vous ?",
      "Vous avez accumulé plusieurs centaines de mails non lus dans votre boîte professionnelle. Quelle réaction adoptez-vous ?",
      "Un dossier numérique de plusieurs gigaoctets est envoyé en pièce jointe alors qu'un lien suffirait. Que faites-vous ?",
      "Plusieurs applications restent ouvertes sur vos appareils sans utilisation réelle. Comment réagissez-vous ?",
      "Des réunions en visio sont organisées alors que tout le monde est dans le même bâtiment. Quelle réaction adoptez-vous ?",
      "Un espace de stockage cloud partagé déborde de fichiers obsolètes. Que faites-vous ?",
      "Une réunion est planifiée à distance pour un sujet qui nécessite peu d'échanges. Comment vous positionnez-vous ?",
      "Vous utilisez la visioconférence depuis un espace ouvert sans nécessité. Que faites-vous ?",
      "Des notifications permanentes vous empêchent de travailler sans connexion continue. Quelle réaction adoptez-vous ?",
      "Vous devez vous déplacer pour une réunion de deux heures à 300 km. Comment vous positionnez-vous ?",
      "Un véhicule est utilisé pour un court trajet facilement réalisable autrement. Quelle réaction adoptez-vous ?",
      "Un vol est réservé sans que les options train ou visio n'aient été étudiées. Que faites-vous ?",
      "Une politique de déplacements existe dans votre organisation mais elle est peu appliquée. Quelle réaction adoptez-vous ?",
      "Des billets d'avion ont été achetés pour un trajet qui aurait pu être en train. Que faites-vous a posteriori ?",
      "Un fournisseur retenu ne publie aucune information sur ses pratiques environnementales. Que faites-vous ?",
      "Un achat groupé réduirait l'empreinte logistique mais demande une coordination supplémentaire. Comment réagissez-vous ?",
      "Un produit moins impactant coûte 15 % de plus. La décision vous appartient. Que faites-vous ?",
      "Des fournitures sont commandées fréquemment en petites quantités, générant des livraisons répétées. Quelle réaction adoptez-vous ?",
      "Un prestataire propose une offre compétitive mais ses conditions de travail semblent floues. Que faites-vous ?",
      "Un achat est justifié par le budget disponible plutôt que par le besoin réel. Comment vous positionnez-vous ?",
      "Des emballages non recyclables sont utilisés systématiquement pour les envois internes. Que faites-vous ?",
      "Vous devez choisir entre un fournisseur local plus cher et un fournisseur importé moins coûteux. Que faites-vous ?",
      "Un équipement de bureau est en panne mais réparable. Un remplacement neuf serait plus rapide. Comment réagissez-vous ?",
      "Une démarche RSE est lancée mais repose entièrement sur des volontaires. Que faites-vous ?",
      "Un collègue remarque que les efforts individuels sont dérisoires face aux émissions industrielles. Comment réagissez-vous ?",
      "Une initiative environnementale peine à trouver des participants au-delà du cercle habituel. Quelle réaction adoptez-vous ?",
      "Votre organisation affiche des engagements RSE ambitieux mais les pratiques internes ne sont pas alignées. Que faites-vous ?",
      "Un client vous demande l'empreinte carbone de votre offre. Vous n'avez pas de données précises. Comment réagissez-vous ?",
      "Une action collective RSE s'ajoute à une charge déjà lourde. Quelle réaction adoptez-vous ?",
      "Une habitude d'équipe génère un impact que personne ne questionne. Que faites-vous ?",
      "Un bilan carbone révèle que les émissions viennent surtout des déplacements et du numérique. Quelle réaction adoptez-vous ?",
      "Vous êtes sollicité pour porter un projet RSE transverse hors de votre cœur de mission. Que faites-vous ?"
    ],
    ethique: [
      "Un fournisseur vous propose une invitation personnelle avant un renouvellement de contrat. Que faites-vous ?",
      "Vous découvrez qu'un proche travaille pour une entreprise candidate à un appel d'offres. Quelle réaction adoptez-vous ?",
      "Une information confidentielle est évoquée dans un espace informel. Que faites-vous ?",
      "Une décision vous semble discutable mais vous n'êtes pas sûr·e du niveau d'alerte. Comment réagissez-vous ?",
      "Un cadeau reçu paraît modeste mais arrive au moment d'une négociation. Que faites-vous ?",
      "Une personne vous demande de modifier une date ou une information pour simplifier un dossier. Quelle réaction adoptez-vous ?",
      "Un collègue vous confie une situation sensible en vous demandant de ne rien dire. Que faites-vous ?",
      "Une pratique habituelle semble contraire à l'esprit d'une règle interne. Comment vous positionnez-vous ?",
      "Un avantage est proposé à certaines personnes sans critère clair. Que faites-vous ?",
      "Une pression commerciale pousse à présenter une information de manière ambiguë. Quelle réaction adoptez-vous ?",
      "Un document contient une erreur qui pourrait arranger l'équipe si elle n'est pas corrigée. Que faites-vous ?",
      "Un client demande une faveur qui sort du cadre prévu. Comment réagissez-vous ?",
      "Une remarque laisse penser qu'une décision pourrait être influencée par une relation personnelle. Que faites-vous ?",
      "Une alerte passée a été mal reçue et vous hésitez à signaler un nouveau point. Quelle réaction adoptez-vous ?",
      "Une règle compliance est perçue comme trop lourde par l'équipe. Comment vous positionnez-vous ?",
      "Une dépense est présentée de manière floue dans un dossier. Que faites-vous ?",
      "Une personne vous demande de valider un document que vous n'avez pas réellement vérifié. Quelle réaction adoptez-vous ?",
      "Une situation n'est pas illégale en apparence mais vous met mal à l'aise. Que faites-vous ?",
      "Un partenaire insiste pour obtenir une information non nécessaire à sa mission. Comment réagissez-vous ?",
      "Une décision sensible est prise oralement sans trace claire. Que faites-vous ?"
    ]
  };

  // ─────────────────────────────────────────────────────────────────────────
  //  THÈMES CLASSIQUES — génération de questions (V2)
  //  - offset déterministe par AD via makeVariantOffset
  //  - tags enrichis via chaptersTags
  // ─────────────────────────────────────────────────────────────────────────

  function makeQuestions(prefix, domain, chapterIndex, extraTags) {
    const bank   = questionBanks[domain] || questionBanks.management;
    const offset = makeVariantOffset(prefix);
    const base   = extraTags || [BADGES.IA, BADGES.AIDE, BADGES.REVIEW];
    const ctags  = chaptersTags(domain, chapterIndex);

    return Array.from({ length: 5 }, function (_, i) {
      const k = offset + chapterIndex * 5 + i;
      return {
        id:      prefix + "-q" + (chapterIndex + 1) + "-" + (i + 1),
        type:    "choix",
        text:    bank[k % bank.length],
        answers: answerSets(domain, k),
        tags:    base.concat([domain]).concat(ctags).concat(["Mise en situation"])
      };
    });
  }

  function makeChapters(prefix, domain, chapters, tags) {
    return chapters.map(function (c, i) {
      return {
        id:          prefix + "-chap-" + (i + 1),
        title:       c[0],
        description: c[1],
        questions:   makeQuestions(prefix, domain, i, tags),
        profiles:    makeProfiles(c[0])
      };
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  //  THÈMES CLASSIQUES — templates
  // ─────────────────────────────────────────────────────────────────────────

  const templates = {
    securiteSurete: {
      domain: "securite",
      chapters: [
        ["Identifier les risques",             "Observer son environnement et repérer les situations sensibles avant qu'elles ne s'aggravent."],
        ["Appliquer les bons réflexes",        "Maintenir les gestes utiles même sous pression opérationnelle."],
        ["Contribuer à la sécurité collective","Intervenir avec tact et soutenir les pratiques sûres dans le collectif."],
        ["Réagir et signaler",                 "Faire remonter les incidents, anomalies et signaux faibles sans banaliser."]
            ]
    },
    securiteSignalement: {
      domain: "securite",
      chapters: [
        ["Repérer les signaux faibles", "Identifier les anomalies, écarts et situations qui pourraient annoncer un incident."],
        ["Oser signaler sans attendre", "Dépasser les freins liés à la peur de déranger, d’accuser ou de ralentir l’activité."],
        ["Décrire les faits utilement", "Formuler un signalement factuel, exploitable et sans jugement."],
        ["Transformer le signalement en action", "Faire du retour d’expérience un levier d’amélioration collective."]
      ]
    },
    securiteAccesSites: {
      domain: "securite",
      chapters: [
        ["Contrôler les accès sensibles", "Repérer les situations où une entrée, un badge ou une zone nécessitent une vigilance particulière."],
        ["Réagir face à une présence inhabituelle", "Adopter la bonne posture face à une personne, un objet ou un comportement atypique."],
        ["Protéger les zones et les informations", "Limiter les risques liés aux portes ouvertes, documents visibles ou circulations non maîtrisées."],
        ["Alerter sans dramatiser", "Mobiliser les bons relais en cas de doute sur une intrusion ou une situation suspecte."]
      ]
    },
    securiteManagers: {
      domain: "securite",
      chapters: [
        ["Faire vivre les règles au quotidien", "Installer des repères clairs sans transformer la sécurité en contrôle permanent."],
        ["Traiter les écarts sans culpabiliser", "Comprendre les causes d’un contournement et agir de manière constructive."],
        ["Arbitrer sous pression opérationnelle", "Maintenir les exigences de sécurité face aux délais, urgences et contraintes terrain."],
        ["Animer une culture de vigilance", "Encourager les remontées, les échanges et les apprentissages collectifs."]
      ]    
    },
    qvtRps: {
      domain: "qvt",
      chapters: [
        ["Repérer les signaux faibles",       "Identifier fatigue, tensions, isolement et alertes relationnelles."],
        ["Réguler la charge",                 "Prioriser, demander de l'aide et clarifier les urgences."],
        ["Préserver les relations de travail","Désamorcer les irritants et maintenir un dialogue constructif."],
        ["Mobiliser les bons relais",         "Savoir quand et comment alerter sans exposer inutilement."]
      ]
    },
    securiteCoactivite: {
      domain: "securite",
      chapters: [
        ["Préparer une intervention en coactivité",  "Identifier les risques liés à la présence simultanée de plusieurs équipes ou prestataires."],
        ["Coordonner les zones et les accès",        "Gérer les interférences entre activités parallèles, baliser et vérifier les habilitations."],
        ["Intégrer les intervenants externes",       "Accueillir, informer et contrôler les prestataires et sous-traitants présents sur le site."],
        ["Réagir à un incident en coactivité",       "Alerter, sécuriser et gérer les responsabilités quand plusieurs équipes sont impliquées."]
      ]
    },
    securiteEPI: {
      domain: "securite",
      chapters: [
        ["Choisir et vérifier ses EPI",              "Identifier les équipements de protection requis, vérifier leur état avant toute utilisation."],
        ["Maintenir ses réflexes sous contrainte",   "Conserver les bons gestes même sous pression opérationnelle, par fatigue ou en urgence."],
        ["Signaler une anomalie matérielle",         "Détecter une défaillance d'EPI ou d'équipement de protection collectif et réagir sans délai."],
        ["Contribuer à une culture EPI collective",  "Encourager les bonnes pratiques autour de soi sans créer de tensions ou de postures de contrôle."]
      ]
    },
    securiteManagerArbitrage: {
      domain: "securite",
      chapters: [
        ["Tenir les exigences face à la pression",       "Maintenir les standards de sécurité quand la production, les délais ou la hiérarchie créent une pression forte."],
        ["Traiter les écarts de façon constructive",     "Analyser les causes d'un non-respect de consigne sans culpabiliser, pour agir efficacement sur les causes réelles."],
        ["Animer la vigilance dans les périodes calmes", "Maintenir l'attention sécurité de l'équipe entre deux incidents, quand la routine tend à s'installer."],
        ["Détecter les glissements silencieux",          "Repérer les dérives progressives de pratique avant qu'elles ne créent une situation grave."]
      ]
    },
    securiteNucleaire: {
      domain: "sec_nucl",
      chapters: [
        ["Adopter une posture de questionnement",  "Exercer une questioning attitude, ne jamais laisser passer un doute sans le formaliser."],
        ["Appliquer la rigueur procédurale",       "Respecter les gammes et modes opératoires sans raccourci, même sous pression de délai ou d'expérience."],
        ["Gérer les situations non prévues",       "Adopter la bonne posture face à une situation non couverte par les référentiels."],
        ["Déclarer et tirer les enseignements",    "Signaler les écarts et événements précurseurs dans une culture de sûreté ouverte."]
      ]
    },
    securiteChantierBTP: {
      domain: "sec_btp",
      chapters: [
        ["Sécuriser son poste avant de démarrer", "Analyser les risques, baliser sa zone, vérifier les EPC et les EPI avant toute intervention."],
        ["Gérer la coactivité sur chantier",       "Coordonner avec les autres corps de métier, signaler les interférences et les zones partagées."],
        ["Appliquer et faire respecter le PPSPS", "Vérifier les habilitations, les permis de travail et les protections collectives prévues au plan."],
        ["Réagir à un accident ou incident",       "Donner l'alerte, sécuriser les personnes et préserver les conditions pour l'analyse."]
      ]
    },
    qvtTeletravail: {
      domain: "qvt",
      chapters: [
        ["Organiser son temps et son espace à distance",   "Structurer sa journée en télétravail, poser des limites et éviter le glissement des horaires."],
        ["Maintenir le lien avec son collectif",           "Rester visible et contributeur à distance, prévenir le sentiment d'isolement ou de mise à l'écart."],
        ["Communiquer efficacement en mode hybride",       "Adapter ses pratiques d'échange pour que distance et présentiel n'induisent pas d'inégalités."],
        ["Gérer les irritants de l'hybridation",           "Identifier et traiter les frictions propres au travail hybride sans laisser s'installer les non-dits."]
      ]
    },
    qvtEpuisement: {
      domain: "qvt",
      chapters: [
        ["Reconnaître ses propres signaux d'alerte",       "Identifier les signes précoces de fatigue ou de surcharge avant qu'ils ne s'aggravent."],
        ["Réguler sa charge dans la durée",                "Agir sur les leviers concrets : hiérarchiser, dire non, déléguer sans culpabiliser."],
        ["Préserver son énergie au quotidien",             "Créer des routines de récupération, maintenir des frontières saines et exercer le droit à la déconnexion."],
        ["Oser en parler et chercher un appui",            "Identifier les bons interlocuteurs et franchir le pas sans attendre d'être en difficulté réelle."]
      ]
    },
    qvtRetourAbsence: {
      domain: "qvt",
      chapters: [
        ["Préparer les conditions du retour",              "Anticiper les ajustements nécessaires et identifier ce qui a changé pendant l'absence."],
        ["Réintégrer son collectif de travail",            "Reprendre le fil avec ses collègues, gérer les décalages accumulés et les non-dits."],
        ["Réguler la reprise en charge",                   "Éviter la surcompensation, calibrer ses engagements et signaler ce qui ne tient pas."],
        ["Détecter les signaux qui persistent",            "Reconnaître quand le retour ne se stabilise pas et identifier le bon moment pour en parler."]
      ]
    },
    qvtManagerSignaux: {
      domain: "qvt",
      chapters: [
        ["Repérer les signaux faibles dans son équipe",    "Observer sans sur-interpréter, distinguer l'exceptionnel du structurel sans s'ériger en thérapeute."],
        ["Intervenir de façon factuelle",                  "Agir sur le travail — pas sur la personne — et créer les conditions pour qu'un échange soit possible."],
        ["Orienter vers les bons relais",                  "Savoir quand passer la main sans se défausser : RH, médecin du travail, dispositif d'écoute."],
        ["Prévenir par l'organisation",                    "Agir en amont sur la charge, les rôles et le cadre plutôt que de gérer les symptômes individuels."]
      ]
    },
    management: {
      domain: "management",
      chapters: [
        ["Clarifier le cadre",                   "Identifier les attendus, les rôles, les priorités et les zones de flou."],
        ["Coopérer dans l'incertitude",          "Avancer avec des informations incomplètes sans désorganiser le collectif."],
        ["Donner et recevoir du feedback utile", "Formuler et accueillir des retours concrets, recevables et orientés action."],
        ["Ancrer les nouvelles pratiques",       "Transformer les intentions en habitudes professionnelles observables."]
      ]
  },
 mgmtFeedback: {
   domain: "management",
   chapters: [
     ["Créer les conditions d’un feedback utile", "Installer un cadre propice à des retours réguliers, concrets et recevables."],
     ["Formuler un retour factuel", "S’appuyer sur des faits observables plutôt que sur des jugements ou impressions générales."],
     ["Recevoir un feedback sans se fermer", "Accueillir un retour, même inconfortable, pour en faire un levier d’apprentissage."],
     ["Ancrer les apprentissages", "Transformer les retours reçus en ajustements visibles dans les pratiques."]
  ]
},
  mgmtManagerEngageant: {
    domain: "management",
    chapters: [
      ["Créer un cadre mobilisateur", "Clarifier les attentes, le sens et les marges de manœuvre de l’équipe."],
      ["Responsabiliser sans surcontrôler", "Développer l’autonomie sans abandonner l’accompagnement."],
      ["Soutenir l’engagement au quotidien", "Reconnaître les efforts, traiter les irritants et maintenir l’énergie collective."],
      ["Faire évoluer sa posture managériale", "Ajuster ses pratiques pour renforcer confiance, coopération et initiative."]
    ]
  },
  mgmtProjet: {
    domain: "management",
    chapters: [
      ["Clarifier le besoin et le périmètre", "Comprendre les attentes, les rôles et les livrables avant d’agir."],
      ["Coopérer dans un cadre mouvant", "Avancer avec plusieurs interlocuteurs malgré les imprévus et zones de flou."],
      ["Anticiper les risques et dépendances", "Identifier ce qui peut bloquer le projet et alerter au bon moment."],
      ["Contribuer jusqu’à la livraison", "Tenir ses engagements, ajuster les priorités et capitaliser sur l’expérience."]
     ]
   },
   mgmtChangement: {
     domain: "management",
     chapters: [
       ["Comprendre les résistances au changement", "Distinguer l'opposition de fond du besoin d'information, et agir en conséquence sans forcer l'adhésion."],
       ["Relayer et incarner la transformation",    "Transmettre un changement décidé sans l'avoir choisi tout en préservant sa crédibilité de proximité."],
       ["Accompagner les transitions individuelles","Repérer les personnes qui décrochent et créer les conditions d'un soutien sans paternalisme ni contrôle."],
       ["Ancrer les nouvelles pratiques dans la durée", "Empêcher que les anciennes habitudes reprennent le dessus une fois l'attention de la direction retombée."]
      ]
    },
    mgmtResponsabilisation: {
      domain: "management",
      chapters: [
        ["Déléguer sans abandonner",                "Confier une responsabilité réelle tout en restant disponible sans reprendre la main à la moindre difficulté."],
        ["Développer l'autonomie de décision",      "Créer les conditions pour que les arbitrages se prennent au bon niveau, sans créer de dépendance."],
        ["Valoriser l'initiative et l'engagement",  "Reconnaître ce qui mérite de l'être, de façon cohérente et sans créer de hiérarchies informelles."],
        ["Gérer les erreurs sans bloquer la prise de risque", "Traiter une erreur de façon à préserver la confiance et l'envie d'agir sans remettre en cause la délégation."]
      ]
    },
    mgmtCollaboration: {
      domain: "management",
      chapters: [
        ["Coopérer avec d'autres équipes",           "Identifier les points de friction interéquipes et créer les conditions d'une vraie collaboration au quotidien."],
        ["Gérer les dépendances et les attentes",    "Clarifier ce qu'on peut attendre des autres et ce qu'on s'engage à livrer soi-même, sans ambiguïté."],
        ["Dépasser les logiques de silos",           "Agir pour que les intérêts d'équipe ne prennent pas le dessus sur la cohérence globale de l'organisation."],
        ["Construire des pratiques communes",        "Aligner les méthodes de travail entre équipes sans imposer ni diluer ce qui fonctionne."]
      ]
    },
    mgmtDigital: {
      domain: "management",
      chapters: [
        ["Adopter un nouveau processus ou outil",    "Trouver sa posture face à une transformation qui change les habitudes sans effacer les compétences existantes."],
        ["Accompagner les moins à l'aise",           "Soutenir les personnes en difficulté avec les outils numériques sans s'y substituer ni créer de dépendance."],
        ["Questionner la pertinence des usages",     "Évaluer si les outils et processus numériques servent vraiment le travail ou créent de la complexité inutile."],
        ["Gérer la transition entre ancien et nouveau", "Maintenir la continuité du travail pendant une période de changement d'outil ou de méthode."]
      ]
    },
    mgmtArbitrage: {
      domain: "management",
      chapters: [
        ["Hiérarchiser face à l'urgence",            "Décider quoi faire et quoi ne pas faire quand tout semble prioritaire en même temps."],
        ["Gérer les injonctions contradictoires",    "Trouver une position cohérente et tenable quand les demandes reçues sont incompatibles entre elles."],
        ["Expliquer et tenir ses arbitrages",        "Communiquer une décision d'arbitrage de façon à ne pas créer de frustration inutile ni fragiliser la confiance."],
        ["Revoir ses priorités sans déstabiliser",   "Adapter le plan en cours de route sans perdre la confiance de l'équipe ni créer un sentiment d'instabilité."]
      ]
    },
    envNumerique: {
      domain: "environnement",
      chapters: [
        ["Réduire son empreinte numérique",              "Questionner les habitudes de stockage, d'envoi et de communication."],
        ["Arbitrer entre distanciel et présentiel",      "Décider quand organiser une réunion physique ou la remplacer à distance."],
        ["Allonger la durée de vie de ses équipements",  "Retarder le renouvellement et éviter les remplacements par défaut."],
        ["Réduire le bruit numérique collectif",         "Contribuer à un environnement numérique sobre en réduisant les échanges superflus."]
      ]
    },
    envDeplacements: {
      domain: "environnement",
      chapters: [
        ["Questionner la nécessité d'un déplacement",        "Évaluer si un trajet est réellement nécessaire ou si une alternative existe."],
        ["Choisir le mode de déplacement le moins impactant", "Comparer les options sans attendre que la politique de l'organisation le demande."],
        ["Organiser ses déplacements avec sobriété",          "Regrouper les trajets et réduire les allers-retours inutiles."],
        ["Contribuer à une culture sobre des déplacements",   "Partager ses pratiques et questionner les habitudes collectives sans moraliser."]
      ]
    },
    envAchats: {
      domain: "environnement",
      chapters: [
        ["Questionner le besoin avant d'acheter",             "Distinguer le besoin réel du besoin perçu et explorer la réutilisation."],
        ["Évaluer l'impact de ses choix fournisseurs",        "Intégrer les critères environnementaux dans les décisions d'achat."],
        ["Réduire les emballages et la logistique inutile",   "Agir sur la fréquence des commandes et les modes de livraison."],
        ["Ancrer les achats responsables dans les pratiques", "Rendre les critères RSE praticables dans les décisions du quotidien."]
      ]
    },
    envEngagement: {
      domain: "environnement",
      chapters: [
        ["Situer son propre engagement RSE",                "Identifier ce qui motive à agir, ce qui freine et à quel niveau on se reconnaît."],
        ["Agir sans attendre une politique formalisée",     "Trouver les marges de manœuvre à son niveau sans cadre institutionnel complet."],
        ["Embarquer ses collègues sans les culpabiliser",   "Partager des pratiques et créer de l'envie sans être donneur de leçon."],
        ["Tenir dans la durée malgré les contraintes",      "Maintenir des gestes cohérents quand la pression opérationnelle reprend le dessus."]
      ]
    },
    envManagerRSE: {
      domain: "environnement",
      chapters: [
        ["Incarner la transition sans surjouer",             "Montrer l'exemple sans créer de pression ni décalage entre discours et pratiques."],
        ["Créer les conditions d'un engagement collectif",   "Faciliter l'appropriation des enjeux RSE sans imposer ni infantiliser."],
        ["Arbitrer entre performance et impact",             "Tenir une position tenable quand contraintes économiques et enjeux environnementaux s'affrontent."],
        ["Faire vivre la RSE dans les rituels d'équipe",     "Intégrer les questions d'impact dans les pratiques habituelles sans en faire un sujet à part."]
      ]
    },
    environnement: {
      domain: "environnement",
      chapters: [
        ["Identifier les impacts",        "Relier les gestes du quotidien à des effets environnementaux concrets."],
        ["Arbitrer sobrement",            "Faire des choix réalistes sans culpabilisation ni affichage."],
        ["Coopérer autour des pratiques", "Faire évoluer les usages avec les collègues, clients et prestataires."],
        ["Faire durer les changements",   "Installer des réflexes simples et mesurables dans le temps."]
      ]
    },
          envDechets: {
      domain: "environnement",
      chapters: [
        ["Identifier les sources de gaspillage", "Repérer les déchets, consommations inutiles et pertes de ressources dans les pratiques du quotidien."],
        ["Réduire à la source", "Agir avant même la production du déchet : besoins réels, volumes, réutilisation et sobriété."],
        ["Trier sans complexifier", "Installer des gestes simples, compréhensibles et réellement applicables par le collectif."],
        ["Ancrer les nouvelles habitudes", "Faire durer les pratiques de réduction des déchets sans dépendre uniquement de la bonne volonté individuelle."]
      ]
    },

    envAchatsResponsables: {
      domain: "environnement",
      chapters: [
        ["Questionner le besoin réel", "Distinguer l’achat nécessaire de l’achat automatique, confortable ou budgétaire."],
        ["Comparer les impacts fournisseurs", "Intégrer les critères environnementaux, sociaux et logistiques dans les choix."],
        ["Arbitrer entre coût, usage et impact", "Décider sans réduire l’achat responsable à une opposition entre prix et conviction."],
        ["Sécuriser les pratiques d’achat", "Formaliser des repères simples pour rendre les choix responsables plus réguliers."]
      ]
    },

    envManagerTransition: {
      domain: "environnement",
      chapters: [
        ["Donner du sens sans culpabiliser", "Expliquer les enjeux environnementaux sans injonction, moralisation ou affichage."],
        ["Créer des marges d’action réalistes", "Identifier ce que l’équipe peut réellement changer dans son quotidien professionnel."],
        ["Arbitrer les tensions opérationnelles", "Gérer les contradictions entre délais, performance, confort et réduction d’impact."],
        ["Installer une dynamique collective", "Faire vivre la transition dans les rituels, décisions et habitudes de l’équipe."]
      ]
    },
    ethique: {
      domain: "ethique",
      chapters: [
        ["Identifier les zones grises",    "Repérer ce qui n'est pas illégal en apparence mais peut poser problème."],
        ["Demander conseil au bon moment", "Ne pas rester seul·e face à un doute, une pression ou un conflit d'intérêts."],
        ["Documenter et alerter",          "Décrire les faits, protéger les personnes et utiliser le bon canal."],
        ["Créer une culture de vigilance", "Rendre les règles compréhensibles, applicables et discutables au quotidien."]
      ]
    }
  };


  // ─────────────────────────────────────────────────────────────────────────
  //  INITIALISATION DES GLOBAUX
  //  window.ITS_CATALOGUE  — liste de tous les ADs enregistrés
  //  window.ITS_THEMES     — liste des domaines (pour navigation)
  //  window.CUSTOM_QUESTIONS — banque de questions rédigées, étendue par
  //                            chaque fichier domaine via Object.assign
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_CATALOGUE       = [];
  window.ITS_THEMES          = [];
  window.CUSTOM_QUESTIONS    = window.CUSTOM_QUESTIONS || {};

  // ─────────────────────────────────────────────────────────────────────────
  //  PATCH makeQuestions — utilise CUSTOM_QUESTIONS quand disponible
  //  Les fichiers domaine étendent window.CUSTOM_QUESTIONS via Object.assign
  //  avant d'appeler ITS_registerTheme.
  // ─────────────────────────────────────────────────────────────────────────

  var _origMakeQuestions = makeQuestions;
  makeQuestions = function (prefix, domain, chapterIndex, extraTags) {
    var cq = window.CUSTOM_QUESTIONS;
    if (cq[prefix] && cq[prefix][chapterIndex]) {
      var base  = extraTags || [BADGES.IA, BADGES.AIDE, BADGES.REVIEW];
      var ctags = chaptersTags(domain, chapterIndex);
      return cq[prefix][chapterIndex].map(function (q, i) {
        return {
          id:      prefix + "-q" + (chapterIndex + 1) + "-" + (i + 1),
          type:    q.type || "choix",
          text:    q.text,
          answers: q.answers,
          tags:    base.concat([domain]).concat(ctags).concat(["Mise en situation"])
        };
      });
    }
    return _origMakeQuestions(prefix, domain, chapterIndex, extraTags);
  };

  // ─────────────────────────────────────────────────────────────────────────
  //  ITS_registerTheme — API publique pour les fichiers domaine
  //
  //  Usage dans chaque catalogue-xxx.js :
  //    window.ITS_registerTheme("cybersecurite", "Cybersécurité", "🔐", ads);
  //
  //  Format ads : tableau de tuples
  //    [id, title, audience, description, template, optionalBadge]
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme = function (themeKey, themeLabel, icon, ads) {
    // Évite les doublons de thème
    var alreadyRegistered = window.ITS_THEMES.some(function (t) {
      return t.key === themeKey;
    });
    if (!alreadyRegistered) {
      window.ITS_THEMES.push({ key: themeKey, label: themeLabel, icon: icon });
    }

    ads.forEach(function (ad) {
      var template      = ad[4];
      var specificBadge = ad[5];
      var tags = specificBadge
        ? [specificBadge, BADGES.AIDE, BADGES.REVIEW]
        : [BADGES.IA,     BADGES.AIDE, BADGES.REVIEW];

      var chapters = template.built
        ? template.built
        : makeChapters(ad[0], template.domain, template.chapters, tags);

      window.ITS_CATALOGUE.push({
        id:          ad[0],
        themeKey:    themeKey,
        theme:       themeLabel,
        icon:        icon,
        title:       ad[1],
        audience:    ad[2],
        description: ad[3],
        tags:        tags,
        duration:    "8 à 12 min",
        intro:       "Bienvenue dans cet autodiagnostic consacré à "
                     + ad[1].toLowerCase()
                     + ". Il vous propose des situations concrètes du quotidien"
                     + " professionnel pour vous aider à identifier vos réflexes,"
                     + " vos points d'appui et vos axes de progression."
                     + " Cet autodiagnostic est entièrement anonyme : aucun login,"
                     + " aucun mot de passe, aucun cookie, aucun suivi d'adresse IP."
                     + " Les résultats seront analysés de manière agrégée.",
        chapters:    chapters
      });
    });
  };

  // ─────────────────────────────────────────────────────────────────────────
  //  _ITS_CORE — exposition interne pour les fichiers domaine
  //  Permet d'accéder aux helpers sans polluer le namespace global.
  // ─────────────────────────────────────────────────────────────────────────

  window._ITS_CORE = {
    BADGES:       BADGES,
    templates:    templates,
    makeChapters: makeChapters,
    makeProfiles: makeProfiles,
    chaptersTags: chaptersTags
  };

})();
