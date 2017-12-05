import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import PlaceholderComponent from './Placeholder';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart, removeFromCart, isInCart } from '../actions';       // This actions are used to manages activities on cart

// Product component
class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Toggle addtocart/removefromcart button based on isInCart status
    handleClick(e) {

        if (this.props.isInCart) {
            this.props.removeFromCart(this.props._id);
        } else {
            const item = {
                id: this.props._id,
                name: this.props.name,
                image: this.props.image,
                price: this.props.price
            };
            this.props.addToCart(item);
        }
    }


    /**
     * @param  {} amount
     *
     */
    getDiscount(amount) {
        if (Math.floor(Math.random() * 3)) {
            return amount + Math.floor(Math.random() * 100) + 1;
        } else {
            return;
        }
    }

    render() {

        return (
                <div className="col-xs-6 col-md-3 col-lg-3 whiteroundbox">
                    <div className="product-wraper">
                        <NavLink to={'/product-details/' + this.props._id}>
                            <div className="product-image">
                                <div className="thumbnail">
                                    <LazyLoad offset={80} placeholder={<PlaceholderComponent />} >
                                        <img className="group list-group-image" src={this.props.image} alt="" />
                                    </LazyLoad>
                                </div>
                            </div>
                        </NavLink>
                        <div className="product-desc"><h5 className="darkgreytext" title={this.props.name}>{this.props.name}</h5></div>
                        <div className="product-price"><h3>MRP <span>{this.props.mrp ? this.props.mrp : ''}</span> <strong> {this.props.price}</strong></h3><h5 className="orangetext">Kg</h5></div>
                        <div className="product-buynow">
                            <div className="pro-buynow"><a onClick={this.handleClick} className="whitelink"><div className={this.props.isInCart ? 'dangerbutton' : 'blackroundbutton'}>{this.props.isInCart ? 'Remove' : 'Add to cart'}</div></a></div>
                        </div>
                    </div>
                </div>
        )
    }
}

// Mapping isInCart state to props to access easily in component
const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

// Mapping dispatch functions to props to access easily
const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
