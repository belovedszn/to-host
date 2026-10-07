import Reveal from "./reveal";

function Match({ a, b, sa, sb, label }: { a: string; b: string; sa?: string; sb?: string; label: string }) {
  return (
    <div className="rounded-[10px] bg-warm-taupe p-4">
      <p className="mb-3 text-xs text-smoke">{label}</p>
      <div className="flex items-center justify-between text-sm"><span>{a}</span><span className="tabular-nums">{sa ?? ""}</span></div>
      <div className="mt-2 flex items-center justify-between text-sm"><span>{b}</span><span className="tabular-nums">{sb ?? ""}</span></div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pb-[72px] pt-32 md:pt-40">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,3rem)] leading-[1.08] tracking-[-0.02em]">Competitive gaming, organized.</h1>
          <p className="lead mt-6 text-lg">Create tournaments, find your next opponent, manage every match and settle the results in one place.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#waitlist" className="btn btn-primary">Join the waitlist</a>
            <a href="#how" className="btn btn-ghost">See how it works</a>
          </div>
          <p className="mt-6 text-sm text-smoke">Built for eFootball and competitive gaming communities.</p>
        </Reveal>
        <Reveal>
          <div className="card card-raised !p-5 sm:!p-6" aria-label="Example tournament interface">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-lg">Lagos UCL Cup</p>
                <p className="mt-1 text-sm text-smoke">eFootball, 32 players, ₦5,000 entry</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-smoke">Prize pool</p>
                <p className="font-medium text-lg">₦150,000</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Match label="Round of 16, final" a="Emmanuel" sa="3" b="David" sb="1" />
              <Match label="Quarter-final, upcoming" a="Emmanuel" b="Chris" />
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-stone pt-4">
              <span className="font-mono text-[13px] text-smoke">Example interface</span>
              <span className="btn btn-ghost !py-2" aria-hidden="true">View tournament</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
