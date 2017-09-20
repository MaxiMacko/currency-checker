import React from 'react';
import CurrencyItem from '../CurrencyItem';

class CurrencyContent extends React.Component {
  render() {
    const {
      currentRates,
      amountValue,
    } = this.props;
    return (
      <div className="currencyContent">
        {
          currentRates.map((rate, index) =>
            (
              <CurrencyItem
                key={`${index}_rate_item`}
                currencyName={rate.currencyName}
                amountValue={amountValue}
                value={rate.value}
              />
            )
          )
        }
      </div>
    );
  }
}

export default CurrencyContent;
