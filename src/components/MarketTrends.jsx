import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Button from "./Button";

const topWinners = [
  {
    symbol: "NVDA",
    name: "NVIDIA",
    change: "+6.8%",
    data: [12, 14, 15, 19, 20, 23, 24],
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    change: "+5.1%",
    data: [9, 10, 11, 13, 16, 17, 18],
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    change: "+4.5%",
    data: [15, 17, 18, 20, 22, 23, 24],
  },
];

const mostVolatile = [
  {
    symbol: "COIN",
    name: "Coinbase",
    volatility: "Alta",
    data: [14, 19, 13, 21, 18, 24, 20],
  },
  {
    symbol: "PLTR",
    name: "Palantir",
    volatility: "Media",
    data: [10, 11, 13, 12, 15, 17, 16],
  },
  {
    symbol: "SNOW",
    name: "Snowflake",
    volatility: "Alta",
    data: [7, 9, 11, 8, 12, 13, 14],
  },
];

const sectorGrowth = [
  { sector: "Inteligencia Artificial", growth: 18 },
  { sector: "Energías limpias", growth: 12 },
  { sector: "Ciberseguridad", growth: 9 },
];

const sparklineData = (values) =>
  values.map((value, index) => ({ index, value }));

const MarketTrends = ({ onBack }) => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-10">
        <header className="space-y-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Sensores de mercado
          </p>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Tendencias destacadas de la semana
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Descubre qué empresas lideran el crecimiento, cuáles presentan mayor
            volatilidad y los sectores que concentran el interés del mercado.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Top ganadores
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Mayor rendimiento semanal dentro del portafolio monitoreado.
            </p>
            <ul className="mt-6 space-y-4">
              {topWinners.map((winner) => (
                <li
                  key={winner.symbol}
                  className="flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {winner.name}
                      <span className="ml-2 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-500 dark:bg-blue-500/10">
                        {winner.symbol}
                      </span>
                    </p>
                    <p className="text-xs text-green-500">{winner.change}</p>
                  </div>
                  <div className="h-12 w-28">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData(winner.data)}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#22C55E"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Acciones más volátiles
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Observa dónde se concentran los mayores cambios porcentuales.
            </p>
            <ul className="mt-6 space-y-4">
              {mostVolatile.map((stock) => (
                <li
                  key={stock.symbol}
                  className="flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {stock.name}
                      <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {stock.symbol}
                      </span>
                    </p>
                    <p className="text-xs text-amber-500">{stock.volatility}</p>
                  </div>
                  <div className="h-12 w-28">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData(stock.data)}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#f97316"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Sectores en crecimiento
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Variación promedio de capitalización en los últimos 30 días.
            </p>
            <div className="mt-5 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sectorGrowth}>
                  <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
                  <XAxis
                    dataKey="sector"
                    stroke="#94a3b8"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    formatter={(value) => `${value}%`}
                    cursor={{ fill: "rgba(59, 130, 246, 0.08)" }}
                    contentStyle={{ borderRadius: 16, borderColor: "#e2e8f0" }}
                  />
                  <Bar
                    dataKey="growth"
                    fill="#3B82F6"
                    radius={[12, 12, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
              +4.2% de crecimiento promedio semanal en inteligencia artificial.
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

export default MarketTrends;
