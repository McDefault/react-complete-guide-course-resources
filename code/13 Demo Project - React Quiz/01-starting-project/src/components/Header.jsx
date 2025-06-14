import logImg from '../assets/quiz-logo.png';
export default function Header() {
    return (
        <header>
            <img src={logImg} alt=""/>
            <h1>Quiz</h1>
        </header>
    )
}