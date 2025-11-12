import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import Button from "./Button";

const growthData = [
  { month: "Ene", value: 24 },
  { month: "Feb", value: 32 },
  { month: "Mar", value: 29 },
  { month: "Abr", value: 38 },
  { month: "May", value: 42 },
  { month: "Jun", value: 48 },
];

const comparisonData = [
  { name: "Microsoft", rendimiento: 18 },
  { name: "Amazon", rendimiento: 24 },
  { name: "Google", rendimiento: 15 },
];

const riskData = [{ name: "Riesgo", value: 68, fill: "#3B82F6" }];

const Dashboard = ({ onBack }) => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Portafolio Inteligente
          </p>
          <h1 className="text-4xl font-bold text-slate-800">
            Análisis Financiero Personalizado
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Basado en tus intereses y empresas seleccionadas, nuestra IA evalúa
            tendencias de crecimiento, comparativos sectoriales y el nivel de
            riesgo de tu portafolio.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800">
                Curva de crecimiento — Apple
              </h2>
              <span className="text-sm font-medium text-blue-500">
                +12.4% YTD
              </span>
            </div>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid stroke="#E2E8F0" strokeDasharray="4 4" />
                  <XAxis dataKey="month" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ r: 4, stroke: "#3B82F6", strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-slate-800">
              Nivel de riesgo
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Basado en volatilidad y correlaciones actuales.
            </p>
            <div className="mt-6 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  data={riskData}
                  startAngle={180}
                  endAngle={0}
                  innerRadius="60%"
                  outerRadius="95%"
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="value"
                    fill="#22C55E"
                    cornerRadius={30}
                  />
                  <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    fill="#1E293B"
                    style={{ fontSize: "1.875rem", fontWeight: 600 }}
                  >
                    68%
                  </text>
                  <text
                    x="50%"
                    y="68%"
                    textAnchor="middle"
                    fill="#64748B"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Moderado
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800">
                Rendimiento por empresa
              </h2>
              <span className="text-sm font-medium text-slate-500">
                Q2 2025
              </span>
            </div>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <CartesianGrid stroke="#E2E8F0" strokeDasharray="4 4" />
                  <XAxis dataKey="name" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip cursor={{ fill: "rgba(59, 130, 246, 0.08)" }} />
                  <Legend />
                  <Bar
                    dataKey="rendimiento"
                    fill="#22C55E"
                    radius={[12, 12, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-slate-800">
              Próximas oportunidades
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-800">Tesla (TSLA)</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-blue-500">
                  Momentum alcista
                </p>
                <p className="mt-2 text-slate-600">
                  Señal de compra generada por cruces de medias móviles y
                  volumen creciente.
                </p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-800">NVIDIA (NVDA)</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-green-600">
                  Crecimiento IA
                </p>
                <p className="mt-2 text-slate-600">
                  Demanda sostenida para soluciones de computación acelerada.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="px-8" onClick={onBack}>
            Volver al inicio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
