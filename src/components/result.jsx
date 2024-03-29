import { useContext } from "react";
import GlobalContext from "../context/mainContext";
import questions from "../assets/questions";

const Result = () => {
    const { answers } = useContext(GlobalContext);

    let correct = 0;
    let incorrect = 0;
    let empty = 0;

    return (
        <div className="resultDiv" style={{ display: "none" }}>
            <div className="rslt">
                <h1>Test Results</h1>

                <div className="uls">
                    
                    <ul className="resultList">
                    <h3>Your answers:</h3>
                        {answers.map((answer, index) => {
                            let color;
                            if (answers[index] === questions[index].answer) {
                                correct++;
                                color = "green";
                            } else if (answers[index] === "") {
                                empty++;
                                color = "black";
                            } else {
                                incorrect++;
                                color = "red";
                            }
                            return (
                                <li key={index}>
                                    Question {index + 1}:{" "}
                                    <span style={{ color }} className="qA">{answer}</span>{" "}
                                </li>
                            );
                        })}
                    </ul>

                    <ul className="rightAnswers">
                    <h3>Right answers:</h3>
                        {questions.map((question, index) => {
                                li: return (
                                    <li key={index}>
                                        <span style={{ color: "green" }} className="qA">{question.answer}</span>{" "}
                                    </li>
                                );
                            })}
                    </ul>
                </div>

                <div className="score">
                    <h2 className="correct">Correct: {correct}</h2>
                    <h2 className="incorrect">Incorrect: {incorrect}</h2>
                    <h2 className="empty">Empty: {empty}</h2>
                </div>
            </div>
        </div>
    );
};

export default Result;
