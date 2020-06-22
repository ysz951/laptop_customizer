import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';
class Feature extends Component {
   
    
    render() {
        const {options, feature, selected, USCurrencyFormat, handleUpdate} = this.props;
        const featureItem = options.map(item => {
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
            <fieldset className="feature">
                <legend className="feature__name">
                <h3>{this.props.feature}</h3>
                </legend>
                {featureItem}
            </fieldset>
        )
    }
  }
  
  Feature.defaultProps = {
      options: [],
  };
  
  
  export default Feature;