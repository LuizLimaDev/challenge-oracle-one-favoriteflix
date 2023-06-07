import { styled } from "styled-components";
import { secondaryFontColor } from "../UI/variables";


export const DeleteModal = styled.div`
display: ${props => props.display};
justify-content: center;
align-items: center;
position: absolute;

width: 100%;
height: 100%;

top: 0;

/* background-color: rgba(0, 0, 0, 0.6); */
`

export const WarningModal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.5rem;

padding: 1.5rem;
border-radius: 5px;

background-color: ${secondaryFontColor};
`