import React from 'react'
import './Projects.css'
import { FaGithub } from 'react-icons/fa'
import { Button } from '../Button/Button'
function Project({ project }) {
  const { title, category, image, url } = project
  return (
    <div className='card'>
      <div className='card__side card__front'>
        <img src={image} alt={title} />
        <div className='card__info'>
          <h4>{title}</h4>
          <p>{category}</p>
        </div>
      </div>

      <div className='card__side card__back'>
        <a href={`${url}`}>
          <Button buttonSize='btn__link' buttonColor='red'>
            <FaGithub size='2em' />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Project
