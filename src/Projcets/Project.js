import React from 'react'
import './Projects.css'
import { useGlobalContext } from '../context'
function Project({ project }) {
  const {
    savedData: { main },
  } = useGlobalContext()
  const { title, category, image, url } = project
  return (
    <div className='card'>
      <div className='card__side card__front'>
        <img src={image} alt={title} />
        <div className='card__info'>
          <h4>{title}</h4>
          <p>{category}</p>
          <div className='card__footer'>
            <img src={main.image} alt='author image' />
            <p>7 min read</p>
          </div>
        </div>
      </div>

      <div className='card__side card__back'>
        <a href={url} className='btn'>
          {' '}
          Look Up
        </a>
      </div>
    </div>
  )
}

export default Project
