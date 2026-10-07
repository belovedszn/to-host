import Reveal from "./reveal";

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <Reveal>
          <h2 className="h2 !max-w-[26ch]">Built around the way gaming communities already compete.</h2>
          <div className="lead mt-6 space-y-4">
            <p>Competitive gaming communities already run tournaments through WhatsApp groups, Discord servers, spreadsheets, payment screenshots and manual result tracking. It works until the group gets bigger, money is involved, or two players disagree about a score.</p>
            <p>The goal is to bring those pieces together into one platform.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
