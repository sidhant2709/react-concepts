/// <reference types="vite/client" />

type LoanPayload = {
  amount: number;
  purpose: string;
};

type CustomerPayload = {
  fullName: string;
  nationalID?: string;
  createdAt?: string;
};

type AccountState = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

type CustomerState = CustomerPayload

type RootState = {
  account: AccountState,
  customer: CustomerState
};

type ActionType = {
  type: string;
  payload?: number | string | LoanPayload | CustomerPayload;
};

type RootAction = ActionType;

