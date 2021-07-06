import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { homeProductsAPI } from '../../utils/apiData';
import { getProducts } from '../../actions';
import Carousel from '../Carousel';
import './home.css';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = (props) => {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios(homeProductsAPI).then(res => {
            props.sendProducts(res.data);
            setLoader(false);
        })
    }, [])

    const clothingProducts = props.products.filter((item) => item.isAccessory === false);
    const accessoriesProducts = props.products.filter((item) => item.isAccessory === true);

    return (
        <>
            <Carousel />
            <div className="clothing-section">
                <h2>Clothing for Men and Women</h2>
                {loader ? <div className="wait-loader">
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div> :
                    <div className="card-wrapper">
                        {clothingProducts && clothingProducts?.map((item) => <ProductCard {...item} />)}
                    </div>}
            </div>

            <div className="accessories-section">
                <h2>Accessories for Men and Women</h2>
                {loader ? <div className="wait-loader">
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div> :
                    <div className="card-wrapper">
                        {accessoriesProducts && accessoriesProducts?.map((item) => <ProductCard {...item} />)}
                    </div>}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    sendProducts: (payload) => dispatch(getProducts(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);