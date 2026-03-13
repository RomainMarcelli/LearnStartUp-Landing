function LegalHeader({ active = "mentions", title, subtitle }) {
  const linkClass = (isActive) =>
    `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition sm:text-sm ${
      isActive
        ? "border-[#F56B1E] bg-[#F56B1E]/20 text-[#F56B1E]"
        : "border-white/20 bg-white/5 text-white/85 hover:border-[#F56B1E]/60 hover:text-[#F56B1E]"
    }`;

  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-[#202020]">
      <div className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-[#2E4E9C]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-8 h-44 w-44 rounded-full bg-[#F56B1E]/25 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a href="/" className="shrink-0">
            <img src="/img/LOGO-H.png" alt="HoopSphère" className="h-[50px]" />
          </a>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/"
              className="rounded-full border border-[#F56B1E]/50 px-4 py-2 text-sm font-semibold text-[#F56B1E] transition hover:bg-[#F56B1E]/15"
            >
              ← Retour à l'accueil
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
          {subtitle ? (
            <p className="mt-2 text-sm text-white/65 sm:text-base">{subtitle}</p>
          ) : null}
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          <a href="/mentions-legales" className={linkClass(active === "mentions")}>
            Mentions légales
          </a>
          <a
            href="/politique-confidentialite"
            className={linkClass(active === "confidentialite")}
          >
            Politique confidentialité
          </a>
          <a href="/gestion-cookies" className={linkClass(active === "cookies")}>
            Gestion cookies
          </a>
        </nav>
      </div>
    </header>
  );
}

export default LegalHeader;
