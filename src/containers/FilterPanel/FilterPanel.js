import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {
  connect,
} from 'react-redux';

import currencySelectOptions from './currencyOptions';
import {
  changeBaseCurrencyAction,
  changeDateAction,
} from "../App/ducks";

class FilterPanel extends React.Component {


  selectOptionRenderer = ({ label }) => {
    return <div className="selectOption">{label}</div>;
  }

  baseCurrencyFilterChangeHandler = ({ value }) => {
    this.props.changeBaseCurrency(value);
    this.props.onFilterChange();
  }

  datePickerFilterChangeHandler = (value) => {
		this.props.changeDateValue(moment(value).format('YYYY-MM-DD'));
    this.props.onFilterChange();
  }

  render() {
    const {
      baseCurrency,
      date,
      onAmountChange,
      amountValue,
    } = this.props;
    return (
      <div className="filterPanel">
        <div className="baseCurrencySelectContainer">
          <div className="baseCurrencyTitle">
            Choose base currency
          </div>
          <Select
            name="currency-selector"
            options={currencySelectOptions}
            value={baseCurrency}
            className="currencySelector"
            searchable={false}
            clearable={false}
            optionRenderer={this.selectOptionRenderer}
            valueRenderer={this.selectOptionRenderer}
            onChange={this.baseCurrencyFilterChangeHandler}
          />
        </div>
        <div className="amountToConvertContainer">
          <div className="amountToConvertTitle">
            Enter amount:
          </div>
          <input
            type="number"
            step="0.01"
            className="amountInput"
            onChange={onAmountChange}
            value={amountValue}
          />
        </div>
        <div className="datePickerContainer">
          <div className="datePickerTitle">
            Choose date
          </div>
          <Datepicker
            todayButton={"Today"}
            readOnly={true}
            className="datepicker"
            selected={moment(date, 'YYYY-MM-DD')}
            onChange={this.datePickerFilterChangeHandler}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeBaseCurrency(value){
      dispatch(changeBaseCurrencyAction(value));
    },
    changeDateValue(value) {
      dispatch(changeDateAction(value));
    }
  }
}

export default connect(undefined, mapDispatchToProps)(FilterPanel);
