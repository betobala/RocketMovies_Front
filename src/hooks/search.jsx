import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const SearchContext = createContext({})

function SearchProvider({ children }) {
  const [movies, setMovies] = useState([])

  async function fetchMovies(search){
        const response = await api.get(`/movies?title=${search}`)
        setMovies(response.data)
        
    }

  return(
    <SearchContext.Provider value={{ 
      movies,
      fetchMovies
      }}>
      {children}
    </SearchContext.Provider>
  )
}

function useSearch(){
  const context = useContext(SearchContext)
  
  return context
}

export { SearchProvider, useSearch }