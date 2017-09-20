import {
	call,
	put,
	select,
} from 'redux-saga/effects';
import Api from "../api/Api";
import {
  getSelectedCurrency,
  getSelectedDate,
} from "../containers/App/selectors"
import {
	fetchCurrencySuccessAction,
	fetchCurrencyFailureAction,
} from "../entities/currency/ducks";

export default function* requestCurrencySaga() {
  const selectedCurrency = yield select(getSelectedCurrency);
  const selectedDate = yield select(getSelectedDate);
  const requestOptions = {
    currency: selectedCurrency,
    date: selectedDate,
  };
	const response = yield call(Api.getCurrentCurrency, requestOptions);
	if (!response) {
		yield put(fetchCurrencyFailureAction());
		return;
	}
	yield put(fetchCurrencySuccessAction(response.data))
}
