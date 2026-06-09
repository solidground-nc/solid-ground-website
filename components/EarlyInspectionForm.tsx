"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function EarlyInspectionForm({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "",
      address:
        (form.elements.namedItem("address") as HTMLInputElement)?.value ?? "",
      // Honeypot field — bots fill this, humans don't.
      company:
        (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "",
    };

    try {
      const res = await fetch("/api/early-inspection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again, or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="answer-box" role="status">
        <p className="font-display text-xl font-bold text-pine">
          You&apos;re on the list.
        </p>
        <p className="mt-2 text-base text-bedrock/80">
          We&apos;ll be in touch the moment we open for booking — you&apos;ll get
          first dibs on a free inspection. No spam in the meantime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "answer-box"}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="ei-name" className="eyebrow-muted">
            Name
          </label>
          <input
            id="ei-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-bedrock outline-none focus:border-pine"
            placeholder="Your name"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="ei-email" className="eyebrow-muted">
            Email
          </label>
          <input
            id="ei-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-bedrock outline-none focus:border-pine"
            placeholder="you@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ei-address" className="eyebrow-muted">
            Property city or ZIP <span className="normal-case text-stone/70">(optional)</span>
          </label>
          <input
            id="ei-address"
            name="address"
            type="text"
            autoComplete="postal-code"
            className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-bedrock outline-none focus:border-pine"
            placeholder="e.g. Waxhaw, or 28173"
          />
        </div>
      </div>

      {/* Honeypot — visually hidden, ignored by humans. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor="ei-company">Company</label>
        <input id="ei-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary-lg w-full sm:w-auto disabled:opacity-60"
        >
          {status === "submitting" ? "Adding you…" : "Join the early-inspection list →"}
        </button>
        <p className="text-sm text-stone">No obligation. No spam. Just a heads-up at launch.</p>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-clay" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
