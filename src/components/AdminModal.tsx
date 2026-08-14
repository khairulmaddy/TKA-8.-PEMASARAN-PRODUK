import React, { useState } from 'react';
import { QuizResultRecord } from '../types';
import { getAllResults, clearAllResults, exportResultsToExcel } from '../utils/storage';
import { 
  Key, 
  Lock, 
  Download, 
  Search, 
  Trash2, 
  X, 
  Users, 
  Award, 
  Clock, 
  CheckCircle2, 
  ShieldCheck,
  RefreshCw,
  LogOut
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLoginSuccess: () => void;
  onLogout: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  onLoginSuccess,
  onLogout,
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterClass, setFilterClass] = useState('ALL');
  const [results, setResults] = useState<QuizResultRecord[]>(getAllResults());

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin password check
    if (passwordInput === 'admin123' || passwordInput === 'pkk2026' || passwordInput === 'admin') {
      setPasswordInput('');
      setErrorMsg('');
      onLoginSuccess();
      setResults(getAllResults());
    } else {
      setErrorMsg('Kata sandi yang Anda masukkan salah. Silakan coba lagi.');
    }
  };

  const handleRefresh = () => {
    setResults(getAllResults());
  };

  const handleClearAll = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus SELURUH rekapitulasi data nilai siswa? Tindakan ini tidak dapat dibatalkan.')) {
      clearAllResults();
      setResults([]);
    }
  };

  const handleExport = () => {
    exportResultsToExcel(results);
  };

  // Get list of unique classes for filter
  const uniqueClasses = Array.from(new Set(results.map((r) => r.className))).sort();

  // Filtered results
  const filteredResults = results.filter((r) => {
    const matchesSearch =
      r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.className.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = filterClass === 'ALL' || r.className === filterClass;
    return matchesSearch && matchesClass;
  });

  // Calculate statistics
  const totalSubmissions = results.length;
  const avgScore = totalSubmissions > 0
    ? Math.round(results.reduce((acc, curr) => acc + curr.score, 0) / totalSubmissions)
    : 0;
  const highestScore = totalSubmissions > 0
    ? Math.max(...results.map((r) => r.score))
    : 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1A1D24] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-700/60 animate-scale-in">
        {/* Modal Header */}
        <div className="bg-[#0F1115] text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-lg shadow-sm">
              🔑
            </div>
            <div>
              <h2 className="font-extrabold text-lg sm:text-xl text-slate-100">
                Laporan & Rekapitulasi Nilai Admin
              </h2>
              <p className="text-xs text-slate-400">
                Sistem Penilaian Guru Produk Kreatif dan Kewirausahaan
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        {!isLoggedIn ? (
          /* Login Form */
          <div className="p-8 sm:p-12 max-w-md mx-auto w-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
              <Lock className="w-8 h-8" />
            </div>

            <h3 className="font-extrabold text-xl text-slate-100 mb-1">
              Otentikasi Administrator
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Masukkan kata sandi admin untuk mengakses rekapitulasi penilaian semua siswa.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-950/60 border border-red-800/80 rounded-xl text-xs text-red-300 font-semibold">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Masukkan Kata Sandi Admin..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-slate-100 text-sm placeholder:text-slate-500 shadow-2xs"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4" />
                <span>Masuk Sekarang</span>
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard Web Report */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Quick Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase block">Total Lembar Jawaban</span>
                  <span className="text-2xl font-black text-slate-100">{totalSubmissions}</span>
                </div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase block">Rata-Rata Nilai</span>
                  <span className="text-2xl font-black text-slate-100">{avgScore}</span>
                </div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase block">Nilai Tertinggi</span>
                  <span className="text-2xl font-black text-slate-100">{highestScore}</span>
                </div>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div className="flex flex-wrap items-center gap-3 flex-1">
                {/* Search Input */}
                <div className="relative min-w-[200px] flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari Nama Siswa atau Kelas..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-700 text-xs font-medium text-slate-100 bg-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Class Filter */}
                <select
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-slate-700 text-xs font-medium text-slate-100 bg-slate-800 focus:outline-none focus:border-emerald-500"
                >
                  <option value="ALL">Semua Kelas</option>
                  {uniqueClasses.map((c) => (
                    <option key={c} value={c}>
                      Kelas {c}
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleRefresh}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  title="Segarkan Data"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExport}
                  disabled={results.length === 0}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white transition-all shadow-xs cursor-pointer ${
                    results.length === 0
                      ? 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/20'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Excel (.xlsx)</span>
                </button>

                <button
                  onClick={handleClearAll}
                  disabled={results.length === 0}
                  className="p-2 text-red-400 bg-slate-800 hover:bg-red-950/50 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  title="Hapus Seluruh Data"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Table */}
            {filteredResults.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-slate-700/60 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-slate-300 uppercase tracking-wider border-b border-slate-800 font-extrabold">
                      <th className="p-3 w-12 text-center">No</th>
                      <th className="p-3">Nama Siswa</th>
                      <th className="p-3">Kelas</th>
                      <th className="p-3 text-center">Kesempatan</th>
                      <th className="p-3 text-center">Skor</th>
                      <th className="p-3 text-center">Benar / Salah</th>
                      <th className="p-3 text-center">Durasi</th>
                      <th className="p-3">Tanggal & Waktu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-medium text-slate-200 bg-[#1A1D24]">
                    {filteredResults.map((row, idx) => {
                      const minutes = Math.floor(row.durationSeconds / 60);
                      const seconds = row.durationSeconds % 60;
                      const durationText = `${minutes}m ${seconds}s`;

                      const dateText = new Date(row.completedAt).toLocaleString('id-ID', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      });

                      return (
                        <tr key={row.id || idx} className="hover:bg-slate-800/60 transition-colors">
                          <td className="p-3 text-center font-bold text-slate-500">{idx + 1}</td>
                          <td className="p-3 font-bold text-slate-100">{row.studentName}</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold border border-slate-700">
                              {row.className}
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">
                              Ke-{row.attemptNumber}
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <span className={`px-2.5 py-1 rounded-lg font-black text-sm ${
                              row.score >= 75
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            }`}>
                              {row.score}
                            </span>
                          </td>
                          <td className="p-3 text-center font-bold">
                            <span className="text-emerald-400">{row.correctCount}</span>
                            <span className="text-slate-600 mx-1">/</span>
                            <span className="text-red-400">{row.wrongCount}</span>
                          </td>
                          <td className="p-3 text-center text-slate-400 font-mono">{durationText}</td>
                          <td className="p-3 text-slate-400 text-[11px]">{dateText}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center bg-slate-900/60 rounded-2xl border border-dashed border-slate-800">
                <Users className="w-10 h-10 text-slate-500 mx-auto mb-2" />
                <p className="font-bold text-slate-300 text-sm">Belum ada data rekapitulasi siswa</p>
                <p className="text-xs text-slate-500 mt-1">
                  Hasil pengerjaan kuis siswa di perangkat ini akan muncul di sini secara otomatis.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        {isLoggedIn && (
          <div className="p-4 bg-[#0F1115] border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Sesi Admin Terotentikasi</span>
            </div>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-400 hover:text-red-300 bg-slate-800 hover:bg-red-950/50 rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar Sesi Admin</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
