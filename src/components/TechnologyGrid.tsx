import { useEffect, useState } from "react";
import technologyData from "../data/technologies.json";
import type { Technology } from "../types/technology";
import StackPanel from "./StackPanel";
import TechnologyCard from "./TechnologyCard";

type TechnologyGridProps = {
  selected: Technology[];
  onAdd?: (technology: Technology) => void;
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
};

function TechnologyGrid({
  selected,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologyGridProps) {
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
          Explore the <span className="brand-gradient-text">Technologies</span>
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
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_230px]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isSelected={selected.some((item) => item.id === technology.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
          <StackPanel
            selected={selected}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      )}
    </section>
  );
}

export default TechnologyGrid;
