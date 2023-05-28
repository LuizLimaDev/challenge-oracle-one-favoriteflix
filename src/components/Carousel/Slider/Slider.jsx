import { StyledSection, StyledCategoryTitle, StyledContainerCard, StyledVideoTitle, StyledVideoImg } from "./styled-Slider";
import Slick from "react-slick";
import settings from "./settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export default function Slider({ title, color, videos }) {
  return (
    <StyledSection>
      <StyledCategoryTitle color={color}>{title}</StyledCategoryTitle>
      <Slick {...settings}>
        {videos.map((item) => (
          <Link to={item.url} key={item.id}>
            <StyledContainerCard  >
              <StyledVideoImg src={item.poster} alt={item.title} />
              <StyledVideoTitle>{item.title}</StyledVideoTitle>
            </StyledContainerCard>
          </Link>
        ))}
      </Slick>
    </StyledSection>
  )
}
