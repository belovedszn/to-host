import { Check } from "lucide-react";
import Reveal from "./reveal";
import { organizerFeatures } from "@/lib/data";

export default function Organizers() {
  return (
    <section className="sec">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="h2">Bring your community with you.</h2>
          <p className="lead mt-6">Whether you&apos;re running a tournament for 8 friends or building a competitive community around a game, the platform gives you one place to organize the competition.</p>
          <a href="#waitlist" className="btn btn-primary mt-8">Join the organizer waitlist</a>
        </Reveal>
        <Reveal>
          <ul className="card grid gap-4 sm:grid-cols-2">
            {organizerFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm"><Check size={16} strokeWidth={1.5} className="shrink-0 text-smoke" aria-hidden="true" />{f}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
