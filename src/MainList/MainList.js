import React, { Component } from 'react';
import MainForm from '../MainForm/MainForm';

import MainSummary from '../MainSummary/MainSummary';


class MainList extends Component {
   
    
    render() {
        
      return (
        <main>
            <MainForm
                features = {this.props.features}
                USCurrencyFormat = {this.props.USCurrencyFormat}
                selected = {this.props.selected}
                handleUpdate = {this.props.handleUpdate}
            />
            <MainSummary
                USCurrencyFormat = {this.props.USCurrencyFormat}
                selected = {this.props.selected} 
            />
        </main>
      );
    }
  }
  
  MainList.defaultProps = {

  };
  
  
  export default MainList;