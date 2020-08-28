import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default function Cart (props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {/* {summary} */} $100.00
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {/* {USCurrencyFormat.format(total)} */} $100,000.00
        </div>
      </div>
    </section>
  )
}