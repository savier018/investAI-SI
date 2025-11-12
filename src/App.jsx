import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AlliesSection from "./components/AlliesSection";
import Dashboard from "./components/Dashboard";
import Chatbot from "./components/Chatbot";

function App() {
  const [view, setView] = useState("home");

  const showDashboard = () => setView("dashboard");
  const showHome = () => setView("home");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative">
        {view === "home" ? (
          <div className="animate-fade-in">
            <HeroSection />
            <AlliesSection />
            <section id="about" className="mx-auto mt-8 max-w-6xl px-6 pb-16">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-slate-800">
                  Sobre InvesAI
                </h2>
                <p className="mt-4 text-slate-600">
                  InvesAI combina análisis cuantitativo, aprendizaje automático
                  y datos de mercado en tiempo real para ofrecerte
                  recomendaciones accionables. Diseñado para asesores
                  financieros y autodidactas, simplifica la toma de decisiones
                  estratégicas.
                </p>
              </div>
            </section>
            <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-slate-800">
                  Hablemos
                </h2>
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
          </div>
        ) : (
          <div className="animate-fade-in">
            <Dashboard onBack={showHome} />
          </div>
        )}
      </main>
      <Chatbot
        onShowDashboard={showDashboard}
        isDashboardView={view === "dashboard"}
      />
    </div>
  );
}

export default App;
