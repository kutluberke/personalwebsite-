"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "kberkeyldrm@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend wired up yet — this opens a prefilled mailto: draft as an
  // interim path until a server-side email service (Resend) is added.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Portfolio contact from ${name.trim()}`;
    const body = `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-sm text-muted-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="rounded-md border border-border bg-surface px-4 py-2.5 text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-sm text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-md border border-border bg-surface px-4 py-2.5 text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-sm text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="resize-none rounded-md border border-border bg-surface px-4 py-2.5 text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
      >
        Send message
      </button>
    </form>
  );
}
