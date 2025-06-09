import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Building,
  Target,
  DollarSign,
  Clock,
  Code,
  Users,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/button";
import styles from "../pages/quiz/quiz.module.css";

interface QuizData {
  currentPresence: string;
  businessType: string;
  mainGoals: string[];
  budget: string;
  timeline: string;
  technicalLevel: string;
  availableResources: string[];
  priorities: string[];
}

interface QuizStepsProps {
  currentStep: number;
  quizData: QuizData;
  updateQuizData: (field: keyof QuizData, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const QuizSteps = ({
  currentStep,
  quizData,
  updateQuizData,
  nextStep,
  prevStep,
}: QuizStepsProps) => {
  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  const handleMultiSelect = (field: keyof QuizData, value: string) => {
    const currentArray = quizData[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    updateQuizData(field, newArray);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return quizData.currentPresence !== "";
      case 2:
        return quizData.businessType !== "";
      case 3:
        return quizData.mainGoals.length > 0;
      case 4:
        return quizData.budget !== "";
      case 5:
        return quizData.timeline !== "";
      case 6:
        return quizData.technicalLevel !== "";
      case 7:
        return quizData.availableResources.length > 0;
      case 8:
        return quizData.priorities.length > 0;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <Globe size={48} color="#3b82f6" style={{ marginBottom: "0 auto" }} />
            <h2>¿Cuál es tu presencia digital actual?</h2>
            <p>Queremos entender tu punto de partida</p>
            <div style={{ width: '100%' }}>
              {[
                {
                  value: "none",
                  label: "No tengo nada digital",
                  desc: "Empezando desde cero",
                },
                {
                  value: "social",
                  label: "Solo redes sociales",
                  desc: "Facebook, Instagram, etc.",
                },
                {
                  value: "basic",
                  label: "Página básica/landing",
                  desc: "Algo simple ya existe",
                },
                {
                  value: "ecommerce",
                  label: "Tienda online",
                  desc: "Vendo productos online",
                },
                {
                  value: "complete",
                  label: "Web completa",
                  desc: "Tengo todo funcionando",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateQuizData("currentPresence", option.value)}
                  className={
                    quizData.currentPresence === option.value
                      ? `${styles.quizOption} ${styles.quizOptionSelectedBlue}`
                      : styles.quizOption
                  }
                  type="button"
                >
                  <span className={styles.quizOptionLabel}>{option.label}</span>
                  <span className={styles.quizOptionDesc}>{option.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <Building size={48} color="#8b5cf6" />
            <h2>¿Qué tipo de negocio tienes?</h2>
            <p>Cada industria tiene necesidades específicas</p>
            <div style={{ width: '100%' }}>
              {[
                {
                  value: "retail",
                  label: "Retail/Comercio",
                  desc: "Venta de productos físicos",
                },
                {
                  value: "services",
                  label: "Servicios profesionales",
                  desc: "Consultoría, abogados, médicos",
                },
                {
                  value: "restaurant",
                  label: "Restaurante/Comida",
                  desc: "Gastronomía y delivery",
                },
                {
                  value: "beauty",
                  label: "Belleza/Salud",
                  desc: "Spa, salón, fitness",
                },
                {
                  value: "education",
                  label: "Educación/Cursos",
                  desc: "Enseñanza y capacitación",
                },
                {
                  value: "tech",
                  label: "Tecnología",
                  desc: "Software, IT, digital",
                },
                {
                  value: "creative",
                  label: "Creativo/Arte",
                  desc: "Diseño, fotografía, arte",
                },
                { value: "other", label: "Otro", desc: "Industria diferente" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateQuizData("businessType", option.value)}
                  className={
                    quizData.businessType === option.value
                      ? `${styles.quizOption} ${styles.quizOptionSelected}`
                      : styles.quizOption
                  }
                  type="button"
                >
                  <span className={styles.quizOptionLabel}>{option.label}</span>
                  <span className={styles.quizOptionDesc}>{option.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <Target size={48} color="#22c55e" />
            <h2>¿Cuáles son tus principales objetivos?</h2>
            <p>Puedes seleccionar múltiples opciones</p>
            <div style={{ width: '100%' }}>
              {[
                {
                  value: "sales",
                  label: "Aumentar ventas",
                  desc: "Generar más ingresos",
                },
                {
                  value: "leads",
                  label: "Captar clientes",
                  desc: "Conseguir prospectos",
                },
                {
                  value: "brand",
                  label: "Mejorar imagen",
                  desc: "Fortalecer marca",
                },
                {
                  value: "presence",
                  label: "Presencia online",
                  desc: "Ser encontrado en internet",
                },
                {
                  value: "automation",
                  label: "Automatizar procesos",
                  desc: "Eficiencia operativa",
                },
                {
                  value: "showcase",
                  label: "Mostrar portafolio",
                  desc: "Exhibir trabajos/productos",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleMultiSelect("mainGoals", option.value)}
                  className={
                    quizData.mainGoals.includes(option.value)
                      ? `${styles.quizOption} ${styles.quizOptionSelected}`
                      : styles.quizOption
                  }
                  type="button"
                >
                  <span className={styles.quizOptionLabel}>{option.label}</span>
                  <span className={styles.quizOptionDesc}>{option.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <DollarSign size={48} color="#eab308" />
            <h2>¿Cuál es tu presupuesto aproximado?</h2>
            <p>Para el desarrollo inicial de la página web</p>
            <div style={{ width: '100%' }}>
              {[
                {
                  value: "minimal",
                  label: "Menos de $8,000",
                  desc: "Solución muy básica",
                },
                {
                  value: "basic",
                  label: "$8,000 - $16,000",
                  desc: "Página profesional simple",
                },
                {
                  value: "standard",
                  label: "$16,000 - $32,000",
                  desc: "Web completa con funciones",
                },
                {
                  value: "premium",
                  label: "$32,000 - $64,000",
                  desc: "Solución avanzada",
                },
                {
                  value: "custom",
                  label: "Más de $64,000",
                  desc: "Desarrollo personalizado",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateQuizData("budget", option.value)}
                  className={
                    quizData.budget === option.value
                      ? `${styles.quizOption} ${styles.quizOptionSelected}`
                      : styles.quizOption
                  }
                  type="button"
                >
                  <span className={styles.quizOptionLabel}>{option.label}</span>
                  <span className={styles.quizOptionDesc}>{option.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <Clock size={48} color="#ef4444" />
            <h2>¿Cuándo necesitas tener lista la página?</h2>
            <p>El timing afecta las opciones disponibles</p>
            <div style={{ width: '100%' }}>
              {[
                {
                  value: "urgent",
                  label: "Lo antes posible",
                  desc: "Necesito algo ya",
                },
                {
                  value: "month",
                  label: "En 1 mes",
                  desc: "Tengo cierta prisa",
                },
                {
                  value: "quarter",
                  label: "En 2-3 meses",
                  desc: "Tiempo razonable",
                },
                {
                  value: "flexible",
                  label: "Sin prisa",
                  desc: "Cuando esté perfecto",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateQuizData("timeline", option.value)}
                  className={
                    quizData.timeline === option.value
                      ? `${styles.quizOption} ${styles.quizOptionSelected}`
                      : styles.quizOption
                  }
                  type="button"
                >
                  <span className={styles.quizOptionLabel}>{option.label}</span>
                  <span className={styles.quizOptionDesc}>{option.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <Code size={48} color="#6366f1" />
            <h2>¿Cuál es tu nivel técnico?</h2>
            <p>Esto nos ayuda a recomendar la mejor solución</p>
            <div style={{ width: '100%' }}>
              {[
                {
                  value: "none",
                  label: "Nulo",
                  desc: "Solo uso redes sociales",
                },
                {
                  value: "basic",
                  label: "Básico",
                  desc: "Uso computadora y apps",
                },
                {
                  value: "intermediate",
                  label: "Intermedio",
                  desc: "Puedo editar contenido",
                },
                {
                  value: "advanced",
                  label: "Avanzado",
                  desc: "Entiendo de tecnología",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateQuizData("technicalLevel", option.value)}
                  className={
                    quizData.technicalLevel === option.value
                      ? `${styles.quizOption} ${styles.quizOptionSelected}`
                      : styles.quizOption
                  }
                  type="button"
                >
                  <span className={styles.quizOptionLabel}>{option.label}</span>
                  <span className={styles.quizOptionDesc}>{option.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div>
            <Users size={48} color="#0ea5e9" />
            <h2>¿Con qué recursos cuentas?</h2>
            <p>Selecciona todos los que apliquen</p>
            <div style={{ width: '100%' }}>
              {[
                {
                  value: "content",
                  label: "Contenido listo",
                  desc: "Textos, imágenes, videos",
                },
                {
                  value: "design",
                  label: "Diseñador/a",
                  desc: "Alguien para el diseño",
                },
                {
                  value: "developer",
                  label: "Desarrollador/a",
                  desc: "Persona técnica",
                },
                {
                  value: "time",
                  label: "Tiempo personal",
                  desc: "Puedo dedicar horas",
                },
                {
                  value: "budget",
                  label: "Presupuesto mensual",
                  desc: "Para mantenimiento",
                },
                {
                  value: "none",
                  label: "Solo el presupuesto inicial",
                  desc: "Quiero algo que funcione solo",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleMultiSelect("availableResources", option.value)}
                  className={
                    quizData.availableResources.includes(option.value)
                      ? `${styles.quizOption} ${styles.quizOptionSelected}`
                      : styles.quizOption
                  }
                  type="button"
                >
                  <span className={styles.quizOptionLabel}>{option.label}</span>
                  <span className={styles.quizOptionDesc}>{option.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div>
            <Star size={48} color="#f59e0b" />
            <h2>¿Cuáles son tus prioridades?</h2>
            <p>Selecciona las más importantes para ti</p>
            <div style={{ width: '100%' }}>
              {[
                {
                  value: "speed",
                  label: "Rapidez de carga",
                  desc: "Que abra súper rápido",
                },
                {
                  value: "mobile",
                  label: "Funcione en móvil",
                  desc: "Perfecto en celulares",
                },
                {
                  value: "seo",
                  label: "Aparecer en Google",
                  desc: "SEO y posicionamiento",
                },
                {
                  value: "design",
                  label: "Diseño impactante",
                  desc: "Que se vea increíble",
                },
                {
                  value: "easy",
                  label: "Fácil de actualizar",
                  desc: "Poder editarlo yo mismo",
                },
                {
                  value: "secure",
                  label: "Seguridad",
                  desc: "Protección y confianza",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleMultiSelect("priorities", option.value)}
                  className={
                    quizData.priorities.includes(option.value)
                      ? `${styles.quizOption} ${styles.quizOptionSelected}`
                      : styles.quizOption
                  }
                  type="button"
                >
                  <span className={styles.quizOptionLabel}>{option.label}</span>
                  <span className={styles.quizOptionDesc}>{option.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    if (currentStep === 1 && typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "quiz_started", {
        event_category: "Quiz",
      });
    }
  }, [currentStep]);

  return (
    <div className={styles.quizBg}>
      {/* Progress bar and info */}
      <div className={styles.quizProgressInfo}>
        <span style={{ fontSize: 14, color: "#64748b" }}>
          Pregunta {currentStep} de {totalSteps}
        </span>
        <span style={{ fontSize: 14, color: "#64748b" }}>
          {Math.round(progress)}% completado
        </span>
      </div>
      <div className={styles.quizProgressBar}>
        <div
          style={{ width: `${progress}%` }}
          className={styles.quizProgressBarFill}
        ></div>
      </div>
      {/* Card */}
      <div className={styles.quizCard} style={{ width: "100%", maxWidth: 600 }}>
        <div style={{ width: "100%", margin: "0" }}>{renderStep()}</div>
      </div>
      {/* Navigation */}
      <div className={styles.quizNavBtns}>
        {currentStep !== 1 ? (
          <Button
            onClick={prevStep}
            className={styles.quizNavBtnOutline}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>
        ) : (
          <div style={{ width: 100 }} />
        )}
        <Button
          onClick={nextStep}
          disabled={!isStepValid()}
          className={styles.quizNavBtnGradient}
        >
          {currentStep === totalSteps ? "Ver resultados" : "Siguiente"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default QuizSteps;
