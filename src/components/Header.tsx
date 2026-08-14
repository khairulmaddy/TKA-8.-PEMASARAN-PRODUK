import React from 'react';
import { Key, Clock, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
  onAdminLogout: () => void;
  isQuizActive?: boolean;
  formattedTime?: string;
  attemptNumber?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAdmin,
  isAdminLoggedIn,
  onAdminLogout,
  isQuizActive,
  formattedTime,
  attemptNumber,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#1A1D24] border-b border-slate-700/50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-xl text-slate-950 shadow-lg shadow-emerald-500/20 shrink-0">
            PK
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-semibold tracking-tight text-slate-100 leading-tight">
              Produk Kreatif dan Kewirausahaan
            </h1>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              Ujian & Evaluasi Pembelajaran Interaktif
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isQuizActive && formattedTime && (
            <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-1.5 rounded-full font-mono font-bold text-sm sm:text-base text-emerald-400 shadow-xs">
              <Clock className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>{formattedTime}</span>
            </div>
          )}

          {isQuizActive && attemptNumber && (
            <div className="hidden md:flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 text-amber-400 px-3 py-1.5 rounded-full text-xs font-semibold">
              <span>Kesempatan {attemptNumber}/3</span>
              {attemptNumber === 3 && (
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
                  Acak
                </span>
              )}
            </div>
          )}

          {isAdminLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" /> Admin Active
              </span>
              <button
                onClick={onAdminLogout}
                className="text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-red-400 bg-slate-800 hover:bg-slate-700/80 px-3 py-1.5 rounded-lg transition-colors border border-slate-700 cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAdmin}
              className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white flex items-center gap-2 transition-colors bg-slate-800/80 hover:bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700 cursor-pointer"
            >
              <span>Admin</span>
              <span>🔑</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
