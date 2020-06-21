import React, { Component } from 'react';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import SummaryOption from '../SummaryOption/SummaryOption'

class MainSummary extends Component {
   
    
    render() {
        const {USCurrencyFormat} = this.props;
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
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
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <SummaryTotal 
                    USCurrencyFormat = {this.props.USCurrencyFormat}
                    selected = {this.props.selected} 
                />
            </section>
        )
    }
  }
  
  MainSummary.defaultProps = {
    selected: {},
  };
  
  
  export default MainSummary;