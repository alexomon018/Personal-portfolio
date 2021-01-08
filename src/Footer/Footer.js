import React from 'react'
import './Footer.css'
import { IconContext } from 'react-icons/lib'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='footer__container'>
        <div className='social__media'>
          <div className='social__media__wrap'>
            <small className='website__rights'>
              ALEKSA MITIC © {new Date().getFullYear()}
            </small>
            <div className='social__icons'>
              <a
                className='social__icon__link'
                href='https://www.facebook.com/alexa.mitic/'
                target='_blank'
                aria-label='Facebook'
                rel='noreferrer'
              >
                <FaFacebook size='2em' />
              </a>
              <a
                className='social__icon__link'
                href='https://www.instagram.com/mitic_aleksa/'
                target='_blank'
                aria-label='Instagram'
                rel='noreferrer'
              >
                <FaInstagram size='2em' />
              </a>
              <a
                className='social__icon__link'
                href='https://github.com/alexomon018'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
              >
                <FaGithub size='2em' />
              </a>
              <a
                className='social__icon__link'
                href='https://www.linkedin.com/in/aleksa-miticw/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin size='2em' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Footer
