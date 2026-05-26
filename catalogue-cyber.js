/**
 * catalogue-cyber.js — INTO THE SHIFT
 * Domaine : Cybersécurité
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  Object.assign(window.CUSTOM_QUESTIONS, {

  "phishing-manipulation": {
    0: [
      {
        type: "choix",
        text: "Vous recevez un mail de votre banque professionnelle vous demandant de confirmer vos identifiants de connexion suite à une 'mise à jour de sécurité'. L'adresse expéditrice ressemble à celle de votre banque mais avec une lettre en plus dans le domaine.",
        tags: ["phishing", "détection"],
        answers: [
          { text: "Je clique sur le lien et je vérifie mes identifiants pour être sûr que mon compte est sécurisé.", score: 0 },
          { text: "Je contacte directement ma banque par le numéro officiel pour signaler ce mail.", score: 2 },
          { text: "Je transfère le mail à mon équipe informatique avant de faire quoi que ce soit.", score: 2 },
          { text: "Je supprime le mail — une banque ne demande jamais ça, ce n'est pas la peine de signaler.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Un mail signé par votre directeur général vous demande de transférer urgemment une somme sur un compte fournisseur 'pour débloquer un contrat avant ce soir'. Il précise de ne pas en parler aux autres pour l'instant.",
        tags: ["phishing", "urgence"],
        answers: [
          { text: "Je fais le transfert — le DG demande, c'est urgent et il dit de ne pas en parler.", score: 0 },
          { text: "J'appelle directement le DG sur son numéro habituel pour vérifier avant toute action.", score: 2 },
          { text: "Je réponds au mail en demandant plus de détails sur le contrat.", score: 0 },
          { text: "Je transmets à la comptabilité pour qu'elle valide le virement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous recevez un message qui crée une urgence et vous demande d'agir vite, vous prenez un temps de recul avant d'agir.",
        tags: ["phishing", "vigilance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un mail d'un collègue, Thomas, qui vous demande de valider un document partagé en cliquant sur un lien. Thomas vous envoie souvent des fichiers. Le lien pointe vers une URL qui ressemble à OneDrive mais avec un domaine différent.",
        tags: ["phishing", "lien"],
        answers: [
          { text: "Je clique — Thomas m'envoie souvent des fichiers et c'est ressemble à OneDrive.", score: 0 },
          { text: "Je lui envoie un message séparé pour lui demander s'il m'a bien envoyé ce lien.", score: 2 },
          { text: "Je passe la souris sur le lien pour voir l'URL complète avant de décider.", score: 1.5 },
          { text: "Je lui téléphone pour confirmer avant de cliquer.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez une facture en pièce jointe d'un fournisseur avec qui vous travaillez. Le nom du fournisseur est correct mais l'adresse mail de l'expéditeur est légèrement différente de celle habituelle.",
        tags: ["phishing", "pièce jointe"],
        answers: [
          { text: "J'ouvre la pièce jointe — le nom du fournisseur est le bon et ça ressemble à une facture normale.", score: 0 },
          { text: "Je contacte le fournisseur par son numéro habituel pour vérifier avant d'ouvrir.", score: 2 },
          { text: "Je compare avec les mails précédents du même fournisseur pour m'assurer que c'est bien lui.", score: 1 },
          { text: "J'ouvre la pièce jointe en mode protégé pour limiter les risques.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "likert",
        text: "Quand une communication semble venir d'un contact connu mais que quelque chose vous interpelle, vous vérifiez par un canal différent avant d'agir.",
        tags: ["phishing", "vérification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un appel d'un homme qui se présente comme technicien du support informatique de votre entreprise. Il dit que votre poste a été infecté et qu'il a besoin de votre mot de passe pour intervenir à distance.",
        tags: ["phishing", "appel"],
        answers: [
          { text: "Je lui donne mon mot de passe — le support IT en a besoin pour travailler.", score: 0 },
          { text: "Je lui dis de rappeler dans 5 minutes et je contacte directement le support IT pour confirmer.", score: 2 },
          { text: "Je lui demande son nom et son matricule et je les note avant de donner quoi que ce soit.", score: 0.5 },
          { text: "Je refuse de lui donner mon mot de passe et je lui propose de me rappeler via le ticket officiel.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un SMS vous informant qu'un colis est bloqué en douane et qu'il faut payer 2,50€ via un lien pour le libérer. Vous attendez effectivement une livraison.",
        tags: ["phishing", "SMS"],
        answers: [
          { text: "Je clique et je paie — c'est une somme modique et j'attends bien une livraison.", score: 0 },
          { text: "Je vérifie directement sur le site officiel du transporteur avec le numéro de suivi.", score: 2 },
          { text: "Je contacte l'expéditeur du colis pour qu'il vérifie avec le transporteur.", score: 1.5 },
          { text: "Je supprime le SMS — les services de douane ne contactent pas par SMS.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous devez vérifier une information urgente, vous passez par les canaux officiels connus (numéro de téléphone habituel, site officiel) plutôt que par les liens ou numéros fournis dans le message suspect.",
        tags: ["phishing", "canal officiel"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un mail de votre service RH vous demandant de remettre à jour vos coordonnées bancaires pour le versement de votre salaire via un formulaire en ligne. Le mail a le logo de l'entreprise.",
        tags: ["phishing", "formulaire"],
        answers: [
          { text: "Je remplis le formulaire — ça vient des RH et le logo de l'entreprise est présent.", score: 0 },
          { text: "J'appelle directement les RH pour vérifier avant de renseigner quoi que ce soit.", score: 2 },
          { text: "Je vais directement dans l'espace RH de l'intranet pour faire la mise à jour.", score: 1.5 },
          { text: "Je réponds au mail pour leur demander confirmation.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous venez de cliquer sur un lien dans un mail avant de réaliser qu'il était suspect. Une page s'est ouverte mais vous l'avez fermée immédiatement sans saisir d'information.",
        tags: ["réaction", "clic accidentel"],
        answers: [
          { text: "Je ne fais rien — j'ai fermé la page rapidement et je n'ai rien saisi.", score: 0 },
          { text: "Je déconnecte mon poste du réseau et je contacte immédiatement l'équipe informatique.", score: 2 },
          { text: "Je lance une analyse antivirus et j'attends le résultat avant de signaler.", score: 0.5 },
          { text: "Je surveille mon poste pendant quelques heures pour voir si quelque chose d'anormal se produit.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous avez cliqué sur quelque chose de suspect, vous le signalez immédiatement à l'équipe informatique, même si vous pensez n'avoir rien saisi.",
        tags: ["réaction", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez ouvert une pièce jointe suspecte il y a deux heures. Votre poste fonctionne normalement. Vous hésitez à le signaler par crainte d'être jugé·e pour avoir fait une erreur.",
        tags: ["réaction", "peur conséquences"],
        answers: [
          { text: "Je ne dis rien — le poste fonctionne normalement et ça évitera les questions gênantes.", score: 0 },
          { text: "Je le signale maintenant — le délai a déjà peut-être permis une compromission silencieuse.", score: 2 },
          { text: "J'attends la fin de journée pour voir si quelque chose se passe et je signalerai si nécessaire.", score: 0 },
          { text: "J'en parle à un collègue de confiance pour avoir son avis avant de contacter l'informatique.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez que vous venez de saisir votre mot de passe professionnel sur un site qui ressemblait à votre intranet mais qui n'en était pas un.",
        tags: ["réaction", "mot de passe saisi"],
        answers: [
          { text: "Je change mon mot de passe dans les prochains jours et je surveille mon compte.", score: 0 },
          { text: "Je change mon mot de passe immédiatement et je contacte l'équipe informatique.", score: 2 },
          { text: "Je change mon mot de passe immédiatement sans signaler — j'ai corrigé le problème.", score: 0.5 },
          { text: "Je contacte l'équipe informatique en leur demandant de changer mon mot de passe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Votre collègue Nathalie vous dit qu'elle a répondu à un mail suspect en donnant ses identifiants mais qu'elle préfère ne pas le signaler pour ne pas avoir d'ennuis.",
        tags: ["réaction", "collègue victime"],
        answers: [
          { text: "Je respecte son choix — c'est elle qui décide et peut-être que ça ne donnera rien.", score: 0 },
          { text: "Je lui explique que le délai de signalement aggrave le risque pour toute l'entreprise et je l'encourage fermement à agir maintenant.", score: 2 },
          { text: "Je lui propose de l'accompagner pour le signaler ensemble.", score: 2 },
          { text: "Je lui dis d'en parler au moins à son responsable direct.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "likert",
        text: "En cas de doute sur une compromission, vous signalez dans la journée plutôt que d'attendre de voir si quelque chose se passe.",
        tags: ["réaction", "délai"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "En arrivant le matin, votre écran affiche un message en anglais indiquant que vos fichiers sont chiffrés et qu'il faut payer pour les récupérer.",
        tags: ["réaction", "ransomware"],
        answers: [
          { text: "Je cherche comment payer — c'est peut-être le moyen le plus rapide de récupérer mes fichiers.", score: 0 },
          { text: "Je déconnecte immédiatement mon poste du réseau et j'appelle l'équipe informatique.", score: 2 },
          { text: "J'éteins mon poste et j'appelle l'équipe informatique.", score: 1.5 },
          { text: "Je redémarre mon poste pour voir si le message disparaît.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous vous rendez compte que vous avez transféré un mail de phishing à trois collègues avant de réaliser que c'était suspect.",
        tags: ["réaction", "transfert"],
        answers: [
          { text: "J'envoie un nouveau mail à mes collègues pour leur dire d'ignorer le précédent.", score: 0.5 },
          { text: "Je contacte l'équipe informatique en leur listant les trois collègues concernés.", score: 2 },
          { text: "Je préviens mes collègues directement et je signale l'incident à l'informatique.", score: 2 },
          { text: "Je leur envoie un message pour qu'ils suppriment le mail sans cliquer.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "likert",
        text: "Sur tout comportement anormal de votre poste après une action suspecte, votre premier réflexe est de le déconnecter du réseau avant toute autre action.",
        tags: ["réaction", "isolation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez rempli un formulaire qui ressemblait à une mise à jour RH mais vous n'êtes plus sûr·e de son authenticité. Vous avez renseigné votre nom, prénom, adresse et numéro de sécurité sociale.",
        tags: ["réaction", "données saisies"],
        answers: [
          { text: "J'attends de voir — les informations administratives sont moins critiques que les mots de passe.", score: 0 },
          { text: "Je signale immédiatement à l'équipe informatique et aux RH les données que j'ai saisies.", score: 2 },
          { text: "Je contacte les RH pour vérifier si elles avaient bien envoyé ce formulaire.", score: 1.5 },
          { text: "Je surveille mon espace personnel en ligne pendant quelques jours.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Quelqu'un vous appelle en se présentant comme l'auditeur externe mandaté par votre direction pour une mission de conformité urgente. Il demande la liste des accès aux systèmes sensibles. Il a le nom de votre DRH.",
        tags: ["manipulation", "autorité"],
        answers: [
          { text: "Je lui fournis les informations — il a l'air d'être mandaté et connaît le nom de notre DRH.", score: 0 },
          { text: "Je lui dis que je dois rappeler après avoir vérifié sa mission auprès de notre DRH directement.", score: 2 },
          { text: "Je lui demande un document officiel de mission avant de lui donner quoi que ce soit.", score: 1.5 },
          { text: "Je transmets sa demande à mon responsable pour qu'il gère.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "likert",
        text: "Quand quelqu'un vous sollicite avec une demande inhabituelle en invoquant une autorité interne, vous vérifiez auprès de cette autorité directement avant d'agir.",
        tags: ["manipulation", "vérification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Un interlocuteur au téléphone vous dit qu'un compte fournisseur doit être mis à jour dans l'heure sinon la livraison sera bloquée. Il connaît le nom du fournisseur et le numéro de commande.",
        tags: ["manipulation", "pression temps"],
        answers: [
          { text: "Je fais la mise à jour — il a les bonnes informations et la livraison est urgente.", score: 0 },
          { text: "Je lui dis que je rappellerai via le numéro officiel du fournisseur pour confirmer.", score: 2 },
          { text: "Je lui demande un email officiel avec les nouvelles coordonnées avant toute modification.", score: 1 },
          { text: "Je préviens mon responsable de la demande avant de faire quoi que ce soit.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Une personne chaleureuse vous contacte sur LinkedIn en se présentant comme une ancienne collègue. Après quelques échanges, elle vous demande des informations sur l'organisation de votre équipe et les outils que vous utilisez.",
        tags: ["manipulation", "sympathie"],
        answers: [
          { text: "Je lui réponds naturellement — on a travaillé ensemble et ces informations ne sont pas confidentielles.", score: 0 },
          { text: "Je reste évasif·ve sur les informations organisationnelles et techniques, même avec quelqu'un que je crois connaître.", score: 2 },
          { text: "Je vérifie d'abord que nous avons bien des contacts communs sur LinkedIn avant de répondre.", score: 1 },
          { text: "Je lui donne des informations générales sans entrer dans les détails techniques.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Une alerte s'affiche sur votre écran vous indiquant que votre ordinateur est infecté et qu'il faut appeler immédiatement un numéro de support Microsoft. Votre écran est figé.",
        tags: ["manipulation", "faux support"],
        answers: [
          { text: "J'appelle le numéro — Microsoft a détecté une infection et mon écran est bloqué.", score: 0 },
          { text: "J'éteins mon ordinateur et je contacte uniquement mon équipe informatique interne.", score: 2 },
          { text: "Je prends en photo l'écran et j'appelle mon équipe informatique.", score: 2 },
          { text: "J'appelle le numéro pour comprendre ce qui se passe avant de contacter mon équipe IT.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "likert",
        text: "Face à une demande inhabituelle accompagnée d'une justification convaincante, vous prenez le temps de vérifier indépendamment avant d'agir, même si cela risque de décevoir ou de ralentir.",
        tags: ["manipulation", "résistance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Devant l'entrée sécurisée de vos locaux, une personne en costume chargée de bagages vous demande de la laisser entrer — elle dit qu'elle vient pour une réunion et a oublié son badge visiteur.",
        tags: ["manipulation", "tailgating"],
        answers: [
          { text: "Je lui ouvre — elle a l'air professionnelle et dit venir pour une réunion.", score: 0 },
          { text: "Je lui indique l'accueil où elle pourra se faire enregistrer comme visiteur.", score: 2 },
          { text: "Je lui demande le nom de la personne qu'elle vient voir avant de décider.", score: 1 },
          { text: "Je la laisse entrer et je préviens la personne qu'elle vient voir.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise organise un webinaire public. Dans le chat, un participant pose des questions techniques précises sur vos systèmes d'information et vos outils internes. Il se présente comme un journaliste spécialisé.",
        tags: ["manipulation", "informations publiques"],
        answers: [
          { text: "Je réponds — c'est un webinaire public et un journaliste peut poser des questions.", score: 0 },
          { text: "Je réponds de façon générale sur les grandes orientations sans détailler les systèmes ni les outils.", score: 2 },
          { text: "Je lui demande de me contacter par mail pour une interview dédiée.", score: 1.5 },
          { text: "Je ne réponds pas et je signale les questions à l'équipe communication.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne communiquez pas d'informations sur vos systèmes, outils ou organisation interne à des interlocuteurs externes non identifiés, quelle que soit la légitimité apparente de leur demande.",
        tags: ["manipulation", "informations techniques"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue que vous ne connaissez pas bien vous demande votre session ouverte pendant cinq minutes 'pour accéder rapidement à un fichier partagé' pendant que vous êtes en pause.",
        tags: ["manipulation", "collègue"],
        answers: [
          { text: "J'accepte — il est collègue et a l'air d'avoir un besoin légitime.", score: 0 },
          { text: "Je refuse et je lui propose de s'authentifier avec sa propre session.", score: 2 },
          { text: "Je lui montre comment accéder au fichier partagé depuis sa propre session.", score: 2 },
          { text: "J'accepte mais je reste présent·e pendant qu'il utilise ma session.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Un recruteur vous contacte sur LinkedIn et vous demande de décrire l'environnement technique de votre poste actuel pour évaluer votre profil. Vous cherchez à changer de travail.",
        tags: ["réflexes", "partage d'information"],
        answers: [
          { text: "Je lui décris en détail — c'est pour un recrutement et ça montre mon expertise.", score: 0 },
          { text: "Je décris les technologies de façon générique sans mentionner les spécificités de l'infrastructure de mon employeur.", score: 2 },
          { text: "Je lui demande le nom de l'entreprise et le poste avant de décider quoi partager.", score: 1 },
          { text: "Je partage ce qui est visible sur le site public de mon entreprise.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "likert",
        text: "Vous distinguez les informations que vous pouvez partager librement des informations qui concernent l'infrastructure, l'organisation ou les systèmes de votre entreprise.",
        tags: ["réflexes", "discrétion"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un mail interne d'un compte @votreentreprise.com vous demandant de voter pour un sondage interne en cliquant sur un lien. Le lien pointe vers un service externe.",
        tags: ["réflexes", "mail interne"],
        answers: [
          { text: "Je clique — le mail vient d'une adresse interne, c'est forcément légitime.", score: 0 },
          { text: "Je vérifie sur l'intranet si un sondage interne est annoncé avant de cliquer.", score: 2 },
          { text: "Je survole le lien pour vérifier l'URL de destination avant de cliquer.", score: 1.5 },
          { text: "Je signale le mail à l'équipe informatique avant de faire quoi que ce soit.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Vous publiez une photo de votre bureau sur Instagram pour montrer votre nouveau poste de travail. En arrière-plan, on distingue un tableau blanc avec un schéma de l'architecture réseau.",
        tags: ["réflexes", "réseau social"],
        answers: [
          { text: "Je publie — un schéma de réseau en arrière-plan ne présente pas de risque réel.", score: 0 },
          { text: "Je recadre la photo pour exclure le tableau blanc avant de publier.", score: 2 },
          { text: "Je floute l'arrière-plan avant de publier.", score: 2 },
          { text: "Je publie en rendant la photo visible uniquement pour mes amis.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise organise une simulation de phishing. Vous êtes tombé·e dans le piège et avez cliqué. On vous redirige vers une page de sensibilisation. Vous trouvez ça intrusif.",
        tags: ["réflexes", "sensibilisation"],
        answers: [
          { text: "Je me plains auprès de mon responsable — ce type de test n'est pas acceptable.", score: 0 },
          { text: "Je lis attentivement la page de sensibilisation pour comprendre ce que j'aurais dû détecter.", score: 2 },
          { text: "Je ferme la page rapidement — j'ai compris le message.", score: 0.5 },
          { text: "Je note mentalement d'être plus vigilant·e à l'avenir.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "likert",
        text: "Vous participez sérieusement aux exercices et formations de sensibilisation au phishing organisés par votre entreprise, sans les traiter comme une perte de temps.",
        tags: ["réflexes", "formation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Un mail de votre fournisseur d'énergie vous informe d'un avoir à récupérer. Le mail est bien présenté, le logo est correct et le lien semble aller vers le bon site. Mais vous n'attendiez pas ce mail.",
        tags: ["réflexes", "suspicion saine"],
        answers: [
          { text: "Je clique — tout semble correct et il y a un avoir à récupérer.", score: 0 },
          { text: "Je me connecte directement sur le site du fournisseur sans passer par le lien du mail.", score: 2 },
          { text: "Je passe la souris sur le lien pour vérifier l'URL avant de cliquer.", score: 1.5 },
          { text: "Je contacte le service client du fournisseur pour vérifier l'avoir.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau collègue, Ibrahim, vous dit qu'il a failli cliquer sur un mail de phishing ce matin mais qu'il a eu un doute. Il hésite à le signaler pour ne pas 'faire compliqué'.",
        tags: ["réflexes", "culture équipe"],
        answers: [
          { text: "Je lui dis que ça n'est peut-être pas nécessaire s'il n'a pas cliqué.", score: 0 },
          { text: "Je l'encourage à signaler — même un doute sans clic est utile pour la détection.", score: 2 },
          { text: "Je lui propose de signaler avec lui pour que ce soit moins intimidant.", score: 2 },
          { text: "Je lui dis de noter les caractéristiques du mail pour s'en souvenir.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous avez un doute sur un mail ou une demande, vous le signalez même si vous n'avez rien fait de suspect — le doute seul est une information utile.",
        tags: ["réflexes", "doute"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise envoie régulièrement des alertes sur les nouvelles techniques de phishing en circulation. Ces mails arrivent souvent au mauvais moment.",
        tags: ["réflexes", "veille"],
        answers: [
          { text: "Je les lis en diagonale — je connais déjà les principes du phishing.", score: 0 },
          { text: "Je les lis sérieusement — les techniques évoluent et les nouvelles alertes décrivent ce qui est actif en ce moment.", score: 2 },
          { text: "Je les archive pour les lire quand j'aurai plus de temps.", score: 0.5 },
          { text: "Je les lis uniquement si l'objet me semble concerner mon périmètre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }
    ],

  },

  "mots-de-passe-acces": {
    0: [
      {
        type: "choix",
        text: "Votre organisation impose un renouvellement de mot de passe tous les 90 jours. À chaque renouvellement, vous ajoutez un chiffre à la fin de votre mot de passe habituel — 'Soleil2024', 'Soleil2025'.",
        tags: ["mot de passe", "robustesse"],
        answers: [
          { text: "C'est conforme à la politique — je change bien mon mot de passe tous les 90 jours.", score: 0 },
          { text: "Je crée un mot de passe entièrement nouveau à chaque renouvellement.", score: 2 },
          { text: "Je varie davantage — je change aussi les lettres et les symboles.", score: 1 },
          { text: "Je génère un mot de passe aléatoire avec le gestionnaire de mots de passe de l'entreprise.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise met à disposition un gestionnaire de mots de passe. Vous avez beaucoup de comptes à gérer et vous avez du mal à retenir tous vos mots de passe.",
        tags: ["mot de passe", "gestionnaire"],
        answers: [
          { text: "Je note mes mots de passe dans un fichier Excel protégé par un mot de passe.", score: 0 },
          { text: "J'utilise le gestionnaire de mots de passe fourni par l'entreprise.", score: 2 },
          { text: "Je crée un système de codes dont je me souviens facilement.", score: 0.5 },
          { text: "J'utilise le même mot de passe fort partout pour n'en retenir qu'un seul.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "likert",
        text: "Vous utilisez des mots de passe différents pour chacun de vos comptes professionnels.",
        tags: ["mot de passe", "unicité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre mot de passe professionnel principal contient le prénom de votre enfant et son année de naissance. Vous avez posté des photos avec votre enfant sur LinkedIn.",
        tags: ["mot de passe", "contexte personnel"],
        answers: [
          { text: "C'est un bon moyen de s'en souvenir facilement et c'est personnel.", score: 0 },
          { text: "Je le change — des informations personnelles accessibles publiquement fragilisent un mot de passe.", score: 2 },
          { text: "Je le conserve mais j'ajoute des caractères spéciaux pour le renforcer.", score: 0.5 },
          { text: "Je le remplace par une phrase de passe sans lien avec ma vie personnelle.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable part en urgence et vous demande son mot de passe pour accéder à un dossier important pendant son absence. C'est exceptionnel.",
        tags: ["mot de passe", "partage"],
        answers: [
          { text: "Je prends note du mot de passe — c'est mon responsable et la situation est urgente.", score: 0 },
          { text: "Je lui demande de déléguer l'accès via les droits officiels plutôt que de partager son mot de passe.", score: 2 },
          { text: "J'accepte pour cette fois et je lui demande de le changer dès son retour.", score: 0 },
          { text: "Je contacte l'équipe informatique pour trouver une solution d'accès temporaire.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne partagez jamais vos mots de passe professionnels, même à votre responsable direct, même en situation d'urgence.",
        tags: ["mot de passe", "partage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez noté votre mot de passe sur un post-it collé sous votre clavier. Votre bureau est en open space.",
        tags: ["mot de passe", "post-it"],
        answers: [
          { text: "C'est pratique et je fais confiance à mes collègues.", score: 0 },
          { text: "Je le retire immédiatement et j'utilise un gestionnaire de mots de passe.", score: 2 },
          { text: "Je le déplace dans un endroit moins visible.", score: 0 },
          { text: "Je le remplace par un indice que seul moi comprends.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un mail vous demandant de réinitialiser votre mot de passe car 'une activité suspecte a été détectée sur votre compte'. Le lien dans le mail pointe vers un site qui ressemble à votre intranet.",
        tags: ["mot de passe", "réinitialisation"],
        answers: [
          { text: "Je clique sur le lien et je change mon mot de passe — mieux vaut sécuriser rapidement.", score: 0 },
          { text: "Je me connecte directement sur l'intranet sans passer par le lien pour vérifier.", score: 2 },
          { text: "Je contacte l'équipe informatique pour confirmer que la demande est réelle.", score: 2 },
          { text: "Je change mon mot de passe depuis les paramètres de mon compte sans cliquer sur le lien.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "likert",
        text: "Vos mots de passe professionnels contiennent au moins 12 caractères avec un mélange de lettres, chiffres et caractères spéciaux.",
        tags: ["mot de passe", "complexité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre mot de passe professionnel est le même que celui de votre boîte mail personnelle Gmail. Vous le trouvez très fort.",
        tags: ["mot de passe", "réutilisation"],
        answers: [
          { text: "C'est un bon mot de passe fort — il couvre bien les deux comptes.", score: 0 },
          { text: "Je change l'un des deux immédiatement — réutiliser un mot de passe expose les deux comptes si l'un est compromis.", score: 2 },
          { text: "Je le garde mais j'ajoute un caractère différent pour chaque compte.", score: 0.5 },
          { text: "Je le change uniquement si Gmail m'annonce une fuite de données.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos mots de passe sont faciles à retenir — ce qui les rend aussi faciles à deviner", desc: "Varier d'un chiffre à la fin, utiliser un prénom de proche, noter le mot de passe sous le clavier, utiliser le même mot de passe sur plusieurs comptes : ces pratiques sont extrêmement courantes et constituent la première porte d'entrée des attaquants. Un mot de passe fort et unique par compte, géré via un gestionnaire, supprime la quasi-totalité de ces risques sans demander plus d'effort de mémorisation." },
          moyen: { label: "Pratiques en développement", titre: "Vos mots de passe sont globalement solides mais quelques pratiques héritées persistent", desc: "Vos mots de passe sont longs et complexes sur les comptes importants. Mais le post-it discret, le même mot de passe pour le professionnel et le personnel, le changement de mot de passe qui incrémente d'un chiffre : ces habitudes persistent. L'enjeu est de systématiser l'utilisation d'un gestionnaire de mots de passe et de traiter chaque compte comme un compte unique." },
          haut: { label: "Réflexes installés", titre: "Vos mots de passe sont forts, uniques et gérés proprement — sans exception", desc: "Vous utilisez un gestionnaire de mots de passe, vous créez un mot de passe entièrement nouveau à chaque renouvellement, vous n'utilisez jamais le même mot de passe sur deux comptes, et vous ne stockez jamais vos mots de passe en dehors du gestionnaire. Cette discipline — qui ne demande pas plus d'effort une fois le gestionnaire en place — supprime la majorité des risques liés aux mots de passe." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Votre organisation propose l'authentification à deux facteurs (2FA) pour accéder aux applications sensibles. La mise en place prend 10 minutes. Elle n'est pas encore obligatoire.",
        tags: ["MFA", "activation"],
        answers: [
          { text: "Je l'active quand ça deviendra obligatoire — pour l'instant ça rajoute des étapes inutiles.", score: 0 },
          { text: "Je l'active maintenant — l'attendre n'est une bonne raison de ne pas protéger ses accès.", score: 2 },
          { text: "Je l'active uniquement sur les applications les plus sensibles.", score: 1 },
          { text: "Je vérifie d'abord si mon mot de passe actuel est suffisamment fort avant de décider.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un SMS avec un code d'authentification à six chiffres pour votre compte professionnel. Vous n'avez pas essayé de vous connecter à ce moment-là.",
        tags: ["MFA", "code reçu"],
        answers: [
          { text: "Je l'ignore — c'est probablement un bug ou une erreur d'envoi.", score: 0 },
          { text: "Je change immédiatement mon mot de passe et je contacte l'équipe informatique.", score: 2 },
          { text: "Je me connecte pour vérifier si quelqu'un est en train d'accéder à mon compte.", score: 0 },
          { text: "Je contacte l'équipe informatique en leur communiquant le code pour qu'ils enquêtent.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "likert",
        text: "Vous activez l'authentification à deux facteurs sur tous vos comptes professionnels qui le proposent, pas seulement ceux où c'est obligatoire.",
        tags: ["MFA", "utilisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "choix",
        text: "Quelqu'un vous appelle en se présentant comme du support informatique. Il dit qu'il a besoin du code 2FA que vous venez de recevoir pour 'débloquer un accès technique'.",
        tags: ["MFA", "pression"],
        answers: [
          { text: "Je lui donne — il est du support IT et a l'air de connaître le système.", score: 0 },
          { text: "Je raccroche et je contacte le support IT par le numéro officiel.", score: 2 },
          { text: "Je lui demande son nom et son matricule avant de décider.", score: 0.5 },
          { text: "Je lui explique que je ne peux pas donner ce code et je signale l'appel.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "choix",
        text: "Le processus 2FA de votre entreprise vous semble contraignant. Un collègue, Mathieu, vous explique une façon de le désactiver sur son poste pour gagner du temps.",
        tags: ["MFA", "contournement"],
        answers: [
          { text: "Je fais pareil — si Mathieu l'a fait et que ça fonctionne, c'est que c'est toléré.", score: 0 },
          { text: "Je lui explique que contourner le 2FA est une vulnérabilité pour toute l'organisation.", score: 2 },
          { text: "Je ne le fais pas mais je ne dis rien à Mathieu — c'est sa responsabilité.", score: 0.5 },
          { text: "Je signale à l'équipe informatique que le contournement est possible.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne communiquez jamais vos codes d'authentification à deux facteurs à qui que ce soit, même au support informatique.",
        tags: ["MFA", "résistance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "choix",
        text: "Votre application d'authentification est sur votre téléphone personnel. Vous perdez votre téléphone.",
        tags: ["MFA", "application"],
        answers: [
          { text: "J'attends de retrouver mon téléphone avant de faire quoi que ce soit.", score: 0 },
          { text: "Je contacte immédiatement l'équipe informatique pour désactiver l'accès depuis cet appareil.", score: 2 },
          { text: "Je change mes mots de passe depuis un autre appareil et j'attends.", score: 1 },
          { text: "Je bloque mon téléphone à distance et je signale la perte à l'informatique.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez plusieurs notifications d'approbation 2FA en rafale alors que vous n'essayez pas de vous connecter. La dernière est accompagnée d'un message 'Approuvez pour résoudre l'accès'.",
        tags: ["MFA", "notification"],
        answers: [
          { text: "J'approuve pour débloquer la situation — quelqu'un semble avoir un problème d'accès.", score: 0 },
          { text: "Je n'approuve pas, je contacte immédiatement l'équipe informatique et je change mon mot de passe.", score: 2 },
          { text: "J'approuve et je vérifie ensuite si quelqu'un d'autre utilise mon compte.", score: 0 },
          { text: "J'ignore les notifications en espérant que l'attaquant abandonne.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "likert",
        text: "Une notification 2FA que vous n'avez pas initiée vous conduit immédiatement à contacter l'équipe informatique.",
        tags: ["MFA", "vigilance notifications"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }, 
      {
        type: "choix",
        text: "Vous configurez un nouveau compte professionnel. Le système vous demande de définir des questions de sécurité de récupération. Vous choisissez 'Quel est le nom de votre premier animal de compagnie ?'.",
        tags: ["MFA", "récupération"],
        answers: [
          { text: "C'est une question dont je me souviendrai facilement — c'est l'objectif.", score: 0 },
          { text: "Je choisis des questions dont la réponse n'est pas devinable depuis mes réseaux sociaux.", score: 2 },
          { text: "Je mets une fausse réponse que je note dans mon gestionnaire de mots de passe.", score: 2 },
          { text: "Je choisis la question la plus obscure proposée dans la liste.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "L'authentification à deux facteurs est encore vue comme une contrainte plutôt qu'une protection", desc: "Activer le 2FA uniquement quand c'est obligatoire, donner son code 2FA au support qui appelle, approuver une notification qu'on n'a pas initiée pour 'débloquer' quelque chose : l'authentification à deux facteurs n'a de valeur que si elle est activée partout et jamais partagée. Un code 2FA demandé par téléphone ou via une notification imprévue est presque toujours une attaque." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez le 2FA sur les comptes imposés mais pas encore sur tous ceux qui le proposent", desc: "Vous avez activé le 2FA sur les applications sensibles que l'organisation impose. Mais les autres applications qui le proposent, la vigilance sur les codes 2FA non sollicités, la réaction rapide sur une notification non initiée : ces comportements ne sont pas encore automatiques. L'enjeu est d'étendre le 2FA à tous les comptes qui le permettent et de traiter toute demande de code non initiée comme une alerte." },
          haut: { label: "Réflexes installés", titre: "Le 2FA est activé partout et vous ne communiquez jamais vos codes, même sous pression", desc: "Vous activez le 2FA sur tous les comptes qui le proposent, vous n'approuvez jamais une notification que vous n'avez pas initiée, et vous ne communiquez jamais un code 2FA à qui que ce soit. Quand quelqu'un appelle pour demander votre code, vous raccrochez et vous signalez. Cette posture absolue sur le 2FA est ce qui rend vos comptes résistants même si votre mot de passe est compromis." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous partez déjeuner et laissez votre session ouverte sur votre poste. Vous revenez dans 45 minutes. Votre bureau est dans un espace commun.",
        tags: ["accès", "session ouverte"],
        answers: [
          { text: "Je laisse — je reviens dans moins d'une heure et je connais mes collègues.", score: 0 },
          { text: "Je verrouille mon poste avant de partir.", score: 2 },
          { text: "Je minimise toutes les fenêtres pour qu'on ne voie pas mon écran.", score: 0 },
          { text: "Je mets mon écran en veille.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "likert",
        text: "Vous verrouillez votre poste systématiquement dès que vous le quittez, même pour quelques minutes.",
        tags: ["accès", "verrouillage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue quitte l'entreprise. Avant son départ, il vous demande ses identifiants de connexion pour récupérer quelques fichiers personnels stockés sur les serveurs.",
        tags: ["accès", "départ collaborateur"],
        answers: [
          { text: "Je lui donne — il part et a le droit de récupérer ses affaires personnelles.", score: 0 },
          { text: "Je lui explique de passer par les RH et l'informatique pour la procédure de départ officielle.", score: 2 },
          { text: "Je l'aide à récupérer ses fichiers en restant présent·e pendant la session.", score: 0.5 },
          { text: "Je refuse et je le signale à notre responsable.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez accès à des dossiers et systèmes que votre poste ne nécessite pas vraiment. Cet accès étendu est pratique pour certaines tâches ponctuelles.",
        tags: ["accès", "droits excessifs"],
        answers: [
          { text: "Je garde les accès — ils me sont utiles de temps en temps et ça ne change rien.", score: 0 },
          { text: "Je le signale à l'équipe informatique pour que mes droits soient alignés sur mon périmètre réel.", score: 2 },
          { text: "J'utilise ces accès avec parcimonie en restant dans ce qui semble légitime.", score: 0.5 },
          { text: "Je pose la question à mon responsable pour savoir si ces accès sont voulus.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe utilise un compte partagé pour accéder à un outil externe. Tout le monde connaît le même identifiant et mot de passe. C'est pratique.",
        tags: ["accès", "compte partagé"],
        answers: [
          { text: "C'est la façon dont ça a toujours fonctionné — le compte partagé est géré collectivement.", score: 0 },
          { text: "Je remonte la situation à l'équipe informatique pour qu'un accès individuel soit mis en place.", score: 2 },
          { text: "Je change régulièrement le mot de passe partagé pour limiter le risque.", score: 0.5 },
          { text: "J'accepte pour les outils peu sensibles mais je refuse pour les outils critiques.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'utilisez que les accès dont vous avez réellement besoin pour votre travail et vous signalez les droits excessifs dont vous disposez.",
        tags: ["accès", "principe moindre privilège"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "choix",
        text: "Vous travaillez depuis un café et vous devez accéder aux systèmes de votre entreprise. Le wifi du café est disponible. Vous n'avez pas activé votre VPN.",
        tags: ["accès", "connexion externe"],
        answers: [
          { text: "Je me connecte directement — le wifi du café est protégé par un mot de passe.", score: 0 },
          { text: "J'active mon VPN avant de me connecter aux systèmes de l'entreprise.", score: 2 },
          { text: "Je me connecte uniquement pour les tâches non sensibles sans activer le VPN.", score: 0 },
          { text: "Je partage la connexion 4G de mon téléphone pour éviter le wifi public.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez encore accès à un système d'une ancienne mission qui s'est terminée il y a trois mois. L'accès n'a pas été révoqué.",
        tags: ["accès", "compte désactivé"],
        answers: [
          { text: "Je garde l'accès — ça peut être utile si on me consulte sur cette mission.", score: 0 },
          { text: "Je le signale à l'équipe informatique pour que l'accès soit révoqué.", score: 2 },
          { text: "Je n'utilise plus cet accès mais je ne fais pas la démarche de le signaler.", score: 0.5 },
          { text: "J'en parle à mon responsable pour qu'il décide si je dois le conserver.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "likert",
        text: "Quand une mission se termine ou que votre périmètre change, vous signalez les accès qui ne sont plus nécessaires pour qu'ils soient révoqués.",
        tags: ["accès", "révocation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }, 
      {
        type: "choix",
        text: "En fin de journée de télétravail, vous laissez votre ordinateur professionnel allumé et connecté au VPN. Vous reprenez le lendemain matin.",
        tags: ["accès", "télétravail"],
        answers: [
          { text: "C'est pratique — je reprends directement là où j'en étais.", score: 0 },
          { text: "Je me déconnecte du VPN et je verrouille ou éteins mon poste en fin de journée.", score: 2 },
          { text: "Je verrouille mon poste mais je laisse le VPN connecté pour les mises à jour automatiques.", score: 0.5 },
          { text: "Je laisse uniquement si je n'ai pas de données sensibles ouvertes.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser la session ouverte pour le déjeuner, garder des accès d'une ancienne mission, utiliser un compte partagé, ne pas se déconnecter du VPN en fin de télétravail : chaque accès non révoqué et chaque session non verrouillée est une fenêtre ouverte. La règle est simple — on ferme ce dont on n'a pas besoin maintenant." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais la gestion des accès reste encore perfectible", desc: "Vous verrouillez votre poste en partant. Mais les accès d'anciennes missions qui n'ont pas été révoqués, le compte partagé de l'équipe pour l'outil externe, la connexion au réseau d'entreprise sans VPN depuis un café : ces situations créent des expositions réelles. L'enjeu est d'appliquer le principe de moindre privilège — uniquement les accès dont on a besoin, révoqués quand on n'en a plus besoin." },
          haut: { label: "Réflexes installés", titre: "Vos accès et sessions sont gérés selon le principe de moindre privilège, sans exception", desc: "Vous verrouillez votre poste dès que vous le quittez. Vous signalez les accès qui ne correspondent plus à votre périmètre. Vous utilisez le VPN sur les réseaux non sécurisés. Vous vous déconnectez en fin de session. Vous ne partagez jamais vos identifiants, même à votre responsable. Cette gestion rigoureuse des accès supprime les fenêtres d'opportunité pour les attaquants." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "En vous connectant le matin, vous voyez dans l'historique de votre compte une connexion à 3h du matin depuis un pays étranger que vous n'avez pas visitée.",
        tags: ["compromission", "détection"],
        answers: [
          { text: "Je vérifie si ça peut être une mise à jour automatique ou une connexion liée à un service cloud.", score: 0.5 },
          { text: "Je change mon mot de passe immédiatement et je contacte l'équipe informatique.", score: 2 },
          { text: "Je change mon mot de passe et j'attends de voir si ça se reproduit.", score: 0.5 },
          { text: "Je contacte l'équipe informatique sans toucher à mon compte pour qu'ils enquêtent.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "likert",
        text: "Sur tout signe de connexion non autorisée à l'un de vos comptes, vous changez votre mot de passe et contactez l'équipe informatique dans l'heure.",
        tags: ["compromission", "réactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "choix",
        text: "Vous apprenez qu'un site externe sur lequel vous avez un compte a subi une fuite de données. Vous utilisez le même mot de passe sur plusieurs comptes professionnels.",
        tags: ["compromission", "fuite"],
        answers: [
          { text: "Je change le mot de passe du site concerné — les autres comptes ont des adresses différentes.", score: 0 },
          { text: "Je change le mot de passe sur tous les comptes où j'utilisais ce mot de passe.", score: 2 },
          { text: "Je change les mots de passe des comptes professionnels les plus sensibles.", score: 1 },
          { text: "J'attends de voir si mes comptes professionnels montrent des signes d'activité suspecte.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "choix",
        text: "Votre collègue Sophie vous dit que son compte a probablement été compromis mais qu'elle hésite à le signaler car elle a peur des conséquences sur son évaluation.",
        tags: ["compromission", "collègue"],
        answers: [
          { text: "Je lui dis de ne pas signaler si elle n'en est pas sûre — mieux vaut attendre d'avoir la certitude.", score: 0 },
          { text: "Je lui explique que le délai de signalement aggrave le risque pour toute l'organisation et je l'encourage à agir maintenant.", score: 2 },
          { text: "Je lui propose de signaler de façon anonyme si c'est possible.", score: 1 },
          { text: "Je lui dis de changer son mot de passe et d'activer le 2FA avant de décider si elle signale.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "choix",
        text: "Vous remarquez que des fichiers dans votre espace de travail partagé ont été modifiés mais vous n'avez pas de collègue qui aurait dû y toucher. Les modifications semblent mineures.",
        tags: ["compromission", "accès tiers"],
        answers: [
          { text: "Je laisse — les modifications sont mineures et il y a peut-être une explication logique.", score: 0 },
          { text: "Je le signale à l'équipe informatique en indiquant les fichiers concernés et l'heure des modifications.", score: 2 },
          { text: "Je contacte les collègues qui ont accès à cet espace pour voir si l'un d'eux a fait ces modifications.", score: 1 },
          { text: "Je surveille pendant quelques jours pour voir si d'autres modifications apparaissent.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez tout comportement anormal sur vos comptes ou vos fichiers, même si vous n'êtes pas certain·e d'une compromission.",
        tags: ["compromission", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "choix",
        text: "Vous pensez que votre poste a été compromis. Vous avez besoin d'envoyer un fichier urgent à un client dans les prochaines minutes.",
        tags: ["compromission", "propagation"],
        answers: [
          { text: "J'envoie le fichier rapidement puis je signale la compromission.", score: 0 },
          { text: "Je déconnecte mon poste du réseau immédiatement et je contacte l'équipe informatique avant toute autre action.", score: 2 },
          { text: "Je demande à un collègue d'envoyer le fichier depuis son poste pendant que je contacte l'informatique.", score: 1.5 },
          { text: "J'utilise mon téléphone pour envoyer le fichier et je déconnecte mon poste.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "choix",
        text: "L'équipe informatique vous informe que votre compte a été compromis il y a deux semaines. Vous devez identifier les actions potentiellement impactées.",
        tags: ["compromission", "historique"],
        answers: [
          { text: "Je ne me souviens pas de tout ce que j'ai fait — je laisse l'informatique enquêter.", score: 0.5 },
          { text: "Je reconstitue au mieux les actions et accès de cette période et je les communique à l'équipe informatique.", score: 2 },
          { text: "Je change tous mes mots de passe et j'attends les conclusions de l'enquête.", score: 1 },
          { text: "Je consulte mon historique de connexion et mes envois de mails pour identifier les anomalies.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "likert",
        text: "En cas de suspicion de compromission, vous coopérez activement avec l'équipe informatique en leur fournissant toutes les informations utiles, même inconfortables.",
        tags: ["compromission", "coopération"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }, 
      {
        type: "choix",
        text: "Votre organisation propose une formation de 30 minutes sur la sécurité des mots de passe. Elle n'est pas obligatoire. Vous pensez déjà connaître les bases.",
        tags: ["compromission", "prévention"],
        answers: [
          { text: "Je ne la fais pas — je connais les bonnes pratiques et 30 minutes de formation ne changent pas grand chose.", score: 0 },
          { text: "Je la suis — les techniques évoluent et même 30 minutes peut m'apprendre quelque chose d'utile.", score: 2 },
          { text: "Je la parcours rapidement pour voir si elle contient quelque chose de nouveau.", score: 0.5 },
          { text: "Je la fais si un incident récent l'a rendue pertinente.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction à une compromission tarde encore, par incertitude ou par peur des conséquences", desc: "Attendre de voir si ça se reproduit, hésiter à signaler pour ne pas avoir d'ennuis, envoyer le fichier urgent avant de déconnecter le poste compromis : chaque minute de délai après une compromission donne à l'attaquant plus de temps pour extraire des données ou se propager. Signaler vite, même sur un doute, est toujours la bonne décision." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents évidents mais les signaux ambigus ou inconfortables restent encore sans réaction immédiate", desc: "Vous signalez quand la compromission est évidente. Mais une connexion à 3h du matin depuis l'étranger qu'on pourrait 'expliquer', des modifications de fichiers qu'on surveille avant de signaler, une collègue qui hésite à signaler par peur de l'évaluation : le délai de réaction et l'hésitation au signalement restent insuffisants. L'enjeu est de signaler sur le doute, pas sur la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez immédiatement à tout signe de compromission et vous signalez sans attendre", desc: "Une connexion suspecte dans l'historique ? Vous changez le mot de passe et contactez l'informatique dans l'heure. Une fuite sur un site externe ? Vous changez le mot de passe partout où vous l'avez utilisé. Un fichier modifié sans raison apparente ? Vous le signalez sans attendre. Votre poste semble compromis ? Vous le déconnectez avant d'envoyer quoi que ce soit. Cette réactivité immédiate est ce qui limite la propagation des attaques." },
        },
      }
    ],

  },

  "donnees-confidentialite": {
    0: [
      {
        type: "choix",
        text: "Vous préparez une présentation pour un client. Elle contient des projections financières internes et des données sur les marges de votre entreprise. Vous l'envoyez par mail via votre messagerie personnelle Gmail pour travailler depuis chez vous.",
        tags: ["données", "classification"],
        answers: [
          { text: "C'est plus pratique pour accéder depuis mon domicile et les données restent dans ma boîte mail.", score: 0 },
          { text: "J'utilise uniquement les outils professionnels approuvés pour transférer des données sensibles.", score: 2 },
          { text: "J'utilise Gmail uniquement pour les fichiers non confidentiels.", score: 0.5 },
          { text: "Je chiffre le fichier avant de l'envoyer via Gmail.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "choix",
        text: "Vous trouvez un document marqué 'Confidentiel' sur l'imprimante partagée. Vous le reconnaissez comme appartenant à votre collègue Jonathan.",
        tags: ["données", "classification"],
        answers: [
          { text: "Je le lis rapidement pour voir si c'est important et je le lui laisse.", score: 0 },
          { text: "Je le retourne face contre la machine sans le lire et je préviens Jonathan.", score: 2 },
          { text: "Je le laisse sur l'imprimante — ce n'est pas à moi de gérer.", score: 0 },
          { text: "Je le mets dans un tiroir fermé et j'envoie un message à Jonathan.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "likert",
        text: "Avant d'envoyer ou de partager un document, vous évaluez si son niveau de sensibilité est compatible avec le canal que vous allez utiliser.",
        tags: ["données", "sensibilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "choix",
        text: "Vous prenez le train et vous passez un appel professionnel. Le wagon est occupé. La conversation porte sur les résultats financiers du trimestre, pas encore publiés.",
        tags: ["données", "conversation"],
        answers: [
          { text: "Je continue l'appel en baissant la voix — les passagers n'écoutent probablement pas.", score: 0 },
          { text: "Je reporte l'appel à un moment où je peux parler sans être entendu.", score: 2 },
          { text: "Je continue mais sans citer de chiffres précis.", score: 0.5 },
          { text: "Je passe dans le couloir pour parler avec moins de monde autour.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez imprimé un document contenant les salaires de votre équipe pour une réunion. La réunion est terminée. Les copies sont inutiles.",
        tags: ["données", "destruction"],
        answers: [
          { text: "Je les froisse et je les jette dans la corbeille de bureau.", score: 0 },
          { text: "Je les déchiquète ou je les mets dans le bac de destruction sécurisé.", score: 2 },
          { text: "Je les garde dans mon bureau pour les détruire plus tard.", score: 0.5 },
          { text: "Je les plie en quatre avant de les jeter pour qu'elles soient moins lisibles.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "likert",
        text: "Vous détruisez correctement les documents confidentiels papier plutôt que de les jeter dans la corbeille ordinaire.",
        tags: ["données", "destruction"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "choix",
        text: "Vous trouvez une clé USB dans la salle de réunion après une réunion avec un client. Elle n'a pas d'indication d'appartenance.",
        tags: ["données", "clé USB"],
        answers: [
          { text: "Je la branche sur mon poste pour identifier son propriétaire.", score: 0 },
          { text: "Je la remets à l'accueil ou à l'équipe informatique sans la brancher.", score: 2 },
          { text: "Je la pose sur un bureau en vue pour que quelqu'un la réclame.", score: 0 },
          { text: "Je la garde le temps de trouver son propriétaire.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "choix",
        text: "Vous travaillez sur un dossier client sensible dans un open space. Un collègue d'un autre département s'arrête pour vous parler et peut voir votre écran.",
        tags: ["données", "écran"],
        answers: [
          { text: "Je continue à travailler — mes collègues sont de confiance et sont soumis au même accord de confidentialité.", score: 0 },
          { text: "Je minimise les fenêtres sensibles le temps de la conversation.", score: 2 },
          { text: "Je me tourne légèrement pour que mon écran soit moins visible.", score: 1 },
          { text: "Je lui demande gentiment de me donner un instant avant de le rejoindre.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'accédez qu'aux données dont vous avez besoin pour votre travail, même quand vous avez techniquement accès à davantage.",
        tags: ["données", "accès"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }, 
      {
        type: "choix",
        text: "Vous gardez une copie de travail de dossiers clients sur une clé USB personnelle pour pouvoir y accéder facilement depuis n'importe quel poste.",
        tags: ["données", "sauvegarde"],
        answers: [
          { text: "C'est pratique pour travailler de façon flexible sans dépendre du réseau de l'entreprise.", score: 0 },
          { text: "Je supprime les copies locales et j'utilise uniquement les solutions de stockage approuvées par l'entreprise.", score: 2 },
          { text: "Je chiffre la clé USB et je limite les données copiées aux strictement nécessaires.", score: 1 },
          { text: "Je garde uniquement les documents sur lesquels je travaille activement.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les données professionnelles avec les mêmes habitudes que vos données personnelles", desc: "Envoyer des fichiers via Gmail pour travailler de chez soi, garder des données sur une clé USB personnelle, parler de résultats non publiés dans le train : ces comportements semblent anodins mais créent des expositions réelles. Les données professionnelles sortent du périmètre sécurisé de l'entreprise dès qu'elles transitent par des outils ou supports personnels — même pour quelques minutes." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les données sensibles dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous chiffrez les fichiers importants, vous verrouillez votre écran, vous détruisez les documents confidentiels. Mais la clé USB de secours pour travailler depuis n'importe où, le mail via Gmail pour accéder au fichier depuis chez soi, la conversation confidentielle dans le train en baissant juste la voix : ces habitudes créent des expositions que vous ne mesurez pas toujours. L'enjeu est d'appliquer le même niveau de vigilance à tous les vecteurs, pas seulement aux plus évidents." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les données professionnelles avec la même rigueur quel que soit le support ou le contexte", desc: "Vous n'envoyez pas de fichiers professionnels via des outils personnels. Vous ne stockez pas de données sur des supports non approuvés. Vous détruisez les documents confidentiels papier. Vous minimisez les fenêtres sensibles quand quelqu'un approche. Cette discipline constante — qui s'applique dans le bureau, dans le train, chez soi — est ce qui maintient réellement les données dans le périmètre sécurisé de l'entreprise." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous envoyez un fichier confidentiel par mail. Vous commencez à taper le prénom d'une collègue — Céline — et la saisie automatique propose deux adresses : celle de votre collègue interne et une adresse externe similaire. Vous cliquez sur la première.",
        tags: ["partage", "destinataire"],
        answers: [
          { text: "Je fais confiance à la saisie automatique — c'est le système qui propose.", score: 0 },
          { text: "Je vérifie toujours l'adresse complète avant d'envoyer un fichier sensible.", score: 2 },
          { text: "Je vérifierai l'accusé de réception pour m'assurer qu'elle a bien reçu.", score: 0 },
          { text: "Je lui envoie un message séparé pour confirmer qu'elle a bien reçu le fichier.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "likert",
        text: "Avant d'envoyer un document confidentiel, vous vérifiez manuellement chaque adresse destinataire, même en cas de saisie automatique.",
        tags: ["partage", "vérification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "choix",
        text: "Un partenaire externe vous demande d'envoyer un contrat non finalisé via WeTransfer car il dit que sa messagerie ne reçoit pas les pièces jointes volumineuses.",
        tags: ["partage", "outil"],
        answers: [
          { text: "J'envoie via WeTransfer — c'est un outil connu et le contrat n'est pas finalisé.", score: 0 },
          { text: "Je vérifie si notre entreprise dispose d'un outil de partage externe approuvé et je l'utilise.", score: 2 },
          { text: "Je compresse et chiffre le fichier avant de l'envoyer via WeTransfer.", score: 0.5 },
          { text: "Je contacte notre équipe informatique pour trouver une solution approuvée.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous partagez un document sensible dans un canal Teams d'équipe. Vous réalisez ensuite que ce canal inclut des personnes extérieures à votre équipe.",
        tags: ["partage", "groupe Teams"],
        answers: [
          { text: "Je laisse — les personnes dans ce Teams ont probablement été ajoutées pour une bonne raison.", score: 0 },
          { text: "Je supprime le fichier du canal et je le partage uniquement avec les personnes concernées.", score: 2 },
          { text: "Je vérifie la liste des membres et je supprime le fichier si des personnes non autorisées y ont accès.", score: 2 },
          { text: "Je l'archive pour que seuls les membres actifs le voient.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue d'un autre service vous demande par mail la liste des adresses personnelles des employés de votre département pour envoyer des cartes de vœux.",
        tags: ["partage", "données personnelles"],
        answers: [
          { text: "Je lui envoie la liste — c'est pour un usage bienveillant.", score: 0 },
          { text: "Je lui dis que ce type de données ne peut pas être partagé sans autorisation RH et DPO.", score: 2 },
          { text: "Je lui envoie uniquement les adresses des personnes qui m'ont donné leur accord.", score: 1 },
          { text: "Je lui transmets la demande aux RH pour qu'elles gèrent.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne partagez jamais de données personnelles de collaborateurs (adresses, numéros, salaires) sans validation RH ou DPO, quelle que soit la demande.",
        tags: ["partage", "données personnelles"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous venez d'envoyer un mail avec une pièce jointe confidentielle au mauvais destinataire. Il n'est pas dans votre entreprise.",
        tags: ["partage", "mauvais envoi"],
        answers: [
          { text: "Je lui envoie immédiatement un mail pour lui demander de supprimer le fichier.", score: 0.5 },
          { text: "Je contacte immédiatement l'équipe informatique et le DPO pour qu'ils gèrent selon la procédure.", score: 2 },
          { text: "J'envoie un mail de rappel et je note l'incident dans mon registre personnel.", score: 0 },
          { text: "Je rappelle le destinataire pour lui demander de supprimer le fichier et j'en informe mon responsable.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue vous demande par WhatsApp professionnel de lui envoyer le numéro de sécurité sociale d'un employé pour remplir un formulaire RH urgent.",
        tags: ["partage", "messagerie instantanée"],
        answers: [
          { text: "Je lui envoie via WhatsApp — c'est urgent et c'est un collègue de confiance.", score: 0 },
          { text: "Je lui dis de passer par les canaux sécurisés approuvés par l'entreprise pour ce type de donnée.", score: 2 },
          { text: "Je lui envoie via la messagerie professionnelle chiffrée.", score: 1 },
          { text: "Je lui donne le contact direct de la personne concernée pour qu'elle transmette elle-même.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'utilisez pas les messageries personnelles (WhatsApp, Gmail, etc.) pour transmettre des données professionnelles sensibles.",
        tags: ["partage", "canal"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous partagez un dossier SharePoint en lien public pour faciliter la collaboration avec un partenaire sur un projet confidentiel.",
        tags: ["partage", "droits"],
        answers: [
          { text: "C'est pratique pour la collaboration externe et le lien n'est pas facile à trouver.", score: 0 },
          { text: "Je configure des droits d'accès nominatifs pour le partenaire plutôt qu'un lien public.", score: 2 },
          { text: "Je protège le lien par un mot de passe.", score: 0.5 },
          { text: "Je vérifie avec l'équipe informatique si le lien public est acceptable pour ce type de projet.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous partagez les données en privilégiant la praticité sur la sécurité", desc: "Cliquer sans vérifier l'adresse complète du destinataire, envoyer un document confidentiel via WeTransfer parce que c'est plus pratique, créer un lien public sur SharePoint pour faciliter la collaboration : la praticité et la sécurité sont souvent en tension. Dans tous ces cas, une erreur ou une mauvaise configuration crée une fuite de données réelle dont les conséquences peuvent être significatives." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les destinataires et les canaux dans la plupart des cas mais des raccourcis apparaissent sous pression", desc: "Vous vérifiez généralement les adresses avant d'envoyer, vous utilisez les outils approuvés pour les dossiers importants. Mais sous pression de délai, quand le partenaire insiste pour un outil non approuvé, quand le lien public semble la solution la plus rapide : des raccourcis apparaissent. L'enjeu est de maintenir la rigueur dans ces moments précis." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement destinataires et canaux avant tout partage de données sensibles", desc: "Vous vérifiez manuellement l'adresse destinataire de chaque mail sensible. Vous utilisez les outils de partage approuvés même quand le partenaire demande autre chose. Vous configurez des droits nominatifs plutôt que des liens publics. Vous signalez immédiatement un envoi erroné au DPO. Cette rigueur dans le partage — qui suppose d'accepter parfois de ralentir — est ce qui évite les fuites accidentelles qui représentent la majorité des incidents de données." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous organisez un événement client et vous voulez garder les contacts dans votre CRM personnel pour de futurs échanges. Les participants ont simplement assisté à l'événement sans signer de consentement explicite.",
        tags: ["RGPD", "collecte"],
        answers: [
          { text: "Je les ajoute — ils ont participé à notre événement, c'est un contact légitime.", score: 0 },
          { text: "Je ne les ajoute que si j'ai recueilli leur consentement pour des communications futures.", score: 2 },
          { text: "Je les ajoute en limitant les communications aux seules informations liées à l'événement.", score: 0.5 },
          { text: "Je les ajoute dans le CRM de l'entreprise uniquement, pas dans mon CRM personnel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "likert",
        text: "Avant d'utiliser des données personnelles pour de la prospection ou de la communication, vous vérifiez que le consentement a bien été recueilli.",
        tags: ["RGPD", "consentement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez des dossiers de candidats qui n'ont pas été retenus il y a trois ans. Ils sont toujours dans votre système RH.",
        tags: ["RGPD", "durée conservation"],
        answers: [
          { text: "Je les garde — on ne sait jamais si un futur poste correspond à leur profil.", score: 0 },
          { text: "Je les supprime — les données de candidature ont une durée de conservation limitée en droit français.", score: 2 },
          { text: "Je les archive en lecture seule pour les garder sans les utiliser.", score: 0 },
          { text: "Je contacte les candidats pour leur demander s'ils souhaitent rester dans notre base.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "choix",
        text: "Un ancien client vous demande par mail la liste des données personnelles que votre entreprise détient sur lui. Il invoque le RGPD.",
        tags: ["RGPD", "droit d'accès"],
        answers: [
          { text: "Je lui réponds que je ne gère pas ce type de demande et je lui suggère de contacter notre service commercial.", score: 0 },
          { text: "Je transmets la demande au DPO de l'entreprise pour traitement dans les délais légaux.", score: 2 },
          { text: "Je lui réponds directement en lui envoyant les données que j'ai sur lui.", score: 0 },
          { text: "Je lui demande de préciser sa demande avant de la transmettre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous créez un formulaire d'inscription en ligne pour un webinaire. Par habitude, vous demandez le nom, prénom, email, téléphone, taille de l'entreprise, secteur, budget et poste.",
        tags: ["RGPD", "minimisation"],
        answers: [
          { text: "C'est utile pour qualifier les prospects — plus on a d'informations, mieux c'est.", score: 0 },
          { text: "Je réduis aux données strictement nécessaires pour l'organisation du webinaire.", score: 2 },
          { text: "Je garde les champs mais je rends certains optionnels.", score: 0.5 },
          { text: "Je consulte notre DPO pour savoir quels champs sont légalement acceptables.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous collectez des données personnelles, vous limitez la collecte aux données réellement nécessaires à votre objectif.",
        tags: ["RGPD", "minimisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez que vous avez envoyé par erreur un fichier contenant des données personnelles de clients à un destinataire externe non autorisé.",
        tags: ["RGPD", "violation"],
        answers: [
          { text: "Je lui envoie un mail pour lui demander de supprimer le fichier — c'est réglé.", score: 0 },
          { text: "Je contacte immédiatement le DPO de l'entreprise — une violation de données personnelles doit être notifiée à la CNIL sous 72 heures.", score: 2 },
          { text: "J'en parle à mon responsable pour qu'il évalue si c'est grave.", score: 1 },
          { text: "Je contacte le destinataire et je signale à mon responsable en espérant que le fichier ne soit pas utilisé.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous envisagez d'utiliser un outil SaaS gratuit pour analyser les données clients de votre entreprise. Cet outil n'est pas approuvé par votre DSI.",
        tags: ["RGPD", "sous-traitant"],
        answers: [
          { text: "Je l'utilise — c'est un outil reconnu dans le secteur et les données sont en sécurité.", score: 0 },
          { text: "Je consulte la DSI avant d'utiliser tout outil tiers avec des données clients.", score: 2 },
          { text: "Je l'utilise uniquement avec des données anonymisées.", score: 0.5 },
          { text: "Je vérifie la politique de confidentialité de l'outil avant de l'utiliser.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'utilisez pas d'outils non approuvés par votre DSI pour traiter des données personnelles, même si ces outils sont reconnus dans votre secteur.",
        tags: ["RGPD", "outils"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau collaborateur, Rayan, utilise un fichier Excel partagé en dehors du CRM pour suivre ses contacts prospects avec numéros de téléphone personnels et notes de conversations.",
        tags: ["RGPD", "sensibilisation"],
        answers: [
          { text: "Je laisse — il est nouveau et c'est une pratique courante en commercial.", score: 0 },
          { text: "Je lui explique les obligations RGPD et je l'oriente vers les outils approuvés de l'entreprise.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il recadre.", score: 1 },
          { text: "Je lui envoie la politique de données de l'entreprise par mail.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le RGPD est encore perçu comme une contrainte administrative plutôt que comme une responsabilité réelle", desc: "Garder des données de candidats trois ans après le recrutement, ajouter des contacts d'un événement sans consentement, collecter plus de données que nécessaire dans un formulaire : ces comportements sont courants et souvent non intentionnels. Le RGPD n'est pas seulement une obligation légale — c'est une façon de traiter les données des personnes avec le respect qu'elles méritent." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les principales obligations RGPD mais leur application systématique est encore incomplète", desc: "Vous respectez les grandes obligations RGPD — consentement, durée de conservation sur les sujets que vous maîtrisez. Mais la minimisation des données dans les formulaires, la notification de violation dans les 72h, les outils SaaS non approuvés avec des données clients : ces aspects sont encore insuffisamment intégrés. L'enjeu est de traiter le RGPD comme une pratique quotidienne, pas comme un sujet ponctuel." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez le RGPD comme une pratique quotidienne — consentement, minimisation, durées de conservation", desc: "Vous ne collectez que les données nécessaires. Vous vérifiez les consentements avant d'utiliser des contacts. Vous transmettez les demandes d'accès au DPO dans les délais. Vous supprimez les données de candidats dans les délais légaux. Vous consultez la DSI avant d'utiliser un outil tiers avec des données clients. Cette façon de traiter le RGPD comme une pratique quotidienne — pas comme un sujet ponctuel — est ce qui protège réellement les personnes dont vous traitez les données." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous perdez votre ordinateur portable professionnel dans les transports. Il contient des données clients non chiffrées.",
        tags: ["incident données", "perte"],
        answers: [
          { text: "Je le signale à la police et j'attends de voir si on le retrouve avant de prévenir l'entreprise.", score: 0 },
          { text: "Je contacte immédiatement mon équipe informatique et mon responsable pour déclencher la procédure d'incident.", score: 2 },
          { text: "Je change les mots de passe de mes comptes professionnels et je signale la perte à mon responsable.", score: 1 },
          { text: "Je le bloque à distance si possible et je le signale à l'équipe informatique dans la journée.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "likert",
        text: "Sur perte ou vol d'un support contenant des données professionnelles, vous contactez immédiatement l'équipe informatique et votre responsable — avant même de signaler à la police.",
        tags: ["incident données", "réactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous utilisez depuis plusieurs mois un service cloud personnel pour stocker des données de travail. Vous réalisez que ce service a subi une fuite de données.",
        tags: ["incident données", "shadow IT"],
        answers: [
          { text: "Je supprime les données du service et je n'en parle pas — la fuite concerne d'autres utilisateurs.", score: 0 },
          { text: "Je signale immédiatement l'incident à l'équipe informatique en précisant quelles données étaient stockées.", score: 2 },
          { text: "Je change le mot de passe du service et je déplace les données sur un outil approuvé.", score: 0.5 },
          { text: "Je contacte le service cloud pour avoir des précisions sur la fuite avant de décider.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous remarquez qu'un grand volume de données a été téléchargé depuis votre compte la nuit dernière. Vous n'avez pas fait ces téléchargements.",
        tags: ["incident données", "signalement"],
        answers: [
          { text: "Je vérifie s'il y a une explication logique — mise à jour automatique, synchronisation.", score: 0.5 },
          { text: "Je contacte immédiatement l'équipe informatique en leur donnant les détails de l'activité suspecte.", score: 2 },
          { text: "Je change mon mot de passe et j'active le 2FA avant de signaler.", score: 1 },
          { text: "Je surveille encore 24 heures pour confirmer que c'était bien suspect.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous découvrez qu'un ancien collègue parti depuis trois mois a toujours accès aux dossiers partagés de votre équipe et a consulté des fichiers récemment.",
        tags: ["incident données", "collègue"],
        answers: [
          { text: "Je le signale à mon responsable — il réglera la question des accès avec l'ex-collègue.", score: 0.5 },
          { text: "Je contacte immédiatement l'équipe informatique pour que l'accès soit révoqué et l'incident documenté.", score: 2 },
          { text: "Je contacte l'ex-collègue directement pour comprendre pourquoi il a consulté ces fichiers.", score: 0 },
          { text: "Je lui retire l'accès moi-même depuis les paramètres du dossier partagé.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez tout accès non autorisé ou anormal à des données, même si vous n'êtes pas certain·e de la gravité.",
        tags: ["incident données", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez qu'un mail avec des données médicales de salariés a été envoyé par erreur à une liste de diffusion incluant des personnes extérieures à l'équipe RH.",
        tags: ["incident données", "erreur envoi"],
        answers: [
          { text: "J'envoie un mail de rappel à toute la liste pour demander de supprimer le mail précédent.", score: 0 },
          { text: "Je contacte immédiatement le DPO — les données de santé sont des données sensibles avec un régime particulier sous le RGPD.", score: 2 },
          { text: "Je bloque l'envoi si je peux encore le faire et j'en parle à mon responsable.", score: 1 },
          { text: "J'en parle à mon responsable et à l'équipe informatique pour évaluer l'impact.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous partez de l'entreprise dans deux semaines. Vous copiez sur une clé USB personnelle des dossiers clients que vous avez construits pendant votre mission, 'au cas où'.",
        tags: ["incident données", "exfiltration"],
        answers: [
          { text: "C'est mon travail — ces dossiers, c'est moi qui les ai construits.", score: 0 },
          { text: "Je ne copie rien — les données clients appartiennent à l'entreprise, pas à moi.", score: 2 },
          { text: "Je copie uniquement mes notes personnelles et mes modèles de documents génériques.", score: 1 },
          { text: "Je demande à mon responsable s'il y a des éléments que je peux conserver.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "likert",
        text: "En quittant un poste, vous ne copiez pas de données professionnelles sur des supports personnels, même celles que vous avez créées.",
        tags: ["incident données", "départ"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "L'équipe informatique vous contacte dans le cadre d'une enquête sur une possible fuite de données. Elle vous demande les accès que vous avez effectués sur certains dossiers.",
        tags: ["incident données", "enquête interne"],
        answers: [
          { text: "Je réponds uniquement aux questions strictement nécessaires — mieux vaut rester prudent.", score: 0 },
          { text: "Je coopère pleinement en fournissant toutes les informations demandées.", score: 2 },
          { text: "Je consulte d'abord un responsable RH avant de répondre.", score: 0.5 },
          { text: "Je réponds honnêtement mais je demande pourquoi ces informations sont nécessaires.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La réaction aux incidents de données tarde ou reste incomplète par peur des conséquences", desc: "Attendre de retrouver un ordinateur perdu avant de prévenir l'entreprise, ne pas signaler une fuite d'un outil non approuvé, envoyer un mail de rappel comme seule réponse à un envoi erroné de données médicales : ces réponses insuffisantes laissent des incidents se propager. Les délais légaux de notification (72h pour la CNIL) ne laissent pas de place à l'attentisme." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais les situations ambiguës ou inconfortables restent encore sans réaction rapide", desc: "Vous signalez les pertes et vols d'appareils. Mais une fuite via un outil non approuvé que vous n'auriez pas dû utiliser, un envoi erroné de données médicales où un simple mail de rappel semble suffisant, un accès suspect d'un ex-collègue qu'on règle en interne : le réflexe de signalement auprès du DPO et de l'équipe informatique n'est pas encore automatique dans toutes ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout incident de données et coopérez pleinement avec les équipes concernées", desc: "Sur perte d'un appareil, vous contactez l'équipe informatique avant même la police. Sur envoi erroné de données médicales, vous allez directement au DPO. Sur accès suspect d'un ex-collègue, vous déclenchez la procédure informatique. Sur fuite d'un outil non approuvé, vous signalez même si ça révèle un usage non conforme de votre part. Cette coopération sans réserve avec les équipes sécurité et conformité est ce qui permet de contenir les incidents." },
        },
      }
    ],

  },

  "comportements-risque-mobilite": {
    0: [
      {
        type: "choix",
        text: "Vous êtes dans un aéroport et vous posez votre ordinateur portable sur la tablette du scanner de sécurité. Une fois de l'autre côté, vous êtes sollicité·e pour ouvrir votre sac. Votre ordinateur est dans le bac sur le tapis roulant.",
        tags: ["mobilité", "verrouillage"],
        answers: [
          { text: "Je réponds au contrôleur — l'ordinateur est dans le bac et personne n'y touchera.", score: 0 },
          { text: "Je demande à récupérer mon ordinateur du bac avant de m'arrêter pour ouvrir mon sac.", score: 2 },
          { text: "Je garde un œil sur le bac pendant que je réponds.", score: 0.5 },
          { text: "Je demande à quelqu'un de confiance autour de moi de surveiller mon ordinateur.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous travaillez dans le train sur des documents RH confidentiels. Le siège à côté de vous est libre mais la personne derrière vous peut voir votre écran.",
        tags: ["mobilité", "écran"],
        answers: [
          { text: "Je continue — je suis concentré·e sur mon travail et je ne regarde pas ce que font les autres.", score: 0 },
          { text: "Je bascule sur des tâches non confidentielles ou j'installe un filtre de confidentialité.", score: 2 },
          { text: "Je me penche légèrement en avant pour réduire l'angle de vision de la personne derrière.", score: 0.5 },
          { text: "Je travaille uniquement sur des documents que je peux refermer rapidement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "likert",
        text: "En déplacement, vous ne travaillez pas sur des documents confidentiels dans des espaces où votre écran peut être vu par des personnes extérieures.",
        tags: ["mobilité", "visibilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez en arrivant à votre hôtel que votre téléphone professionnel n'est plus dans votre poche. Vous l'avez peut-être laissé dans le taxi.",
        tags: ["mobilité", "perte"],
        answers: [
          { text: "Je rappelle le taxi et j'attends de voir s'il a mon téléphone avant de prendre d'autres mesures.", score: 0 },
          { text: "Je contacte immédiatement mon équipe informatique pour déclencher la procédure de perte et de blocage à distance.", score: 2 },
          { text: "Je bloque mon téléphone à distance via le service MDM et je le signale ensuite.", score: 1.5 },
          { text: "Je contacte mon responsable et je reviens sur mes pas pour le chercher.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous revenez d'un salon professionnel avec plusieurs clés USB offertes par des exposants. Vous voulez regarder les informations dessus.",
        tags: ["mobilité", "stockage"],
        answers: [
          { text: "Je les branche sur mon ordinateur professionnel — ce sont des supports officiels de prestataires du secteur.", score: 0 },
          { text: "Je les remets à l'équipe informatique sans les brancher.", score: 2 },
          { text: "Je les branche sur un ordinateur déconnecté du réseau pour vérifier leur contenu.", score: 0.5 },
          { text: "Je les jette directement — les clés USB inconnues ne sont jamais sûres.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne branchez jamais une clé USB ou un support externe dont vous ne connaissez pas l'origine sur vos appareils professionnels.",
        tags: ["mobilité", "supports externes"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez transporter un disque dur externe contenant des données clients pour une présentation chez un client. Le disque n'est pas chiffré.",
        tags: ["mobilité", "chiffrement"],
        answers: [
          { text: "Je l'emporte — la présentation est demain matin et le chiffrement prendrait trop de temps.", score: 0 },
          { text: "Je demande à l'équipe informatique un disque chiffré ou je transfert les données sur un support approuvé.", score: 2 },
          { text: "Je chiffre le disque avant de partir — c'est une précaution rapide à prendre.", score: 2 },
          { text: "Je garde le disque dur dans mon sac tout le temps pour éviter qu'il soit volé.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous partez en déplacement professionnel dans un pays étranger. À la douane, un agent vous demande d'ouvrir votre ordinateur et de lui montrer les fichiers que vous transportez.",
        tags: ["mobilité", "douanes"],
        answers: [
          { text: "Je montre les fichiers demandés — refuser un agent de douane est risqué.", score: 0.5 },
          { text: "Je contacte immédiatement mon responsable juridique ou mon responsable avant d'ouvrir quoi que ce soit.", score: 2 },
          { text: "Je coopère avec les douanes tout en essayant de limiter l'exposition des données confidentielles.", score: 1 },
          { text: "Je documente ce qui est demandé et je signale l'incident à mon retour.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "likert",
        text: "Avant un déplacement professionnel à l'étranger, vous vous renseignez sur les précautions à prendre dans le pays de destination concernant la sécurité de vos données.",
        tags: ["mobilité", "voyage professionnel"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous utilisez votre téléphone personnel pour accéder aux mails professionnels. Votre fils de 12 ans vous demande d'utiliser votre téléphone pour jouer à un jeu pendant le dîner.",
        tags: ["mobilité", "BYOD"],
        answers: [
          { text: "Je lui prête mon téléphone — il ne touchera pas aux mails professionnels.", score: 0 },
          { text: "Je lui prête uniquement si mes comptes professionnels sont protégés par un code PIN séparé.", score: 0.5 },
          { text: "Je lui prête mon téléphone personnel uniquement si j'ai un profil séparé pour le usage pro.", score: 1 },
          { text: "Je ne prête pas un appareil qui accède à mes données professionnelles.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos appareils en déplacement sont exposés — visibilité de l'écran, supports inconnus, appareils non chiffrés", desc: "Laisser son ordinateur dans le bac du scanner aéroport, travailler sur des RH dans le train avec quelqu'un derrière soi, brancher une clé USB reçue sur un salon, emporter un disque dur non chiffré : le déplacement multiplie les opportunités d'exposition. Un appareil perdu non chiffré, une clé USB piégée, un écran visible dans le train — chacun de ces vecteurs peut compromettre des données sensibles." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez vos appareils dans les situations évidentes mais des habitudes pratiques persistent en déplacement", desc: "Vous verrouillez votre ordinateur, vous ne branchez pas n'importe quelle clé USB. Mais la clé USB d'un exposant sur un salon reconnu, le disque non chiffré pour une présentation urgente, l'appareil laissé sans surveillance le temps d'aller chercher un café : ces situations créent encore des expositions. L'enjeu est d'appliquer le même niveau de rigueur dans les situations de mobilité que dans les situations ordinaires." },
          haut: { label: "Réflexes installés", titre: "Vos appareils en déplacement sont protégés — chiffrés, verrouillés, et vous ne branchez que ce que vous maîtrisez", desc: "Vous récupérez votre ordinateur du bac avant de vous arrêter aux douanes. Vous ne branchez pas les clés USB des salons. Vous chiffrez les supports avant de les emporter. Vous bloquez votre téléphone avant de le prêter à votre enfant. Cette protection constante des appareils — qui suppose parfois de ralentir ou de refuser — est ce qui fait que la mobilité ne crée pas de brèches dans votre sécurité." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous êtes dans un café et vous devez envoyer un devis urgent à un client. Le wifi du café est disponible et votre VPN professionnel est installé mais vous ne l'avez pas encore activé.",
        tags: ["réseau", "wifi public"],
        answers: [
          { text: "J'envoie rapidement le devis — c'est urgent et je serai sur le VPN pour la suite.", score: 0 },
          { text: "J'active mon VPN avant d'envoyer quoi que ce soit via le wifi public.", score: 2 },
          { text: "J'envoie via la 4G de mon téléphone pour éviter le wifi public.", score: 1.5 },
          { text: "Je vérifie que le wifi du café est sécurisé avant de me connecter.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "likert",
        text: "Vous activez votre VPN professionnel avant de vous connecter à un réseau wifi que vous ne maîtrisez pas.",
        tags: ["réseau", "VPN"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous êtes dans un hôtel et vous vous connectez au wifi 'Hotel_Guest_Free'. Une fenêtre s'ouvre pour vous demander de saisir votre mail pour accéder à internet. Une fois connecté, vous accédez aux systèmes de votre entreprise sans activer le VPN.",
        tags: ["réseau", "wifi hôtel"],
        answers: [
          { text: "Je suis connecté au wifi officiel de l'hôtel — c'est suffisamment sécurisé.", score: 0 },
          { text: "J'active mon VPN immédiatement après la connexion avant d'accéder à quoi que ce soit.", score: 2 },
          { text: "Je vérifie d'abord que le réseau est bien celui de l'hôtel et pas un réseau imposteur.", score: 1 },
          { text: "J'utilise uniquement mon téléphone en partage de connexion depuis l'hôtel.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "choix",
        text: "Dans un aéroport, vous voyez deux réseaux wifi disponibles : 'Airport_Free_WiFi' et 'AirportFreeWifi'. Vous n'êtes pas sûr·e lequel est officiel.",
        tags: ["réseau", "réseau malveillant"],
        answers: [
          { text: "Je me connecte au plus connu des deux — 'Airport_Free_WiFi' ressemble plus à un nom officiel.", score: 0 },
          { text: "Je n'utilise ni l'un ni l'autre et j'utilise le partage de connexion de mon téléphone.", score: 2 },
          { text: "Je demande au personnel de l'aéroport quel est le réseau officiel.", score: 1.5 },
          { text: "Je me connecte à l'un des deux avec le VPN activé pour me protéger.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez le Bluetooth activé sur votre ordinateur professionnel en permanence pour votre casque audio. Vous travaillez régulièrement dans des espaces publics.",
        tags: ["réseau", "Bluetooth"],
        answers: [
          { text: "Je laisse le Bluetooth activé — mon casque en a besoin et les attaques Bluetooth sont rares.", score: 0 },
          { text: "Je désactive le Bluetooth quand je ne l'utilise pas, surtout dans les espaces publics.", score: 2 },
          { text: "Je passe en mode 'non détectable' dans les espaces publics.", score: 1.5 },
          { text: "Je désactive uniquement si je suis dans un lieu avec beaucoup de monde.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "likert",
        text: "En déplacement, vous désactivez le wifi, le Bluetooth et les interfaces sans fil que vous n'utilisez pas activement.",
        tags: ["réseau", "interfaces sans fil"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez partager votre connexion 4G avec votre ordinateur lors d'un déplacement. Vous créez un point d'accès WiFi avec votre prénom et sans mot de passe pour vous y connecter facilement.",
        tags: ["réseau", "partage connexion"],
        answers: [
          { text: "C'est pratique et le partage est temporaire — pas la peine de mettre un mot de passe.", score: 0 },
          { text: "Je mets un mot de passe fort sur mon point d'accès même pour une connexion temporaire.", score: 2 },
          { text: "Je mets un mot de passe simple que je changerai ensuite.", score: 0.5 },
          { text: "J'utilise un nom de réseau neutre sans mon prénom.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "choix",
        text: "Votre téléphone professionnel est presque à plat dans un aéroport. Vous voyez une borne de charge USB publique.",
        tags: ["réseau", "charge publique"],
        answers: [
          { text: "Je branche mon téléphone — j'ai besoin de batterie et les bornes publiques sont pratiques.", score: 0 },
          { text: "Je n'utilise pas les bornes USB publiques et j'utilise une prise électrique standard avec mon propre câble.", score: 2 },
          { text: "Je branche avec mon propre câble — le câble officiel protège contre les injections de données.", score: 0.5 },
          { text: "J'active le mode 'charge seulement' sur mon téléphone avant de brancher.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'utilisez pas les bornes de charge USB publiques pour vos appareils professionnels.",
        tags: ["réseau", "charge USB"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }, 
      {
        type: "choix",
        text: "En télétravail depuis votre domicile, votre box internet tombe en panne. Votre voisin vous propose d'utiliser son wifi pour finir votre journée de travail.",
        tags: ["réseau", "connexion à distance"],
        answers: [
          { text: "J'accepte — je connais mon voisin et j'activerai le VPN.", score: 0.5 },
          { text: "Je partage la connexion de mon téléphone plutôt que d'utiliser un réseau que je ne maîtrise pas.", score: 2 },
          { text: "J'accepte uniquement pour les tâches non sensibles.", score: 0.5 },
          { text: "J'accepte avec le VPN activé en permanence.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez les réseaux disponibles sans appliquer systématiquement le VPN", desc: "Se connecter au wifi de l'hôtel sans VPN parce que 'c'est le wifi officiel', utiliser une borne USB publique pour recharger, créer un hotspot sans mot de passe : les réseaux publics et partagés sont des environnements non maîtrisés. Ce qui transite dessus sans VPN peut être intercepté. La règle est simple : VPN avant tout accès professionnel, jamais de USB public." },
          moyen: { label: "Pratiques en développement", titre: "Vous activez le VPN sur les réseaux clairement non sécurisés mais pas encore systématiquement", desc: "Vous activez le VPN quand le réseau vous semble clairement risqué. Mais le wifi de l'hôtel qui semble 'officiel', la connexion chez le voisin avec le VPN, la borne de charge USB avec votre propre câble : des raccourcis subsistent. L'enjeu est de traiter tout réseau non maîtrisé de la même façon, indépendamment de son apparence de légitimité." },
          haut: { label: "Réflexes installés", titre: "Vous activez le VPN avant tout accès professionnel sur un réseau non maîtrisé, sans exception", desc: "Vous activez le VPN avant d'envoyer quoi que ce soit depuis un café, un hôtel ou un coworking. Vous ne branchez pas de borne USB publique. Vous ne connectez pas votre téléphone à la TV de l'hôtel. Vous désactivez le wifi et le Bluetooth quand vous ne les utilisez pas. Cette discipline sur les réseaux en mobilité — qui s'applique même quand tout semble normal — est ce qui empêche l'interception de vos données." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous êtes en réunion client et vous laissez votre ordinateur ouvert sur la table pendant la pause café. Des personnes extérieures à la réunion circulent dans la salle.",
        tags: ["accès mobilité", "session non surveillée"],
        answers: [
          { text: "Je laisse ouvert — la réunion reprend dans 5 minutes et les personnes qui passent ne toucheront pas à mon ordinateur.", score: 0 },
          { text: "Je verrouille mon ordinateur avant de quitter mon poste, même pour 5 minutes.", score: 2 },
          { text: "Je minimise toutes les fenêtres avant de partir.", score: 0.5 },
          { text: "Je demande à un collègue de rester près de mon ordinateur.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "likert",
        text: "Vous verrouillez votre poste dès que vous le quittez, même brièvement, y compris en déplacement chez un client.",
        tags: ["accès mobilité", "verrouillage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez accéder à votre espace RH pour consulter une information sensible depuis la salle d'attente d'un client. Plusieurs personnes attendent autour de vous.",
        tags: ["accès mobilité", "connexion lieu public"],
        answers: [
          { text: "Je me connecte rapidement — j'en ai pour moins d'une minute.", score: 0 },
          { text: "J'attends d'être dans un espace privé ou je me déplace dans un coin isolé.", score: 2 },
          { text: "Je me connecte en orientant mon écran pour que personne ne voie.", score: 0.5 },
          { text: "J'utilise mon téléphone plutôt que mon ordinateur pour limiter la visibilité.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "choix",
        text: "Vous utilisez un ordinateur mis à disposition dans l'espace de coworking que vous partagez ce jour-là. Vous devez accéder à vos mails professionnels.",
        tags: ["accès mobilité", "connexion partagée"],
        answers: [
          { text: "J'accède à mes mails directement depuis le navigateur de l'ordinateur partagé.", score: 0 },
          { text: "Je n'utilise que mon propre appareil pour accéder à mes comptes professionnels.", score: 2 },
          { text: "J'accède en navigation privée pour éviter d'enregistrer mes identifiants.", score: 0.5 },
          { text: "J'accède avec le VPN activé sur l'ordinateur partagé.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "choix",
        text: "Votre ordinateur portable professionnel est volé lors d'un déplacement. Il était verrouillé mais le disque dur n'était pas chiffré.",
        tags: ["accès mobilité", "appareil volé"],
        answers: [
          { text: "Je signale le vol à la police et j'en informe mon responsable à mon retour.", score: 0 },
          { text: "Je contacte immédiatement l'équipe informatique et le DPO pour déclencher la procédure — les données non chiffrées sont potentiellement exposées.", score: 2 },
          { text: "Je bloque l'accès à mes comptes depuis cet appareil et je le signale à l'équipe informatique.", score: 1.5 },
          { text: "Je signale le vol à la police et à l'équipe informatique dans la journée.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'accédez jamais à vos comptes professionnels depuis un appareil partagé ou dont vous n'avez pas la maîtrise.",
        tags: ["accès mobilité", "appareils partagés"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "choix",
        text: "Vous êtes à l'étranger et vous avez un problème de réception SMS pour votre code 2FA. Vous demandez au support IT de désactiver temporairement le 2FA sur votre compte.",
        tags: ["accès mobilité", "MFA en déplacement"],
        answers: [
          { text: "Je demande la désactivation — sans le 2FA, je ne peux pas travailler.", score: 0 },
          { text: "Je demande au support IT une solution alternative — application d'authentification, code de secours — sans désactiver le 2FA.", score: 2 },
          { text: "Je désactive uniquement pour les applications non critiques.", score: 0 },
          { text: "Je contacte mon responsable pour qu'il arbitre.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "choix",
        text: "Vous revenez dans les locaux d'un client après une pause. Un inconnu arrive en même temps que vous et se glisse derrière vous pour entrer sans badge.",
        tags: ["accès mobilité", "tailgating"],
        answers: [
          { text: "Je le laisse entrer — il était peut-être en train de chercher son badge.", score: 0 },
          { text: "Je ne lui tiens pas la porte et je l'oriente vers l'accueil.", score: 2 },
          { text: "Je lui demande s'il a son badge avant de décider.", score: 1.5 },
          { text: "Je laisse entrer et je préviens l'accueil après.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "likert",
        text: "En déplacement chez un client ou dans des locaux extérieurs, vous ne circulez que dans les zones où vous êtes autorisé·e.",
        tags: ["accès mobilité", "zones sensibles"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }, 
      {
        type: "choix",
        text: "Vous quittez un hôtel après deux jours de déplacement. Vous avez accédé aux systèmes de votre entreprise depuis le wifi de l'hôtel. Vous partez rapidement.",
        tags: ["accès mobilité", "déconnexion"],
        answers: [
          { text: "Je pars sans faire de manipulation particulière — mes sessions se déconnectent automatiquement.", score: 0 },
          { text: "Je vérifie que toutes mes sessions sont fermées et que je suis bien déconnecté·e du VPN avant de partir.", score: 2 },
          { text: "Je ferme mon ordinateur — la mise en veille ferme les applications.", score: 0 },
          { text: "Je change mon mot de passe à mon retour au bureau par précaution.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos sessions et accès en déplacement restent ouverts au-delà de ce qui est nécessaire", desc: "Laisser son ordinateur ouvert pendant la pause café chez un client, accéder à l'espace RH depuis la salle d'attente d'un client, se connecter à ses mails depuis un ordinateur partagé : les accès en déplacement sont plus exposés qu'au bureau. Verrouiller en partant, ne jamais utiliser un appareil non maîtrisé, déconnecter avant de quitter un lieu — ces réflexes sont aussi importants en mobilité qu'au bureau." },
          moyen: { label: "Pratiques en développement", titre: "Vous verrouillez votre poste mais votre gestion des accès en mobilité reste perfectible", desc: "Vous verrouillez en partant. Mais accéder à l'espace RH depuis la salle d'attente cliente, laisser les sessions ouvertes en quittant l'hôtel rapidement, désactiver le 2FA parce que les SMS ne passent pas à l'étranger : ces situations créent des accès non sécurisés que vous ne gérez pas encore avec la même rigueur. L'enjeu est de trouver des solutions alternatives plutôt que de contourner les protections." },
          haut: { label: "Réflexes installés", titre: "Vous verrouillez systématiquement et vous ne créez pas d'accès de contournement même pour des cas particuliers", desc: "Vous verrouillez en quittant une salle de réunion cliente. Vous n'accédez pas à des données sensibles depuis la salle d'attente. Vous ne vous connectez que depuis vos propres appareils. Vous cherchez une solution alternative plutôt que de désactiver le 2FA. Vous vous déconnectez avant de quitter l'hôtel. Cette gestion rigoureuse des accès en mobilité — sans exception pour les cas pratiques — est ce qui rend vos sessions vraiment sécurisées." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous êtes dans un ascenseur avec des personnes extérieures et vous continuez une conversation téléphonique professionnelle sur un sujet stratégique commencée avant d'entrer.",
        tags: ["réflexes mobilité", "conversation"],
        answers: [
          { text: "Je continue — la conversation sera courte et les gens dans l'ascenseur ne font pas attention.", score: 0 },
          { text: "Je dis à mon interlocuteur que je rappelle dans deux minutes et je coupe.", score: 2 },
          { text: "Je baisse la voix et je reste vague sur les détails jusqu'à sortir de l'ascenseur.", score: 0.5 },
          { text: "Je continue en choisissant mes mots pour ne pas révéler d'informations confidentielles.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "likert",
        text: "Vous interrompez les conversations professionnelles confidentielles lorsque vous entrez dans des espaces partagés ou accessibles au public.",
        tags: ["réflexes mobilité", "conversations"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "choix",
        text: "Vous envoyez un document confidentiel à l'imprimante d'un client pour l'utiliser en réunion. Vous n'êtes pas encore dans la salle d'impression.",
        tags: ["réflexes mobilité", "imprimante distante"],
        answers: [
          { text: "Je lance l'impression — la salle d'impression est proche et je serai là rapidement.", score: 0 },
          { text: "J'attends d'être devant l'imprimante avant de lancer l'impression.", score: 2 },
          { text: "Je lance l'impression en me déplaçant immédiatement vers l'imprimante.", score: 1 },
          { text: "Je demande à quelqu'un sur place de récupérer le document pour moi.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "choix",
        text: "Vous enregistrez votre visage sur votre téléphone professionnel pour déverrouiller l'écran plus rapidement. C'est un appareil que vous utilisez aussi bien au bureau qu'en déplacement.",
        tags: ["réflexes mobilité", "reconnaissance faciale"],
        answers: [
          { text: "C'est plus rapide que le code PIN et tout aussi sécurisé.", score: 0.5 },
          { text: "Je conserve un code PIN long en plus de la reconnaissance faciale — la biométrie seule peut être contournée physiquement.", score: 2 },
          { text: "Je désactive la reconnaissance faciale pour les déplacements à l'étranger.", score: 1.5 },
          { text: "Je préfère un code PIN — la biométrie présente des risques spécifiques en déplacement.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "choix",
        text: "Après une réunion chez un client, vous oubliez des copies papier de votre présentation dans la salle de réunion. Elle contient des données internes.",
        tags: ["réflexes mobilité", "documents papier"],
        answers: [
          { text: "Je les laisse — ce sont des copies que j'avais de toute façon prévu de donner au client.", score: 0 },
          { text: "Je retourne les chercher ou je contacte le client pour lui demander de les détruire.", score: 2 },
          { text: "Je contacte mon interlocuteur client pour lui demander de les récupérer pour moi.", score: 1.5 },
          { text: "Je note l'incident et j'évalue si les informations étaient suffisamment sensibles pour agir.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "likert",
        text: "En déplacement, vous récupérez systématiquement tous vos documents papier après chaque réunion, sans en laisser dans les salles extérieures.",
        tags: ["réflexes mobilité", "documents papier"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "choix",
        text: "Vous participez à un salon professionnel et plusieurs personnes vous posent des questions sur votre organisation, vos clients et vos technologies. L'ambiance est conviviale.",
        tags: ["réflexes mobilité", "informations sensibles"],
        answers: [
          { text: "Je réponds ouvertement — c'est un salon professionnel et les échanges sont la norme.", score: 0 },
          { text: "Je parle de mes domaines d'expertise et de mes offres sans détailler l'organisation interne ni les clients.", score: 2 },
          { text: "Je réponds sur ce qui est déjà public et je reste vague sur le reste.", score: 1.5 },
          { text: "Je donne des informations générales sur le secteur sans parler de mon entreprise spécifiquement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "choix",
        text: "Votre hôtel propose de connecter votre téléphone à la télévision via une application pour avoir un meilleur écran. Vous l'utilisez parfois pour travailler.",
        tags: ["réflexes mobilité", "objets connectés"],
        answers: [
          { text: "Je connecte mon téléphone — c'est pratique pour travailler depuis la chambre d'hôtel.", score: 0 },
          { text: "Je ne connecte pas mon téléphone professionnel à des équipements non maîtrisés.", score: 2 },
          { text: "Je connecte uniquement pour des contenus personnels, jamais pour le travail.", score: 1 },
          { text: "Je vérifie d'abord que la connexion est locale et ne passe pas par internet.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "likert",
        text: "En déplacement, vous ne connectez pas vos appareils professionnels à des équipements dont vous n'avez pas la maîtrise — TV, bornes, systèmes audio.",
        tags: ["réflexes mobilité", "équipements tiers"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }, 
      {
        type: "choix",
        text: "De retour de déplacement, vous réalisez que votre ordinateur a été allumé dans votre chambre d'hôtel pendant votre absence — les applications que vous aviez fermées sont ouvertes.",
        tags: ["réflexes mobilité", "signalement incident"],
        answers: [
          { text: "Je note l'incident mais je ne le signale pas — il n'y a peut-être pas eu accès aux données.", score: 0 },
          { text: "Je contacte immédiatement l'équipe informatique en leur décrivant la situation.", score: 2 },
          { text: "Je change tous mes mots de passe et j'active le 2FA si ce n'est pas déjà fait.", score: 1 },
          { text: "Je vérifie les journaux d'activité de mon compte pour voir si quelque chose a été consulté.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance informationnelle baisse dans les espaces informels de déplacement", desc: "Continuer une conversation stratégique dans l'ascenseur, répondre ouvertement aux questions d'un salon sur son organisation interne, oublier des documents dans une salle de réunion cliente : les espaces informels du déplacement sont des environnements d'intelligence économique. Ce qui est dit ou laissé peut être utilisé." },
          moyen: { label: "Pratiques en développement", titre: "Votre vigilance informationnelle est présente dans les situations formelles mais peut baisser dans les contextes informels", desc: "Vous évitez les informations confidentielles dans les conversations formelles. Mais l'ascenseur où vous continuez un appel en baissant juste la voix, le salon professionnel où la convivialité fait baisser la garde, l'ordinateur allumé dans la chambre d'hôtel qu'on ne signale pas : ces situations informelles restent encore dans vos angles morts. L'enjeu est d'étendre votre vigilance aux contextes non formels." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance informationnelle s'applique dans tous les contextes de déplacement, formels ou informels", desc: "Vous interrompez les appels stratégiques dans l'ascenseur. Vous récupérez tous vos documents en quittant une salle cliente. Vous restez vague sur votre organisation interne dans les conversations de salon. Vous signalez l'ordinateur qui a été allumé dans votre chambre. Cette vigilance étendue aux contextes informels est ce qui évite que les espaces de déplacement deviennent des espaces d'intelligence économique." },
        },
      }
    ],

  },

  "signalement-incidents-cyber": {
    0: [
      {
        type: "choix",
        text: "Vous recevez un mail de phishing évident. Vous ne cliquez pas, vous le supprimez. Votre journée continue normalement.",
        tags: ["signalement", "seuil"],
        answers: [
          { text: "Je l'ai supprimé — il n'y a pas eu d'incident, rien à signaler.", score: 0 },
          { text: "Je le transfère à l'équipe sécurité avant de le supprimer — même sans clic, les tentatives en circulation sont utiles à connaître.", score: 2 },
          { text: "Je le signale uniquement si je reçois plusieurs mails similaires dans la journée.", score: 0.5 },
          { text: "Je le mets en quarantaine dans un dossier dédié au cas où.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "choix",
        text: "Votre ordinateur est inhabituellement lent depuis ce matin. Plusieurs applications s'ouvrent plus lentement que d'habitude. Vous n'avez rien installé de nouveau.",
        tags: ["signalement", "anomalie"],
        answers: [
          { text: "J'attends quelques heures — les lenteurs sont courantes et ça va probablement passer.", score: 0 },
          { text: "Je le signale à l'équipe informatique en décrivant ce que j'observe depuis quand.", score: 2 },
          { text: "Je redémarre mon poste et je ne le signale que si ça persiste.", score: 0.5 },
          { text: "Je fais une analyse antivirus avant de décider si c'est à signaler.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les comportements anormaux de vos appareils ou de vos comptes même quand vous n'êtes pas certain·e qu'il s'agit d'un incident de sécurité.",
        tags: ["signalement", "seuil bas"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous tentez d'accéder à un dossier habituel et vous obtenez un message d'erreur indiquant que vous n'avez plus les droits. Vos droits n'ont pas été modifiés à votre connaissance.",
        tags: ["signalement", "droits inhabituels"],
        answers: [
          { text: "Je contacte l'équipe informatique pour qu'elle restaure mes droits.", score: 1 },
          { text: "Je contacte l'équipe sécurité en signalant la modification inattendue de mes droits.", score: 2 },
          { text: "J'attends quelques heures — ça peut être une maintenance en cours.", score: 0 },
          { text: "J'en parle à mon responsable pour qu'il fasse la demande de restauration.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "choix",
        text: "Votre collègue Lucie vous envoie un mail avec un lien mais sans texte explicatif. Ce n'est pas dans ses habitudes. Vous lui avez posé la question et elle dit ne pas avoir envoyé ce mail.",
        tags: ["signalement", "mail suspect reçu"],
        answers: [
          { text: "Je supprime le mail — Lucie a probablement été victime de phishing et je ne clique pas.", score: 0.5 },
          { text: "Je signale immédiatement à l'équipe sécurité que le compte de Lucie est probablement compromis.", score: 2 },
          { text: "Je préviens Lucie de changer son mot de passe et j'attends qu'elle règle ça.", score: 1 },
          { text: "Je transfère le mail à l'équipe informatique pour qu'elle analyse le lien.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous détectez qu'un compte d'un·e collègue semble compromis, vous le signalez à l'équipe sécurité sans attendre que la personne concernée prenne les mesures elle-même.",
        tags: ["signalement", "compte tiers"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "choix",
        text: "En naviguant sur le web, vous tombez par hasard sur un document de votre entreprise indexé publiquement sur Google. Il contient des données clients.",
        tags: ["signalement", "données exposées"],
        answers: [
          { text: "Je ferme la page — ce n'est probablement pas intentionnel et ça ne me concerne pas directement.", score: 0 },
          { text: "Je note l'URL et je la signale immédiatement à l'équipe sécurité et au DPO.", score: 2 },
          { text: "Je contacte l'équipe informatique pour qu'elle retire le document de l'index.", score: 1 },
          { text: "Je le signale à mon responsable pour qu'il gère avec les équipes concernées.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "choix",
        text: "Votre messagerie professionnelle vous indique que des mails ont été envoyés depuis votre compte à des destinataires inconnus, alors que vous ne les avez pas envoyés.",
        tags: ["signalement", "comportement réseau"],
        answers: [
          { text: "Je change mon mot de passe et je surveille si ça continue.", score: 0.5 },
          { text: "Je contacte immédiatement l'équipe sécurité, je change mon mot de passe et j'active le 2FA si ce n'est pas déjà fait.", score: 2 },
          { text: "Je supprime les mails envoyés et je change mon mot de passe.", score: 0 },
          { text: "Je contacte les destinataires pour m'excuser et expliquer que ce n'est pas moi.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "likert",
        text: "Toute activité inhabituelle sur vos comptes — connexions, envois, modifications — déclenche chez vous un signalement immédiat à l'équipe sécurité.",
        tags: ["signalement", "activité inhabituelle"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez ouvert une pièce jointe qui vous semblait normale mais qui a provoqué l'ouverture d'une fenêtre bizarre que vous avez immédiatement fermée. Votre ordinateur fonctionne normalement.",
        tags: ["signalement", "pièce jointe ouverte"],
        answers: [
          { text: "Je ne signale pas — j'ai fermé la fenêtre rapidement et tout fonctionne normalement.", score: 0 },
          { text: "Je contacte l'équipe sécurité immédiatement en décrivant la pièce jointe et la fenêtre.", score: 2 },
          { text: "Je fais une analyse antivirus complète et je ne signale que si elle trouve quelque chose.", score: 0.5 },
          { text: "Je redémarre mon poste pour voir si ça efface le problème potentiel.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez uniquement les incidents avérés — les signaux faibles et les tentatives passent sans signalement", desc: "Ne pas signaler un mail de phishing parce qu'on ne l'a pas ouvert, attendre que les lenteurs de l'ordinateur passent seules, gérer soi-même une situation suspecte sans le remonter : ces comportements laissent l'équipe sécurité aveugle sur ce qui se passe réellement. Un signalement sur un doute vaut toujours mieux qu'un silence sur une certitude." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents avérés mais le seuil de signalement sur les signaux faibles est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les comportements anormaux évidents. Mais le mail de phishing non ouvert qu'on supprime sans signaler, les lenteurs qu'on attend de voir passer, la fenêtre bizarre fermée rapidement sans suite : votre seuil de signalement est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque anomalie comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les tentatives, les anomalies et les doutes — pas seulement les incidents avérés", desc: "Vous transférez le mail de phishing à l'équipe sécurité avant de le supprimer. Vous signalez les lenteurs inexpliquées le jour même. Vous remontez le compte de Lucie qui semble compromis sans attendre qu'elle agisse. Vous contactez l'équipe sécurité après avoir ouvert une pièce jointe suspecte même si vous avez refermé la fenêtre rapidement. Ce seuil de signalement bas — qui suppose d'accepter de faire des 'faux positifs' — est ce qui permet à l'équipe sécurité de détecter les incidents avant qu'ils ne se propagent." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous avez cliqué sur un lien de phishing et vous avez peut-être saisi vos identifiants avant de réaliser. Vous hésitez à le signaler par crainte d'être perçu·e comme imprudent·e.",
        tags: ["freins", "peur jugement"],
        answers: [
          { text: "Je ne signale pas — j'ai changé mon mot de passe et il ne s'est rien passé de visible.", score: 0 },
          { text: "Je signale immédiatement — les conséquences d'un silence sont bien plus graves que d'avoir cliqué.", score: 2 },
          { text: "Je surveille mon compte quelques jours avant de décider si c'est nécessaire de signaler.", score: 0 },
          { text: "J'en parle d'abord à mon responsable pour qu'il décide si c'est à remonter.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les incidents même quand ils résultent d'une erreur de votre part, sans attendre que les conséquences soient visibles.",
        tags: ["freins", "honte"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez déjà fait plusieurs signalements dans le passé. Vous n'avez jamais reçu de retour sur ce qui a été fait. Un nouvel événement suspect se produit.",
        tags: ["freins", "inutilité perçue"],
        answers: [
          { text: "Je ne signale plus — si rien ne change, c'est inutile.", score: 0 },
          { text: "Je signale et je demande explicitement un retour sur ce signalement.", score: 2 },
          { text: "Je signale en espérant que cette fois ça serve à quelque chose.", score: 1 },
          { text: "Je contacte directement quelqu'un à l'informatique plutôt que par le canal habituel.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez observé quelque chose de suspect mais vous vous dites que 'c'est probablement rien' et que vous allez passer pour quelqu'un qui dramatise.",
        tags: ["freins", "minimisation"],
        answers: [
          { text: "Je ne signale pas — si ce n'est rien, j'aurai dérangé l'équipe pour rien.", score: 0 },
          { text: "Je signale en précisant que je n'en suis pas certain·e — un faux positif est toujours préférable à un silence.", score: 2 },
          { text: "J'observe encore un peu pour voir si ça se confirme avant de signaler.", score: 0.5 },
          { text: "J'en parle à un collègue pour avoir son avis avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "choix",
        text: "La procédure de signalement d'incident de votre entreprise implique de remplir un formulaire détaillé. Vous avez vu quelque chose de suspect mais le formulaire vous semble lourd pour ce que vous avez observé.",
        tags: ["freins", "complexité"],
        answers: [
          { text: "Je ne le remplis pas — pour une observation mineure, le formulaire n'est pas proportionné.", score: 0 },
          { text: "Je remplis le formulaire avec les éléments que j'ai, même si ce n'est pas exhaustif.", score: 2 },
          { text: "J'envoie un mail informel à l'équipe sécurité plutôt que de remplir le formulaire.", score: 1.5 },
          { text: "Je contacte directement un membre de l'équipe sécurité pour lui décrire ce que j'ai vu.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous utilisez les canaux de signalement officiels même quand ils vous semblent lourds — parce que la traçabilité compte.",
        tags: ["freins", "procédure"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez observé quelque chose de suspect il y a trois jours mais vous avez attendu de voir si ça évolue. La situation est toujours là.",
        tags: ["freins", "délai"],
        answers: [
          { text: "Je ne signale plus — trop de temps a passé et la situation est peut-être déjà réglée.", score: 0 },
          { text: "Je signale maintenant en indiquant quand j'ai observé le phénomène — le délai est une information utile.", score: 2 },
          { text: "Je signale de façon anonyme pour éviter qu'on me demande pourquoi j'ai attendu.", score: 0.5 },
          { text: "Je contacte l'équipe sécurité pour expliquer la situation et leur laisser évaluer.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a tacitement décidé de ne pas signaler un incident interne pour 'ne pas faire de vagues'. On vous demande implicitement d'aller dans ce sens.",
        tags: ["freins", "pression collective"],
        answers: [
          { text: "Je m'aligne — la cohésion d'équipe est importante et l'incident est peut-être gérable en interne.", score: 0 },
          { text: "Je signale quand même — un incident cyber non signalé peut exposer toute l'organisation.", score: 2 },
          { text: "Je laisse l'équipe gérer en interne et je signale uniquement si ça s'aggrave.", score: 0 },
          { text: "J'en parle à mon responsable sans passer par le canal officiel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les incidents de sécurité même quand votre équipe ou votre responsable vous demande de ne pas le faire.",
        tags: ["freins", "indépendance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez résolu vous-même une situation suspecte — vous avez changé votre mot de passe, désactivé un accès et nettoyé les fichiers concernés. Vous pensez que le problème est réglé.",
        tags: ["freins", "auto-réparation"],
        answers: [
          { text: "Je ne signale pas — j'ai géré et le problème est résolu.", score: 0 },
          { text: "Je signale quand même — l'équipe sécurité a besoin de savoir même si je pense avoir réglé le problème.", score: 2 },
          { text: "Je signale uniquement si ça recommence — ma gestion a peut-être suffi.", score: 0 },
          { text: "Je documente ce que j'ai fait et je l'envoie à l'équipe sécurité pour information.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur du jugement, inutilité perçue, gestion autonome — l'emportent encore souvent", desc: "Changer son mot de passe et ne pas signaler parce qu'on a 'géré', attendre que la situation se confirme, s'aligner sur une équipe qui préfère ne pas faire de vagues : ces comportements laissent des incidents se développer silencieusement. L'équipe sécurité ne peut protéger que ce qu'elle sait. Chaque heure de délai après une compromission donne du temps à l'attaquant." },
          moyen: { label: "Pratiques en développement", titre: "Vous surmontez les freins habituels mais les situations inconfortables ou à coût social élevé créent encore des hésitations", desc: "Vous signalez sans vous laisser influencer par la pression ordinaire. Mais quand signaler implique de reconnaître qu'on utilisait un outil non approuvé, quand l'équipe pousse à gérer en interne, quand vous avez déjà géré vous-même et pensez que c'est réglé : votre réflexe peut encore hésiter. L'enjeu est de maintenir le signalement précisément dans ces situations inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vous signalez même quand c'est inconfortable — erreur personnelle, outil non approuvé, pression collective", desc: "Vous signalez même quand ça implique de reconnaître que vous avez cliqué. Vous signalez même quand vous avez déjà géré vous-même et pensez que c'est réglé. Vous signalez même quand l'équipe préférerait ne pas faire de vagues. Vous signalez même quand vous n'avez aucun retour sur les signalements précédents — en demandant ce retour. Cette indépendance dans le signalement est ce qui rend un système de sécurité réellement fiable." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous avez observé quelque chose de suspect et vous devez le signaler. Vous n'êtes pas sûr·e de tous les détails — heure exacte, URL complète, contenu du mail.",
        tags: ["qualité signalement", "précision"],
        answers: [
          { text: "J'attends d'avoir tous les détails avant de signaler pour éviter de donner de fausses informations.", score: 0 },
          { text: "Je signale avec ce que j'ai en précisant clairement ce qui est certain et ce qui est approximatif.", score: 2 },
          { text: "Je reconstitue les détails manquants au mieux pour que mon signalement soit complet.", score: 0 },
          { text: "Je signale les éléments dont je suis certain·e et j'indique que les autres me manquent.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "likert",
        text: "Vos signalements distinguent clairement ce que vous avez observé avec certitude de ce que vous supposez.",
        tags: ["qualité signalement", "honnêteté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez signaler un incident. En le rédigeant, vous réalisez que mentionner le contexte complet implique d'indiquer que vous aviez utilisé un outil non approuvé au moment de l'incident.",
        tags: ["qualité signalement", "contexte"],
        answers: [
          { text: "Je décris l'incident sans mentionner l'outil non approuvé — ce n'est pas directement lié.", score: 0 },
          { text: "Je mentionne le contexte complet, y compris l'outil non approuvé — c'est potentiellement la cause.", score: 2 },
          { text: "Je décris l'incident sans entrer dans les détails du contexte.", score: 0 },
          { text: "J'en parle d'abord à mon responsable avant de décider quoi inclure.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Un incident s'est produit il y a deux heures. Vous pouvez soit faire un signalement rapide maintenant, soit attendre ce soir pour rédiger un signalement complet et détaillé.",
        tags: ["qualité signalement", "délai"],
        answers: [
          { text: "J'attends ce soir — un signalement complet et bien rédigé sera plus utile.", score: 0 },
          { text: "Je fais un signalement rapide maintenant avec les éléments disponibles — le délai compte.", score: 2 },
          { text: "Je fais un signalement rapide maintenant et je complète ce soir avec les détails.", score: 2 },
          { text: "J'envoie un message informel maintenant et je fais le signalement officiel ce soir.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez reçu un mail de phishing. Avant de le supprimer, vous devez décider quoi faire pour faciliter l'analyse de l'équipe sécurité.",
        tags: ["qualité signalement", "pièces à conviction"],
        answers: [
          { text: "Je le supprime après avoir noté l'expéditeur et l'objet.", score: 0.5 },
          { text: "Je le transfère à l'équipe sécurité avant de le supprimer — ils ont besoin des en-têtes complets.", score: 2 },
          { text: "Je fais une capture d'écran avant de le supprimer.", score: 1 },
          { text: "Je le déplace dans un dossier dédié pour que l'équipe sécurité puisse y accéder.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "likert",
        text: "Avant de supprimer ou de fermer un élément suspect, vous le transmettez ou le conservez pour l'équipe sécurité.",
        tags: ["qualité signalement", "preuves"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "choix",
        text: "L'équipe sécurité vous demande de reconstituer la chronologie des événements avant et après l'incident. Vous n'avez pas tout noté sur le moment.",
        tags: ["qualité signalement", "chronologie"],
        answers: [
          { text: "Je reconstitue au mieux en faisant attention à présenter mes approximations comme des certitudes.", score: 0 },
          { text: "Je reconstitue au mieux en distinguant clairement ce dont je me souviens avec précision et ce qui est approximatif.", score: 2 },
          { text: "Je ne donne que ce dont je suis sûr·e et j'indique clairement les lacunes.", score: 2 },
          { text: "Je me concentre sur les faits les plus importants pour ne pas complexifier l'enquête.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous demande de 'simplifier' votre signalement avant de le transmettre à l'équipe sécurité — certains éléments lui semblent inutiles.",
        tags: ["qualité signalement", "modification"],
        answers: [
          { text: "Je simplifie comme il demande — il a une meilleure vision d'ensemble.", score: 0 },
          { text: "Je lui demande ce qui le gêne précisément avant de modifier quoi que ce soit.", score: 2 },
          { text: "Je simplifie les éléments de mise en contexte en gardant les faits techniques.", score: 1 },
          { text: "Je transmets les deux versions — la complète à l'équipe sécurité et la simplifiée à mon responsable.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne modifiez pas le contenu de vos signalements de sécurité à la demande de votre hiérarchie.",
        tags: ["qualité signalement", "intégrité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez fait un signalement il y a dix jours. La situation que vous aviez signalée est toujours présente. Vous n'avez pas eu de retour.",
        tags: ["qualité signalement", "suivi"],
        answers: [
          { text: "J'attends — l'équipe sécurité a ses délais et gère les priorités.", score: 0.5 },
          { text: "Je relance l'équipe sécurité en rappelant mon signalement et en indiquant que la situation est toujours là.", score: 2 },
          { text: "Je fais un nouveau signalement pour forcer la prise en compte.", score: 1 },
          { text: "Je contacte mon responsable pour qu'il relance à ma place.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués pour éviter d'exposer le contexte réel", desc: "Omettre dans le signalement l'outil non approuvé qui était la cause probable, reconstituer des détails incertains comme des certitudes, accepter de simplifier un signalement à la demande du responsable : un signalement inexact ou incomplet est moins utile qu'un signalement honnête avec des lacunes assumées. Ce que l'équipe sécurité ne sait pas, elle ne peut pas l'analyser." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais les éléments qui vous impliquent restent encore sous-déclarés", desc: "Vos signalements sont généralement factuels et utiles. Mais mentionner l'outil non approuvé qui était potentiellement la cause, résister à une demande de simplification hiérarchique, distinguer avec précision ce qui est certain de ce qui est approximatif : ces zones restent encore insuffisamment développées. L'enjeu est d'aller jusqu'au bout de l'honnêteté dans le signalement." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent", desc: "Vos signalements incluent le contexte complet, y compris les éléments gênants comme l'outil non approuvé. Vous distinguez avec précision ce qui est certain de ce qui est approximatif. Vous conservez les preuves avant de supprimer. Vous résistez aux demandes de simplification hiérarchique. Vous relancez quand une situation signalée est toujours présente sans retour. Cette honnêteté dans le signalement est ce qui permet une analyse efficace des incidents." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre collègue Florian vous dit qu'il a reçu un mail bizarre mais qu'il ne veut pas le signaler pour ne pas 'faire de vagues'. Il n'a pas cliqué.",
        tags: ["culture signalement", "pair"],
        answers: [
          { text: "Je respecte son choix — c'est à lui de décider s'il signale.", score: 0 },
          { text: "Je lui explique que même sans clic, le signalement d'une tentative est utile pour protéger toute l'équipe.", score: 2 },
          { text: "Je lui propose de signaler à sa place si ça l'arrange.", score: 1.5 },
          { text: "Je lui dis de au moins mettre le mail en quarantaine.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous encouragez vos collègues à signaler les incidents et les tentatives, même mineures, sans minimiser leur expérience.",
        tags: ["culture signalement", "encouragement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise organise une campagne de simulation de phishing. Vous recevez un faux mail de phishing et vous cliquez dessus. Vous êtes redirigé·e vers une page de sensibilisation.",
        tags: ["culture signalement", "simulation"],
        answers: [
          { text: "Je ferme la page rapidement — c'est embarrassant et j'ai compris le message.", score: 0.5 },
          { text: "Je lis attentivement la page et je signale aussi la tentative à l'équipe sécurité comme si c'était réel.", score: 2 },
          { text: "Je lis la page et je note ce que j'aurais dû détecter.", score: 1 },
          { text: "Je me plains auprès de mon responsable — ce type de test sans prévenir n'est pas correct.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, la culture est de 'gérer soi-même' les petits problèmes informatiques sans déranger l'équipe sécurité. Cette culture est valorisée.",
        tags: ["culture signalement", "normalisation"],
        answers: [
          { text: "Je respecte cette culture — l'autonomie est une qualité et l'équipe sécurité est débordée.", score: 0 },
          { text: "Je maintiens mon réflexe de signalement même si la culture pousse à l'autonomie — l'équipe sécurité ne peut pas protéger ce qu'elle ne voit pas.", score: 2 },
          { text: "Je gère seul·e les cas vraiment mineurs et je signale les cas qui me semblent importants.", score: 0.5 },
          { text: "J'essaie de faire évoluer la culture de l'équipe sur ce sujet.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "L'équipe sécurité vous informe que plusieurs incidents récents dans l'entreprise auraient pu être évités si des signalements avaient été faits plus tôt. Elle vous demande comment améliorer la culture de signalement.",
        tags: ["culture signalement", "retour expérience"],
        answers: [
          { text: "Je propose de meilleures campagnes de sensibilisation pour que les gens sachent quoi signaler.", score: 1 },
          { text: "Je propose aussi de simplifier le processus de signalement et d'améliorer les retours sur les signalements faits.", score: 2 },
          { text: "Je propose des sanctions pour ceux qui ne signalent pas.", score: 0 },
          { text: "Je dis que c'est une question de culture qui prend du temps à changer.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous contribuez à améliorer les processus de signalement de votre organisation en remontant ce qui freine les signalements.",
        tags: ["culture signalement", "amélioration"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez été victime d'une tentative de phishing sophistiquée que vous avez réussi à détecter. Vos collègues pourraient bénéficier de votre expérience.",
        tags: ["culture signalement", "partage"],
        answers: [
          { text: "Je garde ça pour moi — partager ça reviendrait à avouer que j'ai failli cliquer.", score: 0 },
          { text: "Je partage l'expérience avec mon équipe — décrire comment j'ai détecté la tentative renforce la vigilance collective.", score: 2 },
          { text: "J'en parle à mon responsable pour qu'il décide si c'est utile de partager.", score: 0.5 },
          { text: "Je le mentionne en réunion d'équipe sans entrer dans les détails.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Une nouvelle collègue, Yasmine, arrive dans l'équipe. Elle vous dit qu'elle ne sait pas vraiment quoi signaler ni comment — dans son ancienne entreprise, personne ne signalait rien.",
        tags: ["culture signalement", "nouveau"],
        answers: [
          { text: "Je lui dis de faire comme dans l'ancien poste — les pratiques varient d'une entreprise à l'autre.", score: 0 },
          { text: "Je lui explique ce qui doit être signalé, comment le faire et pourquoi c'est important.", score: 2 },
          { text: "Je lui dis de contacter l'équipe sécurité directement si elle a un doute.", score: 1 },
          { text: "Je lui envoie la politique sécurité de l'entreprise pour qu'elle se forme.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous transmettez activement les bonnes pratiques de signalement aux nouveaux arrivants dans votre équipe.",
        tags: ["culture signalement", "transmission"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a passé un mois sans incident signalé. Votre responsable considère que 'tout va bien'. Vous pensez que l'absence de signalement peut aussi refléter une culture de non-signalement.",
        tags: ["culture signalement", "bilan"],
        answers: [
          { text: "Je valide — pas d'incident signalé, c'est une bonne nouvelle.", score: 0 },
          { text: "Je soulève la question : est-ce vraiment l'absence d'incidents ou l'absence de signalements ?", score: 2 },
          { text: "Je surveille discrètement pour voir si des incidents passent sous le radar.", score: 1 },
          { text: "Je propose à l'équipe sécurité de faire un audit pour vérifier.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La culture de signalement dans votre équipe reste un sujet que vous n'influencez pas encore", desc: "Laisser Florian décider seul de ne pas signaler, valider un mois sans signalement comme un bonne nouvelle sans se poser de questions, ne pas transmettre les bonnes pratiques à Yasmine qui arrive : la culture de signalement d'une équipe se construit à travers chaque interaction. Ne pas l'influencer, c'est laisser une culture de non-signalement s'installer." },
          moyen: { label: "Pratiques en développement", titre: "Vous encouragez le signalement dans votre équipe mais votre influence sur la culture collective reste limitée", desc: "Vous encouragez vos collègues à signaler quand l'occasion se présente. Mais interpeller Florian qui hésite, questionner un mois sans signalement comme un possible non-signalement, transmettre activement à Yasmine les pratiques de l'équipe : ces comportements d'influence active sur la culture collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture de signalement de votre équipe par l'exemple et la transmission", desc: "Vous expliquez à Florian pourquoi signaler même sans clic. Vous questionnez un mois sans signalement comme un possible non-signalement. Vous transmettez les pratiques de l'équipe à Yasmine dès son arrivée. Vous partagez vos propres expériences de détection de tentatives pour renforcer la vigilance collective. Cette contribution active à la culture de signalement — qui suppose parfois d'aller contre la culture ambiante — est ce qui fait qu'une équipe signale naturellement." },
        },
      }
    ],

  },

  "teletravail-securite-acces": {
    0: [
      {
        type: "choix",
        text: "Votre box internet est configurée avec le mot de passe par défaut fourni par l'opérateur. Votre voisinage est dense. Vous travaillez régulièrement depuis chez vous.",
        tags: ["télétravail", "réseau domestique"],
        answers: [
          { text: "Je laisse le mot de passe par défaut — c'est le mot de passe de mon opérateur, il est sécurisé.", score: 0 },
          { text: "Je change le mot de passe par défaut de ma box et de mon réseau wifi.", score: 2 },
          { text: "Je vérifie d'abord si le mot de passe par défaut est assez complexe avant de décider.", score: 0.5 },
          { text: "J'active le VPN professionnel pour compenser — ça protège mes communications même sur un réseau peu sécurisé.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "choix",
        text: "Votre conjoint·e travaille à côté de vous en télétravail ce matin. Vous participez à une réunion en visio sur un sujet confidentiel — restructuration d'équipe.",
        tags: ["télétravail", "espace de travail"],
        answers: [
          { text: "Je participe normalement — mon/ma conjoint·e est de confiance.", score: 0 },
          { text: "Je me mets dans une pièce séparée ou j'utilise un casque et je baisse la voix.", score: 2 },
          { text: "Je participe en mode écoute uniquement sans prendre la parole sur les sujets sensibles.", score: 1 },
          { text: "Je préviens les autres participants que je suis en open space et qu'ils doivent faire attention.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "likert",
        text: "En télétravail, vous gérez les réunions et documents confidentiels de façon à ce que les personnes présentes chez vous ne puissent pas les voir ni les entendre.",
        tags: ["télétravail", "confidentialité physique"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "choix",
        text: "Votre enfant de 10 ans vous demande d'utiliser votre ordinateur professionnel pour faire ses devoirs pendant votre pause déjeuner.",
        tags: ["télétravail", "matériel partagé"],
        answers: [
          { text: "J'accepte — mon ordinateur est verrouillé par mon profil et mon enfant ne touchera pas à mon travail.", score: 0 },
          { text: "Je refuse — l'ordinateur professionnel est réservé à l'usage professionnel.", score: 2 },
          { text: "J'accepte mais je reste présent·e pour surveiller ce qu'il fait.", score: 0 },
          { text: "J'accepte uniquement s'il utilise un compte invité séparé sur l'ordinateur.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "choix",
        text: "Vous imprimez un document confidentiel sur votre imprimante personnelle en télétravail. Des membres de votre famille passent régulièrement dans la pièce.",
        tags: ["télétravail", "imprimante"],
        answers: [
          { text: "Je récupère le document immédiatement à l'impression et je le range dans un endroit sécurisé.", score: 2 },
          { text: "Je laisse le document sur l'imprimante — ma famille ne lira pas mes documents de travail.", score: 0 },
          { text: "J'imprime uniquement quand je suis seul·e dans la pièce.", score: 1.5 },
          { text: "J'imprime en mode recto-verso pour réduire le nombre de pages visibles.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "likert",
        text: "Votre matériel professionnel — ordinateur, téléphone, supports — est utilisé exclusivement pour des activités professionnelles.",
        tags: ["télétravail", "matériel professionnel"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "choix",
        text: "Vous vous levez pour aller chercher un café. Votre écran affiche un document confidentiel. Votre famille circule dans la maison.",
        tags: ["télétravail", "verrouillage"],
        answers: [
          { text: "Je laisse — je reviens dans deux minutes et ma famille ne s'intéresse pas à mes documents.", score: 0 },
          { text: "Je verrouille mon poste même pour une absence de deux minutes.", score: 2 },
          { text: "Je minimise la fenêtre du document confidentiel.", score: 0.5 },
          { text: "Je met mon écran en veille.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise vous recommande de créer un réseau wifi dédié au télétravail, séparé de votre réseau familial. C'est une étape technique que vous n'avez pas encore faite.",
        tags: ["télétravail", "réseau dédié"],
        answers: [
          { text: "Je laisse tout sur le même réseau — c'est plus simple et mon réseau est sécurisé.", score: 0 },
          { text: "Je configure le réseau dédié — séparer les appareils professionnels des appareils personnels réduit les risques.", score: 2 },
          { text: "Je demande à l'équipe informatique de le faire à distance.", score: 1 },
          { text: "J'utilise le VPN professionnel pour compenser l'absence de réseau dédié.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "likert",
        text: "Votre espace de télétravail est configuré pour protéger la confidentialité de votre travail — écran non visible, conversations privées, documents rangés.",
        tags: ["télétravail", "sécurité physique"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }, 
      {
        type: "choix",
        text: "Votre journée de télétravail se termine. Votre ordinateur professionnel reste allumé et connecté au VPN sur le bureau du salon.",
        tags: ["télétravail", "fin de journée"],
        answers: [
          { text: "Je le laisse allumé — je reprends demain matin et ça me permet de recevoir des notifications.", score: 0 },
          { text: "Je me déconnecte du VPN, je verrouille ou j'éteins mon poste et je range les documents papier.", score: 2 },
          { text: "Je verrouille mon poste et je coupe le VPN.", score: 2 },
          { text: "Je ferme uniquement les applications sensibles et je laisse le VPN connecté pour les mises à jour.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre environnement de télétravail n'est pas encore configuré pour protéger la confidentialité de votre travail", desc: "Participer à une réunion confidentielle sans s'isoler, laisser son ordinateur allumé et connecté en fin de journée, prêter son ordinateur professionnel à son enfant, laisser le mot de passe par défaut de la box : ces comportements transforment votre domicile en un espace moins sécurisé que le bureau. La sécurité physique et organisationnelle du télétravail est aussi importante que la sécurité technique." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez votre environnement de télétravail dans les situations évidentes mais des habitudes pratiques persistent", desc: "Vous verrouillez votre poste, vous vous isolez pour les réunions sensibles, vous ne prêtez pas votre matériel professionnel. Mais le mot de passe par défaut de la box, l'ordinateur allumé la nuit, les documents imprimés laissés sans surveillance : ces points créent encore des expositions. L'enjeu est d'étendre votre rigueur à ces aspects moins visibles." },
          haut: { label: "Réflexes installés", titre: "Votre environnement de télétravail est configuré pour protéger la confidentialité avec le même niveau que le bureau", desc: "Vous changez le mot de passe par défaut de votre box. Vous vous isolez pour les réunions confidentielles. Vous verrouillez votre poste même pour deux minutes. Vous éteignez ou verrouillez en fin de journée. Vous ne prêtez pas votre matériel professionnel. Cette configuration rigoureuse de votre espace de télétravail — qui demande un investissement initial mais peu de charge quotidienne — est ce qui rend le travail à domicile réellement sécurisé." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "L'outil de visioconférence approuvé par votre entreprise a des fonctionnalités limitées. Pour une réunion importante avec un client, vous proposez d'utiliser Zoom qui offre de meilleures options.",
        tags: ["outils", "shadow IT"],
        answers: [
          { text: "J'utilise Zoom — c'est une solution reconnue et la réunion est importante.", score: 0 },
          { text: "J'utilise l'outil approuvé et je remonte le besoin fonctionnel à la DSI pour qu'elle évalue des alternatives.", score: 2 },
          { text: "J'utilise Zoom uniquement pour les réunions externes — les outils approuvés restent pour les réunions internes.", score: 0 },
          { text: "Je demande une dérogation à la DSI avant d'utiliser Zoom.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "likert",
        text: "Vous utilisez uniquement les outils approuvés par votre DSI pour les activités professionnelles, même quand des alternatives non approuvées vous semblent meilleures.",
        tags: ["outils", "approbation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Votre ordinateur professionnel a un problème technique en télétravail. Pour le résoudre rapidement, vous envisagez d'activer les droits administrateur temporairement pour installer un correctif vous-même.",
        tags: ["outils", "accès admin"],
        answers: [
          { text: "Je l'active — c'est ma machine et le problème est urgent.", score: 0 },
          { text: "Je contacte le support informatique pour qu'il intervienne à distance sans modifier moi-même les droits.", score: 2 },
          { text: "J'active les droits temporairement, je règle le problème et je les désactive immédiatement.", score: 0.5 },
          { text: "Je reporte le problème à demain quand je serai au bureau.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Vous travaillez sur un fichier lourd depuis chez vous. La connexion VPN est lente. Pour contourner, vous enregistrez le fichier sur votre Google Drive personnel.",
        tags: ["outils", "stockage cloud"],
        answers: [
          { text: "Je l'enregistre sur Google Drive — c'est temporaire et le fichier sera transféré demain.", score: 0 },
          { text: "Je reste sur les outils approuvés même si c'est plus lent — les données professionnelles ne doivent pas quitter le périmètre de l'entreprise.", score: 2 },
          { text: "Je contacte le support IT pour qu'il améliore la connexion VPN.", score: 1.5 },
          { text: "Je travaille en local et je synchronise quand la connexion est meilleure.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue en télétravail vous demande d'accéder à un fichier depuis son compte car il n'a pas la connexion. Il vous demande ses identifiants par message.",
        tags: ["outils", "accès partagé"],
        answers: [
          { text: "Je l'aide — il s'agit d'une urgence et c'est un collègue de confiance.", score: 0 },
          { text: "Je lui dis que partager ses identifiants est interdit et je cherche une alternative — droits d'accès partagés, envoi du fichier.", score: 2 },
          { text: "J'accède au fichier avec ses identifiants mais je lui conseille de les changer après.", score: 0 },
          { text: "Je refuse et je contacte le support IT pour trouver une solution.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne partagez jamais vos identifiants et vous n'utilisez jamais les identifiants d'un·e collègue, même pour rendre service.",
        tags: ["outils", "identifiants"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Une notification vous demande de redémarrer votre ordinateur pour appliquer des mises à jour de sécurité. Vous êtes en plein travail et vous repoussez depuis trois jours.",
        tags: ["outils", "mise à jour"],
        answers: [
          { text: "Je continue à repousser — je finirai d'abord ce que je fais et je le ferai ce soir.", score: 0 },
          { text: "Je planifie la mise à jour pour la prochaine pause — les mises à jour de sécurité ne doivent pas attendre trop longtemps.", score: 2 },
          { text: "Je l'applique maintenant quitte à perdre mon contexte de travail.", score: 2 },
          { text: "Je la reporte jusqu'au week-end pour ne pas interrompre ma semaine.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Vous participez à une réunion en visioconférence depuis votre domicile. Votre arrière-plan montre votre salon avec des documents sur le mur.",
        tags: ["outils", "visio"],
        answers: [
          { text: "Je laisse — ce sont des documents personnels et mes collègues ne les lisent pas.", score: 0 },
          { text: "J'utilise un fond virtuel ou je nettoie mon arrière-plan — un document personnel peut contenir des informations inattendues.", score: 2 },
          { text: "Je vérifie rapidement que les documents visibles ne sont pas sensibles.", score: 1 },
          { text: "Je positionne ma caméra pour que les documents ne soient pas visibles.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "likert",
        text: "Vous appliquez les mises à jour de sécurité de vos appareils professionnels dans les 48 heures suivant leur disponibilité.",
        tags: ["outils", "mises à jour"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise impose une authentification renforcée pour l'accès à distance. Ce matin, le processus d'authentification prend 3 minutes à cause d'un problème technique.",
        tags: ["outils", "authentification"],
        answers: [
          { text: "Je cherche un moyen de contourner l'authentification pour commencer plus vite.", score: 0 },
          { text: "Je patiente et je signale le problème d'authentification au support IT.", score: 2 },
          { text: "Je me connecte depuis mon téléphone personnel pendant que j'attends.", score: 0 },
          { text: "Je contacte le support IT pour qu'il accélère le processus.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La frontière entre outils approuvés et solutions pratiques non approuvées est encore poreuse", desc: "Utiliser Zoom parce que c'est mieux que l'outil approuvé, enregistrer un fichier lourd sur Google Drive parce que le VPN est lent, installer un logiciel utile sans validation DSI : ces contournements créent des brèches dans le périmètre de sécurité de l'entreprise. Les outils non approuvés ne sont pas couverts par les garanties de sécurité de votre organisation." },
          moyen: { label: "Pratiques en développement", titre: "Vous utilisez les outils approuvés dans la plupart des cas mais des contournements apparaissent sous pression", desc: "Vous utilisez les outils approuvés pour les activités courantes. Mais quand le VPN est lent et qu'un fichier lourd doit passer, quand Zoom offre des fonctionnalités que l'outil officiel n'a pas, quand une mise à jour s'accumule depuis plusieurs jours : des contournements peuvent apparaître. L'enjeu est de traiter ces situations comme des signaux à remonter plutôt que des problèmes à contourner." },
          haut: { label: "Réflexes installés", titre: "Vous utilisez uniquement les outils approuvés et vous remontez les besoins plutôt que de contourner", desc: "Vous utilisez l'outil approuvé même s'il est moins fonctionnel que l'alternative. Vous contactez l'IT pour un problème de VPN plutôt que de travailler sans. Vous appliquez les mises à jour dans les 48h. Vous ne partagez jamais les identifiants d'un·e collègue même pour dépanner. Cette discipline sur les outils et les accès — qui suppose d'accepter des contraintes fonctionnelles — est ce qui maintient le périmètre de sécurité de l'organisation." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Pendant votre journée de télétravail, vous utilisez votre ordinateur professionnel pour faire quelques achats personnels sur Amazon entre deux réunions.",
        tags: ["frontière pro/perso", "navigation"],
        answers: [
          { text: "C'est une utilisation mineure et occasionnelle — tout le monde le fait.", score: 0 },
          { text: "Je fais mes achats depuis mon téléphone ou un appareil personnel — l'ordinateur professionnel n'est pas un outil personnel.", score: 2 },
          { text: "Je le fais depuis un profil navigateur séparé sur mon ordinateur professionnel.", score: 0.5 },
          { text: "Je limite les usages personnels aux pauses et aux sites sans risque.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous effectuez toutes vos activités personnelles sur vos appareils personnels, pas sur vos appareils professionnels.",
        tags: ["frontière pro/perso", "séparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "choix",
        text: "Votre messagerie personnelle et votre messagerie professionnelle sont toutes les deux ouvertes sur votre ordinateur professionnel. Vous répondez à des mails personnels entre deux tâches.",
        tags: ["frontière pro/perso", "messagerie"],
        answers: [
          { text: "C'est pratique d'avoir tout au même endroit et c'est une utilisation mineure.", score: 0 },
          { text: "Je ferme ma messagerie personnelle sur mon ordinateur professionnel et j'y accède depuis mon téléphone.", score: 2 },
          { text: "Je sépare les onglets et je fais attention à ne pas mélanger les contenus.", score: 0.5 },
          { text: "Je réponds uniquement aux mails personnels urgents depuis mon poste professionnel.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous souhaitez installer un logiciel pratique pour la gestion de vos photos personnelles sur votre ordinateur professionnel. Ce logiciel est gratuit et reconnu.",
        tags: ["frontière pro/perso", "téléchargement"],
        answers: [
          { text: "Je l'installe — c'est un logiciel reconnu et c'est mon poste de travail.", score: 0 },
          { text: "Je ne l'installe pas — les logiciels personnels ne doivent pas être installés sur un poste professionnel sans validation de la DSI.", score: 2 },
          { text: "Je vérifie d'abord si ce logiciel est sur la liste des logiciels autorisés.", score: 1.5 },
          { text: "Je l'installe en créant un profil utilisateur séparé sur le même poste.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous publiez une photo de votre bureau à domicile pour montrer votre configuration de télétravail sur LinkedIn. Des documents de travail sont visibles sur votre bureau.",
        tags: ["frontière pro/perso", "réseaux sociaux"],
        answers: [
          { text: "Je publie — les documents sont flous et personne ne peut les lire.", score: 0 },
          { text: "Je nettoie mon bureau ou je recadre la photo avant de publier.", score: 2 },
          { text: "Je publie après avoir vérifié qu'aucun document confidentiel n'est visible.", score: 1.5 },
          { text: "Je mets la photo en accès restreint pour mes relations LinkedIn seulement.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'installez aucun logiciel personnel sur votre poste professionnel sans validation préalable de la DSI.",
        tags: ["frontière pro/perso", "logiciels"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous partagez votre écran en réunion. Des notifications personnelles — messages de votre famille — apparaissent en bas de l'écran pendant la présentation.",
        tags: ["frontière pro/perso", "partage d'écran"],
        answers: [
          { text: "Je continue la présentation — les notifications sont visibles mais c'est une situation normale.", score: 0 },
          { text: "J'active le mode 'ne pas déranger' et je désactive les notifications personnelles avant de partager mon écran.", score: 2 },
          { text: "Je minimise les notifications en les fermant rapidement pendant la réunion.", score: 0.5 },
          { text: "Je partage uniquement la fenêtre de présentation plutôt que tout l'écran.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise n'a pas fourni de téléphone professionnel. Vous utilisez votre téléphone personnel pour accéder aux mails et aux applications professionnelles. Votre enfant utilise aussi ce téléphone.",
        tags: ["frontière pro/perso", "BYOD"],
        answers: [
          { text: "Je laisse — mon enfant n'accédera pas aux applications professionnelles.", score: 0 },
          { text: "Je crée un profil séparé sur le téléphone et je protège le profil professionnel par un code distinct.", score: 2 },
          { text: "Je m'assure que les applications professionnelles sont protégées par un code PIN supplémentaire.", score: 1.5 },
          { text: "J'en parle à mon responsable pour obtenir un téléphone professionnel dédié.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "likert",
        text: "Avant de partager votre écran en réunion, vous désactivez les notifications personnelles pour éviter toute divulgation involontaire.",
        tags: ["frontière pro/perso", "notifications"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }, 
      {
        type: "choix",
        text: "Votre ordinateur professionnel contient des photos personnelles et vos fichiers de comptabilité familiale que vous avez stockés là par commodité.",
        tags: ["frontière pro/perso", "données personnelles sur poste pro"],
        answers: [
          { text: "C'est pratique et ça ne gêne pas mon travail.", score: 0 },
          { text: "Je les transfère sur un support personnel — les données personnelles n'ont pas leur place sur un poste professionnel.", score: 2 },
          { text: "Je les mets dans un dossier clairement séparé des données professionnelles.", score: 0.5 },
          { text: "Je les supprime du poste et je les archive sur un cloud personnel.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La séparation pro/perso sur vos appareils est insuffisante et crée des expositions régulières", desc: "Faire ses achats personnels sur l'ordinateur professionnel, avoir sa messagerie personnelle ouverte sur son poste de travail, laisser des données personnelles sur son poste pro, publier une photo LinkedIn avec des documents visibles : chaque usage personnel de vos appareils professionnels augmente la surface d'exposition. Un seul logiciel mal sécurisé ou un seul site malveillant peut compromettre l'ensemble." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez globalement la séparation pro/perso mais quelques usages croisés persistent", desc: "Vous séparez globalement vos usages pro et perso. Mais la messagerie personnelle ouverte sur le poste professionnel, les achats pendant une pause, quelques photos personnelles stockées par commodité : ces usages croisés persistent. L'enjeu est de traiter l'ordinateur professionnel comme un outil professionnel uniquement — sans exceptions pour les usages qui semblent mineurs." },
          haut: { label: "Réflexes installés", titre: "La séparation pro/perso est stricte sur vos appareils — sans exceptions pour les usages qui semblent mineurs", desc: "Vous ne faites pas vos achats personnels sur votre ordinateur professionnel. Vous fermez votre messagerie personnelle sur votre poste de travail. Vous n'installez aucun logiciel sans validation DSI. Vous désactivez les notifications personnelles avant de partager votre écran. Cette séparation stricte — qui peut sembler excessive pour des usages mineurs — est ce qui évite que votre poste de travail devienne un vecteur de compromission via vos habitudes personnelles." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous êtes en télétravail depuis deux ans. Certaines précautions que vous appliquiez au début — verrouiller l'écran, ranger les documents — sont devenues moins systématiques avec le temps.",
        tags: ["durée", "habitudes"],
        answers: [
          { text: "C'est normal — avec l'expérience on apprend ce qui est vraiment important et ce qui est superflu.", score: 0 },
          { text: "Je me réimpose les standards complets — le relâchement progressif est exactement ce que les attaquants attendent.", score: 2 },
          { text: "Je maintiens les précautions qui me semblent pertinentes dans mon contexte domestique.", score: 0.5 },
          { text: "J'en parle à mon responsable pour qu'il rappelle les bonnes pratiques à toute l'équipe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "likert",
        text: "Vos pratiques de sécurité en télétravail sont les mêmes qu'au bureau — même niveau de vigilance, mêmes réflexes.",
        tags: ["durée", "constance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise a organisé une session de rappel des bonnes pratiques de sécurité en télétravail. Vous estimez bien connaître les règles.",
        tags: ["durée", "audit personnel"],
        answers: [
          { text: "Je ne participe pas — je connais déjà les règles et c'est une perte de temps.", score: 0 },
          { text: "Je participe — les pratiques évoluent et une session de rappel peut mettre en lumière des points que j'ai négligés.", score: 2 },
          { text: "Je parcours le contenu rapidement pour voir s'il y a quelque chose de nouveau.", score: 0.5 },
          { text: "Je participe uniquement si la session aborde des sujets que je ne maîtrise pas.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "En télétravail depuis plusieurs mois, vous remarquez que votre connexion VPN est parfois instable et que vous avez pris l'habitude de travailler sans VPN quand il bug.",
        tags: ["durée", "signalement"],
        answers: [
          { text: "Je continue — les instabilités du VPN sont connues et travailler sans VPN reste raisonnable.", score: 0 },
          { text: "Je signale le problème de stabilité du VPN à l'équipe IT et je n'utilise pas de données sensibles sans VPN.", score: 2 },
          { text: "Je contacte le support IT uniquement si l'instabilité s'aggrave.", score: 0.5 },
          { text: "Je redémarre le VPN et je ne l'utilise pas pour les tâches qui ne semblent pas sensibles.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau collègue en télétravail vous demande comment les gens dans l'équipe gèrent la frontière pro/perso sur leurs appareils. Vous savez que certains collègues prennent des libertés.",
        tags: ["durée", "évolution équipe"],
        answers: [
          { text: "Je lui décris les pratiques réelles de l'équipe — c'est plus utile que la politique officielle.", score: 0 },
          { text: "Je lui explique les règles officielles et je lui dis que les pratiques qui s'en écartent sont des risques.", score: 2 },
          { text: "Je lui dis de regarder la politique de sécurité de l'entreprise pour se faire sa propre opinion.", score: 1 },
          { text: "Je lui décris les pratiques officielles sans commenter ce que les collègues font.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous transmettez les bonnes pratiques de sécurité en télétravail aux nouveaux arrivants, pas seulement les pratiques réelles de l'équipe.",
        tags: ["durée", "transmission"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous demande d'évaluer les risques de sécurité liés au télétravail dans votre équipe. Vous savez que certaines pratiques ne sont pas conformes.",
        tags: ["durée", "évaluation"],
        answers: [
          { text: "Je décris les risques théoriques sans mentionner les pratiques spécifiques de l'équipe.", score: 0 },
          { text: "Je décris honnêtement les pratiques observées et les risques réels qui en découlent.", score: 2 },
          { text: "J'en parle d'abord aux collègues concernés avant de les mentionner dans mon évaluation.", score: 1 },
          { text: "Je remonte les risques sans nommer personne spécifiquement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre domicile a été cambriolé. Votre ordinateur professionnel se trouvait dans la pièce mais il ne semble pas avoir été pris. La maison est dans un état de désordre.",
        tags: ["durée", "incident domicile"],
        answers: [
          { text: "Je vérifie que l'ordinateur est là et je reprends le travail dès que possible.", score: 0 },
          { text: "Je contacte immédiatement l'équipe IT même si l'ordinateur est là — quelqu'un a peut-être eu accès à la pièce.", score: 2 },
          { text: "Je contacte l'équipe IT uniquement si l'ordinateur montre des signes d'accès.", score: 0 },
          { text: "Je contacte la police et j'informe mon responsable, l'équipe IT sera contactée si nécessaire.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "likert",
        text: "Tout événement à votre domicile susceptible d'avoir exposé votre matériel professionnel — cambriolage, accès par un tiers — est signalé à l'équipe IT.",
        tags: ["durée", "incidents domicile"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Vous revenez au bureau après trois semaines de télétravail intensif. Vous avez pris quelques habitudes à domicile — ne pas verrouiller l'écran en partant pour un café — que vous reproduisez maintenant au bureau.",
        tags: ["durée", "retour bureau"],
        answers: [
          { text: "Je laisse — au bureau avec des collègues de confiance, le risque est différent d'à la maison.", score: 0 },
          { text: "Je me réimpose les réflexes de bureau — verrouillage à chaque départ, même pour deux minutes.", score: 2 },
          { text: "Je fais attention uniquement dans les zones où des visiteurs externes peuvent accéder.", score: 0.5 },
          { text: "Je demande à un collègue de me signaler si j'oublie de verrouiller.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les bonnes pratiques du télétravail se sont dégradées avec le temps ou ne sont pas transmises correctement", desc: "Relâcher progressivement les bonnes pratiques après deux ans de télétravail, décrire les pratiques réelles de l'équipe à un nouveau collègue comme si elles étaient la norme, ne pas signaler un cambriolage à l'équipe IT : ces comportements érodent la sécurité dans la durée. Les habitudes qui se sont installées progressivement sont souvent les plus difficiles à identifier et les plus dangereuses." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez de bonnes pratiques dans la durée mais votre influence sur la culture de l'équipe est encore limitée", desc: "Vous maintenez vos propres pratiques dans la durée. Mais transmettre les règles officielles à un nouveau collègue plutôt que les pratiques réelles de l'équipe, signaler un problème de stabilité VPN plutôt que de travailler sans, contacter l'IT après un cambriolage même si l'ordinateur est là : ces réflexes ne sont pas encore totalement automatiques. L'enjeu est d'étendre la rigueur à ces situations moins fréquentes." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez vos pratiques dans la durée et vous contribuez à la culture sécurité de votre équipe", desc: "Vous vous réimposez les standards après deux ans de télétravail. Vous transmettez les règles officielles aux nouveaux, pas les pratiques déviantes de l'équipe. Vous signalez un cambriolage à l'IT même si l'ordinateur est là. Vous revenez aux réflexes de bureau après une longue période de télétravail. Cette constance dans la durée — et cette influence positive sur la culture collective — est ce qui distingue une équipe dont les pratiques de sécurité se maintiennent de celles qui se dégradent progressivement." },
        },
      }
    ],

  },

  "donnees-rgpd-quotidien": {
    0: [
      {
        type: "choix",
        text: "Vous gérez une liste de prospects avec nom, entreprise, fonction et numéro de téléphone professionnel. Votre collègue vous dit que ces données ne sont pas des données personnelles puisqu'elles sont professionnelles.",
        tags: ["RGPD", "définition"],
        answers: [
          { text: "Je suis d'accord — des coordonnées professionnelles ne sont pas des données personnelles.", score: 0 },
          { text: "Je lui explique que les coordonnées professionnelles d'une personne physique sont bien des données personnelles au sens du RGPD.", score: 2 },
          { text: "Je vérifie avec notre DPO si ces données sont soumises au RGPD.", score: 1.5 },
          { text: "Je traite ces données avec précaution même si je ne suis pas sûr·e de leur statut.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "choix",
        text: "Dans un tableau de suivi RH, vous avez une colonne 'remarques' où certains managers notent des informations sur la santé ou la vie familiale des collaborateurs pour justifier des aménagements.",
        tags: ["RGPD", "données sensibles"],
        answers: [
          { text: "C'est utile pour le management — ces informations permettent d'adapter le soutien apporté.", score: 0 },
          { text: "Je le signale au DPO — les données de santé sont des données sensibles à protection renforcée et ne peuvent pas être stockées ainsi.", score: 2 },
          { text: "Je supprime les entrées concernées et j'en parle aux managers concernés.", score: 1.5 },
          { text: "Je m'assure que le tableau n'est accessible qu'aux personnes qui ont besoin de ces informations.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "likert",
        text: "Vous identifiez correctement les données personnelles dans les fichiers et outils que vous utilisez au quotidien.",
        tags: ["RGPD", "reconnaissance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "choix",
        text: "Vous partagez un fichier d'analyse avec un prestataire. Il contient des données clients. Pour le rendre 'anonyme', vous remplacez les noms par des numéros comme 'Client_001'.",
        tags: ["RGPD", "pseudonymisation"],
        answers: [
          { text: "Le fichier est anonymisé — les noms sont supprimés et le prestataire ne peut plus identifier les clients.", score: 0 },
          { text: "Le fichier est pseudonymisé, pas anonymisé — si le prestataire peut relier les numéros aux clients, le RGPD s'applique toujours.", score: 2 },
          { text: "Je vérifie avec notre DPO si ce niveau de pseudonymisation suffit pour ce partage.", score: 1.5 },
          { text: "Je supprime aussi toutes les données qui pourraient permettre d'identifier les clients indirectement.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "choix",
        text: "Votre système informatique enregistre automatiquement les actions de tous les utilisateurs — connexions, fichiers consultés, modifications. Ces journaux contiennent des données personnelles.",
        tags: ["RGPD", "journaux"],
        answers: [
          { text: "Les journaux systèmes ne sont pas des données personnelles — ce sont des données techniques.", score: 0 },
          { text: "Ces journaux contiennent bien des données personnelles et leur gestion doit respecter le RGPD.", score: 2 },
          { text: "Ce sont des données personnelles uniquement si elles sont consultées pour surveiller un individu spécifique.", score: 0.5 },
          { text: "Je consulte notre DPO pour savoir comment ces journaux doivent être gérés.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "likert",
        text: "Vous considérez comme données personnelles non seulement les noms et adresses mais aussi les données qui permettent d'identifier indirectement une personne.",
        tags: ["RGPD", "données indirectes"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "choix",
        text: "Vous souhaitez utiliser les données de vos clients pour leur envoyer une newsletter sur vos nouveaux produits. Vos clients ont signé un contrat avec vous mais pas explicitement consenti à la newsletter.",
        tags: ["RGPD", "base légale"],
        answers: [
          { text: "J'envoie la newsletter — ils sont clients et ont une relation commerciale avec nous.", score: 0 },
          { text: "Je ne l'envoie pas sans base légale valide — la relation commerciale ne suffit pas pour la prospection directe.", score: 2 },
          { text: "Je l'envoie avec une option de désinscription claire.", score: 0.5 },
          { text: "Je consulte notre DPO pour valider la base légale avant d'envoyer.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez collecté les données de candidats pour un recrutement. Un autre département cherche des profils pour un nouveau poste. Il vous demande d'accéder à votre base de candidats.",
        tags: ["RGPD", "finalité"],
        answers: [
          { text: "Je lui donne accès — ce sont des personnes qui cherchent un emploi et ce poste pourrait les intéresser.", score: 0 },
          { text: "Je lui dis que les données ne peuvent être utilisées que pour la finalité pour laquelle elles ont été collectées — je dois vérifier si les candidats ont consenti à être contactés pour d'autres postes.", score: 2 },
          { text: "Je partage uniquement les candidats dont les profils correspondent clairement au nouveau poste.", score: 0 },
          { text: "Je contacte les candidats pour leur demander s'ils souhaitent être transmis à l'autre département.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'utilisez les données personnelles que pour la finalité pour laquelle elles ont été collectées, et vous vérifiez avant tout autre usage.",
        tags: ["RGPD", "finalité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise tient un registre des traitements de données personnelles. Vous créez un nouveau fichier de suivi clients avec des données personnelles. Le registre n'est pas à jour.",
        tags: ["RGPD", "registre"],
        answers: [
          { text: "Je crée le fichier — le registre est géré par le DPO, pas par moi.", score: 0.5 },
          { text: "Je signale au DPO la création du nouveau traitement pour qu'il soit ajouté au registre.", score: 2 },
          { text: "J'ajoute moi-même l'entrée dans le registre.", score: 1 },
          { text: "Je crée le fichier et je le mentionne lors de la prochaine réunion avec le DPO.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre compréhension des données personnelles est encore partielle — coordonnées pro, pseudonymisation et finalité créent des angles morts", desc: "Considérer que les coordonnées professionnelles ne sont pas des données personnelles, penser qu'un fichier avec des numéros à la place des noms est 'anonyme', envoyer une newsletter à des clients sans base légale valide : ces erreurs de compréhension sont courantes et exposent l'entreprise. Le RGPD s'applique à toute information permettant d'identifier une personne, directement ou indirectement." },
          moyen: { label: "Pratiques en développement", titre: "Vous reconnaissez les données personnelles dans les cas courants mais certaines catégories particulières créent encore des angles morts", desc: "Vous identifiez les données personnelles évidentes — noms, emails, téléphones. Mais les données de santé dans un tableau RH, les journaux systèmes, la pseudonymisation partielle, la question de la finalité pour l'utilisation d'une base de candidats : ces situations créent encore des angles morts. L'enjeu est d'étendre votre vigilance aux catégories particulières et aux cas indirects." },
          haut: { label: "Réflexes installés", titre: "Vous identifiez les données personnelles dans toutes leurs formes et vérifiez la base légale avant tout traitement", desc: "Vous expliquez à votre collègue que les coordonnées professionnelles sont des données personnelles. Vous signalez les données de santé dans le tableau RH au DPO. Vous vérifiez la base légale avant d'envoyer une newsletter. Vous remontez la création d'un nouveau traitement pour le registre. Cette compréhension étendue des données personnelles — qui couvre les cas indirects, les catégories sensibles et les finalités — est le fondement d'une pratique RGPD solide." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Un candidat que vous avez rencontré il y a six mois vous contacte par mail pour demander quelles données vous détenez sur lui. Il invoque le RGPD.",
        tags: ["droits", "accès"],
        answers: [
          { text: "Je lui réponds directement en lui envoyant son CV et mes notes d'entretien.", score: 0 },
          { text: "Je transmets la demande à notre DPO qui la traitera dans les délais légaux — un mois maximum.", score: 2 },
          { text: "Je lui dis de contacter notre service client qui gère ces demandes.", score: 1 },
          { text: "Je lui réponds que nous ne conservons ses données que pour le recrutement et qu'il peut demander leur suppression.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "likert",
        text: "Toute demande d'exercice de droits RGPD (accès, rectification, suppression) que vous recevez est transmise au DPO dans la journée.",
        tags: ["droits", "transmission"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Un ancien client vous demande de supprimer toutes ses données personnelles. Vous avez ses coordonnées dans votre CRM, vos mails archivés et vos factures.",
        tags: ["droits", "suppression"],
        answers: [
          { text: "Je supprime tout ce que je peux et je considère que la demande est satisfaite.", score: 0.5 },
          { text: "Je transmets la demande au DPO — certaines données peuvent être conservées pour des obligations légales comme les factures.", score: 2 },
          { text: "Je lui dis que je vais supprimer ses données mais que certaines sont conservées pour des raisons légales.", score: 1 },
          { text: "Je supprime ses données du CRM et de mes mails en lui confirmant la suppression.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Un collaborateur vous contacte pour vous dire que sa date de naissance enregistrée dans le système RH est incorrecte. Il vous envoie sa pièce d'identité par mail.",
        tags: ["droits", "rectification"],
        answers: [
          { text: "Je rectifie directement dans le système — c'est une correction simple et légitime.", score: 0.5 },
          { text: "Je transmets la demande aux RH qui gèrent les données du personnel et suivent la procédure appropriée.", score: 2 },
          { text: "Je transmets la pièce d'identité aux RH pour qu'elles gèrent.", score: 1.5 },
          { text: "Je lui demande d'utiliser le portail RH pour faire sa demande de rectification.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Un prospect vous demande de ne plus le contacter commercialement. Il n'exerce pas formellement son droit d'opposition mais son message est clair.",
        tags: ["droits", "opposition"],
        answers: [
          { text: "J'attends qu'il exerce formellement son droit d'opposition par les canaux officiels avant d'agir.", score: 0 },
          { text: "Je le retire immédiatement de mes listes de prospection et je le signale à notre DPO.", score: 2 },
          { text: "Je cesse les contacts commerciaux mais je conserve ses données pour d'éventuels futurs contacts.", score: 0.5 },
          { text: "Je lui envoie le formulaire d'opposition officiel et j'attends sa réponse.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "likert",
        text: "Quand une personne exprime clairement qu'elle ne veut plus être contactée, vous agissez immédiatement sans attendre une demande formelle.",
        tags: ["droits", "réactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Un client vous demande de lui transmettre toutes ses données dans un format réutilisable. Il souhaite les porter chez un concurrent.",
        tags: ["droits", "portabilité"],
        answers: [
          { text: "Je lui explique que ce droit ne s'applique que dans certains contextes et je transmets au DPO.", score: 2 },
          { text: "Je lui transmets ses données dans le format le plus pratique pour moi.", score: 0.5 },
          { text: "Je refuse — faciliter le départ vers un concurrent n'est pas dans l'intérêt de l'entreprise.", score: 0 },
          { text: "Je transmets la demande à notre équipe technique pour qu'elle génère l'export.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "Votre application collecte des données d'utilisateurs. Vous réalisez qu'un utilisateur a déclaré avoir 16 ans lors de son inscription. Votre politique dit que l'application est réservée aux 18 ans et plus.",
        tags: ["droits", "mineur"],
        answers: [
          { text: "Je ne fais rien — l'utilisateur a accepté les conditions et a déclaré 16 ans de lui-même.", score: 0 },
          { text: "Je signale la situation au DPO pour que le compte soit traité conformément à notre politique et aux obligations RGPD sur les mineurs.", score: 2 },
          { text: "Je supprime le compte immédiatement.", score: 1 },
          { text: "Je lui envoie un mail lui demandant de confirmer son âge.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "likert",
        text: "Vous connaissez le délai légal de réponse aux demandes d'exercice de droits RGPD et vous vous assurez qu'il est respecté dans votre organisation.",
        tags: ["droits", "délai"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }, 
      {
        type: "choix",
        text: "La famille d'un collaborateur décédé vous contacte pour demander la suppression de ses données de vos systèmes.",
        tags: ["droits", "décès"],
        answers: [
          { text: "Je supprime les données immédiatement — la demande est légitime et humainement justifiée.", score: 0.5 },
          { text: "Je transmets la demande au DPO et aux RH qui géreront le dossier conformément à la loi — certaines données doivent être conservées.", score: 2 },
          { text: "Je leur explique que les données d'un salarié ne peuvent pas être supprimées immédiatement pour des raisons légales.", score: 1 },
          { text: "Je supprime ce que je peux de mon côté et je transfère le reste aux RH.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les demandes d'exercice de droits RGPD ne sont pas encore traitées avec la rigueur et les délais requis", desc: "Répondre directement à une demande d'accès sans passer par le DPO, attendre une demande formelle avant de retirer quelqu'un d'une liste de prospection, ne pas transmettre au DPO dans la journée : le droit des personnes sur leurs données est un droit légalement encadré avec des délais stricts. Toute demande qui n'est pas traitée dans les délais légaux expose l'entreprise." },
          moyen: { label: "Pratiques en développement", titre: "Vous transmettez les demandes de droits RGPD mais la réactivité et la précision restent encore insuffisantes", desc: "Vous transmettez les demandes d'exercice de droits au DPO. Mais agir immédiatement sur une désinscription informelle sans attendre la demande formelle, distinguer les données qui peuvent être supprimées de celles soumises à des obligations légales de conservation, gérer la demande d'un décès : ces situations nécessitent encore davantage de précision. L'enjeu est de maîtriser les subtilités du droit des personnes." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les demandes de droits avec réactivité et précision, en distinguant ce qui peut être fait immédiatement de ce qui nécessite un cadre", desc: "Vous transmettez au DPO dans la journée toute demande d'exercice de droits. Vous agissez immédiatement sur une désinscription même informelle. Vous distinguez ce qui peut être supprimé de ce qui doit être conservé pour des obligations légales. Cette précision dans le traitement des droits des personnes — qui suppose de connaître les règles et leurs exceptions — est ce qui protège réellement les personnes et l'organisation." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous contractualisez avec un nouveau prestataire qui aura accès aux données de vos clients. Il n'est pas question de protection des données dans le contrat.",
        tags: ["sous-traitance", "DPA"],
        answers: [
          { text: "Je signe le contrat — si le prestataire est sérieux, il respecte naturellement la confidentialité.", score: 0 },
          { text: "Je remonte la situation au DPO et aux juristes — un Data Processing Agreement (DPA) est obligatoire.", score: 2 },
          { text: "J'ajoute une clause de confidentialité dans le contrat.", score: 0.5 },
          { text: "Je demande au prestataire de me confirmer par mail qu'il respecte le RGPD.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "likert",
        text: "Avant de confier des données personnelles à un prestataire, vous vérifiez qu'un cadre contractuel adapté est en place.",
        tags: ["sous-traitance", "vérification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "choix",
        text: "Vous souhaitez utiliser un outil SaaS américain pour analyser les données de vos clients européens. L'éditeur n'est pas certifié EU-US Data Privacy Framework.",
        tags: ["sous-traitance", "transfert hors UE"],
        answers: [
          { text: "J'utilise l'outil — les États-Unis ont des standards de sécurité élevés.", score: 0 },
          { text: "Je consulte notre DPO avant d'utiliser cet outil — un transfert hors UE sans garanties adéquates est interdit.", score: 2 },
          { text: "J'anonymise les données avant de les envoyer vers l'outil américain.", score: 0.5 },
          { text: "Je vérifie si l'éditeur dispose de clauses contractuelles types (SCCs) avant d'utiliser.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire technique a demandé l'accès à l'ensemble de votre base de données clients pour effectuer une maintenance sur une fonctionnalité qui n'en concerne qu'une partie.",
        tags: ["sous-traitance", "accès excessif"],
        answers: [
          { text: "Je lui donne l'accès complet — il est de confiance et l'accès total facilitera sa mission.", score: 0 },
          { text: "Je lui donne accès uniquement aux données strictement nécessaires à sa mission.", score: 2 },
          { text: "Je lui donne l'accès complet en lui demandant de ne consulter que ce dont il a besoin.", score: 0 },
          { text: "Je contacte notre DPO pour valider le niveau d'accès approprié.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "choix",
        text: "Votre prestataire vous informe qu'il a subi une cyberattaque et que des données de vos clients qu'il détenait ont peut-être été compromises.",
        tags: ["sous-traitance", "incident prestataire"],
        answers: [
          { text: "J'attends le rapport d'analyse complet du prestataire avant d'agir.", score: 0 },
          { text: "Je contacte immédiatement notre DPO — la notification à la CNIL doit se faire dans les 72 heures si c'est une violation.", score: 2 },
          { text: "Je préviens les clients concernés directement.", score: 0.5 },
          { text: "Je contacte notre DPO et notre responsable juridique pour évaluer nos obligations.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez immédiatement à votre DPO toute violation de données chez un prestataire, sans attendre l'analyse complète de l'incident.",
        tags: ["sous-traitance", "délai notification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "choix",
        text: "Votre contrat avec un prestataire qui traitait des données personnelles se termine. Vous ne précisez pas ce qu'il doit faire des données.",
        tags: ["sous-traitance", "fin de contrat"],
        answers: [
          { text: "Je laisse — le prestataire sait qu'il doit supprimer les données à la fin du contrat.", score: 0 },
          { text: "Je m'assure que le DPA prévoit la restitution ou la destruction des données et j'en demande confirmation écrite.", score: 2 },
          { text: "Je lui envoie un mail lui demandant de supprimer les données.", score: 1 },
          { text: "Je contacte notre DPO pour gérer la clôture du traitement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe veut utiliser un outil collaboratif cloud pour gérer un projet incluant des données personnelles de clients. L'outil est populaire dans votre secteur.",
        tags: ["sous-traitance", "cloud"],
        answers: [
          { text: "Je l'utilise — si c'est répandu dans le secteur, c'est que c'est conforme.", score: 0 },
          { text: "Je vérifie d'abord avec la DSI et le DPO que cet outil est approuvé pour l'usage de données personnelles.", score: 2 },
          { text: "Je l'utilise en m'assurant que les données sont chiffrées.", score: 0.5 },
          { text: "Je consulte la politique de confidentialité de l'outil avant de l'utiliser.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'utilisez pas d'outil non approuvé pour traiter des données personnelles de clients ou de collaborateurs, même s'il est populaire dans votre secteur.",
        tags: ["sous-traitance", "principe"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }, 
      {
        type: "choix",
        text: "Votre DPO vous informe qu'un prestataire avec lequel vous travaillez depuis trois ans n'a jamais été audité sur sa conformité RGPD.",
        tags: ["sous-traitance", "audit"],
        answers: [
          { text: "Je laisse — on travaille avec eux depuis trois ans sans problème.", score: 0 },
          { text: "Je participe à la démarche d'audit que le DPO va initier.", score: 2 },
          { text: "Je demande au prestataire de m'envoyer sa certification ou sa politique de données.", score: 1 },
          { text: "Je contacte notre responsable achats pour qu'il gère la relation avec le prestataire.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La gestion des sous-traitants et des transferts de données se fait encore sans vérification systématique du cadre juridique", desc: "Contractualiser avec un prestataire qui accède à des données personnelles sans DPA, utiliser un outil SaaS américain sans vérifier les garanties de transfert, ne pas alerter le DPO lors d'un incident chez un prestataire : chaque prestataire qui accède à vos données personnelles étend votre responsabilité. Le RGPD suit les données, pas les frontières organisationnelles." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez les cadres contractuels avec les prestataires principaux mais les situations nouvelles créent encore des hésitations", desc: "Vous vérifiez qu'un DPA est en place avec vos prestataires principaux. Mais les transferts hors UE sans certification adéquate, la fin de contrat et la destruction des données, l'utilisation d'un outil populaire non approuvé : ces situations créent encore des hésitations. L'enjeu est de systématiser la vérification du cadre juridique pour tout nouveau prestataire ou outil." },
          haut: { label: "Réflexes installés", titre: "Vous vérifiez systématiquement le cadre juridique avec les sous-traitants et signalez immédiatement les incidents", desc: "Vous exigez un DPA avant de confier des données à un prestataire. Vous vérifiez les garanties de transfert hors UE. Vous limitez l'accès du prestataire aux données strictement nécessaires. Vous alertez le DPO immédiatement sur un incident chez un prestataire. Vous gérez la fin de contrat avec une confirmation de destruction des données. Cette rigueur dans la chaîne de sous-traitance est ce qui empêche vos obligations RGPD de 's'arrêter à la porte' de vos prestataires." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous concevez un nouveau formulaire de collecte de données clients. Par défaut, vous envisagez de cocher toutes les cases de consentement pour faciliter le remplissage.",
        tags: ["privacy by design", "conception"],
        answers: [
          { text: "Je coche par défaut — ça simplifie l'expérience utilisateur et ils peuvent décocher.", score: 0 },
          { text: "Je laisse toutes les cases décochées — le consentement doit être actif, pas passif.", score: 2 },
          { text: "Je coche les cases pour les consentements légalement obligatoires uniquement.", score: 0.5 },
          { text: "Je demande conseil au DPO sur la bonne pratique pour ce formulaire.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous créez un nouveau processus ou outil impliquant des données personnelles, vous intégrez la protection des données dès la conception.",
        tags: ["privacy by design", "réflexe"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous lancez un projet de collecte de données biométriques des collaborateurs pour contrôler les accès. Vous n'avez pas fait d'analyse d'impact.",
        tags: ["privacy by design", "AIPD"],
        answers: [
          { text: "Je lance le projet — le contrôle d'accès biométrique est courant dans les entreprises.", score: 0 },
          { text: "Je contacte le DPO avant de lancer — les données biométriques nécessitent une Analyse d'Impact relative à la Protection des Données (AIPD).", score: 2 },
          { text: "Je m'assure que les données sont bien sécurisées et je lance le projet.", score: 0 },
          { text: "Je vérifie si d'autres entreprises ont fait une AIPD pour ce type de projet.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe souhaite entraîner un modèle d'IA sur des données historiques de clients pour améliorer les recommandations. Ces données n'ont pas été collectées à cette fin.",
        tags: ["privacy by design", "IA"],
        answers: [
          { text: "J'utilise les données — améliorer le service bénéficie aux clients.", score: 0 },
          { text: "Je consulte le DPO avant tout usage — entraîner une IA est une nouvelle finalité qui nécessite une base légale.", score: 2 },
          { text: "J'anonymise les données avant de les utiliser pour l'entraînement.", score: 0.5 },
          { text: "Je demande une analyse juridique pour savoir si c'est compatible avec les finalités initiales.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise conserve tous les mails professionnels indéfiniment 'pour des raisons de traçabilité'. Ces mails contiennent des données personnelles de clients et de collaborateurs.",
        tags: ["privacy by design", "durée"],
        answers: [
          { text: "C'est une bonne pratique — avoir un historique complet protège l'entreprise.", score: 0 },
          { text: "Je remonte la question au DPO — la conservation indéfinie sans base légale est contraire au RGPD.", score: 2 },
          { text: "Je conserve les mails liés à des dossiers actifs et je supprime les autres.", score: 0.5 },
          { text: "Je contacte notre responsable juridique pour valider la durée de conservation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "likert",
        text: "Vous appliquez des durées de conservation définies pour les données personnelles que vous gérez et vous les supprimez une fois ces durées atteintes.",
        tags: ["privacy by design", "durée"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau collaborateur, Erwan, prend en charge la gestion de la base de données clients. Il n'a reçu aucune formation RGPD.",
        tags: ["privacy by design", "sensibilisation"],
        answers: [
          { text: "Je le laisse prendre son poste — il apprendra les règles avec le temps.", score: 0 },
          { text: "Je m'assure qu'il reçoit une formation RGPD avant d'accéder aux données clients.", score: 2 },
          { text: "Je lui explique les règles essentielles et je lui remets la politique de données de l'entreprise.", score: 1.5 },
          { text: "Je le mets en copie des mails du DPO pour qu'il s'imprègne des sujets.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous achetez une base de données de prospects à un prestataire externe. Le prestataire certifie que les données sont 'conformes RGPD'.",
        tags: ["privacy by design", "prospection"],
        answers: [
          { text: "J'utilise la base — le prestataire certifie la conformité.", score: 0 },
          { text: "Je vérifie avec notre DPO les conditions exactes de collecte et de consentement avant d'utiliser.", score: 2 },
          { text: "Je teste la base sur un petit segment avant de l'utiliser en totalité.", score: 0 },
          { text: "Je demande au prestataire de me fournir la documentation de conformité.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "likert",
        text: "Vous impliquez le DPO de votre organisation en amont des projets impliquant des données personnelles, pas uniquement en cas de problème.",
        tags: ["privacy by design", "DPO"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez que des données personnelles de clients ont été accessibles sans autorisation pendant deux semaines suite à une mauvaise configuration.",
        tags: ["privacy by design", "incident"],
        answers: [
          { text: "Je corrige la configuration et je surveille si des données ont été utilisées.", score: 0 },
          { text: "Je contacte immédiatement le DPO — une violation de données expose à une obligation de notification à la CNIL dans les 72h.", score: 2 },
          { text: "Je corrige et j'en parle au DPO lors de notre prochain point.", score: 0 },
          { text: "Je contacte l'équipe IT pour corriger et évaluer l'étendue de l'exposition.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La protection des données est encore traitée comme une contrainte ponctuelle plutôt qu'intégrée à vos pratiques", desc: "Pré-cocher les cases de consentement, lancer un projet biométrique sans AIPD, utiliser des données historiques pour entraîner une IA sans vérifier la base légale, conserver des mails indéfiniment : la protection des données n'est pas un sujet à gérer après coup — c'est un réflexe de conception qui doit intervenir en amont de chaque nouveau projet ou processus." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la protection des données dans vos pratiques courantes mais les nouveaux projets ne déclenchent pas encore systématiquement le réflexe DPO", desc: "Vous impliquez le DPO sur les sujets RGPD courants. Mais lancer un projet d'IA sur des données existantes, utiliser une base achetée parce que le prestataire 'certifie la conformité', démarrer un projet biométrique sans AIPD : ces nouveaux projets ne déclenchent pas encore automatiquement le réflexe de consultation en amont. L'enjeu est de traiter chaque nouveau traitement de données personnelles comme un signal à soumettre au DPO." },
          haut: { label: "Réflexes installés", titre: "La protection des données est intégrée en amont de vos projets — vous consultez le DPO avant, pas après", desc: "Vous consultez le DPO avant de lancer un projet biométrique, avant d'utiliser des données historiques pour une IA, avant d'utiliser un outil SaaS non approuvé pour des données clients. Vous formez Erwan avant de lui donner accès aux données. Vous alertez le DPO dans les 72h sur une mauvaise configuration qui a exposé des données. Cette intégration en amont de la protection des données — qui transforme le RGPD d'une contrainte en réflexe — est ce qui distingue les organisations conformes de celles qui le découvrent par les incidents." },
        },
      }
    ],

  },

  "cyber-environnement-industriel": {
    0: [
      {
        type: "choix",
        text: "Un technicien informatique de votre DSI demande à accéder à votre réseau OT pour effectuer une mise à jour de sécurité sur les postes de supervision. C'est la première fois qu'il intervient sur ce réseau.",
        tags: ["OT/IT", "convergence"],
        answers: [
          { text: "Je le laisse intervenir — il est de la DSI et les mises à jour sont nécessaires.", score: 0 },
          { text: "Je vérifie qu'il a les habilitations spécifiques OT requises et qu'une procédure d'intervention est établie avant de lui donner accès.", score: 2 },
          { text: "Je l'accompagne pendant toute son intervention pour surveiller ce qu'il fait.", score: 1 },
          { text: "Je contacte mon responsable pour valider l'accès avant de l'autoriser.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "choix",
        text: "Pour gagner du temps, un opérateur connecte directement son ordinateur portable personnel au réseau de supervision SCADA pour transférer des données de production.",
        tags: ["OT/IT", "isolation"],
        answers: [
          { text: "Je laisse — c'est un opérateur expérimenté et c'est plus rapide.", score: 0 },
          { text: "J'interviens immédiatement — connecter un appareil non approuvé au réseau SCADA est une violation grave.", score: 2 },
          { text: "Je lui signale que c'est risqué et je lui propose d'utiliser les canaux approuvés.", score: 1.5 },
          { text: "Je surveille ce qu'il transfère pour m'assurer qu'il ne prend pas de données sensibles.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous vérifiez que les appareils connectés au réseau industriel sont bien des appareils approuvés et listés, pas des appareils personnels ou non autorisés.",
        tags: ["OT/IT", "séparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'une mise à jour d'un automate, la procédure prévoit une fenêtre de maintenance de 4 heures avec arrêt de la production. Le responsable de production propose de faire la mise à jour à chaud pour éviter l'arrêt.",
        tags: ["OT/IT", "disponibilité"],
        answers: [
          { text: "J'accepte — les équipements modernes supportent les mises à jour à chaud et 4 heures d'arrêt coûtent cher.", score: 0 },
          { text: "Je maintiens la procédure — une mise à jour à chaud sur un automate peut avoir des conséquences imprévisibles sur le processus.", score: 2 },
          { text: "Je consulte le fournisseur de l'automate pour savoir si c'est techniquement faisable.", score: 1 },
          { text: "Je fais la mise à jour à chaud en surveillant les paramètres du processus en continu.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous apprenez qu'un incident cyber a causé le déréglage d'un capteur de température dans une installation similaire à la vôtre. Le capteur affichait des valeurs normales mais ne mesurait plus correctement.",
        tags: ["OT/IT", "conséquences physiques"],
        answers: [
          { text: "Je prends note — c'est intéressant mais ce type d'incident reste rare.", score: 0 },
          { text: "Je remonte l'information à mon responsable et à l'équipe sécurité pour qu'on évalue si nos capteurs sont exposés à un risque similaire.", score: 2 },
          { text: "Je surveille mes propres capteurs de façon plus attentive pendant quelques semaines.", score: 1 },
          { text: "J'en parle à mon équipe lors du prochain briefing.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous remontez les incidents cyber survenus dans des installations similaires à la vôtre, même s'ils ne vous concernent pas directement.",
        tags: ["OT/IT", "veille"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "choix",
        text: "Un fournisseur d'équipement demande un accès à distance permanent à votre système de supervision pour assurer la maintenance préventive de son équipement.",
        tags: ["OT/IT", "accès distant"],
        answers: [
          { text: "J'accepte — le fournisseur a besoin de cet accès pour garantir la disponibilité de l'équipement.", score: 0 },
          { text: "Je refuse un accès permanent — je propose un accès ponctuel sur demande, validé et tracé à chaque intervention.", score: 2 },
          { text: "J'accepte en limitant l'accès à l'équipement concerné.", score: 1 },
          { text: "Je contacte notre équipe sécurité pour qu'elle configure l'accès de façon sécurisée.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "choix",
        text: "Un automate de votre ligne de production tourne sur un système d'exploitation qui n'est plus maintenu par son éditeur depuis deux ans. Il fonctionne parfaitement.",
        tags: ["OT/IT", "anciens systèmes"],
        answers: [
          { text: "Je laisse — s'il fonctionne bien, mieux vaut ne pas toucher à une installation qui marche.", score: 0 },
          { text: "Je remonte la situation à mon responsable et à l'équipe sécurité — un OS non maintenu est une vulnérabilité significative.", score: 2 },
          { text: "Je m'assure que cet automate est bien isolé du reste du réseau.", score: 1 },
          { text: "Je contacte le fournisseur pour savoir s'il propose une migration.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les équipements et systèmes industriels qui fonctionnent sur des logiciels non maintenus ou obsolètes, même s'ils fonctionnent correctement.",
        tags: ["OT/IT", "systèmes obsolètes"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }, 
      {
        type: "choix",
        text: "Pour faciliter le reporting, un opérateur a configuré un accès direct entre le réseau de supervision et le réseau bureautique. C'est plus pratique pour exporter les données de production.",
        tags: ["OT/IT", "cloisonnement"],
        answers: [
          { text: "Je laisse — c'est une configuration pratique et l'opérateur sait ce qu'il fait.", score: 0 },
          { text: "Je le signale à l'équipe sécurité — une connexion directe entre les réseaux OT et IT est une faille majeure.", score: 2 },
          { text: "Je demande à l'opérateur de passer par un système de transfert unidirectionnel approuvé.", score: 1.5 },
          { text: "Je surveille les données qui transitent pour m'assurer qu'il n'y a pas d'anomalie.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La spécificité cyber des environnements industriels n'est pas encore intégrée dans vos réflexes quotidiens", desc: "Autoriser un technicien IT sans habilitation OT sur le réseau de supervision, laisser un opérateur connecter son laptop personnel au SCADA pour gagner du temps, accepter un accès distant permanent d'un fournisseur : les réseaux industriels ont des exigences de sécurité spécifiques parce que leurs compromissions ont des conséquences physiques. Ce qui est acceptable sur un réseau IT peut arrêter une production ou créer un danger physique sur un réseau OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous connaissez les spécificités cyber industrielles mais certaines situations de pression opérationnelle créent encore des exceptions", desc: "Vous vérifiez les habilitations avant d'autoriser un accès au réseau OT. Vous signalez les systèmes sur des OS non maintenus. Mais sous pression d'une panne urgente, face à un fournisseur de confiance qui demande un accès permanent, quand la mise à jour à chaud semble techniquement faisable : vos réflexes peuvent encore céder. L'enjeu est de tenir précisément dans ces situations de pression opérationnelle." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les spécificités cyber industrielles sans exception, y compris sous pression opérationnelle", desc: "Vous vérifiez les habilitations OT d'un technicien DSI avant de lui donner accès. Vous maintenez la fenêtre de maintenance même face au responsable de production. Vous refusez l'accès distant permanent du fournisseur et proposez un accès ponctuel tracé. Vous signalez le laptop personnel connecté au SCADA immédiatement. Cette rigueur sans exception — qui suppose d'assumer des tensions opérationnelles — est ce qui protège réellement les installations industrielles." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Un technicien de maintenance arrive avec une clé USB pour mettre à jour le firmware d'un automate. La clé vient de chez le fournisseur mais n'a pas été vérifiée par votre équipe sécurité.",
        tags: ["supports", "clé USB"],
        answers: [
          { text: "Je l'autorise — c'est une clé du fournisseur officiel pour une mise à jour légitime.", score: 0 },
          { text: "Je demande que la clé soit vérifiée par notre équipe sécurité avant d'être utilisée sur l'automate.", score: 2 },
          { text: "Je laisse le technicien intervenir en restant présent pour surveiller.", score: 0.5 },
          { text: "Je demande au technicien de me fournir le numéro de série de la clé pour vérification.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "likert",
        text: "Tout support externe — clé USB, disque dur, laptop — est soumis à une vérification avant d'être connecté à un équipement industriel.",
        tags: ["supports", "vérification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "choix",
        text: "Un visiteur accrédité circule seul dans votre salle de contrôle pendant que vous êtes en réunion. Il a badgé à l'entrée.",
        tags: ["supports", "accès physique"],
        answers: [
          { text: "C'est correct — il est accrédité et a badgé.", score: 0 },
          { text: "Je demande à un collègue de l'accompagner — un accès accrédité à la zone ne signifie pas que la personne peut circuler seule dans la salle de contrôle.", score: 2 },
          { text: "Je m'assure que les postes de supervision sont verrouillés avant de le laisser seul.", score: 1 },
          { text: "Je contacte l'accueil pour qu'un agent de sécurité prenne le relais.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "choix",
        text: "Un ingénieur process souhaite se connecter depuis son ordinateur portable aux automates pour récupérer des données de diagnostic. Ce n'est pas son ordinateur habituel.",
        tags: ["supports", "ingénierie"],
        answers: [
          { text: "J'autorise — c'est un ingénieur process qui a légitimement besoin de ces données.", score: 0 },
          { text: "Je lui demande d'utiliser uniquement les postes approuvés pour se connecter aux automates.", score: 2 },
          { text: "Je l'accompagne pendant sa session de diagnostic.", score: 1 },
          { text: "Je vérifie que son ordinateur est à jour et sécurisé avant de l'autoriser.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "choix",
        text: "La console d'un opérateur est restée connectée au système SCADA pendant toute la nuit — l'opérateur est parti sans verrouiller sa session.",
        tags: ["supports", "console opérateur"],
        answers: [
          { text: "Je laisse jusqu'à son retour — déconnecter la session pourrait perturber un processus en cours.", score: 0 },
          { text: "Je verrouille ou déconnecte la session après vérification que ce n'est pas une session active liée à un processus en cours.", score: 2 },
          { text: "Je préviens l'opérateur de venir verrouiller sa session.", score: 1 },
          { text: "Je signale la situation à mon responsable pour qu'il décide quoi faire.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "likert",
        text: "Vous veillez à ce que les sessions de supervision soient verrouillées ou déconnectées quand les postes ne sont pas utilisés.",
        tags: ["supports", "sessions SCADA"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "choix",
        text: "Un fournisseur demande un accès à distance pour diagnostiquer une panne en urgence. L'accès n'est pas pré-approuvé dans votre procédure habituelle.",
        tags: ["supports", "accès distant maintenance"],
        answers: [
          { text: "J'ouvre l'accès — la panne est urgente et le fournisseur doit intervenir.", score: 0 },
          { text: "Je contacte mon responsable sécurité pour une autorisation d'urgence avant d'ouvrir l'accès.", score: 2 },
          { text: "J'ouvre un accès limité en durée et en périmètre, et je trace la session.", score: 1.5 },
          { text: "Je demande au fournisseur de se déplacer physiquement plutôt que d'intervenir à distance.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "choix",
        text: "Vous trouvez un badge d'accès à la zone de supervision dans le couloir. Il porte le nom d'un prestataire régulier.",
        tags: ["supports", "badge"],
        answers: [
          { text: "Je le dépose à l'accueil pour que le prestataire le récupère.", score: 0.5 },
          { text: "Je le remets à la sécurité et je signale l'incident — un badge perdu en zone industrielle doit être désactivé.", score: 2 },
          { text: "Je le garde jusqu'à ce que le prestataire vienne me le récupérer.", score: 0 },
          { text: "Je le dépose à l'accueil et je préviens le prestataire par mail.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "likert",
        text: "Un badge d'accès trouvé en zone industrielle est systématiquement remis à la sécurité pour désactivation, pas simplement déposé à l'accueil.",
        tags: ["supports", "badge perdu"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }, 
      {
        type: "choix",
        text: "Les schémas de votre architecture réseau industrielle sont stockés en clair dans un dossier partagé accessible à tous les employés du site.",
        tags: ["supports", "documentation"],
        answers: [
          { text: "C'est pratique pour que tout le monde puisse y accéder en cas de besoin.", score: 0 },
          { text: "Je le signale — les schémas d'architecture sont des informations sensibles qui doivent être protégées.", score: 2 },
          { text: "Je vérifie que l'accès est limité aux personnes qui en ont besoin pour leur travail.", score: 1.5 },
          { text: "Je chiffre les fichiers les plus sensibles dans le dossier partagé.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les supports et accès physiques aux systèmes industriels ne sont pas encore contrôlés avec la rigueur requise", desc: "Laisser une session SCADA ouverte la nuit, autoriser une clé USB fournisseur sans vérification préalable, laisser un visiteur accrédité circuler seul dans la salle de contrôle : le contrôle physique des accès aux systèmes industriels est aussi important que le contrôle logique. Un accès physique non contrôlé contourne toutes les protections réseau." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès physiques dans les situations évidentes mais les situations moins fréquentes créent encore des angles morts", desc: "Vous vérifiez les supports externes et vous contrôlez les accès sur les points de contrôle habituels. Mais le badge trouvé dans le couloir qu'on dépose à l'accueil sans le faire désactiver, la session SCADA ouverte d'un collègue parti, les schémas d'architecture accessibles à tous : ces situations moins fréquentes créent encore des angles morts. L'enjeu est d'étendre votre rigueur à tous les vecteurs d'accès physique." },
          haut: { label: "Réflexes installés", titre: "Vos contrôles physiques sur les accès aux systèmes industriels sont systématiques et couvrent tous les vecteurs", desc: "Vous vérifiez tout support externe avant connexion. Vous accompagnez le visiteur accrédité dans la salle de contrôle. Vous faites désactiver le badge trouvé, pas seulement le déposer. Vous veillez à ce que les sessions SCADA soient verrouillées en fin de poste. Vous signalez les schémas d'architecture accessibles à tous. Cette rigueur sur les accès physiques est ce qui empêche les attaques qui contournent les protections logiques." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Un automate de votre ligne envoie des commandes inhabituelles à intervalles réguliers. Les paramètres de production restent dans les normes. Cela dure depuis ce matin.",
        tags: ["détection", "comportement anormal"],
        answers: [
          { text: "Je surveille — les paramètres sont normaux et ça peut être un comportement légitime que je ne connais pas.", score: 0 },
          { text: "Je signale immédiatement à l'équipe sécurité et à mon responsable — un comportement inhabituel sur un automate est un signal d'alerte.", score: 2 },
          { text: "J'analyse les logs de l'automate pour comprendre l'origine des commandes avant de signaler.", score: 1 },
          { text: "Je contacte le fournisseur de l'automate pour qu'il évalue si c'est normal.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez tout comportement inhabituel d'un équipement industriel, même si les paramètres de production restent dans les normes.",
        tags: ["détection", "anomalies"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "choix",
        text: "Une alarme inhabituelle se déclenche sur votre système SCADA. Elle ne correspond à aucun des codes d'alarme habituels que vous connaissez. L'installation semble fonctionner normalement.",
        tags: ["détection", "alarme SCADA"],
        answers: [
          { text: "Je l'acquitte et je note qu'elle est inconnue — les alarmes inconnues arrivent parfois.", score: 0 },
          { text: "Je ne l'acquitte pas et je contacte immédiatement l'équipe sécurité et le responsable maintenance.", score: 2 },
          { text: "Je cherche dans la documentation ce que signifie ce code avant de décider quoi faire.", score: 1 },
          { text: "Je contacte le fournisseur du SCADA pour identifier l'alarme.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous constatez qu'un paramètre de consigne sur un équipement a changé depuis hier. Vous n'avez pas fait cette modification et votre collègue Serge dit ne pas l'avoir faite non plus.",
        tags: ["détection", "modification paramètre"],
        answers: [
          { text: "Je remets la valeur à ce qu'elle était — c'est probablement une erreur de manipulation.", score: 0 },
          { text: "Je ne touche pas au paramètre et je contacte l'équipe sécurité — une modification non tracée est un signal d'alerte.", score: 2 },
          { text: "Je remets la valeur et je consulte les journaux pour voir qui a fait la modification.", score: 0.5 },
          { text: "Je contacte mon responsable pour qu'il identifie qui a fait la modification.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "choix",
        text: "En arrivant le matin, plusieurs écrans de supervision affichent un message en anglais indiquant que les systèmes sont chiffrés. La production est à l'arrêt.",
        tags: ["détection", "ransomware OT"],
        answers: [
          { text: "Je cherche comment payer la rançon — c'est le moyen le plus rapide de reprendre la production.", score: 0 },
          { text: "Je déconnecte immédiatement tous les équipements encore connectés du réseau et je contacte l'équipe sécurité et la direction.", score: 2 },
          { text: "J'éteins tous les équipements pour éviter la propagation et j'appelle le support informatique.", score: 1.5 },
          { text: "J'essaie de restaurer les systèmes depuis les sauvegardes avant d'appeler à l'aide.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "likert",
        text: "En cas d'incident cyber sur votre système industriel, votre premier réflexe est d'isoler les équipements affectés avant de chercher à comprendre ou à corriger.",
        tags: ["détection", "réflexe incident"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "choix",
        text: "Votre réseau industriel est inhabituellement lent depuis quelques heures. Les équipements fonctionnent mais les temps de réponse sont dégradés.",
        tags: ["détection", "lenteur réseau"],
        answers: [
          { text: "J'attends — les lenteurs réseau arrivent parfois et ça va probablement se régler seul.", score: 0 },
          { text: "Je le signale à l'équipe sécurité et réseau — une lenteur inhabituelle sur un réseau OT peut indiquer un balayage ou une activité malveillante.", score: 2 },
          { text: "Je redémarre les équipements réseau pour voir si ça améliore les performances.", score: 0 },
          { text: "Je contacte notre prestataire réseau pour un diagnostic.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "choix",
        text: "En consultant les logs de votre système SCADA, vous remarquez des connexions à 3h du matin depuis un compte d'opérateur habituel. L'opérateur concerné dit ne pas être intervenu cette nuit.",
        tags: ["détection", "accès hors horaire"],
        answers: [
          { text: "Je lui demande s'il est possible qu'il ait oublié une connexion.", score: 0 },
          { text: "Je contacte immédiatement l'équipe sécurité — une connexion non reconnue sur un système SCADA est un incident majeur.", score: 2 },
          { text: "Je désactive le compte de l'opérateur par précaution et je contacte l'équipe sécurité.", score: 2 },
          { text: "Je surveille les prochaines connexions pour voir si ça se reproduit.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous consultez régulièrement les journaux d'activité de vos systèmes industriels pour détecter des anomalies.",
        tags: ["détection", "logs"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }, 
      {
        type: "choix",
        text: "Depuis trois semaines, la qualité de production se dégrade légèrement mais régulièrement. Aucune alarme ne s'est déclenchée et l'équipe maintenance n'a pas trouvé de cause mécanique.",
        tags: ["détection", "dégradation progressive"],
        answers: [
          { text: "Je continue à chercher une cause mécanique ou process — la cybersécurité n'est pas la première hypothèse.", score: 0.5 },
          { text: "Je remonte la situation à l'équipe sécurité en décrivant la dégradation progressive sans cause identifiée — c'est un pattern caractéristique de certaines attaques.", score: 2 },
          { text: "Je fais appel à un expert process externe pour trouver la cause.", score: 1 },
          { text: "Je contacte le fournisseur des équipements pour un diagnostic complet.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les anomalies sur vos équipements industriels sont encore traitées uniquement comme des problèmes techniques", desc: "Attendre que les paramètres sortent des normes avant de signaler un comportement inhabituel d'un automate, acquitter une alarme SCADA inconnue sans investigation, corriger soi-même une modification de paramètre non tracée : dans les environnements industriels, les anomalies qui 'semblent normales' sont souvent le signe d'une attaque en cours. La subtilité est précisément l'objectif des attaquants OT." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les anomalies clairement suspectes mais les signaux plus subtils ne déclenchent pas encore systématiquement une alerte", desc: "Vous signalez les comportements clairement anormaux — commandes inhabituelles, alarme inconnue, connexion hors horaire. Mais la dégradation progressive de la qualité de production sans cause mécanique identifiée, les lenteurs réseau inhabituelles, un paramètre changé qu'on corrige soi-même sans signaler : ces signaux plus subtils ne déclenchent pas encore systématiquement une investigation cyber." },
          haut: { label: "Réflexes installés", titre: "Tout comportement inhabituel sur vos équipements industriels déclenche un signalement immédiat, quelle que soit son apparente bénignité", desc: "Vous signalez les commandes inhabituelles d'un automate même si les paramètres sont normaux. Vous ne touchez pas au paramètre modifié sans trace et vous contactez la sécurité. Vous remontez la dégradation progressive de qualité sans cause mécanique identifiée comme un possible signal cyber. Vous alertez sur les lenteurs réseau inhabituelles. Cette sensibilité aux signaux faibles — qui suppose de considérer la cyber comme hypothèse en parallèle de la technique — est ce qui permet de détecter les attaques industrielles avant qu'elles n'aient causé de dommages irréversibles." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Pour simplifier les interventions de maintenance, un responsable propose de fusionner les réseaux OT et IT en un seul réseau unifié. Cela faciliterait la supervision depuis n'importe quel poste.",
        tags: ["culture cyber OT", "cloisonnement"],
        answers: [
          { text: "J'accepte — la convergence OT/IT est une tendance inévitable et ça simplifierait vraiment le travail.", score: 0 },
          { text: "Je remonte mes réserves — le cloisonnement OT/IT est un principe de sécurité fondamental et sa suppression expose l'ensemble de l'installation.", score: 2 },
          { text: "J'accepte si des règles de filtrage strictes sont mises en place sur le réseau unifié.", score: 0.5 },
          { text: "Je contacte l'équipe sécurité pour qu'elle évalue les risques avant que la décision soit prise.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "likert",
        text: "Vous défendez les principes de sécurité industrielle — cloisonnement, moindre privilège, traçabilité des accès — même face à des demandes de simplification opérationnelle.",
        tags: ["culture cyber OT", "principes"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouvel opérateur arrive sur votre ligne de production. La formation prévue couvre les aspects process et sécurité physique mais pas la cybersécurité industrielle.",
        tags: ["culture cyber OT", "formation"],
        answers: [
          { text: "Je laisse — la cybersécurité industrielle est un sujet trop technique pour les opérateurs.", score: 0 },
          { text: "Je remonte le manque de formation cybersécurité industrielle pour qu'elle soit ajoutée au parcours d'intégration.", score: 2 },
          { text: "Je lui explique moi-même les règles essentielles — ne pas brancher de USB, ne pas partager ses accès.", score: 1.5 },
          { text: "Je lui remets la politique de cybersécurité industrielle de l'entreprise.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Suite à un incident cyber mineur, votre équipe sécurité demande un arrêt de 24 heures pour sécuriser et auditer les systèmes. Le responsable de production s'y oppose pour des raisons économiques.",
        tags: ["culture cyber OT", "pression production"],
        answers: [
          { text: "Je me range à l'avis du responsable de production — il a la vision économique globale.", score: 0 },
          { text: "Je soutiens la demande de l'équipe sécurité — un audit bâclé après un incident peut laisser une porte ouverte.", score: 2 },
          { text: "Je propose un compromis — audit partiel en 8 heures pour limiter l'impact.", score: 0.5 },
          { text: "Je remonte le dilemme à la direction pour qu'elle arbitre.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Suite à un incident cyber industriel, un REX est organisé. Certains membres de l'équipe préfèrent minimiser l'aspect cyber pour éviter des contraintes supplémentaires.",
        tags: ["culture cyber OT", "REX"],
        answers: [
          { text: "Je m'aligne — alourdir les procédures ne servira qu'à créer des résistances.", score: 0 },
          { text: "Je décris les faits tels qu'ils se sont passés dans le REX, y compris les vecteurs cyber identifiés.", score: 2 },
          { text: "Je mentionne l'aspect cyber dans mes observations personnelles sans le mettre au centre du REX.", score: 1 },
          { text: "J'en parle à l'équipe sécurité en privé pour qu'elle fasse valoir la dimension cyber.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "likert",
        text: "Dans les retours d'expérience sur les incidents industriels, vous incluez les aspects cybersécurité même quand l'équipe préfère se concentrer sur les aspects techniques ou process.",
        tags: ["culture cyber OT", "REX"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Vous observez qu'un collègue utilise régulièrement le même mot de passe pour accéder à plusieurs systèmes de supervision différents. C'est contre la politique de sécurité.",
        tags: ["culture cyber OT", "signalement"],
        answers: [
          { text: "Je ne dis rien — ce n'est pas mon affaire et il connaît les règles.", score: 0 },
          { text: "Je lui en parle en privé pour lui expliquer les risques et lui proposer d'utiliser un gestionnaire de mots de passe.", score: 2 },
          { text: "Je le signale à l'équipe sécurité sans en parler à mon collègue.", score: 1 },
          { text: "Je soulève le sujet en réunion d'équipe sans le cibler nommément.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire intervenant régulièrement sur vos équipements a ses propres pratiques de cybersécurité que vous estimez insuffisantes — il partage ses accès entre collègues.",
        tags: ["culture cyber OT", "tiers"],
        answers: [
          { text: "Je laisse — c'est sa responsabilité et il intervient depuis des années sans problème.", score: 0 },
          { text: "Je remonte la pratique à mon responsable et à l'équipe sécurité pour que le contrat soit revu.", score: 2 },
          { text: "Je lui signale que le partage d'accès est interdit sur notre site.", score: 1.5 },
          { text: "Je contacte le responsable du prestataire pour lui signaler la pratique de ses techniciens.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "likert",
        text: "Vous appliquez les mêmes exigences de cybersécurité aux prestataires intervenant sur vos systèmes industriels qu'à vos propres équipes.",
        tags: ["culture cyber OT", "prestataires"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Vous identifiez une procédure de sécurité industrielle qui pourrait être améliorée pour être à la fois plus sûre et plus pratique. La démarche pour la faire valider est longue.",
        tags: ["culture cyber OT", "amélioration"],
        answers: [
          { text: "Je laisse — la procédure actuelle fonctionne et je ne vais pas créer du travail supplémentaire.", score: 0 },
          { text: "Je la propose formellement même si le processus est long — une amélioration de procédure bénéficie à toute l'équipe.", score: 2 },
          { text: "Je l'applique à mon niveau sans la formaliser.", score: 0.5 },
          { text: "J'en parle à mon responsable pour qu'il porte la proposition à ma place.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité industrielle reste un sujet spécialisé que vous laissez aux experts plutôt qu'une responsabilité partagée", desc: "S'aligner sur le responsable de production qui refuse l'arrêt demandé par l'équipe sécurité, minimiser l'aspect cyber dans un REX, ne pas former le nouvel opérateur sur la cybersécurité : la cybersécurité industrielle est une responsabilité collective. Les opérateurs, les techniciens et les responsables de production sont tous des acteurs de la défense cyber de leur installation." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez à la culture cyber industrielle mais votre influence sur les pratiques collectives reste encore limitée", desc: "Vous incluez la dimension cyber dans les REX. Vous signalez les mauvaises pratiques des prestataires. Mais soutenir l'équipe sécurité face au responsable de production sur l'arrêt de 24h, remonter le manque de formation cyber du nouvel opérateur, défendre le cloisonnement OT/IT face à une demande de simplification : ces comportements de défense active des principes cyber sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous défendez activement la culture cyber industrielle — principes, formation, prestataires, REX", desc: "Vous défendez le cloisonnement OT/IT face aux demandes de simplification. Vous soutenez l'arrêt demandé par la sécurité même face au responsable de production. Vous remontez le manque de formation cyber du nouvel opérateur. Vous signalez les pratiques insuffisantes des prestataires. Vous incluez la dimension cyber dans les REX même quand l'équipe minimise. Cette défense active des principes cyber industriels — qui suppose d'accepter d'être le porteur d'un sujet parfois impopulaire — est ce qui fait qu'une installation maintient son niveau de protection dans le temps." },
        },
      }
    ],

  },

  "manager-culture-cyber": {
    0: [
      {
        type: "choix",
        text: "Votre équipe sait que vous utilisez le même mot de passe depuis deux ans sur plusieurs systèmes. Un collaborateur vous demande si c'est vraiment un problème.",
        tags: ["exemplarité", "manager cyber"],
        answers: [
          { text: "Je lui dis que je maîtrise mon niveau de risque — je suis manager, pas opérateur.", score: 0 },
          { text: "Je reconnais le problème, je change mes mots de passe et j'explique pourquoi c'est important.", score: 2 },
          { text: "Je lui dis qu'il a raison sans changer mes pratiques pour l'instant.", score: 0 },
          { text: "Je lui explique les règles sans mentionner mes propres pratiques.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez accéder à un dossier urgent depuis votre téléphone personnel pendant un déplacement. L'accès depuis des appareils personnels est déconseillé par votre politique de sécurité.",
        tags: ["exemplarité", "règles"],
        answers: [
          { text: "J'accède depuis mon téléphone — c'est urgent et je suis manager, j'assume.", score: 0 },
          { text: "Je trouve une alternative — je contacte un collaborateur qui peut accéder depuis un appareil approuvé.", score: 2 },
          { text: "J'accède depuis mon téléphone mais je le signale à l'équipe sécurité après.", score: 0.5 },
          { text: "Je reporte l'accès à mon retour au bureau.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "likert",
        text: "Vos pratiques de cybersécurité sont identiques à celles que vous attendez de votre équipe — sans exception liée à votre statut de manager.",
        tags: ["exemplarité", "constance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe vient d'être constituée. Certains membres viennent d'autres équipes avec des pratiques cyber très variables. Vous n'avez pas encore posé de cadre explicite.",
        tags: ["exemplarité", "cadre"],
        answers: [
          { text: "Je laisse chacun travailler à sa façon — les règles de l'entreprise s'appliquent, pas besoin de les répéter.", score: 0 },
          { text: "Je prends le temps d'expliquer les attentes cyber de l'équipe dès les premières semaines.", score: 2 },
          { text: "Je corrige les mauvaises pratiques au fur et à mesure que je les observe.", score: 1 },
          { text: "Je leur envoie la politique de sécurité de l'entreprise pour référence.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "choix",
        text: "Un membre de votre équipe propose d'utiliser un outil collaboratif non approuvé pour un projet. Tout le monde est enthousiaste. Vous l'utilisez vous-même à titre personnel.",
        tags: ["exemplarité", "outils"],
        answers: [
          { text: "J'autorise — l'enthousiasme de l'équipe compte et je connais bien l'outil.", score: 0 },
          { text: "Je refuse et je propose de travailler avec la DSI pour trouver un outil approuvé équivalent.", score: 2 },
          { text: "J'autorise pour ce projet en attendant d'avoir un outil approuvé.", score: 0 },
          { text: "Je leur explique pourquoi l'outil n'est pas approuvé et je les aide à faire une demande officielle.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "likert",
        text: "Vous n'autorisez pas dans votre équipe des outils ou pratiques que vous n'appliquez pas vous-même.",
        tags: ["exemplarité", "outils"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous êtes victime d'une tentative de phishing sophistiquée. Vous avez failli cliquer avant de détecter. Vous ressentez de la gêne à en parler à votre équipe.",
        tags: ["exemplarité", "incident personnel"],
        answers: [
          { text: "Je ne le partage pas — un manager ne montre pas ses failles à son équipe.", score: 0 },
          { text: "Je le partage avec mon équipe — décrire comment j'ai presque été piégé et comment je l'ai détecté est plus utile que n'importe quelle formation.", score: 2 },
          { text: "J'en parle uniquement à mes homologues managers.", score: 1 },
          { text: "Je le mentionne de façon générale sans préciser que c'était moi.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "choix",
        text: "Une formation obligatoire sur la cybersécurité est déployée pour tous les collaborateurs. Plusieurs managers de votre niveau la passent en diagonale pour 'cocher la case'.",
        tags: ["exemplarité", "formation"],
        answers: [
          { text: "Je la passe rapidement aussi — mon temps est plus utile ailleurs et je connais déjà les bases.", score: 0 },
          { text: "Je la suis sérieusement — si je demande à mon équipe de le faire, je dois l'avoir fait moi-même.", score: 2 },
          { text: "Je la fais sérieusement mais je ne la mentionne pas à mon équipe.", score: 1 },
          { text: "Je la délègue à mon adjoint et je lui demande de me faire un résumé.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "likert",
        text: "Vous participez aux formations et exercices de cybersécurité avec le même sérieux que vous en attendez de votre équipe.",
        tags: ["exemplarité", "formation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }, 
      {
        type: "choix",
        text: "Votre direction vous demande de déployer rapidement un nouveau processus en contournant la revue sécurité habituelle pour tenir un délai commercial.",
        tags: ["exemplarité", "pression hiérarchique"],
        answers: [
          { text: "J'accepte — la direction a arbitré et le délai commercial est stratégique.", score: 0 },
          { text: "Je maintiens la revue sécurité et j'explique à ma direction les risques d'un déploiement sans elle.", score: 2 },
          { text: "Je fais une revue sécurité allégée pour trouver un compromis.", score: 0.5 },
          { text: "Je demande à la direction de confirmer par écrit qu'elle assume la responsabilité du déploiement sans revue.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité cyber est insuffisante — vous n'appliquez pas vous-même ce que vous demandez à votre équipe", desc: "Utiliser le même mot de passe depuis deux ans, accéder aux systèmes depuis un appareil personnel parce que c'est urgent, passer les formations obligatoires en diagonale : votre équipe observe vos comportements bien plus qu'elle n'écoute vos discours. Un manager dont les pratiques cyber contredisent ses demandes crée une culture où les règles sont perçues comme optionnelles pour ceux qui ont du pouvoir." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité cyber est globalement cohérente mais des exceptions apparaissent sous pression ou par commodité", desc: "Vos pratiques cyber sont généralement alignées sur ce que vous demandez à votre équipe. Mais l'accès urgent depuis un appareil personnel, la formation passée rapidement parce que vous connaissez déjà les bases, le déploiement sans revue sécurité pour tenir un délai commercial : sous pression, des exceptions peuvent apparaître. L'enjeu est de tenir votre exemplarité précisément dans ces moments — c'est là qu'elle compte le plus." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité cyber est absolue — vos pratiques et vos demandes à l'équipe sont parfaitement alignées", desc: "Vous changez vos mots de passe, vous suivez les formations sérieusement, vous partagez vos propres expériences de tentatives de phishing avec votre équipe, vous refusez de déployer sans revue sécurité même quand la direction pousse. Cette exemplarité absolue — qui suppose d'accepter des contraintes que vous pourriez vous épargner en tant que manager — est ce qui donne à vos demandes leur crédibilité." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Votre collaboratrice Anaïs vous dit qu'elle a cliqué sur un lien suspect ce matin. Elle est visiblement stressée à l'idée de vous le dire.",
        tags: ["incidents", "réception"],
        answers: [
          { text: "Je la rassure d'abord, puis je lui demande les détails pour déclencher la procédure.", score: 2 },
          { text: "Je lui demande immédiatement les détails pour évaluer la gravité.", score: 1 },
          { text: "Je lui dis que ça arrive à tout le monde et que ce n'est pas grave.", score: 0.5 },
          { text: "Je la remercie de me l'avoir dit et je la guide vers l'équipe sécurité.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "likert",
        text: "Quand un membre de votre équipe vous signale une erreur ou un incident cyber, votre première réaction est de le remercier de l'avoir signalé avant d'évaluer la situation.",
        tags: ["incidents", "culture sans peur"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Un membre de votre équipe a ouvert une pièce jointe malveillante. L'incident est géré par l'équipe sécurité. Vous devez en parler à votre équipe.",
        tags: ["incidents", "traitement"],
        answers: [
          { text: "Je ne le mentionne pas pour ne pas exposer le collaborateur concerné.", score: 0.5 },
          { text: "Je le partage avec l'équipe de façon anonymisée en insistant sur les enseignements, pas sur qui a fait l'erreur.", score: 2 },
          { text: "Je le mentionne en précisant que tout le monde peut faire cette erreur.", score: 1 },
          { text: "J'attends que l'incident soit complètement résolu avant d'en parler.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Un collaborateur de votre équipe a été victime de phishing trois fois en six mois. Les deux premières fois, vous avez géré sans conséquence. Ça vient de se reproduire.",
        tags: ["incidents", "récidive"],
        answers: [
          { text: "Je le recadre formellement — trois fois c'est une négligence caractérisée.", score: 0 },
          { text: "Je cherche à comprendre pourquoi il est particulièrement vulnérable et je propose un accompagnement adapté.", score: 2 },
          { text: "Je lui demande de faire une formation supplémentaire.", score: 1 },
          { text: "Je l'alerte sur la répétition et je surveillance ses activités plus étroitement.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Suite à un incident dans votre équipe, votre direction vous demande de minimiser l'impact dans le rapport pour ne pas inquiéter les actionnaires.",
        tags: ["incidents", "pression hiérarchique"],
        answers: [
          { text: "J'adapte le rapport — ma direction a sa vision des enjeux de communication.", score: 0 },
          { text: "Je documente l'incident de façon complète et honnête — minimiser un incident cyber peut créer des obligations légales non respectées.", score: 2 },
          { text: "Je rédige deux versions — une complète pour l'équipe sécurité et une allégée pour les actionnaires.", score: 1 },
          { text: "Je contacte le RSSI pour qu'il arbitre entre les exigences de reporting et celles de la direction.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "likert",
        text: "Vos rapports sur les incidents cyber de votre équipe sont complets et honnêtes, y compris quand les faits sont inconfortables pour votre direction.",
        tags: ["incidents", "honnêteté reporting"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Suite à un incident résolu, votre équipe veut 'tourner la page'. Un REX est prévu mais plusieurs collaborateurs estiment qu'il est inutile puisque le problème est réglé.",
        tags: ["incidents", "après l'incident"],
        answers: [
          { text: "Je leur laisse le choix — si l'équipe ne voit pas l'intérêt, forcer un REX sera contre-productif.", score: 0 },
          { text: "Je maintiens le REX et j'explique que ce qui a été résolu aujourd'hui peut être évité demain.", score: 2 },
          { text: "Je fais un REX allégé pour répondre à leurs attentes.", score: 0.5 },
          { text: "Je fais le REX moi-même et je partage les conclusions sans réunion collective.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre collaborateur Olivier a commis une erreur qui a conduit à un incident cyber. Certains collègues lui en veulent. Une culture de blâme commence à s'installer.",
        tags: ["incidents", "protection"],
        answers: [
          { text: "Je laisse la dynamique se réguler naturellement — c'est entre collègues.", score: 0 },
          { text: "J'interviens pour recadrer la dynamique — la culture du blâme empêche les prochains signalements.", score: 2 },
          { text: "J'en parle à Olivier en privé pour lui dire de ne pas se laisser affecter.", score: 0.5 },
          { text: "Je rappelle à l'équipe que tout le monde peut faire des erreurs.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous intervenez activement quand une culture de blâme s'installe suite à un incident cyber, parce qu'elle détruit la culture de signalement.",
        tags: ["incidents", "culture blâme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise a organisé une simulation de phishing. 40% de votre équipe a cliqué. Votre direction s'attendait à moins de 10%.",
        tags: ["incidents", "simulation"],
        answers: [
          { text: "Je me concentre sur les 60% qui n'ont pas cliqué — c'est déjà une bonne base.", score: 0.5 },
          { text: "Je traite le résultat comme une information utile sur les lacunes de l'équipe et je construis un plan d'amélioration concret.", score: 2 },
          { text: "Je cherche à comprendre pourquoi les 40% ont cliqué avant de décider des actions.", score: 1.5 },
          { text: "Je rassure ma direction que les résultats s'amélioreront avec les formations.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les incidents dans votre équipe sont traités comme des fautes plutôt que comme des signaux à exploiter", desc: "Recadrer formellement un collaborateur après un troisième incident de phishing, laisser une culture de blâme s'installer après un incident, minimiser un rapport d'incident sur demande de la direction : ces comportements détruisent la culture de signalement. Un collaborateur qui craint les conséquences d'une erreur choisit le silence — et le silence est ce qui permet aux incidents de se propager." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les incidents sans créer de blâme mais la culture de signalement n'est pas encore activement construite", desc: "Vous gérez les incidents sans créer de blâme et vous remontez les informations honnêtement. Mais partager votre propre expérience d'une tentative de phishing que vous avez presque ratée, intervenir activement quand une culture de blâme s'installe, maintenir les REX quand l'équipe veut tourner la page : ces comportements actifs de construction de la culture de signalement sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous construisez activement la culture de signalement — par l'exemple, la protection et la transmission", desc: "Vous remerciez Anaïs d'avoir signalé avant de lui demander les détails. Vous partagez les incidents de façon anonymisée pour en tirer des enseignements collectifs. Vous protégez Olivier quand la culture du blâme s'installe. Vous maintenez les REX quand l'équipe veut tourner la page. Cette construction active de la culture de signalement — qui suppose d'accepter d'aborder les erreurs comme des opportunités — est ce qui fait qu'une équipe signale naturellement." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Votre équipe n'a eu aucun incident cyber significatif depuis 18 mois. Les sessions de sensibilisation sont de moins en moins suivies. L'équipe pense que 'le sujet est acquis'.",
        tags: ["vigilance collective", "bon bilan"],
        answers: [
          { text: "Je valide — un bon bilan prouve que les pratiques sont intégrées.", score: 0 },
          { text: "Je maintiens le niveau d'exigence et j'explique que l'absence d'incident n'est pas la preuve d'une immunité.", score: 2 },
          { text: "Je réduis la fréquence des sensibilisations mais pas leur contenu.", score: 0.5 },
          { text: "J'organise un exercice de simulation pour tester réellement le niveau de l'équipe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous maintenez les exigences de cybersécurité de votre équipe même après une longue période sans incident.",
        tags: ["vigilance collective", "constance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre RSSI diffuse une alerte sur une nouvelle technique d'attaque qui cible votre secteur. Vous avez une réunion d'équipe dans deux jours.",
        tags: ["vigilance collective", "nouvelles menaces"],
        answers: [
          { text: "Je mentionne l'alerte lors de la réunion — deux jours ne changent pas grand chose.", score: 0.5 },
          { text: "Je la partage avec mon équipe immédiatement en expliquant concrètement ce qu'elle implique pour leurs pratiques.", score: 2 },
          { text: "Je transfère l'alerte par mail à toute l'équipe.", score: 1 },
          { text: "J'attends de voir si la menace se matérialise avant d'en parler.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe traverse une restructuration. L'attention est ailleurs et la vigilance cyber baisse. Ce n'est peut-être pas le bon moment pour insister.",
        tags: ["vigilance collective", "période difficile"],
        answers: [
          { text: "J'attends la fin de la restructuration pour remettre la cybersécurité à l'ordre du jour.", score: 0 },
          { text: "Je maintiens les exigences — les périodes de perturbation sont celles où la vigilance baisse et où les attaquants agissent.", score: 2 },
          { text: "Je maintiens les standards sans en faire un sujet — l'équipe a assez de pression.", score: 1 },
          { text: "Je renforce la vigilance sur les points les plus critiques et je relâche les autres.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau membre rejoint votre équipe. La formation cyber obligatoire de l'entreprise est planifiée dans six semaines. Entre-temps, il accède aux systèmes de l'équipe.",
        tags: ["vigilance collective", "nouveaux arrivants"],
        answers: [
          { text: "J'attends la formation officielle — c'est le processus normal.", score: 0 },
          { text: "Je lui fais un briefing cyber adapté à son rôle avant qu'il accède aux systèmes.", score: 2 },
          { text: "Je lui demande de lire la politique de sécurité avant sa première connexion.", score: 1 },
          { text: "Je limite ses accès aux systèmes non sensibles jusqu'à sa formation.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous assurez vous-même un briefing cyber adapté aux nouveaux membres de votre équipe, sans attendre uniquement la formation officielle.",
        tags: ["vigilance collective", "nouveaux"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Les points sécurité hebdomadaires de votre équipe sont devenus routiniers — mêmes sujets, peu de participation, personne n'apporte de nouveaux éléments.",
        tags: ["vigilance collective", "routine"],
        answers: [
          { text: "Je les maintiens tels quels — la régularité est plus importante que le dynamisme.", score: 0.5 },
          { text: "Je fais évoluer le format — cas réels récents, simulation courte, question ouverte — pour maintenir l'engagement.", score: 2 },
          { text: "Je les réduis à quinzomadaires pour ne pas lasser l'équipe.", score: 0 },
          { text: "Je demande à l'équipe comment elle souhaite faire évoluer ces points.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Vous observez que plusieurs membres de votre équipe ont progressivement adopté des pratiques qui s'écartent des règles — mots de passe partagés, outils non approuvés. Personne n'a signalé.",
        tags: ["vigilance collective", "écarts"],
        answers: [
          { text: "Je corrige les comportements individuels au cas par cas.", score: 1 },
          { text: "Je traite le problème collectivement — ce sont des dérives systémiques, pas des erreurs individuelles.", score: 2 },
          { text: "Je renforce les contrôles pour rendre les contournements plus difficiles.", score: 0.5 },
          { text: "Je remonte la situation à mon RSSI pour qu'il prenne des mesures.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous intervenez sur les dérives cyber collectives de votre équipe en traitant les causes plutôt qu'en corrigeant uniquement les comportements individuels.",
        tags: ["vigilance collective", "dérives"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe vient de suivre une formation de sensibilisation cyber. Vous voulez évaluer si les comportements changent réellement dans les semaines qui suivent.",
        tags: ["vigilance collective", "retour formation"],
        answers: [
          { text: "Je laisse — si la formation était bonne, les comportements changeront naturellement.", score: 0 },
          { text: "Je mets en place des points de suivi réguliers pour observer et consolider les changements de pratiques.", score: 2 },
          { text: "J'envoie un questionnaire de satisfaction à chaud.", score: 0 },
          { text: "Je demande à mon équipe lors de la prochaine réunion si elle a appris quelque chose d'utile.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La vigilance cyber de votre équipe s'érode avec le temps sans que vous interveniez sur les causes", desc: "Valider 18 mois sans incident comme preuve que 'le sujet est acquis', ne pas briefer un nouveau collaborateur en attendant la formation officielle dans six semaines, laisser les dérives collectives se corriger d'elles-mêmes : la vigilance cyber ne se maintient pas seule. Elle se dégrade progressivement sans action continue de la part du manager." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la vigilance cyber mais votre intervention sur les causes des dérives est encore insuffisante", desc: "Vous intervenez quand les dérives sont évidentes. Mais traiter une dérive systémique en cherchant ses causes plutôt qu'en corrigeant les comportements individuels, maintenir les exigences après 18 mois de bon bilan, faire évoluer le format des points sécurité quand ils deviennent routiniers : ces ajustements proactifs de la dynamique collective sont encore insuffisants." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la vigilance collective dans la durée — constance, nouvelles menaces, dérives systémiques", desc: "Vous maintenez les exigences après 18 mois sans incident. Vous partagez les alertes du RSSI immédiatement plutôt qu'en réunion dans deux jours. Vous brieffez les nouveaux avant la formation officielle. Vous traitez les dérives systémiques en cherchant leurs causes. Vous faites évoluer le format des points sécurité pour maintenir l'engagement. Cette attention continue à la dynamique collective est ce qui évite que la culture cyber de votre équipe se dégrade progressivement." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre équipe lance un nouveau projet qui implique le traitement de données clients sensibles. La revue sécurité prend deux semaines. Le délai de lancement est dans une semaine.",
        tags: ["décisions", "projet"],
        answers: [
          { text: "Je lance le projet et je fais la revue sécurité après — on régularisera ensuite.", score: 0 },
          { text: "Je repousse le lancement d'une semaine pour intégrer la revue sécurité.", score: 2 },
          { text: "Je lance une revue sécurité accélérée en parallèle du lancement.", score: 1 },
          { text: "Je contacte le RSSI pour négocier un processus accéléré qui maintient le délai.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous intégrez la revue sécurité dans le processus de lancement de tout projet qui implique des données sensibles, sans la traiter comme une contrainte optionnelle.",
        tags: ["décisions", "sécurité by design"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recrutez un nouveau profil technique très compétent. Lors de l'entretien, il mentionne avoir contourné des politiques de sécurité dans son ancienne entreprise 'pour être plus efficace'. Il est le meilleur candidat sur les autres critères.",
        tags: ["décisions", "recrutement"],
        answers: [
          { text: "Je le recrute — sa compétence technique prime et il s'adaptera à nos pratiques.", score: 0 },
          { text: "Je creuse ce point lors de l'entretien — sa façon de parler de la sécurité est un indicateur important.", score: 2 },
          { text: "Je le recrute et je m'assure qu'il suit la formation sécurité dès son arrivée.", score: 0 },
          { text: "Je le mentionne dans mon évaluation sans que ce soit le critère éliminatoire.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire externe propose une prestation très compétitive mais sa réponse aux questions sur la cybersécurité est évasive. Votre budget est contraint.",
        tags: ["décisions", "prestataire"],
        answers: [
          { text: "J'accepte la prestation — le prix est décisif et je superviserai ses accès.", score: 0 },
          { text: "Je refuse ou je demande des garanties formelles sur la sécurité avant de contractualiser.", score: 2 },
          { text: "Je contractualise en limitant au maximum ses accès aux données sensibles.", score: 1 },
          { text: "Je contacte le RSSI pour qu'il évalue les risques avant de décider.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "choix",
        text: "Votre direction vous demande de réduire de 20% le budget de votre équipe. Parmi les options, vous pouvez couper sur les formations cyber ou sur des projets fonctionnels.",
        tags: ["décisions", "ressources"],
        answers: [
          { text: "Je coupe sur les formations cyber — les équipes connaissent déjà les bases.", score: 0 },
          { text: "Je coupe sur les projets fonctionnels et je préserve les formations cyber.", score: 2 },
          { text: "Je répartis la coupe de façon équilibrée — formations cyber allégées et projets différés.", score: 0.5 },
          { text: "Je remonte à ma direction le risque lié à la réduction des formations cyber.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous défendez les ressources allouées à la sensibilisation et à la formation cyber de votre équipe, même sous pression budgétaire.",
        tags: ["décisions", "budget"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous évaluez annuellement vos collaborateurs. La cybersécurité n'est pas dans les critères officiels d'évaluation. Un collaborateur a eu plusieurs incidents évitables cette année.",
        tags: ["décisions", "évaluation"],
        answers: [
          { text: "Je n'en tiens pas compte — les critères officiels s'imposent et la cybersécurité n'en fait pas partie.", score: 0 },
          { text: "J'inclus la maturité cyber dans mon évaluation et je remonte le besoin d'en faire un critère officiel.", score: 2 },
          { text: "J'en parle lors de l'entretien sans l'intégrer formellement dans l'évaluation.", score: 1 },
          { text: "Je contacte les RH pour savoir si je peux ajouter ce critère.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe est sous forte pression pour livrer un projet. Un collaborateur propose de désactiver temporairement une contrainte de sécurité pour accélérer les tests. C'est une demande technique qui semble raisonnable.",
        tags: ["décisions", "arbitrage"],
        answers: [
          { text: "J'autorise temporairement — c'est une phase de test et la contrainte sera réactivée.", score: 0 },
          { text: "Je refuse — une contrainte de sécurité désactivée 'temporairement' peut rester désactivée après le rush.", score: 2 },
          { text: "J'autorise en documentant la désactivation et en posant une date de réactivation obligatoire.", score: 0.5 },
          { text: "Je contacte le RSSI pour évaluer si la désactivation est acceptable.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous refusez d'autoriser des contournements de sécurité même quand la pression opérationnelle ou commerciale est forte et que la demande semble raisonnable.",
        tags: ["décisions", "pression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }, 
      {
        type: "choix",
        text: "Votre RSSI vous alerte sur une vulnérabilité qui concerne un outil utilisé par votre équipe. La correction nécessite deux jours d'indisponibilité. Votre planning est serré.",
        tags: ["décisions", "RSSI"],
        answers: [
          { text: "Je reporte la correction après la livraison — deux jours d'indisponibilité maintenant sont plus coûteux.", score: 0 },
          { text: "Je planifie la correction dans les délais recommandés par le RSSI, même si ça impacte le planning.", score: 2 },
          { text: "Je négocie avec le RSSI un délai un peu plus long pour minimiser l'impact planning.", score: 1 },
          { text: "Je cherche une mesure compensatoire temporaire pendant la correction.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La cybersécurité est encore traitée comme une contrainte externe plutôt qu'intégrée à vos décisions managériales", desc: "Lancer un projet sans revue sécurité pour tenir un délai, couper le budget formation cyber quand on doit arbitrer, autoriser la désactivation temporaire d'une contrainte de sécurité sous pression : ces décisions signalent à l'équipe que la cybersécurité est une contrainte à contourner quand c'est nécessaire — pas un engagement." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez la cybersécurité dans vos décisions mais certains arbitrages sous pression peuvent encore la reléguer", desc: "Vous intégrez la sécurité dans la plupart de vos décisions. Mais couper sur les formations cyber sous pression budgétaire, reporter une correction de vulnérabilité pour tenir un planning, autoriser un contournement technique temporaire sous pression de livraison : ces arbitrages sous pression peuvent encore reléguer la cybersécurité. L'enjeu est de tenir ces décisions précisément dans les situations difficiles." },
          haut: { label: "Réflexes installés", titre: "La cybersécurité est intégrée à toutes vos décisions managériales, y compris sous pression", desc: "Vous repoussez un lancement plutôt que de lancer sans revue sécurité. Vous préservez le budget formation cyber quand vous devez arbitrer. Vous creusez les réflexes sécurité d'un candidat lors du recrutement. Vous refusez la désactivation temporaire d'une contrainte. Vous planifiez la correction de vulnérabilité dans les délais du RSSI. Cette intégration systématique de la cybersécurité dans vos décisions managériales — y compris quand c'est inconfortable — est ce qui fait que votre équipe comprend que la sécurité n'est pas négociable." },
        },
      }
    ],

  },

  }); // fin Object.assign

  window.ITS_registerTheme("cybersecurite", "Cybersécurité", "🔐", [

    ["phishing-manipulation", "Phishing, arnaques et tentatives de manipulation", "Tous publics",
      "Reconnaître les tentatives, réagir correctement et résister aux prétextes élaborés.",
      { domain: "cyber", chapters: [
        ["Reconnaître les tentatives de manipulation", "Détecter les signaux d'alerte même dans les messages bien construits."],
        ["Réagir correctement face à une tentative", "Signaler immédiatement, déconnecter, changer ses identifiants — sans attendre."],
        ["Résister à la pression et aux prétextes", "Maintenir la vérification indépendante même face à une autorité apparente."],
        ["Adopter les bons réflexes au quotidien", "Discrétion sur les informations indirectes et signalement du doute."],
      ]}
    ],

    ["mots-de-passe-acces", "Mots de passe et authentification", "Tous publics",
      "Créer des mots de passe solides, activer le 2FA et gérer ses accès selon le principe de moindre privilège.",
      { domain: "cyber", chapters: [
        ["Créer et gérer des mots de passe solides", "Unicité, complexité, gestionnaire — sans exception ni contournement."],
        ["Utiliser l'authentification à deux facteurs", "Activer partout, ne jamais partager ses codes, réagir aux notifications non initiées."],
        ["Gérer les accès et les sessions", "Verrouiller, révoquer, appliquer le principe de moindre privilège."],
        ["Réagir à une compromission d'accès", "Signaler vite, déconnecter, coopérer — sans attendre la certitude."],
      ]}
    ],

    ["donnees-confidentialite", "Données et confidentialité", "Tous publics",
      "Identifier, protéger et partager les données professionnelles de façon sécurisée et conforme au RGPD.",
      { domain: "cyber", chapters: [
        ["Identifier et protéger les données sensibles", "Reconnaître les données sensibles et les protéger quel que soit le support."],
        ["Partager les données de façon sécurisée", "Vérifier destinataires, canaux et droits avant tout partage."],
        ["Respecter le RGPD au quotidien", "Consentement, minimisation, durées de conservation — en pratique."],
        ["Gérer les incidents liés aux données", "Signaler vite, coopérer pleinement, ne rien emporter en partant."],
      ]}
    ],

    ["comportements-risque-mobilite", "Comportements à risque en mobilité", "Tous publics",
      "Protéger ses appareils, sécuriser ses connexions et maintenir sa vigilance en déplacement.",
      { domain: "cyber", chapters: [
        ["Sécuriser ses appareils en déplacement", "Chiffrement, verrouillage, supports externes — même vigilance qu'au bureau."],
        ["Utiliser les réseaux en déplacement", "VPN systématique, pas de USB public, interfaces sans fil désactivées."],
        ["Gérer les accès en déplacement", "Verrouiller, ne pas utiliser d'appareils partagés, déconnecter en partant."],
        ["Adopter les bons réflexes partout", "Conversations, documents papier, équipements tiers — vigilance dans tous les contextes."],
      ]}
    ],

    ["signalement-incidents-cyber", "Signaler les incidents de sécurité", "Tous publics",
      "Reconnaître ce qui doit être signalé, surmonter les freins et contribuer à la culture de signalement.",
      { domain: "cyber", chapters: [
        ["Reconnaître ce qui doit être signalé", "Signaler tentatives, anomalies et doutes — pas seulement les incidents avérés."],
        ["Surmonter les freins au signalement", "Signaler même quand c'est inconfortable, même sans retour visible."],
        ["Transmettre un signalement utile", "Faits, contexte complet, preuves conservées — honnêteté sur les incertitudes."],
        ["Contribuer à la culture de signalement", "Encourager, transmettre, questionner l'absence de signalement."],
      ]}
    ],

    ["teletravail-securite-acces", "Télétravail et sécurité des accès", "Tous publics",
      "Sécuriser son environnement domestique, respecter la frontière pro/perso et maintenir les bonnes pratiques dans la durée.",
      { domain: "cyber", chapters: [
        ["Sécuriser son environnement de télétravail", "Configuration réseau, confidentialité physique, matériel dédié."],
        ["Gérer les outils et les accès à distance", "Outils approuvés uniquement, mises à jour, authentification sans contournement."],
        ["Gérer la frontière pro/perso", "Séparation stricte des usages, logiciels, données et notifications."],
        ["Maintenir les bonnes pratiques dans la durée", "Constance, signalement des incidents domestiques, transmission à l'équipe."],
      ]}
    ],

    ["donnees-rgpd-quotidien", "Sécurité des données et RGPD au quotidien", "Tous publics",
      "Comprendre les obligations RGPD, appliquer les droits des personnes et intégrer la protection des données en amont.",
      { domain: "cyber", chapters: [
        ["Comprendre ce que sont les données personnelles", "Catégories, finalités, base légale — au-delà des noms et adresses."],
        ["Appliquer les droits des personnes", "Accès, suppression, opposition — délais légaux et précision dans le traitement."],
        ["Gérer les sous-traitants et les transferts", "DPA, transferts hors UE, incidents prestataires — la chaîne ne s'arrête pas à votre porte."],
        ["Intégrer la protection des données dans ses pratiques", "Privacy by design, AIPD, DPO en amont — pas après l'incident."],
      ]}
    ],

    ["cyber-environnement-industriel", "Réflexes cyber en environnement industriel", "Équipes terrain — Industrie",
      "Comprendre les spécificités OT/IT, contrôler les accès physiques et détecter les anomalies sur les systèmes industriels.",
      { domain: "cyber", chapters: [
        ["Comprendre les spécificités cyber industrielles", "Convergence OT/IT, cloisonnement, disponibilité — les enjeux spécifiques aux réseaux industriels."],
        ["Gérer les supports et les accès physiques", "Vérification des supports, contrôle des accès à la salle de contrôle, sessions SCADA."],
        ["Détecter et réagir aux anomalies", "Signaler tout comportement inhabituel sur les équipements, même sans alarme ni dégradation visible."],
        ["Contribuer à la culture cyber industrielle", "Défendre les principes, former les nouveaux, exiger des prestataires, intégrer la cyber dans les REX."],
      ]}
    ],

    ["manager-culture-cyber", "Manager la culture cyber de son équipe", "Managers",
      "Donner l'exemple, traiter les incidents sans créer de peur et intégrer la cybersécurité dans les décisions managériales.",
      { domain: "cyber", chapters: [
        ["Donner l'exemple et poser le cadre", "Exemplarité absolue — vos pratiques et vos demandes sont parfaitement alignées."],
        ["Traiter les incidents sans créer de peur", "Remercier, anonymiser, protéger — construire la culture de signalement."],
        ["Maintenir la vigilance collective dans la durée", "Constance après un bon bilan, nouveaux arrivants, dérives systémiques."],
        ["Intégrer la cybersécurité dans les décisions", "Projets, recrutement, budget, arbitrages — même sous pression."],
      ]}
    ],

  ]);

})();