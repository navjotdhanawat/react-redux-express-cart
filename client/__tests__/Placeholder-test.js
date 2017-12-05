'use strict';

jest.unmock('../components/Placeholder');

import React from 'react';
import ReactDOM from 'react-dom';
import PlaceholderComponent from '../components/Placeholder';
import LazyLoad from 'react-lazyload';

describe('Placeholder', () => {

    it('renders without crashing', () => {
        const url = "https://m.media-amazon.com/images/I/817VFPdaUnL._AC_SX255_.jpg";
        const div = document.createElement('div');
        ReactDOM.render(<LazyLoad offset={80} placeholder={<PlaceholderComponent />} >
            <img className="group list-group-image" src="{url}" alt="" />
        </LazyLoad>, div);
    });
});