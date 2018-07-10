import React, { Component } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import fakeData from '../../fakeData';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart:[]
        }
    }
    
    componentDidMount() {
        const products = fakeData.slice(0,10);
        this.setState({products})
    }

    addToCart = (prod) => {
        const cart = [...this.state.cart, prod];
        this.setState({cart:cart})
    }
    
    render() {
        return (
            <div className="shop-container">
                <div className="shop">
                    {this.state.products.map(prod => 
                        <Product key={prod.id} prod={prod} addToCart={this.addToCart}></Product> 
                    )}
                </div>
                <div className="cart">
                    <Cart cart={this.state.cart}></Cart>
                </div>
            </div>
        );
    }
}

export default Shop;