"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const field =
  "w-full border-2 border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-teal";

/**
 * No server is involved: the form opens the visitor's email app with the
 * message pre-filled, addressed to the foundation.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const subject = String(data.get("subject") || "Message from the website");
    const body = `${data.get("message") ?? ""}\n\n— ${name}\n${data.get("email") ?? ""}\n${data.get("phone") ?? ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-bold">Your name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-bold">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-bold">Phone (optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-bold">I&apos;d like to…</span>
          <select name="subject" className={field} defaultValue="General enquiry">
            <option>General enquiry</option>
            <option>Give / donate</option>
            <option>Volunteer</option>
            <option>Partner with you</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-bold">Message</span>
        <textarea name="message" required rows={6} className={field} />
      </label>
      <button
        type="submit"
        className="cut-a inline-flex items-center gap-3 bg-clay px-7 py-4 font-display font-bold text-white transition-colors hover:bg-[#ef8049] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/60"
      >
        Send Message <span aria-hidden>›</span>
      </button>
      <p role="status" className="text-sm text-ink/60">
        {sent
          ? "Your email app should now be open with your message ready to send. If not, email us directly at " + site.email + "."
          : "Submitting opens your email app with your message ready to send."}
      </p>
    </form>
  );
}
