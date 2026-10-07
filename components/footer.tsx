import { navLinks } from "@/lib/data";

const links = [...navLinks, { label: "FAQ", href: "#faq" }];

export default function Footer() {
  return (
    <footer className="border-t border-stone py-12">
      <div className="wrap">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <p className="text-lg font-semibold tracking-tight">TO-HOST</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-smoke">
            {links.map((l) => <a key={l.href} href={l.href} className="transition-colors hover:text-ink">{l.label}</a>)}
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
          </nav>
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-smoke">Competition features, payment functionality and prize payouts are subject to applicable rules, regulations and availability.</p>
        <p className="mt-4 text-xs text-smoke">&copy; {new Date().getFullYear()} TO-HOST. All rights reserved.</p>
      </div>
    </footer>
  );
}
