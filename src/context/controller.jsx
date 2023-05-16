import { createContext, useEffect, useState } from 'react';
import api from '../service/api';

const DataController = createContext({})

export function DataProvider({ children }) {
  const [dataVideos, setDataVideos] = useState([])
  const endpointVideos = '/videos'


  useEffect(() => {
    async function fetchData() {
      const response = await api.get(endpointVideos)
      setDataVideos(response.data)
      return response
    }

    fetchData()
      .catch(console.error)

  }, [endpointVideos])


  return (
    <DataController.Provider value={{ dataVideos }}>
      {children}
    </DataController.Provider>
  )
}

export default DataController
