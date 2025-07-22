import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />

      <section id="features">
        <Features />
      </section>

      <section id="highlights">
        <Story />
      </section>
{/* 
      <section id="team">
        <Team />
      </section> */}

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </main>
  );
}

export default App;
