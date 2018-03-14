import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../js/components/navigation";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Navigation', () => {
  describe('When not logged in', () => {
    it('Has a link to Home', () => {
      const page = mount(<Navigation/>);
      expect(page.find({to: '/'}).length).toEqual(1)
    });

    it('Has a link to All Books', () => {
      const page = mount(<Navigation/>);
      expect(page.find({to: '/books'}).length).toEqual(1)
    });

    it('Has a link to Add a book', () => {
      const page = mount(<Navigation/>);
      expect(page.find({to: '/book/new'}).length).toEqual(1)
    });

    it('Has a link to Sign up', () => {
      const page = mount(<Navigation/>);
      expect(page.find({to: '/signup'}).length).toEqual(1)
    });

    it('Has a link to Log in', () => {
      const page = mount(<Navigation/>);
      expect(page.find({to: '/login'}).length).toEqual(1)
    });

    it('Does not have a link to Log out', () => {
      const page = mount(<Navigation/>);
      expect(page.find({to: '/logout'}).length).toEqual(0)
    });
  });

  describe('When logged in', () => {
    it('Has a link to Home', () => {
      sessionStorage.setItem("jwt", "dfhdfhdgh")
      const page = mount(<Navigation/>);
      expect(page.find({to: '/'}).length).toEqual(1)
    });

    it('Has a link to All Books', () => {
      sessionStorage.setItem("jwt", "dfhdfhdgh")
      const page = mount(<Navigation/>);
      expect(page.find({to: '/books'}).length).toEqual(1)
    });

    it('Has a link to Add a book', () => {
      sessionStorage.setItem("jwt", "dfhdfhdgh")
      const page = mount(<Navigation/>);
      expect(page.find({to: '/book/new'}).length).toEqual(1)
    });

    it('Has a link to Sign up', () => {
      sessionStorage.setItem("jwt", "dfhdfhdgh")
      const page = mount(<Navigation/>);
      expect(page.find({to: '/signup'}).length).toEqual(0)
    });

    it('Has a link to Log in', () => {
      sessionStorage.setItem("jwt", "dfhdfhdgh")
      const page = mount(<Navigation/>);
      expect(page.find({to: '/login'}).length).toEqual(0)
    });

    it('Does not have a link to Log out', () => {
      sessionStorage.setItem("jwt", "dfhdfhdgh")
      const page = mount(<Navigation/>);
      expect(page.find({to: '/logout'}).length).toEqual(1)
    });
  });
});
