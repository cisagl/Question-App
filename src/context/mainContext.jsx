import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [click, setClick] = useState(false);
    const [answers, setAnswers] = useState([]);

    const data = { click, setClick, answers, setAnswers};

    return (
        <GlobalContext.Provider value={data} children={children} />
            
    );
};

export default GlobalContext;
