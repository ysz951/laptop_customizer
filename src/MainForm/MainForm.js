import React, { Component } from 'react';
import FeatureList from '../FeatureList/FeatureList'

class MainForm extends Component {
    
    render() {
        const {features, USCurrencyFormat, selected, handleUpdate} = this.props;
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureList
                    features = {features} 
                    USCurrencyFormat = {USCurrencyFormat}
                    selected = {selected}
                    handleUpdate = {handleUpdate}
                />
            </form>
        )
    }  
}

export default MainForm;