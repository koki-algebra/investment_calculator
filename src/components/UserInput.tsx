import { InvestmentParams } from "../types/investment";

type Props = {
  onChange: (inputIdentifier: string, newValue: string) => void;
  userInput: InvestmentParams;
};

export default function UserInput(props: Props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              props.onChange("initialInvestment", event.target.value)
            }
            value={props.userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              props.onChange("annualInvestment", event.target.value)
            }
            value={props.userInput.annualInvestment}
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
              props.onChange("expectedReturn", event.target.value)
            }
            value={props.userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => props.onChange("duration", event.target.value)}
            value={props.userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
