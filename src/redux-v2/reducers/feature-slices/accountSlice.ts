const initialAccountState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

export default function accountSlice(state: AccountState = initialAccountState, action: ActionType) {
  const { type, payload }: ActionType = action;

  switch (type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + (payload as number),
      };
    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - (payload as number),
      };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: (payload as LoanPayload)['amount'],
        loanPurpose: (payload as LoanPayload)['purpose'],
        balance: state.balance + (payload as LoanPayload)['amount'],
      };
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

export function deposit(amount: number) {
  return { type: 'account/deposit', payload: amount };
}

export function withdraw(amount: number) {
  return { type: 'account/withdraw', payload: amount };
}

export function requestLoan(loan: LoanPayload) {
  return { type: 'account/requestLoan', payload: loan };
}

export function payLoan() {
  return { type: 'account/payLoan' };
}