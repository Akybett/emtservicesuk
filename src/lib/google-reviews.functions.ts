import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

export type GoogleReviewsData = {
  rating: number | null;
  total: number | null;
  reviews: GoogleReview[];
  error?: string;
};

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsData> => {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!placeId || !apiKey) {
      return { rating: null, total: null, reviews: [], error: "not_configured" };
    }
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
        placeId,
      )}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`;
      const res = await fetch(url);
      const json = (await res.json()) as {
        status: string;
        result?: {
          rating?: number;
          user_ratings_total?: number;
          reviews?: GoogleReview[];
        };
      };
      if (json.status !== "OK" || !json.result) {
        return { rating: null, total: null, reviews: [], error: json.status };
      }
      return {
        rating: json.result.rating ?? null,
        total: json.result.user_ratings_total ?? null,
        reviews: (json.result.reviews ?? []).slice(0, 6).map((r) => ({
          author_name: r.author_name,
          rating: r.rating,
          text: r.text,
          relative_time_description: r.relative_time_description,
          profile_photo_url: r.profile_photo_url,
        })),
      };
    } catch {
      return { rating: null, total: null, reviews: [], error: "fetch_failed" };
    }
  },
);
