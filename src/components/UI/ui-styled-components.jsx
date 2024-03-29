import styled from 'styled-components';
import { highlightColorGreen, primaryFontColor, primaryGray, secondaryGray } from '../../styles/variables';

export const StyledContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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
  width: 85%;
  height: 2rem;
  padding-left: .5rem;

  background-color: ${primaryGray};
`

export const StyledTextArea = styled.textarea`
  width: 85%;
  height: 5rem;
  padding: 0.3rem .5rem;

  background-color: ${primaryGray};
  `

export const StyledSectionTitle = styled.h3`
  margin-top: 3rem;

  color: ${primaryFontColor};
  text-align: center;
  font-weight: bold;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 1);
`
export const Warning = styled.div`
    display: ${props => props.display};
    align-items: center;
    justify-content: center;

    width: 350px;
    height: 35px;
    margin-top: 1.5rem;
    
    background-color: ${secondaryGray};
    border-top: 5px solid ${highlightColorGreen};
`

export const StyledTextWarning = styled.p`
  margin: .5rem 0 4rem 0;
`