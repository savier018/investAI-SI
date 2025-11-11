import Button from "./Button";
import DashboardPreview from "./DashboardPreview";

const HeroSection = () => {
  const userName = "Laura";

  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 py-16 lg:flex-row lg:items-center"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
          <span
            className="h-2 w-2 rounded-full bg-blue-500"
            aria-hidden="true"
          />
          IA especializada en inversión
        </div>
        <h1 className="text-4xl font-bold leading-tight text-slate-800 sm:text-5xl">
          InvesAI: Tu asistente inteligente para decisiones de inversión
        </h1>
        <p className="text-lg text-slate-600">
          Analiza mercados, descubre oportunidades y recibe recomendaciones de
          inversión respaldadas por inteligencia artificial en tiempo real.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button>Comenzar</Button>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:border-blue-200 hover:text-blue-500"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>
      <div className="flex-1 w-full">
        <DashboardPreview userName={userName} />
      </div>
    </section>
  );
};

export default HeroSection;
