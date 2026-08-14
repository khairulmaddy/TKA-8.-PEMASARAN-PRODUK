export type QuestionType = 'single_choice' | 'matching' | 'true_false' | 'multiple_select';

export interface QuestionOption {
  id: string; // 'a', 'b', 'c', 'd', 'e' or 'true', 'false'
  label: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  cognitiveLevel: string; // 'C1', 'C2', 'C3', 'C4', 'C5'
  title: string;
  stem: string;
  options: QuestionOption[];
  correctAnswer: string | string[]; // string for single/matching/tf, array for multiple_select (e.g. ['a', 'b', 'd', 'e'])
  explanation: string;
}

export interface StudentInfo {
  name: string;
  className: string;
  subject: string;
}

export interface AnswerState {
  [questionId: number]: string | string[]; // 'a' or ['a', 'b']
}

export interface QuizResultRecord {
  id: string;
  studentName: string;
  className: string;
  subject: string;
  score: number; // 0-100
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  attemptNumber: number; // 1, 2, or 3
  durationSeconds: number;
  completedAt: string; // ISO date string
  userAnswers: AnswerState;
}

export interface StudentAttemptHistory {
  studentKey: string; // normalized name + class
  attempts: QuizResultRecord[];
}
