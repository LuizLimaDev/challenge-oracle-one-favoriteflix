import BannerImg from '../../assets/Banner.png';
import { StyledContainer, StyledContainerDescription, StyledImg } from './styled-Banner';

export default function Banner() {
  return (
    <StyledContainer>
      <StyledImg src={BannerImg} alt="imagem do banner" />
      <StyledContainerDescription>
        <h2>My ⭐ Video</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa, est dolorum rerum itaque commodi eius assumenda doloribus, impedit dicta consequuntur distinctio velit facere odio minima. Doloremque recusandae vel incidunt.</p>
      </StyledContainerDescription>
    </StyledContainer>
  )
}
