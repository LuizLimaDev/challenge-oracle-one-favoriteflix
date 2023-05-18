import { StyledSection, StyledCategoryTitle, StyledContainerCard, StyledVideoTitle, StyledVideoImg } from "./styled-Slider";
import Slick from "react-slick";
import settings from "./settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider({ category, videos }) {
  return (
    <StyledSection>
      <StyledCategoryTitle color={category.color}>{category.title}</StyledCategoryTitle>
      <Slick {...settings}>
        {videos.map((video) => (
          <StyledContainerCard key={video.id} >
            <StyledVideoImg src={video.poster} alt={video.title} />
            <StyledVideoTitle>{video.title}</StyledVideoTitle>
          </StyledContainerCard>
        ))}
      </Slick>
    </StyledSection>
  )
}
