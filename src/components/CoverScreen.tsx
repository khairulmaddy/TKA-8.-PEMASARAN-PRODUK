import React, { useState, useEffect } from 'react';
import { StudentInfo, QuizResultRecord } from '../types';
import { getStudentAttempts } from '../utils/storage';
import { Play, Sparkles, Award, Clock, AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react';

interface CoverScreenProps {
  onStartQuiz: (info: StudentInfo, attemptNum: number) => void;
  initialInfo?: StudentInfo;
}

const CLASS_OPTIONS = [
  '-- Pilih Kelas --',
  'XII AKL 1',
  'XII AKL 2',
  'XII BDP 1',
  'XII BDP 2',
  'XII OTKP 1',
  'XII OTKP 2',
  'XII TKJ 1',
  'XII TKJ 2',
  'XII RPL 1',
  'XII MM 1'
];

export const CoverScreen: React.FC<CoverScreenProps> = ({ onStartQuiz, initialInfo }) => {
  const [name, setName] = useState(initialInfo?.name || '');
  const [selectedClass, setSelectedClass] = useState(initialInfo?.className || '-- Pilih Kelas --');
  const [customClass, setCustomClass] = useState('');
  const [isCustomClass, setIsCustomClass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [attemptsHistory, setAttemptsHistory] = useState<QuizResultRecord[]>([]);

  const subject = 'Produk Kreatif dan Kewirausahaan';

  // Whenever name or class changes, check existing attempt history
  useEffect(() => {
    const activeClass = isCustomClass ? customClass : (selectedClass !== '-- Pilih Kelas --' ? selectedClass : '');
    if (name.trim() && activeClass.trim()) {
      const history = getStudentAttempts(name, activeClass);
      setAttemptsHistory(history);
    } else {
      setAttemptsHistory([]);
    }
  }, [name, selectedClass, customClass, isCustomClass]);

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === 'CUSTOM') {
      setIsCustomClass(true);
      setSelectedClass('CUSTOM');
    } else {
      setIsCustomClass(false);
      setSelectedClass(val);
    }
    setErrorMsg('');
  };

  const handleStart = () => {
    if (!name.trim()) {
      setErrorMsg('Harap masukkan Nama Lengkap Siswa');
      return;
    }

    const finalClass = isCustomClass ? customClass.trim() : selectedClass;
    if (!finalClass || finalClass === '-- Pilih Kelas --') {
      setErrorMsg('Harap pilih atau isi Kelas Siswa');
      return;
    }

    const completedAttempts = attemptsHistory.length;
    if (completedAttempts >= 3) {
      setErrorMsg('Anda sudah mencapai batas maksimal 3 kali kesempatan ujian.');
      return;
    }

    const nextAttempt = completedAttempts + 1;
    onStartQuiz(
      {
        name: name.trim(),
        className: finalClass,
        subject
      },
      nextAttempt
    );
  };

  const completedCount = attemptsHistory.length;
  const remainingAttempts = 3 - completedCount;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Animated Gradient Background Wrapper */}
      <div className="relative overflow-hidden rounded-3xl bg-[#1A1D24] border border-slate-700/50 shadow-2xl">
        {/* Animated Dark Color Mesh Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-teal-500/10 animate-gradient-xy pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />

        <div className="relative z-10 p-6 sm:p-10">
          {/* Header Title with Emerald Gradient Animation */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
              <span>Ujian Evaluasi Pembelajaran PKK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent animate-gradient-text">
                Produk Kreatif dan Kewirausahaan
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Ujian interaktif 40 soal evaluasi HOTS berbasis indikator kinerja, STP, ROI, dan strategi pemasaran dengan sistem 3 kali kesempatan.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#0F1115]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl mb-8 max-w-2xl mx-auto">
            <h2 className="text-lg font-bold text-slate-100 mb-5 flex items-center gap-2 border-b border-slate-700/50 pb-3">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Identitas Peserta Ujian</span>
            </h2>

            {errorMsg && (
              <div className="mb-5 p-3.5 bg-red-950/40 border border-red-800/80 rounded-xl text-red-300 text-xs sm:text-sm flex items-center gap-2.5 animate-bounce-once">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-4">
              {/* Nama Siswa */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Nama Lengkap Siswa <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrorMsg('');
                  }}
                  placeholder="Masukkan Nama Lengkap Siswa..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-[#1A1D24] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-slate-100 placeholder-slate-500 text-sm sm:text-base shadow-inner"
                />
              </div>

              {/* Kelas */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Kelas <span className="text-red-400">*</span>
                </label>
                {!isCustomClass ? (
                  <div className="space-y-2">
                    <select
                      value={selectedClass}
                      onChange={handleClassChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-[#1A1D24] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-slate-100 text-sm sm:text-base shadow-inner"
                    >
                      {CLASS_OPTIONS.map((opt) => (
                        <option 
                          key={opt} 
                          value={opt} 
                          disabled={opt === '-- Pilih Kelas --'}
                          className={opt === '-- Pilih Kelas --' ? 'text-slate-500 italic bg-[#1A1D24]' : 'text-slate-100 bg-[#1A1D24]'}
                        >
                          {opt}
                        </option>
                      ))}
                      <option value="CUSTOM" className="bg-[#1A1D24] text-emerald-400 font-bold">+ Ketik Nama Kelas Lain...</option>
                    </select>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customClass}
                      onChange={(e) => {
                        setCustomClass(e.target.value);
                        setErrorMsg('');
                      }}
                      placeholder="Contoh: XII AKL 3..."
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-700 bg-[#1A1D24] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-slate-100 text-sm sm:text-base shadow-inner"
                    />
                    <button
                      type="button"
                      onClick={() => setIsCustomClass(false)}
                      className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 cursor-pointer"
                    >
                      Pilih Daftar
                    </button>
                  </div>
                )}
              </div>

              {/* Mata Pelajaran */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Mata Pelajaran
                </label>
                <input
                  type="text"
                  value={subject}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 font-semibold text-slate-300 text-sm sm:text-base cursor-not-allowed"
                />
              </div>
            </div>

            {/* Status Kesempatan Ujian jika Nama & Kelas sudah diisi */}
            {name.trim() && (isCustomClass ? customClass.trim() : selectedClass !== '-- Pilih Kelas --') && (
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="bg-[#1A1D24] rounded-xl p-4 border border-slate-700/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Status Kesempatan Ujian
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Sisa: {remainingAttempts} dari 3
                    </span>
                  </div>

                  {attemptsHistory.length > 0 ? (
                    <div className="space-y-2 mt-3">
                      {attemptsHistory.map((res, i) => (
                        <div
                          key={res.id || i}
                          className="flex items-center justify-between text-xs bg-[#0F1115] p-2.5 rounded-lg border border-slate-700 shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span className="font-semibold text-slate-200">
                              Kesempatan {res.attemptNumber}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-slate-400">
                              Benar: <strong className="text-slate-200">{res.correctCount}</strong>/40
                            </span>
                            <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              Skor: {res.score}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic">
                      Belum ada riwayat ujian untuk identitas ini. Anda memiliki 3 kesempatan penuh.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="mt-6">
              {completedCount < 3 ? (
                <button
                  onClick={handleStart}
                  className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                  <span>
                    Mulai Ujian ({completedCount === 0 ? 'Kesempatan 1' : completedCount === 1 ? 'Kesempatan 2' : 'Kesempatan 3 (Terakhir)'})
                  </span>
                </button>
              ) : (
                <div className="p-4 bg-amber-950/40 border border-amber-800/80 rounded-xl text-center">
                  <p className="text-amber-300 font-bold text-sm mb-1">
                    Batas Ujian Tercapai (3/3 Kesempatan)
                  </p>
                  <p className="text-xs text-amber-200/80">
                    Anda sudah menggunakan seluruh 3 kesempatan ujian. Hasil terbaik Anda telah tersimpan di sistem rekapitulasi nilai.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Rules / Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#0F1115]/60 rounded-xl p-4 border border-slate-700/50 shadow-2xs">
              <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-bold text-sm">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Timer Stopwatch</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Waktu pengerjaan akan dihitung otomatis oleh stopwatch dan dicatat dalam detik pada hasil akhir.
              </p>
            </div>

            <div className="bg-[#0F1115]/60 rounded-xl p-4 border border-slate-700/50 shadow-2xs">
              <div className="flex items-center gap-2 mb-1.5 text-teal-400 font-bold text-sm">
                <RefreshCw className="w-4 h-4 text-teal-400" />
                <span>Kesempatan 1 & 2</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Menampilkan soal urut standar. Setelah selesai, kunci jawaban dan pembahasan lengkap akan ditampilkan untuk bahan evaluasi.
              </p>
            </div>

            <div className="bg-[#0F1115]/60 rounded-xl p-4 border border-slate-700/50 shadow-2xs">
              <div className="flex items-center gap-2 mb-1.5 text-cyan-400 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Kesempatan 3 (Final)</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Urutan soal dan opsi jawaban A-E diacak otomatis. Setelah selesai, hanya menampilkan skor akhir dan rekap benar/salah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
