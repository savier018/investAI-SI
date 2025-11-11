import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="animate-fade-in">
        <HeroSection />
        <section id="about" className="mx-auto mt-8 max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-slate-800">
              Sobre InvesAI
            </h2>
            <p className="mt-4 text-slate-600">
              InvesAI combina análisis cuantitativo, aprendizaje automático y
              datos de mercado en tiempo real para ofrecerte recomendaciones
              accionables. Diseñado para asesores financieros y autodidactas,
              simplifica la toma de decisiones estratégicas.
            </p>
          </div>
        </section>
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-slate-800">Hablemos</h2>
            <p className="mt-4 text-slate-600">
              Escríbenos a{" "}
              <a
                className="font-medium text-blue-500 hover:text-blue-600"
                href="mailto:hola@invesai.com"
              >
                hola@invesai.com
              </a>{" "}
              y recibe una demo personalizada para tu equipo.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
