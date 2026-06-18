import { NextResponse } from "next/server";
import { site } from "@/lib/site.config";

/**
 * Early-inspection / "join the list" submissions.
 *
 * Behaviour:
 *  - Rejects bots via a honeypot field ("company"). Real users never see it.
 *  - If `site.formForwardUrl` is set, the submission is POSTed there as JSON
 *    (works with Formspree, Zapier/Make webhooks, your CRM, etc.).
 *  - If it is blank, the submission is logged on the server and we still return
 *    success — handy for testing before you wire up a real endpoint.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot — a hidden field that humans leave empty. If it's filled, it's a bot.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    // Pretend success so the bot doesn't retry.
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const address = String(data.address ?? "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Please include at least your name and email." },
      { status: 422 }
    );
  }

  const payload = {
    name,
    email,
    address,
    source: "early-inspection-form",
    submittedAt: new Date().toISOString(),
  };

  if (site.formForwardUrl) {
    try {
      const forwarded = await fetch(site.formForwardUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!forwarded.ok) {
        return NextResponse.json(
          { ok: false, error: "We couldn't submit your request. Please try again." },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: "We couldn't submit your request. Please try again." },
        { status: 502 }
      );
    }
  } else {
    // No endpoint configured yet — log so it's visible in Vercel function logs.
    console.log("[early-inspection] new submission:", payload);
  }

  return NextResponse.json({ ok: true });
}
