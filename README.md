# Redux Basics

```js
// App.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './redux-leagacy-type/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

```js
// redux/store.ts
import { legacy_createStore as createStore, Store, combineReducers, Reducer } from 'redux';


// Initial States
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

// reducer functions
function accountReducer(state: AccountState = initialAccountState, action: ActionType) {
  /*
    const { type, payload }: { type: string; payload?: number | string | LoanPayload } = action;

    const { type, payload}: { type: AccountAction["type"]; payload?: AccountAction["payload"] } = action;
  */

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

function customerReducer(state: CustomerState = initialCustomerState, action: ActionType) {
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

const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// actions
function deposit(amount: number) {
  return { type: 'account/deposit', payload: amount };
}

function withdraw(amount: number) {
  return { type: 'account/withdraw', payload: amount };
}

function requestLoan(loan: LoanPayload) {
  return { type: 'account/requestLoan', payload: loan };
}

function payLoan() {
  return { type: 'account/payLoan' };
}

function createCustomer(newCustomer: CustomerPayload) {
  return { type: 'customer/createCustomer', payload: newCustomer };
}

function updateCustomer(updatedCustomer: CustomerPayload) {
  return { type: 'customer/updateName', payload: updatedCustomer };
}


//store
const store: Store<RootState, RootAction> = createStore(rootReducer);

```
```js
// console logs
store.dispatch({
  type: 'account/deposit',
  payload: 300,
});

console.log('Deposit: ', store.getState().account);

store.dispatch({
  type: 'account/requestLoan',
  payload: { purpose: 'buying a car', amount: 1000 },
});

console.log('Request Loan: ', store.getState().account);

store.dispatch({ type: 'account/withdraw', payload: 200 });

console.log('Withdraw: ', store.getState().account);

store.dispatch({ type: 'account/payLoan' });

console.log('Pay Loan: ', store.getState().account);
```

```js
// console logs
store.dispatch(deposit(300));

console.log('Deposit: ', store.getState().account);

store.dispatch(requestLoan({ purpose: 'buying a car', amount: 1000 }));

console.log('Request Loan: ', store.getState().account);

store.dispatch(withdraw(200));

console.log('Withdraw: ', store.getState().account);

store.dispatch(payLoan());

console.log('Pay Loan: ', store.getState().account);

store.dispatch(createCustomer({ fullName: 'Siddhant Kumar Sahoo', nationalID: '123456780', createdAt: new Date().toISOString()}));

console.log('Create Customer: ', store.getState().customer);

store.dispatch(updateCustomer({ fullName: 'Sidhant Kumar Sahoo'}));

console.log('Update Customer: ', store.getState().customer);
```
