import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SelectCategory from '../SelectCategory/SelectCategory';
import { highlightColorRed, secondaryGray } from '../../UI/variables';
import { StyledForm, StyledTextArea, StyledButton, StyledTextField } from '../../UI/ui-styled-components';
import DataController from '../../../context/controller';

export default function VideoForm() {
  const {
    postVideo,
    videoData,
    dataVideos,
    updateVideo
  } = useContext(DataController)

  const { id } = useParams('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [poster, setposter] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (id !== undefined) {
      setTitle(dataVideos[id - 1].title)
      setUrl(dataVideos[id - 1].url)
      setposter(dataVideos[id - 1].poster)
      setCategory(dataVideos[id - 1].category)
      setDescription(dataVideos[id - 1].description)
    }
  }, [id, dataVideos])

  async function onSave(event) {
    event.preventDefault();

    const video = {
      category,
      title,
      url,
      poster,
      description
    }

    if (id !== undefined) {
      updateVideo(id, video)

    } else {
      postVideo(video)
    }

    videoData()

    setTitle('')
    setUrl('')
    setposter('')
    setCategory('')
    setDescription('')
  }

  return (
    <>
      <StyledForm onSubmit={onSave} >
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
          alterated={(value) => {
            setCategory(value)
          }}
          selectedOption={category}
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