import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plan } = body;

    // In a real app, you would integrate with PayPal or Stripe here.
    // For this pivot, we'll simulate a successful checkout session creation.
    
    console.log(`Creating checkout session for plan: ${plan}`);

    return NextResponse.json({
      ok: true,
      url: `/admin?checkout=success&plan=${plan}`,
      message: "Checkout session created successfully."
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
