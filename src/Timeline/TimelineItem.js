import React from 'react'
import './Timeline.css'
function TimelineItem({ expItem }) {
  return (
    <article className='timeline__item'>
      <h4>{expItem.graduated || expItem.years}</h4>
      <h3>{expItem.degree || expItem.company}</h3>
      <p>{expItem.description}</p>
      <h5>{expItem.school || expItem.title}</h5>
      <span className='number'>3</span>
    </article>
  )
}

export default TimelineItem
