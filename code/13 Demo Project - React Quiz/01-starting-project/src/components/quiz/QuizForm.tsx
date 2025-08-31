import {Form, redirect, useActionData, useNavigate, useNavigation} from 'react-router-dom';
import classes from '../event/EventForm.module.css';
import {type FC} from "react";
import type {RequestMethodValues} from "../../models/RequestMethodValues.ts";
import type {Quiz} from "../../models/Quiz.ts";
import {patchQuizById, postQuiz} from "../../util/http.ts";
import {useQuizProgressContext} from "../../hooks/useQuizProgressContext.ts";

type QuizFormProp = {
    method: RequestMethodValues,
}

const QuizForm: FC<QuizFormProp> = ({method}) => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const actionData = useActionData();

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

    let {quiz} = useQuizProgressContext();

    if (!quiz.title) {
        quiz = initialQuizData
    }

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
                    placeholder={initialQuizData.title}
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
                    placeholder={initialQuizData.description}
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
                            name={`questions-${index}-text`}
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
                                name={`questions-${index}-answers-${answerIndex}`}
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
    const id = params.quizId; //referring to Router Definition

    const quizData = {
        title: data.get('title'),
        description: data.get('description'),
        questions: [
            {
                id: 'q1',
                text: data.get('questions-0-text'),
                answers: [
                    data.get('questions-0-answers-0'),
                    data.get('questions-0-answers-1'),
                    data.get('questions-0-answers-2'),
                    data.get('questions-0-answers-3'),
                ],
            },
            {
                id: 'q2',
                text: data.get('questions-1-text'),
                answers: [
                    data.get('questions-1-answers-0'),
                    data.get('questions-1-answers-1'),
                    data.get('questions-1-answers-2'),
                    data.get('questions-1-answers-3'),
                ],
            }
        ],
    };

    if (method === 'PATCH') {
        await patchQuizById(id, quizData);
    } else {
        await postQuiz(quizData);
    }

    return redirect('/quiz');
}