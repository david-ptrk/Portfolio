import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import MessageForm from "./components/MessageForm";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Contact />
        <MessageForm />
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;