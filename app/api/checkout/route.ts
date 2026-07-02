import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const { package: pkg } = await request.json() as { package: "starter" | "growth" | "elite" };

    let priceId: string | undefined;

    switch (pkg) {
      case "starter":
        priceId = process.env.STRIPE_STARTER_PRICE_ID;
        break;
      case "growth":
        priceId = process.env.STRIPE_GROWTH_PRICE_ID;
        break;
      case "elite":
        priceId = process.env.STRIPE_ELITE_PRICE_ID;
        break;
    }

    if (!priceId) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Missing STRIPE_" + pkg.toUpperCase() + "_PRICE_ID");
      }
      return NextResponse.json(
        { success: false, fallback: true, message: "Stripe not configured. Please contact us." },
        { status: 400 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      success_url: (process.env.NEXT_PUBLIC_BASE_URL || "") + "/thank-you",
      cancel_url: (process.env.NEXT_PUBLIC_BASE_URL || "") + "/", 
    });

    return NextResponse.json({ success: true, sessionId: session.id });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { success: false, fallback: true, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
