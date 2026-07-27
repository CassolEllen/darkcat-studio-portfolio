import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Concept from "./components/Concept";
import HandMotif from "./components/HandMotif";
import Discography from "./components/Discography";
import History from "./components/History";
import Tours from "./components/Tours";
import ShowGallery from "./components/ShowGallery";
import Trivia from "./components/Trivia";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="grain min-h-screen bg-ink text-chalk">
      <Nav />
      <Hero />
      <Marquee />
      <Concept />
      <HandMotif />
      <Discography />
      <History />
      <Tours />
      <ShowGallery />
      <Trivia />
      <Footer />
    </div>
  );
}
