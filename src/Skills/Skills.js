import React from 'react'
import './Skills.css'
import { useGlobalContext } from '../context'
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
