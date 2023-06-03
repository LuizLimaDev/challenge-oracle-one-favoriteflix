import { useContext } from "react";
import Slider from "../Slider/Slider";
import DataController from "../../../context/controller";
import Loading from "../../Loading/Loading";
import { ContainerCarousel } from "./styled-Carousel";

export default function Carousel() {
  const { dataVideos, dataCategories, isLoading } = useContext(DataController)

  return (
    <ContainerCarousel>
      {isLoading === true && <Loading />}
      {dataCategories.map(category => {
        return (
          < Slider
            key={category.id}
            title={category.title}
            color={category.color}
            videos={dataVideos.filter(video => video.category === category.title ? video : null)}
          />
        )
      })}
    </ContainerCarousel>
  )
}