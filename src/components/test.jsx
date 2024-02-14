import { useState, useEffect, useContext } from 'react';
import questions from '../assets/questions';
import GlobalContext from '../context/mainContext';

const Test = () => {

    const GlobalState = useContext(GlobalContext)
    const [seconds, setSeconds] = useState(30);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const question = questions[currentQuestionIndex];

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (GlobalState.click){
                if (seconds > 0) {
                    setSeconds(prevSeconds => prevSeconds - 1);
                } else {
                    clearInterval(intervalId);
                    if (currentQuestionIndex < questions.length - 1) {
                        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                        GlobalState.setAnswers([...GlobalState.answers, ""])
                        setSeconds(30);
                    }
                }
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [seconds, currentQuestionIndex, GlobalState.click]);

    const handleAnswer = (selectedOption) => {
        GlobalState.setAnswers([...GlobalState.answers, selectedOption])
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSeconds(30);
        }

        if (currentQuestionIndex === questions.length -1 ) {
            const questionDiv = document.querySelector(".questionDiv")
            questionDiv.style.display = "none";
            const resultDiv = document.querySelector(".resultDiv")
            resultDiv.style.display = "block";
        }
    };
    
    return (
        <div className="questionDiv" style={{display:"none"}}>
            <h1 className="sec">{seconds}</h1>
            <div className="questionImg">
                <img src={question.media} alt="media" /> 
            </div>
            <div className="questionTitle">
                <h2>{question.question}</h2>
            </div>
            <div className="buttons">
                {seconds < 20 && question.options.map((option, index) => (
                    <button className="answerButton" key={index} onClick={() => handleAnswer(option)}>{option}</button>
                ))}
            </div>
        </div>
    );
    


}

export default Test;
