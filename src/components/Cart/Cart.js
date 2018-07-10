import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    render() {
        const cart = this.props.cart;
        let price = 0;
        let shipping = 0;
        cart.forEach(item => {
            price += item.price;
            shipping += item.shipping;
        });
        const beforeTax = price + shipping;
        const tax = beforeTax * 0.1;
        const total = beforeTax + tax;
        return (
            <div className="cart-container">
                <h5>Order Summary</h5>
                <p>Item Ordered: {cart.length}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items: </td>
                            <td>${price.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping &amp; handling:</td>
                            <td>${shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total before Tax</td>
                            <td>${beforeTax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>
                            <td>${tax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Order Total:</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <button>Order Review</button>
            </div>
        );
    }
}

export default Cart;