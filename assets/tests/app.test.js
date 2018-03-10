import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HelloReact from '../js/app';
import Home from '../js/app';
import NewBook from '../js/app';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('HelloReact', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    div.id = "main";
    const window = ReactDOM.render(<HelloReact/>, div);
  });
});

describe('Home', () => {
  it('has a welcome message', () => {
    const page = mount(<Home/>);
    expect(page.text()).toMatch('Welcome to PickABook!');
  });
});

describe('NewBook', () => {
  it('show the text: Add a book', () => {
    const page2 = mount(<NewBook/>);
    expect(page2.text()).toMatch('Add a book');
  });
});
