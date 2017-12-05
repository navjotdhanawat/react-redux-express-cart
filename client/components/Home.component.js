import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'underscore';
import { loadMoreItems, searchItems } from '../actions';
import ProductComponent from './Product';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
var Spinner = require('react-spinkit');
import AlertComponent from './Alert.component';

// Home component to show items according to category
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
        // window.addEventListener("scroll", _.debounce((e) => this.getProducts(e), 100));
    }

    // getProducts() {
    //     var self = this;
    //     const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    //     const body = document.body;
    //     const html = document.documentElement;
    //     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //     const windowBottom = windowHeight + window.pageYOffset;
    //     console.log((windowBottom / docHeight) * 100);


    //     if ((windowBottom / docHeight) * 100 >= 80 && !this.props.items.isSearch && !this.props.items.loading) {
    //         this.props.dispatch(loadMoreItems(this.props.items.page))
    //     } else {
    //         console.log('Not Bottom');
    //     }
    // }

    // handleChange(event) {
    //     console.log(event.target.value);
    //     this.searchDebounce(event.target.value);
    // }


    render() {
        const homeItems = [
            {
                title: 'Latest Arrival',
            },
            {
                title: 'Sale Products',
            },
            {
                title: 'Most Trending',
            },
        ];

        // const alert = this.props.items.message ? <AlertComponent message={this.props.items.message} /> : null;
        // const loading = this.props.items.loading ? <div className="item  col-xs-12 col-lg-12 spinner-section">
        //     <Spinner name="ball-pulse-rise" />
        // </div> : null;

        const homeProducts = homeItems.map((item, i) => (

            <div key={i}>
                <div className="col-sm-12 search-section">
                    <h3 className="text-center">{item.title}</h3>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <div className="item  col-xs-12 col-lg-12">
                        {this.props.home.docs.map((item, i) => (
                            <ProductComponent key={item._id} {...item} />
                        ))}
                    </div>
                </ReactCSSTransitionGroup>
            </div>

        ))

        return (
            // {
            <div className="col-sm-9 latest-products">
                {homeProducts}
            </div>

            // }
        )
    }
}

HomeComponent.propTypes = {
    home: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomeComponent);