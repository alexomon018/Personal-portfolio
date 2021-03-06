import React from 'react'
import './HeroSection.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  imgStart,
  img,
  description,
  backgroundImg,
  buttonLink,
  headline,
  buttonLabel,
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        style={{
          backgroundImage: `${
            description[0] === 'W'
              ? `linear-gradient(to left,rgb(28 34 55/ 40%),rgb(140,140,140)),url('${backgroundImg}')`
              : `url('${backgroundImg}')`
          }`,
        }}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>

                {buttonLink.includes('cv') ? (
                  <a href={`${buttonLink}`}>
                    <Button
                      buttonSize='btn__wide'
                      buttonColor='blue'
                      buttonStyle='btn__primary'
                    >
                      {buttonLabel}
                    </Button>
                  </a>
                ) : (
                  <Link to={`${buttonLink}`}>
                    <Button buttonSize='btn__wide' buttonColor='blue'>
                      {buttonLabel}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img
                  src={img}
                  alt=''
                  className='home__hero-img'
                  style={
                    img === '/images/aleksa.jpg'
                      ? { borderRadius: '50%' }
                      : null
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
