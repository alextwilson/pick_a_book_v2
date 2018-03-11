import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LogIn from "../js/components/logIn";

// const { mount, getWrapper, get } = createTestContext({ fixture });
Enzyme.configure({ adapter: new EnzymeAdapter() });

// beforeEach(mount);

describe("Log in", () => {
  describe("User can login", () => {
    const testValues = {
      email: "foo@gmail.com",
      password: "123456",
      handleSubmit: jest.fn()
    };
    it("Submit works", () => {
      const component = mount(<LogIn {...testValues} />);
      component.find("button").simulate("click");
      testValues.handleSubmit({ email: "foo@gmail.com", password: "123456" });
      expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
      expect(testValues.handleSubmit).toHaveBeenCalledWith({
        email: testValues.email,
        password: testValues.password
      });
    });
  });
});
