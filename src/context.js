import React, { useContext, useState } from 'react'

const AppContext = React.createContext()
import { initialCarousel } from './data.js'

const AppProvider = ({ children }) => {
  const [carousel, setCorousel] = useState(initialCarousel)

  return (
    <AppContext.Provider value={{ carousel, setCorousel }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
