import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { highlightColorRed, secondaryGray } from '../../UI/variables';
import { StyledButton, StyledForm, StyledSectionTitle, StyledTextField } from '../../UI/ui-styled-components';
import { StyledContainerColor, StyledLabelColor, StyledColorField } from './styled-CategoryForm';
import DataController from '../../../context/controller';

export default function CategoryForm() {
  const [title, setTitle] = useState()
  const [color, setColor] = useState()
  const { postDataCategory } = useContext(DataController)

  function dataNewCategory() {
    const data = {
      title: title,
      color: color,
    };


    postDataCategory(data)
    console.log(data)
  }

  return (
    <>
      <StyledSectionTitle style={{ marginTop: "1.25rem" }}>Qual categoria deseja adicionar?</StyledSectionTitle>

      <StyledForm onSubmit={dataNewCategory} >
        <StyledTextField
          placeholder="Título"
          onChange={event => setTitle(event.target.value)}
        />
        <StyledContainerColor>
          <StyledLabelColor>Cor</StyledLabelColor>
          <StyledColorField
            type="color"
            onChange={event => setColor(event.target.value)}
          />
        </StyledContainerColor>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1.5rem 0 3rem" }}>
          <Link to="/newvideo"><StyledButton bgcolor={secondaryGray} >Voltar</StyledButton></Link>
          <StyledButton bgcolor={highlightColorRed}>Salvar</StyledButton>
          <StyledButton bgcolor={secondaryGray} >Limpar</StyledButton>
        </div>
      </StyledForm>
    </>
  )
}
