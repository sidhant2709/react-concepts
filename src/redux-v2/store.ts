import { legacy_createStore as createStore, Store } from 'redux';
import rootReducer from './reducers';

const store: Store<RootState, RootAction> = createStore(rootReducer);

export default store;