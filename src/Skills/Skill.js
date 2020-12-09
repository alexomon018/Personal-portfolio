import React from 'react'
import './Skills.css'
function Skill({ skill }) {
  console.log(skill)
  return (
    <div className='skill'>
      <p>{skill.name}</p>
      <div className='skill__container'>
        <div
          className={`skill__value value__${skill.level.slice(0, -1)}`}
        ></div>
        <p className={`skill__text skill__text__${skill.level.slice(0, -1)}`}>
          {skill.level}
        </p>
      </div>
    </div>
  )
}

export default Skill
