import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Search from '../Search/Search';
import './Shop.css';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utility/local-storage';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: []
        }
    }

    componentDidMount() {
        const products = fakeData.slice(0, 10);
        this.setState({ products })
    }

    handleSearch = (event) =>{
        const search = event.target.value.toLowerCase();
        const selected = fakeData.filter(item => (item.name+item.category).toLowerCase().includes(search));
        const products = selected.slice(0,10);
        this.setState({products});
    }

    addToCart = (prod) => {
        const cart = [...this.state.cart, prod];
        this.setState({ cart: cart });
        const quantity = this.state.cart.filter(item => item.id === prod.id);
        addToDatabaseCart(prod.id, quantity.length + 1);
    }

    render() {
        return (
            <div>
                <Search handleSearch={this.handleSearch}/>
                <div className="shop-container">
                    <div className="shop">
                        {this.state.products.map(prod =>
                            <Product key={prod.id} prod={prod} addToCart={this.addToCart}></Product>
                        )}
                    </div>
                    <div className="cart">
                        <Cart cart={this.state.cart}>
                            <Link to="/review">
                                <button>Review Order</button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;