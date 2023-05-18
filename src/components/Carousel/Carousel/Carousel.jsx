import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

export default function Carousel() {
  const [categories, setCategories] = useState([])
  const [videos, setVideos] = useState([])

  function getCategories() {
    fetch('https://json-server-favoriteflix.vercel.app/videocategories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error))
  }

  function getVideos() {
    fetch('https://json-server-favoriteflix.vercel.app/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getCategories()
    getVideos()

  }, [])
  console.log(videos)

  return (
    <section>
      {categories.map((category) => (
        < Slider
          key={category.id}
          category={category}
          videos={videos.filter(video => video.category === category.title ? video : null)}
        />
      ))}
    </section>
  )
}