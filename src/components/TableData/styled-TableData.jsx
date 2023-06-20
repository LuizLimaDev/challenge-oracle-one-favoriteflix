import { styled } from 'styled-components';
import { secondaryFontColor } from '../UI/variables';

export const StyledContainer = styled.div`
    display: flex;
    align-content: start;
    justify-content: center;

    width: 85%;
`

export const DeleteModal = styled.div`
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    position: fixed;

    width: 100vw;
    height: 100vh;
    top: 0;

    background-color: rgba(0, 0, 0, .4);
`

export const WarningModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    padding: 1.5rem;
    border-radius: 5px;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    background-color: ${secondaryFontColor};
`