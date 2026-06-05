document.addEventListener("DOMContentLoaded", function () {

  const header = document.getElementById("header");
  if (!header) return;

  header.style.position = "sticky";
  header.style.top = "0";
  header.style.zIndex = "1000";
  header.style.width = "100%";


  const existingFavicon = document.querySelector("link[rel='icon']");
  if (!existingFavicon) {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "favicon.png";
    document.head.appendChild(favicon);
  }

  const currentPage =
    window.location.pathname.split("/").pop() || "home.html";

  function active(page) {
    return currentPage === page ? "active" : "";
  }

  function getToken() {
    return (
      localStorage.getItem("its_token") ||
      localStorage.getItem("token") ||
      localStorage.getItem("auth_token") ||
      ""
    );
  }

  function decodeToken() {
    const token = getToken();

    if (!token || !token.includes(".")) return null;

    try {
      return JSON.parse(
        atob(
          token
            .split(".")[1]
            .replace(/-/g, "+")
            .replace(/_/g, "/")
        )
      );
    } catch (e) {
      return null;
    }
  }

  function getRoleFromUserObject() {
    try {
      const rawUser = localStorage.getItem("its_user");

      if (!rawUser) return null;

      const user = JSON.parse(rawUser);

      return user.role || user.user_role || null;

    } catch (e) {
      return null;
    }
  }

  function getUserRole() {

    const storedRole = localStorage.getItem("its_user_role");

    if (storedRole) return storedRole;

    const objectRole = getRoleFromUserObject();

    if (objectRole) {
      localStorage.setItem("its_user_role", objectRole);
      return objectRole;
    }

    const tokenData = decodeToken();

    if (tokenData?.role) {
      localStorage.setItem("its_user_role", tokenData.role);
      return tokenData.role;
    }

    return "client";
  }

  function isLoggedIn() {
    return (
      localStorage.getItem("its_logged_in") === "true" ||
      !!getToken()
    );
  }

  function isAdmin() {
    return getUserRole() === "admin";
  }

  function isPartner() {
    return getUserRole() === "partner";
  }

  function isClient() {
    return getUserRole() === "client";
  }

  function logout() {

    [
      "its_logged_in",
      "its_user_firstname",
      "its_user_role",
      "its_user",
      "its_token",
      "token",
      "auth_token",
      "its_selected_partner_client_id",
      "its_current_project_id",
      "its_current_ad_id",
      "its_current_project",
      "its_user_id",
      "user_id",
      "id",
      "its_user_email",
      "user_email",
      "email"
    ].forEach(key => localStorage.removeItem(key));

    try {
      Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith("its_project_cache_")) sessionStorage.removeItem(key);
      });
    } catch(e) {}

    window.location.href = "home.html";
  }

  window.itsLogout = logout;


  const API_BASE =
    window.ITS_API_BASE ||
    localStorage.getItem("its_api_base") ||
    (window.location.hostname === "localhost" ||
     window.location.hostname === "127.0.0.1" ||
     window.location.hostname.startsWith("staging.") ||
     window.location.pathname.startsWith("/staging")
      ? "https://into-the-shift-studio-api-staging.osc-fr1.scalingo.io"
      : "https://into-the-shift-studio-api.osc-fr1.scalingo.io");

  function notificationIcon(type) {
    const map = {
      submitted: "🚀",
      published: "🟢",
      unpublished: "🛑",
      ending: "⏳",
      extended: "📅",
      reprogrammed: "🔁",
      links: "🔗",
      pack_low: "🟡",
      pack_critical: "🟠",
      pack_empty: "🔴",
      pack_expiry: "⏰",
      pack_expired: "🔴",
      pack_upgrade_request: "🎟️",
      pack_upgrade_approved: "✅",
      pack_republished: "🟢",
      communication_assets: "📣",
      brand_assets: "🎨"
    };
    return map[type] || "🔔";
  }

  function formatNotificationDate(value) {
    if (!value) return "";
    try {
      return new Date(value).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
    } catch(e) { return ""; }
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }


  function isNotificationUnread(item = {}) {
    if (!item || typeof item !== "object") return true;
    if (item.unread === true) return true;
    if (item.unread === false) return false;
    return !Boolean(item.readAt || item.read_at);
  }

  function normalizeNotificationPath(value = "") {
    const raw = String(value || "").trim();
    if (!raw) return "";
    if (/^https?:\/\//i.test(raw)) {
      try {
        const url = new URL(raw);
        return `${url.pathname || "/"}${url.search || ""}${url.hash || ""}`;
      } catch(e) {
        return "";
      }
    }
    return raw.startsWith("/") ? raw : `/${raw}`;
  }

  function resolveNotificationUrl(item = {}) {
    const type = String(item.type || "").toLowerCase();
    const metadata = item.metadata && typeof item.metadata === "object" ? item.metadata : {};
    const projectId = item.projectId || item.project_id || metadata.projectId || metadata.project_id || "";
    const organizationId = item.organizationId || item.organization_id || metadata.organizationId || metadata.organization_id || "";
    const actionUrl = normalizeNotificationPath(item.actionUrl || item.action_url || "");

    const clientFolderUrl = organizationId ? `/client-folder.html?id=${encodeURIComponent(organizationId)}` : "";
    const projectKitUrl = projectId ? `/kit-communication.html?projectId=${encodeURIComponent(projectId)}` : "";

    const adminProjectTypes = new Set([
      "submitted",
      "transmission",
      "configuration",
      "config_submitted",
      "extended",
      "reprogrammed",
      "unpublished",
      "published"
    ]);

    const clientKitTypes = new Set([
      "published",
      "links",
      "communication_assets",
      "ending"
    ]);

    const clientMesAdTypes = new Set([
      "submitted",
      "transmission",
      "configuration",
      "config_submitted",
      "extended",
      "reprogrammed",
      "unpublished"
    ]);

    // Admin / partner : les éléments de marque déposés ouvrent directement
    // le kit de communication du projet concerné.
    if ((admin || partner) && type === "brand_assets" && projectKitUrl) {
      return projectKitUrl;
    }

    // Admin / partner : toutes les notifications liées à un cockpit client
    // ouvrent le dossier client, jamais Mes AD ni Mon compte client.
    if ((admin || partner) && clientFolderUrl) {
      if (
        type.startsWith("pack_") ||
        adminProjectTypes.has(type) ||
        actionUrl.includes("mes-autodiagnostics.html") ||
        actionUrl.includes("account.html") ||
        actionUrl.includes("admin.html") ||
        actionUrl.includes("client-folder.html") ||
        actionUrl.includes("kit-communication.html")
      ) {
        return clientFolderUrl;
      }
    }

    // Client : la republication après recharge ramène vers Mes Autodiagnostics.
    if (client && type === "pack_republished") {
      return "/mes-autodiagnostics.html";
    }

    // Client : les autres alertes pack renvoient vers l'onglet crédits.
    if (client && type.startsWith("pack_")) {
      return "/account.html?tab=quota";
    }

    // Client : les ressources / publication / liens ouvrent le kit de communication.
    if (client && clientKitTypes.has(type) && projectKitUrl) {
      return projectKitUrl;
    }

    // Client : transmission, prolongation, reprogrammation, fin de campagne
    // restent dans Mes Autodiagnostics.
    if (client && clientMesAdTypes.has(type)) {
      return "/mes-autodiagnostics.html";
    }

    // Si le serveur a fourni une URL explicite, on la respecte en dernier recours,
    // sauf cas admin/partner déjà sécurisés plus haut.
    if (actionUrl) {
      if (actionUrl.includes("kit-communication.html") && projectKitUrl) return projectKitUrl;
      if (actionUrl.includes("client-folder.html") && clientFolderUrl) return clientFolderUrl;
      return actionUrl;
    }

    if ((admin || partner) && clientFolderUrl) return clientFolderUrl;
    if (clientKitTypes.has(type) && projectKitUrl) return projectKitUrl;
    if (clientMesAdTypes.has(type)) return "/mes-autodiagnostics.html";
    return "";
  }

  function prepareNotificationNavigation(item = {}, url = "") {
    const metadata = item.metadata && typeof item.metadata === "object" ? item.metadata : {};
    const projectId = item.projectId || item.project_id || metadata.projectId || metadata.project_id || "";
    const organizationId = item.organizationId || item.organization_id || metadata.organizationId || metadata.organization_id || "";

    try {
      if (projectId) {
        localStorage.setItem("its_current_project_id", String(projectId));
        localStorage.setItem("its_current_ad_id", String(projectId));
      }
      if ((admin || partner) && organizationId && String(url || "").includes("client-folder.html")) {
        localStorage.setItem("its_selected_partner_client_id", String(organizationId));
      }
    } catch(e) {}
  }

  async function markNotificationRead(id) {
    const token = getToken();
    if (!token || !id) return;
    try {
      await fetch(`${API_BASE}/api/notifications/${encodeURIComponent(id)}/read`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch(e) {}
  }

  async function markAllNotificationsRead() {
    const token = getToken();
    if (!token) return;
    try {
      await fetch(`${API_BASE}/api/notifications/read-all`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` }
      });
      await loadHeaderNotifications();
    } catch(e) {}
  }

  function renderHeaderNotifications(items = [], unread = 0) {
    const count = document.getElementById("itsNotifCount");
    const list = document.getElementById("itsNotifList");
    const empty = document.getElementById("itsNotifEmpty");
    if (count) {
      count.textContent = unread > 9 ? "9+" : String(unread || 0);
      count.style.display = unread > 0 ? "inline-flex" : "none";
    }
    if (!list || !empty) return;
    if (!items.length) {
      list.innerHTML = "";
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";
    list.innerHTML = items.map(item => {
      try {
      const url = resolveNotificationUrl(item);
      const unread = isNotificationUnread(item);
      const unreadClass = unread ? " unread" : " treated";
      const treatedLabel = unread ? "Marquer comme traité" : "Notification traitée";
      const projectId = item.projectId || item.project_id || item.metadata?.projectId || item.metadata?.project_id || "";
      const organizationId = item.organizationId || item.organization_id || item.metadata?.organizationId || item.metadata?.organization_id || "";
      return `<div class="its-notif-item${unreadClass}" data-id="${escapeHtml(item.id || "")}" data-url="${escapeHtml(url)}" data-project-id="${escapeHtml(projectId)}" data-organization-id="${escapeHtml(organizationId)}">
        <span class="its-notif-ico">${notificationIcon(item.type)}</span>
        <button class="its-notif-main" type="button" data-action="open">
          <span class="its-notif-copy"><strong>${escapeHtml(item.title || "Notification")}</strong><span>${escapeHtml(item.message || "")}</span><small>${formatNotificationDate(item.createdAt || item.created_at)}</small></span>
        </button>
        <button class="its-notif-check" type="button" data-action="read" aria-label="${treatedLabel}" title="${treatedLabel}">
          <span aria-hidden="true">${unread ? "" : "✓"}</span>
        </button>
      </div>`;
      } catch (errItem) {
        console.error("[ITS NOTIF] rendu ignoré pour une notification", item, errItem);
        return "";
      }
    }).join("");
  }

  async function loadHeaderNotifications() {
    const token = getToken();
    if (!token) return;
    try {
      const res = await fetch(`${API_BASE}/api/notifications?limit=30`, {
        cache: "no-store",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) { console.error("[ITS NOTIF] GET /api/notifications a échoué", res.status); return; }
      const data = await res.json();
      renderHeaderNotifications(data.notifications || [], Number(data.unread || 0));
    } catch(e) { console.error("[ITS NOTIF] chargement/rendu des notifications", e); }
  }

  const logged = isLoggedIn();
  const admin = isAdmin();
  const partner = isPartner();
  const client = isClient();

  const hiddenPages = [
    "partner-folder.html",
    "client-folder.html"
  ];

  if (hiddenPages.includes(currentPage) && !admin && !partner) {
    window.location.href = "dashboard.html";
    return;
  }

  const accueilLink = `<a class="nav-link ${active("home.html")}" href="home.html">Accueil</a>`;

  const dashboardLink = logged
    ? `<a class="nav-link ${active("dashboard.html")}" href="dashboard.html">Mon dashboard</a>`
    : "";

  const mesAdLink = logged && !admin && !partner
    ? `<a class="nav-link ${active("mes-autodiagnostics.html")}" href="mes-autodiagnostics.html">Mes Autodiagnostics</a>`
    : "";

  const adminLink = admin
    ? `<a class="nav-link ${active("admin.html")}" href="admin.html">Cockpit</a>`
    : "";

  const partnerLink =
  partner
    ? `<a class="nav-link ${active("partner.html")}" href="partner.html">Mes clients</a>`
    : "";

  const accountLink = logged
    ? `<a class="nav-link ${active("account.html")}" href="account.html">Mon compte</a>`
    : "";


  const libraryLink = `
    <a class="nav-link ${active("index.html")}" href="index.html">
      Bibliothèque
    </a>
  `;
  const creationLinks = "";

  const authLinks = logged
    ? `
      <a class="nav-link logout-link" href="#"
         onclick="event.preventDefault(); window.itsLogout();">
         Déconnexion
      </a>
    `
    : `
      <a class="nav-link ${active("login.html")}" href="login.html">
        Connexion
      </a>

      <a class="btn-register ${active("register.html")}" href="register.html">
        Première connexion
      </a>
    `;

  const notificationBlock = logged ? `<div class="its-notif-wrap">
    <button id="itsNotifBell" class="its-notif-bell" type="button" aria-label="Notifications" aria-expanded="false">🔔<span id="itsNotifCount" class="its-notif-count" style="display:none">0</span></button>
    <div id="itsNotifPanel" class="its-notif-panel" aria-label="Centre de notifications">
      <div class="its-notif-head"><strong>Notifications</strong><button id="itsNotifReadAll" type="button">Tout marquer comme lu</button></div>
      <div id="itsNotifEmpty" class="its-notif-empty">Aucune notification pour le moment.</div>
      <div id="itsNotifList" class="its-notif-list"></div>
    </div>
  </div>` : ``;

  const homeTarget = "home.html";

  header.innerHTML = `
    <div class="topbar compact-topbar">

      <a class="logo" href="${homeTarget}" aria-label="Into The Shift">
        <img
          src="into-the-shift-logo-light.png"
          alt="Into The Shift"
          class="logo-img"
        >
      </a>

      <nav class="main-nav compact-nav" aria-label="Navigation principale">

        ${accueilLink}

        ${dashboardLink}

        ${mesAdLink}

        ${adminLink}

        ${partnerLink}

        ${libraryLink}

        ${creationLinks}

        ${accountLink}

      </nav>

      <div class="header-spacer" aria-hidden="true"></div>

      <div class="header-actions">
        ${notificationBlock}
        ${authLinks}
      </div>

    </div>
  `;

  const bell = document.getElementById("itsNotifBell");
  const panel = document.getElementById("itsNotifPanel");
  if (bell && panel) {
    bell.addEventListener("click", function(event){
      event.preventDefault();
      event.stopPropagation();
      const open = panel.classList.toggle("open");
      bell.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) loadHeaderNotifications();
    });
    document.addEventListener("click", function(event){
      if (!event.target.closest(".its-notif-wrap")) {
        panel.classList.remove("open");
        bell.setAttribute("aria-expanded", "false");
      }
    });
    document.getElementById("itsNotifReadAll")?.addEventListener("click", function(event){
      event.preventDefault();
      event.stopPropagation();
      markAllNotificationsRead();
    });
    document.getElementById("itsNotifList")?.addEventListener("click", async function(event){
      const item = event.target.closest(".its-notif-item");
      if (!item) return;
      const action = event.target.closest("[data-action]")?.dataset.action || "open";
      if (action === "read") {
        await markNotificationRead(item.dataset.id || "");
        await loadHeaderNotifications();
        return;
      }
      const url = item.dataset.url || "";
      prepareNotificationNavigation({
        projectId: item.dataset.projectId || "",
        organizationId: item.dataset.organizationId || ""
      }, url);
      if (url) window.location.href = url;
      else loadHeaderNotifications();
    });
    loadHeaderNotifications();
    setInterval(loadHeaderNotifications, 15000);
    window.addEventListener("focus", loadHeaderNotifications);
    document.addEventListener("visibilitychange", function(){
      if (!document.hidden) loadHeaderNotifications();
    });
  }
});
