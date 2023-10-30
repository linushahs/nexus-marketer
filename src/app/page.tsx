import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Homepage from "@/components/Homepage";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";

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
    </main>
  );
}
