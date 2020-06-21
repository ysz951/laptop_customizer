import React, { Component } from 'react';
import slugify from 'slugify';
import Feature from '../Feature/Feature'
import FeatureItem from '../FeatureItem/FeatureItem'

class MainForm extends Component {
   
    
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <FeatureItem 
                    key = {itemHash} 
                    itemHash = {itemHash} 
                    name = {slugify(feature)} 
                    selected = {this.props.selected}
                    handleUpdate = {this.props.handleUpdate}
                    item = {item}
                    checked = {item.name === this.props.selected[feature].name}
                    feature = {feature}
                    cost = {this.props.USCurrencyFormat.format(item.cost)}
                />
            );
            });

            return (
                <Feature key = {featureHash} feature = {feature} options = {options}/>
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }  
}
MainForm.defaultProps = {
    features: {},
    selected: {},
    handleUpdate: () => {}
  };
  

  
export default MainForm;