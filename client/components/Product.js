import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import PlaceholderComponent from './Placeholder';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart, removeFromCart, isInCart } from '../actions';       // This actions are used to manages activities on cart
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { GridList, GridTile } from 'material-ui/GridList';

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
        const mrp = <span>MRP Rs<span className="mrp">{this.props.mrp ? this.props.mrp : ''}</span> <strong> {this.props.price}</strong></span>;
        return (
            <Card>
                <NavLink to={'/product-details/' + this.props._id}>
                    <CardMedia overlay={<CardTitle title={this.props.name} subtitle={mrp} />} >
                        <LazyLoad offset={80} placeholder={<PlaceholderComponent />} >
                            <img className="group list-group-image" src={this.props.image} alt="" />
                        </LazyLoad>
                    </CardMedia>
                </NavLink>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa.
                </CardText>
                <CardActions className="cart-btn">
                    <RaisedButton primary={!this.props.isInCart} secondary={true} className={this.props.isInCart ? 'dangerbutton' : 'blackroundbutton'} onClick={this.handleClick} label={this.props.isInCart ? 'Remove' : 'Add to cart'} />
                </CardActions>
            </Card>
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
