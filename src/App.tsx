import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TechnologyGrid from "./components/TechnologyGrid";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <HeroSection />
        <TechnologyGrid />
      </main>
    </div>
  );
}

export default App;
