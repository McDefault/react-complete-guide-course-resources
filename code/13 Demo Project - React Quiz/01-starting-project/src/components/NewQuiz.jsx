import {redirect} from "react-router-dom";
import QuizForm from "./QuizForm.jsx";

function NewQuizPage() {
    return <QuizForm/>
}

export default NewQuizPage;

export async function NewQuizAction({request}) {
    const data = await request.formData();

    const quizData = {
        title: data.get('title'),
        description: data.get('description'),
        questions: [
            {
                id: 'q1',
                text: 'Which of the following definitions best describes React.js?',
                answers: [
                    'A library to build user interfaces with help of declarative code.',
                    'A library for managing state in web applications.',
                    'A framework to build user interfaces with help of imperative code.',
                    'A library used for building mobile applications only.',
                ],
            },
            {
                id: 'q2',
                text: 'What purpose do React hooks serve?',
                answers: [
                    'Enabling the use of state and other React features in functional components.',
                    'Creating responsive layouts in React applications.',
                    'Handling errors within the application.',
                    'Part of the Redux library for managing global state.',
                ],
            }
        ],
    };

    const response = await fetch('http://localhost:8080/quizzes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not save quiz.'}), {
            status: 500,
        });
    }

    return redirect('/quiz');
}
