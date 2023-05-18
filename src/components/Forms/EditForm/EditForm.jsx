import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { highlightColorRed, secondaryGray } from '../../UI/variables';
import { StyledForm, StyledTextField, StyledTextArea, StyledButton } from '../../UI/ui-styled-components';
import SelectCategory from '../SelectCategory/SelectCategory';
import DataController from '../../../context/controller';

// const select = document.querySelector('.select')
// const index = select.selectedIndex
// let text = select.options[index].text
// console.log(text)

export default function EditForm() {
  const { postData, dataVideos } = useContext(DataController)
  const { id } = useParams()
  const videoDetails = dataVideos[id - 1]

  // se a categoria for diferente... deletar o video da categoria antiga
  // como preencher o option com a categoria q vem da API?
  // console.log(videoDetails.category)


  const [title, setTitle] = useState(`${videoDetails.title}`)
  const [url, setUrl] = useState(`${videoDetails.url}`)
  const [poster, setposter] = useState(`${videoDetails.poster}`)
  const [category, setCategory] = useState(`{${videoDetails.category}}`)
  const [description, setDescription] = useState(`${videoDetails.description}`)

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

    setTitle('')
    setUrl('')
    setposter('')
    setCategory('')
    setDescription('')
  }

  return (
    <>
      <StyledForm onSubmit={onSave}>
        <h1>
          <span style={{ color: `${highlightColorRed}` }}>Editando: </span>
          {videoDetails.title}
        </h1>

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