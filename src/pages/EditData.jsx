import { useContext } from 'react';
import Loading from '../components/Loading/Loading';
import TableVideo from '../components/TableData/TableData';
import { StyledSectionTitle, StyledTextWarning } from '../components/UI/ui-styled-components';
import DataController from '../context/controller';

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
      <TableVideo dataType={dataVideos} deleteData={deleteVideo} tableType='videos' />
      <StyledTextWarning style={{ margin: ".5rem 0 4rem 8rem" }}>
        * Os dados base não podem ser editados ou removidos, por favor, adicione dados!
      </StyledTextWarning>


      <StyledSectionTitle>Editar categorias</StyledSectionTitle>
      <TableVideo dataType={dataCategories} deleteData={deleteCategory} tableType='categories' />
      <StyledTextWarning style={{ margin: ".5rem 0 4rem 8rem" }}>
        * Os dados base não podem ser editados ou removidos, por favor, adicione dados!
      </StyledTextWarning>
    </>
  )
}