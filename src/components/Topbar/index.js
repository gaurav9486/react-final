import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = (props) => {
    return (
        <>
            <div className="header">
                <div className="logo-title">
                    <Link to="/"><h1><span>SHOP</span>LANE</h1></Link>                    
                </div>
                <div className="menus">
                    <Link to="/">Home</Link>
                    <Link to="#clothing-section">Clothing</Link>
                    <Link to="#accessories-section">Accessories</Link>
                </div>
                <div className="user-cart">
                    <div className="search-icon"><i class="fas fa-search"></i></div>
                    <Link to="/cart">
                        <div className="cart-icon">
                            <i class="fas fa-cart-plus"><span>{props.cart.length}</span></i>
                        </div>
                    </Link>
                    <div className="user-icon"><i class="fas fa-user"></i></div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(Topbar);