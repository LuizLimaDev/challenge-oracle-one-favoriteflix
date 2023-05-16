import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SelectCategory from '../SelectCategory/SelectCategory';
import { highlightColorRed, secondaryGray } from '../../UI/variables';
import { StyledForm, StyledTextField, StyledTextArea, StyledButton } from '../../UI/ui-styled-components';
import DataController from '../../../context/controller';

export default function VideoForm() {

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [poster, setposter] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const { postData } = useContext(DataController)


  async function onSave(event) {
    event.preventDefault();

    const video = {
      category,
      title,
      url,
      poster,
      description
    }

    postData(video)

    //clear from ??
    setTitle('')
    setUrl('')
    setposter('')
    setCategory('')
    setDescription('')
  }

  return (
    <>
      <StyledForm onSubmit={onSave}>
        <StyledTextField
          id="title"
          type="text"
          placeholder="Título"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          required
        />
        <StyledTextField
          id="videoUrl"
          type="url"
          placeholder="Link do vídeo"
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          required
        />
        <StyledTextField
          id="posterUrl"
          type="url"
          placeholder="Link da imagem"
          onChange={(event) => {
            setposter(event.target.value);
          }}
          required
        />
        <SelectCategory
          alterated={(value) => {
            setCategory(value)
          }}
          required
        />
        <StyledTextArea
          id="description"
          placeholder="Descrição"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
          <StyledButton bgcolor={secondaryGray}>Limpar</StyledButton>
          <StyledButton bgcolor={highlightColorRed}>Salvar</StyledButton>
          <Link to="/newcategory"><StyledButton bgcolor={secondaryGray}>+ Categoria</StyledButton></Link>
        </div>

      </StyledForm>
    </>
  )
}