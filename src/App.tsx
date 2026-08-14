import React, { useState } from 'react';
import { INITIAL_QUESTIONS } from './data/questions';
import { StudentInfo, Question, AnswerState, QuizResultRecord } from './types';
import { prepareQuestionsForAttempt, saveResult } from './utils/storage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CoverScreen } from './components/CoverScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { AdminModal } from './components/AdminModal';

type AppScreen = 'cover' | 'quiz' | 'result';

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('cover');
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [attemptNumber, setAttemptNumber] = useState<number>(1);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(INITIAL_QUESTIONS);
  const [latestResult, setLatestResult] = useState<QuizResultRecord | null>(null);

  // Admin Modal state
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Start quiz session
  const handleStartQuiz = (info: StudentInfo, attemptNum: number) => {
    setStudentInfo(info);
    setAttemptNumber(attemptNum);

    // Prepare questions (if attemptNum === 3, questions and options order are randomized)
    const questionsToUse = prepareQuestionsForAttempt(INITIAL_QUESTIONS, attemptNum);
    setActiveQuestions(questionsToUse);
    setScreen('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Evaluate quiz answers & save to local global database
  const handleFinishQuiz = (userAnswers: AnswerState, durationSeconds: number) => {
    if (!studentInfo) return;

    let correctCount = 0;

    activeQuestions.forEach((q) => {
      const uAns = userAnswers[q.id];
      if (uAns === undefined) return;

      if (Array.isArray(q.correctAnswer)) {
        if (Array.isArray(uAns) && uAns.length === q.correctAnswer.length) {
          const sortedKey = [...q.correctAnswer].sort();
          const sortedUser = [...uAns].sort();
          const isMatch = sortedKey.every((val, idx) => val === sortedUser[idx]);
          if (isMatch) correctCount++;
        }
      } else {
        if (uAns === q.correctAnswer) {
          correctCount++;
        }
      }
    });

    const totalQuestions = activeQuestions.length; // 40
    const wrongCount = totalQuestions - correctCount;
    const score = Math.round((correctCount / totalQuestions) * 100);

    const record: QuizResultRecord = {
      id: `res_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      studentName: studentInfo.name,
      className: studentInfo.className,
      subject: studentInfo.subject,
      score,
      correctCount,
      wrongCount,
      totalQuestions,
      attemptNumber,
      durationSeconds,
      completedAt: new Date().toISOString(),
      userAnswers,
    };

    // Automatically record to global local database
    saveResult(record);
    setLatestResult(record);
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retry quiz for next attempt (up to 3)
  const handleRetryQuiz = () => {
    if (!studentInfo) return;
    const nextAttempt = attemptNumber + 1;
    if (nextAttempt <= 3) {
      handleStartQuiz(studentInfo, nextAttempt);
    }
  };

  // Return to cover
  const handleHome = () => {
    setScreen('cover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-slate-100 flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-white">
      <Header
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={() => setIsAdminLoggedIn(false)}
        isQuizActive={screen === 'quiz'}
        attemptNumber={attemptNumber}
      />

      <main className="flex-1">
        {screen === 'cover' && (
          <CoverScreen
            onStartQuiz={handleStartQuiz}
            initialInfo={studentInfo || undefined}
          />
        )}

        {screen === 'quiz' && studentInfo && (
          <QuizScreen
            studentInfo={studentInfo}
            questions={activeQuestions}
            attemptNumber={attemptNumber}
            onFinishQuiz={handleFinishQuiz}
            onCancel={handleHome}
          />
        )}

        {screen === 'result' && latestResult && (
          <ResultScreen
            record={latestResult}
            questions={INITIAL_QUESTIONS} // Use original list for review explanations
            onRetry={handleRetryQuiz}
            onHome={handleHome}
          />
        )}
      </main>

      <Footer />

      {/* Admin Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        isLoggedIn={isAdminLoggedIn}
        onLoginSuccess={() => setIsAdminLoggedIn(true)}
        onLogout={() => setIsAdminLoggedIn(false)}
      />
    </div>
  );
}
