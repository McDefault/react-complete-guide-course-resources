import QuizForm from "./QuizForm.tsx";
import type {Quiz} from "../../models/Quiz.ts";

function NewQuizPage() {
    const initialQuizData: Quiz = {
        id: '',
        title: 'Quiz Title',
        description: 'Quiz Description',
        questions:
            [
                {
                    id: 'q1',
                    text: 'Question 1 Title',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                    ],
                },
                {
                    id: 'q2',
                    text:
                        'Question 2 Title',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                    ],
                }
            ]
    }

    return <QuizForm method={"post"} quiz={initialQuizData}/>
}

export default NewQuizPage;