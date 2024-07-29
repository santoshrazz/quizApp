export interface question {
  ans: string;
  que: {
    Question: string;
    A: string;
    B: string;
    C: string;
    D: string;
    correct: number;
  };
}
export interface ParsedData {
  coin: number;
  UnAttempted: number;
  correct: number;
  incorrect: number;
  Time: number;
  question: [question];
}
