import * as C from "@/components";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <main>
      <C.Navbar />
      <C.Homepage />
      <C.About />
      <C.Introduction />
      <C.Achievements />
      <C.OurTeam />
      <C.OurServices />
      <C.WorkProcess />
      <C.OurClients />
      <C.BlogsNews />
      <C.Contact />
      <C.TheEndSection />
      <C.Footer />
    </main>
  );
}
