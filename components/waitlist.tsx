"use client";
import { useState } from "react";
import Reveal from "./reveal";

export default function Waitlist() {
  const [done, setDone] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send the email to your backend or a form service. Nothing is stored yet.
    setDone(true);
  }
  return (
    <section id="waitlist" className="sec">
      <div className="wrap">
        <Reveal className="card !rounded-[24px] !p-8 md:!p-14">
          <h2 className="h2 !max-w-[24ch]">Be there when the first tournaments open.</h2>
          <p className="lead mt-6">We&apos;re testing the idea with competitive gaming communities before building the full platform.</p>
          {done ? (
            <p role="status" className="mt-8 text-2xl">You&apos;re on the list.</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" type="email" required autoComplete="email" placeholder="Email address" className="min-w-0 flex-1 rounded-[4px] border border-ash bg-eggshell px-5 py-3 text-sm text-ink placeholder:text-smoke" />
              <button type="submit" className="btn btn-primary !py-3">Join the waitlist</button>
            </form>
          )}
          <p className="mt-4 text-sm text-smoke">No spam. Just launch updates and early access.</p>
        </Reveal>
      </div>
    </section>
  );
}
