import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CartComponent from './Cart.component';
import { Nav,NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap';


// Header component
class HeaderComponent extends React.Component {

    render() {

        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="">urKirana</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="">
                            <h5 className="whitetext">Online Store</h5>
                        </NavItem>
                        <NavItem eventKey={2} href="">
                            <h5 className="whitetext">About Us</h5>
                        </NavItem>
                        <NavItem eventKey={3} href="">
                            <h5 className="whitetext">Delivery</h5>
                        </NavItem>
                        <NavItem eventKey={4} href="">
                            <h5 className="whitetext">FAQs</h5>
                        </NavItem>
                        <NavItem eventKey={5} href="">
                            <h5 className="whitetext">Contact</h5>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

        return (
            <header>
                <div className="homebannerbg">
                    <div className="container-fluid">
                        <div className="col-sm-12 top-bar">
                            <div className="col-sm-5 col-md-6 top-left-detail hidden-xs">
                                <div className="row">
                                    <ul>
                                        <li>
                                            <a href="#" className="whitelink">
                                                <h5 className="whitetext">Online Store</h5>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="whitelink">
                                                <h5 className="whitetext">About Us</h5>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="whitelink">
                                                <h5 className="whitetext">Delivery</h5>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="whitelink">
                                                <h5 className="whitetext">FAQs</h5>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="whitelink">
                                                <h5 className="whitetext">Contact</h5>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-7 col-md-6 top-right-detail">
                                <div className="row">
                                    <ul className="pull-right">
                                        <a className="whitelink">
                                            <h5 className="whitetext">Welcome Guest!</h5>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="col-sm-12  col-md-12 headerbg">
                            <div className="col-sm-12 header-content">
                                <div className="col-sm-2 tablet-remove-padding">
                                    <div className="logo-center">
                                        <NavLink to="/" activeClassName="active">
                                            <img src={require('../images/logo.png')} className="img-responsive" />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-sm-1">

                                </div>
                                <div className="col-sm-4 mobile-view">

                                </div>
                                <div className="col-sm-3 create-account">
                                </div>
                                <div className="col-sm-2 cart-section">
                                    <CartComponent />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-10 location-ind visible-xs">
                                {navbarInstance}
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid slider-images">
                        <div className="col-sm-7 group-on">
                            <div className="row">
                                <img src={require('../images/sample_add.png')} className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-sm-5 advertize-ipad">
                            <div className="yellowribbon">
                                <h3><strong className="yellowtext">Deal</strong> <span className="whitetext">you can’t miss</span></h3>
                            </div>
                            <div className="col-sm-6 mobile-add-wrap">
                                <img src={require('../images/whats_new.png')} className="img-responsive pull-right" />
                                <img src={require('../images/sample_add_2.png')} className="img-responsive mobile-adds" />
                            </div>
                            <div className="col-sm-6 mobile-add-wrap">
                                <img src={require('../images/best_sellers.png')} className="img-responsive pull-right" />
                                <img src={require('../images/sample_add_2.png')} className="img-responsive mobile-adds" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

export default HeaderComponent;