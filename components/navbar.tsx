"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "bg-eggshell/85 backdrop-blur-md border-b border-stone" : "border-b border-transparent"}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-tight">TO-HOST</a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => <a key={l.href} href={l.href} className="text-sm text-smoke transition-colors hover:text-ink">{l.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#waitlist" className="btn btn-ghost">Sign in</a>
          <a href="#waitlist" className="btn btn-primary">Join waitlist</a>
        </div>
        <button className="p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="wrap flex flex-col gap-1 pb-6 md:hidden">
          {navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-stone py-3 text-smoke">{l.label}</a>)}
          <div className="mt-4 flex gap-3">
            <a href="#waitlist" onClick={() => setOpen(false)} className="btn btn-ghost flex-1">Sign in</a>
            <a href="#waitlist" onClick={() => setOpen(false)} className="btn btn-primary flex-1">Join waitlist</a>
          </div>
        </div>
      )}
    </header>
  );
}
