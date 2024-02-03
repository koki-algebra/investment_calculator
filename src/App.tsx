import "./index.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { InvestmentParams } from "./types/investment";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState<InvestmentParams>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier: string, newValue: string) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isInputValid ? (
        <Results investmentParams={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
