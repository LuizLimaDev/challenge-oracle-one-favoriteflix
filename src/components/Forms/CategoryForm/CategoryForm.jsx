import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import DataController from '../../../context/controller';
import { StyledButton, StyledForm, StyledSectionTitle, StyledTextField } from '../../UI/ui-styled-components';
import { highlightColorRed, secondaryGray } from '../../UI/variables';
import { StyledColorField, StyledContainerColor, StyledLabelColor } from './styled-CategoryForm';

export default function CategoryForm() {
  const {
    postCategory,
    categoriesData,
    dataCategories,
    uptateCategory
  } = useContext(DataController)

  const { id } = useParams()
  const [categoryTitle, setCategoryTitle] = useState('')
  const [color, setColor] = useState('')
  const [sended, setSended] = useState(false)

  useEffect(() => {
    if (id !== undefined) {
      setCategoryTitle(dataCategories[id - 1].title)
      setColor(dataCategories[id - 1].color)
    }
  }, [id, dataCategories])

  async function onSave(event) {
    event.preventDefault();

    const data = {
      title: categoryTitle,
      color: color,
    };

    if (id !== undefined) {
      uptateCategory(id, data)
    } else {
      postCategory(data)
    }

    categoriesData()
    setSended(true)
    setCategoryTitle('')
  }

  return (
    <>
      <StyledSectionTitle style={{ marginTop: '1.25rem' }}>
        {id === undefined ? 'Qual categoria deseja adicionar?' : 'Editando categoria!'}
      </StyledSectionTitle>

      <StyledForm onSubmit={onSave} >
        <StyledTextField
          placeholder='Título'
          value={categoryTitle}
          onChange={event => setCategoryTitle(event.target.value)}
        />
        <StyledContainerColor>
          <StyledLabelColor>Cor</StyledLabelColor>
          <StyledColorField
            type='color'
            value={color}
            onChange={event => setColor(event.target.value)}
          />
        </StyledContainerColor>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0 3rem' }}>
          <Link to='/newvideo'><StyledButton bgcolor={secondaryGray} >Voltar</StyledButton></Link>
          <StyledButton bgcolor={highlightColorRed}>Salvar</StyledButton>
          <StyledButton bgcolor={secondaryGray} >Limpar</StyledButton>
        </div>
      </StyledForm>
      {sended && <Navigate to='/newvideo' />}
    </>
  )
}
