import Reveal from "./reveal";
import { listings, filters } from "@/lib/data";

export default function MarketplacePreview() {
  return (
    <section id="tournaments" className="sec">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">Your next tournament is already out there.</h2>
          <p className="lead mt-6">You won&apos;t have to wait for a friend to organize something. Browse public tournaments and filter by:</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {filters.map((f) => <li key={f} className="rounded-full border border-stone px-3.5 py-1.5 text-sm text-smoke">{f}</li>)}
          </ul>
        </Reveal>
        <p className="mt-12 font-mono text-[13px] text-smoke">Example tournament listings</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {listings.map((l) => (
            <Reveal key={l.name}>
              <article className="card card-hover flex h-full flex-col">
                <h3 className="font-medium text-lg">{l.name}</h3>
                <p className="mt-1 text-sm text-smoke">{l.platform}</p>
                <dl className="mt-6 space-y-1 text-sm">
                  <div className="flex justify-between"><dt className="text-smoke">Entry</dt><dd>{l.entry}</dd></div>
                  <div className="flex justify-between"><dt className="text-smoke">Prize pool</dt><dd>{l.prize}</dd></div>
                </dl>
                <div className="mt-6">
                  <div className="flex justify-between text-sm"><span>{l.filled} / {l.cap} players</span><span className="text-smoke">{l.starts}</span></div>
                  <div className="mt-2 h-1.5 rounded-full bg-stone" role="presentation"><div className="h-full rounded-full bg-violet-spark" style={{ width: `${(l.filled / l.cap) * 100}%` }} /></div>
                </div>
                <span className="btn btn-ghost mt-8" aria-hidden="true">View tournament</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
