import Reveal from "./reveal";

const mess = ["WhatsApp", "Google Sheets", "Bank transfer", "Screenshots", "DMs", "\u201CWho won?\u201D", "\u201CSend your result\u201D", "\u201CHas everyone paid?\u201D"];
const jobs = ["Player registration", "WhatsApp groups", "Entry payments", "Fixtures", "Match results", "Screenshots", "Standings", "Disputes", "Prize calculations", "Winner payments"];

export default function Problem() {
  return (
    <section className="sec">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="h2">Running a tournament shouldn&apos;t require a spreadsheet.</h2>
          <p className="lead mt-6">Today, an organizer has to juggle all of this by hand, usually across several different apps:</p>
          <p className="mt-4 leading-relaxed text-smoke">{jobs.join(", ")}.</p>
          <p className="mt-8 font-medium text-xl">One competition. One place.</p>
        </Reveal>
        <Reveal>
          <div className="card flex flex-wrap content-start gap-3" aria-hidden="true">
            {mess.map((m) => <span key={m} className="rounded-full border border-stone bg-eggshell px-4 py-2 text-sm text-smoke">{m}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
