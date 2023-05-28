import { Link, NavLink } from "react-router-dom";
import { StyledLogo } from '../../UI/ui-styled-components';
import { StyledContainer, StyledHeader, StyledIconAdd, StyledIconConfig } from "./styled-Header";

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/"><StyledLogo>My ⭐ Flix</StyledLogo></Link>

      <StyledContainer>
        <NavLink
          to="/newvideo"
          style={({ isActive }) => {
            return {
              opacity: isActive ? `.5` : "",
            };
          }}
        >
          <StyledIconAdd />
        </NavLink>

        <NavLink
          to="/editvideos"
          style={({ isActive }) => {
            return {
              opacity: isActive ? `.5` : "",
            };
          }}
        >
          <StyledIconConfig />
        </NavLink>

      </StyledContainer>
    </StyledHeader>
  )
}

