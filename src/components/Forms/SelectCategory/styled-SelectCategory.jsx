import { styled } from 'styled-components';
import { primaryGray, secondaryFontColor } from '../../../styles/variables';

export const StyledSelect = styled.select`
  width: 85%;
  padding: .25rem;

  color: ${secondaryFontColor};
  background-color: ${primaryGray};
`