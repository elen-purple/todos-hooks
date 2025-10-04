import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s;
  }
  
  *:focus {
     outline: none;
  }
  
  body {
    scroll-behavior: smooth;
    font-family: "Montserrat", sans-serif;
  }
  
  img {
    width: 100%;
    height: auto;
    line-height: 0;
    display: block;
  }
  
  a {
    text-decoration-line: none;
  }
  
  ul {
    list-style-type: none;
  }
  
  button {
    cursor: pointer;
    display: block;
    border: none;
    background-color: transparent;
  }

  input{
    display: block;
  }
`;
