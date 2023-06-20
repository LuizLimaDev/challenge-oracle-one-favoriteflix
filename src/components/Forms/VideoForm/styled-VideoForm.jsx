import { styled } from 'styled-components';


export const StyledContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    margin: 1.5rem 0 1.5rem 0;

    @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`