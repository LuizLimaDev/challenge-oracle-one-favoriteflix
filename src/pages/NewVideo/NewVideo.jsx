import VideoForm from '../../components/Forms/VideoForm/VideoForm';
import { StyledSectionTitle } from '../../components/UI/ui-styled-components';

export default function NewVideo() {

  return (
    <section>
      <StyledSectionTitle>
        Qual vídeo deseja adicionar?
      </StyledSectionTitle>

      <VideoForm />
    </section>
  )
}