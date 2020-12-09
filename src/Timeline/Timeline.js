import React from 'react'
import './Timeline.css'
import { useGlobalContext } from '../context'
import TimelineItem from './TimelineItem'
function Timline(props) {
  const {
    savedData: {
      resume: { education, work },
    },
  } = useGlobalContext()
  const experience = [...education, ...work]
  console.log(experience)
  return (
    <section className='section__timeline'>
      <div className='section__title__timeline'>
        <h2>timeline</h2>
        <div className='underline'></div>
      </div>
      <div className='section__center timeline__center'>
        {experience.map((expItem) => (
          <TimelineItem
            key={`${props.id}_${expItem.description}`}
            expItem={expItem}
          />
        ))}
      </div>
    </section>
  )
}

export default Timline
