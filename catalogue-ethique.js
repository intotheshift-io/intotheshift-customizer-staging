/**
 * catalogue-ethique.js — INTO THE SHIFT
 * Domaine : Éthique & Compliance
 * 8 autodiagnostics — 320 questions
 * Dépend de : catalogue-core.js
 */

(function () {

  Object.assign(window.CUSTOM_QUESTIONS, {

  "conflits-interets": {
    0: [
      {
        type: "choix",
        text: "Vous faites partie du jury de sélection d'un prestataire. L'un des candidats est une entreprise fondée par votre beau-frère. Vous pensez pouvoir rester objectif.",
        tags: ["conflit intérêts", "identification"],
        answers: [
          { text: "Je participe au jury en faisant preuve d'objectivité — ma rigueur suffit à garantir l'impartialité.", score: 0 },
          { text: "Je me retire du jury et je le signale à mon responsable en expliquant le lien.", score: 2 },
          { text: "Je le signale à mon responsable et je participe si lui juge que c'est acceptable.", score: 1 },
          { text: "Je ne vote pas sur ce candidat mais je reste dans le jury pour les autres.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes en charge d'un appel d'offres. Une des entreprises candidates est aussi cliente de votre côté conseil. Vous n'êtes pas sûr·e si ça constitue un conflit.",
        tags: ["conflit intérêts", "zone grise"],
        answers: [
          { text: "Je laisse — je suis professionnel·le et je saurai être impartial·e.", score: 0 },
          { text: "Je pose la question à mon responsable conformité ou à mon manager avant de continuer.", score: 2 },
          { text: "Je le note dans ma tête et je serai attentif·ve à mon impartialité.", score: 0 },
          { text: "Je demande à un collègue de reprendre ce dossier sans expliquer pourquoi.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "likert",
        text: "Quand vous identifiez une situation pouvant ressembler à un conflit d'intérêts, vous la signalez aux personnes compétentes avant de décider si elle l'est vraiment.",
        tags: ["conflit intérêts", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "choix",
        text: "Une décision que vous devez prendre pour l'organisation aurait un impact direct positif sur un investissement personnel que vous avez réalisé récemment.",
        tags: ["conflit intérêts", "intérêt personnel"],
        answers: [
          { text: "Je prends la décision — elle est bonne pour l'organisation indépendamment de mon investissement.", score: 0 },
          { text: "Je le déclare et je me dessaisis de la décision.", score: 2 },
          { text: "Je prends la décision en documentant mon raisonnement pour montrer l'objectivité.", score: 0 },
          { text: "Je mentionne mon investissement à mon responsable et je suis ses instructions.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "choix",
        text: "Vous avez été recruté·e depuis six mois. Votre ancien employeur est en train de répondre à un appel d'offres que vous gérez dans votre nouveau poste.",
        tags: ["conflit intérêts", "réseau"],
        answers: [
          { text: "Je gère le dossier normalement — ma loyauté est entière envers mon nouvel employeur.", score: 0 },
          { text: "Je le déclare immédiatement à mon responsable pour qu'une décision soit prise sur ma participation.", score: 2 },
          { text: "Je veille à traiter mon ancien employeur moins favorablement pour éviter tout biais apparent.", score: 0 },
          { text: "Je demande à mon ancien employeur de se retirer de l'appel d'offres.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "likert",
        text: "Vous déclarez proactivement les situations potentielles de conflit d'intérêts sans attendre qu'on vous le demande.",
        tags: ["conflit intérêts", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez aucun conflit d'intérêts réel mais la situation pourrait en avoir l'apparence aux yeux d'un tiers objectif.",
        tags: ["conflit intérêts", "apparence"],
        answers: [
          { text: "Je laisse — si je suis réellement impartial·e, l'apparence ne compte pas.", score: 0 },
          { text: "Je traite l'apparence de conflit comme un conflit réel — les deux doivent être gérés.", score: 2 },
          { text: "Je documente mon impartialité au cas où la situation serait questionnée.", score: 1 },
          { text: "J'en parle à mon responsable pour décider ensemble si ça mérite une action.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "choix",
        text: "Votre responsable vous demande de continuer à gérer un dossier alors que vous lui avez signalé un conflit d'intérêts potentiel. Il estime que ça ne pose pas de problème.",
        tags: ["conflit intérêts", "pression"],
        answers: [
          { text: "Je continue — mon responsable a l'autorité pour prendre cette décision.", score: 0 },
          { text: "Je demande que cette décision soit tracée formellement, par écrit.", score: 2 },
          { text: "Je continue mais je me retire si la situation devient plus sensible.", score: 0 },
          { text: "Je remonte à la conformité ou au déontologue pour un avis indépendant.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "likert",
        text: "Quand vous signalez un conflit d'intérêts et qu'on vous demande de continuer quand même, vous demandez une validation formelle écrite.",
        tags: ["conflit intérêts", "traçabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      },
      {
        type: "choix",
        text: "Vous observez qu'un collègue est en situation de conflit d'intérêts évidente mais ne le déclare pas. Vous n'êtes pas certain·e qu'il en soit conscient.",
        tags: ["conflit intérêts", "collègue"],
        answers: [
          { text: "Je laisse — c'est à lui de gérer sa situation.", score: 0 },
          { text: "Je lui en parle discrètement pour qu'il puisse régulariser.", score: 2 },
          { text: "Je le signale directement à la conformité sans lui en parler.", score: 1 },
          { text: "J'attends de voir si quelqu'un d'autre le remarque avant d'intervenir.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité", resume: "Vous ne déclarez pas les conflits d'intérêts que vous identifiez — vous comptez sur votre propre objectivité.", desc: "Votre gestion des conflits d'intérêts pourrait encore reposer sur la conviction que votre objectivité personnelle suffit — ne pas déclarer parce que vous êtes certain·e de ne pas être influencé·e, évaluer vous-même si la situation mérite une déclaration. Cette évaluation individuelle est précisément ce que les règles de déclaration cherchent à éviter : l'objectivité d'une personne dans une situation de conflit d'intérêts potentiel est difficile à évaluer par elle-même." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez les situations évidentes mais les zones grises et les accumulations de liens mineurs créent encore des hésitations", resume: "Vous déclarez les situations évidentes — les zones grises et les accumulations de liens mineurs créent encore des hésitations.", desc: "Vous déclarez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est la zone grise — la situation où les liens sont mineurs, indirects, ou anciens — et l'accumulation progressive de liens qui, pris isolément, semblent chacun insuffisants pour justifier une déclaration. Ces zones grises sont précisément celles que le doute doit orienter vers la déclaration plutôt que vers le silence." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e", resume: "Vous déclarez systématiquement — situations évidentes, zones grises, accumulations, apparences — avant même d'être certain·e.", desc: "Vous déclarez les situations évidentes et les zones grises. Vous déclarez les accumulations de liens mineurs. Vous déclarez les situations où l'apparence de conflit existe même sans conflit réel. Vous déclarez avant d'être certain·e de la nécessité — le doute lui-même est suffisant pour déclencher la déclaration. Cette rigueur de déclaration — qui suppose d'avoir accepté que l'évaluation n'est pas de votre seul ressort — est ce qui protège réellement votre intégrité." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Votre organisation vous demande d'assister à une formation sur les conflits d'intérêts. Vous pensez ne pas être concerné·e dans votre fonction.",
        tags: ["enjeux", "organisation"],
        answers: [
          { text: "Je demande à être dispensé·e — ma fonction ne m'expose pas à ce risque.", score: 0 },
          { text: "Je participe — les conflits d'intérêts peuvent toucher toutes les fonctions.", score: 2 },
          { text: "Je lis le support sans assister pour gagner du temps.", score: 0 },
          { text: "Je participe par obligation sans chercher à y trouver quelque chose d'utile.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "choix",
        text: "Un conflit d'intérêts non déclaré est découvert dans votre équipe. Certains collègues minimisent — 'ça n'a eu aucun impact concret sur les décisions prises'.",
        tags: ["enjeux", "coût"],
        answers: [
          { text: "Je rejoins leur analyse — si l'impact est nul, le problème est limité.", score: 0 },
          { text: "Je rappelle que le conflit d'intérêts est un manquement indépendamment de son impact réel sur les décisions.", score: 2 },
          { text: "Je laisse les responsables gérer — ce n'est pas mon rôle de prendre position.", score: 0 },
          { text: "Je cherche à savoir si l'impact était vraiment nul avant de me positionner.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "likert",
        text: "Vous comprenez que l'apparence de conflit d'intérêts est aussi problématique que le conflit réel pour la réputation et la confiance dans l'organisation.",
        tags: ["enjeux", "compréhension"],
        answers: [
          { text: "Pas du tout", score: 0 },
          { text: "Peu", score: 0.5 },
          { text: "Partiellement", score: 1 },
          { text: "Largement", score: 1.5 },
          { text: "Complètement", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "choix",
        text: "Vous pensez que la prévention des conflits d'intérêts est essentiellement l'affaire du département conformité, pas des opérationnels.",
        tags: ["enjeux", "responsabilité personnelle"],
        answers: [
          { text: "C'est correct — la conformité est là pour ça.", score: 0 },
          { text: "C'est faux — chaque collaborateur est responsable de déclarer ses propres situations.", score: 2 },
          { text: "C'est partiellement juste — la conformité a un rôle central mais les opérationnels contribuent.", score: 1 },
          { text: "Ça dépend du niveau hiérarchique — les managers ont plus de responsabilité.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes sollicité·e pour un rôle dans une association externe dont les activités recoupent celles de votre employeur. Personne ne vous a dit que c'était interdit.",
        tags: ["enjeux", "réputation"],
        answers: [
          { text: "J'accepte — si c'était interdit, on me l'aurait signalé.", score: 0 },
          { text: "Je vérifie auprès de la conformité ou de mon responsable avant d'accepter.", score: 2 },
          { text: "J'accepte en informant mon responsable après coup.", score: 0 },
          { text: "Je refuse par prudence sans chercher à savoir si c'est vraiment un problème.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "likert",
        text: "Avant d'accepter un rôle externe, vous vérifiez auprès des personnes compétentes si cela peut créer un conflit d'intérêts.",
        tags: ["enjeux", "vérification préalable"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "choix",
        text: "Vous ne savez pas exactement ce que votre organisation considère comme un conflit d'intérêts déclarable.",
        tags: ["enjeux", "information"],
        answers: [
          { text: "Je laisse — si quelque chose pose problème, on me le dira.", score: 0 },
          { text: "Je cherche à comprendre le cadre — politique interne, déontologue, conformité.", score: 2 },
          { text: "J'applique mon bon sens — les cas évidents suffiront.", score: 0 },
          { text: "J'attends la prochaine formation pour clarifier.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "choix",
        text: "Dans votre équipe, personne ne parle jamais de conflits d'intérêts et aucune déclaration n'a jamais été faite. Vous trouvez ça normal.",
        tags: ["enjeux", "culture"],
        answers: [
          { text: "Oui — c'est la preuve que tout le monde est irréprochable.", score: 0 },
          { text: "Non — l'absence de déclarations peut signifier que les situations ne sont pas identifiées, pas qu'elles n'existent pas.", score: 2 },
          { text: "Peut-être — ça dépend des fonctions exercées dans l'équipe.", score: 1 },
          { text: "Je ne sais pas — je n'ai pas assez de recul pour juger.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "likert",
        text: "Vous pensez qu'une culture saine de l'éthique se construit par des déclarations fréquentes, pas par l'absence de problèmes apparents.",
        tags: ["enjeux", "culture proactive"],
        answers: [
          { text: "Pas du tout", score: 0 },
          { text: "Peu", score: 0.5 },
          { text: "Partiellement", score: 1 },
          { text: "Largement", score: 1.5 },
          { text: "Complètement", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      },
      {
        type: "choix",
        text: "Déclarer un conflit d'intérêts implique de se retirer d'un dossier sur lequel vous avez beaucoup travaillé et dont vous êtes le plus compétent·e.",
        tags: ["enjeux", "dilemme"],
        answers: [
          { text: "Je ne déclare pas — perdre ce dossier nuirait à l'organisation.", score: 0 },
          { text: "Je déclare quand même — mon expertise ne prime pas sur l'obligation de déclaration.", score: 2 },
          { text: "Je déclare mais je reste en soutien technique non décisionnel.", score: 1 },
          { text: "Je déclare et je transmets soigneusement le dossier à quelqu'un d'autre.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous percevez les conflits d'intérêts comme un problème réservé à la conformité, pas comme votre responsabilité personnelle", resume: "Vous percevez les conflits d'intérêts comme un problème de conformité — pas comme votre responsabilité personnelle.", desc: "Votre rapport aux conflits d'intérêts pourrait encore être principalement externe — une règle imposée par la conformité, une contrainte administrative, un sujet qui concerne les autres. Cette perception fait que les situations sont traitées quand elles sont visibles et formelles, mais pas quand elles sont discrètes ou informelles. La gestion des conflits d'intérêts est d'abord une responsabilité personnelle, avant d'être une obligation organisationnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez vos obligations mais votre appropriation de la responsabilité personnelle n'est pas encore complète", resume: "Vous connaissez vos obligations — votre appropriation de la responsabilité personnelle n'est pas encore complète.", desc: "Vous connaissez vos obligations de déclaration. Ce qui pourrait encore manquer, c'est l'appropriation complète de la responsabilité personnelle — traiter les conflits d'intérêts comme une question d'intégrité personnelle et non seulement comme une obligation de conformité. Cette appropriation se traduit dans la façon de traiter les zones grises : une personne qui a internalisé la responsabilité personnelle déclare dans le doute, pas seulement dans la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle", resume: "Vous avez pleinement intégré que la gestion des conflits d'intérêts est une responsabilité personnelle, pas seulement organisationnelle.", desc: "Vous traitez les conflits d'intérêts comme une question d'intégrité personnelle avant d'être une obligation de conformité. Vous déclarez dans le doute. Vous gérez vos liens personnels et professionnels avec la même rigueur que vos décisions formelles. Cette appropriation personnelle de la responsabilité — qui suppose d'avoir internalisé pourquoi les conflits d'intérêts sont problématiques, pas seulement qu'ils le sont — est ce qui crée une intégrité réelle et non seulement formelle." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous n'avez pas un conflit d'intérêts majeur mais une accumulation de liens mineurs avec un prestataire — contacts professionnels passés, relation cordiale, recommandation ancienne.",
        tags: ["situations complexes", "cumul"],
        answers: [
          { text: "Je laisse — aucun lien n'est problématique pris isolément.", score: 0 },
          { text: "J'évalue si l'accumulation de ces liens peut créer une apparence de conflit et je la déclare si c'est le cas.", score: 2 },
          { text: "Je mentionne les liens les plus importants sans entrer dans le détail des autres.", score: 1 },
          { text: "Je demande à la conformité si une telle accumulation est déclarable.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "likert",
        text: "Vous évaluez l'accumulation de liens mineurs comme un potentiel conflit d'intérêts et non seulement les liens évidents pris isolément.",
        tags: ["situations complexes", "accumulation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Vous réalisez après avoir pris une décision que vous étiez peut-être en situation de conflit d'intérêts au moment où vous l'avez prise.",
        tags: ["situations complexes", "rétroactif"],
        answers: [
          { text: "Je laisse — la décision est prise et rien ne peut la changer.", score: 0 },
          { text: "Je le signale rétroactivement pour permettre une revue de la décision si nécessaire.", score: 2 },
          { text: "Je mentionne la situation à mon responsable sans demande formelle.", score: 1 },
          { text: "J'évalue moi-même si la décision était biaisée et n'en parle que si c'est le cas.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Un client vous propose une relation commerciale personnelle en dehors de votre relation professionnelle. L'offre est avantageuse et semble séparée.",
        tags: ["situations complexes", "tiers"],
        answers: [
          { text: "J'accepte — ma vie privée est séparée de ma vie professionnelle.", score: 0 },
          { text: "Je décline ou je consulte la conformité avant d'accepter.", score: 2 },
          { text: "J'accepte en informant mon responsable.", score: 0 },
          { text: "J'accepte si la transaction est transparente et documentée.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes en situation de conflit d'intérêts potentiel sur un dossier urgent. Le signaler prendrait du temps et retarderait la décision.",
        tags: ["situations complexes", "pression temps"],
        answers: [
          { text: "Je prends la décision d'abord et je signale après — l'urgence prime.", score: 0 },
          { text: "Je signale immédiatement même si ça retarde la décision — l'urgence ne suspend pas l'obligation.", score: 2 },
          { text: "Je fais une déclaration rapide informelle pour tracer et je continue.", score: 1 },
          { text: "Je cherche à transférer la décision en urgence à quelqu'un d'autre.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "likert",
        text: "L'urgence opérationnelle ne vous empêche pas de signaler un conflit d'intérêts avant de prendre une décision.",
        tags: ["situations complexes", "urgence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Un conflit d'intérêts que vous aviez déclaré et géré il y a deux ans réapparaît dans un nouveau contexte. Vous pensez ne pas avoir à le re-déclarer.",
        tags: ["situations complexes", "conflit passé"],
        answers: [
          { text: "Je laisse — j'avais déjà géré cette situation.", score: 0 },
          { text: "Je vérifie si le nouveau contexte crée une situation nouvelle qui mérite une nouvelle déclaration.", score: 2 },
          { text: "Je le mentionne informellement à mon responsable.", score: 1 },
          { text: "Je re-déclare par précaution même si ce n'est peut-être pas nécessaire.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes manager. Un membre de votre équipe est en conflit d'intérêts sur un dossier mais ne le voit pas.",
        tags: ["situations complexes", "équipe"],
        answers: [
          { text: "Je le gère à sa place — ma responsabilité managériale l'exige.", score: 0.5 },
          { text: "Je lui explique pourquoi la situation constitue un conflit d'intérêts et je m'assure qu'il le déclare lui-même.", score: 2 },
          { text: "Je le signale directement à la conformité en son nom.", score: 1 },
          { text: "Je l'écarte du dossier sans lui expliquer pourquoi pour éviter une conversation difficile.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "likert",
        text: "Quand un membre de votre équipe est en conflit d'intérêts sans le voir, vous lui expliquez la situation et vous vous assurez qu'il déclare lui-même.",
        tags: ["situations complexes", "management"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Vous avez quitté votre poste il y a trois mois. Un ancien partenaire vous contacte pour vous proposer une mission en lien avec votre ancienne fonction.",
        tags: ["situations complexes", "post-emploi"],
        answers: [
          { text: "J'accepte — je ne travaille plus pour l'organisation.", score: 0 },
          { text: "Je vérifie mes obligations post-emploi avant d'accepter.", score: 2 },
          { text: "J'accepte en informant mon ancien employeur par courtoisie.", score: 0 },
          { text: "Je refuse systématiquement tout contact avec d'anciens partenaires pendant un an.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer", resume: "Dans les situations complexes, vous attendez la certitude ou l'urgence avant de déclarer.", desc: "Dans les situations complexes, votre réflexe pourrait encore être d'attendre — attendre d'être certain·e que le conflit est réel, attendre que la situation devienne urgente, attendre que quelqu'un d'autre soulève le problème. Ces comportements font que des situations qui auraient pu être gérées tôt et simplement ne le sont pas, au risque que la situation évolue défavorablement." },
          moyen: { label: "Pratiques en développement", titre: "Vous déclarez dans les situations ordinaires mais la pression du temps et la pression hiérarchique créent encore des failles", resume: "Vous déclarez dans les situations ordinaires — la pression du temps et la pression hiérarchique créent encore des failles.", desc: "Vous déclarez dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression du temps — la décision urgente qui n'attend pas la déclaration formelle — et la pression hiérarchique — la situation où votre supérieur semble attendre que vous traitiez le sujet vous-même. Ces pressions sont précisément celles que la rigueur de déclaration doit traverser." },
          haut: { label: "Réflexes installés", titre: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup", resume: "Vous déclarez dans toutes les situations — urgences, pressions hiérarchiques, situations passées découvertes après coup.", desc: "Vous déclarez même sous pression de temps et même quand la hiérarchie semble attendre une décision rapide. Vous déclarez rétroactivement quand vous découvrez après coup une situation qui aurait dû l'être. Cette rigueur sans exception — qui suppose d'accepter parfois de ralentir une décision pour permettre la déclaration — est ce qui maintient l'intégrité des processus dans toutes les situations." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous êtes manager. Vous avez vous-même une situation de conflit d'intérêts que vous avez décidé de ne pas déclarer parce qu'elle vous semble mineure.",
        tags: ["culture", "exemplarité"],
        answers: [
          { text: "Je maintiens ma décision — ma propre appréciation est suffisante.", score: 0 },
          { text: "Je reconsidère — le seuil de tolérance d'un manager doit être plus exigeant que la norme.", score: 2 },
          { text: "Je la déclare uniquement pour montrer l'exemple à mon équipe.", score: 1 },
          { text: "Je la déclare car je ne suis pas en mesure d'évaluer seul si c'est mineur.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "likert",
        text: "En tant que manager, vous déclarez vos situations de conflit d'intérêts avec un niveau d'exigence plus élevé que ce que vous demanderez à votre équipe.",
        tags: ["culture", "exemplarité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur vient de vous déclarer un conflit d'intérêts. C'est la première fois que ça se produit dans votre équipe.",
        tags: ["culture", "normaliser"],
        answers: [
          { text: "Je le remercie et je gère la situation discrètement.", score: 1 },
          { text: "Je valorise explicitement sa démarche pour encourager cette culture dans l'équipe.", score: 2 },
          { text: "Je traite la déclaration sans commentaire particulier.", score: 0.5 },
          { text: "Je lui demande pourquoi il a attendu si longtemps avant de me le signaler.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe ne sait pas clairement ce qui doit être déclaré comme conflit d'intérêts. Les déclarations sont rares ou inexistantes.",
        tags: ["culture", "formation"],
        answers: [
          { text: "Je laisse — si tout va bien, il n'y a pas de problème.", score: 0 },
          { text: "Je prends l'initiative de clarifier le cadre et les situations concernées avec mon équipe.", score: 2 },
          { text: "J'attends que la conformité organise une formation.", score: 0.5 },
          { text: "Je rappelle les règles lors du prochain entretien individuel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur vous déclare un conflit d'intérêts. Vous estimez que la situation ne méritait pas d'être déclarée — c'était minime.",
        tags: ["culture", "réponse déclaration"],
        answers: [
          { text: "Je lui dis que sa déclaration n'était pas nécessaire pour qu'il calibre mieux la prochaine fois.", score: 0 },
          { text: "Je le remercie — mieux vaut déclarer trop que pas assez.", score: 2 },
          { text: "Je valide la déclaration sans commentaire.", score: 1.5 },
          { text: "J'en profite pour lui expliquer le seuil exact de ce qui mérite déclaration.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "likert",
        text: "Vous répondez positivement à toute déclaration de conflit d'intérêts dans votre équipe, même quand vous estimez qu'elle n'était pas nécessaire.",
        tags: ["culture", "encouragement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation vous demande de tenir un registre des déclarations de conflits d'intérêts dans votre équipe. Vous trouvez ça bureaucratique.",
        tags: ["culture", "registre"],
        answers: [
          { text: "Je le tiens a minima — l'essentiel est de gérer les situations, pas de les documenter.", score: 0 },
          { text: "Je le tiens rigoureusement — la traçabilité protège les collaborateurs et l'organisation.", score: 2 },
          { text: "Je délègue sa tenue à mon assistante.", score: 0.5 },
          { text: "Je le tiens pour les cas importants et laisse tomber les mineurs.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "choix",
        text: "Votre hiérarchie vous décourage implicitement de déclarer des conflits d'intérêts pour 'ne pas créer de complications'.",
        tags: ["culture", "pression"],
        answers: [
          { text: "Je m'aligne — ma hiérarchie a une vision globale des priorités.", score: 0 },
          { text: "Je maintiens mes obligations de déclaration indépendamment des pressions hiérarchiques.", score: 2 },
          { text: "Je réduis mes déclarations aux cas vraiment flagrants.", score: 0 },
          { text: "Je remonte la pression reçue à la conformité ou au déontologue.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez vos obligations de déclaration même quand la pression hiérarchique vous pousse à ne pas 'créer de complications'.",
        tags: ["culture", "résistance pression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      },
      {
        type: "choix",
        text: "Un nouveau collaborateur intègre votre équipe. Il ne connaît pas les règles sur les conflits d'intérêts dans votre organisation.",
        tags: ["culture", "transmission"],
        answers: [
          { text: "Je laisse la conformité ou les RH s'en charger lors de son intégration.", score: 0 },
          { text: "Je l'intègre dans mon propre onboarding en lui expliquant concrètement ce que ça signifie dans notre contexte.", score: 2 },
          { text: "Je lui transmets les documents officiels sur le sujet.", score: 1 },
          { text: "Je lui en parle si une situation concrète se présente.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de déclaration dans votre équipe n'est pas activement portée", resume: "La culture de déclaration dans votre équipe n'est pas activement portée.", desc: "La culture de déclaration des conflits d'intérêts dans votre équipe pourrait encore reposer sur la conscience individuelle de chacun — sans rappels réguliers, sans création d'occasions de déclarer, sans traitement visible des déclarations qui montrerait qu'elles sont prises au sérieux. Ces comportements font que la culture de déclaration ne se développe pas collectivement." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez une culture de déclaration mais votre posture d'exemplarité en tant que manager est encore insuffisante", resume: "Vous maintenez une culture de déclaration — votre posture d'exemplarité en tant que manager est encore insuffisante.", desc: "Vous maintenez une culture de déclaration dans votre équipe. Ce qui pourrait encore être insuffisant, c'est l'exemplarité — déclarer vous-même vos propres situations, y compris les zones grises, pour montrer à votre équipe ce que la déclaration signifie concrètement — et la visibilité du traitement des déclarations, qui montre que l'acte de déclarer est valorisé." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement", resume: "Vous construisez activement la culture de déclaration dans votre équipe par l'exemplarité et l'encouragement.", desc: "Vous déclarez vos propres situations, y compris les zones grises, de façon visible pour votre équipe. Vous créez des occasions de déclaration régulières. Vous traitez les déclarations de façon à montrer qu'elles sont bienvenues et prises au sérieux. Cette construction active de la culture de déclaration — qui commence par votre propre exemplarité — est ce qui crée une équipe où déclarer est un réflexe naturel." },
        },
      }
    ],

  },

  "cadeaux-invitations": {
    0: [
      {
        type: "choix",
        text: "Un fournisseur vous offre une bouteille de vin à 25€ à Noël. Votre organisation a fixé un seuil de 30€ par cadeau. Vous êtes en cours de négociation avec ce fournisseur.",
        tags: ["cadeaux", "seuil"],
        answers: [
          { text: "J'accepte — le montant est sous le seuil et c'est un geste courant à Noël.", score: 0 },
          { text: "Je refuse ou je déclare — le contexte de négociation active rend ce cadeau inapproprié même sous seuil.", score: 2 },
          { text: "J'accepte mais je le déclare.", score: 1.5 },
          { text: "Je l'accepte sans déclaration — le seuil est là pour ça.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "choix",
        text: "Un client vous invite à un dîner d'affaires dans un restaurant gastronomique. Le repas vaut environ 150€ par personne. Vous êtes en charge de la relation commerciale avec ce client.",
        tags: ["cadeaux", "invitation"],
        answers: [
          { text: "J'accepte — les dîners d'affaires font partie des relations professionnelles normales.", score: 0 },
          { text: "Je vérifie la politique de mon organisation et je déclare si nécessaire.", score: 2 },
          { text: "J'accepte si je peux inviter à mon tour prochainement pour équilibrer.", score: 0 },
          { text: "Je décline poliment pour éviter tout risque de dépendance.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "likert",
        text: "Avant d'accepter un cadeau ou une invitation, vous vérifiez les règles de votre organisation plutôt que de vous fier à votre seul jugement.",
        tags: ["cadeaux", "règles"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "choix",
        text: "Un prestataire vous offre des cadeaux réguliers — chacun sous le seuil autorisé. Sur l'année, le total dépasse largement le seuil annuel.",
        tags: ["cadeaux", "cumul"],
        answers: [
          { text: "Je continue d'accepter — chaque cadeau est individuellement conforme.", score: 0 },
          { text: "Je signale l'accumulation même si chaque cadeau est sous seuil — le cumul crée une dépendance.", score: 2 },
          { text: "Je refuse les prochains jusqu'à ce que l'année reparte à zéro.", score: 1 },
          { text: "J'en parle à mon responsable pour qu'il décide.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "choix",
        text: "Un partenaire vous offre des billets pour un événement sportif que vous adorez mais qui n'a aucun lien avec votre travail commun.",
        tags: ["cadeaux", "utilité personnelle"],
        answers: [
          { text: "J'accepte — les relations professionnelles incluent une dimension personnelle.", score: 0 },
          { text: "Je décline ou je déclare — la nature personnelle du cadeau renforce le risque de dépendance.", score: 2 },
          { text: "J'accepte si la valeur est sous le seuil.", score: 0 },
          { text: "Je transmets les billets à un collègue pour ne pas en bénéficier personnellement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "likert",
        text: "Vous évaluez le risque de dépendance que crée un cadeau ou une invitation, indépendamment de sa valeur monétaire.",
        tags: ["cadeaux", "risque dépendance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "choix",
        text: "Vous souhaitez offrir un cadeau à un client. Vous ne connaissez pas sa politique sur les cadeaux.",
        tags: ["cadeaux", "offrir"],
        answers: [
          { text: "J'offre — si ça pose un problème de son côté, il me le dira.", score: 0 },
          { text: "Je vérifie sa politique ou je lui pose la question avant d'offrir.", score: 2 },
          { text: "J'offre quelque chose de symbolique — en dessous de 30€, c'est toujours acceptable.", score: 0 },
          { text: "Je renonce — c'est plus simple d'éviter tout cadeau.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "choix",
        text: "Un partenaire important vous propose un voyage d'études à l'étranger entièrement pris en charge. Le programme comprend deux jours professionnels et deux jours touristiques.",
        tags: ["cadeaux", "pression"],
        answers: [
          { text: "J'accepte — les voyages d'études font partie du développement professionnel.", score: 0 },
          { text: "Je soumets l'invitation à validation avant d'accepter — le programme touristique change la nature de l'invitation.", score: 2 },
          { text: "J'accepte en prenant en charge moi-même les deux jours touristiques.", score: 1.5 },
          { text: "Je décline par principe — les voyages offerts créent toujours un risque.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "likert",
        text: "Vous soumettez à validation les invitations à des événements ou voyages dont la nature mêle enjeux professionnels et avantages personnels.",
        tags: ["cadeaux", "validation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      },
      {
        type: "choix",
        text: "Vous devez refuser un cadeau à un partenaire avec qui vous avez une relation de longue date. Vous craignez de le vexer.",
        tags: ["cadeaux", "refus"],
        answers: [
          { text: "J'accepte pour ne pas fragiliser la relation.", score: 0 },
          { text: "Je refuse en expliquant les règles de mon organisation — un partenaire de bonne foi comprendra.", score: 2 },
          { text: "J'accepte cette fois et je clarifie les règles pour les prochaines fois.", score: 0 },
          { text: "Je refuse sans expliquer pour ne pas le mettre mal à l'aise.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité, sans évaluer le contexte et la dépendance", resume: "Vous utilisez le seuil monétaire comme seul critère d'acceptabilité — sans évaluer le contexte et la dépendance.", desc: "Votre évaluation des cadeaux et invitations pourrait encore se limiter au seuil monétaire — acceptable en dessous, problématique au-dessus. Ce critère unique ignore les dimensions qui font la réelle problématique : la relation avec la personne qui offre, le contexte décisionnel dans lequel vous vous trouvez, l'accumulation de gestes apparemment modestes de la même source. Ces dimensions peuvent rendre problématique un cadeau bien en dessous du seuil, et acceptable un cadeau qui le dépasse légèrement dans certains contextes." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le contexte au-delà du seuil monétaire mais les cas d'accumulation progressive et les avantages indirects créent encore des angles morts", resume: "Vous évaluez le contexte au-delà du seuil monétaire — les cas d'accumulation progressive et les avantages indirects créent encore des angles morts.", desc: "Vous évaluez le contexte en plus du montant. Ce qui pourrait encore créer des angles morts, c'est l'accumulation progressive — des gestes qui pris isolément semblent acceptables mais qui, répétés dans le temps ou cumulés de la même source, créent une dépendance progressive — et les avantages indirects — les situations où l'avantage ne vous est pas remis directement mais bénéficie à quelqu'un de proche." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel", resume: "Vous évaluez les cadeaux et invitations dans leur contexte global — montant, relation, contexte décisionnel, accumulation, bénéficiaire réel.", desc: "Votre évaluation intègre le montant, la relation avec l'expéditeur, le contexte décisionnel dans lequel vous vous trouvez, l'historique d'accumulation et l'identité du bénéficiaire réel. Vous déclarez ou déclinez quand l'un de ces facteurs crée un doute, indépendamment du montant. Cette évaluation contextuelle complète — qui suppose d'avoir intégré tous les facteurs pertinents et non le seul montant — est ce qui permet une gestion réellement rigoureuse." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Un fournisseur vous invite régulièrement à des événements. Vous réalisez que vous inclinez à lui accorder le bénéfice du doute dans les situations contractuelles litigieuses.",
        tags: ["dépendance", "influence"],
        answers: [
          { text: "Je prends note mais je fais confiance à mon jugement professionnel.", score: 0 },
          { text: "Je reconnais le biais créé et je déclare la situation ou je me dessaisis des litiges le concernant.", score: 2 },
          { text: "Je cesse d'accepter ses invitations à l'avenir.", score: 1 },
          { text: "Je compense en étant plus exigeant·e avec ce fournisseur.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "likert",
        text: "Vous reconnaissez quand les cadeaux ou invitations d'un partenaire commencent à influencer votre jugement professionnel sur lui.",
        tags: ["dépendance", "biais"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "choix",
        text: "Vous avez accepté de nombreuses invitations d'un partenaire. Il vient vous soumettre une demande déraisonnable. Vous vous sentez obligé·e de lui accorder quelque chose.",
        tags: ["dépendance", "réciprocité"],
        answers: [
          { text: "Je lui accorde une partie de sa demande — la réciprocité est une norme sociale légitime.", score: 0 },
          { text: "Je refuse sa demande pour les mêmes raisons que si je n'avais pas accepté ses invitations.", score: 2 },
          { text: "Je lui explique que les invitations passées ne créent pas d'obligation.", score: 2 },
          { text: "Je cesse d'accepter ses invitations à l'avenir pour éviter ce type de situation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "choix",
        text: "Dans votre secteur, offrir et accepter des cadeaux importants est une pratique courante. Vos collègues le font tous.",
        tags: ["dépendance", "usage courant"],
        answers: [
          { text: "Je m'aligne sur la norme sectorielle — ne pas le faire me mettrait en désavantage.", score: 0 },
          { text: "Je respecte les règles de mon organisation même si elles sont plus restrictives que la norme sectorielle.", score: 2 },
          { text: "J'applique les règles de mon organisation mais je ne juge pas les pratiques des autres.", score: 1.5 },
          { text: "Je questionne si les règles de mon organisation sont adaptées au secteur.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "choix",
        text: "Les cadeaux d'un partenaire ont progressivement augmenté en valeur sur deux ans. Chaque augmentation semblait marginale à l'époque.",
        tags: ["dépendance", "progression"],
        answers: [
          { text: "Je laisse — chaque cadeau a été accepté et la progression était raisonnable.", score: 0 },
          { text: "Je prends du recul sur la progression globale et je clarifie la relation.", score: 2 },
          { text: "Je signale la situation même si c'est rétroactif.", score: 1.5 },
          { text: "Je refuse le prochain cadeau pour interrompre la progression.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "likert",
        text: "Vous prenez du recul régulièrement sur l'ensemble des avantages reçus d'un partenaire pour évaluer si une dépendance s'est installée progressivement.",
        tags: ["dépendance", "progression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "choix",
        text: "Un cadeau est offert non pas à vous directement mais à un membre de votre famille.",
        tags: ["dépendance", "tiers"],
        answers: [
          { text: "Je l'accepte — je ne suis pas personnellement bénéficiaire.", score: 0 },
          { text: "Je le traite comme un cadeau fait à moi-même — la frontière est fictive.", score: 2 },
          { text: "Je le signale par précaution même si c'est inhabituel.", score: 1.5 },
          { text: "Je refuse et j'explique pourquoi à l'offreur.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "choix",
        text: "Vous devez prendre une décision défavorable à un partenaire qui vous invite régulièrement depuis deux ans. Vous vous demandez si ça va nuire à votre relation.",
        tags: ["dépendance", "rupture relation"],
        answers: [
          { text: "Je prends la décision favorable pour préserver la relation — les enjeux commerciaux sont importants.", score: 0 },
          { text: "Je prends la décision objectivement requise — si la relation ne survit pas à une décision juste, c'est un signal.", score: 2 },
          { text: "Je demande à un collègue de prendre la décision à ma place pour éviter le biais.", score: 1.5 },
          { text: "Je prends la décision défavorable et je compense par des gestes commerciaux.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "likert",
        text: "Quand vous devez prendre une décision défavorable à un partenaire avec qui vous avez des liens d'hospitalité, vous la prenez de façon aussi objective que pour tout autre partenaire.",
        tags: ["dépendance", "décision"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      },
      {
        type: "choix",
        text: "Pour évaluer si un cadeau est acceptable, vous vous demandez si vous seriez à l'aise si votre responsable ou la presse voyait ce que vous avez accepté.",
        tags: ["dépendance", "test"],
        answers: [
          { text: "Non — ce test est trop restrictif et ne correspond pas à la réalité des relations professionnelles.", score: 0 },
          { text: "Oui — ce test simple est un bon filtre pour évaluer l'acceptabilité d'un avantage.", score: 2 },
          { text: "Parfois — uniquement pour les cadeaux de valeur significative.", score: 1 },
          { text: "Non — les règles écrites suffisent, pas besoin d'un test subjectif.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement", resume: "Vous n'identifiez pas le moment où les cadeaux et invitations commencent à influencer votre jugement.", desc: "L'influence des cadeaux et invitations sur votre jugement pourrait encore vous échapper — vous percevez la relation comme normale, vous ne remarquez pas que vos décisions tendent à favoriser certains interlocuteurs après une accumulation d'avantages. Cette absence de détection est précisément ce qui rend les cadeaux efficaces comme levier d'influence : leur effet opère souvent sous le seuil de conscience." },
          moyen: { label: "Pratiques en développement", titre: "Vous identifiez l'influence des cadeaux dans les situations évidentes mais la dépendance progressive reste un angle mort", resume: "Vous identifiez l'influence des cadeaux dans les situations évidentes — la dépendance progressive reste un angle mort.", desc: "Vous identifiez l'influence dans les situations où elle est évidente — un cadeau important juste avant une décision. Ce qui pourrait encore rester un angle mort, c'est la dépendance progressive — le moment où une relation d'échanges répétés, même modestes, commence à biaiser votre jugement sans que vous le perceviez clairement. Ces situations progressives sont précisément les plus difficiles à détecter." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement", resume: "Vous identifiez et nommez le moment où les avantages reçus commencent à influencer votre jugement.", desc: "Vous êtes attentif·ve aux signaux qui indiquent que votre jugement pourrait être biaisé — une tendance à favoriser un interlocuteur après des échanges répétés, une réticence à prendre une décision qui lui serait défavorable. Vous nommez ces signaux et vous agissez en conséquence — déclaration, distance dans la relation. Cette capacité à détecter l'influence progressive sur son propre jugement est ce qui protège réellement l'indépendance décisionnelle." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Un client stratégique, représentant 30% de votre chiffre d'affaires, vous invite à un événement dont la valeur dépasse votre seuil d'acceptation.",
        tags: ["limites", "client stratégique"],
        answers: [
          { text: "J'accepte — les enjeux commerciaux justifient de s'adapter.", score: 0 },
          { text: "Je soumets à validation — l'importance du client ne change pas les règles.", score: 2 },
          { text: "J'accepte et je déclare l'écart — la transparence compense.", score: 0 },
          { text: "Je consulte mon responsable commercial qui a la légitimité pour décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "likert",
        text: "Les enjeux commerciaux avec un partenaire ne modifient pas votre évaluation de l'acceptabilité d'un cadeau ou d'une invitation.",
        tags: ["limites", "enjeux commerciaux"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "choix",
        text: "Un prestataire vous offre un cadeau luxueux après que vous avez pris une décision en sa faveur. Il dit que c'est pour vous remercier.",
        tags: ["limites", "cadeau post-décision"],
        answers: [
          { text: "J'accepte — la décision était déjà prise et c'est un simple remerciement.", score: 0 },
          { text: "Je refuse et je le signale — un cadeau post-décision peut s'apparenter à une corruption, même involontaire.", score: 2 },
          { text: "J'accepte mais je le déclare rétroactivement.", score: 0 },
          { text: "Je refuse poliment sans tirer de conclusion sur ses intentions.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "choix",
        text: "Un partenaire ne vous offre pas directement un cadeau mais contribue au financement d'un événement de votre équipe.",
        tags: ["limites", "cadeau indirect"],
        answers: [
          { text: "C'est acceptable — le bénéficiaire est l'équipe, pas une personne.", score: 0 },
          { text: "Je vérifie les règles de mon organisation sur le parrainage et je déclare si nécessaire.", score: 2 },
          { text: "J'accepte si la contribution est documentée et transparente.", score: 1 },
          { text: "Je refuse par principe les contributions de partenaires aux événements internes.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "choix",
        text: "Vous souhaitez offrir un cadeau à un prospect pour faciliter l'entrée en relation. Votre organisation n'a pas de règle explicite sur ce cas.",
        tags: ["limites", "offrir non sollicité"],
        answers: [
          { text: "J'offre — l'absence de règle explicite signifie que c'est autorisé.", score: 0 },
          { text: "Je demande un avis à la conformité — l'absence de règle ne signifie pas que c'est acceptable.", score: 2 },
          { text: "J'offre quelque chose de symbolique et je le déclare.", score: 1 },
          { text: "Je renonce — l'incertitude justifie la prudence.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "likert",
        text: "Quand votre organisation n'a pas de règle explicite sur une situation de cadeau ou invitation, vous consultez la conformité plutôt que d'agir librement.",
        tags: ["limites", "absence règle"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "choix",
        text: "Votre industrie organise un congrès annuel. Votre partenaire vous propose un billet VIP avec accès lounge, hébergement et dîner de gala — valeur totale 800€.",
        tags: ["limites", "événement sectoriel"],
        answers: [
          { text: "J'accepte — les congrès sectoriels sont des événements professionnels légitimes.", score: 0 },
          { text: "Je vérifie les règles de mon organisation et je soumets à validation avant d'accepter.", score: 2 },
          { text: "J'accepte la partie professionnelle et je décline l'hébergement et le dîner de gala.", score: 1.5 },
          { text: "Je paie moi-même ma participation pour ne pas créer de dépendance.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "choix",
        text: "Vous observez qu'un collègue accepte des cadeaux qui semblent dépasser les seuils autorisés. Il est dans une autre équipe.",
        tags: ["limites", "collègue"],
        answers: [
          { text: "Je laisse — ce n'est pas mon équipe et je pourrais me tromper.", score: 0 },
          { text: "Je lui en parle discrètement ou je le signale aux voies appropriées.", score: 2 },
          { text: "J'en parle à mon responsable pour qu'il décide quoi faire.", score: 1 },
          { text: "J'attends d'avoir une certitude absolue avant d'intervenir.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "likert",
        text: "Quand vous observez qu'un collègue accepte des cadeaux inappropriés, vous intervenez même si ce n'est pas votre équipe.",
        tags: ["limites", "signalement collègue"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      },
      {
        type: "choix",
        text: "Votre partenaire insiste pour que vous acceptiez un cadeau que vous avez déjà refusé une fois. Il dit que 'c'est l'usage dans leur culture'.",
        tags: ["limites", "refus difficile"],
        answers: [
          { text: "Je finit par accepter pour ne pas paraître insolite ou offensant.", score: 0 },
          { text: "Je maintiens mon refus en expliquant les règles de mon organisation — les règles sont les mêmes dans toutes les cultures.", score: 2 },
          { text: "J'accepte en signe de respect culturel mais je le déclare.", score: 0 },
          { text: "Je contacte la conformité pour voir si une exception culturelle est possible.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer", resume: "Dans les situations limites, vous cherchez des justifications pour accepter plutôt que des raisons de décliner ou de déclarer.", desc: "Dans les situations limites, votre réflexe pourrait encore être de chercher des justifications pour accepter — 'c'est dans la norme du secteur', 'refuser serait impoli', 'le montant est juste en dessous du seuil'. Ces rationalisations sont des signaux en eux-mêmes : la recherche active de justifications indique souvent que la situation mérite déclaration ou refus plutôt que rationalisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous appliquez les règles dans les situations ordinaires mais les pressions commerciales et les justifications culturelles créent encore des failles", resume: "Vous appliquez les règles dans les situations ordinaires — les pressions commerciales et les justifications culturelles créent encore des failles.", desc: "Vous appliquez les règles dans les situations ordinaires. Ce qui pourrait encore créer des failles, c'est la pression commerciale — la relation client importante dont le refus semble risquer la relation — et les justifications culturelles — les pratiques sectorielles ou culturelles qui normalisent certains échanges. Ces justifications ne modifient pas l'évaluation éthique de la situation." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite", resume: "Vous appliquez les règles dans toutes les situations — pressions commerciales, insistances culturelles, situations sans règle explicite.", desc: "Vous appliquez les règles même sous pression commerciale et même quand les pratiques culturelles ou sectorielles sembleraient les relativiser. Vous appliquez une évaluation éthique dans les situations sans règle explicite. Cette constance sans exception ni rationalisation — qui suppose d'accepter parfois l'inconfort d'un refus — est ce qui maintient l'intégrité dans toutes les situations, y compris celles que les règles explicites ne couvrent pas entièrement." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre équipe n'a pas de compréhension claire des règles sur les cadeaux et invitations. Chacun interprète les règles à sa façon.",
        tags: ["culture cadeaux", "clarté"],
        answers: [
          { text: "Je laisse — si les règles ne sont pas claires, c'est à la conformité de les clarifier.", score: 0 },
          { text: "Je prends l'initiative de clarifier concrètement avec mon équipe ce qui est acceptable et ce qui ne l'est pas.", score: 2 },
          { text: "Je renvoie vers les documents officiels disponibles.", score: 0.5 },
          { text: "Je clarifie au cas par cas quand des situations se présentent.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "likert",
        text: "Vous clarifiez proactivement les règles sur les cadeaux et invitations avec votre équipe sans attendre que la conformité le fasse.",
        tags: ["culture cadeaux", "clarification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "choix",
        text: "Vous avez accepté des invitations d'un partenaire que vous savez dépasser le seuil habituel. Votre équipe est au courant.",
        tags: ["culture cadeaux", "exemplarité"],
        answers: [
          { text: "Je laisse — mon niveau hiérarchique me permet des exceptions.", score: 0 },
          { text: "Je régularise la situation et j'en tire une leçon pour mon exemplarité.", score: 2 },
          { text: "Je leur explique que c'est un cas particulier justifié par les enjeux.", score: 0 },
          { text: "Je normalise en leur disant que les règles sont parfois adaptées en pratique.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur vous demande s'il peut accepter une invitation. Vous pensez que c'est limite mais acceptable.",
        tags: ["culture cadeaux", "déclaration équipe"],
        answers: [
          { text: "Je lui dis que c'est acceptable et je n'en parle plus.", score: 0 },
          { text: "Je lui explique que c'est limite, pourquoi, et je lui laisse décider en connaissance de cause.", score: 2 },
          { text: "Je lui dis de soumettre à la conformité pour être sûr.", score: 1.5 },
          { text: "Je lui dis de décliner par précaution.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation demande un registre des cadeaux et invitations. Vos collaborateurs le vivent comme une surveillance.",
        tags: ["culture cadeaux", "registre"],
        answers: [
          { text: "Je les laisse penser ce qu'ils veulent — remplir le registre suffit.", score: 0 },
          { text: "J'explique que le registre protège les collaborateurs autant qu'il protège l'organisation.", score: 2 },
          { text: "Je leur dis que c'est une obligation et qu'il faut s'y conformer.", score: 0.5 },
          { text: "Je le remplis moi-même à leur place pour leur éviter la corvée.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "likert",
        text: "Vous expliquez à votre équipe que le registre des cadeaux est un outil de protection et non de surveillance.",
        tags: ["culture cadeaux", "sens registre"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "choix",
        text: "Votre direction commerciale vous presse d'accepter des invitations de clients pour 'entretenir les relations'. Vous êtes mal à l'aise.",
        tags: ["culture cadeaux", "pression commerciale"],
        answers: [
          { text: "Je m'aligne — la direction commerciale connaît mieux les enjeux relationnels.", score: 0 },
          { text: "J'exprime mon inconfort et je rappelle les règles en vigueur.", score: 2 },
          { text: "J'accepte les invitations dans la limite des règles sans en référer davantage.", score: 1 },
          { text: "Je remonte à la conformité le conflit entre la pression commerciale et les règles.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "choix",
        text: "Votre politique interne est plus restrictive que la loi. Un collaborateur la conteste en disant que ce que vous lui demandez n'est pas illégal.",
        tags: ["culture cadeaux", "décision refus"],
        answers: [
          { text: "Je lui accorde le bénéfice du doute — si c'est légal, c'est acceptable.", score: 0 },
          { text: "Je lui explique que la politique interne va au-delà du minimum légal et qu'il doit la respecter.", score: 2 },
          { text: "Je remonte la politique à la conformité pour vérifier si elle est trop restrictive.", score: 0.5 },
          { text: "Je lui laisse faire son propre jugement entre le légal et la politique interne.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "likert",
        text: "Vous faites respecter la politique interne de votre organisation même quand elle est plus restrictive que la loi.",
        tags: ["culture cadeaux", "politique interne"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe n'a jamais été formée sur les règles relatives aux cadeaux et invitations. Certains font des erreurs par ignorance.",
        tags: ["culture cadeaux", "formation"],
        answers: [
          { text: "J'attends que la conformité organise une session — ce n'est pas mon rôle de former.", score: 0 },
          { text: "J'intègre ce sujet dans mes temps d'équipe sans attendre une formation formelle.", score: 2 },
          { text: "Je transmets les ressources disponibles à mon équipe.", score: 1 },
          { text: "Je corrige les erreurs au cas par cas sans formation préalable.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre équipe manque de clarté et de culture sur les règles applicables", resume: "Votre équipe manque de clarté et de culture sur les règles applicables.", desc: "La culture de votre équipe sur les cadeaux et invitations pourrait encore reposer sur des interprétations individuelles non alignées — certains acceptent des choses que d'autres refusent, personne ne sait précisément où se situe la limite applicable. Cette absence de clarté collective crée des incohérences de traitement et expose l'organisation à des risques que des règles claires permettraient d'éviter." },
          moyen: { label: "Pratiques en développement", titre: "Vous clarifiez les règles avec votre équipe mais votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles", resume: "Vous clarifiez les règles avec votre équipe — votre exemplarité et votre résistance à la pression commerciale sont encore perfectibles.", desc: "Vous clarifiez les règles applicables avec votre équipe. Ce qui pourrait encore être perfectible, c'est votre propre exemplarité — appliquer vous-même les règles avec la même rigueur que ce que vous demandez à votre équipe — et votre résistance à la pression commerciale quand l'application des règles crée des tensions avec des clients ou des partenaires." },
          haut: { label: "Réflexes installés", titre: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction", resume: "Vous clarifiez, exemplifiez et résistez à la pression commerciale pour que les règles soient comprises et suivies par conviction.", desc: "Vous clarifiez les règles applicables. Vous les incarnez dans vos propres comportements. Vous résistez à la pression commerciale quand l'application des règles crée des tensions. Vous expliquez pourquoi les règles existent pour créer la compréhension qui permet de les appliquer par conviction. Cette combinaison de clarté, d'exemplarité et de pédagogie est ce qui crée une équipe où les règles sont appliquées de façon cohérente." },
        },
      }
    ],

  },

  "alerter-situation-sensible": {
    0: [
      {
        type: "choix",
        text: "Vous avez entendu dans un couloir qu'un collègue aurait falsifié des données dans un rapport client. Vous n'êtes pas sûr·e d'avoir bien compris.",
        tags: ["alerter", "identification"],
        answers: [
          { text: "Je laisse — je n'ai qu'une information partielle et il vaut mieux ne pas accuser quelqu'un sur des ouï-dire.", score: 0 },
          { text: "Je cherche à clarifier ce que j'ai entendu puis je décide si ça mérite d'être signalé.", score: 2 },
          { text: "Je le signale immédiatement — mieux vaut que quelqu'un d'autre vérifie.", score: 1 },
          { text: "J'en parle à un collègue de confiance pour avoir un deuxième avis.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "choix",
        text: "Vous observez des comportements qui vous semblent irréguliers mais vous n'êtes pas en mesure de le prouver. Vous hésitez à signaler 'juste un doute'.",
        tags: ["alerter", "doute"],
        answers: [
          { text: "J'attends d'avoir des preuves — signaler sans preuves pourrait nuire à quelqu'un d'innocent.", score: 0 },
          { text: "Je signale mon doute — c'est aux personnes compétentes de l'évaluer, pas à moi de l'instruire.", score: 2 },
          { text: "Je continue à observer pour voir si d'autres éléments confirment ma suspicion.", score: 0.5 },
          { text: "J'en parle anonymement pour ne pas engager ma responsabilité.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "likert",
        text: "Vous signalez vos doutes aux personnes compétentes sans attendre d'avoir des preuves — vous savez que votre rôle est de signaler, pas d'instruire.",
        tags: ["alerter", "seuil signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "choix",
        text: "Vous découvrez qu'une pratique dans votre organisation est probablement illégale. Tout le monde autour de vous la considère comme normale.",
        tags: ["alerter", "nature"],
        answers: [
          { text: "Je laisse — si tout le monde le fait, c'est peut-être légal et je me trompe.", score: 0 },
          { text: "Je cherche à vérifier la légalité de la pratique avant de la normaliser.", score: 2 },
          { text: "Je m'en tiens à la norme collective — signaler créerait des tensions inutiles.", score: 0 },
          { text: "Je me renseigne discrètement pour ne pas mettre de l'huile sur le feu.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "choix",
        text: "Une collègue vous confie qu'elle vit une situation de harcèlement de la part de son manager. Elle vous demande de garder ça pour vous.",
        tags: ["alerter", "harcèlement"],
        answers: [
          { text: "Je respecte sa demande — c'est elle qui décide comment gérer sa situation.", score: 0 },
          { text: "Je lui explique que je ne peux pas m'engager à garder ça pour moi si la situation constitue un manquement sérieux.", score: 2 },
          { text: "Je la soutiens et je l'encourage à signaler sans rien faire de mon côté.", score: 1 },
          { text: "Je signale malgré sa demande — son intérêt prime sur sa requête.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "likert",
        text: "Quand quelqu'un vous confie une situation sérieuse en vous demandant la confidentialité, vous expliquez que vous ne pouvez pas toujours vous engager à la garder.",
        tags: ["alerter", "confidentialité limitée"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "choix",
        text: "Vous observez une pratique commerciale que vous trouvez éthiquement douteuse mais qui ne semble pas clairement illégale.",
        tags: ["alerter", "gravité"],
        answers: [
          { text: "Je laisse — si c'est légal, ce n'est pas mon rôle de juger les pratiques de l'organisation.", score: 0 },
          { text: "Je le remonte quand même — éthique et légalité ne sont pas synonymes.", score: 2 },
          { text: "J'en parle à mon responsable direct pour avoir son avis.", score: 1 },
          { text: "J'exprime ma désapprobation à mes collègues sans signalement formel.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "choix",
        text: "Vous hésitez à signaler parce que vous craignez d'être identifié·e comme la source et d'en subir des conséquences professionnelles.",
        tags: ["alerter", "auto-protection"],
        answers: [
          { text: "Je renonce à signaler — ma protection personnelle passe avant.", score: 0 },
          { text: "Je me renseigne sur les protections accordées aux lanceurs d'alerte dans mon organisation et la loi.", score: 2 },
          { text: "Je signale anonymement pour me protéger.", score: 1.5 },
          { text: "Je cherche un tiers de confiance à qui transmettre l'information.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "likert",
        text: "Vous connaissez les protections accordées aux lanceurs d'alerte dans votre organisation et par la loi.",
        tags: ["alerter", "protection"],
        answers: [
          { text: "Pas du tout", score: 0 },
          { text: "Peu", score: 0.5 },
          { text: "Partiellement", score: 1 },
          { text: "Largement", score: 1.5 },
          { text: "Complètement", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      },
      {
        type: "choix",
        text: "Vous observez une situation qui représente un danger potentiel pour la sécurité des personnes mais vous n'êtes pas certain·e de l'imminence du risque.",
        tags: ["alerter", "sécurité"],
        answers: [
          { text: "J'attends de voir si le risque se concrétise — une fausse alerte nuirait à ma crédibilité.", score: 0 },
          { text: "Je signale immédiatement — le principe de précaution s'applique à plein pour les risques de sécurité.", score: 2 },
          { text: "Je cherche à évaluer le risque plus précisément avant de signaler.", score: 0.5 },
          { text: "Je prends moi-même des mesures préventives sans signaler.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — vous instrumentalisez l'évaluation", resume: "Vous attendez d'avoir des preuves ou la certitude avant de signaler — ce qui retarde les signalements utiles.", desc: "Votre réflexe de signalement pourrait encore être conditionné à la certitude — attendre d'avoir des preuves suffisantes, attendre que le doute soit levé, attendre que la situation soit suffisamment grave pour justifier le signalement. Ces conditions reportent précisément les signalements qui auraient eu le plus de valeur : un doute signalé tôt permet une investigation qui peut confirmer ou infirmer, là où attendre la certitude supprime cet espace." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez dans les situations évidentes mais le doute, la peur de nuire et la normalisation créent encore des hésitations", resume: "Vous signalez dans les situations évidentes — le doute, la peur de nuire et la normalisation créent encore des hésitations.", desc: "Vous signalez les situations clairement problématiques. Ce qui pourrait encore créer des hésitations, c'est le doute sur la gravité — 'peut-être que je me trompe', 'peut-être qu'il y a une explication que je ne connais pas' — la peur de nuire à quelqu'un injustement, et la normalisation progressive d'une situation qui s'est installée par petites étapes. Ces freins sont précisément ceux que les voies de signalement existent pour traverser." },
          haut: { label: "Réflexes installés", titre: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves", resume: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance — sans attendre la certitude ni les preuves.", desc: "Vous signalez vos doutes dès qu'ils dépassent un seuil de vraisemblance raisonnable — sans attendre la certitude, sans attendre d'avoir des preuves, sans attendre que la situation soit suffisamment grave. Vous faites confiance aux processus d'investigation pour évaluer. Cette décision de signaler le doute plutôt que de gérer seul·e — qui suppose d'avoir accepté que votre rôle s'arrête au signalement et non à l'évaluation complète — est ce qui fait fonctionner les dispositifs d'alerte." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous avez quelque chose à signaler. Votre organisation dispose d'une ligne d'alerte dédiée, d'un référent éthique et de votre responsable direct. Vous ne savez pas par qui passer.",
        tags: ["canal", "choix"],
        answers: [
          { text: "Je passe par mon responsable direct — c'est la voie hiérarchique normale.", score: 0.5 },
          { text: "J'évalue quelle voie est la plus adaptée selon la nature de la situation et les personnes impliquées.", score: 2 },
          { text: "Je passe par la ligne d'alerte — l'anonymat me protège mieux.", score: 1 },
          { text: "Je passe par le référent éthique — c'est sa mission spécifique.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "choix",
        text: "La situation que vous voulez signaler implique directement votre responsable direct. Vous hésitez sur la voie à utiliser.",
        tags: ["canal", "hiérarchique impliqué"],
        answers: [
          { text: "Je passe quand même par lui — c'est la hiérarchie normale et peut-être que j'interprète mal.", score: 0 },
          { text: "Je contourne la voie hiérarchique directe et je passe par le responsable de niveau supérieur ou le référent éthique.", score: 2 },
          { text: "Je ne signale pas — impliquer ma hiérarchie directe est trop risqué.", score: 0 },
          { text: "Je passe par les RH qui auront plus de recul.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "likert",
        text: "Quand la voie hiérarchique directe est compromise, vous utilisez les voies alternatives disponibles dans votre organisation.",
        tags: ["canal", "adaptation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes sur le point de signaler une situation. Vous n'avez rien noté ni documenté.",
        tags: ["canal", "documentation"],
        answers: [
          { text: "Je signale à l'oral — la documentation viendra ensuite si nécessaire.", score: 0.5 },
          { text: "Je documente d'abord les faits — dates, personnes, observations — avant de signaler.", score: 2 },
          { text: "Je signale en précisant que je peux documenter si nécessaire.", score: 1 },
          { text: "Je documente tout ce dont je me souviens sans chercher à compléter.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "choix",
        text: "Vous devez signaler une situation sensible. Vous avez le choix entre un signalement écrit et un signalement oral.",
        tags: ["canal", "forme"],
        answers: [
          { text: "Je choisis l'oral — c'est moins formel et ça crée moins de tension.", score: 0 },
          { text: "Je préfère l'écrit — il laisse une trace et protège mieux toutes les parties.", score: 2 },
          { text: "Je choisis selon la gravité — oral pour les situations mineures, écrit pour les graves.", score: 1 },
          { text: "Je laisse le destinataire décider sous quelle forme il préfère recevoir l'information.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "likert",
        text: "Vous préférez les signalements écrits aux signalements oraux car ils laissent une trace qui protège toutes les parties.",
        tags: ["canal", "traçabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "choix",
        text: "Vous rédigez votre signalement. Vous êtes tenté·e d'inclure votre interprétation des motivations de la personne concernée.",
        tags: ["canal", "contenu"],
        answers: [
          { text: "J'inclus mon interprétation — elle aide à comprendre le contexte.", score: 0 },
          { text: "Je me limite aux faits observables et je laisse l'interprétation aux personnes compétentes.", score: 2 },
          { text: "J'inclus mon interprétation en la présentant clairement comme une hypothèse.", score: 1 },
          { text: "J'omets les éléments que je ne peux pas prouver.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "choix",
        text: "Vous avez signalé une situation il y a deux semaines. Vous n'avez eu aucun retour sur les suites données.",
        tags: ["canal", "suivi"],
        answers: [
          { text: "J'attends — le traitement prend du temps et me revenir n'est peut-être pas nécessaire.", score: 0 },
          { text: "Je demande une confirmation de réception et un retour sur le traitement prévu.", score: 2 },
          { text: "Je relance une fois puis j'accepte de ne pas avoir de retour.", score: 1 },
          { text: "Je considère que mon rôle s'arrête au signalement.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "likert",
        text: "Après un signalement, vous demandez une confirmation de réception et vous suivez le traitement qui en découle.",
        tags: ["canal", "suivi"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      },
      {
        type: "choix",
        text: "Vous avez signalé en interne une situation grave et n'avez eu aucun retour depuis un mois. La situation semble persister.",
        tags: ["canal", "externe"],
        answers: [
          { text: "Je laisse encore du temps — un mois n'est pas suffisant pour traiter une situation complexe.", score: 0.5 },
          { text: "Je réévalue si un signalement externe aux autorités compétentes est nécessaire.", score: 2 },
          { text: "Je relance en interne à un niveau supérieur.", score: 1.5 },
          { text: "Je renonce — j'ai fait ma part en signalant en interne.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation", resume: "Vous ne connaissez pas les voies et les formes de signalement adaptées à chaque situation.", desc: "Votre connaissance des voies de signalement disponibles pourrait encore être insuffisante — ne pas savoir à qui s'adresser selon la nature de la situation, ne pas connaître les dispositifs formels disponibles dans votre organisation. Cette méconnaissance fait que même une intention de signaler ne se traduit pas nécessairement en signalement efficace." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les voies principales mais votre documentation, traçabilité et suivi post-signalement sont encore perfectibles", resume: "Vous connaissez les voies principales — documentation, traçabilité et suivi post-signalement sont encore perfectibles.", desc: "Vous connaissez les principales voies de signalement. Ce qui pourrait encore être perfectible, c'est la documentation — conserver une trace de ce que vous avez observé et de quand — la traçabilité du signalement lui-même — s'assurer qu'il y a une trace de votre démarche — et le suivi post-signalement — savoir comment vérifier que votre signalement a été pris en charge." },
          haut: { label: "Réflexes installés", titre: "Votre signalement est documenté, tracé, adressé au bon canal et suivi", resume: "Votre signalement est documenté, tracé, adressé au bon canal et suivi.", desc: "Vous documentez ce que vous observez avant de signaler. Vous adressez le signalement au canal le plus adapté à la nature de la situation. Vous conservez une trace de votre démarche. Vous effectuez un suivi pour vous assurer que le signalement a été pris en charge. Cette rigueur dans la forme du signalement — qui suppose d'avoir travaillé sur les voies disponibles hors urgence — est ce qui fait que le signalement atteint son objectif." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "La personne concernée par votre signalement est un collègue que vous appréciez et qui traverse une période difficile personnellement.",
        tags: ["freins", "loyauté"],
        answers: [
          { text: "Je renonce à signaler — la loyauté envers un collègue prime dans une telle période.", score: 0 },
          { text: "Je signale en séparant l'acte du contexte personnel — les deux sont distincts.", score: 2 },
          { text: "J'en parle d'abord à lui pour lui donner l'occasion de régulariser lui-même.", score: 1.5 },
          { text: "Je diffère le signalement jusqu'à ce que sa situation personnelle s'améliore.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous distinguez la relation personnelle avec une personne de la nécessité de signaler ses actes problématiques.",
        tags: ["freins", "séparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous pensez que votre signalement ne changera rien — l'organisation a tendance à étouffer ce genre de situations.",
        tags: ["freins", "doute utilité"],
        answers: [
          { text: "Je renonce — signaler pour rien est inutile et potentiellement dangereux.", score: 0 },
          { text: "Je signale quand même — mon rôle est de signaler, pas de garantir le résultat.", score: 2 },
          { text: "Je cherche des preuves renforcées pour que mon signalement soit difficile à ignorer.", score: 1 },
          { text: "Je passe directement par une voie externe si je n'ai pas confiance en l'interne.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vos collègues savent que vous avez observé quelque chose. Ils vous découragent collectivement de signaler pour 'ne pas créer de problèmes'.",
        tags: ["freins", "pression groupe"],
        answers: [
          { text: "Je m'aligne — l'unanimité de mes collègues signale que je survalorise la gravité de la situation.", score: 0 },
          { text: "Je résiste à la pression de groupe — la décision de signaler m'appartient.", score: 2 },
          { text: "Je prends du recul pour vérifier si mes collègues ont des informations que je n'ai pas.", score: 1 },
          { text: "Je signale anonymement pour ne pas me distinguer du groupe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Votre responsable vous dit directement qu'il préfère que vous ne signalez pas cette situation pour 'ne pas nuire à l'équipe'.",
        tags: ["freins", "hiérarchie"],
        answers: [
          { text: "Je ne signale pas — mon responsable a une vision plus large que moi.", score: 0 },
          { text: "Je signale quand même — aucune instruction hiérarchique ne peut suspendre l'obligation de signalement.", score: 2 },
          { text: "Je documente l'instruction reçue et je signale à un niveau supérieur.", score: 2 },
          { text: "Je cherche un moyen indirect de faire remonter l'information.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous signalez une situation même quand votre hiérarchie vous demande de ne pas le faire.",
        tags: ["freins", "résistance hiérarchie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous avez signalé une situation et la personne concernée a fait l'objet d'une sanction. Vous vous sentez responsable de ce qui lui est arrivé.",
        tags: ["freins", "culpabilité"],
        answers: [
          { text: "Je regrette mon signalement — j'aurais peut-être dû régler ça autrement.", score: 0 },
          { text: "Je prends du recul — la sanction est la conséquence de ses actes, pas de mon signalement.", score: 2 },
          { text: "Je me rassure en me disant que j'ai fait ce qui était juste.", score: 1.5 },
          { text: "Je cherche à soutenir la personne sanctionnée pour compenser.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous avez travaillé longtemps dans votre organisation. Certaines pratiques irrégulières vous semblent normales à force de les voir.",
        tags: ["freins", "normalisation"],
        answers: [
          { text: "Je laisse — si c'est la pratique habituelle, c'est peut-être acceptable.", score: 0 },
          { text: "Je questionne mes habitudes — la normalisation progressive est un risque connu.", score: 2 },
          { text: "Je consulte un tiers extérieur pour évaluer si mes perceptions sont biaisées.", score: 1.5 },
          { text: "Je signale uniquement les nouvelles irrégularités pas celles que je vois depuis longtemps.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous remettez régulièrement en question vos habitudes de perception pour éviter de normaliser des pratiques irrégulières.",
        tags: ["freins", "normalisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Après votre signalement, votre relation avec certains collègues s'est dégradée. Vous vous demandez si ça valait le coup.",
        tags: ["freins", "après"],
        answers: [
          { text: "Je regrette — le coût relationnel n'était pas prévisible et invalide peut-être la décision.", score: 0 },
          { text: "Je maintiens que j'ai fait ce qui était juste — les conséquences relationnelles font partie du prix de l'intégrité.", score: 2 },
          { text: "Je documente la dégradation relationnelle en cas de représailles formelles.", score: 1.5 },
          { text: "Je cherche à reconstruire les relations dégradées pour limiter l'impact.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte", resume: "Des freins — loyauté, peur, pression, normalisation — bloquent votre passage à l'acte.", desc: "Votre passage à l'acte du signalement pourrait encore être bloqué par des freins puissants — la loyauté envers des collègues ou des supérieurs, la peur des conséquences pour vous-même ou pour d'autres, la pression de ne pas 'faire de vagues', la normalisation d'une situation qui s'est installée progressivement. Ces freins sont compréhensibles — ils sont précisément ceux que les protections des lanceurs d'alerte existent pour traverser." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins ordinaires mais la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts", resume: "Vous résistez aux freins ordinaires — la pression hiérarchique directe et la normalisation ancienne créent encore des angles morts.", desc: "Vous résistez aux freins ordinaires sans être paralysé·e. Ce qui pourrait encore créer des angles morts, c'est la pression hiérarchique directe — quand votre supérieur est lui-même concerné ou impliqué dans la situation — et la normalisation ancienne — une pratique installée depuis longtemps qui a cessé d'être perçue comme problématique précisément parce qu'elle est ancienne." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à tous les freins — loyauté, pression, normalisation, pression hiérarchique directe", resume: "Vous résistez à tous les freins — loyauté, peur, pression, normalisation, pression hiérarchique directe.", desc: "Vous résistez aux freins à l'alerte, y compris les plus puissants — la loyauté personnelle, la pression hiérarchique directe, la normalisation d'une pratique ancienne. Vous utilisez les voies de signalement disponibles, y compris les voies externes quand les voies internes semblent compromises. Cette résistance à tous les freins — qui suppose d'avoir clarifié pourquoi le signalement est important indépendamment des conséquences — est ce qui fait fonctionner les dispositifs d'alerte dans les situations difficiles." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Un collaborateur vient vous signaler quelque chose. Votre premier réflexe est de lui demander s'il est sûr de ce qu'il avance.",
        tags: ["environnement", "réception"],
        answers: [
          { text: "C'est légitime — vérifier la fiabilité de l'information avant d'agir est prudent.", score: 0 },
          { text: "Je l'écoute jusqu'au bout avant de questionner sa certitude — ma première réaction doit être l'accueil.", score: 2 },
          { text: "Je lui fais confiance mais je lui demande les éléments concrets qu'il a.", score: 1 },
          { text: "Je note son signalement et je lui dis que je vais vérifier.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Quand un collaborateur vous signale quelque chose, votre première réaction est l'écoute et l'accueil, pas le questionnement de sa certitude.",
        tags: ["environnement", "accueil"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur vous a signalé une situation il y a trois semaines. Vous avez transmis mais vous n'avez pas de retour. Lui non plus.",
        tags: ["environnement", "suite donnée"],
        answers: [
          { text: "Je laisse — le traitement ne me regarde plus une fois que j'ai transmis.", score: 0 },
          { text: "Je le tiens informé de l'état d'avancement même si ce n'est que pour dire que c'est en cours.", score: 2 },
          { text: "Je lui dis de se renseigner lui-même auprès de la conformité.", score: 0 },
          { text: "Je lui indique que ces processus prennent du temps.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur qui a signalé une situation subit une dégradation subtile de son traitement — moins de missions intéressantes, moins d'invitations aux réunions importantes.",
        tags: ["environnement", "représailles"],
        answers: [
          { text: "J'observe pour voir si la tendance se confirme avant d'intervenir.", score: 0 },
          { text: "J'interviens immédiatement — les représailles même subtiles doivent être traitées.", score: 2 },
          { text: "J'en parle à mon responsable pour qu'il évalue la situation.", score: 1 },
          { text: "Je parle au collaborateur pour comprendre sa perception avant d'agir.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Dans votre équipe, personne ne signale jamais rien. Vous ne savez pas si c'est parce que tout va bien ou parce que personne n'ose.",
        tags: ["environnement", "culture"],
        answers: [
          { text: "Je laisse — si tout semble bien se passer, inutile d'aller chercher des problèmes.", score: 0 },
          { text: "Je cherche activement à comprendre si des freins au signalement existent dans mon équipe.", score: 2 },
          { text: "Je rappelle l'existence des voies de signalement disponibles.", score: 1 },
          { text: "Je demande directement si quelqu'un a des inquiétudes à partager.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous vérifiez activement que votre équipe ne fait pas face à des freins au signalement plutôt que de supposer que l'absence d'alertes signifie l'absence de problèmes.",
        tags: ["environnement", "freins"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Lors d'une réunion d'équipe, quelqu'un soulève un problème éthique. Votre réaction va façonner comment votre équipe perçoit la sécurité du signalement.",
        tags: ["environnement", "réaction publique"],
        answers: [
          { text: "Je gère l'inconfort rapidement pour ne pas que la réunion s'enlise.", score: 0 },
          { text: "Je prends le sujet au sérieux et je remercie la personne d'avoir osé soulever ce point.", score: 2 },
          { text: "Je prends note et j'en reparle en tête-à-tête — les sujets sensibles ne se traitent pas en collectif.", score: 1 },
          { text: "Je dis que le sujet sera traité par les personnes compétentes.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Un signalement s'avère non fondé après investigation. Le signalant est embarrassé. Comment vous réagissez ?",
        tags: ["environnement", "false alarm"],
        answers: [
          { text: "Je lui dis que c'était une fausse alerte pour qu'il calibre mieux la prochaine fois.", score: 0 },
          { text: "Je le remercie d'avoir signalé — un signalement de bonne foi non fondé est mieux qu'un vrai problème non signalé.", score: 2 },
          { text: "Je laisse la conformité gérer le retour vers le signalant.", score: 0.5 },
          { text: "Je lui dis que l'essentiel est que la situation ait été vérifiée.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Quand un signalement s'avère non fondé, vous remerciez le signalant pour sa démarche plutôt que de pointer l'erreur.",
        tags: ["environnement", "fausse alerte"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous réalisez que les membres de votre équipe ne savent pas quelles voies de signalement existent dans l'organisation.",
        tags: ["environnement", "accessibilité"],
        answers: [
          { text: "Je laisse la conformité s'assurer que cette information est disponible.", score: 0 },
          { text: "Je prends l'initiative de les informer des voies disponibles.", score: 2 },
          { text: "Je leur indique où trouver l'information sans la donner directement.", score: 1 },
          { text: "J'aborde le sujet lors du prochain entretien individuel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'environnement que vous créez ne favorise pas encore le signalement", resume: "L'environnement que vous créez ne favorise pas encore le signalement.", desc: "L'environnement managérial que vous créez pourrait encore ne pas favoriser le signalement — des réactions qui ont découragé des signalements passés, une absence de voies claires pour remonter les préoccupations, une culture implicite où signaler est associé à une dénonciation plutôt qu'à une responsabilité professionnelle. Ces comportements font que les personnes qui observent des situations problématiques ne les signalent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous accueillez les signalements mais la protection des signalants et la culture active de l'alerte sont encore insuffisantes", resume: "Vous accueillez les signalements — la protection des signalants et la culture active de l'alerte sont encore insuffisantes.", desc: "Vous accueillez les signalements quand ils arrivent. Ce qui pourrait encore être insuffisant, c'est la protection visible des signalants — s'assurer que les personnes qui signalent ne subissent pas de conséquences négatives et que cela soit visible — et la culture active de l'alerte — créer proactivement un environnement où signaler est perçu comme une responsabilité professionnelle normale." },
          haut: { label: "Réflexes installés", titre: "Vous créez activement un environnement où signaler est sûr et attendu", resume: "Vous créez activement un environnement où signaler est sûr et attendu.", desc: "Vous protégez visiblement les personnes qui signalent. Vous créez des occasions régulières où les préoccupations peuvent remonter. Vous traitez les signalements de façon à montrer qu'ils sont bienvenues et pris au sérieux. Vous expliquez pourquoi signaler est une responsabilité professionnelle. Cet environnement actif où signaler est sûr et attendu — qui suppose un investissement managérial délibéré — est ce qui fait fonctionner les dispositifs d'alerte dans la durée." },
        },
      }
    ],

  },

  "ethique-equipe": {
    0: [
      {
        type: "choix",
        text: "Un membre de votre équipe vous soumet un cas difficile : le client demande une information que vous pouvez fournir légalement mais qui servirait à contourner une règle. Il ne sait pas quoi répondre.",
        tags: ["éthique équipe", "dilemme partagé"],
        answers: [
          { text: "Je lui dis de répondre à la demande — si c'est légal, c'est acceptable.", score: 0 },
          { text: "J'explore avec lui les enjeux éthiques au-delà de la légalité avant de décider.", score: 2 },
          { text: "Je lui dis de refuser par précaution — dans le doute, s'abstenir.", score: 0.5 },
          { text: "Je gère le cas moi-même pour ne pas le mettre dans une position difficile.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe est sous pression pour atteindre ses objectifs. Un collaborateur vous propose un raccourci qui n'est pas dans les règles mais que personne ne remarquera.",
        tags: ["éthique équipe", "pression résultat"],
        answers: [
          { text: "J'accepte — les règles sont faites pour être adaptées en fonction du contexte.", score: 0 },
          { text: "Je refuse et j'explique pourquoi l'objectif ne justifie pas le moyen.", score: 2 },
          { text: "Je refuse mais je cherche avec lui un autre moyen d'atteindre l'objectif.", score: 2 },
          { text: "Je lui dis de le faire mais discrètement — je ne veux pas être au courant.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "likert",
        text: "Vous refusez les raccourcis éthiques même sous pression de résultats et vous l'expliquez clairement à votre équipe.",
        tags: ["éthique équipe", "refus pression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "choix",
        text: "Vous respectez les règles formellement mais vous faites parfois passer vos intérêts personnels avant ceux de l'organisation dans des décisions mineures.",
        tags: ["éthique équipe", "exemplarité"],
        answers: [
          { text: "C'est humain — tout le monde le fait dans une certaine mesure.", score: 0 },
          { text: "Je prends conscience de ces comportements et je les corrige — l'exemplarité commence par les petites choses.", score: 2 },
          { text: "Je compense en étant irréprochable sur les sujets visibles.", score: 0 },
          { text: "Je n'en parle pas à mon équipe — ce qui n'est pas visible ne les influence pas.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "choix",
        text: "Votre direction vous demande de mettre en place une pratique que vous trouvez éthiquement problématique mais pas illégale.",
        tags: ["éthique équipe", "dilemme hiérarchique"],
        answers: [
          { text: "J'applique — la décision appartient à la direction et ce n'est pas illégal.", score: 0 },
          { text: "J'exprime mon désaccord éthique avant d'appliquer et je demande que ça soit tracé.", score: 2 },
          { text: "J'applique en laissant ma conviction de côté — c'est le rôle d'un manager.", score: 0 },
          { text: "Je refuse d'appliquer en expliquant mes raisons.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "likert",
        text: "Vous exprimez vos désaccords éthiques à votre direction avant d'appliquer ses instructions, même quand ce n'est pas illégal.",
        tags: ["éthique équipe", "expression désaccord"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur a commis une erreur éthique sans le réaliser. L'impact est limité.",
        tags: ["éthique équipe", "erreur d'un collaborateur"],
        answers: [
          { text: "Je laisse — si l'impact est limité, la correction n'est pas nécessaire.", score: 0 },
          { text: "Je l'aborde avec lui pour qu'il comprenne l'enjeu, même si l'impact était limité.", score: 2 },
          { text: "Je corrige les conséquences sans en parler à la personne.", score: 0 },
          { text: "Je le note pour son évaluation sans lui en parler maintenant.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe n'ose pas soulever des questions éthiques de peur d'être jugée trop scrupuleuse ou de ralentir le travail.",
        tags: ["éthique équipe", "parole"],
        answers: [
          { text: "Je laisse — ceux qui ont des questions peuvent les poser s'ils le souhaitent.", score: 0 },
          { text: "Je crée des espaces explicites pour que les questions éthiques puissent être soulevées sans jugement.", score: 2 },
          { text: "Je leur rappelle que les règles existent et qu'ils peuvent s'y référer.", score: 0.5 },
          { text: "Je leur dis de venir me voir en tête-à-tête s'ils ont des doutes.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "likert",
        text: "Vous créez des occasions explicites pour que votre équipe soulève des questions éthiques sans craindre d'être jugée.",
        tags: ["éthique équipe", "espace parole"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe connaît les règles formelles mais manque de repères concrets pour les situations ambiguës du quotidien.",
        tags: ["éthique équipe", "repères concrets"],
        answers: [
          { text: "Je laisse — les règles formelles doivent suffire.", score: 0 },
          { text: "Je partage des exemples concrets de situations ambiguës et comment j'y répondrai.", score: 2 },
          { text: "Je leur dis de consulter la conformité à chaque situation ambiguë.", score: 0.5 },
          { text: "Je leur donne des critères pratiques pour évaluer une zone grise.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet", resume: "Votre posture face aux dilemmes de votre équipe est soit de trancher seul soit d'éviter le sujet.", desc: "Votre gestion des dilemmes éthiques dans votre équipe pourrait encore osciller entre deux postures — trancher vous-même sans créer d'espace de réflexion, ou éviter le sujet parce qu'il est inconfortable. Ces deux postures ont le même effet : elles ne développent pas la capacité de jugement éthique de votre équipe, qui reste dépendante de vous ou de l'absence de conflit apparent." },
          moyen: { label: "Pratiques en développement", titre: "Vous abordez les dilemmes éthiques avec votre équipe mais vous n'avez pas encore développé leur autonomie de jugement", resume: "Vous abordez les dilemmes éthiques avec votre équipe — vous n'avez pas encore développé leur autonomie de jugement.", desc: "Vous abordez les dilemmes éthiques avec votre équipe. Ce qui pourrait encore manquer, c'est le développement de l'autonomie de jugement — créer les occasions où votre équipe analyse et délibère elle-même, plutôt que d'attendre votre position avant de se former une opinion. Cette autonomie de jugement est ce qui fait qu'une équipe se comporte de façon éthique indépendamment de votre présence." },
          haut: { label: "Réflexes installés", titre: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place", resume: "Vous développez le jugement éthique de votre équipe plutôt que de gérer les dilemmes à leur place.", desc: "Vous créez des occasions où votre équipe analyse les dilemmes éthiques et délibère. Vous posez des questions plutôt que de donner des positions. Vous acceptez que le processus de délibération soit aussi important que la décision finale. Cette posture de développement du jugement éthique — qui suppose d'investir du temps dans la délibération collective plutôt que dans la décision rapide — est ce qui crée une équipe capable de naviguer les dilemmes éthiques de façon autonome." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Une opportunité commerciale intéressante implique un partenaire dont la réputation éthique est douteuse. Votre équipe est enthousiaste.",
        tags: ["culture éthique", "réputation"],
        answers: [
          { text: "J'accepte — tant que nous sommes nous-mêmes irréprochables, le partenaire ne nous engage pas.", score: 0 },
          { text: "J'évalue si cette association est compatible avec les valeurs de l'organisation avant d'aller plus loin.", score: 2 },
          { text: "J'accepte en mettant en place des garde-fous contractuels.", score: 0 },
          { text: "Je laisse l'enthousiasme de l'équipe guider la décision.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "likert",
        text: "Avant d'entrer dans une relation commerciale, vous évaluez la réputation éthique du partenaire.",
        tags: ["culture éthique", "partenaires"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe a obtenu d'excellents résultats mais vous avez des doutes sur certains moyens utilisés que vous n'avez pas voulu approfondir.",
        tags: ["culture éthique", "résultats vs moyens"],
        answers: [
          { text: "Je laisse — les résultats sont là et approfondir créerait des problèmes inutiles.", score: 0 },
          { text: "J'approfondis mes doutes — les bons résultats ne valident pas les moyens.", score: 2 },
          { text: "Je leur pose la question globalement sans cibler une situation précise.", score: 1 },
          { text: "J'attends de voir si des problèmes émergent d'eux-mêmes.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "choix",
        text: "Dans votre équipe, certaines pratiques limites sont devenues normales — tout le monde le fait et personne ne les questionne.",
        tags: ["culture éthique", "normalisation"],
        answers: [
          { text: "Je laisse — si tout le monde le fait, c'est probablement acceptable.", score: 0 },
          { text: "Je remets en question cette normalisation même si c'est inconfortable pour l'équipe.", score: 2 },
          { text: "Je cherche à comprendre l'origine de ces pratiques avant de les remettre en question.", score: 1.5 },
          { text: "Je l'aborde avec la conformité pour qu'elle évalue si c'est vraiment problématique.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "choix",
        text: "Votre mode de rémunération variable crée des incitations qui poussent certains collaborateurs à prendre des raccourcis éthiques pour atteindre leurs objectifs.",
        tags: ["culture éthique", "prime"],
        answers: [
          { text: "Je laisse — le mode de rémunération est décidé à un niveau qui me dépasse.", score: 0 },
          { text: "Je remonte ce problème structurel à ma direction — les incitations créent des comportements.", score: 2 },
          { text: "Je rappelle à mon équipe que les raccourcis éthiques ne sont pas acceptables même pour atteindre les objectifs.", score: 1.5 },
          { text: "Je protège ceux qui manquent leurs objectifs pour ne pas avoir pris de raccourcis.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "likert",
        text: "Vous remontez à votre direction les structures d'incitation qui créent des risques éthiques, même si c'est inconfortable.",
        tags: ["culture éthique", "structure incitatives"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "choix",
        text: "Vous voulez que votre équipe soit fière de travailler de façon éthique, pas seulement conforme. Comment l'incarnez-vous ?",
        tags: ["culture éthique", "fierté"],
        answers: [
          { text: "Je rappelle les règles régulièrement — c'est la base.", score: 0 },
          { text: "Je partage des exemples où l'intégrité a payé et où le raccourci éthique a coûté cher.", score: 2 },
          { text: "Je le dis explicitement à mon équipe lors des moments importants.", score: 1 },
          { text: "Je laisse les résultats parler — une équipe performante peut être fière d'elle-même.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur excellent vous quitte parce qu'il n'est pas à l'aise avec certaines pratiques de l'organisation. Il ne vous a pas dit les vraies raisons.",
        tags: ["culture éthique", "départ"],
        answers: [
          { text: "Je laisse — les départs font partie de la vie des équipes.", score: 0 },
          { text: "Je cherche à comprendre ses vraies raisons — son départ peut signaler un problème systémique.", score: 2 },
          { text: "Je lui souhaite bonne continuation — c'est sa décision.", score: 0 },
          { text: "Je lui demande directement lors de son entretien de sortie.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "likert",
        text: "Quand un collaborateur excellent part, vous cherchez activement à comprendre si des raisons éthiques sont à l'origine de son départ.",
        tags: ["culture éthique", "départs"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      },
      {
        type: "choix",
        text: "En fin d'année, vous évaluez vos collaborateurs sur leurs résultats mais pas sur leur façon de les obtenir.",
        tags: ["culture éthique", "bilan"],
        answers: [
          { text: "Je maintiens — évaluer les moyens est trop subjectif.", score: 0 },
          { text: "J'intègre la dimension éthique dans mon évaluation — résultats et intégrité vont ensemble.", score: 2 },
          { text: "Je l'intègre uniquement pour les cas flagrants.", score: 0.5 },
          { text: "Je pose la question des moyens lors de nos échanges réguliers plutôt qu'en évaluation formelle.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture éthique de votre équipe se construit par défaut, pas par choix", resume: "La culture éthique de votre équipe se construit par défaut, pas par choix.", desc: "La culture éthique de votre équipe pourrait encore se construire par défaut — par les comportements qui s'installent progressivement sans avoir été délibérément choisis. Sans travail explicite sur les valeurs, les comportements attendus et les lignes non franchissables, la culture se construit par imitation des comportements dominants, qui ne sont pas nécessairement ceux que vous souhaiteriez." },
          moyen: { label: "Pratiques en développement", titre: "Votre culture éthique est présente mais sa cohérence — traitement équitable, remontée des incitations — est encore perfectible", resume: "Votre culture éthique est présente — sa cohérence sur le traitement équitable et la remontée des incitations est encore perfectible.", desc: "Votre équipe a une culture éthique présente. Ce qui pourrait encore être perfectible, c'est la cohérence — traiter les questions éthiques de façon équitable entre tous les membres de l'équipe, indépendamment de leur ancienneté ou de leurs résultats — et la remontée des incitations problématiques — signaler quand les systèmes de rémunération ou d'évaluation créent des incitations à contourner les règles." },
          haut: { label: "Réflexes installés", titre: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens", resume: "Votre culture éthique est cohérente — traitement équitable, remontée des incitations, évaluation des moyens.", desc: "Votre culture éthique est cohérente : vous traitez les questions éthiques de façon équitable entre tous les membres de l'équipe. Vous remontez les incitations qui pourraient pousser à contourner les règles. Vous évaluez les résultats en tenant compte des moyens utilisés pour les atteindre. Cette cohérence de la culture éthique — qui suppose d'avoir travaillé sur les dimensions systémiques et pas seulement comportementales — est ce qui crée une culture réelle et non seulement affichée." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Votre direction vous demande d'atteindre un objectif sans vous donner les moyens légitimes pour y arriver. Le message implicite est 'débrouillez-vous'.",
        tags: ["dilemmes manager", "instruction ambiguë"],
        answers: [
          { text: "Je me débrouille — c'est ma responsabilité de trouver des solutions.", score: 0 },
          { text: "Je remonte explicitement que les moyens sont insuffisants pour atteindre l'objectif de façon éthique.", score: 2 },
          { text: "J'atteins l'objectif en prenant les raccourcis nécessaires — la direction est responsable des moyens.", score: 0 },
          { text: "Je n'atteins pas l'objectif et j'en assume les conséquences.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "likert",
        text: "Quand les objectifs ne peuvent pas être atteints par des moyens éthiques, vous le signalez explicitement plutôt que de vous adapter.",
        tags: ["dilemmes manager", "remontée"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous tolérez des comportements légèrement problématiques de vos meilleurs éléments parce qu'ils représentent une valeur disproportionnée pour l'équipe.",
        tags: ["dilemmes manager", "tolérance"],
        answers: [
          { text: "C'est pragmatique — perdre un élément clé coûte plus cher que tolérer quelques écarts.", score: 0 },
          { text: "Je traite les écarts éthiques de la même façon pour tous — la valeur d'un collaborateur ne crée pas d'exception.", score: 2 },
          { text: "Je leur parle en privé pour leur faire comprendre que je vois leurs écarts.", score: 1 },
          { text: "Je tolère en espérant que ça se régule naturellement.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous devez recruter un profil rare. Le candidat le mieux qualifié a une réputation de comportements limites dans son ancienne organisation.",
        tags: ["dilemmes manager", "recrutement"],
        answers: [
          { text: "Je recrute — les comportements passés ne présagent pas des comportements futurs dans un nouveau contexte.", score: 0 },
          { text: "J'évalue soigneusement ce risque et je ne recrute que si je peux mettre en place des garde-fous.", score: 2 },
          { text: "Je recrute mais je reste vigilant les premiers mois.", score: 0 },
          { text: "Je préfère un profil moins qualifié mais sans signaux d'alerte.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes conscient·e que certaines décisions de votre direction exposent vos collaborateurs à des risques éthiques. Vous ne l'avez pas dit.",
        tags: ["dilemmes manager", "protection équipe"],
        answers: [
          { text: "Je laisse — ce n'est pas mon rôle de protéger mes collaborateurs des décisions de la direction.", score: 0 },
          { text: "Je remonte le risque à ma direction ET j'en parle à mon équipe pour qu'elle puisse s'y préparer.", score: 2 },
          { text: "Je prépare mon équipe sans en parler à la direction.", score: 1 },
          { text: "Je remonte le risque à ma direction sans en parler à mon équipe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous protégez votre équipe des risques éthiques créés par les décisions de la direction en les remontant ET en préparant votre équipe.",
        tags: ["dilemmes manager", "protection"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous avez vous-même commis une erreur éthique. Vous vous demandez si vous devez en parler à votre équipe.",
        tags: ["dilemmes manager", "erreur propre"],
        answers: [
          { text: "Je ne le dis pas — avouer une erreur personnelle fragilise l'autorité.", score: 0 },
          { text: "J'en parle à mon équipe — l'exemplarité inclut l'aveu de ses propres erreurs.", score: 2 },
          { text: "Je le dis uniquement à mon responsable.", score: 1 },
          { text: "Je corrige discrètement sans en faire un sujet.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "choix",
        text: "Une décision commerciale urgente doit être prise maintenant. Vous n'avez pas le temps de vérifier tous les aspects éthiques.",
        tags: ["dilemmes manager", "décision rapide"],
        answers: [
          { text: "Je prends la décision — l'urgence prime et je vérifierai après.", score: 0 },
          { text: "Je prends la décision la plus prudente éthiquement dans le temps imparti et j'en note les incertitudes.", score: 2 },
          { text: "Je délègue la décision à quelqu'un qui a plus de recul.", score: 1 },
          { text: "Je reporte la décision jusqu'à avoir vérifié les aspects éthiques.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "likert",
        text: "Sous pression de temps, vous prenez la décision la plus prudente éthiquement et vous en notez les incertitudes.",
        tags: ["dilemmes manager", "urgence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur refuse d'exécuter une instruction qu'il juge éthiquement problématique. Il vient vous demander du soutien.",
        tags: ["dilemmes manager", "soutien"],
        answers: [
          { text: "Je lui dis que c'est une instruction et qu'il doit l'appliquer.", score: 0 },
          { text: "Je prends son refus au sérieux et j'explore avec lui les enjeux avant de décider.", score: 2 },
          { text: "Je lui suggère d'exécuter tout en documentant ses réserves.", score: 1 },
          { text: "Je reprends la tâche moi-même pour qu'il n'ait pas à le faire.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus", resume: "Face aux dilemmes managériaux, la pression de résultats et de hiérarchie prend souvent le dessus.", desc: "Face aux dilemmes managériaux, votre position éthique pourrait encore céder sous la pression — de résultats à atteindre, de hiérarchie qui attend une décision dans une direction particulière. Ces cédages créent un signal puissant pour votre équipe sur le caractère conditionnel des standards éthiques que vous affichez." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les situations de pression maximale créent encore des accommodements", resume: "Vous résistez aux pressions ordinaires — les situations de pression maximale créent encore des accommodements.", desc: "Vous résistez aux pressions ordinaires. Ce qui pourrait encore créer des accommodements, c'est la pression maximale — l'objectif de fin de trimestre, la demande directe d'un dirigeant, la situation avec un client stratégique. Ces situations de pression maximale sont précisément celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments", resume: "Vous résistez à toutes les pressions — résultats, hiérarchie, exception pour les meilleurs éléments.", desc: "Vous résistez à la pression des résultats, à la pression hiérarchique et aux demandes d'exception pour les meilleurs éléments. Vous nommez les dilemmes plutôt que de les absorber silencieusement. Vous remontez les situations où les standards éthiques et les attentes de résultats sont en tension. Cette résistance sans accommodation — qui suppose d'accepter parfois des tensions avec la hiérarchie — est ce qui crée la crédibilité d'une culture éthique réelle." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Les questions éthiques ne sont jamais abordées en réunion d'équipe. Elles émergent seulement lors de problèmes.",
        tags: ["installer culture", "rituels"],
        answers: [
          { text: "Je laisse — aborder l'éthique en l'absence de problème semble artificiel.", score: 0 },
          { text: "J'intègre des moments réguliers pour partager des cas, des questions et des apprentissages éthiques.", score: 2 },
          { text: "J'aborde le sujet lors des entretiens individuels annuels.", score: 0.5 },
          { text: "Je laisse la conformité organiser ces temps.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "likert",
        text: "Vous abordez régulièrement des sujets éthiques en équipe, pas seulement lors de problèmes.",
        tags: ["installer culture", "régularité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "choix",
        text: "Vous avez commis une erreur éthique dans le passé dont vous avez tiré un apprentissage important. Votre équipe ne le sait pas.",
        tags: ["installer culture", "erreurs partagées"],
        answers: [
          { text: "Je garde ça pour moi — partager ses erreurs passées fragilise la crédibilité.", score: 0 },
          { text: "Je le partage — mon équipe apprendra plus de mon erreur que de mes succès.", score: 2 },
          { text: "Je le mentionne de façon anonymisée comme un cas général.", score: 1 },
          { text: "Je le partage uniquement si un cas similaire se présente dans l'équipe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur a refusé une opportunité commerciale parce qu'elle lui semblait éthiquement compromise. L'équipe est divisée sur cette décision.",
        tags: ["installer culture", "valorisation"],
        answers: [
          { text: "Je reste neutre — ce n'est pas à moi de trancher si c'était la bonne décision.", score: 0 },
          { text: "Je soutiens publiquement sa démarche et j'explique pourquoi ce type de décision mérite respect.", score: 2 },
          { text: "Je lui parle en privé pour valider sa décision sans en faire un sujet collectif.", score: 1 },
          { text: "Je laisse l'équipe débattre — c'est formateur.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "choix",
        text: "Certains membres de votre équipe pensent que l'éthique et la performance sont en tension — être éthique coûte des opportunités.",
        tags: ["installer culture", "lien performance"],
        answers: [
          { text: "Je laisse — c'est une tension réelle et chacun doit la gérer à sa façon.", score: 0 },
          { text: "Je montre concrètement comment l'intégrité crée de la valeur sur le long terme.", score: 2 },
          { text: "Je rappelle que les règles ne sont pas négociables même si elles coûtent des opportunités.", score: 1 },
          { text: "Je reconnais la tension et j'aide chacun à trouver son propre équilibre.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "likert",
        text: "Vous montrez concrètement à votre équipe comment l'éthique crée de la valeur sur le long terme plutôt que de la présenter comme une contrainte.",
        tags: ["installer culture", "lien valeur"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "choix",
        text: "Un nouveau collaborateur rejoint votre équipe. Son onboarding technique est bien couvert mais vous n'avez pas abordé les repères éthiques spécifiques à votre contexte.",
        tags: ["installer culture", "nouveaux"],
        answers: [
          { text: "Je laisse — les règles générales de l'organisation suffisent.", score: 0 },
          { text: "J'intègre dans mon onboarding les repères éthiques spécifiques à notre activité.", score: 2 },
          { text: "Je lui transmets les documents officiels de conformité.", score: 0.5 },
          { text: "J'attends qu'il ait quelques semaines de recul pour aborder ces sujets.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur est très performant mais ses comportements éthiques sont parfois limites. Il n'a jamais reçu de feedback sur cette dimension.",
        tags: ["installer culture", "évaluation comportement"],
        answers: [
          { text: "Je le laisse — ses résultats sont là et je ne veux pas démotiver un bon élément.", score: 0 },
          { text: "Je lui donne un feedback factuel sur ses comportements éthiques — les excellents résultats rendent le feedback nécessaire, pas facultatif.", score: 2 },
          { text: "Je l'observe encore pour avoir plus d'exemples avant de lui en parler.", score: 0 },
          { text: "J'en parle à la conformité pour qu'elle le sensibilise à sa façon.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "likert",
        text: "Vous donnez du feedback éthique à vos collaborateurs les plus performants avec autant de rigueur qu'aux autres.",
        tags: ["installer culture", "feedback performance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe résiste à vos efforts pour développer une culture éthique — elle trouve ça trop moralisateur ou déconnecté des réalités du terrain.",
        tags: ["installer culture", "résistance"],
        answers: [
          { text: "Je renonce — si l'équipe ne suit pas, forcer crée plus de résistance.", score: 0 },
          { text: "Je cherche à comprendre ce qui crée cette résistance et j'adapte mon approche.", score: 2 },
          { text: "Je maintiens le cap même sans adhésion — le fond est trop important.", score: 1 },
          { text: "Je rends les efforts éthiques plus pragmatiques et moins formels.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les rituels et moments dédiés à l'éthique sont absents de votre management", resume: "Les rituels et moments dédiés à l'éthique sont absents de votre management.", desc: "Votre management pourrait encore ne pas inclure d'espaces dédiés à l'éthique — pas de discussion régulière sur les dilemmes rencontrés, pas de moment dans l'onboarding dédié aux valeurs et aux comportements attendus, pas de feedback intégrant la dimension éthique. Ces absences font que l'éthique n'est abordée que dans les crises, pas dans la construction ordinaire de la culture." },
          moyen: { label: "Pratiques en développement", titre: "Vous créez des espaces éthiques réguliers mais leur profondeur et votre exemplarité personnelle sont encore insuffisantes", resume: "Vous créez des espaces éthiques réguliers — leur profondeur et votre exemplarité personnelle sont encore insuffisantes.", desc: "Vous créez des espaces réguliers pour aborder l'éthique dans votre équipe. Ce qui pourrait encore être insuffisant, c'est la profondeur de ces espaces — aller au-delà des rappels de règles pour créer de vraie délibération sur des dilemmes réels — et votre exemplarité personnelle — incarner dans vos propres comportements les standards que vous demandez à votre équipe." },
          haut: { label: "Réflexes installés", titre: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle", resume: "L'éthique est intégrée dans votre management ordinaire — rituels, onboarding, feedback, exemplarité personnelle.", desc: "Vous intégrez l'éthique dans l'onboarding des nouveaux membres. Vous créez des espaces réguliers de discussion sur les dilemmes réels. Vous intégrez la dimension éthique dans le feedback. Vous incarnez vous-même les standards que vous demandez. Cette intégration de l'éthique dans le management ordinaire — plutôt que dans des espaces dédiés séparés du travail réel — est ce qui crée une culture éthique vivante et quotidienne." },
        },
      }
    ],

  },

  "corruption-anticoncurrentiel": {
    0: [
      {
        type: "choix",
        text: "Pour accélérer une démarche administrative bloquée depuis des semaines, un intermédiaire local vous propose de 'faciliter' le processus moyennant un paiement non officiel.",
        tags: ["corruption", "facilitation"],
        answers: [
          { text: "J'accepte — les petits paiements de facilitation sont courants dans certains pays.", score: 0 },
          { text: "Je refuse et je remonte la situation à ma direction et à la conformité.", score: 2 },
          { text: "Je refuse le paiement direct mais j'accepte de 'offrir un cadeau' à la place.", score: 0 },
          { text: "Je cherche un autre intermédiaire moins corrompu.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "choix",
        text: "Un acheteur vous suggère implicitement que votre offre a de bonnes chances si vous 'savez vous montrer reconnaissant'. Le contrat est stratégique.",
        tags: ["corruption", "appel d'offres"],
        answers: [
          { text: "Je comprends le message et je cherche une façon légale de le satisfaire.", score: 0 },
          { text: "Je signale la suggestion à ma direction et à la conformité avant toute action.", score: 2 },
          { text: "Je l'ignore et je soumets mon offre en espérant gagner sur le fond.", score: 1.5 },
          { text: "Je me retire de l'appel d'offres — participer serait me compromettre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "likert",
        text: "Quand vous percevez une suggestion de corruption, même implicite, vous la signalez immédiatement avant d'agir.",
        tags: ["corruption", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "choix",
        text: "Un partenaire commercial vous propose de verser une commission à un consultant dont vous savez qu'il est un proche de votre client.",
        tags: ["corruption", "tiers"],
        answers: [
          { text: "J'accepte — la commission va à un consultant légitime, pas directement au client.", score: 0 },
          { text: "Je refuse — la commission est une forme déguisée de versement corruptif.", score: 2 },
          { text: "Je vérifie si la prestation du consultant est réelle avant d'accepter.", score: 0.5 },
          { text: "Je consulte la conformité avant de décider.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "choix",
        text: "Vous opérez dans un pays où la corruption est systémique. Vos concurrents locaux pratiquent ouvertement. Vous risquez de perdre le marché.",
        tags: ["corruption", "pays"],
        answers: [
          { text: "Je m'adapte aux pratiques locales — les règles de mon pays d'origine ne s'appliquent pas ici.", score: 0 },
          { text: "Je respecte les règles de mon organisation et les lois de mon pays d'origine — elles s'appliquent partout.", score: 2 },
          { text: "Je cherche des approches légales créatives pour rester compétitif sans corrompre.", score: 1.5 },
          { text: "Je remonte à ma direction que le marché est inaccessible sans corruption.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "likert",
        text: "Vous respectez les règles anticorruption de votre organisation même dans des pays où ces pratiques sont tolérées ou systémiques.",
        tags: ["corruption", "extraterritorialité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "choix",
        text: "Un fonctionnaire public vous demande une faveur personnelle — non monétaire — en échange d'un traitement favorable de votre dossier.",
        tags: ["corruption", "faveur"],
        answers: [
          { text: "J'accepte — ce n'est pas un paiement d'argent donc ce n'est pas de la corruption.", score: 0 },
          { text: "Je refuse — toute faveur en échange d'un traitement favorable constitue de la corruption.", score: 2 },
          { text: "J'évalue si la faveur demandée est disproportionnée avant de décider.", score: 0 },
          { text: "Je consulte la conformité avant de répondre.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "choix",
        text: "Vous avez refusé une sollicitation de corruption. Vous n'avez rien documenté de cet incident.",
        tags: ["corruption", "documentation"],
        answers: [
          { text: "Je laisse — l'incident est clos puisque j'ai refusé.", score: 0 },
          { text: "Je le documente et je le signale même si j'ai refusé — l'incident doit être tracé.", score: 2 },
          { text: "Je le mentionne à mon responsable verbalement.", score: 1 },
          { text: "Je le documente pour moi-même sans le partager.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "likert",
        text: "Vous documentez et signalez les sollicitations de corruption même quand vous les avez refusées.",
        tags: ["corruption", "documentation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      },
      {
        type: "choix",
        text: "Vous vous apprêtez à signer un contrat avec un intermédiaire. Vous n'avez pas vérifié sa réputation anticorruption.",
        tags: ["corruption", "due diligence"],
        answers: [
          { text: "Je signe — c'est sa responsabilité, pas la mienne.", score: 0 },
          { text: "Je fais la vérification avant de signer — les actes de l'intermédiaire peuvent m'engager.", score: 2 },
          { text: "Je lui demande de signer une clause anticorruption et je signe.", score: 1 },
          { text: "Je demande à la direction juridique de valider le contrat.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées", resume: "Vous distinguez mal la corruption directe de ses formes indirectes et déguisées.", desc: "Votre identification des risques de corruption pourrait encore se concentrer sur les formes directes et évidentes — la demande explicite de paiement, le pot-de-vin visible. Ce qui pourrait encore vous échapper, ce sont les formes indirectes et déguisées — les cadeaux disproportionnés en période de décision, les invitations dont la valeur dépasse largement la norme, les avantages accordés à des tiers liés. Ces formes sont précisément celles qui présentent les risques les plus élevés dans les environnements professionnels ordinaires." },
          moyen: { label: "Pratiques en développement", titre: "Vous refusez les formes directes de corruption mais les formes indirectes et déguisées créent encore des angles morts", resume: "Vous refusez les formes directes de corruption — les formes indirectes et déguisées créent encore des angles morts.", desc: "Vous refusez les formes directes de corruption. Ce qui pourrait encore créer des angles morts, c'est la forme indirecte — les situations où la corruption opère à travers des tiers, des avantages non monétaires, des accords informels — et la forme déguisée — les situations habillées d'une apparence légitime mais dont l'effet réel est problématique." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez", resume: "Vous identifiez et refusez toutes les formes de corruption — directes, indirectes, déguisées — et vous les documentez.", desc: "Vous identifiez les formes directes et les formes indirectes ou déguisées de corruption. Vous les refusez systématiquement et vous les documentez. Vous signalez les situations à votre responsable compliance. Cette identification large et cette rigueur de refus et de documentation — qui supposent d'avoir travaillé sur la diversité des formes que la corruption peut prendre — sont ce qui maintient votre organisation hors des zones de risque." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Lors d'un congrès sectoriel, un concurrent vous demande comment votre organisation se positionne sur les prix pour l'année prochaine.",
        tags: ["anticoncurrentiel", "échange info"],
        answers: [
          { text: "Je lui donne une indication générale — c'est une conversation informelle.", score: 0 },
          { text: "Je refuse et je mets fin à la conversation — les échanges sur les prix avec un concurrent sont interdits.", score: 2 },
          { text: "Je lui donne des informations déjà publiques sans aller plus loin.", score: 0.5 },
          { text: "Je lui pose la même question en retour — si les deux parties échangent, c'est équitable.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "likert",
        text: "Vous mettez fin à toute conversation avec un concurrent qui porte sur les prix, les capacités ou les stratégies commerciales.",
        tags: ["anticoncurrentiel", "refus"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes membre d'une association professionnelle. Lors d'une réunion, des représentants de concurrents commencent à évoquer les tendances tarifaires du marché.",
        tags: ["anticoncurrentiel", "association"],
        answers: [
          { text: "J'écoute — c'est une conversation générale et je ne dis rien.", score: 0 },
          { text: "J'interromps et je quitte la réunion en notant mon départ et les raisons.", score: 2 },
          { text: "Je change de sujet pour éviter d'entendre les informations sensibles.", score: 0.5 },
          { text: "Je participe prudemment en évitant de donner des informations précises.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes sur le point de recruter un collaborateur qui vient d'un concurrent direct. Il pourrait vous donner des informations confidentielles sur leur stratégie.",
        tags: ["anticoncurrentiel", "recrutement"],
        answers: [
          { text: "Je l'embauche et je profite de ses connaissances — c'est légal.", score: 0 },
          { text: "Je clarifie avec lui les informations confidentielles auxquelles il ne doit pas accéder dans ses nouvelles fonctions.", score: 2 },
          { text: "Je l'embauche et je fais confiance à son intégrité.", score: 0 },
          { text: "Je lui demande de partager ce qu'il sait avant de décider si je l'embauche.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation est en position dominante sur son marché. Certaines pratiques commerciales agressives semblent légales mais sont discutables.",
        tags: ["anticoncurrentiel", "position dominante"],
        answers: [
          { text: "Je m'en tiens à la légalité — si ce n'est pas illégal, c'est permis.", score: 0 },
          { text: "J'évalue si ces pratiques constituent un abus de position dominante même dans les zones grises.", score: 2 },
          { text: "Je consulte le département juridique avant de les mettre en œuvre.", score: 1.5 },
          { text: "Je laisse les concurrents faire un recours s'ils le souhaitent.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "likert",
        text: "Quand votre organisation est en position dominante, vous évaluez vos pratiques commerciales au-delà de la seule légalité formelle.",
        tags: ["anticoncurrentiel", "position dominante"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "choix",
        text: "Votre responsable vous demande d'aligner tacitement vos prix avec ceux d'un concurrent — 'pour stabiliser le marché'.",
        tags: ["anticoncurrentiel", "accord"],
        answers: [
          { text: "J'applique — si le responsable demande, je fais confiance à son appréciation du risque.", score: 0 },
          { text: "Je refuse et je signale l'instruction à la conformité.", score: 2 },
          { text: "Je demande une validation juridique avant d'appliquer.", score: 1.5 },
          { text: "J'applique discrètement — la stabilisation du marché est dans l'intérêt de tous.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe commerciale ne connaît pas bien les règles de concurrence applicables à ses activités quotidiennes.",
        tags: ["anticoncurrentiel", "formation"],
        answers: [
          { text: "Je laisse la conformité s'en charger.", score: 0 },
          { text: "Je prends l'initiative de clarifier avec mon équipe les comportements à risque dans notre activité spécifique.", score: 2 },
          { text: "Je leur transmets la documentation officielle disponible.", score: 0.5 },
          { text: "Je les forme uniquement si la conformité me le demande.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "likert",
        text: "Vous formez votre équipe aux risques de concurrence spécifiques à votre activité sans attendre que la conformité le fasse.",
        tags: ["anticoncurrentiel", "sensibilisation équipe"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation fait l'objet d'une investigation de l'autorité de concurrence. Vous avez des documents potentiellement pertinents.",
        tags: ["anticoncurrentiel", "investigation"],
        answers: [
          { text: "J'attends les instructions de la direction avant de faire quoi que ce soit.", score: 0.5 },
          { text: "Je contacte immédiatement le département juridique et je ne supprime aucun document.", score: 2 },
          { text: "Je conserve les documents et j'attends de voir si on me les demande.", score: 1 },
          { text: "Je supprime les documents les plus sensibles par précaution.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables", resume: "Vous contournez les règles de concurrence dans certaines situations en les considérant comme des exceptions raisonnables.", desc: "Votre respect des règles de concurrence pourrait encore comporter des exceptions que vous vous accordez — des échanges d'informations avec des concurrents dans des contextes informels, des pratiques coordonnées dans des associations professionnelles, des comportements qui semblent raisonnables dans votre secteur mais qui présentent des risques anticoncurrentiels réels. Ces exceptions 'raisonnables' sont souvent celles qui exposent le plus." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales règles de concurrence mais les situations ambiguës créent encore des hésitations", resume: "Vous connaissez les principales règles de concurrence — les situations ambiguës créent encore des hésitations.", desc: "Vous connaissez les principales règles de concurrence et vous les respectez dans les situations claires. Ce qui pourrait encore créer des hésitations, c'est la situation ambiguë — les échanges d'informations dans des contextes associatifs, les pratiques tarifaires dont l'effet concurrentiel est incertain. Ces situations ambiguës méritent une consultation avant d'agir, pas une décision autonome." },
          haut: { label: "Réflexes installés", titre: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire", resume: "Vous respectez les règles de concurrence dans toutes les situations, y compris sous instruction hiérarchique contraire.", desc: "Vous respectez les règles de concurrence dans les situations claires et dans les situations ambiguës. Vous consultez avant d'agir dans les zones grises. Vous refusez les instructions contraires, y compris hiérarchiques. Cette rigueur sans exception — qui suppose d'avoir internalisé pourquoi les règles de concurrence existent et pas seulement qu'elles existent — est ce qui protège votre organisation dans les situations les plus exposées." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Votre équipe est en fin de trimestre. Un client important propose de signer si vous acceptez une remise supplémentaire qui n'est pas dans les conditions standards.",
        tags: ["zones grises", "pression commerciale"],
        answers: [
          { text: "J'accepte — les remises commerciales sont légitimes.", score: 0.5 },
          { text: "J'évalue si cette remise peut être justifiée par des critères objectifs ou si elle crée un risque de traitement préférentiel injustifié.", score: 2 },
          { text: "J'accepte si c'est dans la limite de mes pouvoirs de délégation.", score: 1 },
          { text: "Je refuse — les exceptions créent des précédents.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "likert",
        text: "Vous vérifiez que vos décisions commerciales hors standard peuvent être justifiées par des critères objectifs.",
        tags: ["zones grises", "justification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation sponsorise un événement organisé par une association dont le président est aussi votre principal client public.",
        tags: ["zones grises", "sponsoring"],
        answers: [
          { text: "Je valide le sponsoring — c'est une pratique normale dans notre secteur.", score: 0 },
          { text: "J'évalue le risque de perception de corruption avant de valider.", score: 2 },
          { text: "Je consulte la conformité avant de prendre la décision.", score: 1.5 },
          { text: "Je conditionne le sponsoring à une clause de visibilité pour justifier le montant.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "choix",
        text: "Vous avez une relation personnelle ancienne avec un décideur public. Il vous aide à accélérer certains processus officiels.",
        tags: ["zones grises", "relation personnelle"],
        answers: [
          { text: "Je m'appuie sur cette relation — les réseaux sont une réalité du business.", score: 0 },
          { text: "Je clarifie avec la conformité si cette relation et son utilisation sont conformes.", score: 2 },
          { text: "Je maintiens la relation mais je ne l'utilise pas pour des avantages professionnels.", score: 1.5 },
          { text: "J'accepte son aide ponctuellement en évitant de l'institutionnaliser.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation envisage de faire un don à un parti politique dans un pays où c'est légal. Vous êtes consulté·e.",
        tags: ["zones grises", "politique"],
        answers: [
          { text: "Je valide — si c'est légal localement, c'est acceptable.", score: 0 },
          { text: "J'évalue les risques de perception et de conflit avec les politiques de votre organisation au-delà de la légalité locale.", score: 2 },
          { text: "Je demande un avis juridique sur la légalité dans les deux pays.", score: 1 },
          { text: "Je refuse par principe — les dons politiques créent toujours des risques.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "likert",
        text: "Vous évaluez les décisions sensibles au-delà de leur légalité formelle en tenant compte du risque de perception.",
        tags: ["zones grises", "évaluation risque"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "choix",
        text: "Votre sous-traitant local paie des pots-de-vin pour obtenir des permis. C'est lui qui agit, pas vous directement.",
        tags: ["zones grises", "sous-traitant"],
        answers: [
          { text: "Je laisse — c'est sa responsabilité, pas la mienne.", score: 0 },
          { text: "Je mets fin au contrat ou j'exige qu'il cesse ces pratiques — ses actes peuvent m'engager.", score: 2 },
          { text: "Je lui demande de cesser mais je maintiens le contrat en attendant de voir.", score: 0.5 },
          { text: "Je signale la situation à ma direction et à la conformité.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "choix",
        text: "Un partenaire vous propose d'utiliser sa villa de vacances gratuitement. Vous êtes en charge de la relation commerciale avec lui.",
        tags: ["zones grises", "avantages en nature"],
        answers: [
          { text: "J'accepte — c'est un geste d'amitié personnel.", score: 0 },
          { text: "Je refuse — l'avantage en nature crée une dépendance même s'il n'est pas monétaire.", score: 2 },
          { text: "J'accepte si je lui propose de payer une location symbolique.", score: 0 },
          { text: "Je consulte la conformité avant d'accepter ou de refuser.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "likert",
        text: "Vous refusez les avantages en nature significatifs d'un partenaire avec qui vous avez une relation commerciale, même s'ils sont présentés comme personnels.",
        tags: ["zones grises", "avantages indirects"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      },
      {
        type: "choix",
        text: "Vous suspectez qu'un membre de votre équipe est impliqué dans des pratiques de corruption. Vous n'avez que des indices.",
        tags: ["zones grises", "dénonciation interne"],
        answers: [
          { text: "J'attends des preuves plus solides avant d'agir.", score: 0 },
          { text: "Je signale mes suspicions à la conformité avec les éléments dont je dispose.", score: 2 },
          { text: "Je l'interroge directement pour avoir sa version.", score: 0 },
          { text: "Je l'écarte du dossier sensible sans lui expliquer pourquoi.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception", resume: "Dans les zones grises, vous vous appuyez sur la légalité formelle plutôt que sur l'évaluation du risque de perception.", desc: "Dans les zones grises, votre évaluation pourrait encore se limiter à la légalité formelle — 'ce n'est pas illégal, donc c'est acceptable'. Cette approche ignore la dimension du risque de perception : des pratiques légales peuvent créer des apparences problématiques qui exposent votre organisation à des risques de réputation et de confiance équivalents aux risques juridiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous évaluez le risque de perception dans les situations claires mais les pressions commerciales créent encore des accommodements dans les zones grises", resume: "Vous évaluez le risque de perception dans les situations claires — les pressions commerciales créent encore des accommodements dans les zones grises.", desc: "Vous évaluez le risque de perception dans les situations claires. Ce qui pourrait encore créer des accommodements dans les zones grises, c'est la pression commerciale — la situation où l'évaluation du risque de perception crée une contrainte sur une opportunité commerciale. Dans ces situations, la pression commerciale ne devrait pas modifier l'évaluation du risque de perception." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales", resume: "Vous évaluez systématiquement le risque de perception dans les zones grises, indépendamment des pressions commerciales.", desc: "Vous évaluez le risque de perception dans les zones grises indépendamment des pressions commerciales. Vous consultez le service compliance dans les situations incertaines. Vous documentez vos raisonnements dans les décisions sensibles. Cette évaluation systématique du risque de perception — qui suppose d'avoir intégré que la légalité formelle n'est pas le seul critère pertinent — est ce qui protège votre organisation dans les zones les plus sensibles." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre organisation a un programme anticorruption sur le papier mais personne ne l'applique vraiment.",
        tags: ["culture anticorruption", "programme"],
        answers: [
          { text: "Je laisse — la conformité de façade est suffisante pour se protéger.", score: 0 },
          { text: "Je cherche à rendre le programme concret et opérationnel dans mon équipe.", score: 2 },
          { text: "J'en parle à la conformité pour qu'elle renforce le programme.", score: 1 },
          { text: "J'applique pour moi-même sans chercher à influencer les autres.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous rendez le programme anticorruption concret et opérationnel dans votre équipe plutôt que de le traiter comme un exercice formel.",
        tags: ["culture anticorruption", "opérationnalisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation valorise publiquement l'intégrité mais récompense silencieusement ceux qui obtiennent des contrats par tous les moyens.",
        tags: ["culture anticorruption", "dilemme performance"],
        answers: [
          { text: "Je m'aligne sur les comportements récompensés — les mots comptent moins que les actes.", score: 0 },
          { text: "Je m'en tiens aux valeurs déclarées — je signale le décalage à ma direction.", score: 2 },
          { text: "Je m'adapte en cherchant le juste milieu entre les deux.", score: 0 },
          { text: "Je protège mon équipe en ne valorisant que les comportements conformes.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "choix",
        text: "Une formation anticorruption est proposée à votre équipe. Certains membres la jugent inutile pour leur fonction.",
        tags: ["culture anticorruption", "formation"],
        answers: [
          { text: "Je laisse ceux qui se sentent non concernés ne pas participer.", score: 0 },
          { text: "Je m'assure que tout le monde participe et je souligne la pertinence pour chaque fonction.", score: 2 },
          { text: "Je la rends obligatoire sans explication — les règles sont les règles.", score: 0.5 },
          { text: "Je propose une version adaptée aux fonctions qui se sentent non concernées.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "choix",
        text: "Un partenaire vous dit que votre concurrence ne se prive pas de pratiques que vous refusez. Il sous-entend que votre rigueur vous met en désavantage.",
        tags: ["culture anticorruption", "pression externe"],
        answers: [
          { text: "Je reconsidère ma position — si tout le monde le fait, le désavantage est réel.", score: 0 },
          { text: "Je maintiens ma position — la comparaison aux pratiques des concurrents n'est pas un argument éthique.", score: 2 },
          { text: "Je remonte l'information à ma direction pour qu'elle décide.", score: 1 },
          { text: "Je cherche à vérifier si ses allégations sur les concurrents sont fondées.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez votre ligne anticorruption même quand des partenaires affirment que vos concurrents ne se gênent pas.",
        tags: ["culture anticorruption", "résistance concurrence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "choix",
        text: "Votre direction envoie des signaux ambigus sur les pratiques commerciales — 'faites ce qu'il faut' sans préciser.",
        tags: ["culture anticorruption", "signaux direction"],
        answers: [
          { text: "J'interprète les signaux en ma faveur — si la direction voulait des limites claires, elle les aurait posées.", score: 0 },
          { text: "Je demande des clarifications explicites sur ce qui est attendu.", score: 2 },
          { text: "Je m'en tiens à ma propre ligne de conduite sans chercher à clarifier.", score: 1.5 },
          { text: "Je suppose que 'faites ce qu'il faut' signifie respectez les règles.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous identifiez qu'un représentant commercial tiers agit en votre nom avec des pratiques contraires à votre politique anticorruption.",
        tags: ["culture anticorruption", "tiers"],
        answers: [
          { text: "Je mets fin au contrat immédiatement et je le signale à la conformité.", score: 2 },
          { text: "Je lui envoie un avertissement écrit tout en maintenant le contrat pour l'instant.", score: 0.5 },
          { text: "Je le surveille de près avant de décider.", score: 0 },
          { text: "Je lui demande de signer un engagement formel de conformité.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous mettez fin immédiatement aux relations avec les tiers qui agissent en votre nom de façon non conforme à votre politique anticorruption.",
        tags: ["culture anticorruption", "tiers"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur a refusé un contrat corruptif et vous l'a signalé. Il a raté ses objectifs ce trimestre à cause de ça.",
        tags: ["culture anticorruption", "performance"],
        answers: [
          { text: "Je lui accorde des circonstances atténuantes mais je note quand même l'écart aux objectifs.", score: 0 },
          { text: "Je protège son évaluation — son intégrité ne doit pas lui coûter professionnellement.", score: 2 },
          { text: "Je rémunère le contrat manqué sur le budget équipe.", score: 1 },
          { text: "Je laisse les RH gérer la question de l'évaluation.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée", resume: "La culture anticorruption de votre organisation est appliquée en surface sans être incarnée.", desc: "La culture anticorruption de votre organisation pourrait encore être appliquée en surface — les formations suivies, les déclarations signées — sans être réellement incarnée dans les décisions et comportements quotidiens. Cette application de surface crée une exposition réelle : les règles sont connues mais pas intégrées, ce qui fait que les situations difficiles se gèrent par défaut plutôt que par principe." },
          moyen: { label: "Pratiques en développement", titre: "Vous incarnez la culture anticorruption mais votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles", resume: "Vous incarnez la culture anticorruption — votre résistance aux signaux ambigus de la direction et votre protection des collaborateurs intègres sont encore perfectibles.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Ce qui pourrait encore être perfectible, c'est la résistance aux signaux ambigus de la direction — les situations où la direction envoie implicitement le signal que les règles sont flexibles — et la protection visible des collaborateurs qui refusent des pratiques problématiques." },
          haut: { label: "Réflexes installés", titre: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs", resume: "Vous incarnez et construisez la culture anticorruption avec cohérence — programme opérationnel, protection des intègres, signaux clairs.", desc: "Vous incarnez la culture anticorruption dans vos comportements. Vous participez activement au programme anticorruption. Vous protégez visiblement les collaborateurs qui refusent des pratiques problématiques. Vous envoyez des signaux clairs sur ce qui est et n'est pas acceptable. Cette construction active et cohérente — qui va au-delà de la conformité formelle — est ce qui crée une culture anticorruption réelle." },
        },
      }
    ],

  },

  "confidentialite-donnees": {
    0: [
      {
        type: "choix",
        text: "Un client vous demande des informations sur les conditions commerciales que vous avez accordées à un autre client.",
        tags: ["confidentialité", "partage externe"],
        answers: [
          { text: "Je les partage — la transparence renforce la confiance.", score: 0 },
          { text: "Je refuse — les conditions accordées à un client sont confidentielles.", score: 2 },
          { text: "Je partage des informations générales sans entrer dans les détails.", score: 0.5 },
          { text: "Je lui demande pourquoi il a besoin de cette information avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Vous discutez d'un dossier client sensible avec un collègue dans un ascenseur où des inconnus sont présents.",
        tags: ["confidentialité", "conversation publique"],
        answers: [
          { text: "Je continue — personne ne fait attention à ce que disent des inconnus.", score: 0 },
          { text: "Je remets la conversation à plus tard dans un endroit approprié.", score: 2 },
          { text: "Je baisse la voix et je parle de façon allusive.", score: 0.5 },
          { text: "Je continue si le sujet n'est pas trop sensible.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "likert",
        text: "Vous veillez à ne pas discuter d'informations confidentielles dans des lieux publics ou semi-publics.",
        tags: ["confidentialité", "lieu"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Vous venez de changer d'employeur. Dans votre nouvel emploi, on vous demande des informations sur votre ancien employeur que vous détenez.",
        tags: ["confidentialité", "ex-employeur"],
        answers: [
          { text: "Je les partage — je ne travaille plus pour eux.", score: 0 },
          { text: "Je rappelle que ces informations sont couvertes par mon obligation de confidentialité même après mon départ.", score: 2 },
          { text: "Je partage les informations qui me semblent non sensibles.", score: 0 },
          { text: "Je laisse mon manager décider si je dois les partager.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Vous partagez sur LinkedIn un article de presse sur votre secteur en commentant avec des informations internes non publiques.",
        tags: ["confidentialité", "réseaux sociaux"],
        answers: [
          { text: "Je laisse — LinkedIn est un réseau professionnel et la transparence est valorisée.", score: 0 },
          { text: "Je retire le post — des informations internes ne doivent pas être partagées publiquement même sur LinkedIn.", score: 2 },
          { text: "Je reformule pour rendre les informations moins identifiables.", score: 0.5 },
          { text: "Je vérifie si les informations sont déjà publiques avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "likert",
        text: "Vous vérifiez qu'aucune information interne non publique ne figure dans vos publications professionnelles sur les réseaux sociaux.",
        tags: ["confidentialité", "réseaux sociaux"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Votre conjoint·e vous pose des questions sur votre travail. Vous êtes tenté·e de lui parler d'un dossier dont vous êtes particulièrement fier·e.",
        tags: ["confidentialité", "famille"],
        answers: [
          { text: "Je lui raconte — la famille n'est pas un tiers problématique.", score: 0 },
          { text: "Je parle de mon travail en termes généraux sans mentionner des informations confidentielles.", score: 2 },
          { text: "Je lui parle en lui demandant de ne rien répéter.", score: 0 },
          { text: "Je lui parle uniquement des aspects non sensibles du dossier.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Vous avez accès à un système informatique qui vous permet de consulter des dossiers de collègues non liés à votre mission.",
        tags: ["confidentialité", "curiosité"],
        answers: [
          { text: "Je les consulte parfois par curiosité professionnelle — avoir une vue d'ensemble est utile.", score: 0 },
          { text: "Je ne consulte que les dossiers nécessaires à mes missions.", score: 2 },
          { text: "Je consulte uniquement si ça peut m'aider à mieux faire mon travail.", score: 0 },
          { text: "Je vérifie si c'est autorisé avant de consulter.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "likert",
        text: "Vous n'accédez qu'aux informations nécessaires à l'exécution de vos missions, même si vous avez techniquement accès à d'autres.",
        tags: ["confidentialité", "périmètre accès"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      },
      {
        type: "choix",
        text: "Un journaliste vous contacte pour obtenir des informations sur votre organisation. Vous n'avez pas d'instruction sur la façon de gérer ce type de demande.",
        tags: ["confidentialité", "journaliste"],
        answers: [
          { text: "Je lui réponds directement — je n'ai pas d'information compromettante à cacher.", score: 0 },
          { text: "Je le dirige vers le service de communication de mon organisation avant de dire quoi que ce soit.", score: 2 },
          { text: "Je lui donne des informations générales sans entrer dans des détails sensibles.", score: 0.5 },
          { text: "Je refuse de lui parler.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit", resume: "Vous partagez des informations confidentielles sans évaluer systématiquement si vous en avez le droit.", desc: "Votre gestion des informations confidentielles pourrait encore manquer d'évaluation systématique — partager des informations parce que l'interlocuteur semble légitime, parce que la demande semble raisonnable, sans vérifier explicitement si vous avez le droit de partager et si la personne a le besoin d'en connaître. Ces comportements font que des informations confidentielles circulent au-delà de leur périmètre légitime." },
          moyen: { label: "Pratiques en développement", titre: "Vous évitez les partages évidents mais les situations moins directes créent encore des angles morts", resume: "Vous évitez les partages évidents — les situations moins directes créent encore des angles morts.", desc: "Vous évitez les partages clairement problématiques. Ce qui pourrait encore créer des angles morts, c'est la situation moins directe — une information partagée dans un contexte informel, une demande qui semble venir d'une source légitime, un partage en interne qui semble anodin mais qui expose l'information à des personnes qui n'ont pas le besoin d'en connaître." },
          haut: { label: "Réflexes installés", titre: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes", resume: "Vous évaluez systématiquement la légitimité de chaque partage d'information, dans tous les contextes.", desc: "Vous évaluez la légitimité de chaque partage d'information — formels et informels, internes et externes. Vous vérifiez que vous avez le droit de partager et que l'interlocuteur a le besoin d'en connaître. Vous traitez les contextes informels avec la même rigueur que les contextes formels. Cette évaluation systématique — qui suppose d'avoir intégré que le contexte informel ne modifie pas les obligations de confidentialité — est ce qui maintient la confidentialité dans toutes les situations." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous collectez des données sur vos clients au-delà de ce qui est nécessaire à votre mission, parce que 'ça pourrait toujours servir'.",
        tags: ["données", "collecte"],
        answers: [
          { text: "Je continue — plus d'informations c'est toujours mieux.", score: 0 },
          { text: "Je ne collecte que les données nécessaires à la mission — le principe de minimisation s'applique.", score: 2 },
          { text: "Je collecte mais je sécurise bien les données excédentaires.", score: 0 },
          { text: "Je vérifie si les données collectées sont couvertes par ma politique de confidentialité.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous ne collectez et ne traitez que les données personnelles strictement nécessaires à votre mission.",
        tags: ["données", "minimisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous transmettez un fichier contenant des données personnelles par email sans chiffrement.",
        tags: ["données", "transfert"],
        answers: [
          { text: "Je laisse — le risque d'interception est faible.", score: 0 },
          { text: "Je chiffre le fichier ou j'utilise un canal sécurisé.", score: 2 },
          { text: "Je vérifie si le destinataire est de confiance avant d'envoyer.", score: 0.5 },
          { text: "Je transmets sans chiffrement mais en mettant le destinataire en copie cachée.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous conservez des données clients bien au-delà de la période nécessaire parce que 'elles pourraient être utiles plus tard'.",
        tags: ["données", "durée"],
        answers: [
          { text: "Je les conserve — la suppression des données est irréversible.", score: 0 },
          { text: "Je respecte les durées de conservation définies et je supprime les données à échéance.", score: 2 },
          { text: "Je les archive plutôt que de les supprimer.", score: 0.5 },
          { text: "Je vérifie avec le service juridique si la conservation prolongée est justifiable.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous réalisez qu'une violation de données personnelles s'est produite dans votre équipe il y a 24 heures. Vous hésitez à le signaler.",
        tags: ["données", "violation"],
        answers: [
          { text: "J'attends de voir si ça a des conséquences avant de signaler.", score: 0 },
          { text: "Je signale immédiatement — les délais légaux de notification courent.", score: 2 },
          { text: "J'évalue d'abord si la violation est grave avant de signaler.", score: 0.5 },
          { text: "Je corrige le problème d'abord puis je signale.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "likert",
        text: "En cas de violation de données, vous signalez immédiatement sans attendre d'évaluer les conséquences.",
        tags: ["données", "violation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous utilisez des données clients collectées dans un contexte précis pour une nouvelle finalité non prévue initialement.",
        tags: ["données", "consentement"],
        answers: [
          { text: "J'utilise — le client est déjà dans notre base.", score: 0 },
          { text: "Je vérifie si la nouvelle utilisation est couverte par le consentement initial ou si un nouveau consentement est nécessaire.", score: 2 },
          { text: "J'utilise si c'est dans l'intérêt du client.", score: 0 },
          { text: "Je consulte le DPO avant d'utiliser les données pour une nouvelle finalité.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "choix",
        text: "Un client vous demande la suppression de ses données personnelles. Ça vous complique la vie opérationnellement.",
        tags: ["données", "droits"],
        answers: [
          { text: "Je retarde la suppression jusqu'à ce que ce soit plus pratique.", score: 0 },
          { text: "Je traite la demande dans les délais légaux même si c'est contraignant.", score: 2 },
          { text: "Je supprime les données accessibles facilement et je conserve le reste.", score: 0 },
          { text: "Je lui explique pourquoi je ne peux pas supprimer certaines données.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous traitez les demandes d'exercice de droits des personnes sur leurs données dans les délais légaux, même quand c'est contraignant.",
        tags: ["données", "droits personnes"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous transmettez des données personnelles à un prestataire sans vérifier s'il offre des garanties suffisantes de protection.",
        tags: ["données", "partage tiers"],
        answers: [
          { text: "Je transmets — c'est un prestataire connu.", score: 0 },
          { text: "Je vérifie les garanties de protection du prestataire avant tout transfert.", score: 2 },
          { text: "Je lui demande de signer une clause de confidentialité et je transmets.", score: 1 },
          { text: "Je consulte le DPO avant tout transfert à un tiers.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité", resume: "Vous traitez les données personnelles sans rigueur sur la minimisation, la durée et la sécurité.", desc: "Votre traitement des données personnelles pourrait encore manquer de rigueur — collecter plus d'informations que nécessaire, conserver des données au-delà de la durée requise, transférer sans vérification des mesures de sécurité. Ces comportements créent des risques de non-conformité réels qui ne dépendent pas de l'intention mais des pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les principales règles sur les données personnelles mais la rigueur sur les situations complexes est encore perfectible", resume: "Vous respectez les principales règles sur les données personnelles — la rigueur sur les situations complexes est encore perfectible.", desc: "Vous respectez les principales règles sur les données personnelles. Ce qui pourrait encore être perfectible, c'est la rigueur sur les situations complexes — les sous-traitants dont les pratiques de sécurité n'ont pas été vérifiées, les données collectées pour un usage qui évolue, les situations transfrontalières dont le cadre juridique n'est pas clairement établi." },
          haut: { label: "Réflexes installés", titre: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations", resume: "Votre gestion des données personnelles est rigoureuse — minimisation, sécurité, droits, violations.", desc: "Vous minimisez la collecte de données aux besoins réels. Vous vérifiez les mesures de sécurité de vos sous-traitants. Vous traitez les demandes d'exercice de droits dans les délais requis. Vous signalez les violations dans les délais légaux. Cette rigueur complète sur toutes les dimensions du traitement des données personnelles — qui suppose d'avoir intégré les obligations au-delà des seules obligations formelles — est ce qui maintient une conformité réelle." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Dans votre nouveau poste, vous utilisez une méthode développée dans votre ancienne organisation pour un projet similaire.",
        tags: ["secret professionnel", "ancien employeur"],
        answers: [
          { text: "J'utilise — c'est mon expertise personnelle, pas la propriété de mon ancien employeur.", score: 0 },
          { text: "Je vérifie si cette méthode est couverte par un accord de confidentialité ou constitue un secret d'affaires.", score: 2 },
          { text: "J'adapte la méthode pour qu'elle ne soit pas identifiable.", score: 0 },
          { text: "Je la partage uniquement avec mon manager en lui disant d'où elle vient.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "likert",
        text: "Avant de quitter un poste, vous vérifiez quelles informations vous pouvez légitimement emporter et lesquelles restent la propriété de l'organisation.",
        tags: ["secret professionnel", "départ"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "choix",
        text: "Dans le cadre d'une procédure judiciaire, un avocat adverse vous demande de témoigner sur des informations confidentielles de votre organisation.",
        tags: ["secret professionnel", "demande externe"],
        answers: [
          { text: "Je témoigne — la justice prime sur la confidentialité.", score: 0 },
          { text: "Je contacte le service juridique de mon organisation avant de répondre à toute demande.", score: 2 },
          { text: "Je refuse de témoigner.", score: 0 },
          { text: "Je témoigne sur les faits généraux sans entrer dans les détails confidentiels.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "choix",
        text: "Vous obtenez par hasard une information confidentielle sur un concurrent. Elle pourrait vous avantager commercialement.",
        tags: ["secret professionnel", "information concurrentielle"],
        answers: [
          { text: "Je l'utilise — si elle m'est parvenue légalement, je peux l'utiliser.", score: 0 },
          { text: "Je vérifie comment elle m'est parvenue et je consulte la conformité avant toute utilisation.", score: 2 },
          { text: "Je l'utilise discrètement sans la documenter.", score: 0 },
          { text: "Je ne l'utilise pas par principe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "choix",
        text: "Vous stockez des informations confidentielles professionnelles sur un service de cloud personnel non approuvé par votre organisation.",
        tags: ["secret professionnel", "cloud"],
        answers: [
          { text: "Je laisse — c'est plus pratique et le risque de fuite est minimal.", score: 0 },
          { text: "Je transfère les informations vers les outils approuvés et je supprime les copies personnelles.", score: 2 },
          { text: "Je sécurise mes accès personnels avec un mot de passe fort.", score: 0 },
          { text: "Je demande à mon organisation d'approuver le service que j'utilise.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "likert",
        text: "Vous ne stockez pas d'informations confidentielles professionnelles sur des outils personnels ou non approuvés par votre organisation.",
        tags: ["secret professionnel", "outils"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "choix",
        text: "Lors d'une conférence, vous partagez des informations sur vos projets en cours avec des pairs d'autres organisations pour avoir leur avis.",
        tags: ["secret professionnel", "entourage professionnel"],
        answers: [
          { text: "Je partage librement — les échanges entre pairs sont valorisants.", score: 0 },
          { text: "Je m'assure de ne partager que ce qui est public ou anonym isé.", score: 2 },
          { text: "Je partage en faisant confiance au jugement de mes interlocuteurs.", score: 0 },
          { text: "Je vérifie si un accord de confidentialité encadre nos échanges.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "choix",
        text: "Vous prenez des notes sur des dossiers confidentiels dans un carnet personnel que vous emportez partout.",
        tags: ["secret professionnel", "prise de notes"],
        answers: [
          { text: "Je laisse — mes notes personnelles ne sont pas un risque.", score: 0 },
          { text: "Je m'assure que mes notes confidentielles sont sécurisées ou que je les tiens dans des systèmes approuvés.", score: 2 },
          { text: "Je prends des notes moins détaillées pour limiter le risque.", score: 0.5 },
          { text: "Je numérise mes notes et je chiffre le fichier.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "likert",
        text: "Vous vous assurez que vos notes et documents contenant des informations confidentielles sont sécurisés ou dans des systèmes approuvés.",
        tags: ["secret professionnel", "supports"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      },
      {
        type: "choix",
        text: "Un tiers vous partage par erreur des informations confidentielles qui ne vous sont pas destinées.",
        tags: ["secret professionnel", "information reçue"],
        answers: [
          { text: "Je les lis et je les utilise — elles m'ont été envoyées.", score: 0 },
          { text: "Je l'informe immédiatement de l'erreur et je supprime les informations sans les utiliser.", score: 2 },
          { text: "Je les lis mais je ne les utilise pas.", score: 0 },
          { text: "Je les conserve au cas où elles seraient utiles dans un autre contexte.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites", resume: "Votre gestion du secret professionnel manque de rigueur sur les outils, les supports et les situations limites.", desc: "Votre gestion du secret professionnel pourrait encore manquer de rigueur sur les dimensions pratiques — utiliser des outils non approuvés pour traiter des informations confidentielles, discuter de sujets sensibles dans des environnements non maîtrisés, conserver des documents confidentiels sur des supports inadaptés. Ces comportements créent des expositions dont l'effet peut être équivalent à une divulgation intentionnelle." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez correctement les situations ordinaires mais les situations limites sur les supports et les outils créent encore des failles", resume: "Vous gérez correctement les situations ordinaires — les situations limites sur les supports et les outils créent encore des failles.", desc: "Vous gérez correctement les situations ordinaires du secret professionnel. Ce qui pourrait encore créer des failles, c'est la situation limite — utiliser un outil personnel pour un sujet urgent, discuter d'un dossier dans un espace public, recevoir par erreur une information confidentielle sans savoir quoi en faire." },
          haut: { label: "Réflexes installés", titre: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur", resume: "Votre gestion du secret professionnel couvre les supports, les outils, les situations limites et les informations reçues par erreur.", desc: "Vous gérez le secret professionnel sur les outils approuvés, dans les espaces maîtrisés, avec les supports adaptés. Vous gérez correctement les informations reçues par erreur — en signalant et en ne les utilisant pas. Vous gérez les situations limites en appliquant le même principe que les situations ordinaires. Cette rigueur complète sur toutes les dimensions pratiques du secret professionnel est ce qui maintient la confidentialité dans les situations qui ne sont pas explicitement couvertes par les règles formelles." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre équipe traite des données sensibles mais n'a pas eu de formation récente sur les obligations de confidentialité.",
        tags: ["culture confidentialité", "formation"],
        answers: [
          { text: "J'attends la prochaine formation organisée par la conformité.", score: 0 },
          { text: "Je prends l'initiative de clarifier les règles essentielles avec mon équipe.", score: 2 },
          { text: "Je leur envoie les documents officiels disponibles.", score: 0.5 },
          { text: "Je les sensibilise au cas par cas quand des situations se présentent.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "likert",
        text: "Vous sensibilisez régulièrement votre équipe aux obligations de confidentialité sans attendre les formations formelles.",
        tags: ["culture confidentialité", "sensibilisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "choix",
        text: "Un incident de confidentialité mineur s'est produit dans votre équipe — un email envoyé au mauvais destinataire.",
        tags: ["culture confidentialité", "incident"],
        answers: [
          { text: "Je laisse — un email mal envoyé ne constitue pas un incident majeur.", score: 0 },
          { text: "Je traite l'incident, j'évalue s'il doit être signalé et j'en tire une leçon pour l'équipe.", score: 2 },
          { text: "Je règle l'incident sans en faire un sujet collectif.", score: 1 },
          { text: "Je le signale à la conformité et je laisse gérer.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe ne classe pas les documents selon leur niveau de confidentialité. Tout est traité de la même façon.",
        tags: ["culture confidentialité", "classification"],
        answers: [
          { text: "Je laisse — la classification est utile dans les grandes organisations, pas dans les équipes de taille réduite.", score: 0 },
          { text: "Je mets en place une classification simple pour que le niveau de protection soit adapté au niveau de sensibilité.", score: 2 },
          { text: "Je rappelle à mon équipe de faire preuve de bon sens sur la sensibilité des documents.", score: 0.5 },
          { text: "Je laisse la DSI définir le système de classification.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur quitte votre équipe. Vous ne vérifiez pas s'il a accès à des données confidentielles qu'il ne devrait plus avoir après son départ.",
        tags: ["culture confidentialité", "départ collaborateur"],
        answers: [
          { text: "Je laisse — la DSI gère les accès et révocations automatiquement.", score: 0 },
          { text: "Je vérifie et je m'assure que ses accès sont révoqués dès son départ.", score: 2 },
          { text: "Je lui demande de supprimer les données qu'il aurait pu conserver.", score: 1 },
          { text: "Je le fais uniquement pour les collaborateurs qui partent dans de mauvaises conditions.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "likert",
        text: "Vous vérifiez que les accès aux données sont révoqués dès le départ d'un collaborateur, pour toutes les séparations.",
        tags: ["culture confidentialité", "départs"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "choix",
        text: "Un prestataire externe doit accéder à des données internes pour réaliser sa mission. Vous lui donnez accès à l'ensemble du système par facilité.",
        tags: ["culture confidentialité", "prestataire"],
        answers: [
          { text: "Je lui donne l'accès complet — il est plus efficace avec toutes les informations.", score: 0 },
          { text: "Je lui donne uniquement l'accès aux données nécessaires à sa mission.", score: 2 },
          { text: "Je lui donne un accès étendu mais temporaire.", score: 0 },
          { text: "Je lui donne accès mais je supervise ses actions.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "choix",
        text: "Vous avez commis une erreur qui a exposé des données confidentielles. Vous êtes tenté·e de la gérer discrètement.",
        tags: ["culture confidentialité", "erreur signalement"],
        answers: [
          { text: "Je la gère discrètement — l'impact est limité.", score: 0 },
          { text: "Je la signale selon les procédures en vigueur — l'auto-évaluation de l'impact ne m'appartient pas.", score: 2 },
          { text: "Je corrige l'erreur puis j'évalue si ça mérite d'être signalé.", score: 0.5 },
          { text: "Je le signale uniquement si l'impact dépasse un certain seuil.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "likert",
        text: "Vous signalez vos propres erreurs de confidentialité selon les procédures, sans en auto-évaluer unilatéralement la gravité.",
        tags: ["culture confidentialité", "auto-signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      },
      {
        type: "choix",
        text: "Vous remettez un contrat contenant des informations confidentielles à un client sans accord de confidentialité signé.",
        tags: ["culture confidentialité", "contrat"],
        answers: [
          { text: "Je laisse — le client est de confiance et les accords de confidentialité sont des formalités.", score: 0 },
          { text: "Je m'assure qu'un accord de confidentialité est en place avant de remettre des documents sensibles.", score: 2 },
          { text: "Je remets le document en demandant verbalement la discrétion.", score: 0 },
          { text: "Je consulte le service juridique pour savoir si c'est nécessaire.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle", resume: "La culture de confidentialité dans votre équipe est laissée à l'initiative individuelle.", desc: "La culture de confidentialité dans votre équipe pourrait encore reposer sur la prudence individuelle de chacun — sans règles claires sur les outils et les comportements attendus, sans sensibilisation régulière, sans traitement visible des incidents. Ces comportements font que les niveaux de rigueur varient entre les membres de l'équipe et que les incidents ne remontent pas." },
          moyen: { label: "Pratiques en développement", titre: "Vous sensibilisez votre équipe mais votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles", resume: "Vous sensibilisez votre équipe — votre réaction aux incidents et votre rigueur sur les accès sont encore perfectibles.", desc: "Vous sensibilisez votre équipe sur les règles de confidentialité. Ce qui pourrait encore être perfectible, c'est votre réaction aux incidents — traiter les incidents de confidentialité comme des occasions d'apprentissage et non comme des fautes — et la rigueur sur les accès — vérifier régulièrement que les accès aux informations confidentielles correspondent aux besoins réels." },
          haut: { label: "Réflexes installés", titre: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité", resume: "Vous construisez une culture de confidentialité dans votre équipe par la sensibilisation, les processus et l'exemplarité.", desc: "Vous sensibilisez régulièrement votre équipe. Vous vérifiez que les accès correspondent aux besoins réels. Vous traitez les incidents comme des occasions d'apprentissage. Vous incarnez vous-même les pratiques de confidentialité que vous demandez. Cette construction active de la culture de confidentialité — par la sensibilisation, les processus et l'exemplarité — est ce qui crée une équipe qui gère la confidentialité par réflexe et non seulement par règle." },
        },
      }
    ],

  },

  "dilemmes-ethiques": {
    0: [
      {
        type: "choix",
        text: "Votre responsable vous demande de traiter un dossier en urgence. En avançant, vous réalisez que la démarche contourne une procédure interne. L'objectif est légitime.",
        tags: ["dilemme", "identification"],
        answers: [
          { text: "Je continue — l'objectif est bon et les procédures internes ne sont pas des lois.", score: 0 },
          { text: "Je m'arrête et je pose la question à mon responsable avant de continuer.", score: 2 },
          { text: "Je continue mais je note l'irrégularité pour me couvrir.", score: 0 },
          { text: "Je fais ce qui est demandé — s'il y a un problème, c'est la responsabilité de mon responsable.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "choix",
        text: "Une pratique dans votre organisation n'est ni clairement autorisée ni clairement interdite. Tout le monde la fait depuis des années.",
        tags: ["dilemme", "zone grise"],
        answers: [
          { text: "Je l'applique — si c'était problématique, quelqu'un l'aurait déjà dit.", score: 0 },
          { text: "Je cherche à clarifier son statut auprès des personnes compétentes avant de continuer.", score: 2 },
          { text: "Je l'applique prudemment en évitant les cas les plus visibles.", score: 0 },
          { text: "J'en parle à un collègue de confiance pour avoir son avis.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "likert",
        text: "Quand une situation vous semble éthiquement douteuse, vous vous arrêtez pour l'analyser plutôt que de continuer sous la pression de l'urgence.",
        tags: ["dilemme", "arrêt"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "choix",
        text: "On vous demande de faire quelque chose qui n'est pas illégal mais qui va à l'encontre de vos valeurs personnelles.",
        tags: ["dilemme", "valeurs"],
        answers: [
          { text: "Je le fais — le travail sépare valeurs personnelles et professionnelles.", score: 0 },
          { text: "J'exprime mon inconfort avant de décider si je l'exécute.", score: 2 },
          { text: "Je l'exécute en mettant mes valeurs de côté.", score: 0 },
          { text: "Je refuse sans explication.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "choix",
        text: "Vous vous surprenez à trouver de bonnes raisons de faire quelque chose dont vous savez instinctivement qu'il est problématique.",
        tags: ["dilemme", "rationalisation"],
        answers: [
          { text: "Je m'écoute — si j'arrive à me convaincre que c'est bien, c'est probablement bien.", score: 0 },
          { text: "Je reconnais le signal d'alarme — la rationalisation est souvent le signe qu'on s'apprête à franchir une ligne.", score: 2 },
          { text: "Je cherche un tiers pour valider mon raisonnement.", score: 1.5 },
          { text: "Je continue si les arguments me semblent solides.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "likert",
        text: "Quand vous vous surprenez à chercher des justifications pour une décision qui vous semble intuitivement problématique, vous traitez ça comme un signal d'alarme.",
        tags: ["dilemme", "rationalisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "choix",
        text: "Deux valeurs importantes de votre organisation entrent en conflit dans une situation concrète — efficacité et équité, par exemple.",
        tags: ["dilemme", "conflit valeurs"],
        answers: [
          { text: "Je priorise la valeur qui correspond à la culture dominante de l'organisation.", score: 0 },
          { text: "J'identifie explicitement le conflit de valeurs avant de chercher une voie qui les respecte au mieux toutes les deux.", score: 2 },
          { text: "Je choisis la valeur qui me semble la plus importante dans ce contexte.", score: 1 },
          { text: "Je remonte le conflit à mon responsable pour qu'il arbitre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "choix",
        text: "Vous devez prendre une décision rapidement. Vous n'avez pas eu le temps d'évaluer toutes ses conséquences éthiques.",
        tags: ["dilemme", "conséquences"],
        answers: [
          { text: "Je décide — l'analyse éthique est un luxe que l'urgence ne permet pas toujours.", score: 0 },
          { text: "Je prends la décision la plus prudente éthiquement avec le temps dont je dispose.", score: 2 },
          { text: "Je décide puis j'évalue les conséquences éthiques après pour corriger si nécessaire.", score: 0.5 },
          { text: "Je reporte la décision pour avoir le temps de l'analyser.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "likert",
        text: "Sous pression de temps, vous choisissez la voie la plus prudente éthiquement plutôt que la plus efficace à court terme.",
        tags: ["dilemme", "prudence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      },
      {
        type: "choix",
        text: "Vous avez pris une décision qui vous semblait juste mais elle vous laisse un sentiment d'inconfort persistant.",
        tags: ["dilemme", "inconfort"],
        answers: [
          { text: "Je laisse — l'inconfort après une décision difficile est normal et ne signifie pas qu'on a mal fait.", score: 0.5 },
          { text: "Je prends l'inconfort au sérieux et je réévalue si ma décision était vraiment la meilleure.", score: 2 },
          { text: "Je cherche à m'en convaincre pour dissiper l'inconfort.", score: 0 },
          { text: "J'en parle à quelqu'un pour avoir un regard extérieur.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique", resume: "Vous ne reconnaissez pas systématiquement les situations qui méritent un arrêt pour réflexion éthique.", desc: "Votre détection des dilemmes éthiques pourrait encore être insuffisante — passer à côté de situations qui méritent une réflexion éthique parce qu'elles ne ressemblent pas à ce que vous imaginez être un dilemme éthique, rationaliser rapidement des situations qui créent pourtant un inconfort. Cette détection insuffisante fait que des décisions importantes sont prises sans la réflexion qu'elles méritaient." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les dilemmes évidents mais les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts", resume: "Vous reconnaissez les dilemmes évidents — les zones grises, la rationalisation et les conflits de valeurs créent encore des angles morts.", desc: "Vous reconnaissez les dilemmes éthiques clairement identifiables. Ce qui pourrait encore créer des angles morts, c'est la zone grise — la situation qui crée un inconfort sans être clairement problématique — la rationalisation — les arguments qui semblent légitimer une décision qui mérite pourtant réflexion — et les conflits de valeurs — les situations où deux valeurs auxquelles vous adhérez pointent vers des décisions incompatibles." },
          haut: { label: "Réflexes installés", titre: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant", resume: "Vous reconnaissez les dilemmes avant qu'ils éclatent — zones grises, rationalisations, conflits de valeurs, inconfort persistant.", desc: "Vous détectez les dilemmes éthiques avant qu'ils deviennent des crises. Vous êtes attentif·ve aux rationalisations — les arguments qui semblent légitimer une décision mais qui masquent une question éthique non résolue. Vous prenez au sérieux l'inconfort persistant comme signal d'un dilemme non résolu. Cette détection précoce — qui suppose d'avoir développé une sensibilité aux signaux précurseurs des dilemmes éthiques — est ce qui permet de les traiter quand c'est encore simple." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous faites face à un dilemme. Vous avez tendance à n'évaluer l'impact que pour les parties directement impliquées.",
        tags: ["analyse", "parties prenantes"],
        answers: [
          { text: "Je laisse — les impacts indirects sont trop spéculatifs pour être pris en compte.", score: 0 },
          { text: "J'élargis mon analyse aux parties prenantes moins visibles mais potentiellement affectées.", score: 2 },
          { text: "J'évalue les impacts directs d'abord puis les indirects si le temps le permet.", score: 1 },
          { text: "Je me concentre sur l'impact pour l'organisation — c'est ce qui compte.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "likert",
        text: "Avant de décider, vous identifiez toutes les parties prenantes affectées, pas seulement celles qui sont directement visibles.",
        tags: ["analyse", "parties prenantes"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "choix",
        text: "Vous hésitez sur une décision éthiquement complexe. Vous ne savez pas quel test appliquer pour évaluer si c'est la bonne décision.",
        tags: ["analyse", "test"],
        answers: [
          { text: "Je fais confiance à mon intuition — elle capture ce que l'analyse ne voit pas.", score: 0.5 },
          { text: "J'applique plusieurs tests : serais-je à l'aise si c'était public ? si ma famille le voyait ? si c'était dans le journal ?", score: 2 },
          { text: "Je me demande si c'est légal — si oui, c'est acceptable.", score: 0 },
          { text: "Je demande l'avis d'un pair de confiance.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "choix",
        text: "Une décision semble éthiquement acceptable à court terme mais pourrait créer des précédents problématiques à long terme.",
        tags: ["analyse", "long terme"],
        answers: [
          { text: "Je me concentre sur le court terme — le futur est incertain et les contextes changent.", score: 0 },
          { text: "Je pondère le précédent que je créé autant que la décision immédiate.", score: 2 },
          { text: "Je prends la décision en notant qu'elle ne devrait pas faire précédent.", score: 0 },
          { text: "Je consulte les personnes concernées par le long terme avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "choix",
        text: "Votre analyse d'un dilemme favorise toujours la même partie prenante — le client, l'organisation ou vous-même. Vous ne l'avez pas remarqué.",
        tags: ["analyse", "biais"],
        answers: [
          { text: "Je laisse — chaque décision doit être cohérente avec ses valeurs.", score: 0 },
          { text: "Je prends du recul pour identifier les biais systématiques dans mes analyses.", score: 2 },
          { text: "Je diversifie mes interlocuteurs pour contrebalancer mon biais.", score: 1.5 },
          { text: "Je m'en rends compte mais je pense que mon parti pris est justifié.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "likert",
        text: "Vous prenez du recul régulièrement pour identifier si vos analyses éthiques favorisent systématiquement les mêmes parties prenantes.",
        tags: ["analyse", "biais"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "choix",
        text: "Face à un dilemme complexe, vous ne savez pas à quelles ressources internes ou externes vous pouvez avoir recours.",
        tags: ["analyse", "ressources"],
        answers: [
          { text: "Je me débrouille seul — les dilemmes éthiques sont une affaire personnelle.", score: 0 },
          { text: "Je cherche les ressources disponibles — déontologue, conformité, pairs, comité éthique — avant de décider seul.", score: 2 },
          { text: "J'en parle à mon responsable — c'est lui qui a l'autorité pour trancher.", score: 1 },
          { text: "Je cherche des cas similaires dans la jurisprudence ou les codes sectoriels.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "choix",
        text: "Vous réalisez après coup que votre décision était éthiquement mauvaise. Vous n'avez pas envie de l'analyser.",
        tags: ["analyse", "mauvaise décision"],
        answers: [
          { text: "Je tourne la page — ruminer ne change rien.", score: 0 },
          { text: "Je prends le temps d'analyser ce qui m'a conduit à cette décision pour éviter de la reproduire.", score: 2 },
          { text: "J'en parle à un tiers pour dépersonnaliser l'analyse.", score: 1.5 },
          { text: "Je note ce que j'aurais dû faire sans analyser pourquoi je ne l'ai pas fait.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "likert",
        text: "Vous analysez vos mauvaises décisions éthiques pour comprendre ce qui vous y a conduit, pas seulement pour corriger leurs conséquences.",
        tags: ["analyse", "apprentissage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation n'a pas de cadre éthique formel. Vous décidez de façon entièrement intuitive.",
        tags: ["analyse", "cadre"],
        answers: [
          { text: "C'est suffisant — les valeurs personnelles sont un guide plus fiable que les cadres formels.", score: 0 },
          { text: "Je construis un cadre personnel explicite pour ne pas dépendre uniquement de l'intuition.", score: 2 },
          { text: "Je cherche des cadres de référence sectoriels ou professionnels qui peuvent m'aider.", score: 1.5 },
          { text: "Je demande à mon organisation de définir un cadre éthique formel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent", resume: "Votre analyse des dilemmes est partielle — parties prenantes incomplètes, biais non traités, apprentissage absent.", desc: "Votre analyse des dilemmes éthiques pourrait encore être partielle — se concentrer sur les parties prenantes directes sans considérer les parties prenantes indirectes, analyser sans questionner vos propres biais, ne pas tirer d'apprentissages des dilemmes résolus pour améliorer votre jugement futur. Ces lacunes font que votre analyse atteint une certaine profondeur sans atteindre la rigueur complète." },
          moyen: { label: "Pratiques en développement", titre: "Vous analysez de façon structurée mais l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants", resume: "Vous analysez de façon structurée — l'élargissement aux parties prenantes indirectes et le travail sur vos biais sont encore insuffisants.", desc: "Vous analysez les dilemmes éthiques de façon structurée. Ce qui pourrait encore être insuffisant, c'est l'élargissement aux parties prenantes indirectes — celles qui seront affectées sans être directement impliquées dans la décision — et le travail sur vos propres biais — identifier comment votre position, vos intérêts ou votre historique influencent votre analyse." },
          haut: { label: "Réflexes installés", titre: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs", resume: "Votre analyse est rigoureuse et honnête — parties prenantes complètes, biais traités, apprentissage des erreurs.", desc: "Votre analyse intègre les parties prenantes directes et indirectes. Vous identifiez et nommez vos propres biais dans l'analyse. Vous tirez des apprentissages des dilemmes résolus — et des erreurs de jugement — pour améliorer votre capacité future. Cette analyse rigoureuse et honnête — qui suppose d'accepter l'inconfort de voir ses propres biais — est ce qui fait progresser réellement le jugement éthique." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Votre responsable vous demande de prendre une décision avec laquelle vous avez un désaccord éthique fort. Il est pressé.",
        tags: ["pression", "hiérarchique"],
        answers: [
          { text: "J'exécute — la hiérarchie a la légitimité pour trancher les dilemmes.", score: 0 },
          { text: "J'exprime mon désaccord clairement avant d'exécuter ou de refuser selon la gravité.", score: 2 },
          { text: "J'exécute en notant mon désaccord par écrit.", score: 1 },
          { text: "Je retarde l'exécution pour me donner le temps de réfléchir.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "likert",
        text: "Vous exprimez vos désaccords éthiques clairement et avant d'agir, même sous pression de temps ou d'autorité.",
        tags: ["pression", "expression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "choix",
        text: "Tout le groupe semble d'accord sur une décision qui vous semble éthiquement problématique. Vous êtes le seul à hésiter.",
        tags: ["pression", "groupe"],
        answers: [
          { text: "Je me rallie à l'opinion du groupe — si tout le monde est d'accord, c'est probablement acceptable.", score: 0 },
          { text: "J'exprime mon inconfort même si je suis seul·e — la majorité n'est pas un critère éthique.", score: 2 },
          { text: "J'attends de voir si quelqu'un d'autre soulève la question.", score: 0 },
          { text: "J'en parle discrètement à un membre du groupe pour ne pas m'isoler.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "choix",
        text: "Un client important met la pression pour que vous preniez une décision qui vous semble éthiquement compromise. Il menace de partir.",
        tags: ["pression", "client"],
        answers: [
          { text: "J'accepte — perdre ce client serait dommageable et la situation n'est pas si grave.", score: 0 },
          { text: "Je maintiens ma position — la menace d'un client ne change pas l'analyse éthique.", score: 2 },
          { text: "Je cherche un compromis qui satisfasse le client sans franchir mes lignes.", score: 1 },
          { text: "Je remonte la situation à ma direction pour qu'elle décide.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "choix",
        text: "On vous presse de décider vite sur un dilemme que vous n'avez pas eu le temps d'analyser correctement.",
        tags: ["pression", "délai"],
        answers: [
          { text: "Je décide rapidement en faisant confiance à mon intuition — l'urgence justifie la simplicité.", score: 0 },
          { text: "Je demande le délai minimum nécessaire pour une analyse correcte en expliquant pourquoi.", score: 2 },
          { text: "Je prends la décision la moins risquée éthiquement et je documente mes doutes.", score: 1.5 },
          { text: "Je délègue à quelqu'un qui a plus de recul.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "likert",
        text: "Quand l'urgence ne vous laisse pas le temps d'analyser correctement un dilemme, vous demandez un délai plutôt que de décider sans analyse.",
        tags: ["pression", "délai"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "choix",
        text: "La décision éthiquement correcte est aussi la décision inconfortable — elle implique de décevoir quelqu'un d'important.",
        tags: ["pression", "confort"],
        answers: [
          { text: "Je choisis la voie confortable — la relation compte et aucun dilemme n'est absolu.", score: 0 },
          { text: "Je prends la décision correcte même si elle est inconfortable.", score: 2 },
          { text: "Je cherche une façon de minimiser l'impact sur la relation.", score: 1 },
          { text: "Je remonte le dilemme à ma direction pour éviter d'avoir à le gérer seul.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "choix",
        text: "Vous devez décider mais vous n'êtes pas sûr·e quelle option est la plus éthique. Les deux ont des arguments sérieux.",
        tags: ["pression", "incertitude"],
        answers: [
          { text: "Je choisis la plus avantageuse pour l'organisation — en cas d'incertitude, l'organisation prime.", score: 0 },
          { text: "Je choisis l'option la plus prudente et je documente mon raisonnement.", score: 2 },
          { text: "Je consulte la conformité ou le déontologue pour m'aider à trancher.", score: 1.5 },
          { text: "Je m'abstiens — en cas de doute réel, ne pas décider est parfois la meilleure option.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "likert",
        text: "En cas d'incertitude éthique réelle, vous choisissez la voie la plus prudente et vous en documentez le raisonnement.",
        tags: ["pression", "prudence incertitude"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes impliqué·e dans un projet dont la direction éthique vous préoccupe de plus en plus. Vous envisagez de vous en retirer.",
        tags: ["pression", "retrait"],
        answers: [
          { text: "Je reste — me retirer serait abandonner le projet à des personnes moins soucieuses de l'éthique.", score: 0 },
          { text: "Je formule clairement mes préoccupations avant de décider si le retrait est nécessaire.", score: 2 },
          { text: "Je reste en cherchant à infléchir la direction du projet de l'intérieur.", score: 1.5 },
          { text: "Je me retire discrètement sans explication pour ne pas créer de tension.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique", resume: "Sous pression — hiérarchique, groupe, client — vous accommodez votre position éthique.", desc: "Votre position éthique pourrait encore céder sous pression — la hiérarchie qui attend une décision dans une direction, le groupe qui converge vers une position que vous ne partagez pas, le client stratégique dont la demande crée un dilemme. Ces cédages font que votre position éthique est conditionnelle aux circonstances plutôt qu'ancrée dans des principes." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions ordinaires mais les pressions maximales — hiérarchique directe, client stratégique — créent encore des failles", resume: "Vous résistez aux pressions ordinaires — les pressions maximales créent encore des failles.", desc: "Vous résistez aux pressions ordinaires sans accommoder votre position. Ce qui pourrait encore créer des failles, c'est la pression maximale — l'instruction directe d'un dirigeant, la demande d'un client stratégique, la pression d'un groupe unanime. Ces situations de pression maximale sont celles où la résistance est la plus difficile et la plus importante." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse", resume: "Vous résistez à toutes les pressions — hiérarchique, groupe, client, urgence — en maintenant votre analyse.", desc: "Vous résistez à toutes les pressions — hiérarchique, de groupe, commerciale, temporelle. Vous nommez les dilemmes plutôt que de les absorber. Vous cherchez des soutiens — pairs, responsable éthique, conformité — quand la pression est forte. Cette résistance maintenue dans toutes les situations de pression — qui suppose d'avoir clarifié vos lignes non franchissables — est ce qui crée un jugement éthique réellement fiable." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous prenez des décisions importantes chaque semaine mais vous ne prenez jamais le temps de réfléchir à leur dimension éthique après coup.",
        tags: ["jugement", "réflexion"],
        answers: [
          { text: "Je laisse — si ça se passe bien, il n'y a pas besoin de réfléchir.", score: 0 },
          { text: "Je prends l'habitude d'une réflexion courte régulière sur les décisions que j'ai prises.", score: 2 },
          { text: "Je réfléchis uniquement quand quelque chose ne s'est pas bien passé.", score: 0.5 },
          { text: "J'intègre la réflexion éthique dans mes entretiens annuels.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous prenez régulièrement du recul sur les décisions que vous avez prises pour en évaluer la dimension éthique.",
        tags: ["jugement", "réflexivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Votre organisation propose une formation sur l'éthique en entreprise. Vous n'êtes pas sûr·e d'en avoir besoin.",
        tags: ["jugement", "formation"],
        answers: [
          { text: "Je ne participe pas — l'éthique s'apprend dans la pratique, pas en formation.", score: 0 },
          { text: "Je participe — le jugement éthique se développe et se questionne continuellement.", score: 2 },
          { text: "Je participe pour être en règle mais sans attente particulière.", score: 0.5 },
          { text: "Je participe si la formation semble concrète et pas trop théorique.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez aucun pair, mentor ou référent avec qui discuter régulièrement de vos dilemmes éthiques.",
        tags: ["jugement", "référent"],
        answers: [
          { text: "Je laisse — les dilemmes éthiques se gèrent seul.", score: 0 },
          { text: "Je cherche activement à construire ce type de relation de confiance.", score: 2 },
          { text: "Je sollicite mes collègues ponctuellement sans relation de fond.", score: 1 },
          { text: "Je m'appuie sur la conformité pour les questions importantes.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous avez résolu un dilemme éthique difficile d'une façon qui vous semble bonne. Vous n'en parlez à personne.",
        tags: ["jugement", "partage"],
        answers: [
          { text: "Je laisse — partager ses dilemmes personnels peut être mal interprété.", score: 0 },
          { text: "Je le partage si ça peut aider d'autres à développer leur propre jugement.", score: 2 },
          { text: "Je le partage uniquement avec mon responsable pour lui montrer mon engagement.", score: 0.5 },
          { text: "Je le partage si quelqu'un me pose la question.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous partagez vos dilemmes éthiques résolus avec des pairs quand ça peut développer leur jugement.",
        tags: ["jugement", "partage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez jamais clairement défini pour vous-même les lignes que vous refuseriez de franchir dans votre travail, quelles que soient les circonstances.",
        tags: ["jugement", "lignes"],
        answers: [
          { text: "Je laisse — définir des lignes rigides en avance est artificiel.", score: 0 },
          { text: "Je prends le temps de définir ces lignes pour moi-même — les avoir pensées à froid facilite les décisions sous pression.", score: 2 },
          { text: "Je les identifie au moment où je suis confronté·e à elles.", score: 0 },
          { text: "Je m'appuie sur le code de déontologie de ma profession.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous vous comportez différemment selon que vous êtes observé·e ou non dans des situations à dimension éthique.",
        tags: ["jugement", "cohérence"],
        answers: [
          { text: "C'est normal — l'observation modifie les comportements de chacun.", score: 0 },
          { text: "Je cherche à aligner mes comportements observés et non observés.", score: 2 },
          { text: "Je m'assure au moins d'être irréprochable quand je suis observé·e.", score: 0 },
          { text: "Je prends conscience de l'écart et je travaille à le réduire.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Votre comportement éthique est cohérent que vous soyez observé·e ou non.",
        tags: ["jugement", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Votre jugement éthique s'est-il modifié avec l'expérience ? Vous n'y avez jamais réfléchi.",
        tags: ["jugement", "évolution"],
        answers: [
          { text: "Je laisse — l'évolution du jugement est un phénomène naturel qui ne nécessite pas d'analyse.", score: 0 },
          { text: "Je prends le temps de réfléchir à comment mon jugement éthique a évolué et pourquoi.", score: 2 },
          { text: "Je l'observe au fil des décisions sans analyse formelle.", score: 1 },
          { text: "Je reconnais que mon jugement évolue sans chercher à en comprendre les ressorts.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre jugement éthique ne fait pas l'objet d'un développement actif", resume: "Votre jugement éthique ne fait pas l'objet d'un développement actif.", desc: "Votre jugement éthique pourrait encore se développer principalement par l'expérience sans réflexion délibérée — sans questionnement sur les dilemmes traversés, sans recherche de diversité de perspectives, sans travail sur les domaines où votre jugement est le moins sûr. Ce développement passif laisse des angles morts importants qui ne se comblent pas naturellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous développez activement votre jugement mais votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes", resume: "Vous développez activement votre jugement — votre réflexivité systématique et la définition de vos lignes sont encore insuffisantes.", desc: "Vous développez activement votre jugement éthique. Ce qui pourrait encore être insuffisant, c'est la réflexivité systématique — revenir sur les décisions passées pour évaluer leur qualité éthique rétrospectivement — et la définition explicite de vos lignes non franchissables — savoir à l'avance, avant d'être dans la situation, ce que vous refuserez dans tous les cas." },
          haut: { label: "Réflexes installés", titre: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé", resume: "Vous développez activement votre jugement éthique — réflexivité, lignes définies, cohérence observé/non observé.", desc: "Vous développez votre jugement éthique par une réflexivité systématique sur vos décisions passées. Vous avez défini vos lignes non franchissables — ce que vous refuserez dans tous les cas. Vous veillez à la cohérence entre ce que vous observez en silence et ce que vous ne seriez pas prêt·e à faire vous-même. Ce développement actif et rigoureux du jugement éthique est ce qui crée une capacité de décision fiable dans les situations difficiles." },
        },
      }
    ],

  },

  "integrite-reporting": {
    0: [
      {
        type: "choix",
        text: "Votre tableau de bord mensuel montre des résultats décevants. Vous avez le choix de la présenter telle quelle ou de mettre en avant les indicateurs les plus favorables.",
        tags: ["reporting", "données exactes"],
        answers: [
          { text: "Je mets en avant les meilleurs indicateurs — la communication doit être positive.", score: 0 },
          { text: "Je présente les résultats complets avec une analyse honnête de ce qui va et ce qui ne va pas.", score: 2 },
          { text: "Je présente les indicateurs clés en les contextualisant favorablement.", score: 0.5 },
          { text: "Je présente tout mais je minimise les résultats décevants.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Votre direction vous demande de revoir à la hausse vos prévisions pour rendre le budget plus attractif. Vos propres projections sont plus prudentes.",
        tags: ["reporting", "pression direction"],
        answers: [
          { text: "J'ajuste selon la demande — la direction a une vision plus large que moi.", score: 0 },
          { text: "Je maintiens mes projections honnêtes et j'explique pourquoi je ne peux pas les revoir à la hausse.", score: 2 },
          { text: "Je fais une version optimiste et une version réaliste pour laisser le choix.", score: 1 },
          { text: "J'ajuste légèrement dans le sens demandé sans aller trop loin.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez vos projections et analyses honnêtes même quand votre direction vous demande de les revoir dans un sens plus favorable.",
        tags: ["reporting", "résistance pression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous réalisez que votre dernier reporting contenait une erreur significative. La direction a déjà pris des décisions sur sa base.",
        tags: ["reporting", "erreur"],
        answers: [
          { text: "Je laisse — la décision est prise et corriger rétroactivement créerait de la confusion.", score: 0 },
          { text: "Je le signale immédiatement et je fournis le reporting corrigé.", score: 2 },
          { text: "Je corrige silencieusement dans le prochain reporting.", score: 0 },
          { text: "Je le signale uniquement si la décision prise était mauvaise.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous changez de méthodologie de calcul pour un indicateur. Le changement améliore les résultats apparents mais le changement de méthode n'est pas mentionné.",
        tags: ["reporting", "méthodologie"],
        answers: [
          { text: "Je laisse — les résultats sont réels même si la méthode a changé.", score: 0 },
          { text: "Je mentionne explicitement le changement de méthode dans le reporting.", score: 2 },
          { text: "Je le mentionne dans les notes de bas de page.", score: 1 },
          { text: "Je reviens à l'ancienne méthode — changer crée des comparaisons trompeuses.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Quand vous changez de méthodologie, vous le mentionnez explicitement dans votre reporting.",
        tags: ["reporting", "transparence méthode"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Votre reporting est présenté à la direction mais vous n'avez pas encore toutes les données. Vous pourriez les obtenir dans deux jours.",
        tags: ["reporting", "données incomplètes"],
        answers: [
          { text: "Je présente avec les données disponibles sans mentionner ce qui manque.", score: 0 },
          { text: "Je présente en indiquant clairement les données manquantes et leurs implications.", score: 2 },
          { text: "Je demande un report de deux jours pour avoir un reporting complet.", score: 1.5 },
          { text: "Je complète avec des estimations sans les identifier comme telles.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Les résultats de votre équipe sont bons mais entièrement liés à des facteurs externes favorables. Votre reporting met en avant la performance de l'équipe sans contextualiser.",
        tags: ["reporting", "contexte trompeur"],
        answers: [
          { text: "Je laisse — si les résultats sont bons, l'équipe mérite d'être valorisée.", score: 0 },
          { text: "Je contextualise honnêtement la part de performance réelle et la part liée aux facteurs externes.", score: 2 },
          { text: "Je mentionne les facteurs externes en note mais je mets en avant les résultats.", score: 1 },
          { text: "Je contextualis uniquement si on me le demande.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "likert",
        text: "Vous contextualisez vos bons résultats honnêtement, y compris quand des facteurs externes ont contribué de façon déterminante.",
        tags: ["reporting", "contexte"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      },
      {
        type: "choix",
        text: "Vous produisez des prévisions que vous savez trop optimistes pour rassurer la direction. Vous espérez que la réalité s'en approchera.",
        tags: ["reporting", "prévisions"],
        answers: [
          { text: "Je produis les prévisions optimistes — elles créent une dynamique positive.", score: 0 },
          { text: "Je produis les prévisions les plus honnêtes possible et j'assume leur prudence.", score: 2 },
          { text: "Je produis deux scénarios — optimiste et réaliste — sans choisir.", score: 1 },
          { text: "Je produis les prévisions optimistes mais je note mes réserves personnellement.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes", resume: "Vos reportings sont orientés pour rassurer plutôt que pour informer — données sélectives, contexte trompeur, prévisions optimistes.", desc: "Vos reportings pourraient encore être construits pour rassurer plutôt que pour informer — sélectionner les indicateurs favorables, contextualiser les résultats défavorables de façon à en minimiser la portée, projeter des prévisions optimistes pour éviter une conversation difficile. Ces comportements font que les décisions prises sur la base de vos reportings ne reposent pas sur une vision exacte de la réalité." },
          moyen: { label: "Pratiques en développement", titre: "Vos reportings sont généralement honnêtes mais la pression de la direction et la contextualisation favorable créent encore des accomodements", resume: "Vos reportings sont généralement honnêtes — la pression de la direction et la contextualisation favorable créent encore des accommodements.", desc: "Vos reportings sont généralement honnêtes. Ce qui pourrait encore créer des accommodements, c'est la pression de la direction — la situation où vous savez que les résultats vont créer de la déception ou des questions difficiles — et la contextualisation favorable — les éléments de contexte qui sont techniquement exacts mais qui orientent l'interprétation dans un sens favorable." },
          haut: { label: "Réflexes installés", titre: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes", resume: "Vos reportings sont honnêtes dans tous les contextes — données complètes, méthodes transparentes, prévisions réalistes.", desc: "Vos reportings présentent des données complètes, y compris celles qui sont défavorables. Vos méthodes de mesure sont transparentes et cohérentes. Vos prévisions sont réalistes plutôt qu'optimistes. Vous présentez les résultats défavorables avec le même soin que les résultats favorables. Cette honnêteté complète dans les reportings — qui suppose d'accepter les conversations difficiles qu'une information complète peut déclencher — est ce qui maintient la confiance dans la durée." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous avez pris un engagement de délai que vous ne pourrez pas tenir. Vous l'avez réalisé il y a trois jours.",
        tags: ["engagements", "délai"],
        answers: [
          { text: "J'attends le dernier moment pour prévenir — il est peut-être encore possible de rattraper.", score: 0 },
          { text: "Je préviens immédiatement avec les raisons et une nouvelle date réaliste.", score: 2 },
          { text: "Je préviens à la dernière minute en minimisant l'impact.", score: 0 },
          { text: "Je livre quelque chose de partiel plutôt que de prévenir du retard.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "likert",
        text: "Dès que vous réalisez qu'un engagement ne pourra pas être tenu, vous en informez les parties concernées sans attendre.",
        tags: ["engagements", "alerte précoce"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous avez tendance à promettre plus que vous ne pouvez livrer pour satisfaire vos interlocuteurs sur le moment.",
        tags: ["engagements", "sur-promesse"],
        answers: [
          { text: "Je laisse — mieux vaut viser haut même si on n'atteint pas toujours l'objectif.", score: 0 },
          { text: "Je travaille à n'engager que ce que je peux livrer de façon réaliste.", score: 2 },
          { text: "Je promet beaucoup mais je tiens les engagements les plus importants.", score: 0 },
          { text: "Je calibre mes promesses selon la relation — plus ambitieux avec les interlocuteurs clés.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "choix",
        text: "Sous la pression d'une négociation importante, vous vous engagez sur quelque chose que vous n'êtes pas certain·e de pouvoir livrer.",
        tags: ["engagements", "pression"],
        answers: [
          { text: "J'assume — les engagements sous pression font partie des négociations.", score: 0 },
          { text: "J'indique immédiatement les conditions ou réserves qui s'appliquent.", score: 2 },
          { text: "Je m'engage puis j'évalue si c'est tenable une fois la négociation terminée.", score: 0 },
          { text: "Je valide l'engagement avec mon équipe avant de le confirmer.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "choix",
        text: "Les circonstances ont changé depuis que vous avez pris un engagement. Vous estimez que vous avez de bonnes raisons de ne pas le tenir.",
        tags: ["engagements", "modification"],
        answers: [
          { text: "Je ne tiens pas l'engagement — les circonstances ont changé et c'est compréhensible.", score: 0 },
          { text: "Je reviens vers la partie concernée pour renegocier formellement l'engagement.", score: 2 },
          { text: "Je tiens l'engagement même si les circonstances ont changé.", score: 1 },
          { text: "Je l'informe du changement de circonstances sans lui proposer une renégociation.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "likert",
        text: "Quand les circonstances changent et qu'un engagement devient difficile à tenir, vous renégociez formellement plutôt que de l'ignorer.",
        tags: ["engagements", "renégociation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous n'avez pas tenu un engagement. La partie concernée a subi des conséquences négatives. Vous minimisez votre responsabilité.",
        tags: ["engagements", "conséquences"],
        answers: [
          { text: "Je minimise — les conséquences sont exagérées et d'autres facteurs sont en cause.", score: 0 },
          { text: "J'assume pleinement ma responsabilité et je cherche à réparer.", score: 2 },
          { text: "Je reconnais l'écart mais j'explique les circonstances atténuantes.", score: 0.5 },
          { text: "Je prends acte et je passe à la suite.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "choix",
        text: "Certains de vos engagements sont moins suivis que d'autres selon l'importance de l'interlocuteur.",
        tags: ["engagements", "fiabilité"],
        answers: [
          { text: "C'est logique — les interlocuteurs importants méritent plus d'efforts.", score: 0 },
          { text: "Je travaille à appliquer le même niveau de fiabilité avec tous mes interlocuteurs.", score: 2 },
          { text: "Je priorise naturellement — les engagements critiques sont tenus en priorité.", score: 0.5 },
          { text: "Je me rends compte de ce biais et je le corrige pour les cas les plus déséquilibrés.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "likert",
        text: "Vous appliquez le même niveau de fiabilité dans vos engagements avec tous vos interlocuteurs, indépendamment de leur importance.",
        tags: ["engagements", "fiabilité uniforme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      },
      {
        type: "choix",
        text: "Vous ne trackez pas vos engagements verbaux. Certains sont oubliés ou non tenus.",
        tags: ["engagements", "verbal vs écrit"],
        answers: [
          { text: "Je laisse — les engagements verbaux ne sont pas formels.", score: 0 },
          { text: "Je note systématiquement mes engagements, qu'ils soient écrits ou verbaux.", score: 2 },
          { text: "Je note uniquement les engagements importants.", score: 1 },
          { text: "Je demande à mes interlocuteurs de me confirmer par écrit les engagements clés.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés", resume: "Vos engagements sont pris sans rigueur et les manquements sont minimisés plutôt qu'assumés.", desc: "Votre gestion des engagements pourrait encore manquer de rigueur à l'entrée — prendre des engagements que vous savez difficiles à tenir pour éviter une conversation difficile — et d'honnêteté à la sortie — minimiser les manquements, les attribuer à des facteurs extérieurs, les présenter comme des retards temporaires. Ces comportements dégradent progressivement la confiance dans vos engagements." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez vos engagements importants mais la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles", resume: "Vous respectez vos engagements importants — la rigueur sur les petits engagements et la renégociation formelle sont encore perfectibles.", desc: "Vous respectez vos engagements importants. Ce qui pourrait encore être perfectible, c'est la rigueur sur les petits engagements — les délais de réponse, les suivis promis — et la renégociation formelle quand un engagement ne peut pas être tenu — prévenir tôt et proposer une alternative plutôt que d'espérer que ça passe inaperçu." },
          haut: { label: "Réflexes installés", titre: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement", resume: "Vos engagements sont pris avec rigueur et les manquements sont assumés pleinement et rapidement.", desc: "Vous prenez des engagements que vous avez évalué comme tenables. Quand vous ne pouvez pas tenir, vous prévenez tôt, vous assumez pleinement le manquement sans le minimiser, vous proposez une voie de sortie. Cette rigueur à l'entrée et cette honnêteté à la sortie — qui supposent d'accepter des conversations difficiles plutôt que de les éviter — sont ce qui crée une réputation de fiabilité réelle." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Les résultats de votre équipe sont clairement en dessous des attentes. Votre prochain comité de direction approche.",
        tags: ["mauvaises nouvelles", "annonce"],
        answers: [
          { text: "Je prépare une présentation qui minimise l'écart en mettant en avant les résultats positifs.", score: 0 },
          { text: "Je présente les résultats clairement, j'analyse les causes et je propose un plan d'action.", score: 2 },
          { text: "Je présente honnêtement mais je contextualise fortement pour montrer que ce n'est pas si grave.", score: 0.5 },
          { text: "Je propose un report du comité pour avoir plus de temps de rattrapage.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "likert",
        text: "Vous présentez les mauvaises nouvelles de façon directe et honnête avec analyse des causes et plan d'action, sans minimiser.",
        tags: ["mauvaises nouvelles", "honnêteté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "choix",
        text: "Vous avez une mauvaise nouvelle à annoncer à votre direction. Vous reportez systématiquement jusqu'au dernier moment.",
        tags: ["mauvaises nouvelles", "timing"],
        answers: [
          { text: "Je continue — reporter donne plus de temps pour potentiellement améliorer la situation.", score: 0 },
          { text: "J'annonce dès que j'ai la certitude que la mauvaise nouvelle est réelle.", score: 2 },
          { text: "J'annonce quand la situation est stable — prévenir trop tôt crée de l'inquiétude inutile.", score: 0 },
          { text: "J'annonce quand je peux aussi présenter une solution.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe a manqué ses objectifs. Une partie est due à des facteurs externes mais une partie est aussi due à vos propres erreurs managériales.",
        tags: ["mauvaises nouvelles", "responsabilité"],
        answers: [
          { text: "Je présente les facteurs externes sans mentionner mes propres erreurs.", score: 0 },
          { text: "Je présente les deux dimensions honnêtement — facteurs externes ET mes propres erreurs.", score: 2 },
          { text: "Je mentionne mes erreurs en les minimisant pour préserver ma crédibilité.", score: 0.5 },
          { text: "Je mentionne mes erreurs en privé à mon responsable sans le mettre dans mon reporting.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe a commis une erreur qui a pénalisé un client. Vous hésitez entre le reconnaître clairement et trouver une explication atténuante.",
        tags: ["mauvaises nouvelles", "client"],
        answers: [
          { text: "Je cherche une explication atténuante — reconnaître clairement une erreur expose à des conséquences.", score: 0 },
          { text: "Je reconnais l'erreur clairement, je présente les actions correctives et j'assume les conséquences.", score: 2 },
          { text: "Je reconnais l'erreur mais je mets en avant les éléments qui réduisent notre responsabilité.", score: 0.5 },
          { text: "Je laisse la direction gérer la communication client.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "likert",
        text: "Quand votre équipe commet une erreur qui pénalise un client, vous la reconnaissez clairement sans chercher d'atténuation.",
        tags: ["mauvaises nouvelles", "responsabilité client"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "choix",
        text: "Vous voyez clairement que les objectifs de fin d'année ne seront pas atteints dès le mois de juillet. Vous ne l'annoncez pas.",
        tags: ["mauvaises nouvelles", "prévision"],
        answers: [
          { text: "J'attends octobre pour avoir une meilleure visibilité.", score: 0 },
          { text: "J'annonce dès juillet avec une analyse et un nouveau scénario réaliste.", score: 2 },
          { text: "Je l'annonce quand ce sera certain — en août ou septembre.", score: 0.5 },
          { text: "Je l'annonce seulement si on me pose la question directement.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "choix",
        text: "Dans votre organisation, les mauvaises nouvelles sont mal reçues par la direction et ceux qui les annoncent sont souvent pénalisés.",
        tags: ["mauvaises nouvelles", "culture"],
        answers: [
          { text: "Je retiens les mauvaises nouvelles — ce n'est pas irraisonnable de se protéger.", score: 0 },
          { text: "Je continue à annoncer les mauvaises nouvelles honnêtement même si la culture est pénalisante.", score: 2 },
          { text: "Je les annonce mais en les présentant de façon très diplomatique pour minimiser les risques.", score: 0.5 },
          { text: "Je remonte la culture à ma direction — une organisation qui pénalise les mauvaises nouvelles finit par ne plus les entendre.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "likert",
        text: "Vous annoncez honnêtement les mauvaises nouvelles même dans une culture organisationnelle qui les pénalise.",
        tags: ["mauvaises nouvelles", "culture"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe vous cache des mauvaises nouvelles parce qu'ils ont peur de votre réaction. Vous l'avez compris.",
        tags: ["mauvaises nouvelles", "équipe"],
        answers: [
          { text: "Je laisse — si ça arrive, je corrigerai les comportements individuels.", score: 0 },
          { text: "Je travaille à créer un environnement où annoncer les mauvaises nouvelles tôt est valorisé.", score: 2 },
          { text: "Je leur demande de toujours me dire la vérité sans modifier mon comportement.", score: 0 },
          { text: "Je cherche à comprendre quelle décision passée de ma part a créé cette culture.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications", resume: "Les mauvaises nouvelles sont retardées, minimisées ou absentes de vos communications.", desc: "Vos communications pourraient encore traiter les mauvaises nouvelles par l'évitement — retarder l'annonce en espérant une amélioration, minimiser l'impact pour réduire l'inconfort, présenter les résultats de façon à ce que les mauvaises nouvelles passent inaperçues. Ces comportements font que les problèmes sont découverts plus tard, dans des conditions plus difficiles à gérer." },
          moyen: { label: "Pratiques en développement", titre: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires mais les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations", resume: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires — les cultures pénalisantes et les responsabilités personnelles créent encore des hésitations.", desc: "Vous annoncez les mauvaises nouvelles dans les situations ordinaires. Ce qui pourrait encore créer des hésitations, c'est la culture pénalisante — l'environnement où apporter de mauvaises nouvelles vous expose personnellement — et la responsabilité personnelle — les situations où la mauvaise nouvelle implique votre propre part de responsabilité." },
          haut: { label: "Réflexes installés", titre: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité", resume: "Vous annoncez les mauvaises nouvelles tôt, honnêtement et en incluant votre propre responsabilité.", desc: "Vous annoncez les mauvaises nouvelles tôt, sans attendre une amélioration hypothétique. Vous les présentez honnêtement sans minimiser. Vous incluez votre propre responsabilité dans l'analyse quand elle existe. Vous proposez des actions correctives. Cette façon d'annoncer les mauvaises nouvelles — tôt, complète, incluant la responsabilité personnelle — est ce qui crée la confiance qui permet de traverser les difficultés collectivement." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Les reportings de votre équipe sont souvent optimistes par rapport à la réalité. Vous ne l'avez pas encore adressé.",
        tags: ["culture intégrité", "standards"],
        answers: [
          { text: "Je laisse — un peu d'optimisme dans la communication est normal.", score: 0 },
          { text: "J'adresse le problème directement avec mon équipe et je fixe un standard d'honnêteté.", score: 2 },
          { text: "Je corrige les cas les plus flagrants sans en faire un sujet collectif.", score: 0.5 },
          { text: "Je leur demande de me présenter les reportings bruts avant de les finaliser.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous avez fixé et vous maintenez un standard d'honnêteté explicite dans les reportings de votre équipe.",
        tags: ["culture intégrité", "standard collectif"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Un collaborateur vous présente un reporting avec de mauvaises nouvelles qu'il a eu le courage d'annoncer clairement.",
        tags: ["culture intégrité", "valorisation"],
        answers: [
          { text: "Je prends note des mauvaises nouvelles sans commentaire sur sa démarche.", score: 0.5 },
          { text: "Je valorise explicitement son honnêteté autant que je traite les problèmes soulevés.", score: 2 },
          { text: "Je le remercie brièvement avant de passer aux problèmes.", score: 1 },
          { text: "Je me concentre sur les solutions — c'est ce qui compte.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Votre propre reporting à votre direction est plus poli que précis. Votre équipe le voit.",
        tags: ["culture intégrité", "exemple"],
        answers: [
          { text: "Je laisse — les reportings à la direction nécessitent une communication adaptée.", score: 0 },
          { text: "J'aligne mon propre reporting sur les standards d'honnêteté que je demande à mon équipe.", score: 2 },
          { text: "Je suis honnête sur les points essentiels en soignant la forme pour les points secondaires.", score: 0.5 },
          { text: "Je n'ai pas conscience de cet écart et je le prends en compte désormais.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Dans votre système d'évaluation, les collaborateurs qui tiennent leurs engagements et reconnaissent leurs erreurs ne sont pas distingués de ceux qui font des promesses irréalistes.",
        tags: ["culture intégrité", "récompense"],
        answers: [
          { text: "Je laisse — l'évaluation porte sur les résultats, pas sur la façon de communiquer.", score: 0 },
          { text: "J'intègre explicitement la fiabilité et l'honnêteté dans mes critères d'évaluation.", score: 2 },
          { text: "Je les valorise informellement sans le rendre formel.", score: 1 },
          { text: "Je l'aborde lors des entretiens individuels sans en faire un critère d'évaluation formel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous intégrez explicitement la fiabilité des engagements et l'honnêteté dans les reportings comme critères d'évaluation de vos collaborateurs.",
        tags: ["culture intégrité", "évaluation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous recevez des reportings de votre équipe qui vous semblent trop optimistes. Vous les transmettez à votre direction sans les challenger.",
        tags: ["culture intégrité", "remonter"],
        answers: [
          { text: "Je transmets — mes collaborateurs sont responsables de leurs reportings.", score: 0 },
          { text: "Je challenge l'honnêteté des reportings avant de les transmettre.", score: 2 },
          { text: "Je transmets en notant mes propres réserves.", score: 1 },
          { text: "Je demande à mon équipe de valider les projections avec moi avant transmission.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Votre direction met une forte pression pour avoir des reportings positifs. Vos collaborateurs commencent à embellir leurs chiffres.",
        tags: ["culture intégrité", "pression externe"],
        answers: [
          { text: "Je laisse — si la direction veut des positifs, c'est leur droit.", score: 0 },
          { text: "Je protège mon équipe de cette pression et je remonte le problème à ma direction.", score: 2 },
          { text: "Je les autorise à présenter positivement tant que les chiffres sont justes.", score: 0.5 },
          { text: "Je cherche un équilibre entre ce que la direction veut et l'honnêteté.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous protégez votre équipe de la pression à embellir les reportings et vous remontez ce problème à votre direction.",
        tags: ["culture intégrité", "protection"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      },
      {
        type: "choix",
        text: "Des reportings trop optimistes ont permis à votre équipe d'avoir une bonne image pendant deux ans. Aujourd'hui la réalité est difficile à cacher.",
        tags: ["culture intégrité", "long terme"],
        answers: [
          { text: "Je continue à gérer au mieux — c'est trop tard pour changer la communication.", score: 0 },
          { text: "Je rectifie la communication même si ça implique une mise à jour douloureuse de la réalité.", score: 2 },
          { text: "Je prépare une sortie progressive vers plus d'honnêteté sur plusieurs mois.", score: 1 },
          { text: "Je cherche à améliorer rapidement les résultats réels pour que la réalité rejoigne les reportings.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture d'intégrité de votre équipe n'est pas portée explicitement", resume: "La culture d'intégrité de votre équipe n'est pas portée explicitement.", desc: "La culture d'intégrité dans votre équipe pourrait encore reposer sur les convictions individuelles de chacun — sans standards explicites sur ce qui est attendu, sans traitement visible des situations qui s'en écartent, sans protection des personnes qui refusent de s'y soustraire. Ces comportements font que la culture d'intégrité n'est pas partagée mais individuelle, ce qui crée des incohérences de traitement." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez des standards d'honnêteté mais votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes", resume: "Vous portez des standards d'honnêteté — votre propre exemplarité et la protection de l'équipe face aux pressions sont encore insuffisantes.", desc: "Vous portez des standards d'honnêteté dans votre équipe. Ce qui pourrait encore être insuffisant, c'est votre propre exemplarité — appliquer vous-même les standards que vous demandez, y compris dans les situations difficiles — et la protection visible de votre équipe face aux pressions extérieures qui pousseraient à les compromettre." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe", resume: "Vous construisez activement une culture d'intégrité — standards explicites, exemplarité, protection de l'équipe.", desc: "Vous définissez des standards explicites d'honnêteté dans les reportings et les engagements. Vous les incarnez dans vos propres comportements. Vous protégez visiblement les membres de votre équipe qui refusent de compromettre leur intégrité sous pression. Cette construction active d'une culture d'intégrité — par les standards, l'exemplarité et la protection — est ce qui crée une équipe qui maintient son intégrité même dans les situations difficiles." },
        },
      }
    ],

  },

  }); // fin Object.assign

  window.ITS_registerTheme("ethique", "Éthique & Compliance", "⚖️", [

    ["conflits-interets", "Repérer les conflits d'intérêts", "Tous publics",
      "Identifier les zones grises, déclarer et demander conseil avant que la situation ne s'installe.",
      { domain: "ethique", chapters: [
        ["Identifier un conflit d'intérêts", "Situations évidentes, zones grises, apparences."],
        ["Comprendre les enjeux", "Responsabilité personnelle, culture de déclaration."],
        ["Agir dans les situations complexes", "Cumuls, rétroactif, urgence, post-emploi."],
        ["Construire la culture de déclaration", "Exemplarité, encouragement, résistance aux pressions."],
      ]}
    ],

    ["cadeaux-invitations", "Cadeaux, invitations et avantages", "Tous publics",
      "Savoir arbitrer entre relation professionnelle, usage courant et risque de dépendance.",
      { domain: "ethique", chapters: [
        ["Reconnaître ce qui est acceptable", "Seuil, contexte, cumul, vérification."],
        ["Éviter la dépendance relationnelle", "Influence, réciprocité, norme sectorielle, test."],
        ["Gérer les situations limites", "Client stratégique, cadeau post-décision, pression culturelle."],
        ["Construire la culture dans son équipe", "Exemplarité, sens du registre, politique interne."],
      ]}
    ],

    ["alerter-situation-sensible", "Alerter face à une situation sensible", "Tous publics",
      "Réagir à un doute, documenter les faits et mobiliser le bon canal sans dramatiser.",
      { domain: "ethique", chapters: [
        ["Reconnaître ce qui doit être signalé", "Doute, illégalité, harcèlement, sécurité."],
        ["Choisir le bon canal et la bonne forme", "Hiérarchie impliquée, écrit, suivi, externe."],
        ["Surmonter les freins au signalement", "Loyauté, pression, normalisation, culpabilité."],
        ["Créer un environnement où l'alerte est possible", "Accueil, représailles, fausse alerte, accessibilité."],
      ]}
    ],

    ["ethique-equipe", "Faire vivre l'éthique dans son équipe", "Managers",
      "Traiter les dilemmes, protéger la parole et installer des repères concrets.",
      { domain: "ethique", chapters: [
        ["Dilemmes et pression résultat", "Exemplarité, refus des raccourcis, espace parole."],
        ["Culture éthique d'équipe", "Partenaires, normalisation, incitations, évaluation des moyens."],
        ["Dilemmes managériaux", "Instruction ambiguë, tolérance, protection équipe."],
        ["Installer la culture", "Rituels, erreurs partagées, valorisation, résistance."],
      ]}
    ],

    ["corruption-anticoncurrentiel", "Prévenir la corruption et les pratiques anticoncurrentielles", "Tous publics",
      "Identifier et refuser toutes les formes de corruption et respecter les règles de concurrence.",
      { domain: "ethique", chapters: [
        ["Identifier et refuser la corruption", "Directe, indirecte, déguisée, extraterritorialité."],
        ["Règles de concurrence", "Échanges avec concurrents, position dominante, investigation."],
        ["Zones grises", "Remises, sponsoring, relations personnelles, sous-traitants."],
        ["Culture anticorruption", "Programme, signaux direction, tiers, protection des intègres."],
      ]}
    ],

    ["confidentialite-donnees", "Confidentialité, données et secret professionnel", "Tous publics",
      "Protéger les informations sensibles dans tous les contextes — partage, stockage, départ.",
      { domain: "ethique", chapters: [
        ["Partage légitime", "Clients, lieux publics, réseaux sociaux, accès périmètre."],
        ["Données personnelles", "Minimisation, chiffrement, durée, violation, droits."],
        ["Secret professionnel", "Ancien employeur, outils personnels, supports, information reçue par erreur."],
        ["Culture confidentialité", "Formation, incidents, classification, départs, prestataires."],
      ]}
    ],

    ["dilemmes-ethiques", "Gérer les dilemmes éthiques au quotidien", "Tous publics",
      "Reconnaître, analyser et décider dans les situations où aucune option n'est parfaite.",
      { domain: "ethique", chapters: [
        ["Reconnaître un dilemme éthique", "Zone grise, rationalisation, conflits de valeurs, inconfort."],
        ["Analyser sans se perdre", "Parties prenantes, tests, biais, apprentissage des erreurs."],
        ["Décider sous pression", "Hiérarchique, groupe, client, urgence, incertitude."],
        ["Cultiver son jugement éthique", "Réflexivité, cohérence, lignes définies, partage."],
      ]}
    ],

    ["integrite-reporting", "Intégrité dans les reportings et les engagements", "Managers / Encadrants",
      "Produire des données fiables, tenir ses engagements et annoncer les mauvaises nouvelles sans délai.",
      { domain: "ethique", chapters: [
        ["Produire des reportings fiables", "Données exactes, méthodes transparentes, prévisions honnêtes."],
        ["Tenir ses engagements", "Alerte précoce, sur-promesse, renégociation formelle."],
        ["Assumer les mauvaises nouvelles", "Timing, responsabilité, culture pénalisante."],
        ["Créer une culture d'intégrité", "Standards, exemplarité, évaluation, protection."],
      ]}
    ],

  ]);

})();