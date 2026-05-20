import { About } from "@/components/About";
import { Animals } from "@/components/Animals";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <Header />
      <Hero />
      <About />
      <Services />
      <Animals />
      <Contact />
      <Footer />
    </main>
  );
}
