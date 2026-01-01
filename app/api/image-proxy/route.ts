import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600; // cache proxy for 1h

function isAllowed(url: URL) {
  // Only allow Google avatar hosts (avoid creating an open proxy)
  return (
    url.hostname.endsWith("googleusercontent.com") ||
    url.hostname.endsWith("ggpht.com") ||
    url.hostname.endsWith("gstatic.com")
  );
}

export async function GET(req: NextRequest) {
  const u = req.nextUrl.searchParams.get("u");
  if (!u) return NextResponse.json({ error: "Missing u" }, { status: 400 });

  let url: URL;
  try {
    url = new URL(u.startsWith("//") ? `https:${u}` : u);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (!isAllowed(url)) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 403 });
  }

  const upstream = await fetch(url.toString(), {
    headers: {
      // some hosts behave better with a UA
      "User-Agent": "Mozilla/5.0",
    },
    cache: "force-cache",
  });

  if (!upstream.ok) {
    return NextResponse.json(
      { error: `Upstream ${upstream.status}` },
      { status: 502 }
    );
  }

  const contentType = upstream.headers.get("content-type") || "image/jpeg";
  const buf = await upstream.arrayBuffer();

  return new NextResponse(buf, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
