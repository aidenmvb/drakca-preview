// Maps the canonical public listings feed onto the website's property shape.

const portalStateNames = {
  MD: "Maryland",
  VA: "Virginia",
  DC: "Washington, D.C.",
};

function portalOrigin() {
  return String(window.DRAKA_PORTAL_ORIGIN || "").replace(/\/$/, "");
}

function portalAssetUrl(path) {
  const value = String(path || "");
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  const origin = portalOrigin();
  if (!origin) return value;
  return origin + (value.charAt(0) === "/" ? value : "/" + value);
}

function formatPortalRent(value) {
  if (value == null || value === "") return "";
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "";
  const cents = Math.round(amount * 100) % 100;
  const formatted = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents === 0 ? 0 : 2,
    maximumFractionDigits: cents === 0 ? 0 : 2,
  });
  return formatted + "/month";
}

function formatPortalDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ""));
  if (!match) return "";
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function formatPortalCount(value) {
  if (value == null || value === "") return "";
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "";
  return String(amount);
}

function formatPortalScale(value) {
  if (value == null || value === "") return "";
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "";
  return amount.toLocaleString("en-US") + " sq ft";
}

function portalStory(description) {
  const text = String(description || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
  if (!text) return [];
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").replace(/[ \t]{2,}/g, " ").trim())
    .filter(Boolean);
}

function portalUse(listing) {
  if (listing.category === "residential") return "Residential";
  if (listing.category === "commercial") return listing.propertyType === "retail" ? "Retail" : "Commercial";
  return "";
}

function adaptPortalListing(listing) {
  if (!listing || typeof listing.id !== "string" || !listing.id) return null;
  const photos = Array.isArray(listing.photoUrls) ? listing.photoUrls.map(portalAssetUrl).filter(Boolean) : [];
  const story = portalStory(listing.description);
  const property = {
    id: listing.id,
    name: listing.title || "",
    intent: "rent",
    street: listing.streetAddress || "",
    unit: listing.unitNumber || "",
    neighborhood: listing.neighborhood || "",
    state: portalStateNames[listing.state] || listing.state || "",
    price: formatPortalRent(listing.askingRent),
    available: formatPortalDate(listing.availableDate),
    story,
    beds: formatPortalCount(listing.bedrooms),
    baths: formatPortalCount(listing.bathrooms),
    scale: formatPortalScale(listing.squareFeet),
  };
  const use = portalUse(listing);
  if (use) property.type = use;
  if (listing.applicationUrl) property.applyHref = listing.applicationUrl;
  if (story.length) property.summary = story[0];
  if (photos.length) {
    const captions = Array.isArray(listing.photoCaptions) ? listing.photoCaptions : [];
    property.image = photos[0];
    property.alt = captions[0] || property.name;
    property.gallery = photos.slice(1).map((src, index) => ({ src: src, alt: captions[index + 1] || property.name }));
  }
  return property;
}

async function loadPortalListings() {
  const origin = portalOrigin();
  if (!origin) throw new Error("The listings feed is not configured.");
  const response = await fetch(origin + "/api/public/listings", { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error("The listings feed is unavailable.");
  const body = await response.json();
  if (!body || !Array.isArray(body.listings)) throw new Error("The listings feed is unavailable.");
  return body.listings.map(adaptPortalListing).filter(Boolean);
}
