#!/usr/bin/env node
// Build-time prefetch: writes src/data/google-reviews.json so the data is
// baked into the prerendered HTML. Safe to run without credentials — it
// just writes an empty fallback in that case.
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const OUT = resolve(process.cwd(), "src/data/google-reviews.json");

const fallback = {
  rating: null,
  total: null,
  reviews: [],
  fetchedAt: new Date().toISOString(),
  error: "not_configured",
};

async function main() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  let payload = fallback;

  if (placeId && apiKey) {
    try {
      const url =
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}` +
        `&fields=rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.status === "OK" && json.result) {
        payload = {
          rating: json.result.rating ?? null,
          total: json.result.user_ratings_total ?? null,
          reviews: (json.result.reviews ?? []).slice(0, 6).map((r) => ({
            author_name: r.author_name,
            rating: r.rating,
            text: r.text,
            relative_time_description: r.relative_time_description,
            profile_photo_url: r.profile_photo_url,
          })),
          fetchedAt: new Date().toISOString(),
        };
        console.log(`[prefetch-google-reviews] OK — ${payload.reviews.length} reviews baked in.`);
      } else {
        payload = { ...fallback, error: json.status || "unknown" };
        console.warn(`[prefetch-google-reviews] API status: ${payload.error}`);
      }
    } catch (err) {
      payload = { ...fallback, error: "fetch_failed" };
      console.warn(`[prefetch-google-reviews] fetch failed: ${err?.message}`);
    }
  } else {
    console.warn("[prefetch-google-reviews] GOOGLE_PLACE_ID / GOOGLE_PLACES_API_KEY not set — using fallback.");
  }

  if (!existsSync(dirname(OUT))) mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
  console.log(`[prefetch-google-reviews] wrote ${OUT}`);
}

main().catch((e) => {
  console.error("[prefetch-google-reviews] fatal:", e);
  // Never fail the build over reviews.
  writeFileSync(OUT, JSON.stringify(fallback, null, 2) + "\n");
});
