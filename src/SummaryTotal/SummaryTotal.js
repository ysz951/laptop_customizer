import React, { Component } from 'react';

class SummaryTotal extends Component {
   
    
    render() {
        const {USCurrencyFormat, selected} = this.props;
        const total = Object.keys(selected).reduce(
            (acc, curr) => acc + selected[curr].cost,
            0
        );
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        )
    }
  }
  
  SummaryTotal.defaultProps = {
    selected: {},
  };
  
  
  export default SummaryTotal;