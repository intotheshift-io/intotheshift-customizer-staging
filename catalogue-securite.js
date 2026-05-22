/**
 * catalogue-securite.js — INTO THE SHIFT
 * Domaine : Sécurité & sûreté au travail (9 ADs)
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  // ─────────────────────────────────────────────────────────────────────────
  //  QUESTIONS RÉDIGÉES — Sécurité & sûreté
  //  Étend window.CUSTOM_QUESTIONS avec les entrées de ce domaine.
  // ─────────────────────────────────────────────────────────────────────────

  Object.assign(window.CUSTOM_QUESTIONS, {
  "culture-securite-terrain": {
    0: [
        {
          text: "Vous arrivez sur un poste de travail qu'un collègue vient de quitter. Il dit que tout est en ordre. Que faites-vous avant de démarrer ?",
          answers: [
          {text: "Je fais confiance à son évaluation et commence directement.", score: 0},
          {text: "Je fais un tour d'œil rapide sur les points qui me semblent essentiels.", score: 1},
          {text: "Je réalise ma propre vérification systématique, quelle que soit l'information transmise.", score: 2}
          ]
        },
        {
          text: "En cours d'opération, vous remarquez que l'éclairage de votre zone a baissé significativement. Ce n'est pas dangereux immédiatement, mais c'est inhabituellement sombre. Quelle est votre réaction ?",
          answers: [
          {text: "Je continue — ce n'est pas un risque direct.", score: 0},
          {text: "Je note le problème pour en parler à la fin de mon poste.", score: 1},
          {text: "Je signale immédiatement et attends que la situation soit clarifiée avant de reprendre.", score: 2}
          ]
        },
        {
          text: "Vous observez qu'un produit chimique est stocké à côté d'un équipement électrique, contrairement aux consignes. Personne d'autre ne semble y prêter attention. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — ce n'est pas ma zone directe.", score: 0},
          {text: "J'en parle à un collègue proche sans formaliser.", score: 1},
          {text: "Je signale l'anomalie et m'assure qu'elle est corrigée ou remontée.", score: 2}
          ]
        },
        {
          text: "Un collègue vous explique qu'il a modifié légèrement une procédure pour gagner du temps. Selon lui, le résultat est identique et c'est plus pratique. Quelle est votre réaction ?",
          answers: [
          {text: "Je l'imite si la méthode semble efficace.", score: 0},
          {text: "Je l'écoute mais continue avec la procédure officielle sans intervenir.", score: 1},
          {text: "Je lui signale que tout écart à la procédure doit être validé avant d'être appliqué.", score: 2}
          ]
        },
        {
          text: "Une zone habituellement interdite est accessible car le cadenas est cassé. Vous devez passer à côté. Que faites-vous ?",
          answers: [
          {text: "Je passe sans m'arrêter — je ne vais pas y entrer.", score: 0},
          {text: "Je fais attention en passant et en informe un collègue.", score: 1},
          {text: "Je signale immédiatement que l'accès n'est plus sécurisé.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous portez vos EPI depuis plusieurs heures. Ils sont inconfortables et vous avez chaud. Vous êtes seul dans la zone pour quelques minutes. Que faites-vous ?",
          answers: [
          {text: "Je retire ce qui me gêne le plus — juste quelques minutes.", score: 0},
          {text: "Je tiens encore un peu mais c'est difficile.", score: 1},
          {text: "Je maintiens l'ensemble de mes EPI : l'inconfort ne justifie pas de s'exposer.", score: 2}
          ]
        },
        {
          text: "Votre responsable vous demande d'accélérer pour rattraper le retard du planning. Une étape de vérification prend habituellement 10 minutes. Il dit qu'on peut l'alléger cette fois. Que faites-vous ?",
          answers: [
          {text: "J'allège la vérification pour tenir le délai.", score: 0},
          {text: "Je fais une vérification rapide sans appliquer toute la procédure.", score: 1},
          {text: "Je maintiens la procédure complète et informe mon responsable du délai que ça implique.", score: 2}
          ]
        },
        {
          text: "Vous devez réaliser une tâche avec un équipement que vous connaissez bien mais dont la vérification périodique est dépassée de quelques jours. L'équipement fonctionne normalement. Que faites-vous ?",
          answers: [
          {text: "Je l'utilise — il a l'air en bon état.", score: 0},
          {text: "Je l'utilise en faisant attention et signale le problème après.", score: 1},
          {text: "Je refuse de l'utiliser et remonte la situation avant de démarrer.", score: 2}
          ]
        },
        {
          text: "Lors d'une intervention en hauteur, vous réalisez que votre harnais n'est pas correctement ajusté. Vous avez déjà commencé à monter. Que faites-vous ?",
          answers: [
          {text: "Je fais attention et redescends dès que j'ai terminé.", score: 0},
          {text: "Je m'arrête à mi-hauteur et tente de réajuster sur place.", score: 1},
          {text: "Je redescends immédiatement pour ajuster l'équipement avant de remonter.", score: 2}
          ]
        },
        {
          text: "Un outil que vous utilisez régulièrement présente un léger défaut que vous avez appris à contourner. Personne d'autre n'est au courant. Que faites-vous ?",
          answers: [
          {text: "Je continue avec mon habitude de contournement — ça marche.", score: 0},
          {text: "J'en parle à un collègue mais sans le remonter officiellement.", score: 1},
          {text: "Je signale le défaut et utilise un autre outil jusqu'à réparation.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous êtes le plus expérimenté de votre équipe et un junior hésite à signaler une situation qu'il trouve risquée. Il vous demande si c'est vraiment nécessaire. Que lui répondez-vous ?",
          answers: [
          {text: "Je lui dis que si ça ne semble pas grave, inutile d'en faire une montagne.", score: 0},
          {text: "Je lui dis que c'est à lui de décider.", score: 1},
          {text: "Je l'encourage à signaler et l'aide à formuler son observation.", score: 2}
          ]
        },
        {
          text: "Votre équipe a développé une habitude informelle de ne pas faire le point sécurité quand la journée est chargée. Tout le monde a l'air de trouver ça normal. Quelle est votre position ?",
          answers: [
          {text: "Je m'aligne — si tout le monde fait pareil, c'est que c'est raisonnable.", score: 0},
          {text: "Je continue à faire mon propre point sans intervenir sur la dynamique collective.", score: 1},
          {text: "Je signale cette dérive à mon responsable ou la soulève lors d'un moment collectif.", score: 2}
          ]
        },
        {
          text: "Vous observez qu'un collègue réalise une tâche sans les protections adaptées. Il est plus ancien que vous et semble agacé quand on lui en parle. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — il connaît mieux le métier que moi.", score: 0},
          {text: "Je lui en parle rapidement sans insister.", score: 1},
          {text: "Je lui signale le risque de façon factuelle et, si nécessaire, je remonte la situation.", score: 2}
          ]
        },
        {
          text: "Après un incident mineur sans blessure, votre équipe reprend le travail rapidement. Personne ne parle de signalement. Que faites-vous ?",
          answers: [
          {text: "Je reprends le travail comme tout le monde.", score: 0},
          {text: "J'en parle discrètement à mon responsable.", score: 1},
          {text: "Je propose que l'incident soit formellement signalé, même sans blessure.", score: 2}
          ]
        },
        {
          text: "Un visiteur ou stagiaire dans votre zone ne porte pas ses EPI. Son accompagnateur ne réagit pas. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — ce n'est pas mon rôle de gérer les visiteurs.", score: 0},
          {text: "Je regarde si l'accompagnateur finit par intervenir.", score: 1},
          {text: "J'interpelle poliment le visiteur ou l'accompagnateur pour corriger la situation.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous avez observé une situation potentiellement dangereuse mais vous n'êtes pas certain qu'elle le soit vraiment. Vous hésitez à la signaler par peur de sembler alarmiste. Que faites-vous ?",
          answers: [
          {text: "Je ne signale pas — si je n'en suis pas sûr, mieux vaut ne rien dire.", score: 0},
          {text: "J'en parle informellement à un collègue.", score: 1},
          {text: "Je signale quand même en précisant mon niveau de certitude — c'est aux experts d'évaluer.", score: 2}
          ]
        },
        {
          text: "Vous signalez une anomalie et on vous répond que c'est connu et pas prioritaire. L'anomalie est toujours là deux semaines plus tard. Que faites-vous ?",
          answers: [
          {text: "J'attends — la décision appartient à la hiérarchie.", score: 0},
          {text: "J'en reparle à mon responsable en passant.", score: 1},
          {text: "Je relance formellement et demande un retour sur le traitement du signalement.", score: 2}
          ]
        },
        {
          text: "Lors d'un retour d'expérience collectif, l'ambiance pousse à ne pas trop creuser pour ne pas embarrasser quelqu'un. Comment réagissez-vous ?",
          answers: [
          {text: "Je reste silencieux — le collectif a décidé de passer à autre chose.", score: 0},
          {text: "Je soulève mon point discrètement après la réunion.", score: 1},
          {text: "J'insiste pour que les causes réelles soient examinées, même si c'est inconfortable.", score: 2}
          ]
        },
        {
          text: "Un presqu'accident s'est produit dans votre équipe et personne ne veut le mettre par écrit de peur des conséquences. Que faites-vous ?",
          answers: [
          {text: "Je respecte la décision collective — ce n'est pas à moi de prendre ce risque seul.", score: 0},
          {text: "Je le signale anonymement si je peux.", score: 1},
          {text: "Je signale formellement et explique à mes collègues pourquoi c'est important.", score: 2}
          ]
        },
        {
          text: "Votre entreprise a mis en place un outil de signalement numérique mais personne ne s'en sert vraiment. Que faites-vous ?",
          answers: [
          {text: "Je fais comme tout le monde et ne l'utilise pas.", score: 0},
          {text: "Je l'utilise pour moi mais n'en parle pas aux autres.", score: 1},
          {text: "Je l'utilise et partage avec mes collègues pourquoi ça aide l'équipe entière.", score: 2}
          ]
        }
    ],
  },

  "presquaccidents-signalement": {
    0: [
        {
          text: "Vous glissez légèrement sur le sol mouillé mais vous vous rattrapez sans vous blesser. Personne n'a vu. Que faites-vous ?",
          answers: [
          {text: "Rien — je ne me suis pas blessé.", score: 0},
          {text: "J'en parle à un collègue de façon informelle.", score: 1},
          {text: "Je signale formellement l'anomalie (sol glissant non signalé) pour prévenir un futur incident.", score: 2}
          ]
        },
        {
          text: "Vous oubliez de réenclencher un dispositif de sécurité après une intervention. Vous vous en rendez compte quelques minutes plus tard après l'avoir réactivé. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — j'ai corrigé moi-même.", score: 0},
          {text: "J'en parle à mon responsable de façon informelle.", score: 1},
          {text: "Je le consigne formellement comme presqu'accident pour que l'analyse soit faite.", score: 2}
          ]
        },
        {
          text: "Votre collègue vous raconte qu'une machine a failli lui tomber dessus mais qu'il a eu le bon réflexe. Il rigole en en parlant. Quelle est votre réaction ?",
          answers: [
          {text: "Je ris avec lui — tout va bien.", score: 0},
          {text: "Je lui dis qu'il a eu de la chance mais je n'insiste pas.", score: 1},
          {text: "Je l'encourage à signaler l'incident même si tout va bien — la chance n'est pas une barrière de sécurité.", score: 2}
          ]
        },
        {
          text: "Lors d'une opération, vous devez utiliser un équipement dont la sécurité n'était pas enclenchée. L'opération s'est bien passée. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — l'opération a réussi.", score: 0},
          {text: "Je m'assure de bien l'enclencher la prochaine fois.", score: 1},
          {text: "Je documente la situation comme presqu'accident pour analyser pourquoi la sécurité n'était pas en place.", score: 2}
          ]
        },
        {
          text: "Votre équipe vient de terminer un chantier sans accident. Vous vous souvenez d'au moins deux situations qui auraient pu mal tourner. Que faites-vous dans le bilan final ?",
          answers: [
          {text: "Je ne les mentionne pas — tout s'est bien terminé.", score: 0},
          {text: "J'en mentionne une, la plus sérieuse.", score: 1},
          {text: "Je les mentionne toutes les deux avec les détails utiles à l'analyse.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous voulez signaler un presqu'accident mais vous savez que ça va ralentir le planning du jour et votre responsable est sous pression. Que faites-vous ?",
          answers: [
          {text: "Je reporte le signalement à plus tard pour ne pas aggraver la situation.", score: 0},
          {text: "Je le signale mais en minimisant les détails pour que ça passe vite.", score: 1},
          {text: "Je le signale normalement — l'urgence opérationnelle ne change pas l'obligation de documenter.", score: 2}
          ]
        },
        {
          text: "Vous avez failli blesser un collègue par inattention. Il dit que ce n'est pas grave et qu'il n'y a pas besoin d'en faire une histoire. Que faites-vous ?",
          answers: [
          {text: "Je respecte son souhait — il est concerné au premier chef.", score: 0},
          {text: "Je lui demande de reconsidérer mais je m'arrête si il insiste.", score: 1},
          {text: "Je signale quand même l'incident — le signalement n'est pas une sanction, c'est une précaution.", score: 2}
          ]
        },
        {
          text: "Vous connaissez une zone à risque récurrent dans votre environnement de travail. Personne ne l'a encore officiellement signalé. Que faites-vous ?",
          answers: [
          {text: "J'attends qu'il y ait un incident pour que le signalement soit pris au sérieux.", score: 0},
          {text: "Je le mentionne verbalement à mon responsable.", score: 1},
          {text: "Je le documente formellement comme signal de risque récurrent.", score: 2}
          ]
        },
        {
          text: "Un prestataire dit ne pas être au courant qu'il devait remplir une fiche de signalement après un incident mineur. Que faites-vous ?",
          answers: [
          {text: "Je le laisse repartir — c'est à lui de connaître les règles.", score: 0},
          {text: "Je lui dis qu'il aurait dû mais ne l'aide pas davantage.", score: 1},
          {text: "Je lui explique le process et l'aide à remplir le document nécessaire.", score: 2}
          ]
        },
        {
          text: "Vous hésitez à signaler une situation parce que vous n'êtes pas sûr qu'elle entre dans la définition d'un presqu'accident. Que faites-vous ?",
          answers: [
          {text: "Je ne signale pas — mieux vaut ne pas créer de faux positifs.", score: 0},
          {text: "Je note l'information pour moi-même, sans la transmettre.", score: 1},
          {text: "Je signale en indiquant mon incertitude — c'est à la personne compétente de qualifier.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous devez rédiger un signalement mais vous ne vous souvenez plus précisément de certains détails. Que faites-vous ?",
          answers: [
          {text: "J'attends de me souvenir mieux avant de remplir le document.", score: 0},
          {text: "Je remplis avec ce dont je me souviens sans préciser les zones d'incertitude.", score: 1},
          {text: "Je remplis avec ce que je sais et j'indique clairement ce que je ne suis pas certain de mémoriser exactement.", score: 2}
          ]
        },
        {
          text: "Dans votre signalement, vous devez mentionner qu'un collègue n'avait pas appliqué une procédure. Il est ami avec votre responsable. Que faites-vous ?",
          answers: [
          {text: "Je n'en fais pas mention pour préserver la relation.", score: 0},
          {text: "Je mentionne l'écart de façon vague pour ne pas trop engager quelqu'un.", score: 1},
          {text: "Je décris les faits tels qu'ils se sont passés — factuel, sans jugement sur la personne.", score: 2}
          ]
        },
        {
          text: "Vous relisez un signalement rempli par un collègue et vous réalisez que des causes probables ont été omises. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — ce n'est pas mon signalement.", score: 0},
          {text: "Je lui signale en privé qu'il a oublié des éléments.", score: 1},
          {text: "Je lui propose de compléter ensemble pour que l'analyse soit exploitable.", score: 2}
          ]
        },
        {
          text: "Vous signalez un presqu'accident et votre responsable vous demande de retirer certains éléments qui 'pourraient mal passer'. Que faites-vous ?",
          answers: [
          {text: "Je modifie le document — mon responsable a le dernier mot.", score: 0},
          {text: "Je modifie en faisant une version moins détaillée.", score: 1},
          {text: "Je maintiens les éléments factuels et signale si nécessaire que ma description est contestée.", score: 2}
          ]
        },
        {
          text: "Vous avez rédigé un signalement mais vous ne savez pas à qui l'envoyer ni comment. Que faites-vous ?",
          answers: [
          {text: "Je laisse le document de côté en attendant de savoir.", score: 0},
          {text: "Je l'envoie à la première personne que je trouve.", score: 1},
          {text: "Je prends le temps de trouver le bon canal avant d'envoyer — même si ça prend un peu de temps.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un incident a été signalé il y a plusieurs semaines mais aucune action corrective n'a été visible. Que faites-vous ?",
          answers: [
          {text: "J'attends — les décisions appartiennent à la direction.", score: 0},
          {text: "J'en parle à mon responsable en passant.", score: 1},
          {text: "Je relance formellement et demande un retour sur le suivi du signalement.", score: 2}
          ]
        },
        {
          text: "Un retour d'expérience est organisé mais l'analyse reste en surface et personne ne questionne les causes profondes. Que faites-vous ?",
          answers: [
          {text: "Je suis le rythme de la réunion — ce n'est pas à moi de pousser plus loin.", score: 0},
          {text: "Je pose une question supplémentaire mais sans insister.", score: 1},
          {text: "Je propose d'explorer les causes systémiques plutôt que de s'arrêter à la cause immédiate.", score: 2}
          ]
        },
        {
          text: "Vous participez à un retour d'expérience et vous avez un élément d'analyse qui met en cause une décision collective. Vous hésitez à le dire. Que faites-vous ?",
          answers: [
          {text: "Je ne le dis pas — ça risque de froisser des gens.", score: 0},
          {text: "Je le dis de façon très indirecte pour ne pas vexer.", score: 1},
          {text: "Je l'exprime factuellement : l'objectif est d'apprendre, pas de trouver un coupable.", score: 2}
          ]
        },
        {
          text: "Après un accident, votre entreprise met en place une nouvelle procédure que votre équipe trouve trop contraignante. Que faites-vous ?",
          answers: [
          {text: "Je me range à l'avis de l'équipe — si tout le monde la trouve inutile, elle l'est probablement.", score: 0},
          {text: "Je l'applique pour moi mais je ne soutiens pas la décision auprès des autres.", score: 1},
          {text: "Je l'applique et propose par les voies officielles une révision si elle n'est pas adaptée.", score: 2}
          ]
        },
        {
          text: "Vous avez contribué à un REX et les recommandations ont été archivées sans suite. Que faites-vous dans cette situation ?",
          answers: [
          {text: "J'arrête de participer — c'est une perte de temps.", score: 0},
          {text: "Je continue à participer mais sans trop m'investir.", score: 1},
          {text: "Je pose la question du suivi des recommandations lors d'une prochaine réunion.", score: 2}
          ]
        }
    ],
  },

  "acces-sites-surete": {
    0: [
        {
          text: "Une personne que vous ne reconnaissez pas se tient devant une porte d'accès sécurisée et attend que quelqu'un lui ouvre. Elle semble attendre un interlocuteur interne. Que faites-vous ?",
          answers: [
          {text: "Je lui ouvre — elle attend quelqu'un, ça semble normal.", score: 0},
          {text: "Je lui demande qui elle attend et si elle a un badge.", score: 1},
          {text: "Je la redirige vers l'accueil et l'informe qu'elle doit passer par là pour tout accès.", score: 2}
          ]
        },
        {
          text: "Votre badge d'accès est en cours de renouvellement depuis plusieurs jours. En attendant, vous entrez grâce à un collègue qui vous ouvre. Quelle est votre attitude ?",
          answers: [
          {text: "Je me débrouille avec l'aide des collègues — c'est temporaire.", score: 0},
          {text: "J'utilise l'aide des collègues mais je relance le service concerné.", score: 1},
          {text: "Je traite cela comme une priorité : un accès non sécurisé est un problème, même temporaire.", score: 2}
          ]
        },
        {
          text: "Vous trouvez un badge d'accès sur le sol dans un couloir. Que faites-vous ?",
          answers: [
          {text: "Je le pose sur un bureau visible pour que le propriétaire le retrouve.", score: 0},
          {text: "Je le dépose à la réception.", score: 1},
          {text: "Je le remets à la sécurité ou à la personne compétente en signalant où je l'ai trouvé.", score: 2}
          ]
        },
        {
          text: "Un visiteur attendu vous contacte depuis l'extérieur pour que vous veniez l'accueillir directement sans passer par l'accueil officiel. Quelle est votre réponse ?",
          answers: [
          {text: "Je vais le chercher — c'est plus pratique et je le connais.", score: 0},
          {text: "Je lui demande d'aller à l'accueil et vais le rejoindre là-bas.", score: 1},
          {text: "Je lui explique que la procédure d'enregistrement est obligatoire, même pour les visiteurs connus.", score: 2}
          ]
        },
        {
          text: "Vous devez travailler tard et constatez qu'une porte coupe-feu est maintenue ouverte avec un objet pour faciliter les allées et venues. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — c'est pratique pour tout le monde.", score: 0},
          {text: "Je retire l'objet sans en parler à personne.", score: 1},
          {text: "Je retire l'objet et signale la situation pour qu'elle ne se reproduise pas.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous êtes dans une zone sécurisée et vous voyez une personne que vous ne connaissez pas qui travaille sans accompagnateur visible. Elle semble concentrée. Que faites-vous ?",
          answers: [
          {text: "Je continue ma route — elle a l'air de savoir ce qu'elle fait.", score: 0},
          {text: "Je l'observe depuis à distance pour voir si quelqu'un la rejoint.", score: 1},
          {text: "Je l'interpelle poliment pour vérifier si elle est bien autorisée à être dans cette zone.", score: 2}
          ]
        },
        {
          text: "Un technicien de maintenance que vous ne connaissez pas dit être attendu pour une intervention urgente. Il n'a pas de badge visible et son nom n'apparaît pas dans le planning. Que faites-vous ?",
          answers: [
          {text: "Je le laisse entrer — une intervention urgente, ça ne se reporte pas.", score: 0},
          {text: "Je lui demande sa carte de visite avant de lui ouvrir.", score: 1},
          {text: "Je contacte le responsable concerné pour confirmer l'intervention avant tout accès.", score: 2}
          ]
        },
        {
          text: "Vous quittez rapidement votre bureau et oubliez de verrouiller votre écran sur lequel sont affichées des informations confidentielles. Vous vous en rendez compte dans le couloir. Que faites-vous ?",
          answers: [
          {text: "Je continue — je reviens dans deux minutes.", score: 0},
          {text: "Je reviens mais sans y accorder trop d'importance.", score: 1},
          {text: "Je reviens immédiatement pour verrouiller l'écran.", score: 2}
          ]
        },
        {
          text: "Lors d'un événement interne, des visiteurs ont accès à des zones où sont affichés des organigrammes et plans internes. Vous remarquez cela. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas sensible — les visiteurs peuvent voir ça.", score: 0},
          {text: "Je note l'observation mentalement sans agir.", score: 1},
          {text: "Je signale la situation pour que les documents soient retirés ou la zone sécurisée.", score: 2}
          ]
        },
        {
          text: "Un collègue vous demande votre code d'accès car il a oublié le sien. Il est en urgence. Que faites-vous ?",
          answers: [
          {text: "Je lui donne — il est fiable et c'est une urgence.", score: 0},
          {text: "Je lui ouvre moi-même la porte sans lui donner le code.", score: 1},
          {text: "Je lui ouvre si nécessaire, mais je signale qu'il doit renouveler ses accès plutôt que de partager les miens.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous avez des documents imprimés contenant des informations sensibles sur votre bureau. Vous partez en réunion pour deux heures. Que faites-vous ?",
          answers: [
          {text: "Je les laisse sur mon bureau — je reviens dans l'après-midi.", score: 0},
          {text: "Je les retourne face contre table.", score: 1},
          {text: "Je les range dans un tiroir verrouillé ou dans un endroit sécurisé.", score: 2}
          ]
        },
        {
          text: "Lors d'une conversation informelle avec un prestataire, il vous pose des questions sur l'organisation interne de votre équipe et les responsables en poste. Quelle est votre réaction ?",
          answers: [
          {text: "Je réponds normalement — c'est des informations relativement accessibles.", score: 0},
          {text: "Je reste vague sur les détails sensibles.", score: 1},
          {text: "Je signale mentalement le caractère inhabituel de ces questions et en informe mon responsable si elles se précisent.", score: 2}
          ]
        },
        {
          text: "Vous devez envoyer un document interne confidentiel à un partenaire externe. Quelle est votre pratique ?",
          answers: [
          {text: "Je l'envoie par email comme d'habitude.", score: 0},
          {text: "Je demande à mon responsable si c'est OK avant d'envoyer.", score: 1},
          {text: "J'utilise le canal sécurisé prévu pour ce type de partage et je vérifie les droits du destinataire.", score: 2}
          ]
        },
        {
          text: "En télétravail, vous participez à une réunion sensible depuis un espace partagé (café, espace de coworking). Que faites-vous ?",
          answers: [
          {text: "Je participe normalement — je suis discret.", score: 0},
          {text: "Je baisse le son et évite d'afficher des documents à l'écran.", score: 1},
          {text: "Je préfère déplacer la réunion ou trouver un espace privé — les conversations sensibles ne se tiennent pas dans des espaces publics.", score: 2}
          ]
        },
        {
          text: "Votre ordinateur professionnel contient des données confidentielles. Vous le laissez dans votre voiture pendant deux heures pour une réunion. Que faites-vous ?",
          answers: [
          {text: "Je le laisse dans la voiture — c'est une courte durée.", score: 0},
          {text: "Je le laisse mais je m'assure qu'il est verrouillé et dans le coffre.", score: 1},
          {text: "Je l'emporte avec moi — les données sensibles ne restent pas sans surveillance.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous avez un doute sur une personne vue dans une zone restreinte mais vous n'êtes pas certain. Vous avez peur de vous tromper et de créer un incident pour rien. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — si ce n'est pas certain, mieux vaut ne pas réagir.", score: 0},
          {text: "J'en parle à un collègue pour avoir son avis avant d'agir.", score: 1},
          {text: "Je signale mon observation en précisant mes doutes — c'est à la sécurité de qualifier, pas à moi.", score: 2}
          ]
        },
        {
          text: "Vous avez signalé une situation suspecte qui s'avère anodine. Votre responsable le prend de façon neutre mais vous sentez que certains collègues trouvent cela excessif. Comment réagissez-vous ?",
          answers: [
          {text: "Je décide d'être plus discret la prochaine fois pour ne pas me faire remarquer.", score: 0},
          {text: "Je me dis que j'aurais peut-être dû attendre d'en savoir plus.", score: 1},
          {text: "Je maintiens ma posture : signaler un doute est la bonne attitude même si l'issue est anodine.", score: 2}
          ]
        },
        {
          text: "Un badge d'accès a été perdu mais le collaborateur concerné n'a pas encore signalé sa perte. Il pense le retrouver. Que faites-vous si vous l'apprenez ?",
          answers: [
          {text: "J'attends qu'il retrouve ou signale lui-même.", score: 0},
          {text: "Je lui conseille de signaler mais sans insister.", score: 1},
          {text: "Je lui rappelle l'obligation de signalement immédiat et lui propose de l'aider à le faire.", score: 2}
          ]
        },
        {
          text: "Votre site n'a pas eu d'incident de sécurité depuis longtemps. L'équipe est moins vigilante sur les procédures d'accès. Quelle est votre position ?",
          answers: [
          {text: "Si ça fait longtemps que tout va bien, c'est que les procédures allégées suffisent.", score: 0},
          {text: "Je maintiens mes propres habitudes sans chercher à influencer les autres.", score: 1},
          {text: "Je signale cette tendance à mon responsable — la tranquillité passée ne garantit rien pour l'avenir.", score: 2}
          ]
        },
        {
          text: "Votre entreprise vient de renforcer les procédures de contrôle d'accès. Certains collègues les trouvent excessives et les contournent. Que faites-vous ?",
          answers: [
          {text: "Je m'aligne — si tout le monde trouve ça excessif, c'est que c'est probablement le cas.", score: 0},
          {text: "Je les applique pour moi mais je ne dis rien sur les pratiques des autres.", score: 1},
          {text: "Je les applique et explique si on me le demande pourquoi ces procédures existent.", score: 2}
          ]
        }
    ],
  },

  "managers-securite": {
    0: [
        {
          text: "Votre équipe démarre chaque journée sans que vous fassiez un point sécurité formalisé. La réunion de chantier se concentre sur la production. Que faites-vous ?",
          answers: [
          {text: "Je laisse les choses comme elles sont — tout le monde connaît les règles.", score: 0},
          {text: "Je glisse un mot sur la sécurité quand une situation particulière le justifie.", score: 1},
          {text: "J'intègre un point sécurité systématique dans les rituels d'équipe, même court.", score: 2}
          ]
        },
        {
          text: "Une nouvelle règle de sécurité vient d'être introduite. Elle est contraignante et votre équipe ne comprend pas pourquoi elle existe. Que faites-vous ?",
          answers: [
          {text: "Je leur dis d'appliquer sans poser de question — c'est la règle.", score: 0},
          {text: "Je leur explique que c'est obligatoire sans rentrer dans les détails.", score: 1},
          {text: "Je leur explique le contexte et la raison de cette règle pour qu'ils l'appliquent en comprenant.", score: 2}
          ]
        },
        {
          text: "Vous constatez que deux procédures de sécurité sont contradictoires dans leur formulation. Votre équipe les applique de façons différentes selon les personnes. Que faites-vous ?",
          answers: [
          {text: "Je laisse chaque personne faire comme elle l'entend.", score: 0},
          {text: "Je tranche moi-même pour harmoniser la pratique.", score: 1},
          {text: "Je remonte l'incohérence au service compétent pour qu'une clarification officielle soit apportée.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande si une règle de sécurité s'applique vraiment à son cas précis. Vous n'êtes pas sûr. Que faites-vous ?",
          answers: [
          {text: "Je lui dis d'appliquer par précaution sans chercher à vérifier.", score: 0},
          {text: "Je lui donne mon interprétation personnelle.", score: 1},
          {text: "Je cherche la réponse auprès du bon interlocuteur avant de trancher.", score: 2}
          ]
        },
        {
          text: "Votre équipe applique correctement les règles de sécurité. Personne ne les questionne. Vous avez l'impression que c'est par conformisme plutôt que par conviction. Que faites-vous ?",
          answers: [
          {text: "Peu importe la raison — le résultat est bon.", score: 0},
          {text: "Je continue comme ça — la conformité est suffisante.", score: 1},
          {text: "Je cherche à créer des moments d'échange sur le sens des règles pour ancrer une vraie culture.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un collaborateur expérimenté ne met pas son EPI dans une zone où c'est obligatoire. Il dit que dans son cas c'est inutile. Que faites-vous ?",
          answers: [
          {text: "Je lui fais confiance — il connaît les risques mieux que moi.", score: 0},
          {text: "Je lui rappelle la règle sans trop insister.", score: 1},
          {text: "Je lui rappelle la règle fermement et cherche à comprendre ce qui rend l'EPI inconfortable pour lui.", score: 2}
          ]
        },
        {
          text: "Un écart de procédure vous est signalé par un membre de votre équipe. En enquêtant, vous réalisez que cet écart est collectif et ancien. Que faites-vous ?",
          answers: [
          {text: "Je sanctionne la personne qui a signalé pour que ça s'arrête.", score: 0},
          {text: "Je rappelle la règle à tout le monde.", score: 1},
          {text: "Je cherche à comprendre pourquoi cet écart s'est installé avant de décider comment agir.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous dit avoir commis un écart de sécurité par erreur. Il est visiblement gêné. Comment gérez-vous ce moment ?",
          answers: [
          {text: "Je le reprends sèchement pour que le message soit clair.", score: 0},
          {text: "Je note l'incident et lui rappelle la règle.", score: 1},
          {text: "Je commence par comprendre ce qui s'est passé avant d'aborder les conséquences.", score: 2}
          ]
        },
        {
          text: "Votre équipe a eu un accident sans gravité. L'ambiance est tendue. Certains se renvoient la responsabilité. Que faites-vous en premier ?",
          answers: [
          {text: "J'identifie le responsable pour clarifier les choses.", score: 0},
          {text: "Je calme les tensions et remets la discussion à plus tard.", score: 1},
          {text: "Je stabilise l'ambiance et oriente vers une analyse collective des causes sans chercher à désigner quelqu'un.", score: 2}
          ]
        },
        {
          text: "Un collaborateur contourne régulièrement une procédure mais ses résultats sont bons et sans incident. Vous le savez depuis un moment. Que faites-vous ?",
          answers: [
          {text: "Je ferme les yeux — il s'en sort bien.", score: 0},
          {text: "Je lui en parle discrètement sans formaliser.", score: 1},
          {text: "J'aborde le sujet clairement : les bons résultats ne valident pas un écart de procédure.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Votre hiérarchie vous demande d'accélérer sur un chantier qui accumule du retard. La pression est forte. Une étape de sécurité va prendre du temps. Que faites-vous ?",
          answers: [
          {text: "J'allège l'étape de sécurité pour tenir le délai.", score: 0},
          {text: "Je fais l'étape de sécurité mais plus rapidement.", score: 1},
          {text: "Je maintiens l'étape de sécurité et signale à ma hiérarchie l'arbitrage que ça implique.", score: 2}
          ]
        },
        {
          text: "Un client ou une direction vous pousse à prendre une décision opérationnelle qui, selon vous, met en jeu la sécurité. Que faites-vous ?",
          answers: [
          {text: "Je m'exécute — la pression extérieure est légitime.", score: 0},
          {text: "Je soulève la question mais je cède si la pression persiste.", score: 1},
          {text: "Je maintiens ma position et escalade si nécessaire — la sécurité ne se négocie pas.", score: 2}
          ]
        },
        {
          text: "Votre équipe est en pleine activité et un collaborateur vient vous signaler une anomalie mineure. Vous êtes très occupé. Que faites-vous ?",
          answers: [
          {text: "Je lui dis de revenir plus tard.", score: 0},
          {text: "Je l'écoute rapidement et lui dis de gérer.", score: 1},
          {text: "Je prends le temps d'évaluer l'information même si je suis sous pression.", score: 2}
          ]
        },
        {
          text: "Un pic d'activité force votre équipe à travailler dans des conditions dégradées depuis plusieurs jours. Que faites-vous ?",
          answers: [
          {text: "Je gère l'urgence et on analysera les conditions après.", score: 0},
          {text: "Je surveille de près mais j'attends que la charge diminue.", score: 1},
          {text: "Je signale à ma hiérarchie que les conditions dégradées créent un risque sécurité croissant.", score: 2}
          ]
        },
        {
          text: "Un sous-traitant travaille dans votre zone sans avoir reçu les consignes de sécurité spécifiques au site. Son responsable n'est pas joignable. Que faites-vous ?",
          answers: [
          {text: "Je le laisse travailler — ce n'est pas ma responsabilité.", score: 0},
          {text: "Je lui donne quelques consignes de base rapidement.", score: 1},
          {text: "Je l'informe qu'il ne peut pas démarrer sans les consignes complètes et je gère la situation.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre site n'a pas eu d'incident depuis 6 mois. L'équipe est fière mais commence à relâcher certaines vigilances. Que faites-vous ?",
          answers: [
          {text: "Je laisse faire — les bons résultats parlent d'eux-mêmes.", score: 0},
          {text: "Je rappelle les règles en réunion sans lier ça à la baisse de vigilance.", score: 1},
          {text: "Je nomme la dynamique observée et crée un moment d'échange sur ce que l'absence d'incident ne garantit pas.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous dit que les points sécurité hebdomadaires sont redondants et inutiles. Il suggère de les supprimer. Que faites-vous ?",
          answers: [
          {text: "Je les supprime si l'équipe est d'accord.", score: 0},
          {text: "Je maintiens mais en réduisant la durée.", score: 1},
          {text: "J'utilise cette question comme opportunité de retravailler le format pour le rendre plus utile.", score: 2}
          ]
        },
        {
          text: "Après plusieurs mois calmes, vous observez de petits glissements : EPI mal portés, vérifications bâclées. Personne ne dit rien. Quelle est votre réaction ?",
          answers: [
          {text: "J'attends un événement déclencheur pour agir.", score: 0},
          {text: "J'en parle en réunion de façon générale.", score: 1},
          {text: "Je nomme les comportements observés et remets le sujet sur la table avant qu'un incident se produise.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous remonte qu'un collègue a eu peur lors d'une opération mais n'a rien dit par gêne. Que faites-vous ?",
          answers: [
          {text: "Je ne fais rien — si rien ne s'est passé, c'est que c'était géré.", score: 0},
          {text: "Je parle à ce collègue pour voir s'il va bien.", score: 1},
          {text: "J'en fais l'occasion d'un échange d'équipe sur le droit d'exprimer un doute sans crainte.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que votre équipe signale moins qu'avant, sans raison apparente. Que faites-vous ?",
          answers: [
          {text: "J'attends de voir si ça se confirme dans le temps.", score: 0},
          {text: "Je rappelle l'obligation de signalement en réunion.", score: 1},
          {text: "Je cherche à comprendre ce qui a changé et si quelque chose freine la parole.", score: 2}
          ]
        }
    ],
  },

  "coactivite-sous-traitance": {
    0: [
        {
          text: "Deux équipes doivent intervenir dans la même zone le même jour. Personne n'a formalisé qui intervient en premier ni les zones de chacun. Que faites-vous ?",
          answers: [
          {text: "Je démarre de mon côté et on s'arrange au fil de l'eau.", score: 0},
          {text: "Je contacte le responsable de l'autre équipe pour s'organiser oralement.", score: 1},
          {text: "Je demande qu'un plan de coactivité soit établi avant tout démarrage.", score: 2}
          ]
        },
        {
          text: "Vous découvrez au dernier moment qu'un prestataire doit intervenir dans votre zone pendant que vous travaillez. Il n'a pas été annoncé. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — la coordination se fera naturellement.", score: 0},
          {text: "Je préviens mon responsable et travaille en faisant attention.", score: 1},
          {text: "Je demande que son intervention soit officiellement planifiée et intégrée à mon plan de travail.", score: 2}
          ]
        },
        {
          text: "Un sous-traitant vous demande d'accéder à une zone où vous travaillez sans avoir le plan de prévention correspondant. Il dit que ça ne devrait pas prendre longtemps. Que faites-vous ?",
          answers: [
          {text: "Je le laisse entrer — c'est court et il semble compétent.", score: 0},
          {text: "Je lui pose quelques questions et l'oriente vers la zone la moins risquée.", score: 1},
          {text: "Je lui explique qu'il ne peut pas entrer sans le plan de prévention validé.", score: 2}
          ]
        },
        {
          text: "Vous animez un point de coordination de chantier avec plusieurs intervenants. L'un d'eux ne s'est pas présenté. Que faites-vous ?",
          answers: [
          {text: "Je commence sans lui — l'équipe présente est suffisante.", score: 0},
          {text: "Je l'appelle rapidement et continue sans attendre trop.", score: 1},
          {text: "Je m'assure qu'il est bien informé des décisions avant que son équipe intervienne.", score: 2}
          ]
        },
        {
          text: "Deux prestataires ont des pratiques incompatibles pour une même opération. Aucun ne veut changer. Que faites-vous ?",
          answers: [
          {text: "Je les laisse trouver un arrangement entre eux.", score: 0},
          {text: "Je tranche moi-même en choisissant la méthode qui me semble la meilleure.", score: 1},
          {text: "Je remonte la situation au coordinateur de site pour qu'une décision formelle soit prise.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Votre zone de travail n'est pas clairement balisée par rapport à celle du prestataire qui intervient en parallèle. Que faites-vous ?",
          answers: [
          {text: "On voit bien la limite de façon intuitive — pas besoin de balisage supplémentaire.", score: 0},
          {text: "Je fais un balisage sommaire avec ce que j'ai sous la main.", score: 1},
          {text: "Je mets en place un balisage conforme et l'indique aux deux équipes.", score: 2}
          ]
        },
        {
          text: "Un prestataire entre dans votre zone sans s'annoncer, pensant que c'était libre. Vous êtes en cours d'opération. Que faites-vous ?",
          answers: [
          {text: "Je le laisse faire — il a l'air de savoir ce qu'il fait.", score: 0},
          {text: "Je l'arrête et lui demande de faire attention.", score: 1},
          {text: "Je l'arrête, explique la situation et organise une coordination avant toute reprise.", score: 2}
          ]
        },
        {
          text: "Vous avez un doute sur les habilitations d'un sous-traitant pour une zone spécifique. Il affirme être qualifié. Que faites-vous ?",
          answers: [
          {text: "Je le crois sur parole — il est responsable de ses habilitations.", score: 0},
          {text: "Je vérifie rapidement avec son responsable.", score: 1},
          {text: "Je vérifie les documents avant de l'autoriser à accéder à la zone.", score: 2}
          ]
        },
        {
          text: "Un prestataire n'a pas été informé d'une modification de dernière minute dans les conditions d'accès à la zone. Vous le savez. Que faites-vous ?",
          answers: [
          {text: "Je suppose que son responsable l'a informé.", score: 0},
          {text: "Je lui dis rapidement ce qui a changé.", score: 1},
          {text: "Je m'assure qu'il reçoit l'information formellement et qu'il a tout ce dont il a besoin pour adapter son intervention.", score: 2}
          ]
        },
        {
          text: "Deux équipes présentent des vitesses d'avancement très différentes, créant des zones d'interférence non prévues. Que faites-vous ?",
          answers: [
          {text: "On adapte au fil de l'eau.", score: 0},
          {text: "J'en informe mon responsable.", score: 1},
          {text: "Je propose une réunion de coordination pour réviser le planning et les zones.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un sous-traitant intervenant sur votre site ne parle pas la même langue que vos équipes. Les consignes de sécurité n'ont pas été traduites. Que faites-vous ?",
          answers: [
          {text: "Je suppose que son chef d'équipe lui a expliqué.", score: 0},
          {text: "Je tente de communiquer par gestes pour les points importants.", score: 1},
          {text: "Je remonte la situation pour que des consignes adaptées soient fournies avant toute intervention.", score: 2}
          ]
        },
        {
          text: "Un prestataire vous demande d'utiliser vos équipements car les siens sont défectueux. Que faites-vous ?",
          answers: [
          {text: "Je lui prête — il en a besoin et c'est logique de s'entraider.", score: 0},
          {text: "Je lui prête un équipement basique en lui expliquant comment l'utiliser.", score: 1},
          {text: "Je refuse et remonte la situation à mon responsable — les équipements du prestataire doivent être conformes avant intervention.", score: 2}
          ]
        },
        {
          text: "Vous découvrez qu'un prestataire a utilisé une entrée de secours pour accéder au site car la principale était encombrée. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas grave — il a trouvé une solution pratique.", score: 0},
          {text: "Je lui explique que ce n'est pas la bonne voie mais je ne formalise pas.", score: 1},
          {text: "Je signale l'accès non contrôlé et demande que les voies d'accès soient clarifiées.", score: 2}
          ]
        },
        {
          text: "Un interlocuteur prestataire est remplacé en urgence par quelqu'un qui ne connaît pas le site. Que faites-vous ?",
          answers: [
          {text: "Je le laisse se débrouiller — il est professionnel.", score: 0},
          {text: "Je lui donne les grandes lignes rapidement.", score: 1},
          {text: "Je m'assure qu'il reçoit un accueil sécurité complet avant de démarrer, même si ça prend du temps.", score: 2}
          ]
        },
        {
          text: "La fin de chantier approche et plusieurs prestataires travaillent en parallèle. La coordination se fait moins rigoureusement. Que faites-vous ?",
          answers: [
          {text: "C'est normal en fin de chantier — tout le monde accélère.", score: 0},
          {text: "Je reste prudent de mon côté mais sans intervenir sur les autres.", score: 1},
          {text: "Je propose une coordination renforcée pour la phase finale, qui est souvent la plus risquée.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un incident se produit dans une zone partagée entre votre équipe et un prestataire. Les deux parties se renvoient la responsabilité. Que faites-vous ?",
          answers: [
          {text: "Je défends la position de mon équipe.", score: 0},
          {text: "Je laisse les responsables gérer.", score: 1},
          {text: "Je documente les faits tels qu'ils se sont passés et coopère à l'analyse sans chercher à désigner un coupable.", score: 2}
          ]
        },
        {
          text: "Suite à un incident impliquant un sous-traitant, son entreprise demande à accéder aux données du signalement. Que faites-vous ?",
          answers: [
          {text: "Je leur communique le document complet.", score: 0},
          {text: "J'en parle à mon responsable avant de décider.", score: 1},
          {text: "Je transmets la demande à la personne compétente et n'agis pas de façon unilatérale.", score: 2}
          ]
        },
        {
          text: "Un prestataire a été blessé sur votre site dans une zone dont vous étiez responsable. Quelle est votre première réaction ?",
          answers: [
          {text: "Je sécurise la zone et attends les instructions.", score: 0},
          {text: "Je préviens les secours et mon responsable.", score: 1},
          {text: "Je préviens les secours, sécurise la zone, préserve les éléments de l'incident et contacte immédiatement les personnes compétentes.", score: 2}
          ]
        },
        {
          text: "Après un incident de coactivité, le prestataire propose d'arranger les choses informellement pour éviter des complications administratives. Que faites-vous ?",
          answers: [
          {text: "J'accepte si ça simplifie la situation pour tout le monde.", score: 0},
          {text: "Je refuse mais sans en faire une affaire.", score: 1},
          {text: "Je refuse clairement et maintiens les procédures de déclaration qui s'imposent.", score: 2}
          ]
        },
        {
          text: "Un prestataire quitte le site avant d'avoir fait le bilan de clôture d'intervention prévu. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — il devait partir.", score: 0},
          {text: "J'en informe mon responsable pour information.", score: 1},
          {text: "Je signale l'absence de bilan et demande qu'il soit réalisé même tardivement.", score: 2}
          ]
        }
    ],
  },

  "epi-gestes-securite": {
    0: [
        {
          text: "Vous êtes à court d'un EPI spécifique et devez attendre son réapprovisionnement. Votre tâche est urgente. Que faites-vous ?",
          answers: [
          {text: "Je réalise la tâche — l'urgence prime.", score: 0},
          {text: "Je fais la tâche en faisant davantage attention.", score: 1},
          {text: "Je suspends la tâche et signale le manque d'EPI avant de reprendre.", score: 2}
          ]
        },
        {
          text: "Vous vérifiez un EPI avant utilisation et vous trouvez un défaut mineur. L'EPI est encore fonctionnel selon vous. Que faites-vous ?",
          answers: [
          {text: "Je l'utilise — le défaut est mineur.", score: 0},
          {text: "Je l'utilise mais je signale le défaut après ma tâche.", score: 1},
          {text: "Je le mets de côté et en prends un en bon état avant de démarrer.", score: 2}
          ]
        },
        {
          text: "Votre EPI habituel est inconfortable et vous ralentit. Un collègue ne porte pas le sien et semble travailler sans difficulté. Que faites-vous ?",
          answers: [
          {text: "Je retire également le mien — l'inconfort n'est pas justifié.", score: 0},
          {text: "Je garde le mien mais je comprends la position du collègue.", score: 1},
          {text: "Je garde le mien et, si la gêne est réelle, je le signale pour qu'une solution soit trouvée.", score: 2}
          ]
        },
        {
          text: "Vous êtes pressé de démarrer une tâche et l'EPI requis prend du temps à enfiler correctement. Que faites-vous ?",
          answers: [
          {text: "Je le mets rapidement sans trop vérifier l'ajustement.", score: 0},
          {text: "Je le mets correctement mais plus vite que d'habitude.", score: 1},
          {text: "Je prends le temps nécessaire pour l'enfiler correctement même si ça retarde le démarrage.", score: 2}
          ]
        },
        {
          text: "Un EPI est disponible mais n'est pas obligatoire pour votre tâche selon les procédures, bien qu'il apporte une protection supplémentaire. Que faites-vous ?",
          answers: [
          {text: "Je ne le mets pas — ce n'est pas obligatoire.", score: 0},
          {text: "Je l'utilise quand je sens que le risque est plus élevé.", score: 1},
          {text: "J'évalue si l'utilisation est pertinente et je l'utilise si elle améliore ma protection sans créer d'autres risques.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Lors d'une opération difficile et physiquement éprouvante, vous avez l'habitude d'enlever certains EPI dans les moments de pause même si vous restez dans la zone. Quelle est votre pratique ?",
          answers: [
          {text: "Je les enlève — la pause est un moment de récupération.", score: 0},
          {text: "J'enlève les plus contraignants mais garde les essentiels.", score: 1},
          {text: "Je maintiens l'ensemble de mes EPI tant que je suis dans la zone concernée.", score: 2}
          ]
        },
        {
          text: "Vous réalisez une tâche identique à celle d'hier mais dans un contexte légèrement différent (météo, luminosité, sol). Vos EPI sont les mêmes. Que faites-vous avant de démarrer ?",
          answers: [
          {text: "Je démarre directement — c'est la même tâche.", score: 0},
          {text: "Je vérifie rapidement si le contexte change quelque chose.", score: 1},
          {text: "J'évalue si le changement de conditions nécessite des adaptations dans mes protections.", score: 2}
          ]
        },
        {
          text: "Un EPI collectif (garde-corps, bâche, écran) a été enlevé ou déplacé par une autre équipe pendant votre pause. Que faites-vous ?",
          answers: [
          {text: "Je travaille en faisant attention.", score: 0},
          {text: "Je le remets en place si je peux facilement.", score: 1},
          {text: "Je le remets en place et signale son déplacement non autorisé.", score: 2}
          ]
        },
        {
          text: "Vous observez qu'un EPI collectif n'est plus adapté à la configuration du chantier après une modification. Que faites-vous ?",
          answers: [
          {text: "Je continue — les autres n'ont pas l'air de voir de problème.", score: 0},
          {text: "Je le signale à mon responsable directement.", score: 1},
          {text: "Je signale la non-conformité et suspends les travaux dans la zone jusqu'à correction.", score: 2}
          ]
        },
        {
          text: "En fin de journée, vous êtes fatigué et il reste une petite tâche. Vous avez déjà rangé vos EPI. Que faites-vous ?",
          answers: [
          {text: "Je fais la tâche rapidement — c'est court.", score: 0},
          {text: "Je réfléchis au risque et décide au cas par cas.", score: 1},
          {text: "Je remet mes EPI avant de réaliser la tâche, quelle qu'en soit la durée.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous constatez qu'un EPI présent dans votre zone n'a pas été vérifié depuis longtemps. Il n'est pas en cours d'utilisation. Que faites-vous ?",
          answers: [
          {text: "Je le laisse — personne n'en a besoin pour l'instant.", score: 0},
          {text: "Je le mets de côté pour qu'il ne soit pas utilisé.", score: 1},
          {text: "Je le signale et déclenche sa mise en vérification.", score: 2}
          ]
        },
        {
          text: "Un extincteur dans votre zone a sa date de contrôle dépassée. Ce n'est pas votre mission principale de le surveiller. Que faites-vous ?",
          answers: [
          {text: "Je n'en fais pas mention — ce n'est pas ma responsabilité.", score: 0},
          {text: "Je l'indique à mon responsable en passant.", score: 1},
          {text: "Je le signale formellement pour qu'une vérification soit déclenchée rapidement.", score: 2}
          ]
        },
        {
          text: "Vous découvrez qu'un équipement de protection collective a été accidentellement endommagé lors d'une opération et qu'il n'a pas encore été signalé. Que faites-vous ?",
          answers: [
          {text: "J'attends que quelqu'un d'autre le signale.", score: 0},
          {text: "Je le signale verbalement à mon responsable.", score: 1},
          {text: "Je le signale immédiatement et m'assure que la zone concernée est sécurisée en attendant la réparation.", score: 2}
          ]
        },
        {
          text: "Lors d'un contrôle, un EPI qui ne vous appartient pas est identifié comme défectueux. Son propriétaire n'est pas là. Que faites-vous ?",
          answers: [
          {text: "Je le laisse — le propriétaire le verra quand il reviendra.", score: 0},
          {text: "Je le mets de côté pour qu'il ne soit pas utilisé par erreur.", score: 1},
          {text: "Je le mets de côté, le signale et préviens le propriétaire dès que possible.", score: 2}
          ]
        },
        {
          text: "Un EPI de remplacement que vous avez trouvé n'est pas exactement le même modèle que le vôtre. Il semble adapté mais vous n'en êtes pas sûr. Que faites-vous ?",
          answers: [
          {text: "Je l'utilise — il couvre la même zone et semble équivalent.", score: 0},
          {text: "Je l'utilise mais je le signale après.", score: 1},
          {text: "Je vérifie sa conformité avec les exigences du poste avant de l'utiliser.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous êtes le seul à porter systématiquement ses EPI dans votre équipe. Les autres vous taquinent. Quelle est votre réaction ?",
          answers: [
          {text: "Je prends cela avec légèreté et m'interroge sur ma propre rigidité.", score: 0},
          {text: "Je maintiens mes pratiques sans rien dire.", score: 1},
          {text: "Je maintiens mes pratiques et, si c'est le bon moment, j'explique pourquoi je le fais.", score: 2}
          ]
        },
        {
          text: "Un collaborateur junior vous demande si les EPI sont vraiment nécessaires pour une tâche courte. Que lui répondez-vous ?",
          answers: [
          {text: "Je lui dis que c'est à lui de juger selon la situation.", score: 0},
          {text: "Je lui dis que c'est obligatoire sans expliquer davantage.", score: 1},
          {text: "Je lui explique pourquoi les EPI sont importants même pour les tâches courtes et l'aide à les porter correctement.", score: 2}
          ]
        },
        {
          text: "Vous observez qu'un collègue porte son casque de façon incorrecte (courroie non attachée). C'est habituel chez lui. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — il sait ce qu'il fait.", score: 0},
          {text: "Je lui en parle une fois mais sans insister.", score: 1},
          {text: "Je lui signale de façon factuelle et m'assure qu'il comprend l'importance de l'ajustement.", score: 2}
          ]
        },
        {
          text: "Votre équipe a pris l'habitude de ranger les EPI dans un endroit peu pratique, ce qui décourage leur utilisation. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte comme tout le monde.", score: 0},
          {text: "Je range les miens à un endroit accessible pour moi.", score: 1},
          {text: "Je propose une solution d'organisation plus pratique pour faciliter leur usage par tous.", score: 2}
          ]
        },
        {
          text: "Un prestataire travaillant dans votre zone n'a pas les EPI adaptés à votre site. Il dit que les siens sont équivalents. Que faites-vous ?",
          answers: [
          {text: "Je le laisse travailler — il est responsable de ses propres EPI.", score: 0},
          {text: "Je lui signale que ses EPI devraient être vérifiés.", score: 1},
          {text: "Je remonte la situation à mon responsable pour que la conformité soit vérifiée avant qu'il continue.", score: 2}
          ]
        }
    ],
  },

  "securite-manager-arbitrage": {
    0: [
        {
          text: "Un délai client est avancé de deux jours et votre hiérarchie vous demande d'absorber cette contrainte. Une étape de vérification sécurité risque d'être sacrifiée. Que faites-vous ?",
          answers: [
          {text: "Je supprime la vérification — le client est prioritaire.", score: 0},
          {text: "Je la raccourcis pour gagner du temps.", score: 1},
          {text: "Je maintiens la vérification et signale à ma hiérarchie l'arbitrage qu'implique ce délai.", score: 2}
          ]
        },
        {
          text: "Votre équipe a pris du retard à cause d'aléas extérieurs. La pression est forte pour rattraper le temps perdu. Des opérations qui nécessitent normalement deux personnes sont réalisées seul pour aller plus vite. Quelle est votre position ?",
          answers: [
          {text: "J'accepte — c'est une situation exceptionnelle.", score: 0},
          {text: "Je tolère pour certaines tâches mais pas pour les plus risquées.", score: 1},
          {text: "Je maintiens les effectifs requis pour toute opération identifiée comme nécessitant deux personnes.", score: 2}
          ]
        },
        {
          text: "Un directeur de site vous dit que le niveau de vigilance de vos équipes est 'excessif' et ralentit la production. Que faites-vous ?",
          answers: [
          {text: "Je cherche comment alléger les procédures.", score: 0},
          {text: "J'écoute mais ne change rien sans avoir analysé ce qui est réellement excessif.", score: 1},
          {text: "Je défends la pertinence des pratiques actuelles et propose un échange factuel sur les arbitrages.", score: 2}
          ]
        },
        {
          text: "Vous êtes sollicité pour valider une opération qui respecte la lettre des procédures mais qui vous semble risquée dans les conditions du jour. Que faites-vous ?",
          answers: [
          {text: "Je valide — les procédures ont été respectées.", score: 0},
          {text: "Je valide avec des réserves orales.", score: 1},
          {text: "Je refuse de valider et explique pourquoi les conditions du jour changent le niveau de risque.", score: 2}
          ]
        },
        {
          text: "Un de vos collaborateurs vous propose une méthode plus rapide pour une opération. Elle ne viole pas les règles mais vous n'êtes pas sûr qu'elle ait été validée. Que faites-vous ?",
          answers: [
          {text: "Je l'autorise — si ce n'est pas interdit, c'est permis.", score: 0},
          {text: "Je l'autorise avec prudence en demandant qu'on reste attentifs.", score: 1},
          {text: "Je vérifie si cette méthode a été évaluée avant de l'autoriser.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Votre équipe a eu un comportement à risque qui n'a pas causé d'incident. Comment traitez-vous le sujet ?",
          answers: [
          {text: "Je ne dis rien — il n'y a pas eu de conséquences.", score: 0},
          {text: "Je fais un rappel général lors d'une réunion.", score: 1},
          {text: "J'aborde le sujet directement avec les personnes concernées en cherchant à comprendre ce qui s'est passé.", score: 2}
          ]
        },
        {
          text: "Un collaborateur a réalisé une opération seul en dehors du cadre prévu. Il l'a bien gérée. Comment réagissez-vous ?",
          answers: [
          {text: "Je le félicite pour l'initiative.", score: 0},
          {text: "Je lui rappelle qu'il n'aurait pas dû faire seul.", score: 1},
          {text: "Je cherche d'abord à comprendre pourquoi il a pris cette décision avant de traiter l'écart.", score: 2}
          ]
        },
        {
          text: "Vous découvrez qu'une pratique courante dans votre équipe ne respecte pas strictement une procédure, sans que ça n'ait posé de problème jusqu'ici. Que faites-vous ?",
          answers: [
          {text: "Je laisse faire — l'expérience montre que ça marche.", score: 0},
          {text: "Je rappelle la procédure sans analyser pourquoi l'écart s'est installé.", score: 1},
          {text: "J'analyse pourquoi l'écart s'est installé et je remonte si la procédure doit être révisée.", score: 2}
          ]
        },
        {
          text: "Un collaborateur a fait une erreur qui a failli causer un accident. Il est très affecté. Comment gérez-vous le moment ?",
          answers: [
          {text: "Je lui explique clairement l'erreur commise pour que ce soit clair.", score: 0},
          {text: "Je gère la situation administrative d'abord et parle à la personne ensuite.", score: 1},
          {text: "Je m'assure d'abord qu'elle va bien, puis j'analyse la situation ensemble dans un cadre constructif.", score: 2}
          ]
        },
        {
          text: "Deux membres de votre équipe ont des interprétations différentes d'une procédure et se disputent sur le sujet. Que faites-vous ?",
          answers: [
          {text: "Je tranche en faveur de l'un des deux.", score: 0},
          {text: "Je leur demande de se mettre d'accord entre eux.", score: 1},
          {text: "Je clarifie la procédure officielle et, si elle est ambiguë, je remonte pour qu'elle soit précisée.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Votre équipe est fatiguée après plusieurs semaines de forte activité. Les incidents n'ont pas augmenté mais vous ressentez une baisse d'attention. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — tout le monde est fatigué par moment.", score: 0},
          {text: "J'en parle informellement lors d'une réunion.", score: 1},
          {text: "Je nomme la situation à mon équipe et prends des mesures concrètes pour soulager la pression.", score: 2}
          ]
        },
        {
          text: "Sur les deux derniers mois, votre équipe n'a signalé aucun incident ni presqu'accident. Vous trouvez cela suspect. Que faites-vous ?",
          answers: [
          {text: "Je suis satisfait — les bons résultats parlent d'eux-mêmes.", score: 0},
          {text: "J'en parle lors d'une réunion pour rappeler l'importance du signalement.", score: 1},
          {text: "Je cherche activement à comprendre pourquoi les signalements ont diminué.", score: 2}
          ]
        },
        {
          text: "Votre site traverse une phase de grands travaux avec beaucoup de rotation d'intervenants. La vigilance collective baisse. Que faites-vous ?",
          answers: [
          {text: "Je renforce les contrôles sans changer les rituels.", score: 0},
          {text: "J'augmente la fréquence des rappels sécurité.", score: 1},
          {text: "Je renforce les rituels de coordination ET je crée des moments spécifiques pour maintenir l'attention dans ce contexte particulier.", score: 2}
          ]
        },
        {
          text: "Un collaborateur très expérimenté a commencé à s'épargner certaines vérifications. Il dit qu'avec son expérience, il sait quand c'est vraiment nécessaire. Que faites-vous ?",
          answers: [
          {text: "Je le laisse faire — son expérience est un argument valable.", score: 0},
          {text: "Je lui rappelle les règles sans approfondir.", score: 1},
          {text: "J'aborde le sujet directement : l'expérience ne remplace pas les procédures, elle aide à les appliquer mieux.", score: 2}
          ]
        },
        {
          text: "Vous revenez de congés et constatez que plusieurs petits glissements se sont produits pendant votre absence. Votre remplaçant n'en a pas parlé. Que faites-vous ?",
          answers: [
          {text: "Je reprends là où je suis et laisse passer — ce qui est fait est fait.", score: 0},
          {text: "Je recadre discrètement les comportements observés.", score: 1},
          {text: "Je fais un point équipe pour remettre les pratiques à niveau et comprendre pourquoi ces glissements ont eu lieu.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre équipe réalise des opérations de façon légèrement différente de la procédure écrite depuis des mois. Le résultat est bon. Vous venez de vous en rendre compte. Que faites-vous ?",
          answers: [
          {text: "Je laisse faire — si la pratique fonctionne, c'est qu'elle est adaptée.", score: 0},
          {text: "Je remets la procédure officielle en application sans chercher à comprendre.", score: 1},
          {text: "Je documente la pratique réelle et remonte pour que la procédure soit révisée si elle est pertinente.", score: 2}
          ]
        },
        {
          text: "Un nouveau collaborateur pose des questions sur des pratiques que l'équipe a habituellement 'normalisées'. Il trouve certaines choses étranges. Quelle est votre réaction ?",
          answers: [
          {text: "Je lui explique que c'est comme ça que ça marche ici.", score: 0},
          {text: "Je prends note de ses questions sans y donner suite immédiatement.", score: 1},
          {text: "Je prends ses observations comme un point de vue extérieur précieux et examine s'il a raison.", score: 2}
          ]
        },
        {
          text: "Votre équipe a tendance à minimiser les presqu'accidents en disant que 'ça fait partie du métier'. Que faites-vous ?",
          answers: [
          {text: "Je partage cet état d'esprit — certains risques sont inhérents au métier.", score: 0},
          {text: "Je rappelle que tout doit être signalé mais sans aborder la culture sous-jacente.", score: 1},
          {text: "Je travaille sur la culture de signalement pour que les presqu'accidents soient vus comme des opportunités d'apprentissage.", score: 2}
          ]
        },
        {
          text: "Vous détectez qu'une personne de votre équipe dissimule des informations par peur de la sanction. Comment réagissez-vous ?",
          answers: [
          {text: "Je lui rappelle ses obligations sans aborder la question de la peur.", score: 0},
          {text: "Je lui explique qu'il n'y aura pas de sanction pour ce cas précis.", score: 1},
          {text: "Je travaille à créer un environnement où la transparence est valorisée et le signalement, sans conséquence pour l'erreur non intentionnelle.", score: 2}
          ]
        },
        {
          text: "Vous avez signalé à plusieurs reprises des situations à risque à votre hiérarchie sans retour. Que faites-vous ?",
          answers: [
          {text: "J'arrête de signaler — ça ne sert à rien.", score: 0},
          {text: "Je continue à signaler mais sans espérer de retour.", score: 1},
          {text: "Je demande formellement un retour sur mes signalements et escalade si nécessaire.", score: 2}
          ]
        }
    ],
  },

  "securite-nucleaire": {
    0: [
        {
          text: "Vous réalisez une opération que vous connaissez parfaitement depuis des années. La gamme indique une étape que vous avez toujours faite de façon légèrement différente sans conséquence. Que faites-vous ?",
          answers: [
          {text: "J'applique ma méthode habituelle — l'expérience prime.", score: 0},
          {text: "J'applique la gamme mais je note mentalement la différence.", score: 1},
          {text: "J'applique la gamme telle qu'elle est écrite et remonte l'écart si ma pratique semble meilleure.", score: 2}
          ]
        },
        {
          text: "Lors d'une opération, vous avez un doute sur l'interprétation d'un paramètre. Votre collègue, plus expérimenté, vous dit que c'est normal. Que faites-vous ?",
          answers: [
          {text: "Je lui fais confiance et continue.", score: 0},
          {text: "Je note le paramètre mais continue en restant attentif.", score: 1},
          {text: "Je stoppe et cherche une confirmation formelle avant de reprendre.", score: 2}
          ]
        },
        {
          text: "Une vérification de routine vous semble donner un résultat légèrement en dehors de la plage habituelle, mais toujours dans les limites admissibles. Que faites-vous ?",
          answers: [
          {text: "Je continue — c'est dans les limites.", score: 0},
          {text: "Je note l'écart dans mon calepin personnel.", score: 1},
          {text: "Je le documente formellement et le signale pour analyse de tendance.", score: 2}
          ]
        },
        {
          text: "En prenant votre poste, votre collègue vous dit qu'il y a eu une 'petite anomalie' qu'il a gérée mais pas signalée. Que faites-vous ?",
          answers: [
          {text: "Je prends note pour moi mais respecte sa décision.", score: 0},
          {text: "Je lui suggère de le signaler sans insister.", score: 1},
          {text: "Je lui explique pourquoi c'est important et l'aide à faire le signalement si nécessaire.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que la gamme que vous utilisez n'a pas été mise à jour suite à une modification technique récente. L'opération vous semble maîtrisée quand même. Que faites-vous ?",
          answers: [
          {text: "Je réalise l'opération — je connais la modification.", score: 0},
          {text: "Je réalise l'opération en tenant compte de la modification mentalement.", score: 1},
          {text: "Je stoppe et remonte que la gamme doit être mise à jour avant toute utilisation.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "La pression de remise en service est forte. Une question technique reste ouverte mais tout le monde pense que c'est sans conséquence. Votre responsable vous demande de continuer. Que faites-vous ?",
          answers: [
          {text: "Je continue — la pression est légitime et la question est probablement mineure.", score: 0},
          {text: "Je continue mais je documente ma réserve.", score: 1},
          {text: "Je refuse de continuer tant que la question technique n'est pas formellement tranchée.", score: 2}
          ]
        },
        {
          text: "Une situation non prévue dans la gamme se présente. Vous pensez avoir la solution mais elle n'est pas documentée. Que faites-vous ?",
          answers: [
          {text: "J'applique ma solution — c'est ce pour quoi je suis formé.", score: 0},
          {text: "J'applique ma solution et le documente après.", score: 1},
          {text: "Je stoppe, documente la situation non prévue et attends une décision formelle avant de reprendre.", score: 2}
          ]
        },
        {
          text: "Vous réalisez qu'un équipement que vous venez de remettre en service a peut-être une configuration incertaine. L'essai de démarrage semblait normal. Que faites-vous ?",
          answers: [
          {text: "Je le laisse en service — le démarrage était normal.", score: 0},
          {text: "Je note l'incertitude et continue sous surveillance.", score: 1},
          {text: "Je remets l'équipement en arrêt et éclaircis la configuration avant de remettre en service.", score: 2}
          ]
        },
        {
          text: "Un chef d'équipe vous demande de commencer une étape avant la fin de la consignation pour gagner du temps. Il dit être sûr que c'est sécurisé. Que faites-vous ?",
          answers: [
          {text: "Je commence — il est responsable et il connaît le sujet.", score: 0},
          {text: "Je commence prudemment en restant attentif.", score: 1},
          {text: "Je refuse de commencer avant que la consignation soit complète et formellement validée.", score: 2}
          ]
        },
        {
          text: "Votre équipe a trouvé une façon plus rapide de réaliser une opération. Elle ne viole pas de règle explicite. Tout le monde l'utilise. Que faites-vous ?",
          answers: [
          {text: "J'utilise la méthode de l'équipe — elle a fait ses preuves.", score: 0},
          {text: "Je continue à utiliser la méthode officielle sans intervenir.", score: 1},
          {text: "J'utilise la méthode officielle et propose que la nouvelle méthode soit formellement évaluée et intégrée si elle est validée.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Lors d'une opération, vous rencontrez une configuration qui n'est pas exactement celle décrite dans la gamme. La situation semble maîtrisable. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — je connais suffisamment bien le système.", score: 0},
          {text: "J'adapte et je le note pour en parler après.", score: 1},
          {text: "Je stoppe et traite la situation comme une dérive de gamme à remonter avant toute décision.", score: 2}
          ]
        },
        {
          text: "Une équipe extérieure intervient sur un équipement que vous supervisiez. Leur intervention modifie légèrement l'état du système. Ils disent que c'est prévu. Que faites-vous ?",
          answers: [
          {text: "Je les crois — ils sont compétents.", score: 0},
          {text: "Je vérifie que leur intervention était prévue.", score: 1},
          {text: "Je vérifie la traçabilité de l'autorisation avant de remettre le système dans son état nominal.", score: 2}
          ]
        },
        {
          text: "Vous constatez que deux gammes donnent des instructions contradictoires pour une même situation. Que faites-vous ?",
          answers: [
          {text: "J'applique celle qui me semble la plus logique.", score: 0},
          {text: "J'en parle à mon responsable avant de continuer.", score: 1},
          {text: "Je stoppe et remonte immédiatement l'incohérence pour qu'une décision formelle soit prise.", score: 2}
          ]
        },
        {
          text: "Lors d'une inspection, un point de contrôle donne un résultat à la limite de l'acceptable. Votre responsable dit que c'est OK. Que faites-vous ?",
          answers: [
          {text: "Je suis son avis — il a le niveau pour décider.", score: 0},
          {text: "Je note ma réserve mais je continue.", score: 1},
          {text: "Je documente formellement que le résultat est à la limite et demande une décision écrite.", score: 2}
          ]
        },
        {
          text: "Un prestataire suggère une modification sur un équipement pour simplifier une opération future. La proposition semble intéressante. Que faites-vous ?",
          answers: [
          {text: "J'autorise — si c'est pertinent, autant le faire maintenant.", score: 0},
          {text: "Je lui dis de soumettre ça à mon responsable.", score: 1},
          {text: "Je lui explique que toute modification doit suivre le processus de gestion des modifications, même si elle semble simple.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un événement significatif de sûreté vient de se produire dans votre équipe. Votre responsable pense que ça peut ne pas être déclaré. Que faites-vous ?",
          answers: [
          {text: "Je lui fais confiance — il a l'expérience pour juger.", score: 0},
          {text: "Je note ma réserve mais respecte sa décision.", score: 1},
          {text: "Je maintiens que la déclaration est nécessaire si les critères sont remplis, quelle que soit la pression.", score: 2}
          ]
        },
        {
          text: "Vous réalisez a posteriori qu'une opération réalisée la semaine dernière aurait dû être documentée comme écart. Personne ne s'en souvient clairement. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — c'est trop tard.", score: 0},
          {text: "J'en parle informellement à mon responsable.", score: 1},
          {text: "Je documente ce dont je me souviens et remonte l'information, même tardivement.", score: 2}
          ]
        },
        {
          text: "L'analyse d'un événement conclut à une 'erreur humaine' mais vous pensez que des facteurs organisationnels ont contribué. Que faites-vous ?",
          answers: [
          {text: "J'accepte la conclusion — les experts ont décidé.", score: 0},
          {text: "Je note ma réserve sans la formuler.", score: 1},
          {text: "Je formule ma perspective dans les échanges de REX pour que l'analyse soit complète.", score: 2}
          ]
        },
        {
          text: "Votre équipe a une culture où les questions sont mal vues. Vous constatez que les agents hésitent à formuler des doutes. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte à la culture en place.", score: 0},
          {text: "Je continue à poser des questions moi-même sans intervenir sur la dynamique.", score: 1},
          {text: "Je nommer le problème auprès de mon responsable et cherche à créer un espace où la questioning attitude est valorisée.", score: 2}
          ]
        },
        {
          text: "Suite à un REX, des actions correctives ont été définies mais elles ne sont pas mises en œuvre. Que faites-vous ?",
          answers: [
          {text: "J'attends que la hiérarchie reprenne le sujet.", score: 0},
          {text: "Je relance informellement.", score: 1},
          {text: "Je demande formellement un état d'avancement et escalade si nécessaire.", score: 2}
          ]
        }
    ],
  },

  "securite-chantier-btp": {
    0: [
        {
          text: "Vous arrivez sur votre poste de travail le matin et le balisage installé la veille a été modifié ou déplacé. Que faites-vous avant de démarrer ?",
          answers: [
          {text: "Je démarre — le chantier évolue chaque jour.", score: 0},
          {text: "Je replace le balisage et commence.", score: 1},
          {text: "Je stoppe et vérifie qui a modifié le balisage et pour quelle raison avant de reprendre.", score: 2}
          ]
        },
        {
          text: "Vous devez travailler à une hauteur de 3 mètres. Le point d'ancrage prévu est difficilement accessible. Que faites-vous ?",
          answers: [
          {text: "Je m'accroche au point le plus proche disponible.", score: 0},
          {text: "Je travaille sans m'accrocher — c'est une intervention courte.", score: 1},
          {text: "Je stoppe et demande un ajustement de l'installation d'ancrage avant de démarrer.", score: 2}
          ]
        },
        {
          text: "Le sol de votre zone de travail est détrempé après une nuit de pluie. La tâche prévue nécessite de se déplacer. Que faites-vous ?",
          answers: [
          {text: "Je fais attention et commence.", score: 0},
          {text: "Je demande si des planches ou passages temporaires peuvent être posés.", score: 1},
          {text: "Je signale la situation et attends qu'une décision soit prise sur les conditions de travail avant de démarrer.", score: 2}
          ]
        },
        {
          text: "Votre chef d'équipe vous demande de démarrer des terrassements alors que le marquage de réseaux souterrains n'a pas encore été réalisé. Il dit que dans ce secteur il n'y a pas de réseau. Que faites-vous ?",
          answers: [
          {text: "Je démarre — il connaît le chantier.", score: 0},
          {text: "Je commence prudemment en restant attentif.", score: 1},
          {text: "Je refuse de démarrer les terrassements sans le marquage préalable.", score: 2}
          ]
        },
        {
          text: "Une livraison de matériaux est déposée dans votre zone de circulation. Le chauffeur est déjà reparti. Que faites-vous ?",
          answers: [
          {text: "Je travaille autour — on n'a pas le temps de déplacer ça maintenant.", score: 0},
          {text: "Je déplace moi-même la livraison.", score: 1},
          {text: "Je signale la situation et organise le déplacement de façon coordonnée avec les responsables.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un engin de chantier manœuvre dans votre zone sans signalement préalable. Le chauffeur vous voit. Que faites-vous ?",
          answers: [
          {text: "Je me déplace pour lui laisser de la place.", score: 0},
          {text: "Je l'arrête et lui demande de faire attention.", score: 1},
          {text: "Je le fais stopper et signale que la coordination des engins n'a pas été faite.", score: 2}
          ]
        },
        {
          text: "Deux corps de métier travaillent en parallèle dans une zone restreinte sans coordination visible. Des interférences commencent à apparaître. Que faites-vous ?",
          answers: [
          {text: "Je continue — les autres s'arrangeront.", score: 0},
          {text: "Je parle directement au responsable de l'autre équipe.", score: 1},
          {text: "Je remonte au coordinateur de chantier pour qu'une coordination formelle soit organisée.", score: 2}
          ]
        },
        {
          text: "Un autre intervenant abandonne un outil dans votre zone sans le sécuriser. Que faites-vous ?",
          answers: [
          {text: "Je le range à un endroit qui me convient.", score: 0},
          {text: "Je le signale à son propriétaire.", score: 1},
          {text: "Je le sécurise et signale la situation pour éviter que ça se reproduise.", score: 2}
          ]
        },
        {
          text: "Une fouille est ouverte dans votre zone et des personnes passent près du bord sans protection. Vous n'êtes pas responsable de cette fouille. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas ma fouille — c'est au responsable de gérer.", score: 0},
          {text: "Je dis aux personnes de faire attention.", score: 1},
          {text: "Je signale immédiatement au responsable de la fouille pour que la zone soit sécurisée.", score: 2}
          ]
        },
        {
          text: "Vous devez travailler sur une toiture pendant qu'une autre équipe travaille en dessous. Aucune protection contre la chute d'objets n'est en place. Que faites-vous ?",
          answers: [
          {text: "Je fais attention en travaillant.", score: 0},
          {text: "Je préviens l'équipe en dessous de se tenir à l'écart.", score: 1},
          {text: "Je stoppe et demande qu'une protection contre la chute d'objets soit mise en place avant de reprendre.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un intérimaire nouveau sur le chantier n'a pas reçu l'accueil sécurité. Il attend ses instructions de travail. Que faites-vous ?",
          answers: [
          {text: "Je lui donne ses instructions — on manque de temps.", score: 0},
          {text: "Je lui donne un accueil rapide sur les points essentiels.", score: 1},
          {text: "Je m'assure qu'il reçoit l'accueil sécurité complet avant de démarrer la moindre tâche.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'un permis de travail a expiré mais les travaux n'ont pas encore repris. L'équipe attend votre feu vert. Que faites-vous ?",
          answers: [
          {text: "Je les autorise à reprendre — le permis était valide et les conditions n'ont pas changé.", score: 0},
          {text: "Je leur demande d'attendre que le permis soit renouvelé.", score: 1},
          {text: "Je stoppe toute activité et m'assure que le permis est renouvelé avant toute reprise.", score: 2}
          ]
        },
        {
          text: "Le PPSPS prévoit un nombre minimum de personnes pour une opération. Ce matin, vous êtes en sous-effectif. Que faites-vous ?",
          answers: [
          {text: "Je commence avec l'équipe disponible — on fera attention.", score: 0},
          {text: "Je commence avec les tâches qui peuvent se faire seul.", score: 1},
          {text: "Je ne démarre pas l'opération qui nécessite un effectif minimum et remonte la situation.", score: 2}
          ]
        },
        {
          text: "Vous devez réaliser des travaux nécessitant une habilitation que vous n'avez pas. Le titulaire de l'habilitation est absent. Que faites-vous ?",
          answers: [
          {text: "Je réalise les travaux — j'en suis capable même sans habilitation formelle.", score: 0},
          {text: "Je commence la préparation et attends le titulaire pour la phase critique.", score: 1},
          {text: "Je ne réalise pas les travaux et remonte la situation pour qu'une solution soit trouvée.", score: 2}
          ]
        },
        {
          text: "Le plan de prévention prévoit des mesures pour des travaux par points chauds. Vous réalisez que les moyens de lutte contre l'incendie sont insuffisants par rapport au plan. Que faites-vous ?",
          answers: [
          {text: "Je commence avec ce que j'ai — les risques semblent limités.", score: 0},
          {text: "Je fais les travaux et compense par plus d'attention.", score: 1},
          {text: "Je stoppe et demande que les moyens prévus au plan de prévention soient mis en place avant de démarrer.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un accident survient sur votre zone. Plusieurs personnes regardent. Que faites-vous en premier ?",
          answers: [
          {text: "J'évalue la gravité avant d'appeler les secours.", score: 0},
          {text: "J'appelle les secours et préviens mon responsable.", score: 1},
          {text: "Je sécurise la zone, appelle les secours, ne déplace pas la victime sauf danger immédiat et préserve les éléments de l'incident.", score: 2}
          ]
        },
        {
          text: "Après un incident, votre chef de chantier vous demande de reprendre rapidement pour ne pas perdre davantage de temps. Que faites-vous ?",
          answers: [
          {text: "Je reprends — la situation est stabilisée.", score: 0},
          {text: "Je reprends mais en faisant très attention.", score: 1},
          {text: "Je refuse de reprendre tant qu'une analyse de la situation n'a pas été faite et que les conditions de reprise ne sont pas définies.", score: 2}
          ]
        },
        {
          text: "Votre chantier a eu un incident et vous devez témoigner auprès des enquêteurs. Que faites-vous ?",
          answers: [
          {text: "Je dis ce qui arrange le mieux la situation de l'équipe.", score: 0},
          {text: "Je dis les choses telles que je les ai vécues.", score: 1},
          {text: "Je témoigne avec précision sur les faits, en distinguant ce que j'ai observé de ce que j'interprète.", score: 2}
          ]
        },
        {
          text: "Suite à un incident, une procédure est modifiée. La nouvelle procédure est plus contraignante. Votre équipe se plaint. Que faites-vous ?",
          answers: [
          {text: "Je leur dis qu'ils ont raison — la procédure est peut-être excessive.", score: 0},
          {text: "Je leur dis que c'est obligatoire et qu'ils doivent s'adapter.", score: 1},
          {text: "Je leur explique le lien entre la procédure et l'incident, et je remonte si elle est vraiment inadaptée.", score: 2}
          ]
        },
        {
          text: "Un incident s'est produit sur un chantier voisin avec des conditions similaires au vôtre. Que faites-vous ?",
          answers: [
          {text: "Je m'en informe mais mon chantier est différent.", score: 0},
          {text: "Je prends note des informations disponibles.", score: 1},
          {text: "J'analyse si des mesures préventives doivent être prises sur mon chantier en lien avec cet incident.", score: 2}
          ]
        }
    ],
  },

  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("securite-surete", "Sécurité & sûreté au travail", "🦺", [
    ["culture-securite-terrain",   "Sécurité & culture de sûreté au quotidien",           "Équipes terrain",          "Identifier les risques, respecter les consignes et signaler les situations sensibles.",                                                                          T.securiteSurete],
    ["presquaccidents-signalement","Signaler les incidents et presqu'accidents",            "Tous publics",             "Transformer les signaux faibles en actions utiles, sans culpabiliser ni banaliser.",                                                                            T.securiteSignalement],
    ["acces-sites-surete",         "Sûreté des sites, accès et comportements inhabituels", "Tous publics",             "Réagir face aux accès non autorisés, intrusions, objets suspects ou situations atypiques.",                                                                     T.securiteAccesSites],
    ["managers-securite",          "Manager la sécurité sans créer de tension",            "Managers",                 "Faire vivre les règles, traiter les écarts et soutenir les équipes dans les moments à risque.",                                                                  T.securiteManagers],
    ["coactivite-sous-traitance",  "Travailler en coactivité et gérer les prestataires",   "Équipes terrain",          "Coordonner les interventions simultanées, intégrer les sous-traitants et gérer les zones partagées.",                                                           T.securiteCoactivite],
    ["epi-gestes-securite",        "EPI et gestes de sécurité au quotidien",               "Collaborateurs",           "Porter les bons équipements, maintenir ses réflexes sous contrainte et signaler les anomalies matérielles.",                                                    T.securiteEPI],
    ["securite-manager-arbitrage", "Arbitrer entre sécurité et pression opérationnelle",   "Managers / Encadrants",    "Tenir les exigences de sécurité face aux délais, traiter les écarts et détecter les dérives silencieuses.",                                                    T.securiteManagerArbitrage],
    ["securite-nucleaire",         "Culture de sûreté en environnement nucléaire",         "Tous publics — Nucléaire", "Adopter la posture de questionnement, appliquer la rigueur procédurale et déclarer les événements précurseurs.",                                                T.securiteNucleaire],
    ["securite-chantier-btp",      "Sécurité sur chantier BTP",                            "Équipes terrain — BTP",    "Sécuriser son poste, gérer la coactivité chantier, respecter le PPSPS et réagir aux incidents.",                                                               T.securiteChantierBTP]
  ]);

})();
