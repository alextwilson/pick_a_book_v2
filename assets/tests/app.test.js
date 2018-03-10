import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HelloReact from '../js/app';
import Home from '../js/app';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('HelloReact', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    div.id = "main";
    const window = ReactDOM.render(<HelloReact/>, div);
  });
});

describe('Home', () => {
  it('Has a welcome message', () => {
    const page = mount(<Home/>);
    expect(page.text()).toMatch('Welcome to PickABook!');
  });

  it('Has a link to books', () => {
    const page = mount(<Home/>);
    expect(page.find({to: '/books'}).length).toEqual(1)
  });

  it('Has a link to new book', () => {
    const page = mount(<Home/>);
    expect(page.find({to: '/books/new'}).length).toEqual(1)
  });
});
