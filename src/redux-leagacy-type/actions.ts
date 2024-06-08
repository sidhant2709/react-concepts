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

export function createCustomer(newCustomer: CustomerPayload) {
  return { type: 'customer/createCustomer', payload: newCustomer };
}

export function updateCustomer(updatedCustomer: CustomerPayload) {
  return { type: 'customer/updateName', payload: updatedCustomer };
}