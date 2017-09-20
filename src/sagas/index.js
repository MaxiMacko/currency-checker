import { takeLatest } from 'redux-saga/effects';
import requestPokemonsSaga from './requestCurrency.saga';
import {
	FETCH_CURRENCY_REQUEST,
} from "../constants/actionTypes";

export default function* rootSaga() {
	yield takeLatest(FETCH_CURRENCY_REQUEST, requestPokemonsSaga);
}