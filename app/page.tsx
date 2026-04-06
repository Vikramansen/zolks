import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { Plugins } from "@/components/plugins";
import { Roadmap } from "@/components/roadmap";
import { TerminalDemo } from "@/components/terminal-demo";

export default function Home() {
  return (
    <>
      <div className="paper-grain" aria-hidden />
      <Header />
      <main>
        <Hero />
        <TerminalDemo />
        <Impact />
        <Roadmap />
        <Plugins />
      </main>
      <Footer />
    </>
  );
}
