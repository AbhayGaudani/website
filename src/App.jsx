import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./index.css";
import Program from "./Components/Program";
import P_title from "./Components/P_title";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <P_title subtitle="Our PROGRAM" title="What We Offer" />
      <Program />
      <About />
      <P_title subtitle="Gallery" title="Campus Photos" />
      <Campus />
      <P_title subtitle="TESTIMONIALS" title="What Student Says" />
      <Testimonials />
      <P_title subtitle="Contact Us" title="Get in Touch" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
