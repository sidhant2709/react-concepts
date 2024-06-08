import { legacy_createStore as createStore, Store, combineReducers, Reducer } from 'redux';
import { accountReducer, customerReducer } from './reducers';

const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store: Store<RootState, RootAction> = createStore(rootReducer);