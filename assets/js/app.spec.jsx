import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from './app';
import Home from './app'

describe('HelloReact', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HelloReact />, div);
    });
});

describe('Home', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
    });
});
