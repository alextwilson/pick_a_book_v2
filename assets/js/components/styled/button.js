import "phoenix_html";
import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.primary ? '#66023c' : 'white'};
  color: ${props => (props.primary ? "white" : "#66023c")};

  font-size: 1em;
  font-weight: 400;
  height: 50px;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid #66023c;
  border-radius: 5px;
`;

Button.displayName = "Button";

export default Button;
