import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewBook from '../js/components/newBook';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('NewBook', () => {
  describe('render', () => {
    it('shows the message: Add a book', () => {
      const page = mount(<NewBook/>);
      expect(page.text()).toMatch('Add a book');
    });

    it('has a form with four fields', () => {
      const page = mount(<NewBook/>);
      expect(page.find('div.field').length).toEqual(5);
    });

    it('calls handelSubmit', () => {
      const page = mount(<NewBook/>);
      page.find('button').simulate('click');
      expect(page.instance().handleSubmit.calledOnce).toBeTrue;
    });
  });
});
