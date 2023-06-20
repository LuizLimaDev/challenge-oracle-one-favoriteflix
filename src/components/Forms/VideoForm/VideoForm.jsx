import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DataController from '../../../context/controller';
import { StyledButton, StyledForm, StyledTextArea, StyledTextField, Warning } from '../../UI/ui-styled-components';
import { highlightColorRed, secondaryFontColor, secondaryGray } from '../../UI/variables';
import SelectCategory from '../SelectCategory/SelectCategory';
import { StyledContainerButtons } from './styled-VideoForm';

export default function VideoForm() {
  const {
    postVideo,
    videoData,
    dataVideos,
    updateVideo
  } = useContext(DataController)

  let { id } = useParams('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [poster, setposter] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [warning, setWarning] = useState(false)
  const nativage = useNavigate()

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
      description,
      database: false
    }

    if (id !== undefined) {
      updateVideo(id, video)

      setTimeout(() => {
        nativage('/editvideos')
      }, 2000)
    } else {
      postVideo(video)

      setTitle('')
      setUrl('')
      setposter('')
      setCategory('')
      setDescription('')
    }

    videoData()

    setWarning(true)
    setTimeout(() => {
      setWarning(false)
    }, 2000)
  }

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

        <Warning display={warning ? 'flex' : 'none'}>
          <h3>Vídeo {id ? 'editado' : 'adicionado'} com sucesso!</h3>
        </Warning>

      </StyledForm>
    </>
  )
}