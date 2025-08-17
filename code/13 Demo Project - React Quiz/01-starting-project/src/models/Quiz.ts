import type {Question} from "./Question.ts";

export type Quiz = {
    id: string;
    title: string;
    description: string;
    questions: Question[];
};

// class Quiz {
//     id: string;
//     title: string;
//     description: string;
//     questions: Question[];
//
//     constructor({ id, title, description, questions }: QuizData) {
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.questions = questions;
//     }
//
//     getQuestionCount(): number {
//         return this.questions.length;
//     }
//
//     getQuestionById(id: string): Question | undefined {
//         return this.questions.find((q) => q.id === id);
//     }
// }
// export default Quiz;