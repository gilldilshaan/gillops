import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validation aspiring to improve
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Send via Resend if configured
    if (resend) {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || "onboarding@resend.dev",
        to: process.env.CONTACT_EMAIL || "gill0px@gmail.com",
        subject: `GILLOPS Contact – ${name} (${email})`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`,
      });
    } else {
      // Fallback: log for development
      console.log("📨 Contact form submission:", {
        name,
        email,
        company: company || "N/A",
        message: message.slice(0, 500),
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Message received! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
