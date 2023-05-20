import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import DataController from "../../../context/controller";
import { StyledButton, StyledForm, StyledSectionTitle, StyledTextField } from "../../UI/ui-styled-components";
import { highlightColorRed, secondaryGray } from "../../UI/variables";
import { StyledColorField, StyledContainerColor, StyledLabelColor } from "./styled-CategoryForm";

export default function CategoryForm() {
  const [title, setTitle] = useState()
  const [color, setColor] = useState()
  const [sended, setSended] = useState(false)

  const { postCategory, categoriesData } = useContext(DataController)

  async function onSave(event) {
    event.preventDefault();

    const data = {
      title: title,
      color: color,
    };

    postCategory(data)
    categoriesData()
    setSended(true)

    setTitle('')
  }

  return (
    <>
      <StyledSectionTitle style={{ marginTop: "1.25rem" }}>Deseja adicionar uma categoria?</StyledSectionTitle>

      <StyledForm onSubmit={onSave} >
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
      {sended && <Navigate to="/newvideo" />}
    </>
  )
}
