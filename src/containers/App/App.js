import React from 'react';
import {
	connect,
} from 'react-redux';
import styles from '../../styles.css';

import {
	fetchCurrencyRequestAction,
} from '../../entities/currency/ducks';
import Header from "../../components/Header/Header";
import CurrencyContent from "../../components/CurrencyContent/CurrencyContent";
import FilterPanel from '../FilterPanel/index';

import mapStateToProps from './selectors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountValue: 1.00,
    }
  }

	componentDidMount() {
		this.props.fetchData();
	}

  amountInputChangeHandler = (e) => {
    this.setState({
      amountValue: e.target.value,
    })
  }

	render () {
		const {
			selectedDate,
			selectedCurrency,
			currentRates,
		} = this.props;

		return (
			<div>
				<Header />
        <FilterPanel
					baseCurrency={selectedCurrency}
					date={selectedDate}
          onFilterChange={this.props.fetchData}
          onAmountChange={this.amountInputChangeHandler}
          amountValue={this.state.amountValue}
				/>
				<CurrencyContent
					currentRates={currentRates}
          amountValue={this.state.amountValue}
				/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchData() {
			dispatch(fetchCurrencyRequestAction());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
