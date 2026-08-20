import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import HowItWorks from "@/components/HowItWorks";
import PriceCalculator from "@/components/PriceCalculator";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Reveal>
        <ProductGrid />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <PriceCalculator />
      </Reveal>
      <Reveal>
        <QuoteForm />
      </Reveal>
      <Footer />
    </main>
  );
}
