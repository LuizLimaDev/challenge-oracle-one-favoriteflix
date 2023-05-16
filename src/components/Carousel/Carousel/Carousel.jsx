import { useContext } from "react";
import Slider from "../Slider/Slider";
import { highlightColorBlue, highlightColorGreen, highlightColorYellow } from "../../UI/variables";
import DataController from "../../../context/controller";

const videosCategories = [
  {
    category: 'Front-end',
    color: `${highlightColorBlue}`
  },
  {
    category: 'Back-end',
    color: `${highlightColorGreen}`
  },
  {
    category: 'Devops',
    color: `${highlightColorYellow}`
  }
]

export default function Carousel() {
  const { dataVideos } = useContext(DataController)

  return (
    <section>
      {videosCategories.map(category =>
        <Slider
          key={category.category}
          title={category.category}
          color={category.color}
          videos={dataVideos.filter(video => video.category === category.category)}
        />
      )}
    </section>
  )
}