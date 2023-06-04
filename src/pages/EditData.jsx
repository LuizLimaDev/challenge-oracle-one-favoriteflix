import { StyledSectionTitle } from '../components/UI/ui-styled-components';
import TableVideo from '../components/TableData/TableData';
import { useContext } from 'react';
import DataController from '../context/controller';
import Loading from '../components/Loading/Loading';

export default function EditData() {
  const {
    dataVideos,
    deleteVideo,
    dataCategories,
    deleteCategory,
    isLoading
  } = useContext(DataController)

  return (
    <>
      <StyledSectionTitle>Editar vídeos</StyledSectionTitle>
      {isLoading === true && <Loading />}
      <TableVideo dataType={dataVideos} deleteData={deleteVideo} tableType="videos" />

      <StyledSectionTitle>Editar categorias</StyledSectionTitle>
      <TableVideo dataType={dataCategories} deleteData={deleteCategory} tableType="categories" />
    </>
  )
}