import React, { Component } from 'react';
import slugify from 'slugify';
import Feature from '../Feature/Feature'
import FeatureItem from '../FeatureItem/FeatureItem'

class FeatureList extends Component {
    
    
    render() {
        const {USCurrencyFormat, selected, handleUpdate} = this.props;
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <FeatureItem 
                    key = {itemHash} 
                    itemHash = {itemHash} 
                    name = {slugify(feature)} 
                    handleUpdate = {handleUpdate}
                    item = {item}
                    checked = {item.name === selected[feature].name}
                    feature = {feature}
                    cost = {USCurrencyFormat.format(item.cost)}
                />
            );
            });

            return (
                <Feature key = {featureHash} feature = {feature} options = {options}/>
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
    selected: {},
  };
  

  
export default FeatureList;