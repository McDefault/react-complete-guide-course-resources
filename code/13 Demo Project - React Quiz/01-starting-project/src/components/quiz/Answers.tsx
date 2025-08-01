import {useRef} from "react";
import type {AnswerStateValues} from "../../models/AnswerStateValues.ts";

type AnswersProp = {
    answers: string[],
    selectedAnswer: string,
    answerState: AnswerStateValues,
    onSelect: (answer: string) => void, //function type definition: (...parameters) => (return type)
}

const Answers: React.FC<AnswersProp> = ({answers, selectedAnswer, answerState, onSelect}) => {

    const shuffledAnswers = useRef<string[]>(null);

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers]; //create new array reference copy in memory from original reference
        shuffledAnswers.current.sort(() => Math.random() - 0.5); //sort alters original reference
    }

    return (
        <ul id={"answers"}>
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = '';

                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }
                return (
                    <li key={answer} className={"answer"}>
                        <button
                            onClick={() => onSelect(answer)}
                            className={cssClass}
                            disabled={answerState !== ''}
                        >
                            {answer}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Answers;