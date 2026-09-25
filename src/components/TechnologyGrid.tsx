import { useEffect, useState } from "react";
import technologyData from "../data/technologies.json";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

type TechnologyGridProps = {
  onAdd?: (technology: Technology) => void;
};

function TechnologyGrid({ onAdd }: TechnologyGridProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTechnologies(technologyData);
    setIsLoading(false);
  }, []);

  return (
    <section id="technologies" className="mx-auto max-w-6xl px-5 pb-28 md:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="mt-2 text-xs text-slate-400">
          Compare practical tools and start shaping your next development stack.
        </p>
      </div>
      {isLoading ? (
        <div className="flex min-h-60 items-center justify-center text-sm text-slate-400">
          <span className="loading loading-spinner loading-md mr-3 text-pink-500" />
          Loading technologies...
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TechnologyGrid;
