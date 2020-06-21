import React, { Component } from 'react';
import MainForm from '../MainForm/MainForm';

import MainSummary from '../MainSummary/MainSummary';


class MainList extends Component {
   
    
    render() {
      const {features, USCurrencyFormat, selected, handleUpdate} = this.props;
      return (
        <main>
            <MainForm
                features = {features}
                USCurrencyFormat = {USCurrencyFormat}
                selected = {selected}
                handleUpdate = {handleUpdate}
            />
            <MainSummary
                USCurrencyFormat = {USCurrencyFormat}
                selected = {selected} 
            />
        </main>
      );
    }
  }
  
  
  export default MainList;