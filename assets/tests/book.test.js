import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import sinon from 'sinon';
import NewBook from '../js/components/newBook';
import Books from '../js/components/books';
import Book from '../js/components/book';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// describe('Book', () => {
  // describe('User adds new book', () => {
  //   let sandbox;
  //   beforeEach(() => sandbox = sinon.sandbox.create());
  //   afterEach(() => sandbox.restore());
  //   it("Book attributes have been added", () => {
  //     const testValues = {
  //       title: "A lovely story",
  //       author: "Benjamin Lewis",
  //       genre: "horror",
  //       description: "A story about two men fighting for the cake.",
  //       handleSubmit: jest.fn()
  //     };
  //     const resolved = new Promise((r) => r ({ testValues }));
  //     sandbox.stub(axios, 'get').returns(resolved);
  //     const component = shallow(<Book {...testValues } />);
  //     // component.find("button").simulate("click");
  //     testValues.handleSubmit({
  //       title: "A lovely story",
  //       author: "Benjamin Lewis",
  //       genre: "horror",
  //       description: "A story about two men fighting for the cake."
  //     });
  //     expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
  //     expect(testValues.handleSubmit).toHaveBeenCalledWith({
  //       title: testValues.title,
  //       author: testValues.author,
  //       genre: testValues.genre,
  //       description: testValues.description
  //     });
  //   });
  // });
// });
