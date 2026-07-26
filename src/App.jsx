import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Facilities />
      <Gallery />
    </div>
  );
}

export default App;