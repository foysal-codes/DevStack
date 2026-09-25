import bannerImage from "../assets/banner-stack.png";

function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 pt-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-28"
    >
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-pink-500">
          Build with intention
        </p>
        <h1 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">
          Build Your Ideal <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
          Explore frontend, backend, database, and tooling options. Compare them
          side by side, then put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#technologies"
            className="brand-gradient rounded-md px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-md border border-slate-200 px-5 py-3 text-xs font-semibold text-slate-600 transition hover:border-pink-300 hover:text-pink-600"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src={bannerImage}
          alt="Colorful development technology stack illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}

export default HeroSection;
