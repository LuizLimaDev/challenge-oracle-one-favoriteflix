import styled from "styled-components"
import { RxGear } from "react-icons/rx";
import { MdAddToQueue } from "react-icons/md";
import { highlightColorRed, primaryGray } from '../../UI/variables';
import { primaryFontColor } from "../../UI/variables";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  height: 6vh;
  padding: 1.3rem 2rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  background-color: rgba(0, 0, 0, .125);

  /* @media (max-width: 400px) {
    align-items: flex-start;
    height: 20vh;
  } */
`

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`

export const StyledIconAdd = styled(MdAddToQueue)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${primaryGray};

    &:hover{
    fill: ${highlightColorRed};
}
`

export const StyledIconConfig = styled(RxGear)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${primaryGray};

    &:hover{
    color: ${highlightColorRed};
}
`

export const StyledWellcome = styled.h1`
  margin-top: 1rem;

  text-align: center;
  color: ${primaryFontColor};
`