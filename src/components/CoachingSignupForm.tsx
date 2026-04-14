"use client";

import { useState } from "react";
import type { CoachingDate } from "@/lib/coaching-dates";

type Props = {
  dates: CoachingDate[];
};

export default function CoachingSignupForm({ dates }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sessionDate, setSessionDate] = useState(dates[0]?.iso ?? "");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/coaching-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, session_date: sessionDate, topic }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("ok");
      setName("");
      setEmail("");
      setTopic("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div className="text-[13px] leading-[1.6] text-foreground">
        <p className="font-bold mb-1.5">You&apos;re on the list.</p>
        <p className="text-muted-foreground">
          We&apos;ll confirm your coaching slot by email. See you Thursday.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label
          htmlFor="cc-name"
          className="block text-[11px] font-bold tracking-[0.06em] uppercase text-muted-foreground mb-1.5"
        >
          Name
        </label>
        <input
          id="cc-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-[13px] text-foreground focus:outline-none focus:ring-2 focus:ring-[#287BE8]"
        />
      </div>

      <div>
        <label
          htmlFor="cc-email"
          className="block text-[11px] font-bold tracking-[0.06em] uppercase text-muted-foreground mb-1.5"
        >
          Email
        </label>
        <input
          id="cc-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-[13px] text-foreground focus:outline-none focus:ring-2 focus:ring-[#287BE8]"
        />
      </div>

      <div>
        <label
          htmlFor="cc-date"
          className="block text-[11px] font-bold tracking-[0.06em] uppercase text-muted-foreground mb-1.5"
        >
          Coaching Date
        </label>
        <select
          id="cc-date"
          required
          value={sessionDate}
          onChange={(e) => setSessionDate(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-[13px] text-foreground focus:outline-none focus:ring-2 focus:ring-[#287BE8]"
        >
          {dates.length === 0 && (
            <option value="">No upcoming sessions available</option>
          )}
          {dates.map((d) => (
            <option key={d.iso} value={d.iso}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="cc-topic"
          className="block text-[11px] font-bold tracking-[0.06em] uppercase text-muted-foreground mb-1.5"
        >
          Topic You Want Coached
        </label>
        <textarea
          id="cc-topic"
          required
          rows={4}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What do you want to work on?"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-[13px] text-foreground focus:outline-none focus:ring-2 focus:ring-[#287BE8]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || dates.length === 0}
        className="mt-1 inline-flex items-center justify-center rounded-md bg-[#04102D] text-white px-4 py-2.5 text-[13px] font-bold tracking-tight hover:bg-[#287BE8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Submit Coaching Request"}
      </button>

      {status === "error" && (
        <p className="text-[12px] text-[#D1458B]">{errorMsg}</p>
      )}

      <p className="text-[11px] text-muted-foreground leading-[1.5] mt-1">
        <span className="text-[#D1458B]">*</span> Coaching is only available for
        members of the paid community.
      </p>
    </form>
  );
}
