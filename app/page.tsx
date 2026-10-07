import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import MarketplacePreview from "@/components/marketplace-preview";
import Verification from "@/components/verification";
import Payments from "@/components/payments";
import Organizers from "@/components/organizers";
import Players from "@/components/players";
import About from "@/components/about";
import Faq from "@/components/faq";
import Waitlist from "@/components/waitlist";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Problem /><Features /><HowItWorks /><MarketplacePreview />
        <Verification /><Payments /><Organizers /><Players /><About />
        <Faq /><Waitlist /><Contact />
      </main>
      <Footer />
    </>
  );
}
