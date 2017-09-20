import {
	fromJS
} from 'immutable';
import moment from 'moment';
import {
	EUR,
} from '../../constants/currencies';
import {
	CHANGE_CURRENCY,
	CHANGE_DATE,
} from "../../constants/actionTypes"

const currentDate = moment().format('YYYY-MM-DD');

export const changeBaseCurrencyAction = (value) => ({
	type: CHANGE_CURRENCY,
	value,
});

export const changeDateAction = (value) => ({
	type: CHANGE_DATE,
	value,
});

const initialState =  fromJS({
	selectedBaseCurrency: EUR,
	selectedDate: currentDate,
});

export default function (state = initialState, action) {
	switch (action.type) {
		case CHANGE_CURRENCY:
			return state
				.set('selectedBaseCurrency', fromJS(action.value))
		case CHANGE_DATE:
			return state
				.set('selectedDate', fromJS(action.value));
		default:
			return state;
	}
}
