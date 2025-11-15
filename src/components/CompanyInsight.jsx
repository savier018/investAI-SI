import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Button from "./Button";

const priceHistory = [
  { month: "Ene", price: 210 },
  { month: "Feb", price: 218 },
  { month: "Mar", price: 224 },
  { month: "Abr", price: 235 },
  { month: "May", price: 242 },
  { month: "Jun", price: 255 },
  { month: "Jul", price: 261 },
];

const metrics = [
  { label: "PE Ratio", value: "34.6" },
  { label: "Market Cap", value: "$1.26T" },
  { label: "Volumen", value: "18.4M" },
  { label: "Riesgo", value: "Moderado" },
];

const keyPoints = [
  "Expansión sostenida del margen bruto en los últimos 3 trimestres.",
  "Estrategia agresiva de recompra de acciones impulsa valor para accionistas.",
  "Diversificación hacia soluciones de energía limpia acelera crecimiento.",
];

const riskLevels = [
  { label: "Bajo", color: "bg-green-500" },
  { label: "Medio", color: "bg-amber-400" },
  { label: "Alto", color: "bg-red-500" },
];

const CompanyInsight = ({ onBack }) => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Visión detallada
          </p>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Tesla, Inc.{" "}
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              (TSLA)
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Analizamos la evolución reciente de Tesla combinando datos de
            mercado, métricas financieras clave y señales de riesgo dinámicas.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-md transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-800 dark:text-slate-100">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Precio histórico (12 meses)
              </h2>
              <span className="text-sm font-medium text-blue-500">
                +18.6% YoY
              </span>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceHistory}>
                  <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[200, 270]} />
                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    contentStyle={{ borderRadius: 16, borderColor: "#e2e8f0" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ r: 4, stroke: "#3B82F6", strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Semáforo de riesgo
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Nivel actual evaluado por la IA:{" "}
                <span className="font-semibold text-amber-500">Medio</span>
              </p>
              <div className="mt-5 flex items-center justify-between">
                {riskLevels.map((level) => (
                  <div
                    key={level.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <span
                      className={`h-12 w-12 rounded-full ${level.color} ${
                        level.label === "Medio"
                          ? "ring-4 ring-amber-200"
                          : "opacity-40"
                      }`}
                    />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {level.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Puntos clave
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {keyPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-500"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

export default CompanyInsight;
