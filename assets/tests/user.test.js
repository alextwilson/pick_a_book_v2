import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "../js/components/user";

// const { mount, getWrapper, get } = createTestContext({ fixture });
Enzyme.configure({ adapter: new EnzymeAdapter() });

// beforeEach(mount);

describe("User", () => {
  describe("User can signup", () => {
    // it("should exist", () => {
    //   const wrapper = shallow(<Signup />);
    //   expect(wrapper.exists()).toBeTrue;
    // });
    // test("welcomes logged in user by name", () => {
    //   const wrapper = shallow(<Home />);
    //   expect(wrapper(".welcome").text()).toContain("Dan");
    // });
  });
  describe("User can login", () => {
    const testValues = {
      email: "foo@gmail.com",
      password: "123456",
      handleSubmit: jest.fn()
    };
    it("Submit works", () => {
      const component = mount(<User {...testValues} />);
      component.find("button").simulate("click");
      expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
      expect(testValues.handleSubmit).toHaveBeenCalledWith({
        email: testValues.email,
        passoword: testValues.password
      });
    });
  });
});

// test("redirects to home page after signing out", () => {
//   getWrapper(".logout-btn").simulate("click");
//
//   expect(get("url")).toBe("/");
// });
