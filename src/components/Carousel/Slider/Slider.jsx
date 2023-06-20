import { Link } from 'react-router-dom';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import settings from './settings';
import { StyledCategoryTitle, StyledContainerCard, StyledSection, StyledVideoImg, StyledVideoTitle } from './styled-Slider';

export default function Slider({ title, color, videos }) {

  return (
    <StyledSection>
      <StyledCategoryTitle color={color}>{title}</StyledCategoryTitle>
      <Slick {...settings}>
        {videos.map((item) => (
          <Link to={`/playvideo/${item.id}`} key={item.id}>
            <StyledContainerCard >
              <StyledVideoImg src={item.poster} alt={item.title} />
              <StyledVideoTitle>{item.title}</StyledVideoTitle>
            </StyledContainerCard>
          </Link>
        ))}
      </Slick>
    </StyledSection>
  )
}
