import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.scss';
import './css/style.scss';
import './css/responsive.scss';
import _ from 'underscore';
import axios from 'axios';
import { LazyLoad, forceCheck } from 'react-lazyload';
import PlaceholderComponent from './components/Placeholder';
import HeaderComponent from './components/Header.component';
import FooterComponent from './components/Footer.component';
import NavbarComponent from './components/Navbar';
import SidebarComponent from './components/Sidebar.component';
import AlertComponent from './components/Alert.component';
import ProductComponent from './components/Product';
import ProductsComponent from './components/Products.component';
import ProductDetailComponent from './components/Productdetails.component';
import HomeComponent from './components/Home.component';
import CartComponent from './components/Cart.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { loadMoreItems, searchItems } from './actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import Toggle from 'material-ui/Toggle';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: darkBaseTheme
    }
    this.toggle = 1;
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    if (this.toggle) {
      this.toggle = 0;
      this.setState({
        theme: lightBaseTheme
      });
    } else {
      this.toggle = 1;
      this.setState({
        theme: darkBaseTheme
      });
    }
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)}>
        <Router>
          <div className="body">
            <HeaderComponent onClick={this.toggleTheme} />
            <GridList cols={8}>
              <div cols={2}>
                <SidebarComponent />
              </div>
              <div cols={6}>
                <Switch>
                  <Route path="/" component={ProductsComponent} exact={true} />
                  <Route path="/product-details/:id" component={ProductDetailComponent} />
                </Switch>
              </div>
            </GridList>
            
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;