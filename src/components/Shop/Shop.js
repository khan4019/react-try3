import React, { Component } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import fakeData from '../../fakeData';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        const products = fakeData.slice(0,10);
        this.setState({products})
    }
    
    render() {
        return (
            <div className="shop-container">
                <div className="shop">
                    <h1>This is Shop</h1>
                    {this.state.products.map(prod => <Product key={prod.id} prod={prod} ></Product> )}
                </div>
                <div className="cart">
                    <h5>Order Summary</h5>
                </div>
            </div>
        );
    }
}

export default Shop;