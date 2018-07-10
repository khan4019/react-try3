import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import {getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utility/local-storage';
import fakeData from '../../fakeData';
import happy from '../../images/giphy.gif';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state= {
            cart:[],
            orderPlaced:false
        }
    }
    
    componentDidMount() {
        const savedCart = getDatabaseCart();
        const ids = Object.keys(savedCart);
        const cart = [];
        fakeData.forEach(item =>{
            const quantity = savedCart[item.id];
            if(quantity){
                item.quantity = quantity;
                cart.push(item);
            }
        })
        this.setState({cart});
    }

    processOrder = () =>{
        const cart = [];
        this.setState({cart, orderPlaced:true});
        processOrder();
    }

    handleDelete = (id) => {
        const cart = this.state.cart.filter(item => item.id !== id);
        this.setState({cart});
        removeFromDatabaseCart(id);
    }

    
    render() {
        let happyImage = null;
        if(this.state.orderPlaced){
            happyImage = <img src={happy} alt=""/>
        }
        return (
            <div className="shop-container">
                <div className="shop">
                    <h1>Order Review</h1>
                    {
                        this.state.cart.map(prod => 
                        <CartItem key={prod.id} prod={prod} handleDelete={this.handleDelete}></CartItem>)
                    }
                    {
                        happyImage
                    }
                </div>
                <div className="cart">
                    <Cart cart={this.state.cart}>
                        <button onClick={this.processOrder}>Place Order</button>
                    </Cart>
                </div>
            </div>
        );
    }
}

export default Review;