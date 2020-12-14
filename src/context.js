import React, { useContext } from 'react'
import useFetch from './useFetch'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const { isLoading, data, savedData } = useFetch()

  return (
    <AppContext.Provider
      value={{
        isLoading,
        data,
        savedData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
