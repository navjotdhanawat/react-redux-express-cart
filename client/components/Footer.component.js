import React, { Component } from 'react';

/**
 * @param  {} props
 * Footer component
 */
function FooterComponent(props) {
    return (
        <footer>
            <div className="lightgreybg">
                <div className="container-fluid">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-4 footer-wrap">
                                <h3>CUSTOMER <strong>TESTIMONIALS</strong></h3>
                                <h5><strong><span className="italicfont">"</span></strong> Rhoncus in ultrices, platea, sit mauris? Etiam
                            etiam, turpis tortor rhoncus etiam? Pid phasellus, velit scelerisque sit porttitor, scelerisque
                            tincidunt, et scelerisque ac dolor, sagittis adipiscing! Ac egestas.<strong><span className="italicfont">"</span></strong></h5>
                            </div>
                            <div className="col-sm-4 footer-wrap">
                                <h3>BE THE FIRST <strong>TO KNOW!</strong></h3>
                                <h5>Keep up on our always evolving product features &amp; sales. Enter your e-mail and subscribe to our
                                newsletter.</h5>
                                <div className="mailchimp">
                                    <input name="textfield" type="text" className="textinputemaiil" id="textfield" placeholder="Enter your email address" />
                                    <img src={require('../images/email_submit_button.png')} width="44" height="45" border="0" />
                                </div>
                            </div>
                            <div className="col-sm-4 footer-wrap">
                                <h3>CUSTOMER <strong>TESTIMONIALS</strong></h3>
                                <img src={require('../images/temp_sellers.png')} className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="greenbg">
                <div className="container-fluid">
                    <div className="col-sm-6 col-md-2 quick-link">
                        <div className="footer-heading">
                            <h4 className="whitetext"><strong>WHY BUY FROM US</strong></h4>
                        </div>
                        <div className="quick-links">
                            <ul>
                                <li>
                                    <h5><a href="#" className="whitelink">Shipping &amp; Returns</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Secure shopping</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Free shipping program</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Affiliates</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Group sales</a></h5>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-2 quick-link">
                        <div className="footer-heading">
                            <h4 className="whitetext"> <strong>NAVIGATION</strong></h4>
                        </div>
                        <div className="quick-links">
                            <ul>
                                <li>
                                    <h5><a href="#" className="whitelink">Basic Food</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Masala</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Snacks</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Ready To Eat</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Body Care</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Face &amp; Hair</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Home Care</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Body Care</a></h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2 quick-link">
                        <div className="footer-heading">
                            <h4 className="whitetext"><strong>HELP AND CONTACT</strong></h4>
                        </div>
                        <div className="quick-links">
                            <ul>
                                <li>
                                    <h5><a href="#" className="whitelink">Resolution Center</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Seller Information</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Contact us</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">News</a></h5>
                                </li>
                                <li>
                                    <h5><a href="#" className="whitelink">Jobs at Mall Market</a></h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-1 quick-links">
                        <div className="footer-heading">
                            <h4 className="whitetext"><strong>CONNECT</strong></h4>
                        </div>
                        <div className="quick-links social-links">
                            <a href="#">
                                <img src={require('../images/facebook.png')} width="28" height="28" border="0" />
                            </a>
                            <a href="#">
                                <img src={require('../images/twitter.png')} width="28" height="28" border="0" />
                            </a>
                            <a href="#">
                                <img src={require('../images/linkedin.png')} alt="" width="28" height="28" border="0" />
                            </a>
                            <a href="#">
                                <img src={require('../images/youtube.png')} width="28" height="28" border="0" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2 quick-links">
                        <div className="footer-heading">
                            <h4 className="whitetext"><strong>CONTACT US</strong></h4>
                        </div>
                            <div className="quick-links">
                                <h5><span className="whitetext">Address will come here<br/>
                                    Street Address here,<br/>
                                        Aurangabad, MH<br/>
                                            India.</span>
                                </h5>
                                <h5>
                                    <span className="whitetext">+ 91 (240) 000000<br/>
                                        <a href="mailto:info@urkirana.com" className="yellowlink">info@urkirana.com</a>
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 quick-links">
                            <div className="footer-heading">
                                <h4>
                                    <img src={require('../images/urkirana_white_logo.png')} width="133" height="20" />
                                </h4>
                            </div>
                            <div className="quick-links">
                                <h5 className="whitetext">Nunc porta habitasse purus sed aliquam duis magna in. Parturient a sociis. Et? Eu scelerisque? Pid elementum
                                    facilisis parturient porta adipiscing, platea, phasellus tincidunt elementum proin dictumst. Rhoncus,
                                    ac magna aliquet augue tincidunt scelerisque et augue purus ut augue, rhoncus lectus nisi dis ut.
                                    Risus! Magna cum nec sit. Diam, augue in! Dictumst rhoncus, non, nisi, facilisis nec, scelerisque,
                                    tortor, vut pid?
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            );
}

export default FooterComponent;