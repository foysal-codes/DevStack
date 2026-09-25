import type { Technology } from "../types/technology";

type StackPanelProps = {
  selected: Technology[];
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
};

function StackPanel({ selected, onRemove, onRemoveAll }: StackPanelProps) {
  const countLabel = selected.length === 1 ? "Technology" : "Technologies";

  return (
    <aside className="h-fit rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] lg:sticky lg:top-24">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-sm font-bold">Your Stack</h2>
          <p className="mt-1 text-[10px] text-slate-400">
            {selected.length} {countLabel} Selected
          </p>
        </div>
        <span className="rounded-full bg-pink-50 px-2 py-1 text-[9px] font-bold text-pink-500">
          {selected.length}/12
        </span>
      </div>

      {selected.length === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-slate-200 py-8 text-center text-[10px] text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {selected.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-2 rounded-lg border border-slate-100 p-2"
            >
              <img
                src={technology.icon}
                alt=""
                className="h-6 w-6 object-contain"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-bold">
                  {technology.name}
                </p>
                <p className="text-[8px] text-slate-400">
                  {technology.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(technology)}
                aria-label={`Remove ${technology.name}`}
                className="px-1 text-lg leading-none text-slate-300 transition hover:text-pink-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={onRemoveAll}
        className="mt-5 w-full rounded-md border border-pink-200 py-2 text-[10px] font-semibold text-pink-500 transition hover:bg-pink-50"
      >
        Remove All
      </button>
    </aside>
  );
}

export default StackPanel;
