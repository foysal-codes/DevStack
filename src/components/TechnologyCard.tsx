import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  onAdd?: (technology: Technology) => void;
};

function TechnologyCard({ technology, onAdd }: TechnologyCardProps) {
  return (
    <article className="flex min-h-64 flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <img src={technology.icon} alt="" className="h-7 w-7 object-contain" />
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-semibold text-pink-500">
          {technology.badge}
        </span>
      </div>
      <h3 className="mt-4 text-sm font-bold">{technology.name}</h3>
      <p className="mt-2 min-h-10 text-[10px] leading-4 text-slate-400">
        {technology.description}
      </p>
      <div className="mt-auto flex items-center justify-between gap-2 pt-5 text-[9px] text-slate-500">
        <span className="rounded bg-slate-50 px-2 py-1">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="font-semibold text-slate-700">★ {technology.rating}</span>
      </div>
      <button
        type="button"
        onClick={() => onAdd?.(technology)}
        className="mt-4 w-full rounded-md bg-slate-950 py-2.5 text-[10px] font-semibold text-white transition hover:bg-pink-600"
      >
        Add to Stack
      </button>
    </article>
  );
}

export default TechnologyCard;
