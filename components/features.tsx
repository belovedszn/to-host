import Reveal from "./reveal";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal><h2 className="h2">Everything around the match.</h2></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, body, icon: Icon }) => (
            <Reveal key={title}>
              <div className="card card-hover h-full">
                <Icon size={22} strokeWidth={1.5} className="text-ink" aria-hidden="true" />
                <h3 className="mt-6 font-medium text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
