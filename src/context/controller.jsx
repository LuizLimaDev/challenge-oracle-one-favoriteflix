import { createContext, useEffect, useState } from 'react';
import api from '../service/api';

const DataController = createContext({})

export function DataProvider({ children }) {
  const [dataVideos, setDataVideos] = useState([])
  const [dataCategories, setDataCategories] = useState([])
  const endpointVideos = '/videos'
  const endpointCategories = '/videocategories'

  useEffect(() => {
    fetchData()
    categoriesData()

  }, [endpointVideos, endpointCategories])

  async function fetchData() {
    try {
      const response = await api.get(endpointVideos)
      setDataVideos(response.data)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async function categoriesData() {
    try {
      const response = await api.get(endpointCategories)
      setDataCategories(response.data)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const postData = async (video) => {
    await api.post('/videos', video)
    fetchData()
  }

  return (
    <DataController.Provider value={{ dataVideos, dataCategories, setDataVideos, setDataCategories, postData }}>
      {children}
    </DataController.Provider>
  )
}


export default DataController
