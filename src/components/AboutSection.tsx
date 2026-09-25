const principles = [
  {
    number: "01",
    title: "Compare with context",
    description:
      "See each tool's role, learning curve, and strengths before you add it.",
  },
  {
    number: "02",
    title: "Keep the stack focused",
    description:
      "Build a shortlist that supports the project instead of collecting options forever.",
  },
  {
    number: "03",
    title: "Choose with confidence",
    description:
      "Use your selected stack as a clear starting point for the next build.",
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-slate-100 bg-slate-50 px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div id="projects" className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-500">
            A better starting point
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A clearer way to choose your tools.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Dev Stack turns a long list of technologies into a focused shortlist
            you can compare and shape around the needs of your next project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.number}>
              <span className="text-xs font-bold text-pink-500">
                {principle.number}
              </span>
              <h3 className="mt-3 text-sm font-bold">{principle.title}</h3>
              <p className="mt-2 max-w-xs text-xs leading-6 text-slate-500">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
