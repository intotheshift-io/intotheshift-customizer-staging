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
    // ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "manager-signaux-rps" dans Object.assign(window.CUSTOM_QUESTIONS,

  "manager-signaux-rps": {
    0: [
      {
        type: "choix",
        text: "David, habituellement moteur dans les réunions, n'a pratiquement pas pris la parole depuis deux semaines. Il répond aux sollicitations mais ne prend plus d'initiatives. Rien de visible ne s'est passé.",
        tags: ["signaux faibles", "observation"],
        answers: [
          { text: "Je laisse — certaines personnes ont des phases moins actives, c'est normal.", score: 0 },
          { text: "Je lui crée un prétexte professionnel pour échanger en dehors des réunions.", score: 2 },
          { text: "Je lui pose la question directement en réunion pour lui redonner de la place.", score: 0 },
          { text: "J'observe encore une semaine pour voir si c'est une tendance qui se confirme.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "choix",
        text: "Toute votre équipe est sous pression depuis un mois. Sarah semble plus affectée que les autres mais quand vous en parlez à vos pairs managers, ils vous répondent que 'tout le monde est dans le même état'.",
        tags: ["signaux faibles", "normes"],
        answers: [
          { text: "Je m'aligne sur leur lecture — si des managers expérimentés ne s'inquiètent pas, c'est que c'est gérable.", score: 0 },
          { text: "Je reste attentif à Sarah indépendamment de ce que vivent les autres.", score: 2 },
          { text: "J'en parle aux RH pour avoir un avis extérieur.", score: 1 },
          { text: "Je lui allège sa charge sans lui en parler — elle appréciera.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "likert",
        text: "Vous observez le comportement de vos collaborateurs au-delà des livrables — participation, énergie, qualité des échanges — lors de vos interactions quotidiennes.",
        tags: ["signaux faibles", "régularité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "choix",
        text: "Jonathan a pris trois arrêts courts en six semaines. À chaque retour, il dit que tout va bien. Ses livrables sont rendus dans les délais.",
        tags: ["signaux faibles", "absentéisme"],
        answers: [
          { text: "Les livrables sont là — tant que la qualité est au rendez-vous, les absences sont son affaire.", score: 0 },
          { text: "Je fais un entretien de retour à chaque absence, même courte, pour maintenir le contact.", score: 2 },
          { text: "Je note la tendance et j'en parle aux RH si ça continue.", score: 0.5 },
          { text: "Je lui demande discrètement si tout va bien lors d'un prochain échange.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "choix",
        text: "Vous demandez à Amira comment elle va lors de votre point hebdomadaire. Elle répond 'très bien' mais son ton est plat, elle n'a pas souri et elle a raccourci l'entretien. C'est inhabituel.",
        tags: ["signaux faibles", "déni"],
        answers: [
          { text: "Je la crois — si elle dit que ça va, je respecte ça.", score: 0 },
          { text: "Je lui dis ce que j'ai observé dans cet échange et je lui laisse la porte ouverte.", score: 2 },
          { text: "Je lui repose la question différemment lors du prochain point.", score: 1 },
          { text: "J'en parle à un collègue proche d'elle pour avoir un autre éclairage.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites la différence entre une mauvaise journée et un changement qui s'installe dans la durée chez l'un de vos collaborateurs.",
        tags: ["signaux faibles", "discernement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'un déjeuner d'équipe, plusieurs collaborateurs font des blagues sur le fait d'être 'tous à bout'. L'ambiance est légère mais le fond vous interpelle.",
        tags: ["signaux faibles", "collectif"],
        answers: [
          { text: "Je ris avec eux — l'humour est une façon saine de gérer la pression.", score: 0.5 },
          { text: "Je prends note de ce signal collectif et j'en tiens compte dans ma façon de gérer les semaines suivantes.", score: 2 },
          { text: "Je leur dis directement que j'ai entendu ce qu'ils viennent d'exprimer.", score: 1 },
          { text: "Je laisse passer — les blagues ne sont pas des signaux sérieux.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "choix",
        text: "Kevin, qui télétravaille quatre jours par semaine, coupe sa caméra depuis deux semaines et répond aux messages avec deux heures de retard. C'est nouveau.",
        tags: ["signaux faibles", "télétravail"],
        answers: [
          { text: "Je respecte — le télétravail donne de l'autonomie et il n'est pas obligé d'être disponible en permanence.", score: 0 },
          { text: "Je lui propose un appel rapide pour prendre des nouvelles, sans lien avec les livrables.", score: 2 },
          { text: "Je lui rappelle les règles de disponibilité en télétravail.", score: 0 },
          { text: "Je le surveille plus attentivement et j'attends de voir si ça s'améliore.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "likert",
        text: "Face à un signal qui vous interpelle chez un collaborateur, vous créez une occasion d'échange plutôt que d'attendre qu'il vienne à vous.",
        tags: ["signaux faibles", "initiative"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }, 
      {
        type: "choix",
        text: "Rachel, l'une de vos meilleures collaboratrices, a rendu deux livrables en dessous de son niveau habituel ce mois-ci. Elle n'a pas mentionné de difficulté.",
        tags: ["signaux faibles", "performance"],
        answers: [
          { text: "Je lui signale les livrables insuffisants lors de notre prochain point — c'est mon rôle.", score: 0.5 },
          { text: "Je lui parle des livrables ET je lui pose une question ouverte sur comment elle vit sa charge en ce moment.", score: 2 },
          { text: "Je lui signale les livrables et j'attends sa réaction pour voir si elle ouvre un autre sujet.", score: 1 },
          { text: "Je laisse passer — tout le monde a des mois moins bons.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que les signaux soient évidents avant d'intervenir", desc: "Attendre que le collaborateur vienne vous voir, observer sans créer d'occasion d'échange, s'aligner sur l'avis de vos pairs si personne d'autre ne s'inquiète : ces comportements laissent des situations se dégrader silencieusement. La détection précoce ne repose pas sur une formation spécialisée — elle repose sur la régularité des échanges et sur la capacité à creuser quand quelque chose ne cadre pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux nets, les changements discrets vous échappent encore parfois", desc: "Vous intervenez quand les signaux sont visibles et vous faites des points réguliers. Mais les changements plus discrets — un 'je gère' dont le ton ne correspond pas, une légère mise à distance dans les échanges — ne déclenchent pas encore une réaction systématique. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les occasions pour que les signaux remontent et vous intervenez tôt", desc: "Vous ne vous contentez pas d'observer — vous créez des occasions d'échange régulières, vous creusez quand quelque chose ne cadre pas, vous intervenez sur les tensions collectives avant qu'elles ne s'aggravent. Cette posture proactive de détection précoce est ce qui permet de traiter les situations quand elles sont encore simples." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous voulez parler à Baptiste de ce que vous observez depuis trois semaines. Vous ne savez pas si c'est lié au travail ou à quelque chose de personnel, et vous avez peur d'être maladroit·e.",
        tags: ["intervention", "factuel"],
        answers: [
          { text: "Je renonce — sans savoir d'où vient le problème, je risque de dire quelque chose de blessant.", score: 0 },
          { text: "Je m'appuie uniquement sur ce que j'observe dans le travail et je laisse Baptiste décider d'aller plus loin.", score: 2 },
          { text: "Je lui demande directement si quelque chose ne va pas dans sa vie personnelle.", score: 0 },
          { text: "Je lui pose une question ouverte sur sa charge pour voir s'il ouvre un autre sujet.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous intervenez sur une situation difficile, vous vous appuyez sur des comportements observés dans le travail — pas sur votre lecture de l'état émotionnel de la personne.",
        tags: ["intervention", "travail"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'un point individuel, Élodie commence à vous parler de quelque chose de difficile dans sa vie personnelle. Vous avez 15 minutes devant vous.",
        tags: ["intervention", "écoute"],
        answers: [
          { text: "Je l'écoute jusqu'au bout et je lui donne des conseils sur sa situation.", score: 0 },
          { text: "Je l'écoute, je lui pose quelques questions sur l'impact sur son travail, et je lui propose un vrai moment dédié.", score: 2 },
          { text: "Je lui dis gentiment que ça dépasse mon rôle et je lui donne les coordonnées du service d'écoute.", score: 0.5 },
          { text: "Je l'écoute en silence et je lui demande ce dont elle a besoin de ma part.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Après votre échange avec Rayan, vous pensez comprendre ce dont il souffre. L'envie de le lui nommer est forte.",
        tags: ["intervention", "diagnostic"],
        answers: [
          { text: "Je lui dis ce que je vois — il appréciera que je mette des mots dessus.", score: 0 },
          { text: "Je lui décris ce que j'ai observé et je lui pose une question — le diagnostic, c'est son affaire et celle de professionnels.", score: 2 },
          { text: "Je pose des questions pour l'amener lui-même à formuler ce qui se passe.", score: 1.5 },
          { text: "Je garde mon analyse pour moi et j'agis sur ce que je peux faire concrètement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "likert",
        text: "Vous savez où s'arrête votre rôle — vous intervenez sur le travail et vous orientez pour le reste, sans vous substituer à des professionnels.",
        tags: ["intervention", "périmètre"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez entamé un échange avec Marie sur ce que vous observez. Elle répond sur la défensive et dit que vous exagérez. L'entretien tourne court.",
        tags: ["intervention", "résistance"],
        answers: [
          { text: "Je m'aligne sur sa version — si elle dit que ça va, c'est probablement le cas.", score: 0 },
          { text: "Je ne renonce pas mais je change d'angle — je lui dis que ma porte reste ouverte et je reviendrai vers elle.", score: 2 },
          { text: "J'escalade aux RH — si elle ne veut pas parler, je dois me couvrir.", score: 0 },
          { text: "Je lui donne du temps et je reviens vers elle deux semaines plus tard.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez prévu de parler à Ibrahim de ce que vous observez. Juste avant l'entretien, un dossier urgent arrive sur lequel il a une responsabilité.",
        tags: ["intervention", "timing"],
        answers: [
          { text: "Je commence par le dossier urgent — c'est la priorité du moment.", score: 0 },
          { text: "Je sépare les deux : l'entretien de soutien aujourd'hui, le dossier dans un échange dédié.", score: 2 },
          { text: "J'aborde les deux dans le même entretien — ça fait gagner du temps.", score: 0 },
          { text: "Je reporte l'entretien de soutien — ce n'est plus le bon moment.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'un entretien, Pierre vous confie quelque chose de difficile. Il ne vous a pas demandé de garder ça pour vous mais ne vous a pas dit non plus que vous pouviez en parler.",
        tags: ["intervention", "confidentialité"],
        answers: [
          { text: "Je le partage avec les RH — ils doivent être au courant.", score: 0 },
          { text: "Je lui demande explicitement ce qu'il souhaite que je fasse avec ce qu'il m'a dit.", score: 2 },
          { text: "Je garde ça pour moi et j'agis discrètement.", score: 1 },
          { text: "Je le mentionne à ma propre hiérarchie au cas où c'est nécessaire.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne mélangez pas les entretiens de soutien avec les entretiens de performance — vous traitez ces sujets séparément.",
        tags: ["intervention", "séparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Julien revient après cinq jours d'arrêt maladie. C'est son premier arrêt depuis deux ans. Vous n'avez rien préparé.",
        tags: ["intervention", "entretien retour"],
        answers: [
          { text: "Je l'accueille normalement — faire un entretien de retour pour cinq jours d'absence serait disproportionné.", score: 0 },
          { text: "Je prends 15 minutes avec lui pour prendre des nouvelles et voir si quelque chose a changé côté travail.", score: 2 },
          { text: "Je lui demande informellement si tout va bien lors de notre prochain croisement.", score: 1 },
          { text: "J'attends de voir si ça se reproduit avant de m'en préoccuper.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur de dépasser votre rôle ou d'être maladroit·e", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, nommer ce qu'on pense que la personne ressent : ces comportements bloquent l'intervention ou la rendent contre-productive. Intervenir sur des faits de travail observés, laisser la personne interpréter, séparer les entretiens : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez sur les faits observés dans les situations claires. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, un entretien qui tourne court parce que le collaborateur se ferme — votre réaction peut encore se bloquer. L'enjeu est de simplifier : faits observés, question ouverte, disponibilité affichée." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur les faits, vous laissez la personne interpréter et vous séparez les sujets", desc: "Vous vous appuyez sur des comportements observés dans le travail, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — sobre, factuelle, respectueuse du périmètre — est efficace dans la grande majorité des situations." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Sophie traverse visiblement quelque chose de difficile. Vous avez eu plusieurs échanges. Vous pensez que ça dépasse votre rôle de manager. Elle ne vous a rien demandé de concret.",
        tags: ["orientation", "moment"],
        answers: [
          { text: "J'attends qu'elle me le demande — sans sollicitation de sa part, je n'ai pas de légitimité.", score: 0 },
          { text: "Je lui parle de ce que j'observe et je lui mentionne les ressources disponibles, sans l'y obliger.", score: 2 },
          { text: "Je contacte directement les RH pour les mettre en alerte.", score: 0.5 },
          { text: "Je lui pose la question directement — 'est-ce que tu penses à consulter quelqu'un ?'", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "likert",
        text: "Vous connaissez les ressources disponibles dans votre organisation — médecine du travail, service d'écoute, RH — et vous sauriez les présenter concrètement à un collaborateur.",
        tags: ["orientation", "ressources"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez suggéré à Lucas de contacter la médecine du travail. Il refuse — 'ça ne sert à rien, de toute façon'. La situation continue de se dégrader.",
        tags: ["orientation", "refus"],
        answers: [
          { text: "Je respecte son refus — il est adulte et c'est son choix.", score: 0.5 },
          { text: "Je lui explique concrètement ce que la médecine du travail peut faire pour lui et ce que ça implique.", score: 2 },
          { text: "Je le signale aux RH pour me couvrir.", score: 0 },
          { text: "Je lui laisse du temps et je reviens sur le sujet dans deux semaines.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "choix",
        text: "Il y a trois semaines, vous avez orienté Yasmine vers le service d'écoute. Elle ne vous a pas dit si elle y était allée. Vous n'avez pas relancé.",
        tags: ["orientation", "suivi"],
        answers: [
          { text: "Je la laisse gérer — si je repose la question, je risque d'être intrusif·ve.", score: 0 },
          { text: "Je lui demande comment elle va depuis notre dernier échange, sans mentionner le service d'écoute.", score: 2 },
          { text: "Je contacte le service d'écoute pour vérifier si elle a appelé.", score: 0 },
          { text: "J'attends notre prochain point individuel pour aborder le sujet.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "likert",
        text: "Vous orientez vers les relais au bon moment — ni trop tôt pour vous défausser, ni trop tard parce que vous avez voulu tout gérer seul·e.",
        tags: ["orientation", "dosage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'un entretien, Mehdi dit quelque chose qui vous inquiète sérieusement pour lui. Vous ne savez pas si c'est une situation d'urgence ou une expression de mal-être.",
        tags: ["orientation", "urgence"],
        answers: [
          { text: "Je minimise — il a l'air de gérer et je ne veux pas dramatiser.", score: 0 },
          { text: "Je lui pose des questions directes pour évaluer la situation et je l'oriente immédiatement si nécessaire.", score: 2 },
          { text: "Je contacte les RH après l'entretien pour leur signaler.", score: 1 },
          { text: "Je lui donne les coordonnées du service d'écoute à la fin de l'entretien.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez signalé une situation préoccupante à votre propre responsable. Il vous dit de 'continuer à gérer' sans vous donner de directive claire.",
        tags: ["orientation", "hiérarchie"],
        answers: [
          { text: "Je m'en remets à lui — s'il ne bouge pas, c'est qu'il estime que ce n'est pas si grave.", score: 0 },
          { text: "Je lui demande ce que 'continuer à gérer' signifie concrètement et quels relais je peux activer.", score: 2 },
          { text: "Je contacte les RH directement sans en reparler à mon responsable.", score: 0.5 },
          { text: "Je continue à gérer seul·e et je documente pour me protéger.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "choix",
        text: "Vous suivez verbalement plusieurs situations difficiles dans votre équipe. Vous n'avez rien écrit nulle part.",
        tags: ["orientation", "traçabilité"],
        answers: [
          { text: "La traçabilité écrite, c'est bureaucratique — je préfère le contact direct.", score: 0 },
          { text: "Je note les points essentiels de mes échanges — dates, faits observés, ce que j'ai dit, ce qui a été décidé.", score: 2 },
          { text: "Je note uniquement les situations qui me semblent sérieuses.", score: 1 },
          { text: "J'en parle verbalement aux RH pour qu'ils aient une trace de leur côté.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "likert",
        text: "Vous gardez une trace des échanges importants avec vos collaborateurs en difficulté — dates, faits, décisions — pour ne pas perdre le fil.",
        tags: ["orientation", "traçabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }, 
      {
        type: "choix",
        text: "Vous gérez seul·e depuis plusieurs semaines une situation complexe dans votre équipe. Vous n'en avez parlé à personne par discrétion envers votre collaborateur.",
        tags: ["orientation", "limite"],
        answers: [
          { text: "Je continue — ma discrétion est une marque de respect envers lui.", score: 0 },
          { text: "Je remonte la situation à ma hiérarchie ou aux RH — protéger ma discrétion ne doit pas se faire à mon détriment.", score: 2 },
          { text: "J'en parle à un pair manager en anonymisant la situation.", score: 1.5 },
          { text: "Je cherche un soutien externe — supervision, coach — pour ne pas rester seul·e.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous orientez tard et vous gérez souvent seul·e des situations qui gagneraient à être partagées", desc: "Attendre que la demande soit explicite avant d'orienter, ne pas faire de suivi après une orientation, gérer seul·e par discrétion envers le collaborateur : ces comportements laissent des personnes sans les ressources adaptées et épuisent le manager. Orienter est une compétence managériale — pas un aveu que vous ne savez pas faire votre travail." },
          moyen: { label: "Pratiques en développement", titre: "Vous orientez quand c'est évident mais le suivi et votre propre soutien restent insuffisants", desc: "Vous orientez quand la situation est clairement au-delà de votre périmètre. Mais le suivi après l'orientation, la relance quand le collaborateur résiste, et surtout votre propre soutien quand vous portez trop — sont encore insuffisants. L'enjeu est de traiter l'orientation comme un processus avec un début, un suivi et une fin." },
          haut: { label: "Réflexes installés", titre: "Vous orientez au bon moment, vous faites un suivi et vous cherchez vous-même un soutien", desc: "Vous orientez avant la crise, vous faites un suivi après l'orientation, vous relancez quand le collaborateur résiste, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de gérer les situations difficiles comme un processus — avec un début, un suivi et une fin — protège à la fois vos collaborateurs et vous-même." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous savez que la prochaine période sera intense pour votre équipe. Personne n'a encore signalé de difficulté mais vous anticipez une surcharge réelle dans six semaines.",
        tags: ["prévention", "organisation"],
        answers: [
          { text: "J'attends de voir — inutile d'inquiéter l'équipe pour quelque chose qui n'est pas encore là.", score: 0 },
          { text: "Je prépare maintenant les conditions pour que la période soit tenable — charge, priorités, soutien.", score: 2 },
          { text: "J'en parle à mon équipe pour qu'elle s'organise.", score: 1 },
          { text: "J'en parle à ma hiérarchie pour voir si la charge peut être allégée.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "likert",
        text: "Vous intervenez sur les conditions de travail de votre équipe avant que les situations difficiles apparaissent, pas seulement quand elles sont déclarées.",
        tags: ["prévention", "anticipation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, les périmètres de responsabilité ne sont pas très clairs. Certains collaborateurs font des tâches qui ne sont officiellement à personne. Des tensions silencieuses émergent.",
        tags: ["prévention", "clarté des rôles"],
        answers: [
          { text: "Je laisse — les flous de périmètre se règlent généralement d'eux-mêmes dans le temps.", score: 0 },
          { text: "Je clarifie les rôles et les périmètres pour supprimer les zones de friction.", score: 2 },
          { text: "Je traite les tensions au cas par cas quand elles remontent.", score: 0.5 },
          { text: "J'en parle à mon équipe pour qu'elle s'organise elle-même.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "choix",
        text: "Vos points individuels sont principalement consacrés aux dossiers en cours. La dimension 'comment tu vas' n'a pas vraiment de place.",
        tags: ["prévention", "feedback régulier"],
        answers: [
          { text: "C'est normal — les points individuels sont des moments de travail, pas de développement personnel.", score: 0 },
          { text: "Je réserve systématiquement quelques minutes en début ou fin de point pour cette dimension.", score: 2 },
          { text: "J'aborde le sujet quand j'ai l'impression que quelque chose ne va pas.", score: 1 },
          { text: "Je fais des entretiens dédiés à la dimension 'bien-être' une fois par trimestre.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "likert",
        text: "Vos collaborateurs savent qu'ils peuvent venir vous parler d'une difficulté sans que ça soit interprété comme un manque de performance ou d'engagement.",
        tags: ["prévention", "espace de parole"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "choix",
        text: "Vous distribuez naturellement les nouvelles missions aux collaborateurs les plus fiables et les plus disponibles. Ce sont souvent les mêmes personnes.",
        tags: ["prévention", "charge"],
        answers: [
          { text: "C'est logique — je dois m'appuyer sur ceux qui sont performants.", score: 0 },
          { text: "Je fais attention à ne pas surcharger toujours les mêmes, même si c'est plus efficace à court terme.", score: 2 },
          { text: "Je demande à chacun s'il peut absorber avant d'attribuer.", score: 1.5 },
          { text: "Je compense en valorisant davantage les personnes sollicitées.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "choix",
        text: "Vous travaillez régulièrement le soir et le week-end. Vos collaborateurs le savent parce que vous envoyez des mails tardifs. Vous n'avez jamais demandé à quiconque de faire pareil.",
        tags: ["prévention", "exemplarité"],
        answers: [
          { text: "Je n'ai jamais demandé qu'on me suive — chacun est libre de gérer ses horaires.", score: 0 },
          { text: "Je prends conscience que mes comportements visibles créent une norme implicite et j'ajuste.", score: 2 },
          { text: "Je programme l'envoi de mes mails pour qu'ils partent aux horaires de bureau.", score: 1.5 },
          { text: "J'envoie un message pour dire explicitement que je n'attends pas de réponse en dehors des heures de travail.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ajustez l'organisation de votre équipe quand vous détectez des signaux de tension collective — avant que des collaborateurs vous sollicitent formellement.",
        tags: ["prévention", "signaux collectifs"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau collaborateur rejoint votre équipe dans un contexte de forte charge. Vous n'avez pas le temps de l'accompagner comme vous le souhaiteriez.",
        tags: ["prévention", "nouveau"],
        answers: [
          { text: "Je lui confie un référent dans l'équipe et je fais confiance au collectif.", score: 1 },
          { text: "Je dégage du temps pour les moments clés de son intégration même si ça me coûte ailleurs.", score: 2 },
          { text: "Je l'intègre progressivement en lui donnant moins de charge au départ.", score: 1.5 },
          { text: "Je l'intègre au même rythme que les autres — la surprotection n'aide pas.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }, 
      {
        type: "choix",
        text: "Vous portez depuis plusieurs semaines une équipe sous pression, des situations individuelles difficiles et une charge managériale élevée. Vous ne l'avez signalé à personne.",
        tags: ["prévention", "propre état"],
        answers: [
          { text: "Je gère — les managers ne peuvent pas se plaindre de leur charge devant leur équipe ou leur direction.", score: 0 },
          { text: "Je le remonte à ma propre hiérarchie en rendant visible l'impact sur ma capacité à manager.", score: 2 },
          { text: "J'en parle à un pair manager pour ne pas rester seul·e.", score: 1.5 },
          { text: "J'attends les vacances pour récupérer.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez les situations quand elles arrivent sans agir sur les conditions qui les produisent", desc: "Traiter les tensions quand elles remontent, distribuer les missions toujours aux mêmes, envoyer des mails tardifs sans mesurer l'effet que ça produit : ces comportements créent ou entretiennent les conditions des difficultés que vous gérez ensuite. Agir sur l'organisation est le levier le plus puissant et le moins utilisé en prévention." },
          moyen: { label: "Pratiques en développement", titre: "Vous ajustez l'organisation sur les situations déclarées, la prévention en amont est encore partielle", desc: "Vous ajustez les conditions de travail quand des tensions remontent. Mais la prévention en amont — clarifier les rôles avant que les frictions apparaissent, aménager du temps pour les entretiens individuels avant la surcharge, mesurer l'effet de vos propres comportements — est encore partielle. L'enjeu est d'agir sur les causes avant les symptômes." },
          haut: { label: "Réflexes installés", titre: "Vous agissez sur les conditions de travail en amont, avant que les situations difficiles apparaissent", desc: "Vous clarifiez les rôles avant que les frictions apparaissent, vous aménagez du temps pour les dimensions relationnelles avant d'en avoir besoin, vous mesurez l'effet de vos propres comportements sur l'équipe. Cette capacité à agir sur les causes plutôt que sur les symptômes est ce qui distingue le management préventif du management réactif." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────
  // ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "manager-qvt-rps" dans Object.assign(window.CUSTOM_QUESTIONS,

  "manager-qvt-rps": {
    0: [
      {
        type: "choix",
        text: "Antoine, l'un de vos collaborateurs les plus fiables, rend des livrables en retard depuis trois semaines. C'est inhabituel. Il n'a rien dit.",
        tags: ["signaux", "observation"],
        answers: [
          { text: "J'attends qu'il vienne me voir — s'il avait un problème, il m'en parlerait.", score: 0 },
          { text: "Je lui signale les retards en lui demandant ce qui se passe.", score: 2 },
          { text: "Je lui parle des retards et je lui propose de revoir sa charge si nécessaire.", score: 2 },
          { text: "Je le surveille plus attentivement les prochaines semaines pour voir si ça se confirme.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "choix",
        text: "Depuis deux semaines, le niveau d'irritabilité de votre équipe a visiblement monté — échanges plus secs, moins d'entraide spontanée. Tout le monde est sous pression.",
        tags: ["signaux", "collectif"],
        answers: [
          { text: "C'est une période difficile pour tout le monde — l'ambiance reviendra quand la pression retombera.", score: 0 },
          { text: "J'en parle en réunion d'équipe pour nommer ce que j'observe sans dramatiser.", score: 2 },
          { text: "Je vois individuellement les personnes qui semblent les plus affectées.", score: 1.5 },
          { text: "Je renforce les moments collectifs pour recréer du lien.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites des points individuels réguliers avec chacun de vos collaborateurs, pas seulement sur l'avancement des dossiers mais aussi sur leur façon de vivre la charge.",
        tags: ["signaux", "régularité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "choix",
        text: "Lucie vous dit qu'elle va bien quand vous lui posez la question directement. Mais ses comportements récents — erreurs inhabituelles, moins de participation, arrivées plus tôt et départs plus tard — ne correspondent pas à ce qu'elle dit.",
        tags: ["signaux", "déni"],
        answers: [
          { text: "Je la crois — elle sait mieux que moi comment elle va.", score: 0 },
          { text: "Je lui partage ce que j'observe concrètement, sans interpréter, et je lui laisse l'espace de répondre.", score: 2 },
          { text: "Je lui pose la question différemment lors d'un prochain entretien.", score: 1 },
          { text: "Je demande à un collègue proche d'elle d'avoir un échange informel.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe travaille régulièrement le soir et le week-end depuis deux mois. Personne ne s'en plaint officiellement. Vous trouvez ça normal compte tenu du contexte.",
        tags: ["signaux", "charge collective"],
        answers: [
          { text: "Si personne ne se plaint, c'est que l'équipe assume — je ne dois pas créer un problème qui n'existe pas.", score: 0 },
          { text: "J'aborde le sujet en réunion pour nommer ce que j'observe et voir comment l'équipe le vit.", score: 2 },
          { text: "Je cherche des leviers pour réduire la charge sans que l'équipe ait à me le demander.", score: 1.5 },
          { text: "J'en parle à ma propre hiérarchie pour que la charge soit régulée à un niveau supérieur.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "likert",
        text: "Vous êtes attentif·ve aux changements de comportement de vos collaborateurs — présence, participation, qualité du travail — sans attendre qu'ils vous signalent eux-mêmes un problème.",
        tags: ["signaux", "présence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "choix",
        text: "Deux membres de votre équipe, Mathieu et Sandra, semblent éviter de se parler directement depuis une réunion difficile il y a deux semaines. Les autres ont remarqué.",
        tags: ["signaux", "tension interpersonnelle"],
        answers: [
          { text: "Je les laisse régler ça entre eux — les adultes savent gérer leurs conflits.", score: 0 },
          { text: "Je vois chacun séparément pour comprendre ce qui s'est passé avant de décider quoi faire.", score: 2 },
          { text: "Je les réunis pour qu'ils s'expliquent — mieux vaut crever l'abcès.", score: 0.5 },
          { text: "J'attends encore une semaine — ça peut se résorber seul.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "choix",
        text: "Nicolas a pris quatre jours d'arrêt maladie en deux mois, par courtes périodes. C'est inhabituel pour lui. À son retour, vous ne savez pas quoi dire.",
        tags: ["signaux", "absentéisme"],
        answers: [
          { text: "Je ne dis rien — c'est sa vie privée et je ne veux pas être indiscret.", score: 0 },
          { text: "Je fais un entretien de retour pour prendre des nouvelles et voir si quelque chose a changé côté travail.", score: 2 },
          { text: "Je lui demande si tout va bien de façon informelle, sans faire d'entretien formel.", score: 1 },
          { text: "Je surveille si ça se reproduit avant d'agir.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "likert",
        text: "Vous repérez les situations de tension ou de surcharge dans votre équipe avant qu'elles ne vous soient signalées formellement.",
        tags: ["signaux", "anticipation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'un point individuel, Isabelle vous dit qu'elle supporte mal la charge en ce moment mais ajoute aussitôt qu'elle 'gère'. Vous n'avez que 10 minutes devant vous.",
        tags: ["signaux", "feedback"],
        answers: [
          { text: "Je prends note et je reprends le sujet lors du prochain point — elle gère pour l'instant.", score: 0.5 },
          { text: "Je lui dis que j'ai entendu ce qu'elle vient de dire et je lui propose un vrai échange dans les prochains jours.", score: 2 },
          { text: "Je lui demande ce que 'gérer' veut dire concrètement avant de passer à autre chose.", score: 1.5 },
          { text: "Je lui fais confiance — si elle dit qu'elle gère, c'est qu'elle gère.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez encore que vos collaborateurs viennent à vous plutôt que de créer les occasions d'observer", desc: "Attendre que les collaborateurs signalent eux-mêmes leurs difficultés, surveiller plutôt qu'intervenir, ne pas creuser quand quelqu'un dit 'je gère' alors que ses comportements disent autre chose : ces postures laissent des situations se dégrader silencieusement. La détection précoce ne vient pas de l'observation passive — elle vient de la régularité des échanges et de la capacité à poser des questions sur ce qu'on observe." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez les signaux évidents mais les changements discrets vous échappent encore", desc: "Vous faites des points individuels réguliers et vous intervenez quand les signaux sont visibles. Mais les changements plus discrets — un collaborateur qui dit 'je gère' alors que ses comportements changent, une tension collective qui s'installe progressivement — ne déclenchent pas encore une réaction systématique de votre part. L'enjeu est d'abaisser votre seuil d'attention sans tomber dans la surveillance." },
          haut: { label: "Réflexes installés", titre: "Vous créez les conditions pour que les signaux remontent, sans attendre qu'ils vous soient signalés", desc: "Vous faites des points réguliers qui vont au-delà des livrables, vous creusez quand quelqu'un dit 'je gère', vous intervenez sur les tensions collectives sans attendre la crise. Cette posture proactive — qui suppose d'observer activement et de créer les occasions d'échange — est ce qui permet de gérer les situations au stade où elles sont encore simples à traiter." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous voulez parler à Charlotte de ce que vous observez depuis quelques semaines. Vous craignez d'être maladroit·e et de dire quelque chose de blessant.",
        tags: ["intervention", "factuel"],
        answers: [
          { text: "Je renonce — mieux vaut ne rien dire que risquer une maladresse.", score: 0 },
          { text: "Je m'appuie sur des faits observables et je lui laisse l'espace d'interpréter elle-même.", score: 2 },
          { text: "Je lui dis directement que je la sens épuisée et que ça m'inquiète.", score: 0.5 },
          { text: "Je lui pose une question ouverte sur son travail pour voir si elle ouvre le sujet.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous intervenez sur une situation difficile dans votre équipe, vous vous appuyez sur des comportements observés plutôt que sur votre interprétation de l'état de la personne.",
        tags: ["intervention", "faits"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Paul traverse visiblement une période difficile. Vous voulez lui parler mais vous ne savez pas si c'est lié au travail ou à sa vie personnelle.",
        tags: ["intervention", "travail"],
        answers: [
          { text: "Je n'interviens pas — si c'est personnel, ce n'est pas mon rôle.", score: 0 },
          { text: "Je lui parle de ce que j'observe sur son travail et je lui laisse la liberté d'aller plus loin s'il le souhaite.", score: 2 },
          { text: "Je lui pose directement la question sur sa vie personnelle — mieux vaut être direct.", score: 0 },
          { text: "J'en parle aux RH pour qu'ils gèrent.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Emma vous confie lors d'un entretien qu'elle a du mal à dormir à cause du travail. Vous avez 20 minutes devant vous.",
        tags: ["intervention", "rythme"],
        answers: [
          { text: "Je l'écoute et je lui donne des conseils sur la gestion du stress.", score: 0 },
          { text: "Je l'écoute, je lui demande ce qui pèse le plus dans son travail, et je lui propose un vrai point la semaine prochaine.", score: 2 },
          { text: "Je l'écoute et je lui dis de consulter son médecin si ça continue.", score: 1 },
          { text: "Je prends note et j'en parle à la médecine du travail sans lui dire.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "likert",
        text: "Vous savez faire la différence entre ce qui relève de votre rôle de manager et ce qui dépasse votre périmètre — sans pour autant vous défausser sur les relais avant d'avoir écouté.",
        tags: ["intervention", "périmètre"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Après un entretien avec Hugo, vous pensez comprendre ce dont il souffre. Vous avez envie de lui nommer ce que vous voyez.",
        tags: ["intervention", "diagnostic"],
        answers: [
          { text: "Je lui dis ce que j'observe et ce que je pense de sa situation — il appréciera ma franchise.", score: 0 },
          { text: "Je lui décris ce que j'ai observé et je lui pose une question ouverte — le diagnostic, c'est son affaire.", score: 2 },
          { text: "Je lui pose des questions pour l'amener lui-même à formuler ce qui se passe.", score: 1.5 },
          { text: "Je garde mon analyse pour moi et j'agis sur ce que je peux faire concrètement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Votre propre responsable vous dit qu'Alice a l'air à bout et vous demande de 'régler ça'. Vous n'avez rien observé de votre côté.",
        tags: ["intervention", "pression hiérarchique"],
        answers: [
          { text: "Je la convoque pour un entretien et je lui dis que ma hiérarchie est inquiète.", score: 0 },
          { text: "Je crée une occasion de lui parler de façon informelle pour prendre la température.", score: 2 },
          { text: "Je lui fais confiance — si elle ne m'a rien dit, c'est qu'elle gère.", score: 0 },
          { text: "J'en parle à mes autres collaborateurs pour comprendre si quelque chose m'échappe.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez prévu de parler à Adrien de ce que vous observez chez lui. Juste avant votre entretien, vous apprenez qu'un dossier important est en retard à cause de lui.",
        tags: ["intervention", "timing"],
        answers: [
          { text: "Je commence par le dossier en retard — c'est la priorité opérationnelle.", score: 0 },
          { text: "Je sépare les deux sujets — le dossier dans un échange dédié, l'entretien de soutien dans un autre moment.", score: 2 },
          { text: "J'aborde les deux dans le même entretien — c'est peut-être lié.", score: 0.5 },
          { text: "Je reporte l'entretien de soutien — ce n'est plus le bon moment.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "likert",
        text: "Vous séparez les entretiens de performance des entretiens de soutien — vous n'abordez pas la situation personnelle d'un collaborateur en même temps que ses résultats.",
        tags: ["intervention", "séparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }, 
      {
        type: "choix",
        text: "Julie vous a confié quelque chose de difficile lors d'un entretien individuel. Elle ne vous a pas demandé de le garder pour vous mais n'a pas non plus dit que vous pouviez en parler.",
        tags: ["intervention", "confidentialité"],
        answers: [
          { text: "Je le partage avec les RH — ils doivent être informés.", score: 0 },
          { text: "Je lui demande ce qu'elle souhaite que je fasse avec ce qu'elle m'a dit.", score: 2 },
          { text: "Je garde ça pour moi et j'agis discrètement.", score: 1 },
          { text: "Je le mentionne à ma propre hiérarchie au cas où c'est nécessaire.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à intervenir par peur d'être maladroit·e ou de dépasser votre rôle", desc: "Ne pas intervenir par peur d'être maladroit·e, mélanger soutien et performance dans le même entretien, faire un diagnostic à la place de la personne : ces comportements soit bloquent l'intervention, soit la rendent contre-productive. Intervenir sur les faits observés, laisser la personne interpréter elle-même, séparer les sujets : c'est à la portée de tout manager sans formation spécialisée." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez dans les situations claires mais vous hésitez encore dans les zones grises", desc: "Vous intervenez quand la situation est claire. Mais dans les zones grises — ne pas savoir si c'est personnel ou professionnel, craindre d'être maladroit·e, hésiter sur le bon moment — votre intervention peut encore se bloquer ou se mélanger avec un sujet de performance. L'enjeu est de simplifier votre façon d'intervenir : faits observés, question ouverte, disponibilité." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez de façon factuelle et calibrée, en séparant les sujets et en laissant la personne interpréter", desc: "Vous vous appuyez sur des faits observés, vous posez des questions ouvertes, vous séparez les entretiens de soutien des entretiens de performance, et vous ne faites pas le diagnostic à la place de la personne. Cette façon d'intervenir — simple, factuelle, sans psychologiser — est accessible à tout manager et efficace dans la grande majorité des situations." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Votre équipe est en surcharge depuis six semaines. Vous avez identifié des tâches à enlever de la charge collective, mais elles ont été demandées par votre propre hiérarchie.",
        tags: ["charge collective", "arbitrage"],
        answers: [
          { text: "Je ne touche pas aux demandes hiérarchiques — ma marge de manœuvre s'arrête là.", score: 0 },
          { text: "Je remonte la situation à ma hiérarchie en rendant visible le lien entre leurs demandes et la charge de mon équipe.", score: 2 },
          { text: "Je réduis discrètement certaines de ces tâches sans en parler — je gère ma propre équipe.", score: 0.5 },
          { text: "Je demande à mon équipe de prioriser elles-mêmes entre les demandes hiérarchiques.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous rendez visible à votre propre hiérarchie l'impact de ses demandes sur la charge de votre équipe, plutôt que de l'absorber silencieusement.",
        tags: ["charge collective", "visibilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, Vincent absorbe systématiquement plus que les autres parce qu'il est plus rapide et ne refuse jamais. Les autres le savent et n'interviennent pas.",
        tags: ["charge collective", "répartition"],
        answers: [
          { text: "C'est sa façon de fonctionner — tant qu'il ne se plaint pas, je respecte son choix.", score: 0 },
          { text: "Je rééquilibre la distribution des tâches proactivement, sans attendre qu'il soulève le problème.", score: 2 },
          { text: "Je lui en parle pour lui demander s'il veut que les choses changent.", score: 1.5 },
          { text: "Je sensibilise l'équipe à la répartition, sans cibler Vincent.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "choix",
        text: "Un client important exerce une pression pour livrer plus vite. Votre équipe est déjà au maximum. Votre responsable vous demande de 'trouver une solution'.",
        tags: ["charge collective", "délai"],
        answers: [
          { text: "Je répercute la pression sur mon équipe — c'est à eux de s'organiser pour tenir.", score: 0 },
          { text: "Je remonte à ma hiérarchie ce que signifie concrètement 'trouver une solution' pour mon équipe.", score: 2 },
          { text: "Je négocie le délai avec le client sans en parler à mon équipe.", score: 0.5 },
          { text: "Je cherche avec mon équipe ce qu'il est réellement possible de faire.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous protégez votre équipe des demandes qui ne sont pas compatibles avec sa charge réelle, plutôt que de tout accepter en laissant l'équipe absorber.",
        tags: ["charge collective", "protection"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe passe beaucoup de temps en réunions internes qui semblent peu utiles. La charge de travail réel ne diminue pas pour autant.",
        tags: ["charge collective", "organisation"],
        answers: [
          { text: "Les réunions font partie du travail — elles ne s'enlèvent pas facilement.", score: 0 },
          { text: "Je revois le format et la fréquence des réunions pour libérer du temps de fond.", score: 2 },
          { text: "Je demande à chacun de noter le temps passé en réunion cette semaine pour objectiver.", score: 1 },
          { text: "J'en parle à mon équipe pour qu'elle propose elle-même des améliorations.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "choix",
        text: "Anne vous signale qu'elle ne peut plus tenir son rythme. Elle vous demande une réduction de charge. Vous n'avez pas les marges pour le faire sans impacter les autres.",
        tags: ["charge collective", "signalement"],
        answers: [
          { text: "Je lui dis que ce n'est pas possible pour l'instant — tout le monde est dans la même situation.", score: 0 },
          { text: "On identifie ensemble ce qui pèse le plus et on cherche des solutions réalisables — même imparfaites.", score: 2 },
          { text: "Je remonte la situation à ma hiérarchie pour qu'elle arbitre.", score: 1 },
          { text: "Je lui propose de prendre des congés pour récupérer.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous intervenez sur les surcharges individuelles avant qu'elles ne deviennent des situations de crise visibles de toute l'équipe.",
        tags: ["charge collective", "régulation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous êtes vous-même en surcharge depuis trois semaines. Vous le savez mais vous ne l'avez signalé à personne.",
        tags: ["charge collective", "exemplarité"],
        answers: [
          { text: "Je gère — les managers ne peuvent pas se plaindre de leur charge devant leur équipe.", score: 0 },
          { text: "Je le remonte à ma propre hiérarchie en rendant visible l'impact sur ma capacité à manager.", score: 2 },
          { text: "J'en parle à un pair manager pour valider mon ressenti avant d'agir.", score: 1 },
          { text: "Je redouble d'efficacité pour absorber sans que ça se voie.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a trop de projets en cours simultanément. Chacun est prioritaire selon la source qui le demande. Personne ne veut trancher.",
        tags: ["charge collective", "priorisation"],
        answers: [
          { text: "Je laisse chacun gérer ses propres priorités — je ne veux pas créer de hiérarchie artificielle.", score: 0 },
          { text: "Je prends la décision de priorisation moi-même et j'assume la responsabilité de ce choix.", score: 2 },
          { text: "Je réunis les demandeurs pour qu'ils s'alignent entre eux.", score: 1.5 },
          { text: "Je remonte à ma hiérarchie pour qu'elle arbitre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous absorbez les demandes extérieures sans les filtrer, laissant l'équipe subir la charge", desc: "Répercuter la pression hiérarchique sur l'équipe, laisser une personne absorber systématiquement plus que les autres, accepter toutes les demandes extérieures sans les arbitrer : ces comportements protègent la relation vers le haut mais fragilisent l'équipe. Le rôle de manager inclut de rendre visible la charge réelle et de filtrer ce qui arrive à son équipe." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre équipe des surcharges visibles mais les mécanismes profonds restent en place", desc: "Vous défendez votre équipe dans les situations de surcharge visibles. Mais les mécanismes profonds — une personne qui absorbe systématiquement plus, des réunions qui consomment du temps de fond, une pression hiérarchique que vous n'escaladez pas — restent en place. L'enjeu est d'intervenir sur ces mécanismes avant qu'ils créent des situations de crise." },
          haut: { label: "Réflexes installés", titre: "Vous filtrez et arbitrez la charge de votre équipe en la rendant visible à votre hiérarchie", desc: "Vous arbitrez ce qui arrive à votre équipe, vous rééquilibrez proactivement les charges déséquilibrées, et vous escaladez à votre hiérarchie quand ses demandes ne sont pas compatibles avec la capacité de votre équipe. Cette posture de filtrage actif — qui suppose de tenir des positions inconfortables vers le haut — est ce qui protège durablement les équipes des surcharges structurelles." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous pensez que Diane traverse quelque chose qui dépasse votre rôle de manager. Elle n'a rien demandé.",
        tags: ["relais", "décision"],
        answers: [
          { text: "Je ne fais rien — sans demande de sa part, je n'ai pas de légitimité à intervenir.", score: 0 },
          { text: "Je lui parle de ce que j'observe et je lui mentionne les ressources disponibles dans l'organisation.", score: 2 },
          { text: "Je contacte directement les RH ou la médecine du travail pour les mettre en alerte.", score: 0.5 },
          { text: "Je lui demande directement si elle a besoin d'aide professionnelle.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "likert",
        text: "Vous connaissez les ressources disponibles dans votre organisation pour accompagner vos collaborateurs — médecine du travail, service d'écoute, RH, dispositifs spécifiques.",
        tags: ["relais", "ressources"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "choix",
        text: "Alexis a évoqué lors d'un entretien des difficultés personnelles graves qui semblent affecter son travail. Vous ne savez pas comment gérer ça.",
        tags: ["relais", "RH"],
        answers: [
          { text: "Je l'écoute et je lui dis que ce n'est pas du ressort professionnel — je ne peux pas l'aider sur ça.", score: 0 },
          { text: "Je l'écoute, je lui pose des questions sur l'impact sur son travail, et je lui parle des ressources disponibles.", score: 2 },
          { text: "Je contacte immédiatement les RH pour leur passer le relais.", score: 0.5 },
          { text: "Je lui donne les coordonnées du service d'écoute sans plus m'impliquer.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "choix",
        text: "Margot accumule des signaux préoccupants depuis un mois. Vous avez eu plusieurs entretiens. Elle refuse d'aller voir la médecine du travail — 'ça ne sert à rien'.",
        tags: ["relais", "médecine du travail"],
        answers: [
          { text: "Je respecte son refus — je ne peux pas l'obliger.", score: 0.5 },
          { text: "Je lui explique à nouveau ce que la médecine du travail peut faire concrètement pour elle.", score: 2 },
          { text: "Je le signale aux RH sans lui dire — pour me couvrir.", score: 0 },
          { text: "Je lui demande ce qui la retient et j'essaie de lever ses résistances.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "likert",
        text: "Vous orientez vers les relais professionnels au bon moment — ni trop tôt en vous défaussant, ni trop tard en gardant tout pour vous.",
        tags: ["relais", "dosage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez orienté François vers la médecine du travail il y a deux semaines. Il ne vous a pas dit s'il y était allé. Vous n'avez pas relancé.",
        tags: ["relais", "suivi"],
        answers: [
          { text: "Je le laisse gérer — si je repose la question, je risque d'être intrusif.", score: 0 },
          { text: "Je lui demande de façon naturelle comment il va depuis notre dernier échange.", score: 2 },
          { text: "Je contacte la médecine du travail pour vérifier s'il a pris rendez-vous.", score: 0 },
          { text: "J'attends la prochaine occasion d'un point individuel pour relancer.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "choix",
        text: "Vous portez seul·e depuis plusieurs semaines la gestion de situations difficiles dans votre équipe. Vous vous sentez vous-même épuisé·e par cela.",
        tags: ["relais", "propre état"],
        answers: [
          { text: "C'est mon rôle de manager — je dois tenir.", score: 0 },
          { text: "J'en parle à ma propre hiérarchie ou à un pair manager pour ne pas rester seul·e.", score: 2 },
          { text: "Je cherche un soutien extérieur — supervision, coaching — pour m'aider à tenir.", score: 1.5 },
          { text: "Je gère à court terme et je me repose sur les vacances pour récupérer.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "likert",
        text: "Vous cherchez vous-même un soutien quand la gestion des situations difficiles de votre équipe vous pèse, sans attendre d'être à bout.",
        tags: ["relais", "soutien propre"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'un entretien, Hélène dit quelque chose qui vous inquiète sérieusement pour elle. Vous ne savez pas si c'est une situation d'urgence ou une expression de mal-être.",
        tags: ["relais", "urgence"],
        answers: [
          { text: "Je minimise — elle a l'air de gérer et je ne veux pas dramatiser.", score: 0 },
          { text: "Je lui pose des questions directes pour évaluer la situation et je l'oriente immédiatement si nécessaire.", score: 2 },
          { text: "Je contacte les RH après l'entretien pour leur signaler.", score: 1 },
          { text: "Je lui demande si elle va bien et je lui donne les coordonnées du service d'écoute.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }, 
      {
        type: "likert",
        text: "Vous tracez les échanges importants avec vos collaborateurs en difficulté pour ne pas perdre le fil et pouvoir rendre compte si nécessaire.",
        tags: ["relais", "traçabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gardez les situations difficiles pour vous sans mobiliser les relais disponibles", desc: "Gérer seul·e des situations qui dépassent votre périmètre, ne pas savoir quand orienter, ne pas vous-même chercher de soutien quand vous portez trop : ces comportements épuisent les managers et laissent les collaborateurs sans les ressources adaptées. Connaître les relais disponibles et les utiliser au bon moment est une compétence managériale, pas un aveu de limite." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les relais mais vous tardez encore à les mobiliser ou à vous en servir vous-même", desc: "Vous connaissez les relais et vous les mobilisez quand la situation est clairement au-delà de votre périmètre. Mais dans les zones intermédiaires — la personne qui refuse d'y aller, le suivi après l'orientation, votre propre épuisement à porter les situations difficiles — votre réaction peut encore être insuffisante. L'enjeu est d'utiliser les relais plus tôt et pour vous-même aussi." },
          haut: { label: "Réflexes installés", titre: "Vous mobilisez les relais au bon moment et vous vous appuyez vous-même sur un soutien", desc: "Vous orientez vers les relais avant que les situations ne soient en crise, vous faites un suivi après l'orientation, et vous cherchez vous-même un soutien quand vous portez trop. Cette façon de traiter votre propre état comme une ressource à préserver est ce qui permet de manager dans la durée sans s'épuiser." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────
// ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "charge-priorites" dans Object.assign(window.CUSTOM_QUESTIONS, {

  "charge-priorites": {
    // ── Chapitre 1 : Réguler les urgences
    0: [
      {
        type: "choix",
        text: "Trois demandes arrivent en même matinée, toutes présentées comme urgentes — de David, de Sarah et de votre responsable. Vous ne pouvez pas tout traiter avant midi.",
        tags: ["urgence", "priorisation"],
        answers: [
          { text: "Je commence par la demande de mon responsable, c'est la plus risquée à laisser attendre.", score: 0 },
          { text: "Je contacte chacun pour comprendre ce qui est vraiment bloquant avant de m'organiser.", score: 2 },
          { text: "Je travaille dans l'ordre d'arrivée — c'est la seule façon d'être équitable.", score: 0.5 },
          { text: "Je préviens les trois que je ferai ce que je peux dans la journée.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites la différence entre ce qui est urgent pour les autres et ce qui l'est vraiment pour l'avancement de votre travail.",
        tags: ["urgence", "discernement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Il est 18h30. Vous n'avez pas terminé ce que vous aviez prévu pour aujourd'hui, et votre agenda de demain est déjà plein. Élodie du service communication vous relance sur un dossier.",
        tags: ["charge", "limites"],
        answers: [
          { text: "Je reste pour finir — un dossier en retard crée toujours plus de problèmes qu'une soirée longue.", score: 0 },
          { text: "Je lui réponds que je traiterai ça demain matin en premier, et je pars.", score: 2 },
          { text: "Je traite rapidement sa demande avant de partir — ça prend dix minutes.", score: 0.5 },
          { text: "Je lui dis que je suis débordé sans préciser quand je pourrai m'en occuper.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a pris l'habitude de traiter toutes les demandes entrantes dans la journée, quelle que soit la charge. Baptiste vient de rejoindre l'équipe et s'étonne que personne ne priorise.",
        tags: ["urgence", "normes de groupe"],
        answers: [
          { text: "Je lui explique que c'est comme ça que ça fonctionne ici — il s'y fera.", score: 0 },
          { text: "Je lui donne raison en privé mais je ne change rien — ce n'est pas à moi de remettre en cause le fonctionnement de l'équipe.", score: 0 },
          { text: "Je profite de sa question pour soulever le sujet en réunion d'équipe.", score: 2 },
          { text: "Je lui explique comment je gère personnellement ma propre charge sans promettre que l'équipe va changer.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Quand votre charge devient difficile à absorber, vous le signalez avant d'être à bout plutôt qu'après.",
        tags: ["charge", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Un projet que vous avez lancé il y a un mois est devenu moins pertinent. L'abandonner permettrait de dégager du temps, mais ça se verrait.",
        tags: ["urgence", "visibilité"],
        answers: [
          { text: "Je le termine quand même — changer de cap en cours de route serait mal perçu.", score: 0 },
          { text: "Je le mets en pause discrètement et je le reprends si quelqu'un me le réclame.", score: 0.5 },
          { text: "J'en parle à mon responsable pour décider ensemble si ça vaut encore la peine de continuer.", score: 2 },
          { text: "Je le délègue à quelqu'un qui a plus de temps — ça ne se perdra pas.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Nathalie, une collègue, absorbe régulièrement plus de travail que les autres parce qu'elle ne sait pas refuser. L'équipe apprécie sa disponibilité mais personne ne le soulève.",
        tags: ["urgence", "charge collective"],
        answers: [
          { text: "C'est à elle de mettre ses propres limites — si elle voulait en parler, elle le ferait.", score: 0 },
          { text: "Je lui propose mon aide ponctuellement sur ce qui touche directement notre collaboration.", score: 1 },
          { text: "Je lui en parle en tête-à-tête pour voir si elle vit ça comme un problème.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il rééquilibre la distribution.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Vous vérifiez régulièrement si la charge de vos collègues proches est tenable, pas seulement la vôtre.",
        tags: ["priorisation", "équipe"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez deux tâches importantes pour aujourd'hui. Un imprévu surgit en milieu de matinée et consomme une heure que vous n'aviez pas prévue. Jonathan, qui travaille avec vous, attend une réponse sur un point bloquant.",
        tags: ["urgence", "décision"],
        answers: [
          { text: "Je réponds à Jonathan rapidement puis je récupère l'heure perdue ce soir.", score: 0 },
          { text: "Je regarde ce qui peut glisser à demain parmi mes deux tâches et je réponds à Jonathan.", score: 2 },
          { text: "Je finis mes deux tâches d'abord — Jonathan peut attendre jusqu'en fin d'après-midi.", score: 1 },
          { text: "Je demande à Jonathan si quelqu'un d'autre peut débloquer son point en attendant.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Vous anticipez les pics de charge plutôt que de les subir au moment où ils arrivent.",
        tags: ["urgence", "anticipation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }
    ],

    // ── Chapitre 2 : Dire non et négocier les délais
    1: [
      {
        type: "choix",
        text: "Votre responsable vous confie un nouveau dossier urgent alors que votre agenda est déjà plein pour les deux prochaines semaines. Elle insiste sur son importance stratégique.",
        tags: ["limites", "hiérarchie"],
        answers: [
          { text: "J'accepte sans rien dire — elle sait mieux que moi ce qui est vraiment prioritaire.", score: 0 },
          { text: "Je lui dis que je ferai au mieux en réorganisant mes priorités.", score: 0.5 },
          { text: "Je lui expose ce que j'ai déjà en cours et je lui demande ce qui peut être décalé.", score: 2 },
          { text: "Je lui dis que c'est impossible — ma charge actuelle ne le permet pas.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "likert",
        text: "Vous exprimez vos contraintes de charge à votre responsable sans attendre d'être en situation de crise.",
        tags: ["limites", "expression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Pierre vous demande un livrable pour vendredi. Vous savez que vous pouvez le faire sérieusement pour lundi, ou le bâcler pour vendredi. Il n'a pas précisé pourquoi vendredi.",
        tags: ["délai", "négociation"],
        answers: [
          { text: "Je livre quelque chose vendredi — un délai, c'est un délai.", score: 0 },
          { text: "Je lui demande si lundi matin lui convient en lui expliquant ce que ça change en termes de qualité.", score: 2 },
          { text: "Je travaille le week-end pour lui livrer quelque chose de correct vendredi.", score: 0 },
          { text: "Je lui envoie une version provisoire vendredi et je complète lundi.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue d'une autre équipe vous sollicite régulièrement en dehors de vos missions officielles. Ses demandes sont légitimes, mais elles empiètent sérieusement sur votre propre charge.",
        tags: ["limites", "pression"],
        answers: [
          { text: "Je continue de l'aider — refuser serait perçu comme un manque d'esprit d'équipe.", score: 0 },
          { text: "J'en parle à mon responsable pour qu'il arbitre officiellement.", score: 1 },
          { text: "Je lui dis que je ne peux plus répondre à ses demandes dans les délais qu'il attend, et je lui propose une alternative.", score: 2 },
          { text: "Je réponds en prenant plus de temps, pour décourager progressivement sans avoir à refuser.", score: 0 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous annoncez un délai, il reflète ce que vous pouvez réellement faire plutôt que ce que vous pensez que l'autre veut entendre.",
        tags: ["délai", "réalisme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, tout le monde dit oui à tout — c'est la culture. Quand Claire a essayé de refuser une mission il y a six mois, ça a mal été perçu. On vous demande quelque chose que vous ne pouvez pas assumer.",
        tags: ["refus", "normes de groupe"],
        answers: [
          { text: "J'accepte — la culture de l'équipe compte et je ne veux pas être celui qui fait des vagues.", score: 0 },
          { text: "J'accepte mais je demande qu'on retire une autre tâche de mon périmètre en échange.", score: 2 },
          { text: "J'accepte en me disant que je gérerai — les autres y arrivent bien.", score: 0 },
          { text: "Je refuse en expliquant ma charge actuelle, même si ça crée un inconfort.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez accepté un délai serré il y a deux semaines. Aujourd'hui, vous réalisez que vous ne pouvez pas tenir. Il reste quatre jours.",
        tags: ["délai", "charge"],
        answers: [
          { text: "Je travaille jour et nuit pour tenir — j'ai donné ma parole.", score: 0 },
          { text: "J'attends le dernier moment pour prévenir — peut-être que je trouverai une solution d'ici là.", score: 0 },
          { text: "Je préviens maintenant en expliquant la situation et en proposant un nouveau délai réaliste.", score: 2 },
          { text: "Je livre ce que j'ai dans les délais, même incomplet, et je complète ensuite.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "likert",
        text: "Vous osez dire non à votre responsable quand une demande est incompatible avec votre charge, en le formulant sur les faits et non sur votre volonté.",
        tags: ["refus", "hiérarchie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Marc vous contacte un vendredi soir à 19h sur votre téléphone personnel pour une question professionnelle non urgente. Ce n'est pas la première fois.",
        tags: ["limites", "relations"],
        answers: [
          { text: "Je réponds — être disponible fait partie de ma relation de travail avec lui.", score: 0 },
          { text: "Je réponds ce soir et je lui dis demain matin que je préfère qu'on garde les échanges pro dans les horaires de travail.", score: 2 },
          { text: "Je lis le message et je réponds lundi — il saura que j'ai vu.", score: 1 },
          { text: "Je ne réponds pas et je fais comme si je n'avais pas vu.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "likert",
        text: "Vous vérifiez votre charge réelle avant d'accepter une nouvelle mission plutôt que d'accepter d'abord et d'évaluer ensuite.",
        tags: ["délai", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }
    ],

    // ── Chapitre 3 : Déléguer et faire confiance
    2: [
      {
        type: "choix",
        text: "Vous déléguez un dossier à Inès, une collaboratrice compétente. Trois jours plus tard, elle ne vous a pas rendu compte spontanément. L'échéance est dans une semaine.",
        tags: ["délégation", "contrôle"],
        answers: [
          { text: "Je reprends le dossier discrètement — mieux vaut ne pas risquer un retard.", score: 0 },
          { text: "Je lui envoie un message pour reprendre le contrôle sur les points clés.", score: 0.5 },
          { text: "Je lui demande où elle en est et ce dont elle a besoin pour avancer.", score: 2 },
          { text: "J'attends qu'elle revienne vers moi — si elle ne le fait pas, c'est qu'elle gère.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous déléguez une tâche, vous laissez à l'autre la liberté de la faire à sa façon sans intervenir dès que vous auriez fait différemment.",
        tags: ["délégation", "lâcher-prise"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Kevin vous rend un travail correct mais que vous auriez fait différemment sur plusieurs points. Le résultat atteint l'objectif fixé.",
        tags: ["délégation", "perfectionnisme"],
        answers: [
          { text: "Je le refais moi-même — si je dois expliquer chaque correction, autant le faire directement.", score: 0 },
          { text: "Je corrige les points essentiels avant de le transmettre, sans lui dire.", score: 0 },
          { text: "Je lui donne un retour précis sur ce qui fonctionne et ce qui pourrait être amélioré la prochaine fois.", score: 2 },
          { text: "Je valide sans commentaire — le résultat est là, c'est l'essentiel.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous dit qu'il préfère que vous gériez vous-même les dossiers importants plutôt que de les passer à votre équipe. Votre charge ne le permet plus.",
        tags: ["délégation", "hiérarchie"],
        answers: [
          { text: "J'obéis — c'est lui qui voit ce qui est important et je ne vais pas contester.", score: 0 },
          { text: "Je délègue quand même discrètement en gardant la main visible sur les livrables.", score: 1 },
          { text: "Je lui explique que ma charge actuelle m'impose de déléguer et je lui propose comment sécuriser la qualité.", score: 2 },
          { text: "Je lui demande quels dossiers précisément il veut que je garde et je délègue le reste.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "likert",
        text: "Vous déléguez aussi pour développer les compétences de vos collègues, pas seulement pour vous décharger.",
        tags: ["délégation", "développement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Rachel, à qui vous avez délégué une mission, a fait une erreur qui va vous coûter du temps à corriger. C'est la première fois que ça arrive.",
        tags: ["délégation", "erreur"],
        answers: [
          { text: "Je récupère toutes ses missions importantes — la confiance se mérite.", score: 0 },
          { text: "Je corrige l'erreur moi-même sans lui en parler pour ne pas la déstabiliser.", score: 0 },
          { text: "Je corrige avec elle en lui expliquant ce qui s'est passé — c'est le meilleur moyen d'éviter que ça se reproduise.", score: 2 },
          { text: "Je lui signale l'erreur et je lui demande de corriger elle-même.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez un dossier complexe à traiter. Quelqu'un dans votre équipe pourrait le prendre, mais lui expliquer ce qu'il faut faire prendrait presque autant de temps que de le faire vous-même.",
        tags: ["délégation", "perfectionnisme"],
        answers: [
          { text: "Je le fais moi-même — la délégation n'est rentable que sur des tâches simples.", score: 0 },
          { text: "Je le délègue quand même — l'investissement initial paie sur les prochaines fois.", score: 2 },
          { text: "Je découpe le dossier et je délègue la partie la plus simple.", score: 1 },
          { text: "Je le fais cette fois, mais je note de former cette personne à ce type de dossier.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous déléguez, vous précisez le résultat attendu et la latitude laissée plutôt que de décrire comment faire.",
        tags: ["délégation", "clarté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Sophie a déjà beaucoup de travail, mais c'est la personne la plus compétente pour une mission que vous devez lui déléguer. Les autres membres de l'équipe pourraient s'en charger avec un peu d'accompagnement.",
        tags: ["délégation", "charge"],
        answers: [
          { text: "Je la donne à Sophie — la qualité prime, et elle saura gérer sa charge.", score: 0 },
          { text: "Je la donne à Sophie en lui demandant si elle peut l'absorber.", score: 1 },
          { text: "Je la confie à quelqu'un de moins expérimenté en prévoyant un accompagnement.", score: 2 },
          { text: "Je la garde moi-même pour ne pas créer de déséquilibre dans l'équipe.", score: 0.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites des points de suivi sur les missions déléguées sans reprendre la main sur la façon dont elles sont menées.",
        tags: ["délégation", "suivi"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }
    ],

    // ── Chapitre 4 : Prioriser sous pression hiérarchique
    3: [
      {
        type: "choix",
        text: "Votre responsable et le directeur commercial vous demandent chacun quelque chose de prioritaire le même jour. Les deux sont convaincus que leur demande est la plus urgente.",
        tags: ["priorisation", "hiérarchie"],
        answers: [
          { text: "Je commence par la demande du directeur commercial — il est plus haut dans la hiérarchie.", score: 0 },
          { text: "Je traite les deux en parallèle en faisant la moitié de chaque — au moins j'avance sur les deux.", score: 0.5 },
          { text: "Je les préviens tous les deux et je leur demande de s'aligner sur la priorité entre eux.", score: 2 },
          { text: "Je choisis selon ce qui me semble le plus urgent et je préviens l'autre que je le traite ensuite.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "likert",
        text: "Face à des injonctions contradictoires de plusieurs responsables, vous cherchez à les faire arbitrer entre eux plutôt qu'à absorber la contradiction seul.",
        tags: ["priorisation", "injonctions contradictoires"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a accumulé du retard. Votre responsable vous demande de 'rattraper' d'ici vendredi en travaillant sur tout simultanément. Vous savez que ça va produire un travail bâclé sur tout.",
        tags: ["priorisation", "pression"],
        answers: [
          { text: "Je m'exécute — c'est lui qui répond de la situation vis-à-vis de la direction.", score: 0 },
          { text: "Je fais de mon mieux sur tout sans le contredire — il verra bien le résultat.", score: 0 },
          { text: "Je lui propose de sélectionner les deux ou trois points les plus critiques et de reporter le reste officiellement.", score: 2 },
          { text: "Je priorise moi-même sans lui en parler et je lui présente le résultat vendredi.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Une réunion de direction est prévue dans deux jours. Tout le monde se concentre sur la présentation à préparer. Un problème client important qui couve depuis une semaine risque de se dégrader si personne ne s'en occupe aujourd'hui.",
        tags: ["priorisation", "court terme"],
        answers: [
          { text: "Je me concentre sur la présentation comme tout le monde — la réunion est prioritaire pour la hiérarchie.", score: 0 },
          { text: "Je m'occupe du problème client en espérant que personne ne remarquera que je n'ai pas avancé sur la présentation.", score: 0.5 },
          { text: "Je signale le problème client à mon responsable et je lui demande comment arbitrer entre les deux.", score: 2 },
          { text: "Je partage le problème client avec un collègue pour qu'il le prenne pendant que je prépare la présentation.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous rendez visibles vos arbitrages de priorité auprès de votre responsable plutôt que de les gérer silencieusement.",
        tags: ["priorisation", "visibilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Depuis trois mois, la charge de votre équipe est structurellement trop élevée. Tout le monde s'en accommode et votre responsable ne semble pas s'en rendre compte.",
        tags: ["priorisation", "charge durable"],
        answers: [
          { text: "On tient — si ça devenait vraiment insoutenable, quelqu'un d'autre le dirait.", score: 0 },
          { text: "Je le signale à mon responsable avec des données concrètes sur la charge réelle de l'équipe.", score: 2 },
          { text: "J'en parle à mes collègues pour voir si eux aussi perçoivent la situation comme moi.", score: 1 },
          { text: "Je cherche des gains d'efficacité pour que l'équipe absorbe mieux la charge.", score: 0.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez choisir entre finir un travail important à 80% correctement ou en commencer deux nouveaux demandés en urgence. Votre responsable ne sait pas que vous avez ce dilemme.",
        tags: ["priorisation", "décision"],
        answers: [
          { text: "Je commence les deux nouveaux — les urgences passent avant les travaux en cours.", score: 0 },
          { text: "Je lui soumets le dilemme avant de décider — c'est lui qui doit arbitrer.", score: 2 },
          { text: "Je finis le premier à 80% puis je commence les deux nouveaux.", score: 1 },
          { text: "Je jongle entre les trois en avançant un peu sur chaque.", score: 0.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous protégez du temps pour les tâches de fond importantes même quand les urgences du moment pourraient les évincer.",
        tags: ["priorisation", "long terme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Un client important insiste pour que son dossier soit traité en priorité. Votre responsable vous dit d'en tenir compte. Deux autres dossiers moins visibles sont pourtant plus urgents objectivement.",
        tags: ["priorisation", "pression client"],
        answers: [
          { text: "Je traite le dossier du client important en premier — mon responsable a tranché.", score: 0 },
          { text: "Je traite les dossiers dans l'ordre objectif sans mentionner à mon responsable ce que j'ai décidé.", score: 0.5 },
          { text: "Je lui explique l'ordre de priorité réel et je lui demande de confirmer ou d'assumer l'arbitrage.", score: 2 },
          { text: "Je traite les trois en parallèle pour que personne ne soit lésé.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "likert",
        text: "Vos priorités du jour correspondent à ce que vous avez annoncé à votre responsable, pas à ce que les demandes du moment ont fini par imposer.",
        tags: ["priorisation", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────

  // ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "cooperation-climat" dans Object.assign(window.CUSTOM_QUESTIONS,

  "cooperation-climat": {
    // ── Chapitre 1 : Désamorcer les irritants du quotidien
    0: [
      {
        type: "choix",
        text: "Depuis plusieurs semaines, Julien envoie systématiquement ses comptes rendus de réunion avec deux jours de retard. Ça vous bloque à chaque fois pour avancer. Vous en avez parlé à un collègue qui vous a dit 'c'est comme ça, Julien a toujours été comme ça.'",
        tags: ["irritant", "quotidien"],
        answers: [
          { text: "Je m'organise différemment pour ne plus dépendre de ses comptes rendus — inutile d'en faire un sujet.", score: 0 },
          { text: "Je l'en informe par mail pour garder une trace, sans attendre de réponse.", score: 0.5 },
          { text: "Je lui en parle directement, en lui montrant concrètement en quoi ça me bloque.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il recadre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "En réunion d'équipe, les échanges dérivent régulièrement sur des discussions de couloir qui n'avancent à rien. Tout le monde s'en plaint après, mais personne ne dit rien pendant. Vous êtes en réunion et ça repart.",
        tags: ["irritant", "normes de groupe"],
        answers: [
          { text: "Je laisse — si l'animateur ne recadre pas, ce n'est pas à moi de le faire.", score: 0 },
          { text: "Je sors mon téléphone en attendant que ça revienne sur le sujet.", score: 0 },
          { text: "Je ramène la réunion au sujet en posant une question sur l'ordre du jour.", score: 2 },
          { text: "J'en parle après la réunion à l'animateur pour qu'il gère mieux la prochaine fois.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "likert",
        text: "Vous abordez les irritants du quotidien avec les personnes concernées plutôt que d'en parler autour de vous sans jamais aller à la source.",
        tags: ["irritant", "dialogue"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "Marie et vous avez eu un désaccord assez vif en réunion la semaine dernière. Depuis, les échanges sont devenus formels et distants. Personne n'a repris le sujet.",
        tags: ["tension", "relations"],
        answers: [
          { text: "Je laisse le temps faire son travail — ça finira par se normaliser.", score: 0 },
          { text: "Je lui envoie un message neutre sur un sujet de travail pour relancer le contact.", score: 1 },
          { text: "Je lui propose un moment informel pour reprendre l'échange, sans agenda précis.", score: 2 },
          { text: "Je me comporte normalement en réunion — si elle veut reprendre le dialogue, elle le fera.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "Pierre monopolise systématiquement la parole lors des points d'équipe. Les autres s'impatientent visiblement mais ne disent rien. Vous trouvez ça contre-productif.",
        tags: ["irritant", "peur du conflit"],
        answers: [
          { text: "Je laisse — ce serait humiliant pour lui de lui faire remarquer devant tout le monde.", score: 0.5 },
          { text: "Je prends la parole dès qu'il s'arrête pour empêcher qu'il reprenne.", score: 0 },
          { text: "Je lui en parle après la réunion, en privé, avec un exemple précis.", score: 2 },
          { text: "J'en parle à l'animateur pour qu'il gère mieux la distribution de la parole.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "likert",
        text: "Vous traitez les petits irritants relationnels tôt, avant qu'ils ne s'accumulent et ne deviennent plus difficiles à aborder.",
        tags: ["irritant", "précocité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "L'ambiance dans votre équipe s'est dégradée progressivement. Tout le monde s'en accommode sans en parler. Votre responsable ne semble pas le percevoir.",
        tags: ["ambiance", "normes de groupe"],
        answers: [
          { text: "Si mon responsable ne voit rien, c'est peut-être que je suis trop sensible à l'atmosphère.", score: 0 },
          { text: "Je compense par ma propre bonne humeur — ça aide toujours un peu.", score: 0.5 },
          { text: "J'en parle à mon responsable en lui donnant des observations concrètes.", score: 2 },
          { text: "J'attends qu'un collègue lève le sujet — je ne veux pas être le seul à faire des vagues.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "Sarah vous fait un retour assez sec sur un livrable devant trois collègues. Le fond est juste, mais le ton vous a heurté·e.",
        tags: ["feedback", "relations"],
        answers: [
          { text: "Je prends le fond et j'ignore le ton — ce serait mesquin d'en faire un sujet.", score: 1 },
          { text: "Je lui réponds sur le fond, factuellement, sans réagir au ton en public.", score: 2 },
          { text: "Je lui dis après la réunion, calmement, que la forme ne m'avait pas convenu.", score: 1.5 },
          { text: "J'encaisse sans rien dire — répondre en public ne ferait qu'aggraver.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "likert",
        text: "Quand quelque chose vous dérange dans une relation de travail, vous le dites à la personne concernée plutôt qu'à ses voisins de bureau.",
        tags: ["irritant", "courage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "Karim oublie régulièrement de vous inclure dans les mails de synthèse alors que vous êtes directement concerné·e. Vous le lui avez déjà signalé une fois, il y a trois semaines. Ça recommence.",
        tags: ["irritant", "répétition"],
        answers: [
          { text: "Je l'ajoute moi-même en copie à chaque fois — c'est plus simple que de recommencer la conversation.", score: 0.5 },
          { text: "Je le lui signale à nouveau en lui rappelant l'accord qu'on avait trouvé.", score: 2 },
          { text: "Je lâche — il le fait probablement sans mauvaise intention et ça ne vaut pas la peine d'insister.", score: 0 },
          { text: "J'en parle à notre responsable pour qu'il soit recadré plus formellement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      }
    ],

    // ── Chapitre 2 : Coopérer sans se défausser
    1: [
      {
        type: "choix",
        text: "Un projet commun prend du retard à cause d'un blocage dans votre périmètre. Votre interlocuteur principal sur ce projet, Élodie, commence à s'impatienter.",
        tags: ["coopération", "responsabilité"],
        answers: [
          { text: "Je lui explique que le blocage vient de contraintes qui ne dépendent pas de moi.", score: 0 },
          { text: "Je lui présente la situation telle qu'elle est et ce que je fais concrètement pour la débloquer.", score: 2 },
          { text: "Je lui demande de patienter encore un peu — ça devrait se résoudre rapidement.", score: 0.5 },
          { text: "Je lui propose de reprendre le sujet une fois le blocage levé.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "likert",
        text: "Quand vous prenez un engagement envers un·e collègue, vous le tenez ou vous le renégociez avant l'échéance — jamais en retard sans prévenir.",
        tags: ["coopération", "fiabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "Une autre équipe vous demande de l'aide sur un sujet qui n'est pas dans votre périmètre officiel. Vous avez la compétence mais pas le temps. Votre responsable ne vous a pas explicitement dit de le faire.",
        tags: ["coopération", "silo"],
        answers: [
          { text: "Je décline — si c'était dans mes attributions, on me l'aurait demandé officiellement.", score: 0 },
          { text: "J'aide sans en parler à mon responsable — ça n'a pas besoin d'être officiel.", score: 1 },
          { text: "Je leur dis ce que je peux faire dans le temps dont je dispose et je leur propose ça.", score: 2 },
          { text: "Je leur conseille de passer par les voies officielles pour que ça soit formalisé.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "Vous avez contribué significativement à un livrable présenté en réunion de direction. Votre responsable présente le résultat sans mentionner votre contribution.",
        tags: ["coopération", "reconnaissance"],
        answers: [
          { text: "Je ne dis rien — ce serait malvenu de me mettre en avant devant la direction.", score: 0 },
          { text: "J'en parle à mon responsable après la réunion pour qu'il sache que j'ai besoin que ma contribution soit visible.", score: 2 },
          { text: "Je le mentionne moi-même en réunion au bon moment.", score: 1.5 },
          { text: "Je l'accepte — la reconnaissance passe rarement par les grandes réunions de toute façon.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "likert",
        text: "Vous anticipez les besoins de vos collègues proches et vous leur proposez votre aide avant qu'ils aient à la demander.",
        tags: ["coopération", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "David et vous travaillez sur des objectifs qui se recoupent partiellement. Dans un contexte de ressources limitées, avancer l'un peut bloquer l'autre. Vous avez une réunion de planification demain.",
        tags: ["coopération", "conflit d'intérêt"],
        answers: [
          { text: "Je défends mes propres objectifs en réunion — c'est à la hiérarchie d'arbitrer ensuite.", score: 0.5 },
          { text: "Je lui propose qu'on se parle avant la réunion pour voir si on peut s'organiser.", score: 2 },
          { text: "J'attends de voir ce qu'il propose en réunion avant de me positionner.", score: 0 },
          { text: "Je lui envoie un mail avant la réunion pour lui signaler que nos objectifs se chevauchent.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "Vous avez connaissance d'une information utile pour Baptiste, qui travaille sur un dossier connexe au vôtre. La partager lui faciliterait la tâche mais ne vous apporte rien directement.",
        tags: ["coopération", "information"],
        answers: [
          { text: "Je la garde pour l'instant — je la partagerai si la question vient naturellement.", score: 0 },
          { text: "Je lui transmets directement — l'information utile ne doit pas attendre.", score: 2 },
          { text: "Je lui envoie un message pour lui signaler que j'ai peut-être quelque chose d'utile.", score: 1.5 },
          { text: "Je la mentionne en réunion pour que tout le monde en profite.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "likert",
        text: "Vous signalez proactivement à vos collègues les blocages de votre côté qui risquent d'impacter leur travail, sans attendre qu'ils vous le demandent.",
        tags: ["coopération", "transparence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe traverse une période intense. Laura, une collègue, est visiblement plus en difficulté que les autres face à la charge. Elle n'a rien demandé.",
        tags: ["coopération", "charge partagée"],
        answers: [
          { text: "Chacun gère sa propre charge — si elle avait besoin d'aide, elle le dirait.", score: 0 },
          { text: "Je lui propose spontanément de prendre une de ses tâches si j'ai de la marge.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il rééquilibre la distribution.", score: 1 },
          { text: "Je lui dis que je la vois débordée, au cas où elle voudrait en parler.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "likert",
        text: "Vous rendez les services qu'on vous a rendus, spontanément, sans attendre qu'on vous le rappelle.",
        tags: ["coopération", "réciprocité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      }
    ],

    // ── Chapitre 3 : Gérer les désaccords sans les laisser traîner
    2: [
      {
        type: "choix",
        text: "En réunion, vous n'êtes pas d'accord avec la décision qui vient d'être prise mais vous êtes le seul. Tout le monde semble s'aligner.",
        tags: ["désaccord", "dialogue"],
        answers: [
          { text: "Je m'aligne — si tout le monde est d'accord, c'est que j'ai peut-être raté quelque chose.", score: 0 },
          { text: "Je dis ce que j'en pense, brièvement, en restant factuel.", score: 2 },
          { text: "Je laisse passer en réunion et j'en parle à mon responsable après.", score: 1 },
          { text: "Je pose une question pour faire apparaître mon doute sans prendre de position.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "likert",
        text: "Vous exprimez vos désaccords en réunion, même quand vous êtes seul·e à ne pas être d'accord.",
        tags: ["désaccord", "courage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Votre responsable a pris une décision avec laquelle vous n'êtes pas d'accord. Elle a été annoncée à l'équipe. Vous pensez qu'elle va créer des problèmes opérationnels concrets.",
        tags: ["désaccord", "hiérarchie"],
        answers: [
          { text: "Je l'applique sans rien dire — une fois la décision prise et annoncée, c'est trop tard.", score: 0 },
          { text: "Je lui en parle en privé en lui exposant les problèmes opérationnels que j'anticipe.", score: 2 },
          { text: "J'en parle à mes collègues pour savoir s'ils partagent mon analyse.", score: 0.5 },
          { text: "J'attends que les problèmes apparaissent et je lui en parle à ce moment-là.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Vous et Jonathan avez un désaccord de fond sur la façon d'aborder un dossier commun. Chacun reste sur sa position depuis deux semaines. Ça bloque l'avancement.",
        tags: ["désaccord", "tension"],
        answers: [
          { text: "Je lui présente à nouveau mes arguments — il finira par comprendre.", score: 0 },
          { text: "Je propose qu'on tranche en impliquant notre responsable commun.", score: 1 },
          { text: "Je lui propose un échange structuré pour comprendre sa logique avant de reprendre la mienne.", score: 2 },
          { text: "J'avance de mon côté — le temps montrera qui avait raison.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "likert",
        text: "Face à un désaccord, vous cherchez à comprendre la logique de l'autre avant de reposer la vôtre.",
        tags: ["désaccord", "écoute"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Deux membres de votre équipe sont en désaccord ouvert depuis une semaine sur un sujet de méthode. Personne ne tranche. Le reste de l'équipe commence à prendre parti.",
        tags: ["désaccord", "passivité"],
        answers: [
          { text: "Je laisse — les désaccords de méthode se règlent généralement d'eux-mêmes.", score: 0 },
          { text: "Je prends parti pour la position qui me semble la plus solide.", score: 0.5 },
          { text: "Je crée un moment pour qu'ils exposent leurs positions et cherchent un terrain commun.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il tranche.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Vous recevez un mail de Rayan qui remet en cause votre travail sur un point, avec des collègues en copie. Le ton est neutre mais vous trouvez la démarche déplacée.",
        tags: ["désaccord", "mail"],
        answers: [
          { text: "Je lui réponds en détaillant mes arguments — en copie des mêmes collègues.", score: 0.5 },
          { text: "Je lui réponds factuellement sur le fond, sans commenter la forme.", score: 1 },
          { text: "Je lui propose de s'appeler pour traiter le fond, et je lui dis que je préfère ce mode d'échange.", score: 2 },
          { text: "Je l'appelle directement sans répondre au mail.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez à résoudre les désaccords avec les personnes concernées directement, sans passer par des intermédiaires sauf si c'est vraiment nécessaire.",
        tags: ["désaccord", "résolution"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Une décision a été prise en réunion et vous l'avez publiquement soutenue. Hors réunion, vous continuez à en douter et à en parler négativement avec certains collègues.",
        tags: ["désaccord", "après décision"],
        answers: [
          { text: "C'est normal d'avoir des doutes — je ne mens pas en les exprimant.", score: 0 },
          { text: "Je me tais sur le sujet hors réunion — j'ai donné mon accord, je l'assume.", score: 1 },
          { text: "Je reviens vers mon responsable pour lui signaler que mes doutes persistent.", score: 2 },
          { text: "Je cherche des appuis parmi mes collègues pour que la décision soit réexaminée.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "likert",
        text: "Votre position en réunion est la même que votre position hors réunion — vous ne dites pas une chose en public et une autre en privé.",
        tags: ["désaccord", "constance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      }
    ],

    // ── Chapitre 4 : Maintenir la qualité relationnelle sous pression
    3: [
      {
        type: "choix",
        text: "Votre équipe est en période de rush depuis trois semaines. Les échanges sont devenus plus secs, les remerciements ont disparu, chacun est dans son tunnel. Vous le ressentez.",
        tags: ["pression", "relations"],
        answers: [
          { text: "C'est inévitable en période de charge — les relations reprendront leur cours quand la pression retombera.", score: 0 },
          { text: "Je maintiens mes propres habitudes relationnelles même si ce n'est pas réciproque.", score: 2 },
          { text: "Je le soulève en réunion pour qu'on prenne conscience de la dégradation collective.", score: 1 },
          { text: "Je compense par plus d'énergie dans les interactions pour remonter l'ambiance.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez la qualité de vos relations de travail en période de charge intense, sans vous retrancher dans votre périmètre.",
        tags: ["pression", "présence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes agacé·e par quelque chose qu'a fait Céline et vous lui répondez sèchement dans un échange par messagerie. Vous vous en rendez compte juste après l'envoi.",
        tags: ["pression", "frustration"],
        answers: [
          { text: "Je laisse — elle comprendra que je suis sous pression en ce moment.", score: 0 },
          { text: "Je lui envoie un message pour corriger le ton de ma réponse précédente.", score: 2 },
          { text: "Je l'appelle pour m'expliquer et m'excuser.", score: 2 },
          { text: "Je fais comme si de rien n'était — trop insister attirerait l'attention sur l'incident.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "En période de rush, votre collègue Théo a fait un effort particulier pour vous aider sur un point bloquant. Vous êtes vous-même très pris·e.",
        tags: ["pression", "reconnaissance"],
        answers: [
          { text: "Je le remercie quand les choses se calmeront — il comprend que ce n'est pas le moment.", score: 0 },
          { text: "Je lui envoie un message court pour lui signifier que j'ai remarqué et que j'apprécie.", score: 2 },
          { text: "Je garde ça en tête pour lui rendre la pareille quand l'occasion se présentera.", score: 1 },
          { text: "Je le remercie rapidement de vive voix au prochain croisement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "likert",
        text: "Votre façon de traiter vos collègues ne change pas significativement selon que vous êtes sous pression ou non.",
        tags: ["pression", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous avez eu une matinée particulièrement difficile. L'après-midi, vous avez deux réunions avec des collègues qui ne sont pas impliqués dans ce qui vous a mis sous tension.",
        tags: ["pression", "humeur"],
        answers: [
          { text: "Mon humeur du moment transparaît forcément — ce serait artificiel de faire semblant.", score: 0 },
          { text: "Je préviens mes collègues en début de réunion que j'ai eu une matinée compliquée.", score: 1 },
          { text: "Je fais l'effort de mettre de côté ma matinée pour ces réunions.", score: 2 },
          { text: "Je reporte les réunions si je sens que je ne suis pas en état.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe traverse une période difficile. Vous, vous vous en sortez mieux que les autres. Personne ne vous demande rien.",
        tags: ["pression", "solidarité"],
        answers: [
          { text: "Je me concentre sur mon propre travail — en période difficile, chacun doit gérer le sien.", score: 0 },
          { text: "Je propose spontanément un coup de main à ceux qui semblent le plus en difficulté.", score: 2 },
          { text: "Je reste disponible si quelqu'un me sollicite, sans m'imposer.", score: 1 },
          { text: "J'en parle à notre responsable pour qu'il rééquilibre la charge.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "likert",
        text: "Quand vous avez mal géré une interaction sous pression, vous revenez vers la personne concernée pour le reconnaître.",
        tags: ["pression", "réparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "Un·e collègue vous dit qu'il ou elle ne supporte plus l'ambiance de l'équipe en ce moment. Vous partagez ce ressenti mais vous gérez. Vous êtes en plein rush.",
        tags: ["pression", "limites"],
        answers: [
          { text: "Je lui dis que c'est temporaire et que ça ira mieux quand la pression retombera.", score: 0 },
          { text: "Je l'écoute sans chercher à minimiser ce qu'il ou elle ressent.", score: 2 },
          { text: "Je lui conseille d'en parler à notre responsable si c'est vraiment difficile.", score: 1 },
          { text: "Je lui dis que moi aussi je trouve ça difficile — au moins il ou elle ne se sent pas seul·e.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous réglez vos propres états émotionnels avant d'entrer dans une interaction difficile plutôt que de les laisser déborder sur vos collègues.",
        tags: ["pression", "régulation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      }
    ],

  },
  // ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "teletravail-hybridation" dans Object.assign(window.CUSTOM_QUESTIONS,

  "teletravail-hybridation": {
    0: [
      {
        type: "choix",
        text: "Vous travaillez depuis chez vous et vous avez tendance à rester connecté bien au-delà de vos horaires habituels — les sollicitations ne s'arrêtent pas et vous y répondez.",
        tags: ["organisation", "télétravail"],
        answers: [
          { text: "C'est le prix de la flexibilité — le télétravail donne de l'autonomie mais demande de la disponibilité.", score: 0 },
          { text: "Je fixe une heure de déconnexion et je m'y tiens, comme je le ferais au bureau.", score: 2 },
          { text: "Je réponds aux urgences réelles et je laisse le reste pour le lendemain.", score: 1.5 },
          { text: "Je note les messages reçus tard pour y répondre en début de journée suivante.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "choix",
        text: "En télétravail, votre domicile est peu propice à la concentration — interruptions, bruit, espace partagé. Vous avez du travail de fond à faire.",
        tags: ["organisation", "concentration"],
        answers: [
          { text: "Je fais avec — le télétravail, c'est aussi accepter que les conditions ne sont pas toujours idéales.", score: 0 },
          { text: "Je signale à mon responsable que mes conditions de télétravail posent problème.", score: 1.5 },
          { text: "Je viens au bureau les jours où j'ai besoin de concentration, même si ce n'est pas prévu.", score: 2 },
          { text: "J'adapte mon travail aux conditions — je garde le travail de fond pour les jours de présentiel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "likert",
        text: "Vous maintenez des horaires de travail clairs en télétravail, sans déborder régulièrement au-delà de vos fins de journée habituelles.",
        tags: ["organisation", "frontières"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "choix",
        text: "En télétravail, vous avez tendance à sur-communiquer sur ce que vous faites — plus de messages, plus de mises à jour — pour montrer que vous travaillez.",
        tags: ["organisation", "visibilité"],
        answers: [
          { text: "C'est normal, le télétravail crée un déficit de visibilité qu'il faut compenser.", score: 0 },
          { text: "Je communique sur les résultats et les blocages, pas sur mon activité minute par minute.", score: 2 },
          { text: "Je m'en rends compte et j'essaie de le limiter, sans toujours y arriver.", score: 1 },
          { text: "Je préfère communiquer plus que moins — mieux vaut être visible que transparent.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe utilise le présentiel de façon très variable — certains viennent souvent, d'autres rarement. Vous avez l'impression que ceux qui viennent le plus ont plus d'accès à l'information.",
        tags: ["organisation", "présentiel"],
        answers: [
          { text: "C'est inévitable — le présentiel a des avantages naturels, c'est comme ça.", score: 0 },
          { text: "Je m'assure de créer des canaux équivalents pour les personnes à distance.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il formalise la façon dont l'information circule.", score: 1.5 },
          { text: "Je viens plus souvent au bureau pour ne pas être désavantagé·e.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "likert",
        text: "Vous planifiez vos jours de présentiel en fonction des sujets qui bénéficient vraiment d'une présence physique, pas juste par habitude ou par conformité.",
        tags: ["organisation", "anticipation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "choix",
        text: "Vos journées de télétravail n'ont pas de structure fixe — vous gérez au fil de l'eau selon les sollicitations qui arrivent.",
        tags: ["organisation", "rituels"],
        answers: [
          { text: "C'est justement l'avantage du télétravail — la flexibilité de s'adapter.", score: 0 },
          { text: "Je bloque des créneaux dédiés pour le travail de fond avant d'ouvrir ma messagerie.", score: 2 },
          { text: "J'essaie d'avoir une structure mais les sollicitations finissent souvent par l'emporter.", score: 1 },
          { text: "Je m'aligne sur le rythme des sollicitations — si tout le monde envoie des messages le matin, je suis disponible le matin.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "choix",
        text: "Votre connexion internet à domicile est instable depuis quelques semaines. Ça crée des problèmes récurrents en réunion à distance.",
        tags: ["organisation", "équipement"],
        answers: [
          { text: "Je m'excuse en début de réunion et je fais avec — ce sont des aléas techniques.", score: 0 },
          { text: "Je viens au bureau les jours où j'ai des réunions importantes jusqu'à ce que le problème soit résolu.", score: 2 },
          { text: "Je signale le problème à mon responsable pour voir si l'entreprise peut aider.", score: 1.5 },
          { text: "Je passe en audio uniquement pour limiter l'impact sur les autres.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "likert",
        text: "Vous identifiez régulièrement ce qui fonctionne et ce qui fonctionne moins dans votre façon de travailler en mode hybride, et vous ajustez.",
        tags: ["organisation", "régulation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez tendance à accepter plus de réunions les jours de télétravail parce que 'c'est plus facile à distance'. Votre agenda ne laisse plus de place au travail de fond.",
        tags: ["organisation", "charge"],
        answers: [
          { text: "Les réunions à distance sont moins coûteuses — c'est logique d'en mettre plus ces jours-là.", score: 0 },
          { text: "Je bloque des plages de travail individuel sur mes journées de télétravail, non négociables.", score: 2 },
          { text: "Je commence à refuser des réunions à distance quand l'agenda est trop chargé.", score: 1.5 },
          { text: "Je fais les réunions et je rattrape le travail de fond en dehors des horaires.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous subissez votre organisation hybride plutôt que de la piloter", desc: "Rester connecté bien au-delà des horaires normaux, accepter des conditions de travail inadaptées, multiplier les réunions à distance par facilité : le télétravail sans structure crée une pression diffuse, difficile à localiser. L'enjeu est de piloter activement votre organisation hybride — horaires, espaces, jours de présence — plutôt que de la subir." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez votre organisation hybride correctement, les ajustements fins vous échappent encore", desc: "Vous avez trouvé un fonctionnement hybride qui tient. Mais certains ajustements — protéger du temps de fond contre la multiplication des réunions à distance, communiquer sur vos résultats plutôt que sur votre activité, planifier vos jours de présentiel stratégiquement — ne sont pas encore systématiques. L'enjeu est de passer d'une organisation qui fonctionne à une organisation qui fonctionne bien." },
          haut: { label: "Réflexes installés", titre: "Vous pilotez activement votre organisation hybride sans la subir", desc: "Vous structurez vos journées de télétravail, vous planifiez vos jours de présence selon les sujets qui en bénéficient, vous communiquez sur vos résultats, vous maintenez des frontières claires entre temps de travail et temps personnel. Cette façon de piloter son organisation hybride permet de profiter des avantages du distanciel sans en subir les dérives." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Depuis qu'il télétravaille trois jours par semaine, vous avez beaucoup moins de contact informel avec Jonathan. Vous travaillez pourtant étroitement ensemble.",
        tags: ["lien", "isolement"],
        answers: [
          { text: "C'est inévitable avec le télétravail — le lien informel ne peut pas être recréé artificiellement.", score: 0 },
          { text: "Je lui propose qu'on synchronise nos jours de présentiel une fois par semaine au minimum.", score: 2 },
          { text: "Je lui envoie plus de messages pour compenser l'absence de contact informel.", score: 0.5 },
          { text: "Je profite des jours où on est tous les deux au bureau pour rattraper le lien.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "likert",
        text: "Vous créez des occasions de contact avec vos collègues à distance, au-delà des réunions de travail formelles.",
        tags: ["lien", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "choix",
        text: "Vous animez une réunion avec la moitié de l'équipe en salle et l'autre à distance. Vous avez tendance à vous adresser naturellement aux personnes présentes physiquement.",
        tags: ["lien", "réunion hybride"],
        answers: [
          { text: "C'est naturel — on parle d'abord à ceux qui sont devant soi.", score: 0 },
          { text: "Je fais un effort explicite pour inclure les personnes à distance : je les sollicite, je reformule.", score: 2 },
          { text: "Je demande à quelqu'un en salle de surveiller le chat pour signaler si quelqu'un à distance veut intervenir.", score: 1.5 },
          { text: "Je précise en début de réunion que tout le monde doit s'inclure, sans changer ma façon d'animer.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "choix",
        text: "Mehdi a rejoint l'équipe il y a un mois. Il est souvent en télétravail et vous avez l'impression qu'il ne s'est pas encore vraiment intégré au collectif.",
        tags: ["lien", "nouveau"],
        answers: [
          { text: "C'est à lui de faire la démarche — l'intégration demande un effort de la personne qui arrive.", score: 0 },
          { text: "Je lui propose un café à distance pour mieux se connaître en dehors des réunions de travail.", score: 2 },
          { text: "Je m'assure qu'il est bien inclus dans les échanges collectifs sans aller au-delà.", score: 1 },
          { text: "J'en parle à notre responsable pour qu'il organise quelque chose pour le groupe.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "likert",
        text: "Vous veillez à ce que les personnes à distance aient le même accès à l'information que celles présentes en salle.",
        tags: ["lien", "équité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a perdu ses moments informels depuis le passage au travail hybride — plus de déjeuners collectifs, plus de pauses café spontanées. Personne n'a proposé d'alternative.",
        tags: ["lien", "informel"],
        answers: [
          { text: "Ces moments informels ne peuvent pas être reconstitués à distance — c'est une perte à accepter.", score: 0 },
          { text: "Je propose un format régulier et court — un café virtuel optionnel, par exemple — pour recréer de l'informel.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il organise quelque chose.", score: 0.5 },
          { text: "Je profite des jours de présentiel pour recréer ces moments avec ceux qui sont là.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "choix",
        text: "Vous sentez qu'une collègue, Claire, est moins engagée depuis qu'elle télétravaille davantage. Elle répond moins vite, participe moins en réunion.",
        tags: ["lien", "distance"],
        answers: [
          { text: "Le désengagement à distance est difficile à gérer — je laisse son manager s'en occuper.", score: 0 },
          { text: "Je lui envoie plus de messages pour maintenir le contact et la stimuler.", score: 0.5 },
          { text: "Je lui propose un échange individuel pour voir comment elle vit le télétravail en ce moment.", score: 2 },
          { text: "J'en parle à notre responsable en lui signalant ce que j'observe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez vos disponibilités à vos collègues en mode hybride pour qu'ils sachent quand vous joindre, sans qu'ils aient à deviner.",
        tags: ["lien", "disponibilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "choix",
        text: "Lors de vos jours au bureau, vous avez tendance à travailler dans votre bureau avec la porte fermée ou à rester sur vos écrans. La présence physique n'implique pas forcément plus d'échanges.",
        tags: ["lien", "présentiel"],
        answers: [
          { text: "Le présentiel n'est pas obligatoirement synonyme d'échanges — je viens pour travailler.", score: 0 },
          { text: "Je réserve les jours de présentiel aux sujets qui bénéficient vraiment du contact direct.", score: 2 },
          { text: "Je fais un effort pour être plus accessible et disponible les jours où je suis au bureau.", score: 1.5 },
          { text: "Je m'aligne sur ce que font les autres — si tout le monde est sur ses écrans, je fais pareil.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }, 
      {
        type: "likert",
        text: "Vous adaptez votre façon d'animer les échanges collectifs selon que les participants sont tous en salle, tous à distance, ou dans une configuration mixte.",
        tags: ["lien", "collectif"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le lien avec vos collègues à distance se maintient par défaut, pas par intention", desc: "Le lien informel disparaît naturellement avec la distance si personne ne crée d'occasions pour le maintenir. Attendre les jours de présentiel, laisser les réunions faire le travail relationnel, ne pas se soucier des personnes à distance dans les échanges collectifs : ce sont des comportements qui érodent progressivement la qualité du collectif, souvent sans qu'on s'en aperçoive avant que ce soit difficile à rattraper." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez le lien avec vos collègues proches, les personnes plus éloignées restent dans l'angle mort", desc: "Vous êtes attentif·ve aux collègues avec qui vous travaillez régulièrement. Mais les personnes plus périphériques — un nouveau qui s'intègre en distanciel, un collègue qui télétravaille beaucoup sans que vous le croisiez — peuvent rester dans l'angle mort. L'enjeu est d'étendre votre vigilance au-delà de votre cercle de travail immédiat." },
          haut: { label: "Réflexes installés", titre: "Vous créez délibérément les conditions du lien collectif, quel que soit le mode de présence", desc: "Vous synchronisez vos jours de présentiel avec ceux qui comptent, vous incluez activement les personnes à distance dans les réunions mixtes, vous créez des occasions informelles pour maintenir le collectif. Cette intention délibérée — recréer ce que la distance enlève naturellement — est ce qui distingue une équipe hybride qui fonctionne bien d'une équipe hybride qui s'effiloche." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous êtes seul·e à distance dans une réunion où tous les autres sont en salle. La qualité audio est mauvaise, les gens parlent entre eux sans activer leur micro. Vous perdez la moitié des échanges.",
        tags: ["irritant hybride", "réunion"],
        answers: [
          { text: "Je reste connecté·e et je suis du mieux que je peux — c'est la contrainte du distanciel.", score: 0 },
          { text: "Je l'interromps pour signaler que je n'entends pas correctement et demander un ajustement.", score: 2 },
          { text: "Je préviens en début de réunion que je suis à distance et que j'aurai besoin qu'on pense à moi.", score: 1.5 },
          { text: "Je note ce que je comprends et je demande un compte rendu après.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "choix",
        text: "Des décisions importantes sont prises lors de conversations informelles au bureau entre personnes présentes, sans que les collègues à distance en soient informés. Vous l'avez appris après coup.",
        tags: ["irritant hybride", "information"],
        answers: [
          { text: "C'est inévitable — le présentiel génère naturellement des échanges qui échappent au distanciel.", score: 0 },
          { text: "J'en parle à notre responsable pour qu'on formalise comment les décisions sont documentées et partagées.", score: 2 },
          { text: "Je demande à un collègue au bureau de me tenir informé·e des échanges importants.", score: 1 },
          { text: "Je viens plus souvent au bureau pour ne plus rater ce type d'échanges.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "likert",
        text: "Quand une organisation hybride crée des inégalités ou des irritants réels, vous le signalez plutôt que de vous adapter sans rien dire.",
        tags: ["irritant hybride", "expression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a multiplié les réunions à distance depuis le passage au hybride — chaque sujet devient une réunion. Vous passez plus de temps en réunion qu'en travail réel.",
        tags: ["irritant hybride", "réunions répétées"],
        answers: [
          { text: "Les réunions à distance sont moins coûteuses — c'est normal d'en avoir plus.", score: 0 },
          { text: "Je propose de traiter certains sujets de façon asynchrone pour réduire le nombre de réunions.", score: 2 },
          { text: "Je commence à décliner les réunions dont l'objet peut être traité autrement.", score: 1.5 },
          { text: "J'en parle à notre responsable pour qu'il rationalise le nombre de réunions.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue, Sébastien, vous envoie des messages à 22h en télétravail et s'attend à une réponse rapide. Ce n'est pas la première fois.",
        tags: ["irritant hybride", "asynchrone"],
        answers: [
          { text: "Je réponds si je suis encore éveillé·e — il sait que je ne suis pas obligé·e.", score: 0 },
          { text: "Je lui réponds le lendemain matin sans commenter — il finira par comprendre.", score: 0.5 },
          { text: "Je lui dis qu'après une certaine heure je ne consulte plus mes messages professionnels.", score: 2 },
          { text: "Je paramètre des notifications silencieuses la nuit et je ne change rien à ma façon de répondre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "likert",
        text: "Vous traitez de la même façon vos collègues à distance et ceux présents en salle — même accès à l'information, même temps de parole, même considération.",
        tags: ["irritant hybride", "équité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, la norme implicite est de venir au bureau au moins trois jours par semaine. Vous avez de bonnes raisons personnelles de ne venir que deux jours. Plusieurs collègues le remarquent.",
        tags: ["irritant hybride", "norme"],
        answers: [
          { text: "Je m'aligne sur la norme — les normes implicites sont là pour une raison.", score: 0 },
          { text: "Je continue à venir deux jours et j'ignore les remarques — j'ai de bonnes raisons.", score: 0.5 },
          { text: "J'en parle à mon responsable pour clarifier si la norme est une obligation ou une préférence.", score: 2 },
          { text: "Je viens trois jours pour éviter les frictions, même si ça ne m'arrange pas.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "choix",
        text: "Les outils collaboratifs de votre équipe ne sont pas utilisés de façon cohérente — certains passent par mail, d'autres par Teams, d'autres par WhatsApp. Vous perdez du temps à chercher l'information.",
        tags: ["irritant hybride", "outils"],
        answers: [
          { text: "Je m'adapte aux outils de chaque personne — tout le monde a ses habitudes.", score: 0 },
          { text: "Je centralise ma propre communication sur un seul outil et j'explique pourquoi.", score: 1 },
          { text: "Je propose à l'équipe qu'on s'aligne sur un fonctionnement commun.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il impose un outil unique.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "likert",
        text: "Vous évoquez les irritants liés à l'organisation hybride avec votre équipe ou votre responsable, sans attendre que ça s'accumule.",
        tags: ["irritant hybride", "régulation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }, 
      {
        type: "choix",
        text: "Vos journées hybrides sont épuisantes — une série de réunions à distance, des sollicitations constantes, peu de temps de récupération entre les écrans. Vous le ressentez physiquement.",
        tags: ["irritant hybride", "surcharge cognitive"],
        answers: [
          { text: "C'est le prix du télétravail — la flexibilité a un coût et je l'assume.", score: 0 },
          { text: "J'identifie ce qui génère le plus de fatigue et je cherche à le modifier.", score: 2 },
          { text: "Je prends des pauses plus régulières entre les réunions pour récupérer.", score: 1.5 },
          { text: "Je le signale à mon responsable si ça dure trop longtemps.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants de l'hybridation s'accumulent sans être nommés ni traités", desc: "La mauvaise qualité audio en réunion, l'information qui circule d'abord au bureau, les outils utilisés de façon incohérente, les messages tardifs : ces irritants sont réels et traitables. Les accepter comme des fatalités du télétravail est un réflexe compréhensible, mais c'est aussi ce qui permet à des dysfonctionnements évitables de durer." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'installent sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les dysfonctionnements plus insidieux — l'information qui circule différemment selon les modes de présence, les outils utilisés de façon incohérente, les normes implicites sur le présentiel — s'installent sans être traités. L'enjeu est de les nommer plus tôt." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants de l'hybridation à la source, sans les normaliser", desc: "Vous signalez quand la qualité audio vous empêche de suivre, vous proposez de traiter certains sujets de façon asynchrone pour réduire la surcharge de réunions, vous clarifiez les normes implicites avec votre responsable. Cette façon de traiter les irritants à la source, sans les normaliser, améliore l'expérience de travail pour tout le monde." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous avez l'impression que vos collègues qui viennent souvent au bureau progressent plus vite que vous, qui préférez télétravailler. Vous ne savez pas si c'est réel ou perçu.",
        tags: ["inégalité", "avancement"],
        answers: [
          { text: "Je viens plus souvent au bureau pour ne pas être désavantagé·e — mieux vaut prévenir.", score: 0 },
          { text: "J'en parle directement à mon responsable pour comprendre comment ma présence et ma progression sont évaluées.", score: 2 },
          { text: "J'observe encore un peu avant de réagir — ça peut être une perception biaisée.", score: 1 },
          { text: "J'accepte que le présentiel ait des avantages naturels pour la carrière.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "likert",
        text: "Vous nommez les inégalités que vous observez liées au mode de travail (présentiel vs distanciel), sans attendre qu'elles soient officiellement reconnues.",
        tags: ["inégalité", "expression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "choix",
        text: "Nina, une jeune collaboratrice, télétravaille souvent mais n'a pas encore le réseau informel pour savoir ce qui se passe vraiment. Elle rate des informations qui pourraient lui être utiles.",
        tags: ["inégalité", "jeune"],
        answers: [
          { text: "C'est à elle de choisir son organisation — le télétravail a des contreparties.", score: 0 },
          { text: "Je m'assure de lui transmettre les informations importantes que j'aurais pu avoir au bureau.", score: 2 },
          { text: "Je lui conseille de venir plus souvent au bureau pour construire son réseau.", score: 1 },
          { text: "J'en parle à notre responsable pour qu'il structure mieux la circulation de l'information.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "choix",
        text: "Votre collègue Nadia est à temps partiel et télétravaille. Elle n'est pas là lors des réunions informelles importantes du vendredi après-midi. Des décisions sont parfois prises sans elle.",
        tags: ["inégalité", "temps partiel"],
        answers: [
          { text: "Elle a fait un choix d'organisation — elle en assume les conséquences professionnelles.", score: 0 },
          { text: "Je m'assure qu'elle est informée des décisions prises en son absence et consultée avant si possible.", score: 2 },
          { text: "Je lui envoie un compte rendu des réunions auxquelles elle n'a pas pu assister.", score: 1.5 },
          { text: "J'en parle à notre responsable pour qu'il décale les réunions importantes.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "likert",
        text: "Vous vérifiez que vos collègues en télétravail ou à temps partiel ne ratent pas des informations ou des décisions importantes faute d'être présents physiquement.",
        tags: ["inégalité", "inclusion"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, les contributions des personnes souvent à distance sont moins visibles que celles des personnes au bureau. Personne ne semble s'en préoccuper.",
        tags: ["inégalité", "reconnaissance"],
        answers: [
          { text: "La visibilité se construit en partie par la présence — c'est une réalité à accepter.", score: 0 },
          { text: "J'en parle à notre responsable pour qu'il réfléchisse à comment rendre ces contributions visibles.", score: 2 },
          { text: "Je cite explicitement les contributions de mes collègues à distance quand j'en ai l'occasion.", score: 2 },
          { text: "Je conseille à mes collègues à distance de mieux se mettre en avant.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise dit officiellement que le présentiel et le distanciel sont équivalents, mais en pratique vous observez que les managers valorisent davantage la présence physique.",
        tags: ["inégalité", "culture"],
        answers: [
          { text: "Si c'est la culture réelle, mieux vaut s'y adapter même si le discours officiel est différent.", score: 0 },
          { text: "Je remonte le décalage entre le discours et la pratique à mon responsable ou aux RH.", score: 2 },
          { text: "J'en parle à mes collègues pour voir si mon observation est partagée.", score: 1 },
          { text: "Je l'accepte et j'ajuste mon organisation en conséquence.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "likert",
        text: "Vous êtes attentif·ve aux signaux qui indiquent que le mode de travail crée des inégalités entre membres de l'équipe, même implicites.",
        tags: ["inégalité", "vigilance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "choix",
        text: "Vous observez que certains de vos collègues en télétravail avec de jeunes enfants sont souvent interrompus pendant leurs réunions. Personne n'en parle ouvertement.",
        tags: ["inégalité", "charge mentale"],
        answers: [
          { text: "C'est leur organisation personnelle — ce n'est pas à l'équipe de s'en préoccuper.", score: 0 },
          { text: "Je crée des réunions sans avoir besoin de caméra pour réduire la pression sur eux.", score: 1 },
          { text: "Je soulève le sujet avec notre responsable pour voir si on peut adapter les formats de réunion.", score: 2 },
          { text: "Je leur signale en privé que leur situation est visible et que c'est normal.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous identifiez une inégalité liée au mode de travail, vous faites quelque chose pour la corriger à votre niveau — pas seulement l'observer.",
        tags: ["inégalité", "action"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous acceptez les inégalités créées par le mode de travail comme une fatalité", desc: "Percevoir que le présentiel favorise la progression de carrière et s'y adapter sans nommer ce qu'on observe, laisser des collègues à distance rater des informations ou des décisions importantes : ce sont des façons de faire qui reproduisent des inégalités structurelles. Les nommer, même sans certitude absolue, est la première condition pour qu'elles soient traitées." },
          moyen: { label: "Pratiques en développement", titre: "Vous remarquez les inégalités mais vous hésitez encore à les nommer ou à agir", desc: "Vous percevez les inégalités liées au mode de travail et vous les comprenez. Mais passer à l'action — en parler à votre responsable, citer les contributions des personnes à distance, proposer des formats plus équitables — est encore difficile. L'enjeu est de convertir l'observation en action concrète, même modeste." },
          haut: { label: "Réflexes installés", titre: "Vous nommez et corrigez les inégalités créées par le mode de travail à votre niveau", desc: "Vous nommez les inégalités que vous observez — accès à l'information, visibilité des contributions, évaluation de la performance — et vous agissez à votre niveau pour les corriger. Vous ne laissez pas des collègues à distance, à temps partiel ou avec des contraintes personnelles se retrouver structurellement désavantagés sans que personne ne le dise." },
        },
      }
    ],

  },
  // ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "epuisement-prevention" dans Object.assign(window.CUSTOM_QUESTIONS,

  "epuisement-prevention": {
    0: [
      {
        type: "choix",
        text: "Depuis trois semaines, vous vous levez fatigué·e même après une nuit complète. Vous mettez ça sur le compte de la période — c'est chargé en ce moment pour tout le monde.",
        tags: ["signaux", "auto-observation"],
        answers: [
          { text: "Je continue — c'est une période difficile, ça finira bien par passer.", score: 0 },
          { text: "Je note que c'est récurrent depuis trois semaines et je m'en préoccupe sérieusement.", score: 2 },
          { text: "Je prends quelques jours plus calmes pour récupérer, si mon agenda le permet.", score: 1 },
          { text: "J'en parle à un proche, pour voir si je suis le seul à me sentir ainsi.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez remarqué que les sujets qui vous passionnaient il y a un an vous laissent maintenant indifférent·e. Vous gérez, vous produisez, mais l'engagement n'est plus là.",
        tags: ["signaux", "cynisme"],
        answers: [
          { text: "C'est normal d'évoluer — les intérêts changent avec le temps.", score: 0 },
          { text: "Je note ce signal et je prends le temps de comprendre ce qui a changé.", score: 2 },
          { text: "Je cherche de nouveaux sujets stimulants pour remplacer ceux qui m'ont quitté.", score: 1 },
          { text: "Je me dis que c'est peut-être le signe que c'est le moment de changer de poste.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites régulièrement le point sur votre propre état — pas seulement sur votre charge de travail, mais sur votre engagement et votre énergie.",
        tags: ["signaux", "régularité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "choix",
        text: "Vous vous retrouvez régulièrement agacé·e par des choses qui ne vous affectaient pas avant — un collègue qui parle fort, une réunion qui commence en retard, un mail mal formulé.",
        tags: ["signaux", "irritabilité"],
        answers: [
          { text: "C'est de l'irritabilité normale — tout le monde a des jours plus difficiles.", score: 0 },
          { text: "Je reconnais ce signal comme le signe que ma capacité de tolérance a baissé, et je creuse.", score: 2 },
          { text: "Je m'impose une discipline — ne pas réagir à chaud, prendre du recul.", score: 1 },
          { text: "Je réduis les interactions pour éviter les frictions.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "choix",
        text: "Vous mettez deux fois plus de temps qu'avant pour faire des tâches qui vous étaient faciles. Vous compensez en travaillant plus longtemps pour maintenir votre niveau de production.",
        tags: ["signaux", "performance"],
        answers: [
          { text: "Je compense — tant que la qualité est là, personne ne verra la différence.", score: 0 },
          { text: "Je reconnais que cette baisse d'efficacité est un signal et je réduis ma charge pour récupérer.", score: 2 },
          { text: "Je me demande si ce n'est pas une question de motivation — je cherche à me remotiver.", score: 0.5 },
          { text: "Je l'accepte comme une phase normale — ça reviendra quand la pression retombera.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "likert",
        text: "Vous prenez en compte les signaux physiques — sommeil perturbé, tensions musculaires, maux de tête récurrents — comme des informations sur votre état général, pas comme des aléas à ignorer.",
        tags: ["signaux", "corps"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "choix",
        text: "Des proches vous ont dit à deux reprises ces derniers mois que vous semblez épuisé·e et moins présent·e. Vous répondez que tout va bien, que c'est juste une période.",
        tags: ["signaux", "déni"],
        answers: [
          { text: "Mes proches ne voient pas les choses de l'intérieur — je sais mieux que quiconque comment je vais.", score: 0 },
          { text: "Je prends leur observation au sérieux, même si je ne ressens pas encore la gravité qu'ils perçoivent.", score: 2 },
          { text: "Je les rassure et je fais plus attention à paraître moins fatigué·e.", score: 0 },
          { text: "Je les écoute mais j'attends de voir si ça continue avant de m'alarmer.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez arrêté progressivement les activités qui vous ressourçaient — sport, loisirs, sorties — sans vraiment décider de les arrêter. Votre agenda de travail les a simplement absorbées.",
        tags: ["signaux", "plaisir"],
        answers: [
          { text: "C'est une période intense — je reprendrai ces activités quand ça se calmera.", score: 0 },
          { text: "Je remarque cette érosion comme un signal et je réintègre délibérément ces activités.", score: 2 },
          { text: "Je cherche des activités plus courtes qui s'intègrent mieux dans mon emploi du temps actuel.", score: 1.5 },
          { text: "Je me concentre sur les priorités — les loisirs peuvent attendre.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "likert",
        text: "Vous intervenez sur votre état quand les premiers signaux apparaissent, sans attendre qu'ils deviennent impossibles à ignorer.",
        tags: ["signaux", "précocité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }, 
      {
        type: "choix",
        text: "Vous vous surprenez régulièrement à décrocher en réunion — votre esprit est ailleurs, vous ne suivez plus vraiment. Ça ne vous arrivait pas avant.",
        tags: ["signaux", "décrochage"],
        answers: [
          { text: "Les réunions sont souvent inintéressantes — c'est normal de décrocher.", score: 0 },
          { text: "Je note ce changement comme un signal inhabituel et je prends ça au sérieux.", score: 2 },
          { text: "Je me force à être plus présent·e en prenant des notes systématiquement.", score: 1 },
          { text: "Je demande à participer à moins de réunions pour ne pas perdre mon temps.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez ou minimisez vos propres signaux d'alerte jusqu'à ce qu'ils soient impossibles à contourner", desc: "Mettre la fatigue sur le compte de la période, attendre que ça passe, minimiser ce que les proches observent : ce sont des réflexes courants qui retardent la prise en compte de signaux réels. L'épuisement professionnel ne s'installe pas du jour au lendemain — il s'accumule lentement, et ce sont les premiers signaux, souvent discrets, qui sont les plus faciles à traiter." },
          moyen: { label: "Pratiques en développement", titre: "Vous repérez vos signaux d'alerte quand ils sont forts, les subtils vous échappent encore", desc: "Vous réagissez quand les signaux sont clairs — fatigue intense, irritabilité forte, baisse de performance évidente. Mais les premiers signaux, plus ténus — un léger désengagement, un plaisir qui s'efface progressivement, un sommeil qui se dégrade doucement — passent encore sans réaction de votre part. L'enjeu est d'abaisser votre seuil d'attention." },
          haut: { label: "Réflexes installés", titre: "Vous prenez vos propres signaux au sérieux dès qu'ils apparaissent, sans attendre qu'ils s'imposent", desc: "Vous prenez au sérieux les observations de vos proches, vous notez les changements durables dans votre état, vous intervenez quand les premiers signaux apparaissent — avant qu'ils ne s'accumulent. Cette attention précoce à soi-même n'est pas de l'hypocondrie : c'est ce qui permet de traiter des situations qui seraient devenues lourdes si elles avaient été ignorées trois mois de plus." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous avez eu une semaine particulièrement intense. Votre prochain week-end est déjà planifié avec des activités sociales et familiales. Vous avez besoin de récupérer.",
        tags: ["régulation", "charge"],
        answers: [
          { text: "Je tiens le programme — annuler serait décevoir les gens qui comptent sur moi.", score: 0 },
          { text: "Je maintiens l'essentiel et je me donne la permission d'annuler le reste sans culpabiliser.", score: 2 },
          { text: "Je passe le week-end normalement — la récupération peut se faire en semaine.", score: 0 },
          { text: "Je préviens que je serai moins disponible ce week-end sans tout annuler.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "likert",
        text: "Vous prenez des mesures préventives avant d'être à bout — vous réduisez votre charge, vous prenez des pauses, vous demandez de l'aide — sans attendre le point de rupture.",
        tags: ["régulation", "anticipation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "choix",
        text: "Il est 14h, vous n'avez pas déjeuné et vous êtes sur votre ordinateur depuis 8h sans pause réelle. Vous avez encore trois heures de travail devant vous.",
        tags: ["régulation", "pause"],
        answers: [
          { text: "Je continue — je mangerai quelque chose sur le pouce, il y a trop à faire.", score: 0 },
          { text: "Je prends 30 minutes pour déjeuner correctement — ça m'aidera à tenir l'après-midi.", score: 2 },
          { text: "Je prends une pause courte maintenant et je mangerai plus tard.", score: 1 },
          { text: "Je finis ce que j'ai en cours avant de faire une pause.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "choix",
        text: "Vous sentez que vous commencez à saturer. Demander de l'aide vous semble difficile — votre équipe est déjà sous pression et vous ne voulez pas ajouter à leur charge.",
        tags: ["régulation", "demande d'aide"],
        answers: [
          { text: "Je gère seul·e — tout le monde a sa propre charge, je ne vais pas en rajouter.", score: 0 },
          { text: "Je signale mon état à mon responsable sans nécessairement demander une redistribution immédiate.", score: 2 },
          { text: "J'identifie la tâche la moins urgente et je la décale ou la délègue.", score: 1.5 },
          { text: "J'attends que la pression retombe — c'est souvent temporaire.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "likert",
        text: "Vous identifiez ce qui vous ressource vraiment — pas ce que vous devriez faire pour récupérer, mais ce qui fonctionne réellement pour vous — et vous y revenez régulièrement.",
        tags: ["régulation", "ressources"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez des jours de congé à prendre avant la fin du trimestre. Vous avez tendance à les reporter — il y a toujours quelque chose d'important qui arrive au mauvais moment.",
        tags: ["régulation", "vacances"],
        answers: [
          { text: "Je les reporte encore — ce n'est vraiment pas le bon moment.", score: 0 },
          { text: "Je les pose même si le contexte n'est pas idéal — il ne l'est jamais vraiment.", score: 2 },
          { text: "Je pose quelques jours maintenant et je garde le reste pour plus tard.", score: 1.5 },
          { text: "J'en parle à mon responsable pour trouver un moment moins perturbant.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "choix",
        text: "Pendant vos congés, vous consultez vos mails professionnels régulièrement — juste pour être sûr·e que rien d'urgent ne vous échappe.",
        tags: ["régulation", "coupure"],
        answers: [
          { text: "C'est raisonnable — une vraie coupure n'est pas toujours possible dans mon poste.", score: 0 },
          { text: "Je coupe vraiment — j'ai prévenu en amont et j'ai désigné quelqu'un pour les urgences.", score: 2 },
          { text: "Je consulte une fois par jour le matin pour limiter l'anxiété sans être complètement absent·e.", score: 0.5 },
          { text: "Je consulte uniquement si quelqu'un me contacte directement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "likert",
        text: "Vos actions pour préserver votre énergie sont cohérentes avec ce que vous savez vous faire du bien — vous ne vous contentez pas de lire des conseils sans les appliquer.",
        tags: ["régulation", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre entreprise, partir à l'heure est parfois mal perçu. Vous avez besoin de partir à l'heure ce soir pour respecter un engagement personnel.",
        tags: ["régulation", "norme"],
        answers: [
          { text: "Je reste encore une heure pour ne pas créer de mauvaise impression.", score: 0 },
          { text: "Je pars à l'heure sans l'annoncer — si personne ne le remarque, tant mieux.", score: 1 },
          { text: "Je pars à l'heure après avoir signalé que mon travail du jour est fait.", score: 2 },
          { text: "Je reste jusqu'à ce que les autres partent — aligner son départ sur le groupe évite les commentaires.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }, 
      {
        type: "likert",
        text: "Vous posez des limites sur votre temps de travail et vous les tenez, même quand la culture de votre équipe pousse à faire autrement.",
        tags: ["régulation", "limites"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez le point de rupture pour réguler, au lieu d'intervenir avant", desc: "Continuer à compenser, différer les congés, travailler le week-end pour récupérer du retard : ces comportements donnent l'impression de tenir, mais ils entretiennent l'épuisement plutôt que de le corriger. Réguler avant d'être à bout demande de reconnaître que la récupération est un investissement, pas une faiblesse." },
          moyen: { label: "Pratiques en développement", titre: "Vous réglez les pics, les mécanismes profonds de la surcharge restent en place", desc: "Vous prenez des congés, vous faites des pauses, vous réduisez votre charge pendant les périodes les plus intenses. Mais les comportements qui alimentent l'épuisement sur le long terme — l'incapacité à couper vraiment pendant les vacances, la difficulté à poser des limites face à la culture de l'équipe, la tendance à compenser plutôt que réduire — sont encore là. L'enjeu est de traiter ces mécanismes de fond." },
          haut: { label: "Réflexes installés", titre: "Vous intervenez sur votre énergie de façon préventive, sans attendre d'être à bout", desc: "Vous prenez vos congés même quand le contexte n'est pas idéal, vous coupez vraiment pendant les vacances, vous posez des limites sur votre temps même quand la culture de l'équipe pousse à faire autrement. Cette cohérence entre ce que vous savez nécessaire et ce que vous faites réellement est plus difficile à maintenir qu'il n'y paraît." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous sentez que vous commencez à ne plus tenir. Vous hésitez à en parler à votre responsable — vous ne voulez pas passer pour quelqu'un qui ne gère pas.",
        tags: ["appui", "manager"],
        answers: [
          { text: "Je continue à gérer seul·e — en parler serait interprété comme un signe de faiblesse.", score: 0 },
          { text: "Je lui parle de ma charge concrète, sans parler de mon état, pour qu'il ajuste.", score: 1.5 },
          { text: "Je lui dis que j'ai besoin d'un point sur ma charge — sans attendre d'aller plus mal.", score: 2 },
          { text: "J'attends de voir si la situation s'améliore d'elle-même avant d'en parler.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "likert",
        text: "Vous parlez de votre état à votre responsable ou à un collègue de confiance quand vous ne vous sentez plus à même de tenir votre rythme.",
        tags: ["appui", "expression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "choix",
        text: "Vous dormez mal depuis plusieurs semaines, vous avez des maux de tête fréquents et vous vous sentez à bout. Vous n'avez pas consulté de médecin.",
        tags: ["appui", "médecin"],
        answers: [
          { text: "Je n'ai pas besoin de consulter — je sais que c'est lié au stress au travail, ça passera.", score: 0 },
          { text: "Je prends rendez-vous chez mon médecin pour en parler même si c'est probablement lié au travail.", score: 2 },
          { text: "J'attends encore quelques semaines — si ça continue, j'irai consulter.", score: 0 },
          { text: "Je consulte rapidement en précisant le contexte professionnel.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "choix",
        text: "Sarah remarque que vous n'êtes pas dans votre assiette et vous le dit spontanément. Vous répondez que tout va bien.",
        tags: ["appui", "collègue"],
        answers: [
          { text: "Ce n'est pas le bon contexte pour en parler — je garde ça pour moi.", score: 0 },
          { text: "Je lui dis que je traverse une période difficile sans entrer dans les détails.", score: 1.5 },
          { text: "Je profite de son ouverture pour lui parler de ce qui me pèse réellement.", score: 2 },
          { text: "Je la rassure — si je commence à en parler, ça va prendre des proportions.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "likert",
        text: "Vous connaissez les ressources disponibles dans votre organisation pour vous soutenir — médecin du travail, service d'écoute, RH — et vous n'hésiteriez pas à les utiliser si nécessaire.",
        tags: ["appui", "ressources"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "choix",
        text: "Votre médecin vous suggère un arrêt de travail d'une semaine pour récupérer. Vous pensez que ce n'est pas possible — trop de choses à faire, trop de personnes qui dépendent de vous.",
        tags: ["appui", "arrêt"],
        answers: [
          { text: "Je refuse — une semaine d'absence maintenant créerait plus de problèmes qu'elle n'en résoudrait.", score: 0 },
          { text: "Je prends l'arrêt, même si c'est inconfortable — mon médecin a une vision que je n'ai peut-être pas.", score: 2 },
          { text: "Je négocie avec lui une solution intermédiaire — quelques jours plutôt qu'une semaine.", score: 1 },
          { text: "Je lui explique mon contexte pour qu'il comprenne pourquoi ce n'est pas possible.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise propose un service d'écoute psychologique. Vous pensez que vous en auriez peut-être besoin mais vous ne l'avez pas encore utilisé.",
        tags: ["appui", "initiative"],
        answers: [
          { text: "Ce type de service, c'est pour les cas vraiment graves — je n'en suis pas là.", score: 0 },
          { text: "Je prends contact — c'est fait pour être utilisé avant d'en arriver aux cas graves.", score: 2 },
          { text: "Je me renseigne d'abord sur la confidentialité avant de décider.", score: 1.5 },
          { text: "Je préfère en parler à un proche — c'est plus naturel pour moi.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "likert",
        text: "Vous cherchez un appui professionnel ou personnel avant d'être en situation de crise, pas seulement quand vous n'avez plus d'autre choix.",
        tags: ["appui", "précocité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez du mal à demander de l'aide parce que vous avez l'impression que les autres s'en sortent mieux que vous avec la même charge.",
        tags: ["appui", "honte"],
        answers: [
          { text: "Si les autres y arrivent, je dois pouvoir y arriver aussi — demander de l'aide serait reconnaître que je suis moins capable.", score: 0 },
          { text: "Je me rappelle que ce que les autres montrent n'est pas forcément ce qu'ils vivent.", score: 2 },
          { text: "J'observe plus attentivement si vraiment les autres s'en sortent mieux avant de conclure.", score: 1 },
          { text: "Je demande de l'aide sur les tâches concrètes mais pas sur mon état général.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }, 
      {
        type: "likert",
        text: "Vous acceptez l'aide qu'on vous propose sans la décliner par réflexe, même quand vous pensez que vous devriez y arriver seul·e.",
        tags: ["appui", "acceptation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous gérez seul·e par crainte d'être perçu·e comme quelqu'un qui ne tient pas", desc: "Ne pas en parler par peur d'être jugé·e, gérer seul·e alors que des ressources existent, refuser un arrêt médical parce que ce n'est pas le bon moment : ce sont des façons de maintenir une façade qui coûtent cher dans la durée. Chercher un appui tôt est une forme d'intelligence pratique, pas un aveu d'échec." },
          moyen: { label: "Pratiques en développement", titre: "Vous cherchez un appui dans les cas évidents, vous hésitez encore dans les zones grises", desc: "Vous consultez votre médecin, vous parlez à votre responsable de votre charge, vous utilisez les ressources disponibles quand la situation est clairement difficile. Mais dans les zones grises — est-ce que c'est assez grave pour en parler ? vais-je être jugé·e ? — vous hésitez encore. L'enjeu est de normaliser le recours à ces ressources avant que la situation soit critique." },
          haut: { label: "Réflexes installés", titre: "Vous cherchez un appui tôt, sans attendre d'être en situation de crise", desc: "Vous parlez de votre état à votre responsable avant d'être en crise, vous utilisez les ressources disponibles sans attendre d'y être contraint·e, vous prenez les recommandations de votre médecin au sérieux même quand elles sont inconfortables. Cette façon de traiter votre santé comme une priorité pratique — pas comme un idéal à atteindre quand tout le reste sera réglé — est ce qui prévient les ruptures." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre collègue David est quelqu'un d'habituellement solide. Depuis un mois, il fait des erreurs inhabituelles, il est moins disponible et ses réponses sont laconiques. Personne d'autre ne semble le remarquer.",
        tags: ["épuisement autre", "observation"],
        answers: [
          { text: "S'il ne dit rien, c'est qu'il gère — ce n'est pas à moi d'intervenir.", score: 0 },
          { text: "Je lui en parle en tête-à-tête, en lui disant ce que j'ai observé sans interprétation.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il fasse un point avec lui.", score: 1 },
          { text: "Je l'aide davantage sur nos sujets communs pour soulager sa charge.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Vous remarquez les changements durables dans le comportement de vos collègues — pas seulement les mauvaises journées, mais les tendances qui s'installent.",
        tags: ["épuisement autre", "présence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Laura vous dit qu'elle ne tient plus mais vous demande de ne rien dire à personne. Vous êtes inquiet·e pour elle.",
        tags: ["épuisement autre", "intervention"],
        answers: [
          { text: "Je respecte sa demande — elle m'a fait confiance et je ne vais pas la trahir.", score: 0 },
          { text: "Je lui propose qu'on réfléchisse ensemble à qui elle pourrait parler dans l'organisation.", score: 2 },
          { text: "Je lui dis que je vais devoir en parler si ça ne s'améliore pas — pour la préparer.", score: 1.5 },
          { text: "Je surveille la situation et j'agirai si ça se dégrade davantage.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Un membre de votre équipe fait visiblement trop d'heures depuis plusieurs semaines. L'équipe considère ça comme normal — 'c'est comme ça pour tout le monde en ce moment'.",
        tags: ["épuisement autre", "normes"],
        answers: [
          { text: "Si l'équipe s'en accommode, c'est que c'est encore gérable — je laisse.", score: 0 },
          { text: "Je lui en parle directement pour voir comment il vit la situation.", score: 2 },
          { text: "J'en parle à notre responsable en lui signalant ce que j'observe.", score: 1.5 },
          { text: "Je lui propose de l'aide sur ses tâches pour l'alléger un peu.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous observez des signaux préoccupants chez un·e collègue, vous créez une occasion de lui parler avant que la situation ne soit manifeste.",
        tags: ["épuisement autre", "intervention précoce"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous voulez parler à Jonathan de ce que vous observez chez lui, mais vous ne savez pas comment le formuler sans paraître intrusif·ve ou inquiétant·e.",
        tags: ["épuisement autre", "formulation"],
        answers: [
          { text: "Je renonce — mieux vaut ne pas risquer de maladresse.", score: 0 },
          { text: "Je lui pose une question ouverte sur son travail et je laisse l'espace pour qu'il aille plus loin s'il le souhaite.", score: 2 },
          { text: "Je lui dis directement que je le trouve épuisé — mieux vaut être honnête.", score: 0.5 },
          { text: "J'en parle à un autre collègue pour valider mon observation avant d'agir.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez parlé à Camille de ce que vous observiez. Elle vous a dit que ça allait. Mais vous n'êtes pas convaincu·e. Deux semaines plus tard, rien n'a changé.",
        tags: ["épuisement autre", "relais"],
        answers: [
          { text: "Elle m'a dit que ça allait — je n'ai plus de légitimité à insister.", score: 0 },
          { text: "Je reviens vers elle une deuxième fois en lui proposant quelque chose de concret.", score: 2 },
          { text: "J'en parle à notre responsable — j'ai fait ce que je pouvais à mon niveau.", score: 1.5 },
          { text: "Je lui propose un déjeuner pour créer un cadre plus informel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Vous savez faire la différence entre ce que vous pouvez accompagner vous-même et ce qui nécessite un relais professionnel — et vous passez à l'acte.",
        tags: ["épuisement autre", "relais"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe entière semble épuisée depuis plusieurs semaines. Votre responsable dit que c'est temporaire et que ça ira mieux après le pic.",
        tags: ["épuisement autre", "collectif"],
        answers: [
          { text: "Je lui fais confiance — il connaît le contexte mieux que moi et a probablement raison.", score: 0 },
          { text: "Je lui dis que je partage son espoir mais que j'ai besoin de comprendre ce qui va changer concrètement.", score: 2 },
          { text: "J'attends de voir — si ça dure après le pic, j'en reparlerai.", score: 0.5 },
          { text: "Je parle à mes collègues pour voir si eux aussi pensent que c'est temporaire.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous alertez sur l'état d'un·e collègue, vous vous appuyez sur des faits observés plutôt que sur un diagnostic de ce qu'il ou elle ressent.",
        tags: ["épuisement autre", "faits"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous observez les signaux chez les autres mais vous n'intervenez pas avant que ce soit très visible", desc: "Laisser un collègue qui ne dit rien gérer seul, ne pas intervenir parce que personne d'autre ne le fait, respecter une confidence au détriment de la sécurité de la personne : ces comportements laissent des personnes en difficulté sans filet. Créer une occasion de parler, même maladroitement, vaut presque toujours mieux que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous intervenez quand les signaux sont visibles, les situations plus discrètes restent dans l'angle mort", desc: "Vous intervenez quand un collègue montre des signes évidents de difficulté. Mais les signaux plus discrets — un retrait progressif, une baisse d'engagement sans cause visible — ne déclenchent pas encore systématiquement une réaction de votre part. L'enjeu est d'intervenir plus tôt, sur des situations moins constituées." },
          haut: { label: "Réflexes installés", titre: "Vous créez des occasions de parler pour vos collègues en difficulté, avant que la situation ne soit visible de tous", desc: "Vous repérez les changements discrets chez vos collègues et vous créez des occasions de leur parler, factuellement, sans forcer. Vous savez ne pas rester seul·e avec une situation qui vous inquiète et vous mobilisez les bons relais quand nécessaire. Cette vigilance bienveillante est un vrai levier de protection collective dans une équipe." },
        },
      }
    ],

  },
    // ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "retour-apres-absence" dans Object.assign(window.CUSTOM_QUESTIONS,

  "retour-apres-absence": {
    0: [
      {
        type: "choix",
        text: "Vous revenez lundi après trois semaines d'absence maladie. C'est votre premier jour. En arrivant le matin, vous réalisez que vous ne savez pas grand chose de ce qui s'est passé pendant votre absence.",
        tags: ["retour", "anticipation"],
        answers: [
          { text: "J'attends lundi pour voir comment ça se passe — mieux vaut ne pas y penser à l'avance.", score: 0 },
          { text: "Je consulte rapidement mes mails pour ne pas arriver complètement dans le noir.", score: 0.5 },
          { text: "Je contacte mon responsable vendredi pour avoir un point rapide sur ce qui a changé.", score: 2 },
          { text: "Je prépare mentalement une liste de ce que je vais devoir reprendre en main.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "choix",
        text: "C'est votre premier matin de retour. Votre responsable ne vient pas spontanément vous voir. Vous ne savez pas si un entretien de retour est prévu, ni ce qui a changé pendant votre absence.",
        tags: ["retour", "manager"],
        answers: [
          { text: "J'attends qu'il prenne l'initiative — s'il ne l'a pas fait, c'est peut-être qu'il n'y a rien d'urgent.", score: 0 },
          { text: "Je vais le voir directement ce matin pour lui proposer un point rapide.", score: 2 },
          { text: "Je lui envoie un mail pour signaler ma reprise et lui demander si un point est prévu.", score: 1.5 },
          { text: "Je reviens et je prends la température directement sur place.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "likert",
        text: "Avant de reprendre le travail après une absence, vous prenez le temps d'identifier ce qui a pu changer pour ne pas arriver complètement à l'improviste.",
        tags: ["retour", "préparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "choix",
        text: "Votre médecin vous a recommandé un retour progressif — mi-temps thérapeutique ou aménagement de poste. Vous hésitez à en parler à votre responsable, de peur que ça complique les choses.",
        tags: ["retour", "médical"],
        answers: [
          { text: "Je reviens à temps plein directement — je ne veux pas créer de contrainte organisationnelle.", score: 0 },
          { text: "Je lui en parle en lui présentant comme une recommandation médicale, pas comme une demande personnelle.", score: 2 },
          { text: "J'en parle aux RH d'abord pour qu'ils gèrent la conversation avec mon responsable.", score: 1.5 },
          { text: "J'attends de voir comment se passe la première semaine avant d'évoquer le sujet.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "choix",
        text: "Pendant votre absence, plusieurs dossiers ont avancé sans vous. Certains vous reviendront, d'autres ont été redistribués. Vous ne savez pas encore lesquels.",
        tags: ["retour", "charge"],
        answers: [
          { text: "Je reprends tout ce qui était à moi avant — c'est mon périmètre.", score: 0 },
          { text: "Je fais le point avec mon responsable sur ce qui me revient et dans quel délai.", score: 2 },
          { text: "J'attends que mes collègues me passent ce qu'ils ont géré.", score: 0.5 },
          { text: "Je regarde ce qui traîne et je reprends ce qui semble urgent.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "likert",
        text: "Avant votre retour, vous prévenez votre responsable de votre reprise et vous demandez un point pour cadrer les premières journées.",
        tags: ["retour", "communication"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "choix",
        text: "Vous reprenez après un congé maternité de cinq mois. Avant votre départ, vous occupiez un poste avec des responsabilités importantes. Vous ignorez si les choses ont changé.",
        tags: ["retour", "attentes"],
        answers: [
          { text: "Je reprends comme si rien n'avait changé — mon poste est le mien.", score: 0 },
          { text: "Je demande un entretien avec mon responsable avant la reprise pour faire le point sur mon périmètre.", score: 2 },
          { text: "Je reprends progressivement en observant comment les choses se sont réorganisées.", score: 1 },
          { text: "J'en parle aux RH pour m'assurer que mes droits sont respectés.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "choix",
        text: "Vous revenez d'un arrêt pour épuisement. Vous vous sentez mieux mais pas encore à 100%. Vous hésitez entre signaler votre état réel et faire comme si tout allait bien.",
        tags: ["retour", "état"],
        answers: [
          { text: "Je fais comme si tout allait bien — montrer sa vulnérabilité au travail est risqué.", score: 0 },
          { text: "Je dis à mon responsable que je suis en phase de reprise et que j'ai besoin d'un rythme progressif.", score: 2 },
          { text: "Je le dis aux RH sans en parler à mon responsable.", score: 1 },
          { text: "J'attends de voir si le rythme normal est tenable avant de décider si j'en parle.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "likert",
        text: "Vous êtes réaliste sur votre état avant de reprendre — vous ne vous forcez pas à projeter un retour à 100% si ce n'est pas le cas.",
        tags: ["retour", "réalisme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue, Jonathan, reprend après un arrêt long. Vous travaillez étroitement avec lui. Personne dans l'équipe n'a été informé des conditions de son retour.",
        tags: ["retour", "entourage"],
        answers: [
          { text: "J'attends que ce soit lui qui en parle — c'est son histoire, pas la mienne.", score: 0 },
          { text: "Je lui envoie un message avant son retour pour lui dire que je suis content de le retrouver.", score: 2 },
          { text: "J'en parle à notre responsable pour savoir comment accueillir Jonathan.", score: 1 },
          { text: "Je l'accueille normalement le jour J — trop de prévenances pourraient être maladroites.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous arrivez à votre retour sans avoir préparé le terrain, ce qui amplifie le choc de la reprise", desc: "Arriver sans avoir pris d'initiative le premier matin, attendre que le responsable vienne, ne pas mentionner un retour progressif recommandé par le médecin : ces comportements transforment le premier jour en choc plutôt qu'en transition. Une reprise bien cadrée — un entretien de retour demandé dès le premier matin, une charge clarifiée rapidement — change significativement l'expérience des premières journées." },
          moyen: { label: "Pratiques en développement", titre: "Vous préparez votre retour dans les grandes lignes mais les zones d'ombre restent nombreuses", desc: "Vous prenez contact avant de reprendre et vous anticipez les grandes lignes. Mais les zones plus délicates — mentionner un état qui n'est pas encore à 100%, clarifier ce qui vous revient, préparer l'accueil de la tension collective accumulée en votre absence — restent encore dans l'angle mort. L'enjeu est de préparer la reprise jusqu'aux détails inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous préparez votre retour activement, y compris sur les points inconfortables", desc: "Vous contactez votre responsable avant de reprendre, vous clarifiez votre état réel, vous anticipez ce qui vous revient et ce qui a évolué, et vous mentionnez les recommandations médicales même quand c'est inconfortable. Cette préparation active transforme le premier jour d'une épreuve en une transition gérée." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Le premier jour de votre retour, vos collègues vous accueillent chaleureusement mais certains semblent mal à l'aise — ils ne savent pas quoi dire ni quoi ne pas dire sur votre absence.",
        tags: ["réintégration", "collectif"],
        answers: [
          { text: "Je laisse l'atmosphère se détendre d'elle-même — c'est normal au début.", score: 0.5 },
          { text: "Je prends l'initiative de dire quelques mots sur mon retour pour lever l'ambiguïté.", score: 2 },
          { text: "Je me comporte normalement et j'attends que ça se passe naturellement.", score: 1 },
          { text: "Je parle de mon absence en détail pour que tout soit clair.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "likert",
        text: "Lors d'un retour d'absence, vous prenez l'initiative de remettre du lien avec vos collègues plutôt que d'attendre qu'ils fassent le premier pas.",
        tags: ["réintégration", "initiative"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "choix",
        text: "En réunion le premier jour, vous réalisez que l'équipe a pris des habitudes de travail différentes pendant votre absence. Certaines décisions ont été prises sans vous.",
        tags: ["réintégration", "décalage"],
        answers: [
          { text: "Je questionne les décisions qui me semblent discutables — elles ont été prises sans moi.", score: 0 },
          { text: "Je prends le temps de comprendre la logique des changements avant de me positionner.", score: 2 },
          { text: "Je m'adapte sans commentaire — les choses ont évolué, c'est normal.", score: 1 },
          { text: "Je demande à mon responsable un résumé de ce qui a changé avant de réagir.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "choix",
        text: "Pendant votre absence, Camille a géré vos dossiers principaux. Elle a bien travaillé mais avec des méthodes différentes des vôtres. Elle est prête à vous faire un transfert complet.",
        tags: ["réintégration", "information"],
        answers: [
          { text: "Je reprends mes dossiers en remettant mes méthodes en place — c'est mon périmètre.", score: 0 },
          { text: "Je l'écoute, je comprends ce qu'elle a fait et pourquoi, avant de décider comment reprendre.", score: 2 },
          { text: "Je reprends les dossiers sans débrief — les notes suffisent.", score: 0 },
          { text: "Je lui propose de continuer à travailler ensemble sur la transition.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "likert",
        text: "À votre retour, vous acceptez que les choses aient évolué sans vous et vous vous informez avant de remettre vos repères en place.",
        tags: ["réintégration", "humilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "choix",
        text: "Pendant votre absence, une tension est née entre deux membres de l'équipe. Tout le monde sait que vous entendrez parler des deux versions. Chacun essaie de vous raconter la sienne.",
        tags: ["réintégration", "relation"],
        answers: [
          { text: "J'écoute les deux versions et je donne mon avis — je suis neutre, je n'ai pas été impliqué.", score: 0 },
          { text: "Je dis clairement que je ne veux pas être l'arbitre d'une situation qui s'est développée sans moi.", score: 2 },
          { text: "J'écoute sans m'impliquer et j'en parle à notre responsable.", score: 1 },
          { text: "Je change de sujet dès que quelqu'un commence à me raconter.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "choix",
        text: "À votre retour après une longue absence, votre responsable vous demande d'être opérationnel·le à 100% dès la première semaine. Vous estimez avoir besoin de deux semaines pour retrouver votre rythme.",
        tags: ["réintégration", "rythme"],
        answers: [
          { text: "Je m'aligne sur ses attentes — c'est lui qui décide du rythme.", score: 0 },
          { text: "Je lui explique mon estimation et on cherche un compromis.", score: 2 },
          { text: "Je fais de mon mieux la première semaine et je vois si je tiens.", score: 0.5 },
          { text: "J'accepte verbalement et je gère mon rythme réel sans le lui dire.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "likert",
        text: "Vous négociez le rythme de votre reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner.",
        tags: ["réintégration", "ajustement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez l'impression que certains collègues vous regardent différemment depuis votre retour d'arrêt maladie — moins de responsabilités confiées, moins inclus dans certaines décisions.",
        tags: ["réintégration", "légitimité"],
        answers: [
          { text: "Je laisse le temps faire son travail — ma légitimité se reconstruira par mon travail.", score: 1 },
          { text: "J'en parle directement à mon responsable pour comprendre si quelque chose a changé.", score: 2 },
          { text: "Je fais le dos rond — pointer ces comportements ne ferait qu'aggraver la situation.", score: 0 },
          { text: "J'en parle aux RH pour que la situation soit formellement clarifiée.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }, 
      {
        type: "choix",
        text: "Après une longue absence, vous sentez que votre place dans l'équipe a bougé. Quelqu'un d'autre a pris de l'importance sur vos anciens sujets. C'est inconfortable.",
        tags: ["réintégration", "identité"],
        answers: [
          { text: "Je reprends le terrain sur mes anciens sujets pour retrouver ma place.", score: 0 },
          { text: "Je prends le temps de comprendre la nouvelle configuration avant de me repositionner.", score: 2 },
          { text: "J'accepte que les choses aient changé et je cherche un nouveau positionnement.", score: 1.5 },
          { text: "J'en parle à mon responsable pour qu'il clarifie les rôles.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez que le collectif vienne à vous plutôt que de prendre l'initiative du réancrage", desc: "Attendre que les collègues fassent le premier pas, laisser le malaise collectif se dissiper seul, subir les deux versions d'une tension née pendant votre absence sans prendre position : la réintégration ne se fait pas toute seule. L'initiative de remettre du lien, même maladroitement, est presque toujours mieux reçue que le silence." },
          moyen: { label: "Pratiques en développement", titre: "Vous vous réintégrez correctement mais vous peinez encore à négocier le rythme qui vous convient", desc: "Vous prenez l'initiative de réancrage et vous acceptez que les choses aient évolué. Mais quand votre responsable exprime des attentes rapides, ou que la configuration de l'équipe a changé, vous pouvez encore vous aligner sans négocier. L'enjeu est de tenir la conversation sur le rythme réel même quand la pression pousse à aller vite." },
          haut: { label: "Réflexes installés", titre: "Vous prenez l'initiative du réancrage collectif et vous négociez le rythme qui vous convient", desc: "Vous prenez l'initiative de remettre du lien avec vos collègues, vous acceptez que les choses aient évolué sans vous avant de vous repositionner, et vous négociez le rythme de reprise avec votre responsable plutôt que de vous aligner sur ses attentes sans les questionner. Cette posture active de réintégration est ce qui reconstruit la place dans un collectif." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Pour prouver que votre retour est solide, vous vous engagez sur des délais très courts et vous acceptez plusieurs missions en même temps dès la première semaine.",
        tags: ["reprise", "surcompensation"],
        answers: [
          { text: "C'est le bon moyen de montrer que je suis de retour à 100%.", score: 0 },
          { text: "Je reconnais ce réflexe de surcompensation et je calibre mes engagements sur ma capacité réelle.", score: 2 },
          { text: "J'accepte ce qui vient mais je me donne la permission de lever la main si c'est trop.", score: 1 },
          { text: "Je refuse toutes les nouvelles missions la première semaine — je me laisse le temps.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "likert",
        text: "À votre retour, vous calibrez vos engagements sur votre capacité réelle du moment, pas sur celle d'avant votre absence.",
        tags: ["reprise", "calibration"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "choix",
        text: "En fin de première semaine de retour, vous réalisez que vous êtes plus fatigué·e que vous ne l'aviez anticipé. La semaine suivante s'annonce encore plus chargée.",
        tags: ["reprise", "signalement"],
        answers: [
          { text: "Je continue — c'est normal d'être fatigué la première semaine, ça ira mieux.", score: 0 },
          { text: "Je le signale à mon responsable et je lui demande si on peut alléger la semaine suivante.", score: 2 },
          { text: "Je gère le week-end pour récupérer et j'attends de voir comment se passe la deuxième semaine.", score: 0.5 },
          { text: "Je prends un jour de congé au début de la deuxième semaine sans en parler.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "choix",
        text: "Le lendemain de votre retour, votre agenda est déjà plein de réunions de rattrapage — tout le monde veut vous briefer. Vous sentez que vous n'arrivez pas à traiter ce que vous entendez.",
        tags: ["reprise", "réunions"],
        answers: [
          { text: "Je tiens l'agenda — c'est le prix du retour, il faut tout rattraper rapidement.", score: 0 },
          { text: "Je revois l'agenda avec mon responsable pour étaler les briefings sur deux semaines.", score: 2 },
          { text: "Je délègue les briefings les moins critiques à quelqu'un qui peut me faire un résumé.", score: 1 },
          { text: "Je vais aux réunions mais je n'essaie pas de tout retenir — je ferai le tri ensuite.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez à votre responsable quand la reprise est plus lourde que prévu, sans attendre que ce soit visible de l'extérieur.",
        tags: ["reprise", "limite"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "choix",
        text: "Pendant votre absence, certains de vos sujets ont été bien gérés par d'autres. Vous avez du mal à laisser certaines choses en place plutôt que de tout reprendre.",
        tags: ["reprise", "délégation"],
        answers: [
          { text: "Je reprends tout — c'est mon périmètre et je dois le maîtriser.", score: 0 },
          { text: "Je garde ce qui fonctionne en place et je reprends uniquement ce qui a besoin de moi.", score: 2 },
          { text: "Je reprends progressivement, sujet par sujet, selon mes priorités.", score: 1.5 },
          { text: "Je laisse tout en place pour l'instant et je vois ce qui remonte vers moi.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous dit qu'il a besoin de vous à pleine capacité rapidement — un projet important démarre dans deux semaines. Vous êtes en reprise progressive.",
        tags: ["reprise", "pression"],
        answers: [
          { text: "J'accélère ma reprise — les besoins du projet priment.", score: 0 },
          { text: "Je lui explique ma situation de reprise et on cherche ensemble comment couvrir les besoins du projet autrement.", score: 2 },
          { text: "Je fais de mon mieux en espérant que ça suffira.", score: 0 },
          { text: "Je lui demande plus de temps — deux semaines supplémentaires.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "likert",
        text: "Vous augmentez votre charge progressivement à votre retour plutôt que de retrouver d'un coup le rythme d'avant l'absence.",
        tags: ["reprise", "progressivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "choix",
        text: "En revenant, vous avez envie de vous réimpliquer sur tout rapidement. Votre liste de 'choses à rattraper' est très longue.",
        tags: ["reprise", "priorités"],
        answers: [
          { text: "Je m'y attaque dans l'ordre — tout est important.", score: 0 },
          { text: "Je priorise avec mon responsable ce qui a vraiment besoin de moi en premier.", score: 2 },
          { text: "Je commence par ce qui me semble le plus urgent selon moi.", score: 1 },
          { text: "Je laisse mes collègues me dire ce dont ils ont besoin de ma part.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }, 
      {
        type: "choix",
        text: "Sarah, qui vient de reprendre après un congé parental, semble vouloir tout rattraper en même temps. En une semaine, elle a pris des engagements sur trois mois de travail.",
        tags: ["reprise", "observation"],
        answers: [
          { text: "Je la laisse faire — elle sait mieux que moi ce qu'elle peut assumer.", score: 0 },
          { text: "Je lui dis ce que j'observe, en privé, sans lui donner de leçon.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il ajuste sa charge.", score: 1 },
          { text: "Je lui propose de l'aider sur certains sujets pour alléger.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reprenez à pleine charge trop vite, par volonté de prouver que vous êtes de retour", desc: "Accepter trop d'engagements dès la première semaine, vouloir tout rattraper d'un coup, tenir l'agenda de rattrapage sans lever la main : la surcompensation au retour est l'une des causes les plus fréquentes de rechute. Prouver qu'on est de retour par le volume est moins efficace que prouver qu'on est de retour par la qualité des arbitrages." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez la surcompensation évidente mais les glissements progressifs vous échappent encore", desc: "Vous ne vous lancez pas dans une reprise héroïque à plein régime dès le premier jour. Mais le glissement progressif — les engagements qui s'accumulent semaine après semaine, l'agenda de rattrapage qui déborde, la charge qui revient à son niveau d'avant sans que vous l'ayez décidé — peut encore vous échapper. L'enjeu est de surveiller la courbe sur plusieurs semaines, pas seulement les premiers jours." },
          haut: { label: "Réflexes installés", titre: "Vous calibrez votre reprise sur votre capacité réelle et vous signalez quand ça ne tient pas", desc: "Vous résistez au réflexe de surcompensation, vous signalez quand la reprise est plus lourde que prévu, et vous ajustez vos engagements sur votre capacité réelle du moment. Vous avez compris que reprendre à 80% de façon durable vaut mieux que reprendre à 120% pendant deux semaines et rechuter." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous êtes de retour depuis trois semaines. Vous dormez encore mal et vous vous sentez régulièrement dépassé·e par des situations que vous gériez sans problème avant. Vous mettez ça sur le compte de la reprise.",
        tags: ["signaux persistants", "vigilance"],
        answers: [
          { text: "La reprise est toujours longue — je me laisse encore un mois.", score: 0 },
          { text: "Je prends ces signaux au sérieux et j'en parle à mon médecin.", score: 2 },
          { text: "J'en parle à mon responsable pour alléger ma charge encore un peu.", score: 1.5 },
          { text: "Je redouble d'efforts pour récupérer mon niveau d'avant — c'est une question de volonté.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "likert",
        text: "Après votre retour, vous restez attentif·ve à votre état réel semaine après semaine, sans vous convaincre que 'ça va mieux' si ce n'est pas le cas.",
        tags: ["signaux persistants", "lucidité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez repris depuis un mois après un burnout. Vous sentez que vous reproduisez progressivement les mêmes comportements qu'avant votre arrêt — longues journées, difficulté à dire non, irritabilité.",
        tags: ["signaux persistants", "rechute"],
        answers: [
          { text: "Je me surveille et j'essaie de corriger — je connais maintenant ces signaux.", score: 1 },
          { text: "J'en parle à mon médecin ou à mon accompagnant, et à mon responsable si nécessaire.", score: 2 },
          { text: "J'attends de voir si ça se stabilise tout seul — je suis peut-être trop sensible.", score: 0 },
          { text: "Je réduis ma charge de moi-même sans en parler à personne.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "choix",
        text: "Votre médecin vous a dit de revenir le voir un mois après votre reprise. Vous vous sentez 'assez bien' et vous hésitez à y aller — vous ne voulez pas dramatiser.",
        tags: ["signaux persistants", "médecin"],
        answers: [
          { text: "Je n'y vais pas — je vais bien et ça prendrait du temps pour rien.", score: 0 },
          { text: "J'y vais — c'est précisément quand on va 'assez bien' que ce suivi a le plus de valeur.", score: 2 },
          { text: "Je reporte le rendez-vous de quelques semaines pour voir comment évolue ma situation.", score: 0.5 },
          { text: "J'y vais mais je minimise — je ne veux pas qu'il me prolonge l'arrêt.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "likert",
        text: "Vous maintenez le suivi médical ou l'accompagnement prévu après votre retour, même quand vous vous sentez suffisamment bien pour penser que ce n'est plus nécessaire.",
        tags: ["signaux persistants", "suivi"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "choix",
        text: "Vos proches vous disent que vous semblez encore fatigué·e depuis votre retour au travail, deux mois après votre reprise. Vous ne le ressentez pas vraiment.",
        tags: ["signaux persistants", "entourage"],
        answers: [
          { text: "Mes proches voient les choses de l'extérieur — leur regard n'est pas objectif.", score: 0 },
          { text: "Je prends leur observation au sérieux même si je ne ressens pas ce qu'ils décrivent.", score: 2 },
          { text: "J'en parle à mon médecin lors de la prochaine consultation.", score: 1.5 },
          { text: "Je les rassure — ils s'inquiètent naturellement après mon absence.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez repris à plein régime depuis six semaines. Les mesures d'aménagement prises au retour ont été abandonnées progressivement — plus de départ à l'heure, agenda surchargé.",
        tags: ["signaux persistants", "organisation"],
        answers: [
          { text: "C'est normal — on ne peut pas maintenir indéfiniment des aménagements.", score: 0 },
          { text: "Je fais le point sur ce que j'ai abandonné et je réintègre ce qui était utile.", score: 2 },
          { text: "Je l'accepte — si je tiens, c'est que je suis vraiment récupéré·e.", score: 0 },
          { text: "J'en parle à mon responsable pour formaliser ces aménagements dans la durée.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites régulièrement le point sur votre état depuis votre retour, pas seulement la première semaine.",
        tags: ["signaux persistants", "régularité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "choix",
        text: "Rayan est revenu d'un long arrêt il y a deux mois. Il semble de plus en plus sous pression mais dit que tout va bien quand on lui demande. Vous avez observé des signaux inquiétants.",
        tags: ["signaux persistants", "collègue"],
        answers: [
          { text: "Il dit que ça va — je lui fais confiance.", score: 0 },
          { text: "Je lui crée une occasion de parler, en dehors des moments formels, en m'appuyant sur ce que j'observe.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il fasse un point avec lui.", score: 1 },
          { text: "Je lui propose mon aide sur les dossiers urgents pour réduire sa pression.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }, 
      {
        type: "likert",
        text: "Si votre état ne s'améliore pas après votre retour, vous agissez concrètement — médecin, responsable, RH — plutôt que d'attendre que ça passe.",
        tags: ["signaux persistants", "action"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ignorez les signaux qui persistent après le retour en espérant qu'ils disparaissent seuls", desc: "Attribuer les signaux persistants à la fatigue normale de la reprise, ne pas honorer le suivi médical prévu, abandonner progressivement les aménagements mis en place : ces comportements laissent une situation fragile se ré-installer silencieusement. Les signaux qui durent après un retour ont besoin d'attention, pas d'attente." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance les premières semaines mais vous vous relâchez ensuite", desc: "Vous faites le point sur votre état les premières semaines avec soin. Mais une fois que vous vous sentez 'assez bien', la vigilance peut se relâcher — suivi médical reporté, aménagements abandonnés, signaux des proches minimisés. L'enjeu est de maintenir cette attention au-delà de la phase de reprise visible." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance dans la durée et vous agissez sur les signaux qui persistent", desc: "Vous maintenez le suivi médical même quand vous vous sentez suffisamment bien, vous prenez au sérieux les observations de vos proches même quand vous ne les ressentez pas, et vous agissez concrètement si les signaux persistent. Cette vigilance dans la durée est ce qui transforme un retour en vraie stabilisation." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────
  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────


  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  //  Chaque AD rédigé utilise un template inline avec ses vrais titres.
  //  Les ADs sans contenu rédigé conservent les templates génériques.
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("qvt", "QVT & RPS", "🌿", [
    ["rps-signaux-faibles", "Repérer les signaux faibles de RPS", "Tous publics",
      "Identifier les tensions, alertes et situations d'isolement dans le quotidien professionnel.",
      { domain: "qvt", chapters: [
        ["Repérer les signaux faibles",        "Observer ce qui change autour de soi et sentir quand une situation mérite attention."],
        ["Réguler la charge",                  "Prioriser, demander de l'aide et clarifier les urgences avant d'être à bout."],
        ["Préserver les relations de travail", "Désamorcer les irritants et maintenir un dialogue constructif."],
        ["Mobiliser les bons relais",          "Savoir quand passer la main et comment le faire sans exposer inutilement."]
      ]}
    ],
    
    ["manager-signaux-rps", "Détecter et orienter sans psychologiser", "Managers / Encadrants",
      "Repérer les signaux faibles, intervenir sur le travail et orienter vers les bons relais sans se substituer aux spécialistes.",
      { domain: "qvt", chapters: [
        ["Repérer les signaux faibles dans son équipe", "Observer sans attendre que ça remonte, et créer les occasions pour que ça remonte."],
        ["Intervenir sur le travail, pas sur la personne", "Agir sur les faits observés, laisser la personne interpréter, séparer les sujets."],
        ["Orienter sans se défausser",                    "Mobiliser les relais au bon moment et faire un suivi après l'orientation."],
        ["Prévenir par l'organisation",                   "Agir sur les conditions de travail en amont, avant que les situations difficiles apparaissent."]
      ]}
    ],

    ["charge-priorites", "Réguler la charge et prioriser sous pression", "Tous publics",
      "Prendre du recul sur l'urgence, les arbitrages et les limites soutenables.",
      { domain: "qvt", chapters: [
        ["Réguler les urgences",                   "Identifier ce qui est vraiment urgent et organiser sa charge sans tout absorber."],
        ["Dire non et négocier les délais",         "Formuler ses contraintes et renégocier un engagement sans se dévaluer."],
        ["Déléguer et faire confiance",             "Confier un résultat à atteindre plutôt qu'une façon de faire à reproduire."],
        ["Prioriser sous pression hiérarchique",    "Tenir ses arbitrages quand les demandes contradictoires s'accumulent."]
      ]}
    ],

    ["cooperation-climat", "Coopérer sans laisser les tensions s’installer", "Collaborateurs",
      "Agir dans les irritants du quotidien, désamorcer et préserver la qualité relationnelle.",
      { domain: "qvt", chapters: [
        ["Désamorcer les irritants du quotidien",        "Nommer ce qui dérange, à la source, avant que ça ne s'installe."],
        ["Coopérer sans se défausser",                   "Tenir ses engagements et rester disponible au-delà de son périmètre officiel."],
        ["Gérer les désaccords sans les laisser traîner","Exprimer une position en face, sur les faits, au bon moment."],
        ["Maintenir la qualité relationnelle sous pression", "Préserver la qualité de ses échanges même quand la charge est forte."]
      ]}
    ],

    ["manager-qvt-rps", "Manager la charge et les tensions d'équipe", "Managers",
      "Identifier, réguler et orienter sans porter seul les situations sensibles.",
      { domain: "qvt", chapters: [
        ["Identifier les signaux de charge et de tension", "Observer sans attendre que ça remonte, et créer les conditions pour que ça remonte."],
        ["Intervenir sans psychologiser",                  "Agir sur les faits observés, laisser la personne interpréter, séparer les sujets."],
        ["Réguler la charge collective",                   "Filtrer, arbitrer et rendre visible ce que l'équipe peut réellement absorber."],
        ["Orienter vers les bons relais",                  "Savoir quand passer la main et chercher soi-même un soutien quand on porte trop."]
      ]}
    ],

    ["teletravail-hybridation", "Réussir le travail hybride sans créer d’inégalités", "Collaborateurs",
      "Organiser sa présence à distance, maintenir le lien collectif et gérer les irritants de l'hybridation.",
      { domain: "qvt", chapters: [
        ["S'organiser en mode hybride",            "Structurer ses journées, protéger son temps de fond et piloter sa présence."],
        ["Maintenir le lien en mode hybride",      "Créer délibérément les conditions du lien collectif, quel que soit le mode de présence."],
        ["Gérer les irritants de l'hybridation",   "Traiter les dysfonctionnements propres au travail hybride sans les normaliser."],
        ["Naviguer les inégalités du distanciel",  "Repérer et corriger les inégalités créées par le mode de travail à son niveau."]
      ]}
    ],

    ["epuisement-prevention", "Prévenir l'épuisement professionnel", "Collaborateurs",
      "Reconnaître ses signaux d'alerte, réguler sa charge dans la durée et oser chercher un appui.",
      { domain: "qvt", chapters: [
        ["Reconnaître ses propres signaux d'alerte", "Identifier les signes précoces avant qu'ils ne s'aggravent."],
        ["Réguler avant d'être à bout",              "Agir sur les leviers concrets sans attendre le point de rupture."],
        ["Oser chercher un appui",                   "Franchir le pas sans attendre d'être en situation de crise."],
        ["Repérer l'épuisement chez les autres",     "Créer des occasions de parler pour ses collègues en difficulté."]
      ]}
    ],

    ["retour-apres-absence", "Reprendre le travail après une absence", "Tous publics",
      "Préparer son retour, réintégrer son collectif et calibrer la reprise en charge sans surcompenser.",
      { domain: "qvt", chapters: [
        ["Préparer les conditions du retour",  "Anticiper ce qui a changé et cadrer la reprise avant le premier jour."],
        ["Réintégrer son collectif de travail","Prendre l'initiative du réancrage sans attendre que le collectif vienne à soi."],
        ["Réguler la reprise en charge",       "Calibrer ses engagements sur sa capacité réelle et signaler quand ça ne tient pas."],
        ["Détecter les signaux qui persistent","Rester vigilant·e dans la durée et agir si la stabilisation n'est pas au rendez-vous."]
      ]}
    ],

  ]);

})();
