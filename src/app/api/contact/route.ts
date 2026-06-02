import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  interest?: string;
  aum?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    // Basic validation
    const required = ["name", "email", "company", "jobTitle", "message"] as const;
    for (const key of required) {
      if (!body[key] || String(body[key]).trim().length === 0) {
        return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 });
      }
    }
    if (!isValidEmail(String(body.email))) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL!;
    if (!process.env.RESEND_API_KEY || !to || !from) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const subject = `Schedule Demo: ${body.name} (${body.company})`;
    const text = [
      "New demo request received:",
      "",
      `Name: ${body.name}`,
      `Work Email: ${body.email}`,
      `Company: ${body.company}`,
      `Job Title: ${body.jobTitle}`,
      `Interest: ${body.interest || "(not provided)"}`,
      `AUM: ${body.aum || "(not provided)"}`,
      "",
      "Message:",
      String(body.message),
    ].join("\n");

    const result = await resend.emails.send({
      from,
      to,
      subject,
      // Important: set reply_to so you can reply directly to the requester
      replyTo: String(body.email),
      text,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
