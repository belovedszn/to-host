import Reveal from "./reveal";

// Replace these placeholders with real details.
const CONTACT_EMAIL = "hello@your-domain.example";
const socials = [{ label: "X", href: "#" }, { label: "Discord", href: "#" }, { label: "Instagram", href: "#" }];

export default function Contact() {
  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">Have a tournament community?</h2>
          <p className="lead mt-6">We&apos;re looking for gamers, organizers and community admins who regularly run competitions.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-ghost">{CONTACT_EMAIL}</a>
            <a href="#waitlist" className="btn btn-primary">Join the waitlist</a>
          </div>
          <ul className="mt-6 flex gap-5 text-sm text-smoke">
            {socials.map((s) => <li key={s.label}><a href={s.href} className="transition-colors hover:text-ink">{s.label}</a></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
