import React from 'react'
import './Projects.css'
import { FaGithub } from 'react-icons/fa'
import { CgScreen } from 'react-icons/cg'
import { Button } from '../Button/Button'
function Project({ project }) {
  const { title, category, image, githubUrl, url } = project
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
        <a href={`${githubUrl}`}>
          <Button buttonSize='btn__link' buttonColor='red'>
            <FaGithub size='2em' />
            Github
          </Button>
        </a>
        {url ? (
          <a href={`${url}`}>
            <Button buttonSize='btn__link' buttonColor='red'>
              <CgScreen size='2em' />
              Live Site
            </Button>
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default Project
