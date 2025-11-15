import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Button from "./Button";

const scenarios = {
  Tesla: {
    data: [
      { period: "0", projection: 0 },
      { period: "3", projection: 6 },
      { period: "6", projection: 11 },
      { period: "9", projection: 15 },
      { period: "12", projection: 20 },
    ],
    gain: "+20.4%",
    risk: "Volatilidad media",
    range: "$12,200 - $14,600",
  },
  Apple: {
    data: [
      { period: "0", projection: 0 },
      { period: "3", projection: 3 },
      { period: "6", projection: 7 },
      { period: "9", projection: 9 },
      { period: "12", projection: 12 },
    ],
    gain: "+12.1%",
    risk: "Estable",
    range: "$11,600 - $12,900",
  },
  Microsoft: {
    data: [
      { period: "0", projection: 0 },
      { period: "3", projection: 4 },
      { period: "6", projection: 9 },
      { period: "9", projection: 13 },
      { period: "12", projection: 17 },
    ],
    gain: "+17.5%",
    risk: "Moderado",
    range: "$11,900 - $13,900",
  },
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const InvestmentSimulator = ({ onBack }) => {
  const [formState, setFormState] = useState({
    amount: "12000",
    company: "Tesla",
    horizon: "12 meses",
    strategy: "Crecimiento equilibrado",
  });
  const [activeScenario, setActiveScenario] = useState(scenarios["Tesla"]);

  const projectedAmount = useMemo(() => {
    const base = Number(formState.amount) || 0;
    const expectedReturn =
      activeScenario.data[activeScenario.data.length - 1].projection;
    return base + (base * expectedReturn) / 100;
  }, [activeScenario, formState.amount]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimulate = (event) => {
    event.preventDefault();
    const scenario = scenarios[formState.company];
    setActiveScenario(scenario);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Simulación inteligente
          </p>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Simulador de inversión personalizada
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Ajusta los parámetros principales y visualiza escenarios generados
            por la IA para evaluar el potencial de crecimiento y el riesgo
            asociado.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[380px,1fr]">
          <form
            onSubmit={handleSimulate}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="amount"
              >
                Monto inicial (USD)
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                min="0"
                value={formState.amount}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="company"
              >
                Empresa
              </label>
              <select
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {Object.keys(scenarios).map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="horizon"
              >
                Horizonte temporal
              </label>
              <select
                id="horizon"
                name="horizon"
                value={formState.horizon}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <option>6 meses</option>
                <option>12 meses</option>
                <option>18 meses</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="strategy"
              >
                Estrategia
              </label>
              <select
                id="strategy"
                name="strategy"
                value={formState.strategy}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <option>Crecimiento equilibrado</option>
                <option>Alto rendimiento</option>
                <option>Riesgo controlado</option>
              </select>
            </div>

            <Button type="submit" className="w-full">
              Simular
            </Button>
          </form>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  Proyección de ganancias
                </h2>
                <span className="text-sm font-medium text-blue-500">
                  {formState.horizon}
                </span>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activeScenario.data}>
                    <defs>
                      <linearGradient
                        id="projection"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3B82F6"
                          stopOpacity={0.35}
                        />
                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
                    <XAxis dataKey="period" stroke="#94a3b8" />
                    <YAxis
                      stroke="#94a3b8"
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, "dataMax + 5"]}
                    />
                    <Tooltip
                      formatter={(value) => `${value}%`}
                      cursor={{ strokeDasharray: "4 4" }}
                      contentStyle={{
                        borderRadius: 16,
                        borderColor: "#e2e8f0",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="projection"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      fill="url(#projection)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-700 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Ganancia estimada
                </p>
                <p className="mt-2 text-xl font-semibold text-green-500">
                  {activeScenario.gain}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Valor proyectado: {formatCurrency(projectedAmount)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-700 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Riesgo
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-800 dark:text-slate-100">
                  {activeScenario.risk}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Estrategia: {formState.strategy}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-700 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Rango probable
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-800 dark:text-slate-100">
                  {activeScenario.range}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Basado en escenarios moderados de mercado.
                </p>
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

export default InvestmentSimulator;
