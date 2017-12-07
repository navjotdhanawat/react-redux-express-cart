import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import PlaceholderComponent from './Placeholder';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductDetails, addToCart, removeFromCart, isInCart } from '../actions';       // This actions are used to manages activities on cart

class ProductDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(prevProps) {
        window.scrollTo(0, 0);
        const id = this.props.match.params.id;
        this.props.getProductDetails(id);
    }

    // Toggle addtocart/removefromcart button based on isInCart status
    handleClick(e) {
        if (this.props.isInCart) {
            this.props.removeFromCart(this.props.detail._id);
        } else {
            const item = {
                id: this.props.detail._id,
                name: this.props.detail.name,
                image: this.props.detail.image,
                price: this.props.detail.price
            };
            this.props.addToCart(item);
        }
    }

    render() {
        console.log(this.props.detail);
        const name = this.props.detail.name;
        const image = this.props.detail.image;
        const price = this.props.detail.price;

        return (
            <section>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">
                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img src={image} /></div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={image} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img src={image} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img src={image} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img src={image} /></a></li>
                                        <li><a data-target="#pic-5" data-toggle="tab"><img src={image} /></a></li>
                                    </ul>
                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">{name}</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <span className="review-no">41 reviews</span>
                                    </div>
                                    <p className="product-description">Product description will come here.</p>
                                    <h4 className="price">Price: <span>Rs. {price}</span></h4>
                                    <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                    <h5 className="sizes">sizes:
							    <span className="size" data-toggle="tooltip" title="small">1 KG</span>
                                    </h5>
                                    <div className="action">
                                        <div className="product-buynow">
                                            <div className="pro-buynow"><a onClick={this.handleClick} className="whitelink"><div className={this.props.isInCart ? 'dangerbutton' : 'blackroundbutton'}>{this.props.isInCart ? 'Remove' : 'Add to cart'}</div></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

// Mapping isInCart state to props to access easily in component
const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, state.detail),
        detail: state.detail
    }
}

// Mapping dispatch functions to props to access easily
const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    getProductDetails: (id) => dispatch(getProductDetails(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent);
