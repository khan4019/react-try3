import React, { Component } from 'react';
import './Product.css';

class Product extends Component {

    render() {
        const prod = this.props.prod;
        
        return (
            <div className="product-container">
                <div>
                    <img src={prod.img} alt=""/>
                </div>
                <div>
                    <h4 className="product-name">{prod.name}</h4>
                    <div className="product-info">
                        <div>
                            <p><small> by: {prod.seller}</small></p>
                            <p>${prod.price}</p>
                            <button>Add to Cart</button>
                        </div>
                        <div>
                            <h5>Features</h5>
                        </div>
                    </div>
                    
                </div>                
            </div>
        );
    }
}

export default Product;