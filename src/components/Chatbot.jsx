import { useEffect, useState } from "react";
import Button from "./Button";

const messages = [
  { id: 1, role: "user", text: "Hola" },
  {
    id: 2,
    role: "bot",
    text: "¡Hola! Soy InvesAI, tu asistente de inversión.",
  },
  {
    id: 3,
    role: "user",
    text: "Muéstrame análisis de mis acciones.",
  },
  {
    id: 4,
    role: "bot",
    text: "Claro, aquí tienes un resumen de tu portafolio.",
  },
];

const Chatbot = ({ onShowDashboard, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentView !== "home") {
      setIsOpen(false);
    }
  }, [currentView]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleShowMore = () => {
    setIsOpen(false);
    onShowDashboard();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-80 rounded-2xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur transition duration-200 dark:border-slate-700 dark:bg-slate-900/95">
          <div className="flex items-center justify-between rounded-t-2xl bg-blue-500 px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">InvesAI Chat</p>
              <p className="text-xs text-blue-100">Conectado a IA financiera</p>
            </div>
            <button
              onClick={toggleChat}
              className="rounded-full border border-white/30 p-1 transition hover:border-white"
              aria-label="Cerrar chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 6l8 8M14 6l-8 8"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-3 px-4 py-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm transition ${
                  message.role === "user"
                    ? "ml-auto bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300"
                    : "mr-auto bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="rounded-b-2xl border-t border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-900">
            <Button className="w-full" onClick={handleShowMore}>
              Mostrar más
            </Button>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:shadow-blue-500/30"
        aria-label={isOpen ? "Cerrar chatbot" : "Abrir chatbot"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-15.6 0A8.38 8.38 0 013 11.5a8.5 8.5 0 0117 0z" />
            <path d="M8 11h8M8 15h5" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
