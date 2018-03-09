import React from 'react';
import ReactDOM from 'react-dom';
import NewBook from './app.jsx';

describe('NewBook', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewBook />, div);
    });
});
