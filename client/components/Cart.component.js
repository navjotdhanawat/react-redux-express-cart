import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getCart } from '../actions';
import { connect } from 'react-redux';

// Cart component show added items with count of items
class CartComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="head-price">
                    <h3 className="whitetext">
                        <strong>{this.props.getCart.items ? 'Rs '+ this.props.getCart.total : '0 in cart'}</strong>
                    </h3>
                    <h5 className="whitetext">{this.props.getCart.items ? this.props.getCart.items  + ' item selected' : ''}</h5>
                </div>
                <NavLink to="/" activeClassName="active">
                    <div className="add-to-cart">
                        <img src={require('../images/shopping_icon.png')} className="img-responsive" />
                    </div>
                </NavLink>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        getCart: getCart(state.cart, props)     // It it give you all information regarding items in cart
    }
}


export default connect(mapStateToProps)(CartComponent);
