import React, { Component } from 'react';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import SummaryOptionList from '../SummaryOptionList/SummaryOptionList'
class MainSummary extends Component {
    
    render() {
        const {USCurrencyFormat, selected} = this.props;
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryOptionList 
                    USCurrencyFormat = {USCurrencyFormat}
                    selected = {selected}
                />
                <SummaryTotal 
                    USCurrencyFormat = {USCurrencyFormat}
                    selected = {selected} 
                />
            </section>
        )
    }
  }
  
  MainSummary.defaultProps = {
    selected: {},
  };
  
  
  export default MainSummary;