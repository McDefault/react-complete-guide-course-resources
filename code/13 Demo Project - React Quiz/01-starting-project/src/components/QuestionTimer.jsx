import {useEffect, useState} from "react";

export default function QuestionTimer({timeout, onTimeout}) {
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
        <progress id={"question-time"} max={timeout} value={remainingTime}></progress>
    )
}