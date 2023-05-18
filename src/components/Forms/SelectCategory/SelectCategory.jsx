import { useEffect, useState } from "react";
import { StyledSelect } from './styled-SelectCategory';

export default function SelectCategory({ alterated }) {
  const [categories, setCategories] = useState([])

  function getCategories() {
    fetch('https://json-server-favoriteflix.vercel.app/videocategories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <StyledSelect className="select" onChange={event => alterated(event.target.value)} >
      {categories.map((category) => (
        <option key={category.id}>{category.title}</option>
      ))}
    </StyledSelect>
  )
}