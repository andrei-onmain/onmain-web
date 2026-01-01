import { NextResponse } from "next/server";

export const revalidate = 60; // cache server response for 60s (also reduces API calls)



type OutReview = {
  author: string;
  photo: string | null;
  rating: number | null;
  timeText: string | null;
  text: string;
  authorUrl: string | null;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || process.env.ONMAIN_SYSTEMS_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Missing env. Set GOOGLE_MAPS_API_KEY (or GOOGLE_PLACES_API_KEY) and ONMAIN_SYSTEMS_PLACE_ID." },
      { status: 500 }
    );
  }

  try {
    const fieldMask = "rating,userRatingCount,reviews";
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=${encodeURIComponent(fieldMask)}`;

    const res = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": fieldMask,
      },
      // Next cache handled via revalidate above
    });

    const raw = await res.json().catch(() => null);

    if (!res.ok) {
      const msg =
        raw?.error?.message ||
        raw?.error?.status ||
        raw?.message ||
        "Places API request failed";
      return NextResponse.json({ error: msg, details: raw }, { status: res.status });
    }

    const rating = typeof raw?.rating === "number" ? raw.rating : null;
    const total = typeof raw?.userRatingCount === "number" ? raw.userRatingCount : null;

  const reviews: OutReview[] = Array.isArray(raw?.reviews)
  ? raw.reviews.map((r: any) => {
      const photoUri: string | null = r?.authorAttribution?.photoUri ?? null;

      // Normalize to a full https URL (some APIs return //lh3.googleusercontent.com/...)
      const photo =
        photoUri && photoUri.startsWith("//") ? `https:${photoUri}` : photoUri;

      return {
        author: r?.authorAttribution?.displayName ?? "Google user",
        authorUrl: r?.authorAttribution?.uri ?? null,
        photo,
        rating: typeof r?.rating === "number" ? r.rating : null,
        timeText: r?.relativePublishTimeDescription ?? null,
        text: r?.text?.text ?? "",
      };
    })
  : [];


    return NextResponse.json({ rating, total, reviews });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
