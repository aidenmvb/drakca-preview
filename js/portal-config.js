// Public listings portal origin. Listing JSON and photo URLs use this value.
//
// A page served from this computer uses http://127.0.0.1:3000 when nothing else is set.
// A hosted page does not. github.io and drakallc.com never fall back to this Mac.
//
// Set an origin in one of these ways, before this file runs:
// 1. window.DRAKA_PORTAL_ORIGIN = "https://your-portal-origin"
// 2. <meta name="draka-portal-origin" content="https://your-portal-origin">
// The preview site also reads window.DRAKA_PORTAL_PREVIEW_ORIGIN from js/portal-preview-origin.js.
// That value is used only on https://aidenmvb.github.io/drakca-preview/ and is ignored on drakallc.com.
// The value must be an absolute http or https origin, with no path or credentials.
(function () {
  function absoluteOrigin(value) {
    if (typeof value !== "string") return "";
    var origin = value.trim().replace(/\/$/, "");
    if (!/^https?:\/\/[^/?#\s]+(?::\d+)?$/i.test(origin)) return "";
    if (/@/.test(origin)) return "";
    return origin;
  }

  function localPage(hostname) {
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
  }

  function previewPage() {
    return location.hostname === "aidenmvb.github.io" && location.pathname.indexOf("/drakca-preview") === 0;
  }

  var configured = absoluteOrigin(window.DRAKA_PORTAL_ORIGIN);
  if (!configured) {
    var meta = document.querySelector('meta[name="draka-portal-origin"]');
    configured = absoluteOrigin(meta && meta.getAttribute("content"));
  }
  if (!configured && previewPage()) {
    configured = absoluteOrigin(window.DRAKA_PORTAL_PREVIEW_ORIGIN);
  }
  if (!configured && localPage(location.hostname)) {
    configured = "http://127.0.0.1:3000";
  }
  window.DRAKA_PORTAL_ORIGIN = configured || "";
})();
