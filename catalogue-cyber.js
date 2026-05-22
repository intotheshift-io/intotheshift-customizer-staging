/**
 * catalogue-cyber.js — INTO THE SHIFT
 * Domaine : Cybersécurité (4 ADs)
 * Questions écrites, scoring subtil — NE PAS MODIFIER sans validation.
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var BADGES = window._ITS_CORE.BADGES;

  // ═════════════════════════════════════════════════════════════════════════
  //  CYBERSÉCURITÉ — questions écrites, scoring subtil
  //  ⚠ NE PAS MODIFIER — logique non générative, contenu validé
  // ═════════════════════════════════════════════════════════════════════════

  var CT = [BADGES.IA, BADGES.AIDE, BADGES.REVIEW];

  function lq(id, text) {
    return {
      id, type: "likert", text,
      answers: [
        { text: "Jamais",   score: 0   },
        { text: "Rarement", score: 0.5 },
        { text: "Parfois",  score: 1   },
        { text: "Souvent",  score: 1.5 },
        { text: "Toujours", score: 2   }
      ],
      tags: CT
    };
  }

  function cq(id, text, answers) {
    return { id, type: "choix", text, answers, tags: CT };
  }

  const CYBER_PROFILES = {
    "reperer-signaux": [
      {
        level: "Repères à consolider", min: 0, max: 0.99,
        title: "La détection des signaux numériques sensibles est encore à construire",
        summary: "Les tentatives de manipulation bien construites passent encore souvent sous votre radar.",
        description: "Reconnaître une tentative de phishing ou d'ingénierie sociale demande une sensibilisation spécifique — ces attaques sont conçues pour contourner la vigilance ordinaire. Ce n'est pas un manque d'attention, c'est un manque d'outillage qui se corrige avec la pratique.",
        keywords: ["Détection à renforcer", "Formation utile", "Signaux manqués"]
      },
      {
        level: "Pratiques en construction", min: 0.99, max: 1.59,
        title: "Vous repérez l'évident, mais les attaques sophistiquées vous exposent encore",
        summary: "Votre vigilance est présente face aux tentatives grossières, mais les signaux subtils vous échappent parfois.",
        description: "Vous réagissez correctement face aux tentatives évidentes, mais certains contextes favorables — expéditeur connu, timing plausible, urgence crédible — peuvent encore faire baisser votre garde. C'est précisément là que se concentrent les attaques les plus efficaces.",
        keywords: ["Vigilance conditionnelle", "Signaux subtils", "Contexte influençant"]
      },
      {
        level: "Réflexes installés", min: 1.59, max: 2,
        title: "Vous lisez les signaux numériques avec précision",
        summary: "Votre vigilance s'applique même quand le contexte rend la demande plausible.",
        description: "Vous avez internalisé les signaux qui distinguent une sollicitation légitime d'une tentative de manipulation : urgence artificielle, domaine légèrement modifié, canal inhabituel. Cette vigilance calibrée — ni alarmiste, ni aveugle — est un atout réel pour votre organisation.",
        keywords: ["Vigilance active", "Signal faible perçu", "Discernement"]
      }
    ],
    "proteger-acces": [
      {
        level: "Repères à consolider", min: 0, max: 0.99,
        title: "Des habitudes à risque persistent dans votre quotidien numérique",
        summary: "Certains comportements courants — mot de passe partagé, poste non verrouillé, 2FA ignoré — créent des vulnérabilités réelles.",
        description: "Ce n'est pas une question de mauvaise volonté : ces habitudes sont le reflet d'une routine construite avant que la sensibilisation cyber ne devienne prioritaire. Les corriger demande peu d'effort individuel mais un appui collectif clair.",
        keywords: ["Habitudes à risque", "Automatisme absent", "Vulnérabilités courantes"]
      },
      {
        level: "Pratiques en construction", min: 0.99, max: 1.59,
        title: "Vos pratiques de protection sont présentes mais pas encore automatiques",
        summary: "Vous connaissez les bonnes pratiques et les appliquez quand vous y pensez — mais elles ne sont pas encore systématiques.",
        description: "La différence entre une posture intermédiaire et une posture solide, c'est souvent l'automatisme. Vous avez les connaissances — l'enjeu est de les transformer en réflexes indépendants du contexte, de la pression du moment ou de la confiance accordée à l'environnement.",
        keywords: ["Pratiques connues", "Automatisme partiel", "Contextuel"]
      },
      {
        level: "Réflexes installés", min: 1.59, max: 2,
        title: "Vos réflexes de protection des accès sont ancrés",
        summary: "Verrouillage systématique, partage refusé, 2FA activé — ces habitudes forment votre première ligne de défense.",
        description: "Vous avez automatisé les comportements qui semblent anodins mais qui sont décisifs : verrouiller son poste, refuser de partager sa session, utiliser des mots de passe forts et uniques. Ces réflexes sont invisibles quand ils fonctionnent — et précieux quand ils sont absents.",
        keywords: ["Réflexes ancrés", "Verrouillage systématique", "2FA actif"]
      }
    ],
    "partager-discernement": [
      {
        level: "Repères à consolider", min: 0, max: 0.99,
        title: "Le partage d'information est encore peu maîtrisé",
        summary: "La frontière entre ce qui est partageable et ce qui est sensible reste floue dans les échanges du quotidien.",
        description: "Des informations sensibles sont probablement partagées sans contrôle — non par négligence, mais parce que les critères et les canaux ne sont pas encore clairs. C'est l'un des vecteurs de fuite les plus fréquents et des plus accessibles à corriger.",
        keywords: ["Frontière floue", "Fuite non intentionnelle", "Procédures à clarifier"]
      },
      {
        level: "Pratiques en construction", min: 0.99, max: 1.59,
        title: "Votre discernement est présent mais conditionnel",
        summary: "Vous faites attention dans les situations formelles, mais les contextes informels et les demandes urgentes créent des zones de relâchement.",
        description: "Vous êtes prudent quand vous y pensez — mais les échanges informels, la pression temporelle et la confiance relationnelle peuvent encore vous amener à partager plus que nécessaire. Travailler la systématisation de ces vérifications renforcerait significativement votre posture.",
        keywords: ["Prudence formelle", "Relâchement informel", "Urgence influençante"]
      },
      {
        level: "Réflexes installés", min: 1.59, max: 2,
        title: "Vous partagez l'information avec rigueur et discernement",
        summary: "Vous ne vous fiez pas à la confiance relationnelle pour décider ce que vous partagez — vous vérifiez les procédures, les canaux et les droits.",
        description: "Votre approche du partage d'information est structurée par le contenu, pas par la relation. Vous choisissez le bon canal, limitez les données aux stricts besoins et vérifiez les autorisations — même avec des partenaires habituels.",
        keywords: ["Rigueur informationnelle", "Canal approprié", "Droits vérifiés"]
      }
    ],
    "reagir-signaler": [
      {
        level: "Repères à consolider", min: 0, max: 0.99,
        title: "La réaction aux incidents numériques est encore difficile",
        summary: "Plusieurs freins sont actifs : incertitude sur la gravité, gêne d'avoir provoqué l'incident, canal de signalement inconnu.",
        description: "Ne pas savoir quoi faire face à un incident numérique est très courant. La gêne, l'incertitude et la peur de l'escalade sont les freins les plus documentés. Un cadre clair et une culture d'équipe sans culpabilisation font toute la différence.",
        keywords: ["Canal inconnu", "Gêne bloquante", "Freins actifs"]
      },
      {
        level: "Pratiques en construction", min: 0.99, max: 1.59,
        title: "Vous signalez dans les cas clairs mais hésitez dans l'ambiguïté",
        summary: "Votre réaction est rapide face aux incidents évidents, mais l'incertitude sur la gravité freine votre passage à l'acte.",
        description: "La fenêtre de temps entre un incident numérique et son signalement est souvent critique. Vous avez les bons réflexes dans les situations nettes — l'enjeu est d'élargir ce réflexe aux situations ambiguës, qui sont précisément les plus fréquentes.",
        keywords: ["Hésitation dans l'ambiguïté", "Attente de certitude", "Réactivité à accélérer"]
      },
      {
        level: "Réflexes installés", min: 1.59, max: 2,
        title: "Vous réagissez vite et sans attendre la certitude",
        summary: "Vous n'évaluez pas seul l'ampleur d'un incident — vous alertez et laissez les spécialistes qualifier.",
        description: "Votre posture face aux incidents numériques est celle qui protège le mieux votre organisation : signaler sans attendre d'être certain, documenter ce qui s'est passé, mobiliser les bons canaux. Un signalement sans suite est infiniment moins grave qu'un incident non signalé.",
        keywords: ["Réaction immédiate", "Signal sans certitude", "Bons canaux"]
      }
    ]
  };

  const CQ = {
    "reflexes-cybersecurite": {
      "reperer-signaux": [
        cq("rc-1-1", "Vous recevez un email urgent de votre direction demandant un virement vers un nouveau compte fournisseur, avec la mention « ne pas en parler à la comptabilité ». Quelle est votre réaction ?",
          [{ text: "Je traite rapidement — la direction a ses raisons.", score: 0 },
           { text: "Je vérifie l'adresse email et rappelle le signataire pour confirmer.", score: 1 },
           { text: "Je refuse d'agir et signale — urgence et confidentialité combinées sont un signal classique de fraude.", score: 2 }]),
        lq("rc-1-2", "À quelle fréquence prenez-vous le temps de lire l'adresse email complète de l'expéditeur, et pas seulement le nom affiché ?"),
        cq("rc-1-3", "Un SMS vous informe que votre colis est bloqué en douane — 1,90 € à régler via un lien. Vous attendez effectivement une livraison. Que faites-vous ?",
          [{ text: "Je clique et règle — la somme est dérisoire et le timing coïncide.", score: 0 },
           { text: "Je vérifie l'URL du lien avant de cliquer.", score: 1 },
           { text: "Je contacte le transporteur directement via son site officiel pour vérifier.", score: 2 }]),
        cq("rc-1-4", "Un collègue vous envoie une pièce jointe « à traiter en urgence ». Son adresse email est correcte, mais son style d'écriture est inhabituellement bref. Que faites-vous ?",
          [{ text: "J'ouvre — l'adresse email est la bonne.", score: 0 },
           { text: "Je lui réponds pour vérifier si c'est bien lui qui a envoyé ce message.", score: 1 },
           { text: "Je l'appelle directement pour confirmer avant d'ouvrir quoi que ce soit.", score: 2 }]),
        lq("rc-1-5", "Lorsqu'une demande numérique vous met sous pression temporelle, à quelle fréquence prenez-vous quand même le temps d'en vérifier la légitimité ?")
      ],
      "proteger-acces": [
        cq("rc-2-1", "Vous partez en réunion pour 30 minutes. Votre session est ouverte sur des documents internes sensibles. Que faites-vous ?",
          [{ text: "Je minimise les fenêtres — je reviens vite.", score: 0 },
           { text: "Je verrouille si j'y pense.", score: 1 },
           { text: "Je verrouille systématiquement, quelle que soit la durée.", score: 2 }]),
        lq("rc-2-2", "À quelle fréquence verrouillez-vous votre poste de travail dès que vous vous en éloignez ?"),
        cq("rc-2-3", "Un collègue vous demande de lui « prêter votre session » deux minutes pendant que la sienne est en maintenance. Que faites-vous ?",
          [{ text: "Je lui prête — c'est un collègue de confiance.", score: 0 },
           { text: "Je reste à côté pendant qu'il utilise ma session.", score: 0 },
           { text: "Je refuse et l'oriente vers le support IT pour un accès temporaire.", score: 1 },
           { text: "Je refuse catégoriquement — prêter sa session expose ses accès et ses traces d'activité.", score: 2 }]),
        cq("rc-2-4", "Vous trouvez une clé USB non identifiée dans l'espace commun. Que faites-vous ?",
          [{ text: "Je la branche pour identifier son propriétaire.", score: 0 },
           { text: "Je la dépose à l'accueil.", score: 1 },
           { text: "Je la remets à la sécurité informatique sans la brancher.", score: 2 }]),
        cq("rc-2-5", "Un email vous invite à renouveler votre mot de passe. Comment créez-vous le nouveau ?",
          [{ text: "Je change uniquement un caractère — la règle est respectée.", score: 0 },
           { text: "Je crée un mot de passe proche de l'ancien, avec une variation reconnaissable.", score: 0 },
           { text: "Je crée un nouveau mot de passe complexe, sans lien avec le précédent.", score: 1 },
           { text: "Je génère un mot de passe fort et unique, stocké dans un gestionnaire.", score: 2 }])
      ],
      "partager-discernement": [
        cq("rc-3-1", "Vous devez transmettre un document confidentiel à un partenaire externe. Comment procédez-vous ?",
          [{ text: "Je l'envoie en pièce jointe par email — c'est le plus rapide.", score: 0 },
           { text: "Je vérifie bien l'adresse du destinataire avant d'envoyer.", score: 1 },
           { text: "J'utilise le canal sécurisé ou l'espace partagé préconisé par mon organisation.", score: 2 }]),
        lq("rc-3-2", "À quelle fréquence vérifiez-vous la liste des destinataires avant d'envoyer un fichier interne ?"),
        cq("rc-3-3", "Un partenaire habituel demande par email un extrait de votre base clients pour préparer une proposition commerciale. Que faites-vous ?",
          [{ text: "Je lui envoie un extrait — c'est un partenaire de confiance.", score: 0 },
           { text: "Je lui envoie des données anonymisées.", score: 1 },
           { text: "Je vérifie si un accord encadrant le partage de données est en place avant d'envoyer quoi que ce soit.", score: 2 }]),
        cq("rc-3-4", "Vous partagez un document sur un outil collaboratif. Par défaut, il est accessible à toute l'organisation. Que faites-vous ?",
          [{ text: "Je laisse les droits par défaut — ça facilite la collaboration.", score: 0 },
           { text: "Je vérifie si le contenu justifie une restriction d'accès.", score: 1 },
           { text: "Je définis systématiquement les droits d'accès selon le contenu, avant de partager.", score: 2 }]),
        lq("rc-3-5", "Lorsque vous participez à une réunion vidéo depuis un espace ouvert, à quelle fréquence vérifiez-vous que personne ne peut vous entendre ?")
      ],
      "reagir-signaler": [
        cq("rc-4-1", "Vous pensez avoir cliqué sur un lien malveillant. Rien n'est apparu visuellement. Que faites-vous ?",
          [{ text: "Je ne fais rien — si rien ne s'est passé visuellement, il n'y a probablement pas de problème.", score: 0 },
           { text: "Je ferme le navigateur et lance un antivirus.", score: 1 },
           { text: "J'alerte immédiatement, déconnecte mon poste du réseau si possible et décris précisément ce qui s'est passé.", score: 2 }]),
        lq("rc-4-2", "À quelle fréquence signalez-vous un incident numérique, même mineur, plutôt que de le gérer seul ?"),
        cq("rc-4-3", "Un incident numérique vous implique directement. Aucune conséquence visible pour l'instant. Que faites-vous ?",
          [{ text: "J'attends de voir si des conséquences apparaissent.", score: 0 },
           { text: "J'en parle discrètement à un collègue technique de confiance.", score: 1 },
           { text: "Je signale immédiatement à la sécurité informatique, en documentant précisément ce qui s'est passé.", score: 2 }]),
        cq("rc-4-4", "Un appel prétendument du support IT vous demande votre mot de passe pour résoudre un problème critique. L'interlocuteur connaît votre nom et votre manager. Que faites-vous ?",
          [{ text: "Je donne le mot de passe — il connaît des détails internes.", score: 0 },
           { text: "Je refuse et rappelle le numéro officiel du support pour vérifier.", score: 1 },
           { text: "Je refuse catégoriquement, raccroche et signale l'appel immédiatement.", score: 2 }]),
        lq("rc-4-5", "À quelle fréquence savez-vous exactement quel canal ou quelle personne contacter en cas d'incident numérique dans votre organisation ?")
      ]
    },
    "fraude-phishing": {
      "reperer-signaux": [
        cq("fp-1-1", "Un email prétend venir d'un service interne avec le logo de votre entreprise, mais le domaine est légèrement différent (@mon-entreprise.net au lieu de @mon-entreprise.fr). Que faites-vous ?",
          [{ text: "Je réponds — le logo et le contenu semblent authentiques.", score: 0 },
           { text: "Je vérifie le domaine mais suppose que c'est une erreur d'affichage.", score: 1 },
           { text: "Je ne donne pas suite et signale l'email à la sécurité informatique.", score: 2 }]),
        lq("fp-1-2", "À quelle fréquence vérifiez-vous l'URL d'un site avant d'y saisir vos identifiants ?"),
        cq("fp-1-3", "Une demande urgente vous arrive via un canal inhabituel — email personnel au lieu des outils d'entreprise. L'expéditeur semble connu. Que faites-vous ?",
          [{ text: "Je traite — une panne technique peut expliquer l'utilisation d'un canal alternatif.", score: 0 },
           { text: "Je traite prudemment sans partager d'informations sensibles.", score: 1 },
           { text: "Je refuse d'agir via ce canal — un canal inhabituel est en lui-même un signal d'alarme.", score: 2 }]),
        cq("fp-1-4", "Lors d'un test de phishing interne, vous avez cliqué sur le faux lien. Comment réagissez-vous ?",
          [{ text: "Je suis gêné et préfère ne pas en parler.", score: 0 },
           { text: "Je regarde le corrigé pour comprendre ce que j'ai manqué.", score: 1 },
           { text: "Je regarde le corrigé, en tire un apprentissage et le partage avec mes collègues.", score: 2 }]),
        lq("fp-1-5", "À quelle fréquence remettez-vous en question la légitimité d'une demande numérique, même si elle vient d'une personne de confiance ?")
      ],
      "proteger-acces": [
        cq("fp-2-1", "Un email de votre « banque professionnelle » signale une activité suspecte et vous demande de vous connecter via un lien pour confirmer vos accès. Que faites-vous ?",
          [{ text: "Je clique et me reconnecte — mieux vaut vérifier rapidement.", score: 0 },
           { text: "Je vérifie l'adresse de l'expéditeur avant de cliquer.", score: 1 },
           { text: "Je me connecte directement via mon signet habituel, sans utiliser le lien de l'email.", score: 2 }]),
        lq("fp-2-2", "À quelle fréquence vérifiez-vous qu'un site est bien sécurisé (HTTPS) avant d'y saisir des identifiants ?"),
        cq("fp-2-3", "Vous recevez un code de double authentification alors que vous ne vous connectez pas. Que faites-vous ?",
          [{ text: "Je valide — c'est peut-être une mise à jour système automatique.", score: 0 },
           { text: "J'ignore le message et attends de voir.", score: 1 },
           { text: "Je ne valide pas et signale immédiatement à la sécurité informatique.", score: 2 }]),
        cq("fp-2-4", "On vous propose de « tester une nouvelle fonctionnalité » de votre outil habituel via un lien. Rien n'a été annoncé en interne. Que faites-vous ?",
          [{ text: "Je clique et teste — ça semble pratique.", score: 0 },
           { text: "Je vérifie l'adresse de l'expéditeur avant de cliquer.", score: 1 },
           { text: "Je signale le message à la sécurité informatique sans y donner suite.", score: 2 }]),
        lq("fp-2-5", "À quelle fréquence mettez-vous à jour vos mots de passe professionnels sans attendre d'y être obligé ?")
      ],
      "partager-discernement": [
        cq("fp-3-1", "Un interlocuteur inconnu prétend être le nouveau responsable d'un compte client et vous demande de mettre à jour ses coordonnées bancaires. Que faites-vous ?",
          [{ text: "Je mets à jour — ce type de changement arrive régulièrement.", score: 0 },
           { text: "Je lui demande de confirmer par email depuis l'adresse officielle de l'entreprise.", score: 1 },
           { text: "J'appelle le client via le numéro enregistré dans nos systèmes pour confirmer le changement.", score: 2 }]),
        lq("fp-3-2", "À quelle fréquence utilisez-vous un canal de vérification indépendant de la demande elle-même pour confirmer l'identité d'un interlocuteur ?"),
        cq("fp-3-3", "Une demande urgente est accompagnée d'une preuve — capture d'écran ou PDF officiel. Comment la traitez-vous ?",
          [{ text: "Je l'accepte — une pièce justificative renforce la légitimité.", score: 0 },
           { text: "Je la prends en compte sans m'y fier entièrement.", score: 1 },
           { text: "Je vérifie directement auprès de la source — les preuves numériques se falsifient facilement.", score: 2 }]),
        cq("fp-3-4", "Votre organisation vient d'envoyer une communication officielle. Le lendemain, un email « complémentaire » arrive avec un lien vers les nouvelles directives. Que faites-vous ?",
          [{ text: "Je clique — le timing avec la communication officielle est convaincant.", score: 0 },
           { text: "Je cherche dans mes emails la communication officielle pour comparer.", score: 1 },
           { text: "J'accède aux directives via les canaux internes officiels, sans utiliser le lien de cet email.", score: 2 }]),
        lq("fp-3-5", "À quelle fréquence prenez-vous conscience que la confiance accordée à un interlocuteur habituel peut être exploitée par quelqu'un qui a fait ses recherches ?")
      ],
      "reagir-signaler": [
        cq("fp-4-1", "Une tentative de phishing bien construite vous a presque eu — vous avez cliqué mais arrêté à temps. Comment réagissez-vous ?",
          [{ text: "Je suis gêné et n'en parle pas.", score: 0 },
           { text: "J'en parle à un collègue de confiance.", score: 1 },
           { text: "Je le signale à la sécurité informatique pour qu'ils alertent les autres.", score: 2 }]),
        lq("fp-4-2", "À quelle fréquence partagez-vous avec vos collègues les tentatives de phishing que vous avez reçues ?"),
        cq("fp-4-3", "Vous avez traité une demande urgente qui s'avère être une tentative de fraude. Comment réagissez-vous face à vous-même ?",
          [{ text: "Je m'en veux — j'aurais dû voir.", score: 0 },
           { text: "Je l'accepte — ces attaques sont de mieux en mieux construites.", score: 1 },
           { text: "J'analyse factuellement ce qui s'est passé et en fais un apprentissage partagé avec mon équipe.", score: 2 }]),
        cq("fp-4-4", "Suite à un incident cyber, de nouvelles consignes de sécurité contraignantes sont diffusées. Quelle est votre réaction ?",
          [{ text: "Je les applique mollement en attendant qu'elles soient allégées.", score: 0 },
           { text: "Je les applique strictement pendant la période critique.", score: 1 },
           { text: "Je les applique et contribue aux retours d'expérience pour les améliorer si elles s'avèrent inadaptées.", score: 2 }]),
        lq("fp-4-5", "À quelle fréquence participez-vous aux exercices de phishing ou simulations d'incidents organisés dans votre structure ?")
      ]
    },
    "mots-de-passe-acces": {
      "reperer-signaux": [
        cq("mp-1-1", "Vous recevez un email de « votre service IT » vous demandant de réinitialiser votre mot de passe suite à une mise à jour critique. Que faites-vous ?",
          [{ text: "Je clique sur le lien et réinitialise — le service IT envoie ce genre de demandes.", score: 0 },
           { text: "Je vérifie l'adresse de l'expéditeur avant de cliquer.", score: 1 },
           { text: "Je contacte le service IT via l'intranet ou le téléphone pour confirmer avant toute action.", score: 2 }]),
        lq("mp-1-2", "À quelle fréquence vérifiez-vous que les demandes liées à vos accès viennent bien des canaux officiels ?"),
        cq("mp-1-3", "Vous constatez des tentatives de connexion inhabituelles sur votre compte professionnel — heure décalée, localisation étrangère. Que faites-vous ?",
          [{ text: "Je surveille quelques jours pour voir si ça recommence.", score: 0 },
           { text: "Je change mon mot de passe en guise de précaution.", score: 1 },
           { text: "Je change immédiatement mon mot de passe, active le 2FA si ce n'est pas fait et signale à la sécurité informatique.", score: 2 }]),
        cq("mp-1-4", "Un email vous annonce que votre compte sera désactivé dans 24h si vous ne cliquez pas sur un lien de validation. Que faites-vous ?",
          [{ text: "Je clique rapidement pour éviter la désactivation.", score: 0 },
           { text: "Je vérifie attentivement l'adresse de l'expéditeur avant de cliquer.", score: 1 },
           { text: "Je contacte directement le service IT via l'intranet, sans utiliser aucun lien de l'email.", score: 2 }]),
        lq("mp-1-5", "À quelle fréquence vous interrogez-vous sur la façon dont vos accès pourraient être compromis, indépendamment de tout incident récent ?")
      ],
      "proteger-acces": [
        cq("mp-2-1", "Vous utilisez le même mot de passe « fort » sur plusieurs outils professionnels parce qu'il est complexe à retenir. Quelle est votre position sur cette pratique ?",
          [{ text: "C'est raisonnable — un mot de passe fort vaut mieux que plusieurs faibles.", score: 0 },
           { text: "Ce n'est pas idéal, mais les outils internes sont suffisamment sécurisés.", score: 0 },
           { text: "Je le sais problématique et compte diversifier prochainement.", score: 1 },
           { text: "Je diversifie activement et utilise un gestionnaire de mots de passe.", score: 2 }]),
        lq("mp-2-2", "À quelle fréquence utilisez-vous un gestionnaire de mots de passe pour vos accès professionnels ?"),
        cq("mp-2-3", "En télétravail, vous vous connectez depuis un réseau non maîtrisé — café, hôtel. Quelle est votre pratique ?",
          [{ text: "Je me connecte directement — les outils d'entreprise ont leur propre chiffrement.", score: 0 },
           { text: "J'évite les contenus les plus sensibles sur ces réseaux.", score: 1 },
           { text: "J'active systématiquement le VPN de l'entreprise avant toute connexion depuis un réseau non maîtrisé.", score: 2 }]),
        cq("mp-2-4", "On vous demande de créer un mot de passe pour un nouvel outil professionnel. Quelle est votre approche ?",
          [{ text: "Je crée un mot de passe mémorisable basé sur des informations personnelles — prénom, date.", score: 0 },
           { text: "Je mélange lettres, chiffres et caractères spéciaux sur un mot personnel.", score: 1 },
           { text: "Je génère un mot de passe long et aléatoire, stocké dans un gestionnaire dédié.", score: 2 }]),
        lq("mp-2-5", "À quelle fréquence activez-vous le 2FA sur les outils où il est disponible, sans attendre qu'on vous le demande ?")
      ],
      "partager-discernement": [
        cq("mp-3-1", "Un nouveau prestataire a besoin d'accéder temporairement à un outil interne. Comment gérez-vous cela ?",
          [{ text: "Je lui crée un accès avec mes propres identifiants — c'est plus rapide.", score: 0 },
           { text: "Je lui crée un compte temporaire personnel.", score: 1 },
           { text: "Je fais la demande d'un accès nominatif via le processus officiel, avec des droits limités à ses besoins.", score: 2 }]),
        lq("mp-3-2", "À quelle fréquence supprimez-vous les accès dont vous n'avez plus besoin, sans attendre qu'on vous le demande ?"),
        cq("mp-3-3", "En fin de collaboration avec un prestataire, vous oubliez de supprimer son accès. Vous le réalisez deux semaines plus tard. Que faites-vous ?",
          [{ text: "Vous laissez — le prestataire est de confiance.", score: 0 },
           { text: "Vous supprimez l'accès sans en parler.", score: 1 },
           { text: "Vous supprimez l'accès, vérifiez les logs d'activité et signalez l'oubli à votre responsable.", score: 2 }]),
        cq("mp-3-4", "Un collègue vous dit utiliser le même mot de passe sur tous ses outils professionnels parce qu'il est « complexe ». Que faites-vous ?",
          [{ text: "Vous ne dites rien — c'est sa responsabilité.", score: 0 },
           { text: "Vous lui expliquez brièvement pourquoi c'est risqué.", score: 1 },
           { text: "Vous lui expliquez les risques concrets et lui recommandez un gestionnaire de mots de passe.", score: 2 }]),
        lq("mp-3-5", "À quelle fréquence vérifiez-vous que les accès que vous détenez sont encore justifiés par vos missions actuelles ?")
      ],
      "reagir-signaler": [
        cq("mp-4-1", "Vous suspectez que votre mot de passe professionnel a été compromis — quelqu'un a peut-être vu votre écran. Que faites-vous ?",
          [{ text: "Je surveille quelques jours pour voir si quelque chose d'anormal se produit.", score: 0 },
           { text: "Je change immédiatement mon mot de passe.", score: 1 },
           { text: "Je change immédiatement mon mot de passe et en informe la sécurité informatique.", score: 2 }]),
        lq("mp-4-2", "À quelle fréquence signalez-vous immédiatement une suspicion de compromission de vos accès, sans attendre d'en être certain ?"),
        cq("mp-4-3", "Vous avez partagé un accès professionnel en situation d'urgence et réalisez ensuite que c'était une erreur. Que faites-vous ?",
          [{ text: "Vous ne dites rien — la situation était exceptionnelle et tout s'est bien passé.", score: 0 },
           { text: "Vous changez votre mot de passe en guise de précaution.", score: 1 },
           { text: "Vous changez le mot de passe, signalez l'incident et attendez une validation avant de reprendre l'outil.", score: 2 }]),
        cq("mp-4-4", "Un email de phishing ciblant les mots de passe est en circulation dans votre organisation. Un collègue ne semble pas au courant. Que faites-vous ?",
          [{ text: "Vous espérez que les équipes IT l'ont prévenu.", score: 0 },
           { text: "Vous lui signalez rapidement l'existence de la menace.", score: 1 },
           { text: "Vous lui signalez et lui transmettez les caractéristiques concrètes pour qu'il puisse reconnaître l'email.", score: 2 }]),
        lq("mp-4-5", "À quelle fréquence vous tenez-vous informé des nouvelles menaces liées aux mots de passe et aux accès ?")
      ]
    },
    "donnees-confidentielles": {
      "reperer-signaux": [
        cq("dc-1-1", "Un partenaire vous demande par email des informations sur les processus internes de votre organisation, en invoquant un audit de conformité. Que faites-vous ?",
          [{ text: "Je réponds — l'audit de conformité est une démarche normale.", score: 0 },
           { text: "Je transmets les informations générales sans entrer dans les détails sensibles.", score: 1 },
           { text: "Je vérifie l'identité du demandeur et la légitimité de la démarche avant toute réponse.", score: 2 }]),
        lq("dc-1-2", "À quelle fréquence identifiez-vous le degré de sensibilité d'une information avant de la transmettre ?"),
        cq("dc-1-3", "Un prestataire habituel vous demande, pour aller plus vite, des données auxquelles il n'a normalement pas accès. Que faites-vous ?",
          [{ text: "Je lui communique — c'est un partenaire de confiance.", score: 0 },
           { text: "Je lui donne accès à une partie des données demandées.", score: 1 },
           { text: "Je refuse, l'oriente vers le canal officiel et signale la demande atypique à mon responsable.", score: 2 }]),
        cq("dc-1-4", "Lors d'un déplacement, vous réalisez que quelqu'un photographie discrètement les plans affichés dans votre salle de réunion. Que faites-vous ?",
          [{ text: "Vous l'ignorez — les plans affichés ne semblent pas sensibles.", score: 0 },
           { text: "Vous lui demandez discrètement ce qu'il fait.", score: 1 },
           { text: "Vous interrompez la prise de vue et en informez immédiatement le responsable de la réunion.", score: 2 }]),
        lq("dc-1-5", "À quelle fréquence signalez-vous une demande d'information qui vous semble excessive ou hors cadre ?")
      ],
      "proteger-acces": [
        cq("dc-2-1", "Des plans ou schémas sensibles sont affichés dans une salle de réunion accessible aux visiteurs. Que faites-vous ?",
          [{ text: "Vous n'y prêtez pas attention — si c'est affiché, c'est acceptable.", score: 0 },
           { text: "Vous y pensez mais ne faites rien — ce n'est pas directement votre responsabilité.", score: 1 },
           { text: "Vous signalez la situation au responsable des lieux avant toute réunion avec des visiteurs.", score: 2 }]),
        lq("dc-2-2", "À quelle fréquence vérifiez-vous qu'aucun document sensible n'est visible par des personnes non habilitées depuis votre espace de travail ?"),
        cq("dc-2-3", "En open space, un visiteur accompagné circule dans la zone pendant que vous traitez des données sensibles. Comment réagissez-vous ?",
          [{ text: "Je continue normalement — il est accompagné.", score: 0 },
           { text: "Je retourne les documents les plus sensibles.", score: 1 },
           { text: "Je réduis systématiquement l'exposition des données sensibles dès qu'une personne non habilitée est présente.", score: 2 }]),
        cq("dc-2-4", "Vous êtes en télétravail et rejoignez une réunion vidéo sensible depuis un espace partagé. Que faites-vous ?",
          [{ text: "Je rejoins normalement — je suis dans un espace de travail professionnel.", score: 0 },
           { text: "Je baisse le son et veille à ne pas afficher de documents sensibles.", score: 1 },
           { text: "Je reporte ou quitte l'espace partagé avant de rejoindre la réunion.", score: 2 }]),
        lq("dc-2-5", "À quelle fréquence adaptez-vous vos pratiques de travail en fonction du niveau de sensibilité des données que vous traitez ?")
      ],
      "partager-discernement": [
        cq("dc-3-1", "Un client vous demande une copie des données personnelles le concernant. Que faites-vous ?",
          [{ text: "Je lui envoie directement les données demandées — c'est son droit.", score: 0 },
           { text: "Je vérifie son identité avant d'envoyer.", score: 1 },
           { text: "Je vérifie son identité et suis la procédure prévue pour ce type de demande (droits RGPD).", score: 2 }]),
        lq("dc-3-2", "À quelle fréquence consultez-vous le cadre applicable (politique interne, RGPD, contrat) avant de transmettre des données à un tiers ?"),
        cq("dc-3-3", "Vous devez partager des données personnelles avec un sous-traitant. Comment procédez-vous ?",
          [{ text: "Je lui envoie les données par email — il traite régulièrement avec nous.", score: 0 },
           { text: "Je chiffre le fichier avant de l'envoyer.", score: 1 },
           { text: "Je m'assure de l'accord de traitement, utilise le canal sécurisé préconisé et limite les données aux stricts besoins.", score: 2 }]),
        cq("dc-3-4", "Un collègue vous demande d'accéder à des données clients auxquelles il n'a normalement pas accès, pour une situation exceptionnelle. Que faites-vous ?",
          [{ text: "Je lui donne accès — je lui fais confiance et la situation le justifie.", score: 0 },
           { text: "Je lui donne accès en notant la situation.", score: 1 },
           { text: "Je refuse et l'oriente vers la procédure de demande d'accès exceptionnel prévue.", score: 2 }]),
        lq("dc-3-5", "À quelle fréquence vous assurez-vous que les données que vous traitez ne restent pas accessibles plus longtemps que nécessaire ?")
      ],
      "reagir-signaler": [
        cq("dc-4-1", "Vous réalisez avoir envoyé un email contenant des données sensibles au mauvais destinataire. Que faites-vous ?",
          [{ text: "J'envoie un email au mauvais destinataire pour lui demander de l'ignorer.", score: 0 },
           { text: "Je contacte le mauvais destinataire et préviens mon responsable.", score: 1 },
           { text: "Je contacte le mauvais destinataire, préviens mon responsable et signale l'incident via la procédure prévue (DPO si nécessaire).", score: 2 }]),
        lq("dc-4-2", "À quelle fréquence signalez-vous un incident de données, même mineur, via les canaux prévus plutôt que de le gérer seul ?"),
        cq("dc-4-3", "Lors d'un audit, vous réalisez que des données personnelles sont stockées dans un outil non autorisé depuis des mois. Que faites-vous ?",
          [{ text: "Vous régularisez en silence — ça n'a causé aucun problème visible.", score: 0 },
           { text: "Vous migrez les données et en informez votre responsable.", score: 1 },
           { text: "Vous migrez les données, informez votre responsable et signalez l'incident selon la procédure de gestion des incidents de données.", score: 2 }]),
        cq("dc-4-4", "Votre organisation subit une fuite de données. On vous demande de recenser vos partages récents avec des tiers. Comment procédez-vous ?",
          [{ text: "Je reconstitue de mémoire autant que possible.", score: 0 },
           { text: "Je cherche dans mes emails et documents les transmissions des dernières semaines.", score: 1 },
           { text: "Je reconstitue méthodiquement à partir des emails, des outils de partage et des logs d'accès disponibles.", score: 2 }]),
        lq("dc-4-5", "À quelle fréquence tenez-vous un suivi de ce que vous partagez avec des tiers, permettant de le retracer en cas d'incident ?")
      ]
    }
  };

  const CYBER_CHAPTER_DEFS_BY_AD = {
  "reflexes-cybersecurite": [
    ["reperer-signaux", "Repérer les situations à risque", "Identifier les signaux numériques sensibles dans les situations du quotidien."],
    ["proteger-acces", "Adopter les bons réflexes de protection", "Protéger ses accès, ses appareils et ses habitudes numériques."],
    ["partager-discernement", "Partager sans exposer inutilement", "Limiter les risques liés aux documents, destinataires et canaux de partage."],
    ["reagir-signaler", "Réagir sans paniquer", "Savoir quoi faire en cas de doute, d’erreur ou d’incident numérique."]
  ],

  "fraude-phishing": [
    ["reperer-signaux", "Détecter une tentative de manipulation", "Repérer les faux signaux de confiance, les demandes atypiques et les indices de fraude."],
    ["proteger-acces", "Résister aux pièges de connexion", "Éviter de saisir ses identifiants sur de faux liens ou de faux espaces sécurisés."],
    ["partager-discernement", "Vérifier avant d’agir", "Confirmer une identité, une demande urgente ou une preuve numérique avant toute action."],
    ["reagir-signaler", "Signaler et apprendre de l’incident", "Transformer une tentative de fraude ou un clic à risque en apprentissage collectif."]
  ],

  "mots-de-passe-acces": [
    ["reperer-signaux", "Repérer les alertes sur ses accès", "Identifier les demandes suspectes, connexions inhabituelles et signaux de compromission."],
    ["proteger-acces", "Créer et sécuriser ses mots de passe", "Utiliser des mots de passe robustes, uniques et protégés par les bons outils."],
    ["partager-discernement", "Gérer les droits et accès temporaires", "Limiter les accès aux besoins réels, éviter les partages et supprimer les accès inutiles."],
    ["reagir-signaler", "Réagir à une compromission", "Changer, signaler et sécuriser ses accès dès qu’un doute apparaît."]
  ],

  "donnees-confidentielles": [
    ["reperer-signaux", "Identifier les informations sensibles", "Reconnaître les données, documents ou demandes qui nécessitent une vigilance particulière."],
    ["proteger-acces", "Limiter l’exposition des données", "Éviter que des informations sensibles soient visibles, accessibles ou partagées hors cadre."],
    ["partager-discernement", "Choisir le bon canal de transmission", "Partager les données avec les bons droits, les bons destinataires et les bons outils."],
    ["reagir-signaler", "Réagir à une fuite ou une erreur de partage", "Signaler rapidement une erreur d’envoi, un accès non autorisé ou un incident de données."]
  ]
};

function buildCyberChapters(adId) {
  const defs = CYBER_CHAPTER_DEFS_BY_AD[adId] || CYBER_CHAPTER_DEFS_BY_AD["reflexes-cybersecurite"];

  return defs.map(function (def, i) {
    return {
      id:          adId + "-chap-" + (i + 1),
      title:       def[1],
      description: def[2],
      questions:   CQ[adId][def[0]],
      profiles:    CYBER_PROFILES[def[0]]
    };
  });
}

  // ─────────────────────────────────────────────────────────────────────────
  //  CATALOGUE RAW
  // ─────────────────────────────────────────────────────────────────────────


  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("cybersecurite", "Cybersécurité", "🔐", [
    ["reflexes-cybersecurite",  "Vos réflexes de cybersécurité au quotidien",     "Tous publics",   "Identifier les situations de cybersécurité sensibles, réagir sans paniquer et protéger les informations utiles.",       { built: buildCyberChapters("reflexes-cybersecurite") }],
    ["fraude-phishing",         "Détecter les tentatives de fraude numérique",    "Tous publics",   "Repérer les sollicitations douteuses, les demandes urgentes et les faux signaux de confiance.",                        { built: buildCyberChapters("fraude-phishing") }],
    ["mots-de-passe-acces",     "Gérer ses accès et ses mots de passe",           "Tous publics",   "Adopter les bons réflexes sur les mots de passe, le partage d'accès et les connexions.",                              { built: buildCyberChapters("mots-de-passe-acces") }],
    ["donnees-confidentielles", "Protéger les données et informations sensibles", "Collaborateurs", "Faire les bons arbitrages face aux documents, transferts, exports et accès aux données.",                             { built: buildCyberChapters("donnees-confidentielles") }]
  ]);

})();
