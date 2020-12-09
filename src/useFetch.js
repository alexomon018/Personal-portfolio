import { useState, useEffect } from 'react'
const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const savedData = JSON.parse(localStorage.getItem('data'))
  const [data, setData] = useState(savedData || [])

  const fetchMovies = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/resumeData.json')
      const resumeData = await response.json()
      if (data) {
        setData(resumeData)
        localStorage.setItem('data', JSON.stringify(resumeData))
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
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
    error,
    data,
    savedData,
  }
}
export default useFetch
