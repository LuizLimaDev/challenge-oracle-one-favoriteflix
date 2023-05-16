import { useContext } from "react";
import Banner from "../components/Banner/Banner";
import DataController from "../context/controller";
import Carousel from "../components/Carousel/Carousel/Carousel";


export default function Home() {
  const { dataVideos } = useContext(DataController)
  console.log(dataVideos)

  return (
    <>
      <Banner />
      <Carousel />
    </>
  )
}