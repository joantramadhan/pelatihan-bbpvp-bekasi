import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App;