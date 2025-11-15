import Button from "./Button";

const newsItems = [
  {
    title: "Tesla amplía acuerdos para suministro de baterías",
    sentiment: "Positiva",
    summary:
      "Se proyecta un incremento del 8% en capacidad de producción para 2026.",
  },
  {
    title: "Mercado tecnológico evalúa impacto de tasas de interés",
    sentiment: "Neutral",
    summary:
      "Analistas mantienen recomendaciones pero advierten sobre volatilidad en el corto plazo.",
  },
  {
    title: "Competidor lanza plataforma de conducción autónoma",
    sentiment: "Negativa",
    summary: "La nueva oferta podría presionar márgenes en segmentos premium.",
  },
];

const sentimentStyles = {
  Positiva: {
    badge:
      "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-300",
    dot: "bg-green-500",
  },
  Neutral: {
    badge:
      "bg-slate-100 text-slate-500 dark:bg-slate-700/60 dark:text-slate-300",
    dot: "bg-amber-400",
  },
  Negativa: {
    badge: "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-300",
    dot: "bg-red-500",
  },
};

const NewsSentiment = ({ onBack }) => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-10">
        <header className="space-y-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Pulso informativo
          </p>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Noticias y sentimiento del mercado
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Evaluación rápida del impacto que podrían tener los titulares
            recientes en tu estrategia de inversión.
          </p>
        </header>

        <div className="space-y-5">
          {newsItems.map((item, index) => {
            const style = sentimentStyles[item.sentiment];
            return (
              <article
                key={item.title}
                className="animate-fade-in rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {item.title}
                  </h2>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${style.dot}`}
                      aria-hidden="true"
                    />
                    {item.sentiment}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {item.summary}
                </p>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button className="px-8" onClick={onBack}>
            Volver al dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSentiment;
