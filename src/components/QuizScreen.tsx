import React, { useState, useEffect } from 'react';
import { Question, StudentInfo, AnswerState } from '../types';
import { 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  Grid, 
  Send, 
  Clock, 
  AlertTriangle,
  HelpCircle,
  X
} from 'lucide-react';

interface QuizScreenProps {
  studentInfo: StudentInfo;
  questions: Question[];
  attemptNumber: number;
  onFinishQuiz: (userAnswers: AnswerState, durationSeconds: number) => void;
  onCancel: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  studentInfo,
  questions,
  attemptNumber,
  onFinishQuiz,
  onCancel,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerState>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showNavGrid, setShowNavGrid] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Stopwatch timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatStopwatch = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => String(num).padStart(2, '0');

    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  const currentQuestion = questions[currentIndex];
  const questionId = currentQuestion.id;
  const currentAnswer = userAnswers[questionId];

  // Handle single choice / matching / true-false selection
  const handleSingleSelect = (optionId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  // Handle multiple select selection
  const handleMultipleSelectToggle = (optionId: string) => {
    const existing = Array.isArray(currentAnswer) ? [...currentAnswer] : [];
    const index = existing.indexOf(optionId);

    if (index > -1) {
      existing.splice(index, 1);
    } else {
      existing.push(optionId);
    }

    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: existing,
    }));
  };

  // Answer status checks
  const isQuestionAnswered = (qId: number) => {
    const ans = userAnswers[qId];
    if (Array.isArray(ans)) {
      return ans.length > 0;
    }
    return ans !== undefined && ans !== '';
  };

  const totalAnswered = questions.filter((q) => isQuestionAnswered(q.id)).length;

  const handleConfirmSubmit = () => {
    onFinishQuiz(userAnswers, elapsedSeconds);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Top Bar Info & Timer */}
      <div className="bg-[#1A1D24] rounded-2xl p-4 sm:p-5 border border-slate-700/50 shadow-md mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-slate-100 text-sm sm:text-base">
              {studentInfo.name}
            </span>
            <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-semibold border border-slate-700">
              {studentInfo.className}
            </span>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/30">
              Kesempatan {attemptNumber}/3
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            {studentInfo.subject}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Stopwatch Display */}
          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-emerald-400 px-4 py-2 rounded-xl shadow-xs font-mono font-bold text-base sm:text-lg">
            <Clock className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span>{formatStopwatch(elapsedSeconds)}</span>
          </div>

          {/* Quick Grid Nav Button */}
          <button
            onClick={() => setShowNavGrid(true)}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl transition-colors border border-slate-700 cursor-pointer"
          >
            <Grid className="w-4 h-4 text-slate-400" />
            <span>Daftar Soal</span>
            <span className="bg-emerald-600 text-white text-[10px] px-1.5 py-0.2 rounded-full ml-1">
              {totalAnswered}/{questions.length}
            </span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-6">
        <div
          className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-[#1A1D24] rounded-2xl border border-slate-700/50 shadow-xl p-6 sm:p-8 mb-6 relative">
        {/* Question Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-700/50">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-sm flex items-center justify-center shadow-lg shadow-emerald-500/20">
              {currentIndex + 1}
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Soal Nomor {currentIndex + 1} dari {questions.length}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-slate-100">
                {currentQuestion.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Level {currentQuestion.cognitiveLevel}
            </span>
            {currentQuestion.type === 'multiple_select' && (
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                Pilihan Ganda Kompleks
              </span>
            )}
            {currentQuestion.type === 'matching' && (
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/30">
                Menjodohkan
              </span>
            )}
            {currentQuestion.type === 'true_false' && (
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Benar / Salah
              </span>
            )}
          </div>
        </div>

        {/* Stem / Question Text */}
        <div className="mb-6">
          <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-medium whitespace-pre-line">
            {currentQuestion.stem}
          </p>
          {currentQuestion.type === 'multiple_select' && (
            <p className="text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-800/60 inline-block mt-3">
              * Petunjuk: Anda dapat memilih LEBIH DARI SATU jawaban yang menurut Anda benar.
            </p>
          )}
        </div>

        {/* Options List - Matching Elegant Dark theme */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D, E

            if (currentQuestion.type === 'multiple_select') {
              const selectedArray = Array.isArray(currentAnswer) ? currentAnswer : [];
              const isSelected = selectedArray.includes(opt.id);

              return (
                <button
                  key={opt.id}
                  onClick={() => handleMultipleSelectToggle(opt.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 group cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-50 shadow-md shadow-emerald-500/10'
                      : 'bg-slate-800/40 border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-md border-2 mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-emerald-500 border-emerald-500 text-slate-950 font-bold'
                        : 'border-slate-600 bg-slate-800 group-hover:border-emerald-500/70'
                    }`}
                  >
                    {isSelected && <CheckCircle className="w-4 h-4 text-slate-950" />}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-slate-200 text-sm sm:text-base leading-snug block">
                      {opt.label}
                    </span>
                  </div>
                </button>
              );
            }

            // Single choice, matching, or true_false
            const isSelected = currentAnswer === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleSingleSelect(opt.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 group cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500/10 border-emerald-500 shadow-md shadow-emerald-500/10'
                    : 'bg-slate-800/40 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                }`}
              >
                {/* Option Letter Pill */}
                <span
                  className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-700 text-slate-200 group-hover:bg-emerald-600 group-hover:text-white'
                  }`}
                >
                  {letter}
                </span>

                {/* Option Label Text */}
                <div className="flex-1 self-center">
                  <span className={`font-semibold text-sm sm:text-base leading-snug block ${
                    isSelected ? 'text-emerald-300 font-extrabold' : 'text-slate-300'
                  }`}>
                    {opt.label}
                  </span>
                </div>

                {isSelected && (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 self-center" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all border ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-slate-800/50 border-slate-800 text-slate-600'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700 shadow-xs cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={() => setShowNavGrid(true)}
          className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700 cursor-pointer"
        >
          <Grid className="w-3.5 h-3.5" />
          <span>{currentIndex + 1} / {questions.length}</span>
        </button>

        {currentIndex < questions.length - 1 ? (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <span>Selanjutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => setShowSubmitModal(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Selesai & Kirim</span>
          </button>
        )}
      </div>

      {/* Navigation Grid Modal */}
      {showNavGrid && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A1D24] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-700 animate-scale-in">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
              <div>
                <h3 className="font-bold text-lg text-slate-100">Navigasi Daftar Soal</h3>
                <p className="text-xs text-slate-400">
                  {totalAnswered} dari {questions.length} soal telah dijawab
                </p>
              </div>
              <button
                onClick={() => setShowNavGrid(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2.5 max-h-80 overflow-y-auto p-1">
              {questions.map((q, idx) => {
                const answered = isQuestionAnswered(q.id);
                const isCurrent = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowNavGrid(false);
                    }}
                    className={`h-11 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer border ${
                      isCurrent
                        ? 'ring-2 ring-emerald-500 ring-offset-2 ring-offset-[#1A1D24] bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold'
                        : answered
                        ? 'border border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold'
                        : 'border border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-emerald-500/10 border border-emerald-500 inline-block" />
                  <span>Sudah Dijawab</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-slate-800 border border-slate-700 inline-block" />
                  <span>Belum Dijawab</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowNavGrid(false);
                  setShowSubmitModal(true);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-colors cursor-pointer"
              >
                Kirim Lembar Ujian
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A1D24] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-700 text-center animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8" />
            </div>

            <h3 className="font-extrabold text-xl text-slate-100 mb-2">
              Kirim Lembar Jawaban?
            </h3>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Anda telah menjawab <strong className="text-emerald-400 font-extrabold">{totalAnswered}</strong> dari <strong className="text-slate-100">{questions.length}</strong> soal.
              {totalAnswered < questions.length && (
                <span className="block mt-2 font-bold text-amber-300 bg-amber-950/40 p-2 rounded-lg border border-amber-800/80 text-xs">
                  ⚠️ Perhatian: Ada {questions.length - totalAnswered} soal yang belum Anda jawab.
                </span>
              )}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 text-sm transition-colors cursor-pointer border border-slate-700"
              >
                Kembali
              </button>
              <button
                onClick={handleConfirmSubmit}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 text-sm shadow-lg shadow-emerald-500/20 transition-colors cursor-pointer"
              >
                Ya, Selesaikan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
