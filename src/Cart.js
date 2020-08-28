import React from 'react';
// import CartTotal from './CartTotal';
import CartSummary from './CartSummary';


export default function Cart (props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
        <CartSummary features={props.features} selected={props.selected} />
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {/* <CartTotal props={props} /> */} $100,000.00
        </div>
      </div>
    </section>
  )
}