import {Form, redirect, useActionData, useNavigate, useNavigation} from 'react-router-dom';

import classes from '../event/EventForm.module.css';
import {getAuthToken} from "../../util/auth.js";

function QuizForm({ method, quiz }) {
  const navigate = useNavigate();

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const actionData = useActionData();

  function cancelHandler() {
    navigate('..');
  }

  return (
        <Form method={method} className={classes.form}>
            {actionData && actionData.errors && (<ul>
                {Object.values(actionData.errors).map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>)}
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={quiz ? quiz.title : ''}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    defaultValue={quiz ? quiz.description : ''}
                />
            </p>
            {quiz && quiz.questions && quiz.questions.map((question, index) => (
                <div key={question.id} className={classes.question}>
                    <p>
                        <label htmlFor={`question-${index}`}>Question {index + 1}</label>
                        <input
                            id={`question-${index}`}
                            type="text"
                            name={`questions[${index}].text`}
                            required
                            defaultValue={question.text}
                        />
                    </p>
                    {question.answers && question.answers.map((answer, answerIndex) => (
                        <p key={answerIndex}>
                            <label htmlFor={`question-${index}-answer-${answerIndex}`}>Answer {answerIndex + 1}</label>
                            <input
                                id={`question-${index}-answer-${answerIndex}`}
                                type="text"
                                name={`questions[${index}].answers[${answerIndex}]`}
                                required
                                defaultValue={answer}
                            />
                        </p>
                    ))}
                </div>
            ))}
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
            </div>
        </Form>
    );
}

export default QuizForm;

export async function NewEditQuizAction({request, params}) {
    const method = request.method;
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
        ],  //todo question fields
    };

    let url = 'http://localhost:8080/quizzes';

    if (method === 'PATCH') {
        const id = params.quizId; //referring to Router Definition
        url += `/${id}`;
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAuthToken(),

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