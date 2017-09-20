import React from 'react';

class CurrencyItem extends React.Component {
	render() {
	  const {
	    currencyName,
      value,
      amountValue,
    } = this.props;
		return (
			<div className="currencyItem">
        <div className="header">
          {currencyName}
        </div>
        <div className="content">
          {(value * amountValue).toFixed(2)}
        </div>
			</div>
		)
	}
}

export default CurrencyItem;
