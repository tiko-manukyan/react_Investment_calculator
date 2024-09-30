import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const isInputValid = userInput.duration >= 1;

    function handleChange(identifier, newValue) {
        setUserInput(prevValue => {
            return {
                ...prevValue,
                [identifier]: +newValue
            }
        })
    }

    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChangeInputValue={handleChange} />
            {!isInputValid && <p className="center">Please enter a duration greater than 0</p> }
            {isInputValid && <Results input={userInput}/>}
        </>
    )
}
export default App
