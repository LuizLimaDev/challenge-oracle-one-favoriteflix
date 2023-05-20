import { StyledSectionTitle } from '../components/UI/ui-styled-components';
import TableVideo from '../components/TableVideo/TableVideo';
import { useContext } from 'react';
import DataController from '../context/controller';

export default function EditData() {
  const {
    dataVideos,
    deleteData,
    dataCategories,
    deleteCategory
  } = useContext(DataController)

  return (
    <>
      <StyledSectionTitle>Editar vídeos</StyledSectionTitle>
      <TableVideo dataType={dataVideos} deleteData={deleteData} tableType="videos" />

      <StyledSectionTitle>Editar categorias</StyledSectionTitle>
      <TableVideo dataType={dataCategories} deleteData={deleteCategory} tableType="categories" />
    </>
  )
}