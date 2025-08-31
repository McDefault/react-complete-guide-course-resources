import type {Quiz} from "../Quiz.ts";

// export type QuizProgressContextType = {
//     token: string | null;
// }
export type QuizProgressContextType = {
    items: string[];
    index: number;
    quiz: Quiz,
    onSelectAnswer: (answer: string) => void;
    onSkipAnswer: () => void;
}