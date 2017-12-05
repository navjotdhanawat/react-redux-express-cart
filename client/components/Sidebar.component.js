import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @param  {} props
 * Sidebar component to show categories
 */
function SidebarComponent(props) {
    return (
        <div className="col-sm-12 cat-title sidebar-section">
            <section>
                <h3>CATEGORIES</h3>
                <ul className="main-categories">
                    <li><h5>
                    <NavLink to="/" activeClassName="active">
                        FRESH ARRIVALS
                    </NavLink>
                    </h5></li>
                    <li><h5><a  className="blacklink">AMUL</a></h5></li>
                    <li><h5><a  className="blacklink">SPECIAL OFFERS</a></h5></li>
                    <li><h5><a  className="blacklink">GROCERY & STAPLES</a></h5></li>
                    <li><h5><a  className="blacklink">CHOCOLATES & DESSERTS</a></h5></li>
                    <li><h5><a  className="blacklink">BEVERAGES</a></h5></li>
                    <li><h5><a  className="blacklink">SNACKS</a></h5></li>
                    <li><h5><a  className="blacklink">PICKLES, CHUTNEY & SAUCES</a></h5></li>
                    <li><h5><a  className="blacklink">BABY CARE</a></h5></li>
                    <li><h5><a  className="blacklink">NEW PRODUCTS</a></h5></li>
                    <li><h5><a  className="blacklink">ORGANIC PRODUCTS</a></h5></li>
                    <li><h5><a  className="blacklink">PERSONAL CARE</a></h5></li>
                    <li><h5><a  className="blacklink">HOUSEHOLD SUPPLIES</a></h5></li>
                </ul>
            </section>
        </div>
    );
}

export default SidebarComponent;