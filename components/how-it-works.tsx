import Reveal from "./reveal";
import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how" className="sec">
      <div className="wrap">
        <Reveal><h2 className="h2">How it works</h2></Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s) => (
            <li key={s.n}>
              <Reveal className="border-t border-stone pt-6">
                <span className="text-sm text-smoke">{s.n}</span>
                <h3 className="mt-3 font-medium text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
