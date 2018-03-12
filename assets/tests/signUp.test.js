import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "../js/components/signUp";

// const { mount, getWrapper, get } = createTestContext({ fixture });
Enzyme.configure({ adapter: new EnzymeAdapter() });

// beforeEach(mount);

describe("Sign up", () => {
  describe("User can sign up", () => {
    const testValues = {
      email: "foo@gmail.com",
      username: "Foo",
      password: "123456",
      password_confirmation: "123456",
      handleSubmit: jest.fn()
    };
    it("Sign up works", () => {
      const component = mount(<SignUp {...testValues} />);
      component.find("button").simulate("click");
      testValues.handleSubmit({
        email: "foo@gmail.com",
        username: "Foo",
        password: "123456",
        password_confirmation: "123456"
      });
      expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
      expect(testValues.handleSubmit).toHaveBeenCalledWith({
        email: testValues.email,
        username: testValues.username,
        password: testValues.password,
        password_confirmation: testValues.password
      });
    });
  });
});
