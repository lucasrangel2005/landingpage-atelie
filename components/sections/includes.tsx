import { site } from "@/lib/site";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9.0 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
      />
    </svg>
  );
}

export function Includes() {
  return (
    <section id="inclui" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-wide text-sage md:text-4xl">
            {site.includes.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur md:p-8">
            <ul className="grid gap-3 text-sm text-ink/80 md:text-base">
              {site.includes.items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-0.5 text-sage">
                    <CheckIcon />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur md:p-8">
            <div className="text-center">
              <h3 className="font-display text-2xl tracking-wide text-sage">
                {site.includes.bonusTitle}
              </h3>
              <p className="mt-2 text-sm text-ink/70 md:text-base">
                {site.includes.bonusSubtitle}
              </p>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-ink/80 md:text-base">
              {site.includes.bonus.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-0.5 text-sage">
                    <CheckIcon />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
