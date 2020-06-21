import React, { Component } from 'react';

class SummaryTotal extends Component {
   
    
    render() {
        const {USCurrencyFormat} = this.props;
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
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