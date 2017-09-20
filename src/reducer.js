import { combineReducers } from 'redux';
import currencyReducer from './entities/currency/ducks';
import screenReducer from './containers/App/ducks';

const rootReducer = combineReducers({
	currencyReducer,
	screenReducer,
});

export default rootReducer;