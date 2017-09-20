import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
	compose,
} from 'redux';
import rootReducer from '../reducer';
import rootSaga from '../sagas';

//  Returns the store instance
// It can  also take initialState argument when provided
export default function configureStore () {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(
			rootReducer,
			compose(
				applyMiddleware(sagaMiddleware),
				window.devToolsExtension ? window.devToolsExtension() : f => f,
			)
		),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};