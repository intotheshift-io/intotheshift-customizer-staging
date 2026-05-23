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

  ]);

})();