import { CheckCircle, Target, User } from "lucide-react";
import styles from "../pages/quiz/quiz.module.css";

export default function QuizStart({ onStart }: { onStart: () => void }) {
  return (
    <div className={styles.quizBg}>
      <div className={styles.quizCard}>
        {/* Gradient Icon */}
        <div className={styles.quizGradientIcon}>
          <Target style={{ width: 32, height: 32, color: "#fff" }} />
        </div>
        {/* Headline */}
        <h1 className={styles.quizTitle}>
          ¿Necesitas una página web?
        </h1>
        <p className={styles.quizDesc}>
          Descubre en solo 3 minutos si una página web puede impulsar tu negocio y cuál sería la mejor estrategia para ti.
        </p>
        {/* Features */}
        <div className={styles.quizFeatures}>
          <div className={styles.quizFeature}>
            <CheckCircle style={{ width: 28, height: 28, color: "#22c55e", marginBottom: 4 }} />
            <span className={styles.quizFeatureTitle}>Evaluación Personalizada</span>
            <span className={styles.quizFeatureDesc}>Análisis específico para tu tipo de negocio</span>
          </div>
          <div className={styles.quizFeature}>
            <Target style={{ width: 28, height: 28, color: "#3b82f6", marginBottom: 4 }} />
            <span className={styles.quizFeatureTitle}>Recomendaciones Precisas</span>
            <span className={styles.quizFeatureDesc}>Soluciones adaptadas a tu presupuesto y objetivos</span>
          </div>
        </div>
        {/* Button */}
        <button
          onClick={onStart}
          className={styles.quizBtn}
        >
          Comenzar evaluación &rarr;
        </button>
        {/* Footer */}
        <div className={styles.quizFooter}>
          <span>Solo 8 preguntas</span>
          <span>•</span>
          <span>100% gratuito</span>
          <span>•</span>
          <span>Sin registro</span>
        </div>
      </div>
    </div>
  );
}
