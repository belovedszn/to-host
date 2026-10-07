import { Trophy, Search, Swords, ShieldCheck, type LucideIcon } from "lucide-react";

export const navLinks = [
  { label: "Tournaments", href: "#tournaments" },
  { label: "How it works", href: "#how" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const features: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Create", body: "Set the game, format, player limit, entry fee, rules and prize structure.", icon: Trophy },
  { title: "Discover", body: "Find tournaments from organizers and communities beyond your own circle.", icon: Search },
  { title: "Compete", body: "Get your fixtures, opponent, match details and tournament progress in one place.", icon: Swords },
  { title: "Settle", body: "Results are reviewed before the tournament is finalized and prizes are released.", icon: ShieldCheck },
];

export const steps = [
  { n: "01", title: "Create", body: "An organizer creates a tournament and defines the rules." },
  { n: "02", title: "Join", body: "Players discover the competition, register their game ID and secure their place." },
  { n: "03", title: "Play", body: "Players receive their matches and submit the result after each game." },
  { n: "04", title: "Settle", body: "Results are verified, the tournament is concluded and prizes are released according to the tournament rules." },
];

export type Listing = { name: string; platform: string; entry: string; prize: string; filled: number; cap: number; starts: string };
export const listings: Listing[] = [
  { name: "Lagos UCL Cup", platform: "eFootball, Mobile", entry: "₦5,000", prize: "₦150,000", filled: 24, cap: 32, starts: "Starts Saturday" },
  { name: "Weekend FC Cup", platform: "eFootball, PS5", entry: "₦2,000", prize: "₦50,000", filled: 18, cap: 32, starts: "Starts Sunday" },
  { name: "Community Cup", platform: "eFootball, Mobile", entry: "Free", prize: "₦25,000", filled: 12, cap: 16, starts: "Starts Friday" },
];

export const filters = ["Game", "Entry fee", "Prize pool", "Player count", "Format", "Date", "Region"];

export const organizerFeatures = ["Tournament links", "Player registration", "Brackets and fixtures", "Match tracking", "Result management", "Leaderboards", "Tournament history", "Community discovery"];

export const faqs = [
  { q: "What games will be supported?", a: "eFootball is one of the initial games being explored, with support for additional competitive games planned based on community demand and available integrations." },
  { q: "Can I create my own tournament?", a: "That is one of the core capabilities being developed." },
  { q: "Can anyone join a tournament?", a: "Public tournaments are intended to be discoverable through the tournament marketplace. Organizers may also create private competitions." },
  { q: "How will match results be verified?", a: "The initial concept uses player confirmation and evidence-based review. Official game integrations may provide additional automated verification where available." },
  { q: "Will tournaments involve real money?", a: "The platform is being designed to support paid competitions, subject to applicable regulations, payment-provider requirements and the rules of each tournament." },
  { q: "When will it launch?", a: "Join the waitlist to be notified when early access opens." },
];
