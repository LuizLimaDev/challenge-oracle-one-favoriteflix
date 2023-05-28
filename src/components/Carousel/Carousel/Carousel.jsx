import { useContext } from "react";
import Slider from "../Slider/Slider";
import DataController from "../../../context/controller";
import { useNavigation } from "react-router-dom";
import Loading from "../../Loading/Loading";

export default function Carousel() {
  const { dataVideos, dataCategories } = useContext(DataController)
  const natigation = useNavigation();
  console.log(natigation);

  return (
    <section>
      {natigation.state === "loading" && <Loading />}
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
    </section>
  )
}