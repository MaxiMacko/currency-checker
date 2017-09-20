import {
	fromJS
} from 'immutable';
import {
	FETCH_CURRENCY_REQUEST,
	FETCH_CURRENCY_SUCCESS,
	FETCH_CURRENCY_FAILURE,
} from '../../constants/actionTypes';

export const fetchCurrencyRequestAction = () => ({
	type: FETCH_CURRENCY_REQUEST,
});

export const fetchCurrencySuccessAction = (payload) => ({
	type: FETCH_CURRENCY_SUCCESS,
	payload,
});

export const fetchCurrencyFailureAction = () => ({
	type: FETCH_CURRENCY_FAILURE,
});

const initialState =  fromJS({
	isLoading: true,
	isError: false,
	data: {},
});


export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_CURRENCY_REQUEST:
			return state
				.set('isLoading', true)
				.set('isError', false);
		case FETCH_CURRENCY_SUCCESS:
			return state
				.set('data', fromJS(action.payload))
				.set('isLoading', false)
				.set('isError', false);
		case FETCH_CURRENCY_FAILURE:
			return state
				.set('isLoading', false)
				.set('isError', true);
		default:
			return state;
	}
}