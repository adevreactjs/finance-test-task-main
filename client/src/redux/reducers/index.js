import { combineReducers } from 'redux';

import tickersReducer from '../reducers/tickersReducer';

const rootReducer = combineReducers({
  tickers: tickersReducer,
});

export default rootReducer;
