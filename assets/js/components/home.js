import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Title from "./styled/title";
// import Background from "./styled/background";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Title>Welcome to PickABook!</Title>
        {sessionStorage.getItem("username") && (
          <Title primary>Hello {sessionStorage.getItem("username")}!</Title>
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu sit amet dui cursus, vel accumsan nulla varius. Donec eleifend rhoncus odio, nec rhoncus felis. Phasellus tempor imperdiet nisl, ac mattis arcu efficitur a. Duis porta mauris eget lorem sodales malesuada. Maecenas tempor, dolor a pulvinar vehicula, quam nisl venenatis elit, at tempor turpis ligula eu odio. Donec nisl magna, ornare bibendum maximus vitae, iaculis vel tortor. Etiam lorem magna, ullamcorper etconvallis nec, tempor id odio.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta libero sed volutpat molestie. Duis bibendum tristique dolor at venenatis. Mauris at faucibus sem, eu sodales libero. Nam metus mi, lobortis vitae nunc nec, bibendum lobortis velit. Vivamus at neque quam. Ut lacus mauris, euismod vitae volutpat vel, sagittis vel orci. Sed fringilla enim id egestas maximus. Aliquam erat volutpat.
        </p>
      </div>
    );
  }
}

module.exports = Home;
