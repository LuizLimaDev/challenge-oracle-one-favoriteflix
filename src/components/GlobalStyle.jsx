import { createGlobalStyle } from "styled-components";
import { primaryFontColor, tertiaryGray } from "./UI/variables";


export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

body {
  width: 100vw;
  height: 100vh;
  position: relative;

  margin: 0 auto;

  overflow-x: hidden;
  
  color: ${primaryFontColor};
  background-color: ${tertiaryGray};
}
`