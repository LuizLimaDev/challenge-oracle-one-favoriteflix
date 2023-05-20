import { useContext } from "react";
import DataController from "../../../context/controller";
import { StyledSelect } from './styled-SelectCategory';

export default function SelectCategory({ alterated }) {
  const { dataCategories } = useContext(DataController)

  return (
    <StyledSelect onChange={event => alterated(event.target.value)} >
      <option>Escolha uma categoria...</option>

      {dataCategories.map((category) => {
        return (
          <option value={category.title} key={category.id}>
            {category.title}
          </option>
        )
      })}

    </StyledSelect>
  )
}