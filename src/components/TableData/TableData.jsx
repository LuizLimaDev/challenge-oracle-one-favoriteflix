import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

function createDate(id, name, description, edit, remove) {
  return { id, name, description, edit, remove };
}

export default function TableData({ dataType, deleteData, tableType }) {
  const tableElementType = tableType;

  const rows = [
    dataType.map((item) => (
      createDate(item.id, item.title, item.description, 'Editar', 'Remover')
    ))
  ];

  function deleteElement(id) {
    deleteData(id)
  }

  return (
    <div style={{ display: "flex", alignContent: "start", justifyContent: "center" }}>
      <TableContainer component={Paper} sx={{ width: "90%", margin: "4rem 0.5rem" }}>
        <Table sx={{ minWidth: 360 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Nome</strong></TableCell>
              {tableElementType === 'videos' && <TableCell align="center"><strong>Descrição</strong></TableCell>}
              <TableCell align="center"><strong>Editar</strong></TableCell>
              <TableCell align="center"><strong>Remover</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows[0].map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left" >
                  {item.name}
                </TableCell>
                {tableElementType === 'videos' && <TableCell align="center">{item.description}</TableCell>}

                <TableCell align="center">
                  <Link to={tableType === 'categories'
                    ? `/newcategory/${item.id}`
                    : `/newvideo/${item.id}`}
                  >
                    {item.edit}
                  </Link>
                </TableCell>

                <TableCell
                  align="center"
                  onClick={(e) => deleteElement(item.id)}
                  style={{ cursor: "pointer" }}>
                  {item.remove}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
    </div>
  )
}