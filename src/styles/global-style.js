import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color } from "./theme.js";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: Inter, Sans-Serif;
    color:#FFFFFF;
  }
  a {
    color: ${color("primary", 600)};
  }
  ul{
    list-style: none;
  margin: 0;
  padding:0;
  }
`;
