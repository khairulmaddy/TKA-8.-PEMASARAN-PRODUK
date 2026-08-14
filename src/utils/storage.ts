import { QuizResultRecord, Question, QuestionOption } from '../types';
import * as XLSX from 'xlsx';

const STORAGE_KEY = 'pkk_quiz_student_results_v1';

export function getAllResults(): QuizResultRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load quiz results from localStorage', err);
    return [];
  }
}

export function saveResult(record: QuizResultRecord): void {
  const existing = getAllResults();
  existing.unshift(record); // newest first
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error('Failed to save quiz result to localStorage', err);
  }
}

export function getStudentAttempts(studentName: string, className: string): QuizResultRecord[] {
  const all = getAllResults();
  const nameNorm = studentName.trim().toLowerCase();
  const classNorm = className.trim().toLowerCase();

  return all.filter(r => 
    r.studentName.trim().toLowerCase() === nameNorm &&
    r.className.trim().toLowerCase() === classNorm
  );
}

export function clearAllResults(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// Fisher-Yates shuffle helper
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Function to prepare questions for attempt 3 (shuffled questions and options)
export function prepareQuestionsForAttempt(questions: Question[], attemptNum: number): Question[] {
  if (attemptNum < 3) {
    // Attempt 1 & 2: Original question order and original option order
    return questions.map(q => ({
      ...q,
      options: [...q.options]
    }));
  }

  // Attempt 3: Randomize question order AND option order
  const shuffledQuestions = shuffleArray(questions);
  return shuffledQuestions.map(q => {
    // Randomize options for each question
    const shuffledOptions: QuestionOption[] = shuffleArray(q.options);
    return {
      ...q,
      options: shuffledOptions
    };
  });
}

// Export to Excel function using XLSX
export function exportResultsToExcel(records: QuizResultRecord[]): void {
  const formattedData = records.map((r, index) => {
    const dateStr = new Date(r.completedAt).toLocaleString('id-ID', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    
    const minutes = Math.floor(r.durationSeconds / 60);
    const seconds = r.durationSeconds % 60;
    const durationStr = `${minutes}m ${seconds}s`;

    return {
      'No': index + 1,
      'Nama Siswa': r.studentName,
      'Kelas': r.className,
      'Mata Pelajaran': r.subject,
      'Kesempatan Ke': `Kesempatan ${r.attemptNumber}`,
      'Skor': r.score,
      'Jawaban Benar': r.correctCount,
      'Jawaban Salah': r.wrongCount,
      'Total Soal': r.totalQuestions,
      'Durasi Waktu': durationStr,
      'Tanggal & Waktu': dateStr
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // Set column widths
  worksheet['!cols'] = [
    { wch: 5 },  // No
    { wch: 25 }, // Nama
    { wch: 15 }, // Kelas
    { wch: 35 }, // Mapel
    { wch: 15 }, // Kesempatan
    { wch: 10 }, // Skor
    { wch: 15 }, // Benar
    { wch: 15 }, // Salah
    { wch: 12 }, // Total Soal
    { wch: 15 }, // Durasi
    { wch: 22 }  // Tanggal
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Hasil Ujian PKK');

  const filename = `Rekap_Nilai_PKK_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(workbook, filename);
}
