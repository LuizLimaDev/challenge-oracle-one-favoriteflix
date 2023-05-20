import { createContext, useEffect, useState } from 'react';
import api from '../service/api';

const DataController = createContext({})

export function DataProvider({ children }) {
  const [dataVideos, setDataVideos] = useState([])
  const [dataCategories, setDataCategories] = useState([])

  useEffect(() => {
    videoData()
    categoriesData()
  }, [])

  async function videoData() {
    try {
      const response = await api.get('/videos')
      setDataVideos(response.data)
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

  const postData = async (video) => {
    try {
      await api.post('/videos', video)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteData = async (id) => {
    try {
      await api.delete(`/videos/${id}`)
      videoData()
    } catch (error) {
      console.log(error)
    }
  }

  const postCategory = async (category) => {
    try {
      await api.post('/videocategories', category)
      categoriesData()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteCategory = async (id) => {
    try {
      await api.delete(`/videocategories/${id}`)
      categoriesData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DataController.Provider value={{
      dataVideos,
      dataCategories,
      videoData,
      categoriesData,
      postData,
      deleteData,
      postCategory,
      deleteCategory
    }}>
      {children}
    </DataController.Provider>
  )
}

export default DataController
