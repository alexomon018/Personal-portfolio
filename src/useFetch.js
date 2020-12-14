import { useState, useEffect } from 'react'
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true)
  const savedData = JSON.parse(localStorage.getItem('data'))
  const [data, setData] = useState(savedData || [])

  const fetchMovies = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/resumeData.json')
      const resumeData = await response.json()
      if (resumeData) {
        setData(resumeData)
        localStorage.setItem('data', JSON.stringify(resumeData))
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])
  return {
    isLoading,
    data,
    savedData,
  }
}
export default useFetch
