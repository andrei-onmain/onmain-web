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
    const issueType = String(body?.issueType || "").trim();
    const description = String(body?.description || "").trim();

    if (!email || !phone || !issueType) {
      return NextResponse.json(
        { error: "Email, phone and issue type are required." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } = process.env;

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

    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO || "sales@onmain.co.uk",
      replyTo: email,
      subject: `New website enquiry — ${issueType}${name ? ` — ${name}` : ""}`,
      text: [
        `Issue type: ${issueType}`,
        `Name: ${name || "-"}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        ``,
        `Description:`,
        `${description || "-"}`,
      ].join("\n"),
    });


    return NextResponse.json(
      {
        ok: true,
        message: "Thank you for contacting us, we will get back to you as soon as possible.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("CONTACT_API_ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Thank you for contacting us, we will get back to you as soon as possible." },
      { status: 500 }
    );
  }
}
