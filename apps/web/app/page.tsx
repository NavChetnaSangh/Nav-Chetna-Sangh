import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Events from "@/components/sections/Events";
import Celebrations from "@/components/sections/Celebrations";
import Founder from "@/components/sections/Founder";
import Team from "@/components/sections/Team";
import Donate from "@/components/sections/Donate";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Events />
      <Celebrations />
      <Founder />
      <Team />
      <Donate />
      <Footer />
    </main>
  );
}
