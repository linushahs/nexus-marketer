import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import Homepage from "@/components/Homepage";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/layout/Navbar";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import WorkProcess from "@/components/WorkProcess";
import TheEndSection from "@/components/TheEndSection";
import OurClients from "@/components/OurClients";
import BlogsNews from "@/components/blogs/Blogs&News";

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
      <OurClients />
      <BlogsNews />
      <Contact />
      <TheEndSection />
      <Footer />
    </main>
  );
}
