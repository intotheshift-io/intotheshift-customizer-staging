/**
 * catalogue-rse.js — INTO THE SHIFT
 * Domaine : RSE — environnement (9 ADs)
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  // ─────────────────────────────────────────────────────────────────────────
  //  QUESTIONS RÉDIGÉES — RSE & environnement
  // ─────────────────────────────────────────────────────────────────────────

  Object.assign(window.CUSTOM_QUESTIONS, {
  "sobriete-quotidien": {
    0: [
        {
          text: "Vous avez oublié d'éteindre la lumière en quittant une pièce commune. Vous vous en rendez compte en passant devant. Que faites-vous ?",
          answers: [
          {text: "Je la laisse — quelqu'un d'autre le fera.", score: 0},
          {text: "Je l'éteins.", score: 1},
          {text: "Je l'éteins et propose d'installer un système automatique si ce n'est pas déjà le cas.", score: 2}
          ]
        },
        {
          text: "Le chauffage de votre bureau est réglé trop haut. Tout le monde s'y est habitué. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — c'est confortable comme ça.", score: 0},
          {text: "Je baisse moi-même le thermostat.", score: 1},
          {text: "J'en parle à l'équipe et propose un réglage adapté à la saison.", score: 2}
          ]
        },
        {
          text: "Vous imprimez régulièrement des documents qui pourraient rester numériques. Que faites-vous ?",
          answers: [
          {text: "Je continue — j'ai besoin du papier pour travailler.", score: 0},
          {text: "Je réduis les impressions quand je pense à le faire.", score: 1},
          {text: "Je revois systématiquement mes habitudes d'impression et passe au numérique quand c'est possible.", score: 2}
          ]
        },
        {
          text: "Un équipement de bureau reste allumé en permanence alors qu'il n'est utilisé que quelques heures par jour. Que faites-vous ?",
          answers: [
          {text: "Je le laisse — l'éteindre et le rallumer n'est pas pratique.", score: 0},
          {text: "Je l'éteins quand je l'ai moi-même utilisé.", score: 1},
          {text: "Je signale la situation et propose une procédure d'extinction systématique en fin de journée.", score: 2}
          ]
        },
        {
          text: "Votre organisation consomme beaucoup de gobelets jetables pour le café. Que faites-vous ?",
          answers: [
          {text: "Je continue à en utiliser — c'est la pratique en place.", score: 0},
          {text: "J'utilise ma propre tasse.", score: 1},
          {text: "J'utilise ma propre tasse et propose une alternative collective pour réduire les gobelets.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous devez choisir entre prendre l'ascenseur ou les escaliers pour monter deux étages. Vous n'êtes pas pressé. Que faites-vous ?",
          answers: [
          {text: "Je prends l'ascenseur — c'est plus simple.", score: 0},
          {text: "Je prends les escaliers si je n'ai pas de charge.", score: 1},
          {text: "Je prends les escaliers par défaut — c'est à la fois plus sobre et meilleur pour moi.", score: 2}
          ]
        },
        {
          text: "Votre organisation propose de bons de covoiturage mais vous n'avez jamais pris le temps de les utiliser. Que faites-vous ?",
          answers: [
          {text: "Je n'y pense pas vraiment.", score: 0},
          {text: "Je les utilise quand l'occasion se présente naturellement.", score: 1},
          {text: "Je prends l'initiative de chercher des covoitureurs dans mon entourage professionnel.", score: 2}
          ]
        },
        {
          text: "Vous pouvez faire une livraison express ou standard. Le délai standard est acceptable. Que faites-vous ?",
          answers: [
          {text: "Je choisis l'express — c'est plus pratique.", score: 0},
          {text: "Je choisis le standard si ça ne pose pas de problème.", score: 1},
          {text: "Je choisis systématiquement le standard quand le délai le permet.", score: 2}
          ]
        },
        {
          text: "Un repas de travail est organisé. L'offre végétarienne est disponible mais moins mise en avant. Que faites-vous ?",
          answers: [
          {text: "Je choisis ce qui me fait envie sans me poser la question.", score: 0},
          {text: "Je regarde l'offre végétarienne si elle me correspond.", score: 1},
          {text: "Je considère l'option végétarienne comme la première option par défaut.", score: 2}
          ]
        },
        {
          text: "Votre organisation recycle les déchets mais les bacs sont mal identifiés et personne ne les utilise correctement. Que faites-vous ?",
          answers: [
          {text: "Je trie comme je le comprends — je ne peux pas faire mieux.", score: 0},
          {text: "Je cherche à mieux trier mes propres déchets.", score: 1},
          {text: "Je signale le problème d'identification et propose une solution concrète.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un collègue dit que ses gestes individuels ne changent rien à l'échelle du problème. Que lui répondez-vous ?",
          answers: [
          {text: "Je suis d'accord avec lui.", score: 0},
          {text: "Je lui dis qu'il a tort mais sans argumenter vraiment.", score: 1},
          {text: "J'engage une discussion sur le lien entre comportements individuels et culture collective sans le moraliser.", score: 2}
          ]
        },
        {
          text: "Une habitude collective de votre équipe a un impact environnemental que personne ne remet en question. Que faites-vous ?",
          answers: [
          {text: "Je la suis — ce n'est pas mon rôle de changer les pratiques collectives.", score: 0},
          {text: "Je pose la question lors d'un moment informel.", score: 1},
          {text: "Je trouve un moment adapté pour mettre le sujet sur la table de façon constructive.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'un prestataire de votre organisation a des pratiques environnementales très mauvaises. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle d'évaluer les prestataires.", score: 0},
          {text: "J'en parle informellement à mon responsable.", score: 1},
          {text: "Je remonte l'information formellement à la personne en charge des achats ou de la relation fournisseurs.", score: 2}
          ]
        },
        {
          text: "Votre organisation a un engagement RSE officiel mais les pratiques internes ne semblent pas alignées. Que faites-vous ?",
          answers: [
          {text: "Je laisse cela aux personnes en charge.", score: 0},
          {text: "Je pointe l'incohérence informellement.", score: 1},
          {text: "Je cherche à identifier une action concrète à mon niveau et à contribuer à l'alignement.", score: 2}
          ]
        },
        {
          text: "Un collègue prend l'initiative d'une action environnementale dans votre équipe. Elle n'est pas parfaite mais c'est un début. Que faites-vous ?",
          answers: [
          {text: "Je laisse faire — ce n'est pas vraiment utile à cette échelle.", score: 0},
          {text: "Je participe si je suis sollicité.", score: 1},
          {text: "Je soutiens activement l'initiative et cherche comment l'améliorer ou l'élargir.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Une action environnementale que votre équipe a mise en place perd en vigueur avec le temps. Que faites-vous ?",
          answers: [
          {text: "J'attends que quelqu'un reprenne le flambeau.", score: 0},
          {text: "Je relance l'idée.", score: 1},
          {text: "Je cherche à comprendre pourquoi l'action s'est essoufflée et à la remettre sur les rails différemment.", score: 2}
          ]
        },
        {
          text: "Votre organisation lance une initiative RSE mais sans la soutenir vraiment sur la durée. Que faites-vous ?",
          answers: [
          {text: "Je participe au lancement et je vois comment ça évolue.", score: 0},
          {text: "Je continue à appliquer les pratiques même si l'élan retombe.", score: 1},
          {text: "Je continue les pratiques et propose des façons de maintenir la dynamique dans le temps.", score: 2}
          ]
        },
        {
          text: "Vous avez changé certaines de vos habitudes professionnelles mais vous retombez dans les anciens réflexes sous pression. Que faites-vous ?",
          answers: [
          {text: "Je l'accepte — la pression force les anciens réflexes.", score: 0},
          {text: "Je me recadre quand je m'en aperçois.", score: 1},
          {text: "J'identifie les contextes de décrochage et cherche à y ancrer des alternatives concrètes.", score: 2}
          ]
        },
        {
          text: "Un indicateur environnemental de votre organisation montre que les progrès sont réels mais insuffisants. Que faites-vous ?",
          answers: [
          {text: "Je laisse l'équipe RSE gérer.", score: 0},
          {text: "Je m'interroge sur ce que je peux faire de plus.", score: 1},
          {text: "Je cherche à identifier une ou deux actions supplémentaires à mon niveau qui auraient un impact mesurable.", score: 2}
          ]
        },
        {
          text: "Un programme d'engagement RSE de votre organisation est chronophage et peu de personnes s'y impliquent. Que faites-vous ?",
          answers: [
          {text: "Je n'y participe pas — j'ai d'autres priorités.", score: 0},
          {text: "J'y participe ponctuellement.", score: 1},
          {text: "J'évalue ce que je peux contribuer de façon réaliste et je le fais de façon régulière plutôt qu'exceptionnelle.", score: 2}
          ]
        }
    ],
  },

  "dechets-ressources": {
    0: [
        {
          text: "Vous imprimez un document de 30 pages dont vous n'avez besoin que de 5. Que faites-vous ?",
          answers: [
          {text: "Je l'imprime entièrement — c'est plus simple.", score: 0},
          {text: "Je sélectionne les pages dont j'ai besoin.", score: 1},
          {text: "Je n'imprime que les pages nécessaires et, si possible, je reste en numérique.", score: 2}
          ]
        },
        {
          text: "Un équipement fonctionnel mais obsolète est sur le point d'être remplacé automatiquement. Que faites-vous ?",
          answers: [
          {text: "Je le laisse remplacer — le nouveau sera meilleur.", score: 0},
          {text: "Je signale qu'il fonctionne encore.", score: 1},
          {text: "Je questionne si le remplacement est vraiment nécessaire maintenant.", score: 2}
          ]
        },
        {
          text: "Vous avez commandé plus de fournitures que nécessaire par précaution. Que faites-vous la prochaine fois ?",
          answers: [
          {text: "Je recommande autant — au cas où.", score: 0},
          {text: "J'ajuste la quantité à ce que je pense utiliser réellement.", score: 1},
          {text: "J'évalue précisément mes besoins réels avant de commander.", score: 2}
          ]
        },
        {
          text: "Des documents confidentiels qui ne sont plus nécessaires s'accumulent dans votre bureau. Que faites-vous ?",
          answers: [
          {text: "Je les laisse — je pourrais en avoir besoin.", score: 0},
          {text: "Je les jette quand j'ai le temps.", score: 1},
          {text: "Je mets en place un système régulier de destruction sécurisée.", score: 2}
          ]
        },
        {
          text: "Votre organisation achète des produits emballés individuellement alors qu'une option en vrac existe à coût comparable. Que faites-vous ?",
          answers: [
          {text: "Je ne me mêle pas des décisions d'achat.", score: 0},
          {text: "J'en parle à quelqu'un en passant.", score: 1},
          {text: "Je remonte l'alternative en vrac à la personne en charge des achats avec les éléments de comparaison.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Lors d'un événement d'équipe, des restes alimentaires vont être jetés. Que faites-vous ?",
          answers: [
          {text: "Je laisse les organisateurs gérer.", score: 0},
          {text: "Je propose que les restes soient partagés.", score: 1},
          {text: "Je prends l'initiative de proposer une redistribution ou un don avant de jeter.", score: 2}
          ]
        },
        {
          text: "Vous devez choisir entre deux emballages pour un achat : l'un recyclable, l'autre moins cher mais non recyclable. Quelle est votre approche ?",
          answers: [
          {text: "Je choisis le moins cher — c'est le budget qui compte.", score: 0},
          {text: "Je choisis le recyclable si l'écart de prix est faible.", score: 1},
          {text: "Je prends en compte l'emballage comme un critère de choix à part entière.", score: 2}
          ]
        },
        {
          text: "Votre équipe gaspille régulièrement du papier lors des impressions (mauvais paramétrage, erreurs de format). Que faites-vous ?",
          answers: [
          {text: "Je gère mes propres impressions et laisse les autres faire.", score: 0},
          {text: "Je rappelle de faire attention.", score: 1},
          {text: "Je propose une solution concrète : paramétrage par défaut recto-verso, vérification avant impression.", score: 2}
          ]
        },
        {
          text: "Des ressources numériques (accès, licences, abonnements) ne sont plus utilisées mais restent actives. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon périmètre.", score: 0},
          {text: "Je le signale si quelqu'un me demande.", score: 1},
          {text: "Je signale proactivement les ressources inutilisées pour qu'elles soient désactivées.", score: 2}
          ]
        },
        {
          text: "Un collègue imprime systématiquement ses emails pour les annoter. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — c'est sa façon de travailler.", score: 0},
          {text: "Je lui mentionne qu'il existe des outils d'annotation numérique.", score: 1},
          {text: "Je lui propose concrètement de l'aider à trouver une alternative numérique.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Le tri des déchets dans votre espace de travail est incorrect. Les bacs sont mélangés. Que faites-vous ?",
          answers: [
          {text: "Je trie dans mon bac sans m'occuper des autres.", score: 0},
          {text: "Je remets les bacs en ordre.", score: 1},
          {text: "Je remets les bacs en ordre et propose une signalétique plus claire.", score: 2}
          ]
        },
        {
          text: "Votre organisation trie mais les déchets sont finalement regroupés avant d'être collectés. Que faites-vous ?",
          answers: [
          {text: "Je continue à trier — c'est un geste symbolique.", score: 0},
          {text: "Je me demande si le tri sert vraiment à quelque chose ici.", score: 1},
          {text: "Je remonte l'incohérence pour qu'elle soit vérifiée et traitée.", score: 2}
          ]
        },
        {
          text: "Des collègues ne trient pas leurs déchets malgré les consignes. Que faites-vous ?",
          answers: [
          {text: "Je trie les miens et ne dis rien.", score: 0},
          {text: "Je leur rappelle les consignes.", score: 1},
          {text: "Je cherche à comprendre ce qui empêche le tri et propose une solution plus accessible.", score: 2}
          ]
        },
        {
          text: "Votre équipe génère beaucoup de déchets lors d'un projet de transformation (câbles, packaging, mobilier). Que faites-vous ?",
          answers: [
          {text: "Je laisse les prestataires gérer.", score: 0},
          {text: "J'identifie ce qui peut être réutilisé ou recyclé.", score: 1},
          {text: "Je prends l'initiative de prévoir une filière de valorisation avant que les déchets soient générés.", score: 2}
          ]
        },
        {
          text: "Vous avez de vieux équipements fonctionnels mais inutilisés. Que faites-vous ?",
          answers: [
          {text: "Je les laisse dans un coin — au cas où.", score: 0},
          {text: "Je les mets à disposition d'autres collègues.", score: 1},
          {text: "Je cherche une filière de reconditionnement ou de don plutôt que de les laisser prendre la poussière.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre organisation n'a pas encore de politique claire sur la gestion des déchets. Que faites-vous ?",
          answers: [
          {text: "J'attends qu'elle soit mise en place.", score: 0},
          {text: "Je fais de mon mieux avec les ressources disponibles.", score: 1},
          {text: "Je propose à la personne compétente de travailler sur une politique simple et applicable.", score: 2}
          ]
        },
        {
          text: "Une initiative de réduction des déchets a bien fonctionné le premier mois puis a été oubliée. Que faites-vous ?",
          answers: [
          {text: "J'attends que quelqu'un la relance.", score: 0},
          {text: "Je continue à appliquer les pratiques moi-même.", score: 1},
          {text: "Je prends l'initiative de relancer avec un bilan de ce qui a fonctionné et des ajustements.", score: 2}
          ]
        },
        {
          text: "Un fournisseur livre systématiquement avec trop d'emballage. Que faites-vous ?",
          answers: [
          {text: "Je subis — je n'ai pas d'influence sur leurs pratiques.", score: 0},
          {text: "J'en parle informellement à l'acheteur.", score: 1},
          {text: "Je formule une demande précise à l'acheteur pour que les critères d'emballage soient intégrés au contrat.", score: 2}
          ]
        },
        {
          text: "Vous avez réduit vos déchets personnels au travail mais l'impact collectif reste limité. Que faites-vous ?",
          answers: [
          {text: "Je maintiens mes pratiques — c'est déjà bien.", score: 0},
          {text: "Je cherche à convaincre d'autres personnes.", score: 1},
          {text: "Je cherche un levier systémique : processus, achat, sensibilisation collective.", score: 2}
          ]
        },
        {
          text: "Des habitudes durables ont été prises dans votre équipe. Comment les maintenez-vous dans le temps ?",
          answers: [
          {text: "J'espère que chacun continue.", score: 0},
          {text: "Je rappelle de temps en temps l'importance de ces pratiques.", score: 1},
          {text: "Je les intègre aux routines d'équipe pour qu'elles ne dépendent pas de la vigilance individuelle.", score: 2}
          ]
        }
    ],
  },

  "achats-responsables": {
    0: [
        {
          text: "Vous avez besoin d'un article déjà présent dans les stocks de votre organisation. La demande prend du temps. Que faites-vous ?",
          answers: [
          {text: "J'achète directement le mien pour gagner du temps.", score: 0},
          {text: "J'attends la réponse du stock.", score: 1},
          {text: "Je vérifie les stocks disponibles et je m'organise en conséquence.", score: 2}
          ]
        },
        {
          text: "Un achat est disponible en version reconditionnée à -40%. La version neuve est privilégiée par habitude. Que faites-vous ?",
          answers: [
          {text: "Je commande la version neuve — c'est la procédure.", score: 0},
          {text: "Je propose la version reconditionnée si quelqu'un est d'accord.", score: 1},
          {text: "Je compare et propose l'option reconditionnée avec une justification claire.", score: 2}
          ]
        },
        {
          text: "Vous devez commander une quantité d'articles dont vous avez besoin de 30% en réalité. Que faites-vous ?",
          answers: [
          {text: "Je commande la quantité standard — c'est plus pratique.", score: 0},
          {text: "Je commande un peu moins que la quantité standard.", score: 1},
          {text: "Je commande exactement ce dont j'ai besoin en m'appuyant sur une estimation réelle.", score: 2}
          ]
        },
        {
          text: "Un achat nouveau est proposé pour remplacer quelque chose qui fonctionne encore. Que faites-vous ?",
          answers: [
          {text: "Je valide — le nouveau sera sûrement mieux.", score: 0},
          {text: "Je pose la question de l'utilité du remplacement.", score: 1},
          {text: "J'évalue objectivement si le remplacement crée de la valeur réelle avant de valider.", score: 2}
          ]
        },
        {
          text: "Votre organisation peut opter pour un service externalisé au lieu d'acheter du matériel. Vous n'avez pas d'opinion arrêtée. Que faites-vous ?",
          answers: [
          {text: "Je laisse l'acheteur décider.", score: 0},
          {text: "Je pose quelques questions.", score: 1},
          {text: "Je contribue à l'analyse en fournissant des éléments sur les usages réels.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un fournisseur habituel ne documente pas ses pratiques sociales et environnementales. Que faites-vous ?",
          answers: [
          {text: "Je continue avec lui — il est fiable et pas cher.", score: 0},
          {text: "Je mentionne à l'acheteur que ce serait bien d'avoir ces infos.", score: 1},
          {text: "Je remonte formellement la question et demande qu'un critère de documentation RSE soit ajouté à l'évaluation fournisseur.", score: 2}
          ]
        },
        {
          text: "Deux fournisseurs sont comparables sur la qualité et le prix. L'un a une politique RSE documentée, l'autre non. Que faites-vous ?",
          answers: [
          {text: "Je choisis en fonction d'autres critères pratiques.", score: 0},
          {text: "Je signale la différence RSE à l'acheteur.", score: 1},
          {text: "J'inclus le critère RSE dans la recommandation de choix.", score: 2}
          ]
        },
        {
          text: "Un appel d'offres intègre un critère RSE mais il est peu pondéré. Vous pensez qu'il devrait peser davantage. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte aux critères existants.", score: 0},
          {text: "J'exprime oralement que je pense que ça devrait peser plus.", score: 1},
          {text: "Je propose formellement une révision de la pondération avec des arguments.", score: 2}
          ]
        },
        {
          text: "Un prestataire vous propose un rabais important en échange d'une commande plus grosse que vos besoins réels. Que faites-vous ?",
          answers: [
          {text: "Je profite du rabais — c'est une bonne affaire.", score: 0},
          {text: "J'hésite mais je résiste au rabais.", score: 1},
          {text: "Je décline et explique que ma commande correspond à mon besoin réel.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'un fournisseur ne respecte pas les engagements RSE qu'il avait annoncés lors de sa sélection. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas ma responsabilité de le vérifier.", score: 0},
          {text: "Je le signale informellement.", score: 1},
          {text: "Je le remonte formellement pour que la relation fournisseur soit révisée.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Une commande urgente peut être livrée en express (plus polluant) ou en standard (2 jours de plus). Que faites-vous ?",
          answers: [
          {text: "Je commande en express — l'urgence prime.", score: 0},
          {text: "Je commande en express mais j'en prends note.", score: 1},
          {text: "Je vérifie si le délai standard est réellement incompatible avec le besoin avant de choisir.", score: 2}
          ]
        },
        {
          text: "Vous devez choisir entre un produit local plus cher et un produit importé moins cher mais avec une empreinte logistique importante. Que faites-vous ?",
          answers: [
          {text: "Je choisis en fonction du prix.", score: 0},
          {text: "Je mentionne le critère environnemental mais je prends la décision courante.", score: 1},
          {text: "Je soumets les deux options avec leurs impacts respectifs pour qu'une décision éclairée soit prise.", score: 2}
          ]
        },
        {
          text: "Un achat urgent est nécessaire. La procédure normale prendrait trop de temps. Que faites-vous ?",
          answers: [
          {text: "J'achète en dehors de la procédure — c'est urgent.", score: 0},
          {text: "J'utilise la procédure simplifiée si elle existe.", score: 1},
          {text: "Je cherche d'abord si le besoin peut être couvert autrement avant de contourner la procédure.", score: 2}
          ]
        },
        {
          text: "Un prestataire vous propose une offre qui économise du budget mais avec des conditions de livraison moins sobres. Que faites-vous ?",
          answers: [
          {text: "Je prends l'offre — l'économie est réelle.", score: 0},
          {text: "Je demande si on peut modifier les conditions de livraison.", score: 1},
          {text: "Je négocie les conditions de livraison comme partie intégrante de l'accord.", score: 2}
          ]
        },
        {
          text: "Vous achetez souvent de petites quantités en urgence alors qu'une meilleure planification permettrait des commandes groupées. Que faites-vous ?",
          answers: [
          {text: "Je continue — l'urgence ne se planifie pas.", score: 0},
          {text: "Je cherche à anticiper davantage.", score: 1},
          {text: "Je propose un processus d'anticipation des besoins pour permettre des commandes groupées moins fréquentes.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre organisation n'a pas de politique d'achat responsable formalisée. Que faites-vous ?",
          answers: [
          {text: "Je laisse la direction s'en occuper.", score: 0},
          {text: "J'applique mes propres critères à mon niveau.", score: 1},
          {text: "Je propose à la personne compétente des éléments pour construire une politique simple.", score: 2}
          ]
        },
        {
          text: "Une politique d'achat responsable existe mais peu de personnes la connaissent vraiment. Que faites-vous ?",
          answers: [
          {text: "Je la connais pour moi — c'est l'essentiel.", score: 0},
          {text: "Je la partage si quelqu'un me pose la question.", score: 1},
          {text: "Je cherche à rendre la politique plus accessible à mon niveau.", score: 2}
          ]
        },
        {
          text: "Les critères RSE dans les achats créent des délais supplémentaires. Certains les contournent. Que faites-vous ?",
          answers: [
          {text: "Je comprends — les délais sont une vraie contrainte.", score: 0},
          {text: "Je les applique pour moi.", score: 1},
          {text: "J'applique les critères ET j'analyse si le process peut être simplifié pour réduire les délais.", score: 2}
          ]
        },
        {
          text: "Votre organisation évalue rarement les fournisseurs après la signature du contrat. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle.", score: 0},
          {text: "J'en parle informellement à l'acheteur.", score: 1},
          {text: "Je propose l'intégration d'un suivi post-contractuel des critères RSE.", score: 2}
          ]
        },
        {
          text: "Une décision d'achat prise avant que vous arriviez a des conséquences environnementales négatives. Que faites-vous ?",
          answers: [
          {text: "Je l'accepte — c'est décidé.", score: 0},
          {text: "Je signale les conséquences.", score: 1},
          {text: "Je formule une proposition d'amélioration pour les prochains cycles.", score: 2}
          ]
        }
    ],
  },

  "manager-transition-eco": {
    0: [
        {
          text: "Vous devez présenter un objectif RSE à votre équipe. Certains vont trouver ça abstrait. Que faites-vous ?",
          answers: [
          {text: "Je leur présente les chiffres et les objectifs officiels.", score: 0},
          {text: "Je cherche des exemples parlants pour illustrer.", score: 1},
          {text: "Je traduis l'objectif en gestes concrets de leur quotidien pour le rendre tangible.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande à quoi sert vraiment l'engagement RSE de l'entreprise. Il est sceptique. Que faites-vous ?",
          answers: [
          {text: "Je lui dis que c'est la politique de l'entreprise.", score: 0},
          {text: "Je lui donne les arguments RSE officiels.", score: 1},
          {text: "Je prends sa question au sérieux et engage une vraie discussion sur les enjeux réels.", score: 2}
          ]
        },
        {
          text: "Votre équipe pense que leurs gestes individuels au bureau ne changent rien. Que faites-vous ?",
          answers: [
          {text: "Je leur dis qu'ils ont en partie raison mais qu'il faut quand même agir.", score: 0},
          {text: "Je leur explique l'importance symbolique des gestes individuels.", score: 1},
          {text: "Je cherche à relier leurs actions à des changements systémiques concrets pour rendre la connexion visible.", score: 2}
          ]
        },
        {
          text: "Vous devez relayer un message RSE que vous ne trouvez pas entièrement crédible. Que faites-vous ?",
          answers: [
          {text: "Je le transmets tel quel.", score: 0},
          {text: "Je le transmets avec mes réserves personnelles.", score: 1},
          {text: "Je cherche ce qui est crédible dans le message et je le transmets de façon authentique, sans surjouer.", score: 2}
          ]
        },
        {
          text: "Un collaborateur remarque une incohérence entre le discours RSE de l'organisation et ses pratiques. Que faites-vous ?",
          answers: [
          {text: "Je lui dis que tout ne peut pas changer du jour au lendemain.", score: 0},
          {text: "Je reconnais l'incohérence mais je reste positif.", score: 1},
          {text: "Je reconnais l'incohérence, cherche ce qui peut être amélioré à mon niveau et remonte l'observation.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Votre équipe veut lancer une action RSE mais manque de temps pour la préparer sérieusement. Que faites-vous ?",
          answers: [
          {text: "Je les encourage mais sans leur accorder du temps dédié.", score: 0},
          {text: "Je leur accorde un peu de temps.", score: 1},
          {text: "Je cherche comment intégrer l'action dans le flux habituel de travail plutôt que de l'ajouter par-dessus.", score: 2}
          ]
        },
        {
          text: "Vous avez identifié un changement de pratique simple qui réduirait l'impact environnemental de votre équipe. Il demande un effort initial. Que faites-vous ?",
          answers: [
          {text: "J'attends que l'équipe soit disponible.", score: 0},
          {text: "Je propose le changement lors d'une réunion.", score: 1},
          {text: "Je le prépare concrètement et je le propose avec un plan de mise en œuvre réaliste.", score: 2}
          ]
        },
        {
          text: "Votre équipe applique les gestes RSE mais sans vraiment comprendre pourquoi. Que faites-vous ?",
          answers: [
          {text: "Le résultat est là — la compréhension n'est pas prioritaire.", score: 0},
          {text: "Je donne des explications quand on me pose la question.", score: 1},
          {text: "Je crée des moments pour relier les gestes aux enjeux concrets.", score: 2}
          ]
        },
        {
          text: "Une action RSE que vous voulez mettre en place nécessite un accord de votre hiérarchie. Elle tarde à répondre. Que faites-vous ?",
          answers: [
          {text: "J'attends.", score: 0},
          {text: "Je relance.", score: 1},
          {text: "Je relance avec des éléments concrets sur l'impact attendu et le coût de l'inaction.", score: 2}
          ]
        },
        {
          text: "Vous constatez que votre équipe a de bonnes pratiques RSE mais qu'elles varient fortement d'une personne à l'autre. Que faites-vous ?",
          answers: [
          {text: "Je laisse chacun faire à sa façon.", score: 0},
          {text: "Je partage les meilleures pratiques en réunion.", score: 1},
          {text: "Je cherche à créer des pratiques communes et accessibles à tous.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous devez arbitrer entre une décision qui est bonne pour la performance à court terme et une qui est meilleure pour l'impact environnemental. Que faites-vous ?",
          answers: [
          {text: "Je priorise la performance — c'est mon indicateur principal.", score: 0},
          {text: "Je cherche un compromis.", score: 1},
          {text: "Je rends l'arbitrage visible pour que la décision soit prise en conscience, au bon niveau.", score: 2}
          ]
        },
        {
          text: "Un client demande une livraison accélérée qui implique un transport plus polluant. Que faites-vous ?",
          answers: [
          {text: "Je satisfais la demande — c'est le client.", score: 0},
          {text: "Je pose la question de l'impact avant de valider.", score: 1},
          {text: "Je propose au client une alternative moins impactante en expliquant le contexte.", score: 2}
          ]
        },
        {
          text: "Votre équipe est sous pression et les pratiques RSE passent à la trappe. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — la pression est réelle.", score: 0},
          {text: "Je rappelle l'importance de maintenir les pratiques.", score: 1},
          {text: "J'identifie les pratiques RSE qui peuvent tenir même sous pression et je les préserve.", score: 2}
          ]
        },
        {
          text: "Un arbitrage économique et un objectif RSE entrent en conflit direct. Personne ne veut trancher. Que faites-vous ?",
          answers: [
          {text: "J'applique la décision économique — c'est la norme.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je formalise le conflit avec ses enjeux et demande une décision explicite à la bonne personne.", score: 2}
          ]
        },
        {
          text: "Votre organisation fixe des objectifs RSE mais sans y allouer de ressources. Que faites-vous ?",
          answers: [
          {text: "Je fais ce que je peux avec ce que j'ai.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je remonte la dissonance entre objectifs et moyens de façon formelle avec des exemples concrets.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre équipe a pris de bonnes habitudes RSE. Comment les maintenez-vous dans la durée ?",
          answers: [
          {text: "J'espère que ça dure d'elle-même.", score: 0},
          {text: "Je rappelle l'importance des pratiques de temps en temps.", score: 1},
          {text: "Je les intègre aux rituels d'équipe pour qu'elles ne dépendent pas de la vigilance de chacun.", score: 2}
          ]
        },
        {
          text: "Un changement organisationnel perturbe les pratiques RSE mises en place. Que faites-vous ?",
          answers: [
          {text: "Je laisse les pratiques s'adapter naturellement.", score: 0},
          {text: "Je signale que les pratiques ont été perturbées.", score: 1},
          {text: "Je cherche comment adapter les pratiques au nouveau contexte pour préserver l'essentiel.", score: 2}
          ]
        },
        {
          text: "Votre équipe a du mal à se remettre sur les rails RSE après une période de forte pression. Que faites-vous ?",
          answers: [
          {text: "J'attends que l'énergie revienne.", score: 0},
          {text: "Je relance les pratiques.", score: 1},
          {text: "Je propose un moment de bilan pour identifier ce qui a fonctionné et ce qui a craqué sous la pression.", score: 2}
          ]
        },
        {
          text: "Vous êtes convaincu que la dynamique RSE de votre équipe peut s'étendre à l'équipe voisine. Que faites-vous ?",
          answers: [
          {text: "Je laisse chaque équipe évoluer à son rythme.", score: 0},
          {text: "Je partage nos pratiques si quelqu'un me demande.", score: 1},
          {text: "Je cherche une occasion concrète de partager nos apprentissages avec les autres équipes.", score: 2}
          ]
        },
        {
          text: "Votre organisation mesure les résultats RSE mais les indicateurs ne semblent pas refléter ce que votre équipe fait réellement. Que faites-vous ?",
          answers: [
          {text: "Je laisse les experts RSE gérer les indicateurs.", score: 0},
          {text: "Je remonte l'information.", score: 1},
          {text: "Je propose des indicateurs complémentaires qui rendraient visibles les efforts réels.", score: 2}
          ]
        }
    ],
  },

  "numerique-responsable": {
    0: [
        {
          text: "Votre boîte mail contient 8 000 emails dont la plupart sont inutiles. Que faites-vous ?",
          answers: [
          {text: "Je les laisse — ils ne prennent pas de place visible.", score: 0},
          {text: "Je supprime les plus anciens quand j'en ai le temps.", score: 1},
          {text: "Je consacre un moment à nettoyer ma boîte de façon systématique.", score: 2}
          ]
        },
        {
          text: "Vous recevez une pièce jointe lourde que vous avez déjà. Vous la sauvegardez. Que faites-vous à la place ?",
          answers: [
          {text: "Je sauvegarde par sécurité.", score: 0},
          {text: "Je vérifie si j'ai déjà le fichier avant de sauvegarder.", score: 1},
          {text: "Je travaille depuis un lien partagé plutôt que de multiplier les copies.", score: 2}
          ]
        },
        {
          text: "Votre espace de stockage cloud est plein de fichiers dupliqués et de versions obsolètes. Que faites-vous ?",
          answers: [
          {text: "Je laisse — ça ne coûte pas grand chose.", score: 0},
          {text: "Je nettoie les fichiers dont je suis sûr d'être le propriétaire.", score: 1},
          {text: "Je consacre un temps régulier à nettoyer et archiver mes fichiers.", score: 2}
          ]
        },
        {
          text: "Vous laissez votre ordinateur allumé toute la nuit de façon habituelle. Que faites-vous ?",
          answers: [
          {text: "Je le laisse — l'extinction et le redémarrage prennent du temps.", score: 0},
          {text: "Je le laisse en veille.", score: 1},
          {text: "Je l'éteins systématiquement en fin de journée.", score: 2}
          ]
        },
        {
          text: "Vous avez des dizaines d'onglets ouverts en permanence dans votre navigateur. Que faites-vous ?",
          answers: [
          {text: "C'est ma façon de travailler.", score: 0},
          {text: "Je ferme les onglets inutiles de temps en temps.", score: 1},
          {text: "Je travaille avec un nombre limité d'onglets et j'utilise d'autres méthodes pour garder les informations importantes.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Une réunion de 30 minutes avec 3 personnes peut se tenir en visio ou en présentiel. Tous sont dans le même bâtiment. Que faites-vous ?",
          answers: [
          {text: "Je convoque en visio — c'est pratique.", score: 0},
          {text: "Je laisse chacun décider.", score: 1},
          {text: "Je propose le présentiel par défaut pour ce type de réunion courte.", score: 2}
          ]
        },
        {
          text: "Vous devez présenter un document à une réunion. Vous pouvez le projeter ou l'imprimer. Que faites-vous ?",
          answers: [
          {text: "Je l'imprime pour que tout le monde l'ait sous les yeux.", score: 0},
          {text: "Je projette si la salle le permet.", score: 1},
          {text: "Je projette et partage le lien numérique en amont.", score: 2}
          ]
        },
        {
          text: "Une réunion hybride est planifiée alors qu'une réunion entièrement en visio suffirait. Que faites-vous ?",
          answers: [
          {text: "J'accepte le format proposé.", score: 0},
          {text: "Je propose la visio si c'est possible.", score: 1},
          {text: "J'évalue objectivement si le déplacement de certains est vraiment nécessaire.", score: 2}
          ]
        },
        {
          text: "Vous participez à une visio depuis un espace bruyant. La caméra est allumée. Que faites-vous ?",
          answers: [
          {text: "Je continue — ça ne change pas grand chose.", score: 0},
          {text: "Je coupe le micro quand je ne parle pas.", score: 1},
          {text: "Je passe en audio uniquement ou je cherche un espace plus adapté.", score: 2}
          ]
        },
        {
          text: "Un événement interne peut être organisé en présentiel ou en distanciel. Le présentiel serait plus agréable. Que faites-vous ?",
          answers: [
          {text: "Je propose le présentiel — l'expérience en vaut la peine.", score: 0},
          {text: "Je prends en compte l'impact environnemental dans mon analyse.", score: 1},
          {text: "Je compare les options avec leurs impacts et formule une recommandation explicite.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Votre organisation renouvelle systématiquement ses équipements tous les 3 ans, même s'ils fonctionnent. Que faites-vous ?",
          answers: [
          {text: "Je profite du renouvellement — le nouveau est toujours mieux.", score: 0},
          {text: "Je signale que mon équipement fonctionne encore.", score: 1},
          {text: "Je demande à prolonger la durée de vie de mon équipement et je remonte la pratique de renouvellement systématique.", score: 2}
          ]
        },
        {
          text: "Votre ordinateur ralentit. On vous propose un remplacement. Que faites-vous ?",
          answers: [
          {text: "J'accepte le remplacement.", score: 0},
          {text: "Je demande si une réparation ou une mise à niveau est possible.", score: 1},
          {text: "Je demande une analyse technique avant toute décision et favorise la réparation si elle est efficace.", score: 2}
          ]
        },
        {
          text: "Des équipements fonctionnels sont stockés inutilisés dans votre organisation. Que faites-vous ?",
          answers: [
          {text: "Je laisse le service informatique gérer.", score: 0},
          {text: "Je signale leur existence.", score: 1},
          {text: "Je cherche s'ils peuvent être réattribués ou reconditionnés plutôt que stockés.", score: 2}
          ]
        },
        {
          text: "Un logiciel ou outil numérique que vous utilisez génère plus de stockage que nécessaire (données brutes, logs, archives). Que faites-vous ?",
          answers: [
          {text: "Je laisse — le stockage est géré par l'équipe IT.", score: 0},
          {text: "Je fais le ménage dans les fichiers dont je suis responsable.", score: 1},
          {text: "Je cherche à optimiser les paramètres pour réduire la génération de données inutiles.", score: 2}
          ]
        },
        {
          text: "Un fournisseur de solutions numériques n'a aucune politique environnementale. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas un critère pour moi.", score: 0},
          {text: "J'en prends note pour la prochaine évaluation.", score: 1},
          {text: "Je remonte ce critère lors de l'évaluation du fournisseur.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre organisation envoie des newsletters internes que peu de personnes lisent. Que faites-vous ?",
          answers: [
          {text: "Je continue à les recevoir — ça ne me dérange pas.", score: 0},
          {text: "Je me désabonne.", score: 1},
          {text: "Je me désabonne ET propose une réflexion sur la pertinence de ce canal.", score: 2}
          ]
        },
        {
          text: "Les réunions en visio de votre organisation sont souvent beaucoup trop longues. Que faites-vous ?",
          answers: [
          {text: "Je les subis.", score: 0},
          {text: "Je propose de raccourcir lors de certaines réunions.", score: 1},
          {text: "Je propose une révision du format de ces réunions avec des critères de durée et d'ordre du jour.", score: 2}
          ]
        },
        {
          text: "Votre équipe envoie des emails pour des sujets qui pourraient être traités en 30 secondes à l'oral. Que faites-vous ?",
          answers: [
          {text: "Je réponds par email comme tout le monde.", score: 0},
          {text: "Je préfère parfois passer par téléphone.", score: 1},
          {text: "Je propose des normes d'équipe sur le bon canal selon le type de message.", score: 2}
          ]
        },
        {
          text: "Un outil de collaboration génère beaucoup de notifications qui épuisent l'attention collective. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte.", score: 0},
          {text: "Je coupe mes propres notifications.", score: 1},
          {text: "Je propose une charte d'utilisation qui réduit le bruit pour tout le monde.", score: 2}
          ]
        },
        {
          text: "Votre organisation investit dans un nouvel outil numérique mais n'a pas évalué l'utilité de l'ancien. Que faites-vous ?",
          answers: [
          {text: "Je laisse l'IT gérer.", score: 0},
          {text: "Je mentionne que l'ancien outil mériterait d'être évalué.", score: 1},
          {text: "Je contribue à l'évaluation comparative et propose de rationaliser avant d'ajouter.", score: 2}
          ]
        }
    ],
  },

  "deplacements-sobriete": {
    0: [
        {
          text: "Vous devez vous rendre à une réunion de 1h à 200 km. Aucun autre collègue n'a soulevé la question du format. Que faites-vous ?",
          answers: [
          {text: "Je réserve mon billet — c'est prévu.", score: 0},
          {text: "Je vérifie si une participation en visio est possible.", score: 1},
          {text: "Je propose activement une visio et explique pourquoi c'est suffisant pour ce cas.", score: 2}
          ]
        },
        {
          text: "Une réunion hebdomadaire est systématiquement en présentiel. Elle pourrait souvent se tenir en visio. Que faites-vous ?",
          answers: [
          {text: "Je viens — c'est le format décidé.", score: 0},
          {text: "Je participe en distanciel quand c'est accepté.", score: 1},
          {text: "Je propose de revoir le format de façon régulière pour ne tenir en présentiel que quand c'est vraiment utile.", score: 2}
          ]
        },
        {
          text: "Vous avez plusieurs rendez-vous clients dans une même ville cette semaine. Vous n'avez pas coordonné les dates. Que faites-vous ?",
          answers: [
          {text: "J'organise mes rendez-vous séparément selon les disponibilités.", score: 0},
          {text: "J'essaie de regrouper si c'est pratique.", score: 1},
          {text: "Je regroupe systématiquement les rendez-vous dans la même zone géographique pour limiter les déplacements.", score: 2}
          ]
        },
        {
          text: "Un trajet aller-retour de 3h vous attend pour une réunion de 45 minutes. Que faites-vous ?",
          answers: [
          {text: "Je fais le trajet — c'est important d'être là.", score: 0},
          {text: "Je demande si une connexion en distanciel est possible.", score: 1},
          {text: "Je propose une visio et j'explique que le ratio déplacement/utilité est disproportionné.", score: 2}
          ]
        },
        {
          text: "Votre organisation n'a pas de politique claire sur les déplacements professionnels. Que faites-vous ?",
          answers: [
          {text: "Je fais comme mes collègues.", score: 0},
          {text: "J'applique mes propres critères.", score: 1},
          {text: "Je propose à la personne compétente de réfléchir à des critères simples et partagés.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous devez choisir entre le train et l'avion pour un déplacement. Le train prend 1h de plus. Que faites-vous ?",
          answers: [
          {text: "Je prends l'avion — 1h de gagné, c'est précieux.", score: 0},
          {text: "Je prends le train si l'organisation me le permet.", score: 1},
          {text: "Je prends le train par défaut et profite du temps de trajet pour travailler.", score: 2}
          ]
        },
        {
          text: "Votre organisation rembourse mieux les déplacements en voiture solo qu'en covoiturage. Que faites-vous ?",
          answers: [
          {text: "Je prends ma voiture — c'est plus avantageux financièrement.", score: 0},
          {text: "Je covoiture si quelqu'un propose.", score: 1},
          {text: "Je covoiture et signale que la politique de remboursement mériterait d'être révisée.", score: 2}
          ]
        },
        {
          text: "Vous devez participer à un congrès à l'étranger. Vous pourriez suivre à distance. Que faites-vous ?",
          answers: [
          {text: "Je vais sur place — le réseau et l'ambiance valent le déplacement.", score: 0},
          {text: "Je compare les deux options.", score: 1},
          {text: "J'évalue si ma présence physique apporte une valeur ajoutée réelle par rapport à la participation à distance.", score: 2}
          ]
        },
        {
          text: "Votre client préfère des réunions en présentiel mais vous pensez que la visio suffirait. Que faites-vous ?",
          answers: [
          {text: "Je me déplace — c'est ce que le client veut.", score: 0},
          {text: "Je propose la visio de temps en temps.", score: 1},
          {text: "Je propose une conversation sur les formats selon les étapes, pour ne se déplacer que quand c'est vraiment utile.", score: 2}
          ]
        },
        {
          text: "Un collègue fait régulièrement des allers-retours qui pourraient être évités avec un meilleur planning. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon affaire.", score: 0},
          {text: "Je lui suggère de mieux planifier.", score: 1},
          {text: "Je cherche si je peux contribuer à une meilleure coordination collective pour éviter les déplacements inutiles.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous partez en déplacement et avez une journée sans réunion. Que faites-vous ?",
          answers: [
          {text: "Je profite de la journée libre.", score: 0},
          {text: "Je cherche des contacts à rencontrer sur place.", score: 1},
          {text: "J'évalue si je peux avancer le départ ou reculer le retour pour réduire les nuits d'hôtel.", score: 2}
          ]
        },
        {
          text: "Vous organisez un événement qui nécessitera des déplacements pour de nombreuses personnes. Que faites-vous ?",
          answers: [
          {text: "Je choisis le lieu le plus pratique pour l'organisation.", score: 0},
          {text: "Je cherche le lieu le plus central pour les participants.", score: 1},
          {text: "Je cherche le lieu qui minimise les déplacements globaux tout en restant pratique.", score: 2}
          ]
        },
        {
          text: "Des déplacements fréquents sont prévus pour un projet qui pourrait être géré en grande partie à distance. Que faites-vous ?",
          answers: [
          {text: "Je suis le plan de déplacements prévu.", score: 0},
          {text: "Je propose de réduire certains déplacements.", score: 1},
          {text: "Je propose un plan alternatif basé sur une présence physique ciblée aux moments clés seulement.", score: 2}
          ]
        },
        {
          text: "Votre organisation demande une présence physique hebdomadaire pour une raison peu claire. Que faites-vous ?",
          answers: [
          {text: "Je me déplace — c'est demandé.", score: 0},
          {text: "Je me déplace mais j'exprime ma réserve.", score: 1},
          {text: "Je questionne la raison de cette exigence et propose une alternative fondée sur les besoins réels.", score: 2}
          ]
        },
        {
          text: "Vous revenez d'un déplacement et réalisez qu'il aurait pu être évité. Que faites-vous ?",
          answers: [
          {text: "Je passe à autre chose.", score: 0},
          {text: "Je note mentalement pour la prochaine fois.", score: 1},
          {text: "Je prends le temps d'en tirer une leçon concrète pour les déplacements futurs similaires.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre culture d'organisation valorise implicitement la présence physique. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte à la culture.", score: 0},
          {text: "J'applique mes propres critères en restant discret.", score: 1},
          {text: "Je cherche à influencer la culture par l'exemple et par des propositions concrètes.", score: 2}
          ]
        },
        {
          text: "Votre organisation n'a pas d'objectif chiffré sur les déplacements. Que faites-vous ?",
          answers: [
          {text: "Je laisse l'équipe RSE gérer.", score: 0},
          {text: "J'applique mes propres critères.", score: 1},
          {text: "Je propose un indicateur simple à suivre à l'échelle de mon équipe.", score: 2}
          ]
        },
        {
          text: "Des collègues font des déplacements nombreux pour des raisons qui semblent plus liées aux habitudes qu'aux besoins. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon affaire.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je cherche à créer un espace de réflexion collective sur quand se déplacer vraiment.", score: 2}
          ]
        },
        {
          text: "Votre politique de déplacements existe mais elle est ignorée par beaucoup. Que faites-vous ?",
          answers: [
          {text: "Je l'applique pour moi.", score: 0},
          {text: "Je rappelle la politique si quelqu'un me demande.", score: 1},
          {text: "Je cherche à comprendre pourquoi elle est ignorée et propose comment la rendre plus applicable.", score: 2}
          ]
        },
        {
          text: "Votre équipe a réduit ses déplacements depuis un an mais les habitudes anciennes reviennent progressivement. Que faites-vous ?",
          answers: [
          {text: "J'attends de voir si ça revient vraiment.", score: 0},
          {text: "Je maintiens mes propres pratiques.", score: 1},
          {text: "Je propose un bilan et une réflexion collective pour éviter le retour aux anciens réflexes.", score: 2}
          ]
        }
    ],
  },

  "achats-impact": {
    0: [
        {
          text: "Vous avez besoin d'un article. Il est disponible en prêt interne. Que faites-vous ?",
          answers: [
          {text: "J'achète le mien — c'est plus pratique.", score: 0},
          {text: "J'emprunte si c'est facile.", score: 1},
          {text: "Je commence systématiquement par vérifier si un prêt interne est possible.", score: 2}
          ]
        },
        {
          text: "Un achat habituel devient disponible en version éco-certifiée à prix équivalent. Que faites-vous ?",
          answers: [
          {text: "Je continue avec la référence habituelle.", score: 0},
          {text: "Je bascule si on me demande de le faire.", score: 1},
          {text: "Je bascule proactivement et signale la nouvelle option.", score: 2}
          ]
        },
        {
          text: "Vous avez besoin d'un matériel pour une courte durée. Il peut être loué ou acheté. Que faites-vous ?",
          answers: [
          {text: "J'achète — c'est plus pratique sur le long terme.", score: 0},
          {text: "Je loue si c'est simple à organiser.", score: 1},
          {text: "Je loue par défaut pour les besoins ponctuels.", score: 2}
          ]
        },
        {
          text: "Un achat urgent arrive. La procédure normale est trop lente. Que faites-vous ?",
          answers: [
          {text: "Je commande en dehors de la procédure.", score: 0},
          {text: "J'utilise la procédure d'urgence si elle existe.", score: 1},
          {text: "Je vérifie d'abord si le besoin peut être couvert autrement avant de contourner la procédure.", score: 2}
          ]
        },
        {
          text: "Plusieurs fournisseurs répondent à votre besoin. L'un est local, les autres plus lointains. Que faites-vous ?",
          answers: [
          {text: "Je choisis le moins cher.", score: 0},
          {text: "Je prends en compte la proximité comme un critère.", score: 1},
          {text: "Je l'intègre explicitement dans ma comparaison avec les autres critères.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un fournisseur n'a pas de politique RSE mais est 20% moins cher. Que faites-vous ?",
          answers: [
          {text: "Je choisis le moins cher.", score: 0},
          {text: "Je signale l'absence de politique RSE.", score: 1},
          {text: "Je demande des critères comparatifs sur les deux options pour éclairer la décision.", score: 2}
          ]
        },
        {
          text: "Vous découvrez qu'un fournisseur sous-traite à des entreprises dont les conditions de travail sont douteuses. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon périmètre.", score: 0},
          {text: "Je le signale à l'acheteur.", score: 1},
          {text: "Je remonte l'information formellement et demande une vérification.", score: 2}
          ]
        },
        {
          text: "Un achat groupé avec d'autres équipes réduirait l'empreinte logistique mais nécessite de coordonner. Que faites-vous ?",
          answers: [
          {text: "Je commande de mon côté — coordonner prend trop de temps.", score: 0},
          {text: "Je propose si quelqu'un est motivé.", score: 1},
          {text: "Je prends l'initiative de coordonner.", score: 2}
          ]
        },
        {
          text: "Un critère RSE dans un appel d'offres n'a pas été vérifié après l'attribution. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle.", score: 0},
          {text: "Je le signale informellement.", score: 1},
          {text: "Je propose qu'un suivi post-contractuel soit organisé.", score: 2}
          ]
        },
        {
          text: "Un fournisseur propose une option moins polluante mais moins connue. Que faites-vous ?",
          answers: [
          {text: "Je reste sur la référence connue.", score: 0},
          {text: "Je pose des questions sur l'option alternative.", score: 1},
          {text: "Je prends le temps d'évaluer sérieusement l'option alternative avant de décider.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un emballage réduit est disponible mais nécessite un ajustement de présentation. Que faites-vous ?",
          answers: [
          {text: "Je garde l'emballage habituel — l'ajustement est contraignant.", score: 0},
          {text: "Je teste si l'ajustement est vraiment problématique.", score: 1},
          {text: "Je fais l'ajustement si l'emballage réduit est viable.", score: 2}
          ]
        },
        {
          text: "Des achats fréquents et dispersés pourraient être rationalisés. Personne ne l'a initié. Que faites-vous ?",
          answers: [
          {text: "Je laisse les acheteurs gérer.", score: 0},
          {text: "Je propose une rationalisation si quelqu'un me demande.", score: 1},
          {text: "Je prends l'initiative de proposer une analyse des achats et des pistes de rationalisation.", score: 2}
          ]
        },
        {
          text: "Un article livré a un emballage excessif. Que faites-vous ?",
          answers: [
          {text: "Je le jette.", score: 0},
          {text: "Je le signale mentalement.", score: 1},
          {text: "Je le signale au fournisseur ou à l'acheteur pour que le conditionnement soit revu.", score: 2}
          ]
        },
        {
          text: "Vous devez choisir entre deux options équivalentes en performance. L'une est réparable, l'autre non. Que faites-vous ?",
          answers: [
          {text: "Je choisis selon le prix.", score: 0},
          {text: "Je prends en compte la réparabilité comme critère secondaire.", score: 1},
          {text: "La réparabilité est un critère principal dans mon choix.", score: 2}
          ]
        },
        {
          text: "Des pratiques d'achat irresponsables ont été identifiées dans votre équipe. Personne ne les a encore adressées. Que faites-vous ?",
          answers: [
          {text: "Je m'occupe de mes propres pratiques.", score: 0},
          {text: "J'en parle informellement.", score: 1},
          {text: "Je remonte le sujet de façon structurée avec des exemples et des propositions.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre organisation n'a pas revu ses critères d'achat depuis longtemps. Que faites-vous ?",
          answers: [
          {text: "Je laisse les acheteurs gérer.", score: 0},
          {text: "Je suggère une mise à jour si l'occasion se présente.", score: 1},
          {text: "Je propose formellement une révision et propose des critères actualisés.", score: 2}
          ]
        },
        {
          text: "Les pratiques d'achat responsables de votre équipe sont bonnes mais peu documentées. Que faites-vous ?",
          answers: [
          {text: "Je continue comme ça — ça fonctionne.", score: 0},
          {text: "Je les note pour moi.", score: 1},
          {text: "Je cherche à les formaliser pour qu'elles soient transmissibles et durables.", score: 2}
          ]
        },
        {
          text: "Un collaborateur qui gère les achats ne prend pas en compte les critères RSE. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle d'intervenir.", score: 0},
          {text: "Je lui suggère de les prendre en compte.", score: 1},
          {text: "Je cherche à comprendre pourquoi et à lui proposer des outils concrets.", score: 2}
          ]
        },
        {
          text: "Votre organisation a de bons achats responsables sur le papier mais les écarts en pratique sont nombreux. Que faites-vous ?",
          answers: [
          {text: "Je laisse l'équipe RSE gérer.", score: 0},
          {text: "J'applique les critères pour mes propres achats.", score: 1},
          {text: "Je contribue à un état des lieux factuel et propose des actions correctives.", score: 2}
          ]
        },
        {
          text: "Les critères RSE dans les achats créent une charge administrative supplémentaire. Que faites-vous ?",
          answers: [
          {text: "J'accepte la charge.", score: 0},
          {text: "Je la minimise dans la mesure du possible.", score: 1},
          {text: "Je cherche à simplifier le processus pour que les critères RSE soient praticables sans alourdir.", score: 2}
          ]
        }
    ],
  },

  "engagement-rse": {
    0: [
        {
          text: "Vous ne savez pas vraiment quel est l'engagement RSE de votre organisation. Que faites-vous ?",
          answers: [
          {text: "Je laisse ça aux personnes dédiées.", score: 0},
          {text: "Je m'informe si l'occasion se présente.", score: 1},
          {text: "Je cherche à comprendre concrètement ce qui existe et ce qui s'applique à mon quotidien.", score: 2}
          ]
        },
        {
          text: "Vous voudriez agir pour l'environnement au travail mais vous ne savez pas par où commencer. Que faites-vous ?",
          answers: [
          {text: "J'attends qu'un programme soit lancé.", score: 0},
          {text: "Je fais des gestes simples sans les formaliser.", score: 1},
          {text: "Je commence par identifier un ou deux leviers concrets à mon niveau et je m'y tiens.", score: 2}
          ]
        },
        {
          text: "Vous pensez être peu légitime pour agir sur les sujets RSE sans en être expert. Que faites-vous ?",
          answers: [
          {text: "Je laisse les experts agir.", score: 0},
          {text: "Je fais de petits gestes sans m'afficher.", score: 1},
          {text: "Je me concentre sur mon périmètre réel — je n'ai pas besoin d'être expert pour agir.", score: 2}
          ]
        },
        {
          text: "Votre niveau d'engagement RSE personnel est modeste. Vous vous demandez si ça vaut la peine d'essayer de faire plus. Que faites-vous ?",
          answers: [
          {text: "Je continue au niveau actuel — c'est déjà quelque chose.", score: 0},
          {text: "Je cherche une ou deux actions supplémentaires réalistes.", score: 1},
          {text: "Je prends le temps d'identifier ce qui me freine vraiment et je travaille sur un point précis.", score: 2}
          ]
        },
        {
          text: "Vous n'êtes pas convaincu que les actions RSE dans votre organisation aient un impact réel. Que faites-vous ?",
          answers: [
          {text: "Je continue par conformisme.", score: 0},
          {text: "Je pose la question lors d'une réunion.", score: 1},
          {text: "Je cherche à comprendre comment les actions sont mesurées et si l'évaluation est fiable.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Une action RSE concrète à votre niveau vous demande un effort initial mais serait bénéfique. Que faites-vous ?",
          answers: [
          {text: "Je la reporte — j'ai d'autres priorités.", score: 0},
          {text: "Je la fais si j'ai le temps.", score: 1},
          {text: "Je la planifie concrètement pour ne pas la laisser en intention.", score: 2}
          ]
        },
        {
          text: "Votre organisation ne vous donne pas de signal clair sur ce qu'elle attend de vous en matière de RSE. Que faites-vous ?",
          answers: [
          {text: "J'attends une politique claire.", score: 0},
          {text: "Je fais ce qui me semble logique.", score: 1},
          {text: "Je cherche des marges d'action à mon niveau sans attendre un cadre complet.", score: 2}
          ]
        },
        {
          text: "Vous avez envie de réduire votre empreinte numérique professionnelle mais vous ne savez pas par où commencer. Que faites-vous ?",
          answers: [
          {text: "J'attends un guide ou une formation.", score: 0},
          {text: "Je commence par ce qui me semble évident.", score: 1},
          {text: "Je choisis un seul geste concret, je le mets en place, puis j'en ajoute un autre.", score: 2}
          ]
        },
        {
          text: "Votre organisation propose des actions RSE mais elles ne semblent pas prioritaires pour votre équipe. Que faites-vous ?",
          answers: [
          {text: "Je laisse tomber — ce n'est pas le bon moment.", score: 0},
          {text: "Je participe de façon minimale.", score: 1},
          {text: "Je cherche quelles actions sont réellement compatibles avec notre rythme de travail.", score: 2}
          ]
        },
        {
          text: "Une action RSE que vous souhaitez mettre en place à votre niveau nécessite une validation. Elle tarde. Que faites-vous ?",
          answers: [
          {text: "Je renonce.", score: 0},
          {text: "J'attends.", score: 1},
          {text: "Je relance en montrant concrètement ce que l'action apporte.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un collègue est indifférent aux sujets RSE. Que faites-vous ?",
          answers: [
          {text: "Je le laisse — c'est son droit.", score: 0},
          {text: "Je partage mes convictions.", score: 1},
          {text: "Je cherche un angle qui l'intéresse vraiment, sans l'assommer de discours.", score: 2}
          ]
        },
        {
          text: "Vous voulez embarquer votre équipe dans une démarche RSE mais vous ne voulez pas avoir l'air de donner des leçons. Que faites-vous ?",
          answers: [
          {text: "Je n'aborde pas le sujet.", score: 0},
          {text: "Je mentionne mes propres gestes sans chercher à les étendre.", score: 1},
          {text: "Je cherche une approche par l'action concrète et partagée plutôt que par la conviction.", score: 2}
          ]
        },
        {
          text: "Un collègue vous reproche d'être trop sensible aux sujets RSE. Que faites-vous ?",
          answers: [
          {text: "Je recule pour ne pas créer de tension.", score: 0},
          {text: "Je maintiens mes pratiques sans répondre.", score: 1},
          {text: "Je réponds calmement et factuellement, sans moraliser.", score: 2}
          ]
        },
        {
          text: "Votre équipe a lancé une démarche RSE que vous trouvez trop superficielle. Que faites-vous ?",
          answers: [
          {text: "Je participe quand même — quelque chose vaut mieux que rien.", score: 0},
          {text: "Je propose des actions plus ambitieuses.", score: 1},
          {text: "Je contribue à l'initiative ET propose des améliorations concrètes pour aller plus loin.", score: 2}
          ]
        },
        {
          text: "Des collègues prêts à agir attendent un signal ou une opportunité. Que faites-vous ?",
          answers: [
          {text: "Je les laisse attendre le bon moment.", score: 0},
          {text: "Je leur partage mes pratiques.", score: 1},
          {text: "Je prends l'initiative de créer l'opportunité pour qu'on agisse ensemble.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vos actions RSE personnelles vous coûtent du temps mais ne sont pas reconnues. Que faites-vous ?",
          answers: [
          {text: "Je réduis mes efforts.", score: 0},
          {text: "Je continue sans me soucier de la reconnaissance.", score: 1},
          {text: "Je continue ET cherche à rendre les efforts collectifs plus visibles pour que leur valeur soit reconnue.", score: 2}
          ]
        },
        {
          text: "Vous maintenez des pratiques RSE depuis longtemps. Comment les tenez-vous dans la durée ?",
          answers: [
          {text: "Je fais attention de ne pas glisser.", score: 0},
          {text: "Je me rappelle régulièrement pourquoi c'est important.", score: 1},
          {text: "Je les ai intégrées à mes routines de façon à ne pas dépendre de la motivation du moment.", score: 2}
          ]
        },
        {
          text: "Une période de forte pression vous a fait abandonner certains gestes RSE. Que faites-vous après ?",
          answers: [
          {text: "Je les reprends progressivement si j'y pense.", score: 0},
          {text: "Je reprends là où j'étais.", score: 1},
          {text: "J'identifie quels gestes ont résisté à la pression et je renforce ceux-là en priorité.", score: 2}
          ]
        },
        {
          text: "Vous avez sensibilisé des collègues qui ont pris de bonnes pratiques, mais elles se perdent avec le temps. Que faites-vous ?",
          answers: [
          {text: "J'accepte — le changement de comportement prend du temps.", score: 0},
          {text: "Je rappelle l'importance des pratiques.", score: 1},
          {text: "Je cherche à intégrer ces pratiques dans des rituels collectifs pour les rendre durables.", score: 2}
          ]
        },
        {
          text: "Vous vous sentez parfois découragé par l'ampleur des enjeux environnementaux par rapport à l'échelle de vos actions. Que faites-vous ?",
          answers: [
          {text: "Je continue par principe, même si c'est décourageant.", score: 0},
          {text: "Je me concentre sur ce que je peux contrôler.", score: 1},
          {text: "Je me rappelle le lien entre les comportements individuels et la culture collective, et j'agis en conséquence.", score: 2}
          ]
        }
    ],
  },

  "manager-rse-equipe": {
    0: [
        {
          text: "Vous portez le discours RSE auprès de votre équipe mais vous n'appliquez pas vous-même certaines pratiques que vous demandez. Que faites-vous ?",
          answers: [
          {text: "Je continue — le rôle de relais est distinct du rôle d'exemple.", score: 0},
          {text: "Je cherche à être plus cohérent progressivement.", score: 1},
          {text: "Je priorise l'exemplarité : mon équipe observera mes pratiques avant d'écouter mes discours.", score: 2}
          ]
        },
        {
          text: "Votre équipe vous voit faire des gestes RSE mais ne comprend pas pourquoi. Que faites-vous ?",
          answers: [
          {text: "Je laisse mes gestes parler d'eux-mêmes.", score: 0},
          {text: "J'explique si quelqu'un pose la question.", score: 1},
          {text: "Je crée des occasions de partager le sens de ces gestes sans transformer ça en leçon.", score: 2}
          ]
        },
        {
          text: "Vous avez des engagements RSE personnels que vous ne souhaitez pas imposer à votre équipe. Comment gérez-vous cela ?",
          answers: [
          {text: "Je les garde pour moi.", score: 0},
          {text: "Je les partage de façon informelle si ça vient naturellement.", score: 1},
          {text: "Je montre l'exemple sans en faire une attente — chacun a son propre cheminement.", score: 2}
          ]
        },
        {
          text: "Votre organisation valorise le discours RSE mais peu les actes réels. Que faites-vous ?",
          answers: [
          {text: "Je m'aligne sur la culture dominante.", score: 0},
          {text: "Je continue mes pratiques sans les mettre en avant.", score: 1},
          {text: "Je maintiens mes pratiques et cherche à rendre les actes concrets plus visibles.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à expliquer le lien entre le travail de votre équipe et les enjeux RSE globaux. Que faites-vous ?",
          answers: [
          {text: "Je laisse tomber — le lien n'est pas évident.", score: 0},
          {text: "J'utilise les communications officielles de l'organisation.", score: 1},
          {text: "Je construis un lien local et concret entre leur activité quotidienne et un impact mesurable.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous voulez embarquer votre équipe dans une démarche RSE mais certains membres résistent. Que faites-vous ?",
          answers: [
          {text: "Je les convaincs que c'est important.", score: 0},
          {text: "Je laisse chacun choisir son niveau d'engagement.", score: 1},
          {text: "Je cherche ce qui résonne concrètement pour les résistants et je pars de là.", score: 2}
          ]
        },
        {
          text: "Votre équipe participe formellement à des actions RSE mais sans vraiment y croire. Que faites-vous ?",
          answers: [
          {text: "La participation formelle suffit — les convictions viennent avec le temps.", score: 0},
          {text: "Je cherche à animer davantage les actions.", score: 1},
          {text: "Je cherche à comprendre ce qui génère ce décalage entre forme et fond.", score: 2}
          ]
        },
        {
          text: "Vous voulez créer un moment de sensibilisation RSE pour votre équipe. Elle est déjà surchargée. Que faites-vous ?",
          answers: [
          {text: "Je reporte — ce n'est pas le bon moment.", score: 0},
          {text: "Je crée un moment court et optionnel.", score: 1},
          {text: "Je cherche à intégrer la sensibilisation dans un moment qui existe déjà plutôt que d'en créer un nouveau.", score: 2}
          ]
        },
        {
          text: "Des membres de votre équipe ont des idées RSE mais ne savent pas comment les porter. Que faites-vous ?",
          answers: [
          {text: "Je les encourage à les partager en réunion.", score: 0},
          {text: "Je les aide à les formaliser.", score: 1},
          {text: "Je crée un espace dédié pour que ces idées soient accueillies et évaluées sérieusement.", score: 2}
          ]
        },
        {
          text: "L'engagement RSE de votre équipe varie beaucoup selon les personnes. Que faites-vous ?",
          answers: [
          {text: "Je laisse chacun à son niveau.", score: 0},
          {text: "Je valorise ceux qui s'engagent le plus.", score: 1},
          {text: "Je cherche des pratiques communes accessibles à tous, sans pénaliser ceux qui s'engagent davantage.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un projet de votre équipe a un impact environnemental que personne ne mesure. Que faites-vous ?",
          answers: [
          {text: "Si personne ne le mesure, c'est que ce n'est pas prioritaire.", score: 0},
          {text: "Je cherche à l'évaluer de façon informelle.", score: 1},
          {text: "Je propose d'intégrer un indicateur simple dans le pilotage du projet.", score: 2}
          ]
        },
        {
          text: "Votre hiérarchie vous demande des résultats rapides sur un projet qui nécessiterait des pratiques plus sobres. Que faites-vous ?",
          answers: [
          {text: "Je priorise les résultats — c'est ce qu'on attend de moi.", score: 0},
          {text: "Je cherche un compromis.", score: 1},
          {text: "Je rends l'arbitrage visible et je demande une décision explicite à ma hiérarchie.", score: 2}
          ]
        },
        {
          text: "Votre budget RSE est très faible par rapport aux objectifs. Que faites-vous ?",
          answers: [
          {text: "Je fais ce que je peux avec ce que j'ai.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je construis un argumentaire sur le décalage entre objectifs et moyens et je demande un arbitrage.", score: 2}
          ]
        },
        {
          text: "Un partenaire ou fournisseur de votre équipe a des pratiques RSE contradictoires avec vos objectifs. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — ce n'est pas ma relation à gérer.", score: 0},
          {text: "J'en parle informellement à l'acheteur.", score: 1},
          {text: "Je remonte formellement la contradiction et propose des critères pour la prochaine évaluation.", score: 2}
          ]
        },
        {
          text: "Vous avez des objectifs RSE mais ils ne sont jamais abordés en revue de performance. Que faites-vous ?",
          answers: [
          {text: "Je les traite comme secondaires si personne n'en parle.", score: 0},
          {text: "Je les aborde moi-même lors de la revue.", score: 1},
          {text: "Je propose qu'ils soient intégrés structurellement dans les revues.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Les bonnes pratiques RSE de votre équipe sont peu durables. Elles s'essoufflent à chaque changement de contexte. Que faites-vous ?",
          answers: [
          {text: "J'accepte — le contexte évolue constamment.", score: 0},
          {text: "Je rappelle les pratiques après chaque changement.", score: 1},
          {text: "J'analyse pourquoi elles s'essoufflent et cherche à les ancrer dans des structures plus robustes.", score: 2}
          ]
        },
        {
          text: "Votre équipe a bien avancé sur la RSE mais les nouvelles personnes ne sont pas dans la dynamique. Que faites-vous ?",
          answers: [
          {text: "Je leur laisse le temps de s'intégrer.", score: 0},
          {text: "Je leur présente nos pratiques.", score: 1},
          {text: "J'intègre la sensibilisation RSE dans l'onboarding de façon naturelle et concrète.", score: 2}
          ]
        },
        {
          text: "L'engagement RSE de votre équipe est bon mais peu documenté. Que faites-vous ?",
          answers: [
          {text: "Je laisse les pratiques parler d'elles-mêmes.", score: 0},
          {text: "Je les note informellement.", score: 1},
          {text: "Je cherche à les documenter pour les rendre transmissibles et mesurables.", score: 2}
          ]
        },
        {
          text: "Votre équipe a intégré des pratiques RSE ambitieuses mais qui créent de la friction avec d'autres équipes. Que faites-vous ?",
          answers: [
          {text: "Je maintiens nos pratiques — chacun fait à sa façon.", score: 0},
          {text: "Je cherche un compromis.", score: 1},
          {text: "Je cherche à partager nos pratiques de façon à ce que d'autres puissent s'en inspirer sans se sentir jugés.", score: 2}
          ]
        },
        {
          text: "La direction vous demande un bilan de votre démarche RSE équipe. Que faites-vous ?",
          answers: [
          {text: "Je liste les actions menées.", score: 0},
          {text: "Je présente les actions et leurs retours.", score: 1},
          {text: "Je présente les actions, leurs impacts mesurés et les apprentissages pour la suite.", score: 2}
          ]
        }
    ],
  },

  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("environnement", "RSE — environnement", "🌍", [
    ["sobriete-quotidien",     "Sobriété environnementale au quotidien",            "Tous publics",      "Identifier ses arbitrages concrets sur l'énergie, les déplacements, les achats et les usages.",                              T.environnement],
    ["dechets-ressources",     "Réduire les déchets et préserver les ressources",  "Tous publics",      "Agir sur les petits gestes sans tomber dans l'affichage ou la culpabilisation.",                                            T.envDechets],
    ["achats-responsables",    "Achats et choix responsables",                      "Fonctions support", "Interroger les choix fournisseurs, volumes, usages et impacts dans les décisions courantes.",                               T.envAchatsResponsables],
    ["manager-transition-eco", "Manager la transition environnementale",            "Managers",          "Faire évoluer les pratiques de l'équipe sans injonction ni greenwashing.",                                                  T.envManagerTransition],
    ["numerique-responsable",  "Réduire son empreinte numérique",                  "Tous publics",      "Questionner ses usages numériques, arbitrer présentiel et distanciel, allonger la durée de vie des équipements.",           T.envNumerique],
    ["deplacements-sobriete",  "Déplacements professionnels et sobriété",          "Tous publics",      "Questionner la nécessité des déplacements, choisir les options les moins impactantes et réduire les trajets inutiles.",     T.envDeplacements],
    ["achats-impact",          "Achats responsables et impact fournisseurs",        "Fonctions support", "Questionner le besoin, évaluer les fournisseurs sur leurs critères RSE et réduire la logistique inutile.",                  T.envAchats],
    ["engagement-rse",         "S'engager dans la transition sans se décourager",  "Collaborateurs",    "Situer son propre niveau d'engagement, agir à son niveau et embarquer ses collègues sans culpabiliser.",                   T.envEngagement],
    ["manager-rse-equipe",     "Animer la RSE dans son équipe",                    "Managers",          "Incarner la transition sans surjouer, créer un engagement collectif et arbitrer entre performance et impact.",               T.envManagerRSE]
  ]);

})();
