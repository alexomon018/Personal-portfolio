import React from 'react'
import './About.css'
import { useGlobalContext } from '../context'
import Skills from '../Skills/Skills'
import Timeline from '../Timeline/Timeline'
function About() {
  const {
    savedData: { main },
  } = useGlobalContext()
  return (
    <>
      <section className='section__about'>
        <div className='section__center about__center'>
          <article className='about__img'>
            <img src={main.image} className='hero__photo' alt='about img' />
          </article>

          <article className='about__info'>
            <div className='section__title about__title'>
              <h2>About</h2>
              <div className='underline'></div>
            </div>
            <p>{main.bio}</p>
          </article>
        </div>
      </section>
      <Skills />
      <Timeline />
    </>
  )
}

export default About
