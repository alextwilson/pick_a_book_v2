import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HelloReact from '../js/app';

describe('HelloReact', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    div.id = "main";
    const window = ReactDom.render(<HelloReact/>, div);
  });

  it('404 invalid route', () => {
    const wrapper = mount(
    <Router initialEntries={[ '/random' ]}>
      <HelloReact/>
    </Router>
  );
  expect(wrapper.find(LandingPage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });
});
