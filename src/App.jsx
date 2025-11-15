import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AlliesSection from "./components/AlliesSection";
import Dashboard from "./components/Dashboard";
import CompanyInsight from "./components/CompanyInsight";
import InvestmentSimulator from "./components/InvestmentSimulator";
import MarketTrends from "./components/MarketTrends";
import NewsSentiment from "./components/NewsSentiment";
import CompanyComparator from "./components/CompanyComparator";
import InteractionHistory from "./components/InteractionHistory";
import Chatbot from "./components/Chatbot";

function App() {
  const [view, setView] = useState("home");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") ?? "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const showDashboard = () => setView("dashboard");
  const showHome = () => setView("home");
  const navigateTo = (nextView) => setView(nextView);

  const renderHome = () => (
    <div className="animate-fade-in">
      <HeroSection />
      <AlliesSection />
      <section id="about" className="mx-auto mt-8 max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Sobre InvesAI
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            InvesAI combina análisis cuantitativo, aprendizaje automático y
            datos de mercado en tiempo real para ofrecerte recomendaciones
            accionables. Diseñado para asesores financieros y autodidactas,
            simplifica la toma de decisiones estratégicas.
          </p>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Hablemos
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Escríbenos a{" "}
            <a
              className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
              href="mailto:hola@invesai.com"
            >
              hola@invesai.com
            </a>{" "}
            y recibe una demo personalizada para tu equipo.
          </p>
        </div>
      </section>
    </div>
  );

  const renderView = () => {
    switch (view) {
      case "home":
        return renderHome();
      case "dashboard":
        return (
          <div className="animate-fade-in">
            <Dashboard onBack={showHome} onNavigate={navigateTo} />
          </div>
        );
      case "companyInsight":
        return (
          <div className="animate-fade-in">
            <CompanyInsight onBack={showDashboard} />
          </div>
        );
      case "investmentSimulator":
        return (
          <div className="animate-fade-in">
            <InvestmentSimulator onBack={showDashboard} />
          </div>
        );
      case "marketTrends":
        return (
          <div className="animate-fade-in">
            <MarketTrends onBack={showDashboard} />
          </div>
        );
      case "newsSentiment":
        return (
          <div className="animate-fade-in">
            <NewsSentiment onBack={showDashboard} />
          </div>
        );
      case "companyComparator":
        return (
          <div className="animate-fade-in">
            <CompanyComparator onBack={showDashboard} />
          </div>
        );
      case "interactionHistory":
        return (
          <div className="animate-fade-in">
            <InteractionHistory onBack={showDashboard} />
          </div>
        );
      default:
        return renderHome();
    }
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="relative">{renderView()}</main>
        <Chatbot onShowDashboard={showDashboard} currentView={view} />
      </div>
    </div>
  );
}

export default App;
