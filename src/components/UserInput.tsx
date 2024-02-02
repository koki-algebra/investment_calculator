import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier: string, newValue: string) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => handleChange("duration", event.target.value)}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
