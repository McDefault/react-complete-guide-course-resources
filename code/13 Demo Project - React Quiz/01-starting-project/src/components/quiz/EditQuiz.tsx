import {useRouteLoaderData} from "react-router-dom";
import QuizForm from "./QuizForm.tsx";

function EditQuizPage() {
  const loaderData = useRouteLoaderData('quiz-detail');
  const quiz = loaderData.quiz;
  return <QuizForm method={"patch"} quiz={quiz} />
}

export default EditQuizPage;
