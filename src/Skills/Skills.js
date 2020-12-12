import React from 'react'
import './Skills.css'
import { useGlobalContext } from '../context'
import { DiReact } from 'react-icons/di'
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiCsharp,
  SiMongodb,
  SiMysql,
} from 'react-icons/si'
import Skill from './Skill'
function Skills() {
  const {
    savedData: {
      resume: { skills },
    },
  } = useGlobalContext()

  return (
    <section className='section__skills'>
      <div className='section__title'>
        <h2>Skills</h2>
        <div className='underline'></div>
        <p>
          I'm a tinkerer and am always interested in playing around with new
          technologies but these are the ones that have really won me over.
        </p>
        <div className='section__title__icons'>
          <SiHtml5 size='2em' color='red' />
          <SiCss3 size='2em' color='blue' />
          <SiJavascript size='2em' color='yellow' />
          <DiReact size='2em' color='blue' />
          <SiCsharp size='2em' color='blue' />
          <SiMongodb size='2em' color='green' />
          <SiMysql size='2em' color='white' />
        </div>
      </div>

      <div className='section__center skills__center'>
        <article>
          <h3>Front End</h3>

          {skills
            .filter((skill) => skill.category === 'Front')
            .map((skill) => (
              <Skill key={skill.name} skill={skill} />
            ))}
        </article>
        <article>
          <h3>Back End</h3>
          {skills
            .filter((skill) => skill.category === 'Back')
            .map((skill) => (
              <Skill key={skill.name} skill={skill} />
            ))}
        </article>
      </div>
    </section>
  )
}

export default Skills
