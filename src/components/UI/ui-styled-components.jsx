import styled from "styled-components";
import { primaryFontColor, primaryGray } from "./variables";


export const StyledLogo = styled.h1`
  filter: drop-shadow(0 0 0.75rem ${primaryGray});

  font-size: 1.4rem;
  font-family: sans-serif;
  color: ${primaryFontColor};
`