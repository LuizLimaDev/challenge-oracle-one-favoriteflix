import { styled } from "styled-components"
import banner from '../../assets/banner.jpg'

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 90%;
  height: 25rem;
  padding: .5rem 6rem;
  margin: 1.25rem auto;
  border-radius: 1.625rem;

  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${banner});
  background-size: cover;

  @media (max-width: 400px) {
    display: none
  }
`

export const StyledContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 26%;
  position: absolute;
  right: 5%;

  @media (max-width: 400px) {
    display: none
  }
`