import {type FC, useEffect, useState} from "react";
import type {AnswerStateValues} from "../../models/AnswerStateValues.ts";

type QuestionTimerProp = {
    timeout: number,
    onTimeout: (answer: string) => void | null, //function type definition: (...parameters) => (return type)
    mode: AnswerStateValues, //function type definition: (...parameters) => (return type)
}

const QuestionTimer: FC<QuestionTimerProp> = ({timeout, onTimeout, mode}) => {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timerTimeout = setTimeout(onTimeout, timeout);

        return () => clearTimeout(timerTimeout);
    }, [timeout, onTimeout]); //re-execute if references change (Props and States)

    useEffect(() => {
        const remainingTimeInterval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => clearInterval(remainingTimeInterval);
    }, []);

    return (
        <progress id={"question-time"} max={timeout} value={remainingTime} className={mode}></progress>
    )
}

export default QuestionTimer;