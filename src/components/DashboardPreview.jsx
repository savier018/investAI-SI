import Button from "./Button";

const DashboardPreview = ({ userName = "Inversionista" }) => {
  return (
    <div className="animate-fade-in w-full">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Hola, {userName}</p>
            <p className="text-xl font-semibold text-slate-800">
              Resumen diario
            </p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
            IA activa
          </span>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-600">
                Crecimiento proyectado
              </p>
              <span className="text-xs text-slate-500">Últimos 7 días</span>
            </div>
            <svg viewBox="0 0 320 160" className="h-32 w-full overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M16 128 C 64 96, 96 112, 128 88 C 160 64, 192 48, 224 72 C 256 96, 288 64, 304 32 L304 140 L16 140 Z"
                fill="url(#lineGradient)"
                stroke="none"
              />
              <path
                d="M16 128 C 64 96, 96 112, 128 88 C 160 64, 192 48, 224 72 C 256 96, 288 64, 304 32"
                fill="none"
                stroke="#22C55E"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4">
            <div>
              <p className="text-sm text-slate-500">Confianza del modelo</p>
              <p className="text-3xl font-semibold text-slate-800">78%</p>
            </div>
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <span className="text-sm font-medium text-blue-500">Alta</span>
              <span
                className="absolute inset-0 rounded-full border-4 border-blue-500/30"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Recomendación destacada
                </p>
                <h3 className="text-lg font-semibold text-slate-800">
                  Empresa X
                </h3>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                +4.6%
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              La IA identifica un momentum positivo respaldado por fundamentos
              sólidos y sentimiento del mercado favorable.
            </p>
            <Button className="mt-4 w-full">Invertir</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
