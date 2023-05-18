import { createContext, useEffect, useState } from 'react';
import api from '../service/api';

const DataController = createContext({})

export function DataProvider({ children }) {
  const [dataVideos, setDataVideos] = useState([])
  const [dataCategories, setDataCategories] = useState([])

  useEffect(() => {
    videosData()
    categoriesData()

  }, [])

  async function videosData() {
    try {
      const response = await api.get('/videos')
      setDataVideos(response.data)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async function categoriesData() {
    try {
      const response = await api.get('/videocategories')
      setDataCategories(response.data)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const postDataVideo = async (video) => {
    try {
      await api.post('/videos', video)
      videosData()
    } catch (error) {
      console.log(error)
    }
  }

  const postDataCategory = async (category) => {
    try {
      await api.post('/videocategories', category)
      categoriesData()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteDataVideo = async (id) => {
    try {
      await api.delete(`/videos/${id}`)
      videosData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DataController.Provider value={{
      dataVideos,
      dataCategories,
      setDataVideos,
      setDataCategories,
      postDataVideo,
      postDataCategory,
      deleteDataVideo
    }}>
      {children}
    </DataController.Provider>
  )
}


export default DataController
