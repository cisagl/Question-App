import { useContext, useEffect } from "react";
import GlobalContext, { GlobalProvider } from "../context/mainContext";

const Info = () => {

    // DEĞERLENDİRME FORMU 2

    const {click, setClick} = useContext(GlobalContext)

    useEffect(() => {
        const handleClick = () => {
            const startDiv = document.querySelector(".startDiv");
            const questionDiv = document.querySelector(".questionDiv")
            if (startDiv) {
                startDiv.style.display = "none";
                questionDiv.style.display = "flex";
                setClick(true);
            }
        };

        const startButton = document.getElementById("start");
        if (startButton) {
            startButton.addEventListener("click", handleClick);

            return () => {
                startButton.removeEventListener("click", handleClick);
            };
        }
    }, []);
        

    return (
        <div className="startDiv">
            <h1 className="wlcm">Welcome To Question App</h1>
            <ul className="startInfo">
                <li>There are a total of 10 questions</li>
                <li>Each question will remain on the screen for 30 seconds</li>
                <li>The answer choices will not be visible for the first 10 seconds of each question</li>
                <li>After answering a question, <span className="dngr">there will be no turning back</span></li>
                <li>The test result will be shared on the screen after the test is completed</li>
            </ul>
            <button id="start">START THE TEST</button>
        </div>
    );
}

export default Info;