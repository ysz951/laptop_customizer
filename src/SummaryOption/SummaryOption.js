import React, { Component } from 'react';

class SummaryOption extends Component {
    render() {
        return (
            <div className="summary__option">
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selectedName}</div>
                <div className="summary__option__cost">
                  {this.props.cost}
                </div>
            </div>
        )
    }
  }
  
  export default SummaryOption;