import Contact from "./Contact";
import Cta from "./Cta";
import Footer from "./Footer";
import Hero from "./Hero";
import Statistics from "./Stat";
import Testimonials from "./Testimonials";
import Uses from "./Uses";

export default function Header() {
  return (
    <>
      <Hero />
      <Uses />
      <Statistics />
      <Testimonials />
      <Cta />
      <Contact />
      <Footer />
    </>
  );
}
