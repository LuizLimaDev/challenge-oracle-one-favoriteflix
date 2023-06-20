import { Link } from 'react-router-dom';
import { StyledButton, StyledForm, StyledTextArea, StyledTextField } from '../../UI/ui-styled-components';
import { highlightColorRed, secondaryFontColor, secondaryGray } from '../../UI/variables';
import SelectCategory from '../SelectCategory/SelectCategory';
import { StyledContainerButtons } from './styled-VideoForm';
import Toast from '../../Toast/Toast';
import useVideoForm from '../../../hooks/useVideoForm';

export default function VideoForm() {
  const {
    id,
    title,
    setTitle,
    url,
    setUrl,
    poster,
    setposter,
    category,
    setCategory,
    description,
    setDescription,
    warning,
    onSave
  } = useVideoForm();

  return (
    <>
      <StyledForm onSubmit={onSave} >
        <StyledTextField
          id='title'
          type='text'
          placeholder='Título'
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        />
        <StyledTextField
          id='videoUrl'
          type='url'
          placeholder='Link do vídeo'
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          required
        />
        <StyledTextField
          id='posterUrl'
          type='url'
          placeholder='Link da imagem'
          value={poster}
          onChange={(event) => {
            setposter(event.target.value);
          }}
          required
        />
        <SelectCategory
          alterated={(value) => {
            setCategory(value)
          }}
          selectedOption={category}
          required
        />
        <StyledTextArea
          id='description'
          placeholder='Descrição'
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <StyledContainerButtons>
          <StyledButton bgcolor={secondaryGray}>Limpar</StyledButton>
          <StyledButton bgcolor={highlightColorRed}>Salvar</StyledButton>
          <Link to='/newcategory'><StyledButton bgcolor={secondaryGray} fontSize='1rem'>+ Categoria</StyledButton></Link>
          <Link to='/'><StyledButton bgcolor={secondaryFontColor} fontSize='1rem'>Voltar</StyledButton></Link>
        </StyledContainerButtons>

        <Toast
          activation={warning}
          condition={id}
          textEdit='Editado com sucesso! Voltando para tela anterior.'
          textAdd='Vídeo adicionado com sucesso!'
        />
      </StyledForm>
    </>
  )
}