import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Features from '../Features/Features';
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
                            <p><small>Order now: only {prod.stock} left</small></p>
                            <button onClick={() => this.props.addToCart(prod)}>Add to Cart</button>
                        </div>
                        <div>
                            <StarRatingComponent
                                name="product-rate"
                                emptyStarColor='lightgray'
                                value={prod.rating}
                            />
                            <Features features={prod.features}/>
                        </div>
                    </div>
                    
                </div>                
            </div>
        );
    }
}

export default Product;