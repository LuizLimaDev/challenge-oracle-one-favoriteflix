import { Link, useNavigate } from 'react-router-dom';
import useCategoryForm from '../../../hooks/useCategoryForm';
import Toast from '../../Toast/Toast';
import { StyledButton, StyledForm, StyledSectionTitle, StyledTextField } from '../../UI/ui-styled-components';
import { highlightColorRed, secondaryGray } from '../../../styles/variables';
import { StyledColorField, StyledContainerButtons, StyledContainerColor, StyledLabelColor } from './styled-CategoryForm';

export default function CategoryForm() {
  const navigate = useNavigate();
  const {
    id,
    categoryTitle,
    setCategoryTitle,
    color,
    setColor,
    sended,
    warning,
    onSave,
  } = useCategoryForm();

  return (
    <>
      <StyledSectionTitle>
        {id === undefined ? 'Qual categoria deseja adicionar?' : 'Editando categoria!'}
      </StyledSectionTitle>

      <StyledForm onSubmit={onSave} >
        <StyledTextField
          placeholder='Título'
          value={categoryTitle}
          onChange={event => setCategoryTitle(event.target.value)}
          required
        />
        <StyledContainerColor>
          <StyledLabelColor>Cor</StyledLabelColor>
          <StyledColorField
            type='color'
            value={color}
            onChange={event => setColor(event.target.value)}
            required
          />
        </StyledContainerColor>

        <StyledContainerButtons >
          <Link to='/newvideo'><StyledButton bgcolor={secondaryGray} >Voltar</StyledButton></Link>
          <StyledButton type='submit' bgcolor={highlightColorRed}>Salvar</StyledButton>
          <StyledButton bgcolor={secondaryGray} >Limpar</StyledButton>
        </StyledContainerButtons>

        <Toast
          activation={warning}
          condition={id}
          textEdit='Editada com sucesso! Voltando para tela anterior.'
          textAdd='Adicionada com sucesso! Voltando para tela anterior.'
        />

        {sended && navigate(-1)}
      </StyledForm>
    </>
  )
}
