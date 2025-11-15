import Button from "./Button";

const historyItems = [
  {
    date: "12 Nov 2025",
    type: "Insight",
    target: "Tesla (TSLA)",
    detail: "Revisión de métricas de crecimiento",
  },
  {
    date: "11 Nov 2025",
    type: "Simulación",
    target: "$12,000 → Microsoft",
    detail: "Estrategia Crecimiento equilibrado, 12 meses",
  },
  {
    date: "10 Nov 2025",
    type: "Comparativa",
    target: "Apple vs. Amazon",
    detail: "Evaluación de rendimiento y volatilidad",
  },
  {
    date: "08 Nov 2025",
    type: "Insight",
    target: "NVIDIA (NVDA)",
    detail: "Momentum IA y recomendación de compra",
  },
];

const InteractionHistory = ({ onBack }) => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-10">
        <header className="space-y-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Historial de actividades
          </p>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Tus últimas interacciones con InvesAI
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Mantén control sobre las empresas consultadas, simulaciones
            efectuadas y comparativas generadas recientemente.
          </p>
        </header>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-700">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-300">
              <tr>
                <th className="px-6 py-3">Fecha</th>
                <th className="px-6 py-3">Acción</th>
                <th className="px-6 py-3">Detalle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {historyItems.map((item) => (
                <tr
                  key={`${item.date}-${item.type}`}
                  className="transition hover:bg-slate-50/60 dark:hover:bg-slate-800/60"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {item.type}
                    </span>{" "}
                    · {item.target}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                    {item.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default InteractionHistory;
