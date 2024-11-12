import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswer = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
    const skippedAnswersShares = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnswersShares = Math.round((correctAnswer.length / userAnswers.length) * 100);
    const wrongAnswersShares = 100 - skippedAnswersShares - correctAnswersShares;

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShares}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShares}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersShares}%</span>
                    <span className="text">answered incorectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';
                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}