import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getProductAPI } from '../../utils/apiData';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './productdetails.css';
import { addProducts } from '../../actions';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProductDetails = (props) => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(true);
    const { name, price, preview, brand, description } = product;
    const [source, setSource] = useState("");
    const [active, setActive] = useState(false);

    useEffect(() => {
        axios(`${getProductAPI}/${id}`).then((res) => {
            setProduct(res.data);
            setLoader(false);
            setSource(res.data.preview)
        })
    }, []);

    return (<>
        {loader ? <div className="loader">
            <CircularProgress />
            <CircularProgress color="secondary" />
        </div> :
            <div className="product-page">
                <div className="product-photo">
                    <img src={source} alt={name} />
                </div>
                <div className="product-details">
                    <h1 className="the-name">{name}</h1>
                    <h2 className="the-brand">{brand}</h2>
                    <h3 className="the-price">Price: Rs. <span>{price}</span></h3>
                    <h3 className="description-title">Description</h3>
                    <p className="the-desc">{description}</p>
                    <h3 className="preview-title">Product Preview</h3>
                    <div className="the-photos">
                        {product.photos && product.photos.map((item) => <div className="small-photo">
                            <img src={item} alt="" onClick={() => {
                                setSource(item);
                                setActive(true)
                                }} />
                        </div>)}
                    </div>
                    <button className="add-to-cart-btn" onClick={() => props.addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        }
    </>)
}


const mapDispatchToProps = (dispatch) => ({
    addToCart: (payload) => dispatch(addProducts(payload))
})

export default connect(null, mapDispatchToProps)(ProductDetails);