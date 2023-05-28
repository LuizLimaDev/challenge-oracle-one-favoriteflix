import { createContext, useEffect, useState } from 'react';
import api from '../service/api';

const DataController = createContext({})

export function DataProvider({ children }) {
  const [dataVideos, setDataVideos] = useState([])
  const [dataCategories, setDataCategories] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    videoData()
    categoriesData()
  }, [])

  async function videoData() {
    try {
      const response = await api.get('/videos')
      setDataVideos(response.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  async function categoriesData() {
    try {
      const response = await api.get('/videocategories')
      setDataCategories(response.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  const postVideo = async (video) => {
    try {
      await api.post('/videos', video)
      videoData()
    } catch (error) {
      setError(error)
    }
  }

  const deleteVideo = async (id) => {
    try {
      await api.delete(`/videos/${id}`)
      videoData()
    } catch (error) {
      setError(error)
    }
  }

  const postCategory = async (category) => {
    try {
      await api.post('/videocategories', category)
      categoriesData()
    } catch (error) {
      setError(error)
    }
  }

  const deleteCategory = async (id) => {
    try {
      await api.delete(`/videocategories/${id}`)
      categoriesData()
    } catch (error) {
      setError(error)
    }
  }

  const uptateCategory = async (id, data) => {
    try {
      await api.put(`/videocategories/${id}`, data)
      categoriesData()
    } catch (error) {
      setError(error)
    }
  }

  const updateVideo = async (id, data) => {
    try {
      await api.put(`/videos/${id}`, data)
      videoData()
    } catch (error) {
      setError(error)
    }
  }

  return (
    <DataController.Provider value={{
      dataVideos,
      dataCategories,
      error,
      isLoading,
      videoData,
      categoriesData,
      postVideo,
      deleteVideo,
      updateVideo,
      postCategory,
      deleteCategory,
      uptateCategory
    }}>
      {children}
    </DataController.Provider>
  )
}

export default DataController
