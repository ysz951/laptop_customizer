import React, { Component } from 'react';
import SummaryOption from '../SummaryOption/SummaryOption'

class SummaryOptionList extends Component {
    
    render() {
        const {USCurrencyFormat, selected} = this.props;
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];
            return (
            <SummaryOption
                 key={featureHash}
                 feature = {feature} 
                 selectedName = {selectedOption.name}
                 cost = {USCurrencyFormat.format(selectedOption.cost)}
            />
            );
        });

        return (
            <>
            {summary}
            </>
        )
    }
  }
  
  SummaryOptionList.defaultProps = {
    selected: {},
  };
  
  
  export default SummaryOptionList;