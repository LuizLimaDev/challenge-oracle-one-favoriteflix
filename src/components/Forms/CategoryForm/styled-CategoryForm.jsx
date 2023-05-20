import { styled } from "styled-components"
import { secondaryFontColor } from "../../UI/variables"
import { StyledTextField } from '../../UI/ui-styled-components'

export const StyledContainerColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  position: relative;
`

export const StyledColorField = styled(StyledTextField)`
  height: 2.7rem;
  padding: 1.2rem .25rem  .25rem;
`

export const StyledLabelColor = styled.label`
  position: absolute;
  left: 5.5%;
  top: 11%;
  z-index: 1;

  font-size: .8rem;
  color: ${secondaryFontColor};
`