import { useState } from 'react';
import { Link } from 'react-router-dom';
import { highlightColorRed, secondaryGray } from '../../UI/variables';
import { StyledForm, StyledTextField, StyledTextArea, StyledButton } from '../../UI/ui-styled-components';
import SelectCategory from '../SelectCategory/SelectCategory';

export default function VideoForm() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [poster, setposter] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  function onSave(event) {
    event.preventDefault();

    fetch(`https://json-server-favoriteflix.vercel.app/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: category,
        title: title,
        url: url,
        poster: poster,
        description: description
      })
    })

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
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        />
        <StyledTextField
          id="videoUrl"
          type="url"
          placeholder="Link do vídeo"
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          required
        />
        <StyledTextField
          id="posterUrl"
          type="url"
          placeholder="Link da imagem"
          value={poster}
          onChange={(event) => {
            setposter(event.target.value);
          }}
          required
        />
        <SelectCategory
          id="category"
          alterated={(value) => {
            setCategory(value)
          }}
          required
        />
        <StyledTextArea
          id="description"
          placeholder="Descrição"
          value={description}
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