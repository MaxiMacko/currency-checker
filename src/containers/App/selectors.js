import {
	createSelector,
	createStructuredSelector,
} from 'reselect';
import coreSelector from '../../coreSelector';
import * as currencies from '../../constants/currencies';

const getFiltersData = createSelector(
	coreSelector,
	selector => {
		return selector.screenReducer;
	}
);

export const getSelectedCurrency = createSelector(
	getFiltersData,
	data => data.get('selectedBaseCurrency')
);

export const getSelectedDate = createSelector(
	getFiltersData,
	data => data.get('selectedDate')
);

const getCurrencyData = createSelector(
	coreSelector,
	selector => selector.currencyReducer
);

const getCurrentRates = createSelector(
	getCurrencyData,
	getSelectedCurrency,
	(currencyData, selectedCurrency) => {
		const derivedCurrencyRates = currencyData.getIn(['data', 'rates']);
		if (!derivedCurrencyRates) {
			return [];
		}
		const availableCurrencies = Object.values(currencies);
		const currenciesToFilter = availableCurrencies.filter(currency => currency !== selectedCurrency);
		return currenciesToFilter.map(currency => {
			return {
				currencyName: currency,
				value: derivedCurrencyRates.get(currency),
			}
		});
	}
);

export default createStructuredSelector({
	selectedDate: getSelectedDate,
	selectedCurrency: getSelectedCurrency,
	currentRates: getCurrentRates,
});
