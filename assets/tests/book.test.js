import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Book from '../js/components/book';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Book' () => {
  describe('Book: attributes have been added', () => {
    const testValues = {
      title: "A lovely story",
      author: "Benjamin Lewis",
      genre: "horror",
      description: "A story about two men fighting for the cake.",
      handleSubmit: jest.fn()
    };
  })
})
