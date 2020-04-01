import React from 'react';

export default function Total(props) {
    return (
        <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.total) }
        </div>
      </div>
    )
}