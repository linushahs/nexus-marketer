import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage />
      <About />
      <Introduction />
      <Achievements />
      <OurTeam />
      <OurServices />
      <WorkProcess />
      <Contact />
      <Footer />
    </main>
  );
}
