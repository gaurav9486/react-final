import React, { useState } from 'react'
import { connect } from 'react-redux';
import { clearCart } from '../../actions';
import './cart.css';
import { Redirect } from 'react-router-dom';

const Cart = (props) => {

    const [home, setHome] = useState(false);

    return (
        <>
            {home && <Redirect to="/" />}
            {props.cart.length <= 0 ?
                <div className="empty-cart">
                    <h1>Your cart is empty. Kindly add products to proceed.</h1>
                </div> :
                <div className="cart-page">
                    <h1 className="checkout-title">Checkout</h1>
                    <h3> Total Items: {props.cart.length}</h3>
                    <div className="cart-details">
                        <div className="cart-products">
                            {props.cart.map((item) => <div className="the-product">
                                <img src={item.preview} alt="" />
                                <div><h2>{item.name}</h2>
                                    <h3>Amount: {item.price}</h3>
                                </div>
                            </div>)}
                        </div>
                        <div className="cart-amount">
                            <h2>Total Amount</h2>
                            <h3>Amount: Rs. {props.cart.length &&
                                props.cart.reduce((acc, item) => acc + item.price, 0)}</h3>
                            <button
                                onClick={() => {
                                    props.clearAll();
                                    alert("Order placed successfully");
                                    setHome(true);
                                }}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>}
        </>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    clearAll: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);