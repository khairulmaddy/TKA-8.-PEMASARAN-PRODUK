import React, { useState } from 'react';
import { QuizResultRecord, Question } from '../types';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  BookOpen, 
  Sparkles, 
  Check, 
  X,
  FileText,
  Award
} from 'lucide-react';

interface ResultScreenProps {
  record: QuizResultRecord;
  questions: Question[];
  onRetry: () => void;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  record,
  questions,
  onRetry,
  onHome,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'correct' | 'wrong'>('all');

  const formatDuration = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins} menit ${secs} detik`;
  };

  // Helper to check if student answer matches key
  const isAnswerCorrect = (q: Question) => {
    const uAns = record.userAnswers[q.id];
    if (uAns === undefined) return false;

    if (Array.isArray(q.correctAnswer)) {
      if (!Array.isArray(uAns)) return false;
      if (uAns.length !== q.correctAnswer.length) return false;
      const sortedKey = [...q.correctAnswer].sort();
      const sortedUser = [...uAns].sort();
      return sortedKey.every((val, index) => val === sortedUser[index]);
    }

    return uAns === q.correctAnswer;
  };

  const showExplanations = record.attemptNumber < 3;

  const filteredQuestions = questions.filter((q) => {
    const correct = isAnswerCorrect(q);
    if (filterType === 'correct') return correct;
    if (filterType === 'wrong') return !correct;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Score Summary Card */}
      <div className="bg-[#1A1D24] rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden mb-8">
        {/* Banner with Animated Dark Gradient */}
        <div className="bg-gradient-to-r from-slate-900 via-[#1A1D24] to-slate-900 p-6 sm:p-10 text-white relative overflow-hidden border-b border-slate-700/50">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
              <Trophy className="w-9 h-9 text-emerald-400" />
            </div>

            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
              Hasil Ujian Kesempatan {record.attemptNumber} dari 3
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 text-slate-100">
              {record.studentName}
            </h1>
            <p className="text-slate-400 font-medium text-sm sm:text-base">
              Kelas {record.className} • {record.subject}
            </p>

            {/* Score Display Pill */}
            <div className="mt-6 inline-flex items-center gap-3 bg-[#0F1115]/90 text-slate-100 px-6 py-3 rounded-2xl shadow-xl border border-slate-700/80">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Skor Akhir:
              </span>
              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {record.score}
              </span>
              <span className="text-slate-500 font-bold text-sm">/ 100</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#0F1115]/50 border-b border-slate-800">
          <div className="bg-[#1A1D24] p-4 rounded-2xl border border-slate-700/60 shadow-2xs text-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
            <span className="text-xs font-bold text-slate-400 uppercase block">Jawaban Benar</span>
            <span className="text-2xl font-black text-emerald-400">{record.correctCount}</span>
            <span className="text-xs text-slate-500 block font-medium">soal</span>
          </div>

          <div className="bg-[#1A1D24] p-4 rounded-2xl border border-slate-700/60 shadow-2xs text-center">
            <XCircle className="w-6 h-6 text-red-400 mx-auto mb-1" />
            <span className="text-xs font-bold text-slate-400 uppercase block">Jawaban Salah</span>
            <span className="text-2xl font-black text-red-400">{record.wrongCount}</span>
            <span className="text-xs text-slate-500 block font-medium">soal</span>
          </div>

          <div className="bg-[#1A1D24] p-4 rounded-2xl border border-slate-700/60 shadow-2xs text-center">
            <Clock className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
            <span className="text-xs font-bold text-slate-400 uppercase block">Durasi Pengerjaan</span>
            <span className="text-sm sm:text-base font-extrabold text-slate-200 block mt-1 font-mono">
              {formatDuration(record.durationSeconds)}
            </span>
          </div>

          <div className="bg-[#1A1D24] p-4 rounded-2xl border border-slate-700/60 shadow-2xs text-center">
            <Award className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
            <span className="text-xs font-bold text-slate-400 uppercase block">Total Kesempatan</span>
            <span className="text-sm sm:text-base font-extrabold text-cyan-300 block mt-1">
              {record.attemptNumber} / 3 Digunakan
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-[#1A1D24] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onHome}
            className="px-5 py-3 rounded-xl font-bold text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
          >
            Halaman Depan
          </button>

          {record.attemptNumber < 3 ? (
            <button
              onClick={onRetry}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>
                Coba Ulang (Kesempatan {record.attemptNumber + 1} dari 3)
              </span>
            </button>
          ) : (
            <div className="text-xs font-bold text-amber-300 bg-amber-950/40 px-4 py-2 rounded-xl border border-amber-800/80">
              Ujian Kesempatan Terakhir Selesai
            </div>
          )}
        </div>
      </div>

      {/* Explanations Section - Only for Kesempatan 1 & 2 */}
      {showExplanations ? (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#1A1D24] p-4 sm:p-5 rounded-2xl border border-slate-700/60 shadow-md">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <div>
                <h2 className="font-bold text-slate-100 text-base sm:text-lg">
                  Evaluasi Jawaban & Pembahasan
                </h2>
                <p className="text-xs text-slate-400">
                  Tinjauan rinci kunci jawaban dan pembahasan untuk bahan belajar Anda.
                </p>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1.5 bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === 'all'
                    ? 'bg-[#1A1D24] text-emerald-400 shadow-2xs border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Semua ({questions.length})
              </button>
              <button
                onClick={() => setFilterType('correct')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === 'correct'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Benar ({record.correctCount})
              </button>
              <button
                onClick={() => setFilterType('wrong')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === 'wrong'
                    ? 'bg-red-600 text-white shadow-2xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Salah ({record.wrongCount})
              </button>
            </div>
          </div>

          {/* List of Questions with Detailed Explanations */}
          <div className="space-y-5">
            {filteredQuestions.map((q, idx) => {
              const isCorrect = isAnswerCorrect(q);
              const userAns = record.userAnswers[q.id];

              return (
                <div
                  key={q.id}
                  className={`bg-[#1A1D24] rounded-2xl border-2 p-6 shadow-md transition-all ${
                    isCorrect ? 'border-emerald-500/50' : 'border-red-500/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-slate-700/60">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-slate-800 text-emerald-400 border border-slate-700 font-bold text-xs flex items-center justify-center">
                        {q.id}
                      </span>
                      <h3 className="font-bold text-slate-100 text-sm sm:text-base">
                        {q.title}
                      </h3>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border ${
                        isCorrect
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-red-500/10 text-red-400 border-red-500/30'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Jawaban Benar
                        </>
                      ) : (
                        <>
                          <X className="w-3.5 h-3.5" /> Jawaban Salah
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-slate-100 font-medium text-sm sm:text-base mb-4 leading-relaxed">
                    {q.stem}
                  </p>

                  {/* Options status */}
                  <div className="space-y-2 mb-4">
                    {q.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      let isUserSelected = false;

                      if (Array.isArray(userAns)) {
                        isUserSelected = userAns.includes(opt.id);
                      } else {
                        isUserSelected = userAns === opt.id;
                      }

                      let isKeyOption = false;
                      if (Array.isArray(q.correctAnswer)) {
                        isKeyOption = q.correctAnswer.includes(opt.id);
                      } else {
                        isKeyOption = q.correctAnswer === opt.id;
                      }

                      let optionBg = 'bg-slate-800/40 border-slate-700 text-slate-300';
                      if (isKeyOption) {
                        optionBg = 'bg-emerald-500/10 border-emerald-500/60 text-emerald-200 font-bold';
                      } else if (isUserSelected && !isKeyOption) {
                        optionBg = 'bg-red-500/10 border-red-500/60 text-red-200 font-medium';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-sm flex items-start gap-3 ${optionBg}`}
                        >
                          <span className="w-6 h-6 rounded text-xs font-bold flex items-center justify-center shrink-0 bg-slate-800 border border-slate-700 text-slate-300">
                            {letter}
                          </span>
                          <span className="flex-1 font-semibold leading-snug">
                            {opt.label}
                          </span>
                          {isKeyOption && (
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
                              Kunci Jawaban
                            </span>
                          )}
                          {isUserSelected && !isKeyOption && (
                            <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30 shrink-0">
                              Jawaban Anda
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Block */}
                  <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 text-xs sm:text-sm">
                    <div className="font-extrabold text-emerald-400 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Pembahasan Soal:</span>
                    </div>
                    <p className="text-emerald-200 font-medium leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Kesempatan 3 Note */
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 text-center text-slate-300">
          <FileText className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
          <h3 className="font-bold text-base text-slate-100 mb-1">
            Ujian Kesempatan 3 (Mode Evaluasi Akhir)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Pada kesempatan terakhir ini, soal dan opsi jawaban diacak secara otomatis untuk menguji pemahaman mendalam Anda. Hasil nilai akhir Anda telah direkam otomatis oleh sistem.
          </p>
        </div>
      )}
    </div>
  );
};
