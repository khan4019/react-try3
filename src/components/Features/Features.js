import React, { Component } from 'react';
import './Features.css';

class Features extends Component {
    render() {
        
        return (
            <div className="features">
                <h5>Features</h5>
                {
                    this.props.features.map(ftr => 
                    <li key={ftr.name}><strong>{ftr.name}</strong> : {ftr.value}</li> )
                }
            </div>
        );
    }
}

export default Features;