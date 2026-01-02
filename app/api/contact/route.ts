import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, phone, description } = await req.json();

    if (!email || !phone) {
      return NextResponse.json(
        { error: "Email and phone are required." },
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
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New website enquiry (${phone})`,
      text: [
        `Name: ${name || "-"}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        ``,
        `Description:`,
        `${description || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to send." },
      { status: 500 }
    );
  }
}
