import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const description = String(body?.description || "").trim();

    if (!email || !phone) {
      return NextResponse.json({ error: "Email and phone are required." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
      return NextResponse.json(
        { error: "Email service is not configured (missing SMTP env vars)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `New IT Maintenance enquiry${name ? ` — ${name}` : ""}`;
    const text =
      `New enquiry from onmain.co.uk\n\n` +
      `Name: ${name || "(not provided)"}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Description:\n${description || "(not provided)"}\n`;

    await transporter.sendMail({
      from: SMTP_FROM,
      to: "sales@onmain.co.uk",
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
