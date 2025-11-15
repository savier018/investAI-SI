import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import Button from "./Button";

const companyStats = {
  Tesla: {
    performance: 18.4,
    volatility: "Alta",
    dividends: "No",
    health: 82,
  },
  Apple: {
    performance: 12.6,
    volatility: "Media",
    dividends: "Sí (0.5%)",
    health: 90,
  },
  Microsoft: {
    performance: 15.9,
    volatility: "Media",
    dividends: "Sí (0.8%)",
    health: 88,
  },
  Amazon: {
    performance: 14.2,
    volatility: "Media/Alta",
    dividends: "No",
    health: 80,
  },
};

const CompanyComparator = ({ onBack }) => {
  const [selection, setSelection] = useState({
    companyA: "Tesla",
    companyB: "Apple",
  });

  const statsA = companyStats[selection.companyA];
  const statsB = companyStats[selection.companyB];

  const chartData = useMemo(
    () => [
      { name: selection.companyA, rendimiento: statsA.performance },
      { name: selection.companyB, rendimiento: statsB.performance },
    ],
    [selection, statsA.performance, statsB.performance]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelection((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-10">
        <header className="space-y-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Comparativa estratégica
          </p>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Compara empresas clave de tu portafolio
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Ajusta las compañías a comparar para evaluar rendimiento,
            estabilidad y salud financiera según los datos modelados por
            InvesAI.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
          <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="companyA"
              >
                Empresa A
              </label>
              <select
                id="companyA"
                name="companyA"
                value={selection.companyA}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {Object.keys(companyStats).map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="companyB"
              >
                Empresa B
              </label>
              <select
                id="companyB"
                name="companyB"
                value={selection.companyB}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {Object.keys(companyStats).map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
            <p className="rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
              Consejo de la IA: combina compañías de alta innovación con
              perfiles defensivos para equilibrar riesgo.
            </p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-700">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                  <tr>
                    <th className="px-6 py-3">Métrica</th>
                    <th className="px-6 py-3">{selection.companyA}</th>
                    <th className="px-6 py-3">{selection.companyB}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 dark:divide-slate-800 dark:text-slate-300">
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">
                      Rendimiento 12m
                    </td>
                    <td className="px-6 py-4">{statsA.performance}%</td>
                    <td className="px-6 py-4">{statsB.performance}%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">
                      Volatilidad
                    </td>
                    <td className="px-6 py-4">{statsA.volatility}</td>
                    <td className="px-6 py-4">{statsB.volatility}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">
                      Dividendos
                    </td>
                    <td className="px-6 py-4">{statsA.dividends}</td>
                    <td className="px-6 py-4">{statsB.dividends}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">
                      Health score
                    </td>
                    <td className="px-6 py-4">{statsA.health}/100</td>
                    <td className="px-6 py-4">{statsB.health}/100</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  Rendimiento comparado (12 meses)
                </h2>
                <span className="text-sm font-medium text-blue-500">
                  Diferencia:{" "}
                  {(statsA.performance - statsB.performance).toFixed(1)}%
                </span>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis
                      stroke="#94a3b8"
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      formatter={(value) => `${value}%`}
                      cursor={{ fill: "rgba(34, 197, 94, 0.08)" }}
                      contentStyle={{
                        borderRadius: 16,
                        borderColor: "#e2e8f0",
                      }}
                    />
                    <Bar dataKey="rendimiento" radius={[12, 12, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${entry.name}`}
                          fill={index === 0 ? "#3B82F6" : "#22C55E"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="px-8" onClick={onBack}>
                Volver al dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyComparator;
