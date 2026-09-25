import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TechnologyGrid from "./components/TechnologyGrid";
import type { Technology } from "./types/technology";

function App() {
  const [selected, setSelected] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    if (selected.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelected((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technology: Technology) => {
    setSelected((current) =>
      current.filter((item) => item.id !== technology.id),
    );
    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (selected.length === 0) {
      toast.info("Your stack is already empty.");
      return;
    }

    setSelected([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <HeroSection />
        <TechnologyGrid
          selected={selected}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
        <AboutSection />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2600} theme="light" />
    </div>
  );
}

export default App;
