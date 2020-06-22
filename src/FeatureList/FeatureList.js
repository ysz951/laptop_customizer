import React, { Component } from 'react';
import Feature from '../Feature/Feature'

class FeatureList extends Component {
    
    render() {
        const {USCurrencyFormat, selected, handleUpdate} = this.props;
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature];
            return (
                <Feature 
                    key = {featureHash} 
                    feature = {feature}
                    selected = {selected}
                    handleUpdate = {handleUpdate} 
                    options = {options} 
                    USCurrencyFormat = {USCurrencyFormat}
                />
            );
        });

        return (
            <>
            {features}
            </>
        );
           
    }  
}
FeatureList.defaultProps = {
    features: {},
  };
  

  
export default FeatureList;