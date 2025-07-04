import {Form, useNavigate, useNavigation} from 'react-router-dom';

import classes from './EventForm.module.css';

function QuizForm({ method, quiz }) {
  const navigate = useNavigate();

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
        <Form method={"post"} className={classes.form}>
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
