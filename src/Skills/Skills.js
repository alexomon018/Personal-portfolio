import React from 'react'
import './Skills.css'
import { useGlobalContext } from '../context'
function Skills() {
  const { savedData } = useGlobalContext()
  return (
    <section className='section__skills'>
      <div className='section__title'>
        <h2>Skills</h2>
        <div className='underline'></div>
      </div>

      <div className='section__center skills__center'>
        <article>
          <h3>Front End</h3>

          <div className='skill'>
            <p>HTML/CSS</p>
            <div className='skill__container'>
              <div className='skill__value'></div>
              <p className='skill__text'>50%</p>
            </div>
          </div>

          <div className='skill'>
            <p>Javascript</p>
            <div className='skill__container'>
              <div className='skill__value value__70'></div>
              <p className='skill__text skill__text__70'>70%</p>
            </div>
          </div>

          <div className='skill'>
            <p>React</p>
            <div className='skill__container'>
              <div className='skill__value value__80'></div>
              <p className='skill__text skill__text__80'>80%</p>
            </div>
          </div>
        </article>
        <article>
          <h3>Back End</h3>

          <div className='skill'>
            <p>Node</p>
            <div className='skill__container'>
              <div className='skill__value'></div>
              <p className='skill__text'>50%</p>
            </div>
          </div>

          <div className='skill'>
            <p>PHP</p>
            <div className='skill__container'>
              <div className='skill__value value__70'></div>
              <p className='skill__text skill__text__70'>70%</p>
            </div>
          </div>

          <div className='skill'>
            <p>Python</p>
            <div className='skill__container'>
              <div className='skill__value value__80'></div>
              <p className='skill__text skill__text__80'>80%</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills
