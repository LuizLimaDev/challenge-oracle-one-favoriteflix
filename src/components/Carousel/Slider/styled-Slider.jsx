import styled from "styled-components"
import { primaryFontColor } from "../../UI/variables"

export const StyledSection = styled.section`
width: 90%;
margin: 0 3rem 3rem 3rem;
`

export const StyledCategoryTitle = styled.h2`
  width: 10rem;
  margin: 1.25rem 0 .5rem 1rem;

  font-size: 1.25rem;
  color: ${props => props.color};
`

export const StyledContainerCard = styled.div`
  width: 19rem;
  height: 12rem;


  margin-right:  1rem;
`

export const StyledVideoTitle = styled.h3`
  margin: .5rem 0 0 1rem;

  font-size: 1rem;
  font-weight: 200;
  color: ${primaryFontColor};
`

export const StyledVideoImg = styled.img`
  width: 19rem;
  height: 100%;
  margin-left: 1rem;
  border-radius: 1.625rem;
`