import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
    render() {
        const prod = this.props.prod;
        return (
            <div className="cart-item">
                <h4 className="product-name">{prod.name}</h4>
                <p>Quantity: {prod.quantity}</p>
                <p><small>shipping: {prod.shipping}</small></p>
                <button onClick={() => this.props.handleDelete(prod.id)}>Remove Item</button>
            </div>
        );
    }
}

export default CartItem;