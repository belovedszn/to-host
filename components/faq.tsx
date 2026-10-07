"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./reveal";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="sec">
      <div className="wrap max-w-[860px]">
        <Reveal><h2 className="h2">Questions</h2></Reveal>
        <div className="mt-10 border-t border-stone">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-stone">
                <h3>
                  <button className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-lg" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    {f.q}
                    <Plus size={18} strokeWidth={1.5} className={`shrink-0 text-smoke transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="pb-5 leading-relaxed text-smoke">{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
