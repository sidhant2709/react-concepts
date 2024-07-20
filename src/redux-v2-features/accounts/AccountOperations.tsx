import { useState, ChangeEvent, SetStateAction, Dispatch  } from "react";
import '../styles.css';

enum Currency {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
}

type StringStateSetter = Dispatch<SetStateAction<string>>;
type CurrencyStateSetter = Dispatch<SetStateAction<Currency>>;

function useTypedState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  return useState<T>(initialValue);
}


const AccountOperations: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/typedef
  const [depositAmount, setDepositAmount] = useTypedState<string>("");
  const [withdrawalAmount, setWithdrawalAmount]: [string, StringStateSetter] = useState("");
  const [loanAmount, setLoanAmount]: [string, StringStateSetter] = useState("");
  const [loanPurpose, setLoanPurpose]: [string, StringStateSetter] = useState("");
  const [currency, setCurrency]: [Currency, CurrencyStateSetter] = useState<Currency>(Currency.USD);

  function handleDeposit() {}

  function handleWithdrawal() {}

  function handleRequestLoan() {}

  function handlePayLoan() {}

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDepositAmount(e.target.value)}
          />
          <select
            value={currency}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrency(e.target.value as Currency)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWithdrawalAmount(e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLoanAmount(e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div className="paybacks">
          <span>Pay back $X</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
