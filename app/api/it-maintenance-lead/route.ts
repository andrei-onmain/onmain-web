// app/api/contact/route.ts  (or app/api/it-maintenance-lead/route.ts)
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, phone, description } = await req.json();

    if (!email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Email and phone are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO || "sales@onmain.co.uk",
      replyTo: email,
      subject: `New website enquiry${name ? ` — ${name}` : ""}`,
      text: [
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
        message:
          "Thank you for contacting us, we will get back to you as soon as possible.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Thank you for contacting us, we will get back to you as soon as possible." },
      { status: 500 }
    );
  }
}
