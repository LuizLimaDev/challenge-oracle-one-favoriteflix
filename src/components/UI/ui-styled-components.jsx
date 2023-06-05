import styled from "styled-components";
import { primaryFontColor, primaryGray } from "./variables";

export const StyledLogo = styled.h1`
  filter: drop-shadow(0 0 0.75rem ${primaryGray});

  font-size: 1.4rem;
  font-family: sans-serif;
  color: ${primaryFontColor};
`

export const StyledButton = styled.button`
  width: 7rem;
  height: 2rem;
  border-radius: 1.875rem;
  border: none;

  font-size: ${props => props.fontSize || '1.1rem'};
  font-weight: bold;
  color: ${primaryFontColor};

  background-color: ${props => props.bgcolor};

  @media (max-width: 450px) {
    width: 6rem;
    height: 2rem;

    font-size: 1rem;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 1.5rem;
`

export const StyledTextField = styled.input`
  width: 90%;
  height: 2rem;
  padding-left: .5rem;

  background-color: ${primaryGray};
`

export const StyledTextArea = styled.textarea`
  width: 90%;
  height: 5rem;
  padding: 0.3rem .5rem;

  background-color: ${primaryGray};
  `

export const StyledSectionTitle = styled.h3`
color: ${primaryFontColor};
text-align: center;
font-weight: bold;
margin-top: 1.25rem;
`