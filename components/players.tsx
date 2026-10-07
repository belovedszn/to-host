import Reveal from "./reveal";

export default function Players() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="card !rounded-[24px] !p-8 md:!p-12">
          <h2 className="h2 !max-w-[28ch]">Stop waiting for someone to organize the next match.</h2>
          <p className="lead mt-6">Discover competitions beyond your usual circle, enter tournaments that match your game and skill level, and keep your competitive history in one place.</p>
          <a href="#waitlist" className="btn btn-primary mt-8">Find a tournament</a>
        </Reveal>
      </div>
    </section>
  );
}
