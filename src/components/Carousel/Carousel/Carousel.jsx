import { useContext } from "react";
import Slider from "../Slider/Slider";
import DataController from "../../../context/controller";

export default function Carousel() {
  const { dataVideos, dataCategories } = useContext(DataController)

  return (
    <section>
      {dataCategories.map(category => {
        return (
          <Slider
            key={category.id}
            title={category.title}
            color={category.color}
            videos={dataVideos.filter(video => video.category === category.title ? video : null)}
          />
        )
      })}
    </section>
  )
}