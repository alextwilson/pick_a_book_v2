import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../js/components/home';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Home', () => {
  it('Has a welcome message', () => {
    const page = mount(<Home/>);
    expect(page.text()).toMatch('Welcome to PickABook!');
  });
});
