import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import DataController from '../../../context/controller';
import { StyledButton, StyledForm, StyledSectionTitle, StyledTextField, Warning } from '../../UI/ui-styled-components';
import { highlightColorRed, secondaryGray } from '../../UI/variables';
import { StyledColorField, StyledContainerButtons, StyledContainerColor, StyledLabelColor } from './styled-CategoryForm';

export default function CategoryForm() {
  const {
    postCategory,
    categoriesData,
    dataCategories,
    uptateCategory
  } = useContext(DataController)
  const { id } = useParams()

  const [categoryTitle, setCategoryTitle] = useState('')
  const [color, setColor] = useState()
  const [sended, setSended] = useState(false)
  const [warning, setWarning] = useState(false)

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
      database: false
    };

    if (id !== undefined) {
      uptateCategory(id, data)
    } else {
      postCategory(data)
    }

    categoriesData()

    setCategoryTitle('')
    setWarning(true);

    setTimeout(() => {
      setWarning(false);

      setSended(true)
    }, 2000)
  }

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
          <StyledButton bgcolor={highlightColorRed}>Salvar</StyledButton>
          <StyledButton bgcolor={secondaryGray} >Limpar</StyledButton>
        </StyledContainerButtons>

        <Warning display={warning ? 'flex' : 'none'}>
          <h3 style={{ padding: '.5rem' }}>
            {id ? 'Categoria editada com sucesso!' : 'Categoria adicionada com sucesso!'}
          </h3>
        </Warning>

        {sended && <Navigate to='/newvideo' />}
      </StyledForm>



    </>
  )
}
