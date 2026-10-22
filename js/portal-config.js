// Public Listings Portal origin. Listing JSON and photo URLs use this value.
//
// Local development uses http://localhost:3000 when nothing else is set.
// Production supplies the origin in one of these ways, before this file runs:
// 1. window.DRAKA_PORTAL_ORIGIN = "https://your-portal-origin"
// 2. <meta name="draka-portal-origin" content="https://your-portal-origin">
// The value must be an absolute http or https origin, with no path or credentials.
// If neither is set, replace the fallback at the bottom of this file.
(function () {
  function absoluteOrigin(value) {
    if (typeof value !== "string") return "";
    var origin = value.trim().replace(/\/$/, "");
    if (!/^https?:\/\/[^/?#\s]+(?::\d+)?$/i.test(origin)) return "";
    return origin;
  }

  var configured = absoluteOrigin(window.DRAKA_PORTAL_ORIGIN);
  if (!configured) {
    var meta = document.querySelector('meta[name="draka-portal-origin"]');
    configured = absoluteOrigin(meta && meta.getAttribute("content"));
  }
  window.DRAKA_PORTAL_ORIGIN = configured || "http://localhost:3000";
})();
