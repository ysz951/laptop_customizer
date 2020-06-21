import React, { Component } from 'react';

class FeatureItem extends Component {
   
    
    render() {
        const {feature, item} = this.props;
        return (
            <div className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.name}
                    checked = {this.props.checked}
                    onChange={e => this.props.handleUpdate(feature, item)}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {item.name} ({this.props.cost})
                </label>
            </div>
        )
    }
  }
  
  FeatureItem.defaultProps = {
    selected: {},
    handleUpdate: () => {}
  };
  
  
  export default FeatureItem;