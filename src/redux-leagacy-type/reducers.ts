const initialAccountState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialCustomerState: CustomerState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

export function accountReducer(state: AccountState = initialAccountState, action: ActionType) {
  // const { type, payload }: { type: string; payload?: number | string | LoanPayload } = action;

  // const { type, payload}: { type: AccountAction["type"]; payload?: AccountAction["payload"] } = action;

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

export function customerReducer(state: CustomerState = initialCustomerState, action: ActionType) {
  const { type, payload }: ActionType = action;

  switch (type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: (payload as CustomerPayload)['fullName'],
        nationalID: (payload as CustomerPayload)['nationalID'],
        createdAt: (payload as CustomerPayload)['createdAt'],
      };
    case 'customer/updateName':
      return {
        ...state,
        fullName: (payload as CustomerPayload)['fullName'],
      };
    default:
      return state;
  }
}