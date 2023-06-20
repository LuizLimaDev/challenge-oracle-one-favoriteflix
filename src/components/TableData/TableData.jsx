import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import useTableData from '../../hooks/useTableData';
import { StyledButton } from '../UI/ui-styled-components';
import { highlightColorRed, secondaryGray } from '../UI/variables';
import { DeleteModal, StyledContainer, WarningModal } from './styled-TableData';

export default function TableData({ dataType, deleteData, tableType }) {
  const {
    warning,
    setWarning,
    setConfirmDelete,
    tableElementType,
    rows,
    deleteElement
  } = useTableData({ dataType, deleteData, tableType });

  return (
    <StyledContainer>
      <TableContainer component={Paper} sx={{ width: '100%', margin: '1.5rem .5rem .5rem .5rem ' }}>
        <Table sx={{ minWidth: 360 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nome</strong></TableCell>
              {tableElementType === 'videos' && <TableCell align='center'><strong>Descrição</strong></TableCell>}
              <TableCell align='center'><strong>Editar</strong></TableCell>
              <TableCell align='center'><strong>Remover</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows[0].map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row' align='left' >
                  {item.name}
                </TableCell>
                {tableElementType === 'videos' && <TableCell align='center'>{item.description}</TableCell>}

                {!item.database
                  ? <>
                    <TableCell align='center'>
                      <Link to={tableType === 'categories'
                        ? `/newcategory/${item.id}`
                        : `/newvideo/${item.id}`}
                      >
                        {item.edit}
                      </Link>
                    </TableCell>

                    <TableCell
                      align='center'
                      onClick={(e) => deleteElement(item.id)}
                      style={{ cursor: 'pointer' }}>
                      {item.remove}
                    </TableCell>
                  </>
                  : <>
                    <TableCell align='center'>*</TableCell>
                    <TableCell align='center'>*</TableCell>
                  </>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >

      <DeleteModal display={warning ? 'flex' : 'none'}>
        <WarningModal>
          <h3>Você realmente deseja remover?</h3>

          <div>
            <StyledButton
              bgcolor={highlightColorRed}
              style={{ marginRight: '1rem' }}
              onClick={() => setConfirmDelete(true)}
            >
              Sim
            </StyledButton>
            <StyledButton
              bgcolor={secondaryGray}
              onClick={() => setWarning(false)}
            >Não</StyledButton>
          </div>
        </WarningModal>
      </DeleteModal>
    </StyledContainer>
  )
}