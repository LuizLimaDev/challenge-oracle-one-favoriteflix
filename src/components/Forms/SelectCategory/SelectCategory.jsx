import { useContext } from "react";
import DataController from "../../../context/controller";
import { StyledSelect } from './styled-SelectCategory';

let itens = [
  'Escolha uma categoria...',
];

export default function SelectCategory({ alterated }) {
  const { dataCategories } = useContext(DataController)

  dataCategories.forEach((item) => {
    if (itens.includes(item.title)) {
      return
    }

    itens.push(item.title)
  })



  return (
    <StyledSelect className="select" onChange={event => alterated(event.target.value)} >
      {itens.map(item => {
        return <option key={item}>{item}</option>
      })}
    </StyledSelect>
  )
}