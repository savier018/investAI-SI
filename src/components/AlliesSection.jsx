const allies = [
  {
    name: "FinTrust",
    description: "Análisis inteligente para carteras sostenibles",
  },
  {
    name: "CapitalMind",
    description: "Asesoría en inversiones a largo plazo",
  },
  {
    name: "NovaFinance",
    description: "Optimización de portafolios con IA",
  },
  {
    name: "BlueEdge Advisors",
    description: "Especialistas en crecimiento financiero personal",
  },
];

const AlliesSection = () => {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100">
            Aliados Estratégicos
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Expertos y empresas que potencian tus decisiones de inversión
          </p>
        </div>
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {allies.map((ally, index) => (
            <div
              key={ally.name}
              className="group flex h-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg animate-fade-in dark:border-slate-700 dark:bg-slate-900"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex h-16 items-center justify-center rounded-xl bg-slate-100 text-lg font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                {ally.name}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {ally.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {ally.description}
                </p>
              </div>
              <div className="mt-auto">
                <a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors duration-200 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
                  href="#"
                >
                  Conocer más
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 5l5 5-5 5" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlliesSection;
