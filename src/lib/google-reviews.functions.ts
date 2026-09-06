import { createServerFn } from "@tanstack/react-start";

export type GoogleReviewPayload = {
  rating: number | null;
  total: number | null;
  reviews: {
    author_name: string;
    rating: number;
    text: string;
    relative_time_description: string;
    profile_photo_url?: string;
  }[];
  fetchedAt: string;
  error?: string;
};

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewPayload> => {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const fallback: GoogleReviewPayload = {
      rating: null,
      total: null,
      reviews: [],
      fetchedAt: new Date().toISOString(),
      error: "not_configured",
    };
    if (!placeId || !apiKey) return fallback;

    try {
      const url =
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}` +
        `&fields=rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`;
      const res = await fetch(url);
      const json = (await res.json()) as {
        status?: string;
        result?: {
          rating?: number;
          user_ratings_total?: number;
          reviews?: Array<{
            author_name: string;
            rating: number;
            text: string;
            relative_time_description: string;
            profile_photo_url?: string;
          }>;
        };
      };
      if (json.status !== "OK" || !json.result) {
        return { ...fallback, error: json.status ?? "unknown" };
      }
      return {
        rating: json.result.rating ?? null,
        total: json.result.user_ratings_total ?? null,
        reviews: (json.result.reviews ?? [])
          .filter(
            (r) =>
              (r.text ?? "").trim().split(/\s+/).filter(Boolean).length >= 5,
          )
          .slice(0, 6)
          .map((r) => ({
          author_name: r.author_name,
          rating: r.rating,
          text: r.text,
          relative_time_description: r.relative_time_description,
          profile_photo_url: r.profile_photo_url,
        })),
        fetchedAt: new Date().toISOString(),
      };
    } catch (err) {
      return {
        ...fallback,
        error: err instanceof Error ? err.message : "fetch_failed",
      };
    }
  },
);
