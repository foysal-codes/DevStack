import logoImage from "../assets/logo-text.png";

const footerGroups = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-5 pb-8 pt-16 md:px-8">
      <div className="grid gap-10 border-b border-slate-100 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img src={logoImage} alt="Dev Stack" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-xs leading-6 text-slate-400">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex gap-4 text-xs text-slate-500">
            <a href="#github" className="transition hover:text-pink-500">
              GitHub
            </a>
            <a href="#twitter" className="transition hover:text-pink-500">
              Twitter
            </a>
            <a href="#linkedin" className="transition hover:text-pink-500">
              LinkedIn
            </a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
              {group.title}
            </h2>
            <div className="mt-4 space-y-3 text-xs text-slate-400">
              {group.links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                  className="block transition hover:text-pink-500"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#privacy" className="hover:text-pink-500">
            Privacy
          </a>
          <a href="#terms" className="hover:text-pink-500">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
