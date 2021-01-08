import React from 'react'
import './Skills.css'
import { DiReact } from 'react-icons/di'
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiCsharp,
  SiMongodb,
  SiMysql,
} from 'react-icons/si'
function Skills() {
  return (
    <section className='section__skills'>
      <div className='section__title'>
        <h2>Skills</h2>
        <div className='underline'></div>
        <p>
          I'm a tinkerer and am always interested in playing around with new
          technologies but these are the ones that have really won me over.
        </p>
      </div>

      <div className='section__center skills__center'>
        <article className='section__icons'>
          <h3>Front End</h3>
          <div className='section__title__icons'>
            <SiHtml5 size='4rem' color='red' />
            <SiCss3 size='4em' color='blue' />
            <SiJavascript size='4em' color='yellow' />
            <DiReact size='4em' color='blue' />
          </div>
        </article>
        <article>
          <h3>Back End</h3>
          <div className='section__title__icons'>
            <SiCsharp size='4em' color='blue' />
            <SiMongodb size='4em' color='green' />
            <SiMysql size='4em' color='white' />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills
