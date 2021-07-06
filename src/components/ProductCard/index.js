import React from 'react';
import './productcard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ brand, name, preview, price, id }) => {
    return (
        <>
            <Link to={`/product/${id}`}>
        <div className="product-card">
            <div className="product-preview">
                <img src={preview} alt="product" />
            </div>
            <div className="product-data">
                <h3 className="product-name">{name}</h3>
                <h4 className="product-brand">{brand}</h4>
                <h4 className="product-price">Rs. {price}</h4>
            </div>
        </div>
        </Link>

        </>
    )
}

export default ProductCard;