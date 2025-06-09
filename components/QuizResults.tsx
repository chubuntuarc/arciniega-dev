import {
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Clock,
  DollarSign,
  RefreshCw,
  ShoppingCart,
  Code,
  Globe,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { QuizData } from "../pages/quiz/index";
import styles from "../pages/quiz/quiz.module.css";

interface QuizResultsProps {
  quizData: QuizData;
  onRestart: () => void;
}

const QuizResults = ({ quizData, onRestart }: QuizResultsProps) => {
  // Logic to determine recommendation based on quiz data
  const calculateRecommendation = () => {
    let score = 0;
    let reasons = [];
    let solution = "";
    let serviceType = "website"; // website, ecommerce, custom
    let urgency = "medium";
    let investment = "";

    // Analyze current presence
    if (
      quizData.currentPresence === "none" ||
      quizData.currentPresence === "social"
    ) {
      score += 30;
      reasons.push("No tienes presencia web profesional");
    }

    // Analyze business type to determine service type
    if (["retail", "restaurant"].includes(quizData.businessType)) {
      if (quizData.mainGoals.includes("sales")) {
        serviceType = "ecommerce";
        score += 25;
        reasons.push("Tu negocio necesita vender productos online");
      } else {
        serviceType = "website";
        score += 20;
        reasons.push("Tu tipo de negocio se beneficia de una presencia web");
      }
    } else if (quizData.businessType === "tech") {
      if (quizData.budget === "premium" || quizData.budget === "custom") {
        serviceType = "custom";
        score += 30;
        reasons.push("Tu negocio tech requiere soluciones personalizadas");
      } else {
        serviceType = "website";
        score += 20;
        reasons.push("Una web profesional fortalecerá tu presencia tech");
      }
    } else if (
      ["services", "beauty", "education", "creative"].includes(
        quizData.businessType
      )
    ) {
      serviceType = "website";
      score += 20;
      reasons.push("Tu tipo de negocio se beneficia mucho de una web");
    }

    // Analyze goals to refine service type
    if (
      quizData.mainGoals.includes("sales") &&
      ["retail", "restaurant", "beauty"].includes(quizData.businessType)
    ) {
      serviceType = "ecommerce";
    }

    if (
      quizData.mainGoals.includes("automation") &&
      (quizData.budget === "premium" || quizData.budget === "custom")
    ) {
      serviceType = "custom";
      reasons.push("Necesitas automatización personalizada");
    }

    // Analyze timeline
    if (quizData.timeline === "urgent") {
      urgency = "high";
    } else if (quizData.timeline === "flexible") {
      urgency = "low";
    }

    // Determine solution based on service type, budget and technical level
    if (serviceType === "ecommerce") {
      if (quizData.budget === "minimal" || quizData.budget === "basic") {
        solution = "ecommerce-basic";
        investment = "$20,000";
      } else {
        solution = "ecommerce-advanced";
        investment = "$45,000";
      }
    } else if (serviceType === "custom") {
      solution = "software-custom";
      investment = "Depende de la complejidad";
    } else {
      // website
      if (quizData.budget === "minimal" && quizData.technicalLevel === "none") {
        solution = "landing-basic";
        investment = "$12,000";
      } else if (quizData.budget === "basic") {
        solution = "website-informative";
        investment = "$25,000";
      } else if (
        quizData.budget === "standard" ||
        quizData.budget === "premium"
      ) {
        solution = "website-corporate";
        investment = "$60,000";
      } else {
        solution = "enterprise";
        investment = "$60,000+";
      }
    }

    return { score, reasons, solution, serviceType, urgency, investment };
  };

  const recommendation = calculateRecommendation();
  const needsDigitalSolution = recommendation.score >= 40;

  const getSolutionDetails = () => {
    switch (recommendation.solution) {
      case "landing-basic":
        return {
          title: "Página Web Básica (Landing Page)",
          description:
            "Una página de aterrizaje profesional y efectiva para presentar tu negocio",
          features: [
            "Diseño responsive",
            "Optimizado para conversiones",
            "Formulario de contacto",
            "Integración con redes sociales",
            "SEO básico",
          ],
          timeframe: "1-2 semanas",
          maintenance: "Mínimo mantenimiento requerido",
          icon: Globe,
        };
      case "website-informative":
        return {
          title: "Sitio Web Informativo (Multi-página)",
          description:
            "Sitio web completo con múltiples páginas para mostrar tu empresa y servicios",
          features: [
            "Múltiples páginas",
            "Galería de productos/servicios",
            "Blog integrado",
            "Formularios de contacto",
            "SEO optimizado",
            "Panel de administración básico",
          ],
          timeframe: "2-4 semanas",
          maintenance: "Actualizaciones periódicas de contenido",
          icon: Globe,
        };
      case "website-corporate":
        return {
          title: "Sitio Web Corporativo (Avanzado)",
          description:
            "Solución web corporativa completa con funcionalidades avanzadas",
          features: [
            "Diseño corporativo personalizado",
            "Sistema de gestión de contenido avanzado",
            "Integraciones con herramientas empresariales",
            "SEO avanzado",
            "Analytics y reportes",
            "Área de clientes",
          ],
          timeframe: "4-8 semanas",
          maintenance: "Soporte técnico y actualizaciones regulares",
          icon: Globe,
        };
      case "ecommerce-basic":
        return {
          title: "Tienda en Línea (Básica)",
          description:
            "Tienda online funcional para empezar a vender productos digitales o físicos",
          features: [
            "Catálogo de productos",
            "Carrito de compras",
            "Pasarela de pagos",
            "Gestión de inventario básica",
            "Panel de administración",
            "Reportes de ventas básicos",
          ],
          timeframe: "3-6 semanas",
          maintenance: "Gestión de productos y pedidos",
          icon: ShoppingCart,
        };
      case "ecommerce-advanced":
        return {
          title: "Tienda en Línea (Avanzada/Personalizada)",
          description:
            "Plataforma de ecommerce robusta con funcionalidades avanzadas y personalización completa",
          features: [
            "Diseño completamente personalizado",
            "Múltiples métodos de pago",
            "Gestión avanzada de inventario",
            "Sistema de cupones y descuentos",
            "Reportes avanzados",
            "Integración con sistemas externos",
            "Marketing automation",
          ],
          timeframe: "6-12 semanas",
          maintenance: "Soporte especializado y optimizaciones continuas",
          icon: ShoppingCart,
        };
      case "software-custom":
        return {
          title: "Sistema Web a Medida (CRM, ERP, etc.)",
          description:
            "Aplicación web personalizada diseñada específicamente para las necesidades de tu negocio",
          features: [
            "Análisis y diseño personalizado",
            "Desarrollo desde cero",
            "Integraciones con APIs externas",
            "Base de datos optimizada",
            "Sistema de usuarios y permisos",
            "Documentación técnica completa",
            "Capacitación del equipo",
          ],
          timeframe: "3-6+ meses",
          maintenance: "Soporte técnico especializado y evolución continua",
          icon: Code,
        };
      default:
        return {
          title: "Solución Empresarial",
          description:
            "Plataforma robusta con integraciones avanzadas y escalabilidad",
          features: [
            "Arquitectura escalable",
            "Integraciones complejas",
            "Panel de administración avanzado",
            "Soporte prioritario",
            "Múltiples idiomas",
          ],
          timeframe: "8-12 semanas",
          maintenance: "Soporte técnico continuo",
          icon: Globe,
        };
    }
  };

  const solutionDetails = getSolutionDetails();
  const IconComponent = solutionDetails.icon;

  // Construir el mensaje de WhatsApp
  const whatsappNumber = '+526141561723'; // Cambia por tu número real
  const quizSummary = [
    `Hola, me interesan mas detalles sobre el resultado de mi quiz: ${solutionDetails.title}`,
    `\n\nRespuestas del quiz:`,
    `Presencia digital: ${quizData.currentPresence}`,
    `Tipo de negocio: ${quizData.businessType}`,
    `Objetivos: ${(quizData.mainGoals || []).join(', ')}`,
    `Presupuesto: ${quizData.budget}`,
    `Tiempo: ${quizData.timeline}`,
    `Nivel técnico: ${quizData.technicalLevel}`,
    `Recursos: ${(quizData.availableResources || []).join(', ')}`,
    `Prioridades: ${(quizData.priorities || []).join(', ')}`,
  ].join('\n');
  const whatsappMsg = encodeURIComponent(quizSummary);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className={styles.quizBg}>
      <div className={styles.quizCard} style={{ width: "100%", maxWidth: 600 }}>
        {/* Header */}
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                className={
                  needsDigitalSolution ? styles.quizResultIconBg : undefined
                }
                style={
                  needsDigitalSolution
                    ? { margin: "0 auto" }
                    : {
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "#FEF3C7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 0 1.2rem 0",
                      }
                }
              >
                {needsDigitalSolution ? (
                  <CheckCircle
                    style={{ width: 48, height: 48, color: "#16a34a" }}
                  />
                ) : (
                  <AlertCircle
                    style={{ width: 48, height: 48, color: "#ea580c" }}
                  />
                )}
              </div>
            </div>
            <h1
              className={styles.quizTitle}
              style={{
                color: needsDigitalSolution ? "#16a34a" : "#ea580c",
                fontSize: "1.7rem",
                marginTop: 0,
              }}
            >
              {needsDigitalSolution
                ? "¡Sí necesitas una solución digital!"
                : "Quizás aún no necesites una solución completa"}
            </h1>
            <p
              className={styles.quizDesc}
              style={{ fontSize: "1.1rem", marginBottom: 0 }}
            >
              {needsDigitalSolution
                ? "Basado en tus respuestas, una solución digital puede impulsar significativamente tu negocio"
                : "Podrías enfocarte primero en optimizar tu presencia actual"}
            </p>
          </div>

          {needsDigitalSolution ? (
            <>
              {/* Why you need it */}
              <div style={{ marginBottom: 32 }}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#111827",
                    marginBottom: 12,
                  }}
                >
                  ¿Por qué te lo recomendamos?
                </h3>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  {recommendation.reasons.map((reason, index) => (
                    <div key={index} className={styles.quizResultReason}>
                      <CheckCircle
                        style={{
                          width: 22,
                          height: 22,
                          color: "#16a34a",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ display: "block" }}>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended solution */}
              <div style={{ marginBottom: 32 }}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#111827",
                    marginBottom: 12,
                  }}
                >
                  Solución recomendada
                </h3>
                <div className={styles.quizResultSolution}>
                  <div className={styles.quizResultSolutionHeader}>
                    <div className={styles.quizResultSolutionIcon}>
                      <IconComponent style={{ width: 20, height: 20 }} />
                    </div>
                    <div className={styles.quizResultSolutionTitle}>
                      {solutionDetails.title}
                    </div>
                  </div>
                  <div className={styles.quizResultSolutionDesc}>
                    {solutionDetails.description}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        window.innerWidth <= 700 ? "1fr" : "1.2fr 1fr",
                      gap: window.innerWidth <= 700 ? 18 : 16,
                      alignItems: "start",
                    }}
                  >
                    <ul
                      className={styles.quizResultSolutionFeatures}
                      style={{
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                        gridColumn: 1,
                      }}
                    >
                      {solutionDetails.features.map((feature, index) => (
                        <li
                          key={index}
                          className={styles.quizResultSolutionFeature}
                        >
                          <CheckCircle
                            style={{ width: 18, height: 18, color: "#16a34a" }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={styles.quizResultSolutionInfo}
                      style={{
                        gridColumn: window.innerWidth <= 700 ? 1 : 2,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Clock
                          style={{
                            width: 18,
                            height: 18,
                            color: "#3b82f6",
                            marginRight: 8,
                          }}
                        />
                        <span>Tiempo: {solutionDetails.timeframe}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <DollarSign
                          style={{
                            width: 18,
                            height: 18,
                            color: "#22c55e",
                            marginRight: 8,
                          }}
                        />
                        <span>Inversión: {recommendation.investment}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <TrendingUp
                          style={{
                            width: 18,
                            height: 18,
                            color: "#a78bfa",
                            marginRight: 8,
                          }}
                        />
                        <span>{solutionDetails.maintenance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next steps */}
              <div style={{ marginBottom: 32 }}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#111827",
                    marginBottom: 12,
                  }}
                >
                  Próximos pasos
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 16,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: 120,
                      maxWidth: 180,
                      background: "#fff",
                      borderRadius: 14,
                      border: "1.5px solid #e0e7ef",
                      padding: 16,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        background: "#dbeafe",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          color: "#2563eb",
                          fontWeight: 700,
                          fontSize: 18,
                        }}
                      >
                        1
                      </span>
                    </div>
                    <h4
                      style={{
                        fontWeight: 600,
                        marginBottom: 6,
                        fontSize: 15,
                        color: "#000",
                      }}
                    >
                      Consulta gratuita
                    </h4>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: 13,
                        textAlign: "left",
                      }}
                    >
                      Conversemos sobre tu proyecto específico
                    </p>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: 120,
                      maxWidth: 180,
                      background: "#fff",
                      borderRadius: 14,
                      border: "1.5px solid #e0e7ef",
                      padding: 16,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        background: "#ede9fe",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          color: "#a78bfa",
                          fontWeight: 700,
                          fontSize: 18,
                        }}
                      >
                        2
                      </span>
                    </div>
                    <h4
                      style={{
                        fontWeight: 600,
                        marginBottom: 6,
                        fontSize: 15,
                        color: "#000",
                      }}
                    >
                      Propuesta detallada
                    </h4>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: 13,
                        textAlign: "left",
                        marginBottom: 0,
                      }}
                    >
                      Recibe un plan personalizado y presupuesto
                    </p>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: 120,
                      maxWidth: 180,
                      background: "#fff",
                      borderRadius: 14,
                      border: "1.5px solid #e0e7ef",
                      padding: 16,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        background: "#bbf7d0",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          color: "#16a34a",
                          fontWeight: 700,
                          fontSize: 18,
                        }}
                      >
                        3
                      </span>
                    </div>
                    <h4
                      style={{
                        fontWeight: 600,
                        marginBottom: 6,
                        fontSize: 15,
                        color: "#000",
                      }}
                    >
                      ¡Empezamos!
                    </h4>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: 13,
                        textAlign: "left",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Desarrollo y lanzamiento de tu solución
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: window.innerWidth <= 700 ? 'column' : 'row',
                  gap: window.innerWidth <= 700 ? 12 : 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    width: window.innerWidth <= 700 ? '100%' : undefined,
                    maxWidth: window.innerWidth <= 700 ? '100%' : 260,
                    display: 'block',
                  }}
                >
                  <button
                    className={styles.quizBtn}
                    style={{
                      width: '100%',
                      fontSize: 17,
                      marginBottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Solicitar consulta gratuita
                  </button>
                </a>
                <button
                  onClick={onRestart}
                  className={styles.quizBtn}
                  style={{
                    background: "#fff",
                    color: "#222",
                    border: "1.5px solid #eceff1",
                    boxShadow: "0 2px 8px rgba(16,30,54,0.04)",
                    maxWidth: window.innerWidth <= 700 ? "100%" : 200,
                    width: window.innerWidth <= 700 ? "100%" : undefined,
                    fontSize: 16,
                    marginBottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RefreshCw
                    style={{
                      width: 18,
                      height: 18,
                      marginRight: 10,
                      verticalAlign: "middle",
                    }}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Hacer quiz de nuevo
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Alternative recommendations */}
              <div style={{ marginBottom: 32 }}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#111827",
                    marginBottom: 12,
                    textAlign: "center",
                  }}
                >
                  Te recomendamos enfocarte en:
                </h3>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  <div
                    style={{
                      background: "#fff7ed",
                      borderRadius: 14,
                      border: "1.5px solid #fdba74",
                      padding: 16,
                      marginBottom: 0,
                    }}
                  >
                    <h4
                      style={{
                        fontWeight: 600,
                        color: "#ea580c",
                        marginBottom: 6,
                        fontSize: 15,
                      }}
                    >
                      Optimizar redes sociales
                    </h4>
                    <p
                      style={{
                        color: "#ea580c",
                        fontSize: 13,
                        marginBottom: "0.5rem",
                        textAlign: "left",
                      }}
                    >
                      Mejora tu presencia en las plataformas donde ya estás
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#eff6ff",
                      borderRadius: 14,
                      border: "1.5px solid #60a5fa",
                      padding: 16,
                      marginBottom: 0,
                    }}
                  >
                    <h4
                      style={{
                        fontWeight: 600,
                        color: "#2563eb",
                        marginBottom: 6,
                        fontSize: 15,
                      }}
                    >
                      Crear contenido de valor
                    </h4>
                    <p
                      style={{
                        color: "#2563eb",
                        fontSize: 13,
                        marginBottom: "0.5rem",
                        textAlign: "left",
                      }}
                    >
                      Establece tu expertise antes de invertir en una solución
                      digital
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#f3e8ff",
                      borderRadius: 14,
                      border: "1.5px solid #a78bfa",
                      padding: 16,
                      marginBottom: 0,
                    }}
                  >
                    <h4
                      style={{
                        fontWeight: 600,
                        color: "#a21caf",
                        marginBottom: 6,
                        fontSize: 15,
                      }}
                    >
                      Definir objetivos claros
                    </h4>
                    <p
                      style={{
                        color: "#a21caf",
                        fontSize: 13,
                        marginBottom: "0.5rem",
                        textAlign: "left",
                      }}
                    >
                      Cuando tengas metas específicas, será el momento ideal
                      para una solución digital
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: window.innerWidth <= 700 ? 'column' : 'row',
                  gap: window.innerWidth <= 700 ? 12 : 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <button
                  onClick={onRestart}
                  className={styles.quizBtn}
                  style={{
                    background: 'linear-gradient(90deg, #f59e42 0%, #ef4444 100%)',
                    color: '#fff',
                    maxWidth: window.innerWidth <= 700 ? '100%' : 260,
                    width: window.innerWidth <= 700 ? '100%' : undefined,
                    fontSize: 17,
                    marginBottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <RefreshCw style={{ width: 18, height: 18, marginRight: 10, verticalAlign: 'middle', color: '#fff' }} />
                  <span style={{ display: 'inline-block', textAlign: 'center', whiteSpace: 'nowrap' }}>
                    Repetir evaluación
                  </span>
                </button>
                <button
                  className={styles.quizBtn}
                  style={{
                    background: '#fff',
                    color: '#222',
                    border: '1.5px solid #eceff1',
                    boxShadow: '0 2px 8px rgba(16,30,54,0.04)',
                    maxWidth: window.innerWidth <= 700 ? '100%' : 200,
                    width: window.innerWidth <= 700 ? '100%' : undefined,
                    fontSize: 16,
                    marginBottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Obtener consulta estratégica
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
