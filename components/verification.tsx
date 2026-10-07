import { Users, Image as ImageIcon, Flag } from "lucide-react";
import Reveal from "./reveal";

const items = [
  { title: "Player confirmation", body: "Both players can confirm the submitted result.", icon: Users },
  { title: "Match evidence", body: "Screenshots or other evidence can be submitted when required.", icon: ImageIcon },
  { title: "Dispute review", body: "Conflicting results can be flagged and reviewed before prizes are released.", icon: Flag },
];

export default function Verification() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">Competition only works when the result can be trusted.</h2>
          <p className="lead mt-6">Players shouldn&apos;t have to rely on an organizer manually keeping track of every result. The platform is designed around multiple layers of result verification.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map(({ title, body, icon: Icon }) => (
            <Reveal key={title}>
              <div className="card card-hover h-full">
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-6 font-medium text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-smoke">Where supported, future game integrations can provide additional automated verification.</p>
      </div>
    </section>
  );
}
