import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto px-8 py-4 bg-[#0F1115] border-t border-slate-800 flex justify-between items-center flex-wrap gap-2">
      <p className="text-[10px] text-slate-500 font-medium">
        Kesempatan Ujian PKK (3 Kesempatan • Stopwatch & Kunci Jawaban)
      </p>
      <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
        Copywrite by Khairul Maddy
      </p>
    </footer>
  );
};
