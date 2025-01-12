import { NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  mobile: string;
  message: string;
  cfTurnstileResponse: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: body.cfTurnstileResponse,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: "Turnstile verification failed" },
        { status: 400 }
      );
    }

    // Submit to Strapi
    const strapiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/form-submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_POST_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            name: body.name,
            email: body.email,
            mobile: body.mobile,
            message: body.message || null,
            rawData: JSON.stringify({
              cfTurnstileResponse: body.cfTurnstileResponse,
              name: body.name,
              email: body.email,
              mobile: body.mobile,
              message: body.message || null,
            }),
          },
        }),
      }
    );

    if (!strapiResponse.ok) {
      const errorData = await strapiResponse.json();
      console.error("Strapi submission error:", errorData);
      throw new Error("Failed to submit to Strapi");
    }

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
