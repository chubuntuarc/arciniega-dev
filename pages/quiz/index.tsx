import { useState } from "react";
import QuizStart from "../../components/QuizStart";
import QuizSteps from "../../components/QuizSteps";
import QuizResults from "../../components/QuizResults";

export interface QuizData {
  currentPresence: string;
  businessType: string;
  mainGoals: string[];
  budget: string;
  timeline: string;
  technicalLevel: string;
  availableResources: string[];
  priorities: string[];
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({
    currentPresence: "",
    businessType: "",
    mainGoals: [],
    budget: "",
    timeline: "",
    technicalLevel: "",
    availableResources: [],
    priorities: [],
  });

  const updateQuizData = (field: string, value: any) => {
    setQuizData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setQuizData({
      currentPresence: "",
      businessType: "",
      mainGoals: [],
      budget: "",
      timeline: "",
      technicalLevel: "",
      availableResources: [],
      priorities: [],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {currentStep === 0 && <QuizStart onStart={nextStep} />}

      {currentStep > 0 && currentStep <= 8 && (
        <QuizSteps
          currentStep={currentStep}
          quizData={quizData}
          updateQuizData={updateQuizData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {currentStep === 9 && (
        <QuizResults quizData={quizData} onRestart={resetQuiz} />
      )}
    </div>
  );
};

export default Index;
