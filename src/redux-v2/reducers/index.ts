import { combineReducers, Reducer } from 'redux';

import accountReducer from './feature-slices/accountSlice';
import customerReducer from './feature-slices/customerSlice';

const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export default rootReducer;
