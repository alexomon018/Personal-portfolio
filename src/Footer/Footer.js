import React from 'react'
import './Footer.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { useGlobalContext } from '../context'

function Footer() {
  const {
    data,
    savedData: {
      main: { social },
    },
  } = useGlobalContext()
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='footer__container'>
        <div className='footer__subscription'>
          <p className='footer__subscription__heading'>Leave your email!</p>
          <p className='footer__subscription__text'>
            Get too see the lastest projects that I worked on!
          </p>
          <div className='input__areas'>
            <form>
              <input
                className='footer__input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn__outline'>Subscribe</Button>
            </form>
          </div>
        </div>

        <div className='social__media'>
          <div className='social__media__wrap'>
            <div className='footer__logo'>
              <Link to='/' className='social__logo'>
                <MdDeveloperMode className='navbar__icon' />
                ALEKSA MITIC
              </Link>
            </div>
            <small className='website__rights'>ALEKSA MITIC © 2020</small>
            <div className='social__icons'>
              <a
                className='social__icon__link'
                href={`${social[0].url}`}
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook size='2em' />
              </a>
              <a
                className='social__icon__link'
                href={`${social[2].url}`}
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram size='2em' />
              </a>
              <a
                className='social__icon__link'
                href={`${social[3].url}`}
                target='_blank'
                aria-label='GitHub'
              >
                <FaGithub size='2em' />
              </a>
              <Link
                className='social__icon__link'
                href={`${social[1].url}`}
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin size='2em' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Footer
