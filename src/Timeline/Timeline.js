import React from 'react'
import './Timeline.css'
import { useGlobalContext } from '../context'
function Timline() {
  const {
    savedData: {
      resume: { education, work },
    },
  } = useGlobalContext()

  return (
    <section class='section__timeline'>
      <div class='section__title__timeline'>
        <h2>timeline</h2>
        <div class='underline'></div>
      </div>
      <div class='section__center timeline__center'>
        <article class='timeline__item'>
          <h4>2020</h4>
          <h3>{education[0].degree}</h3>
          <p>{education[0].description}</p>
          <h5>{education[0].school}</h5>
          <span class='number'>6</span>
        </article>

        <article class='timeline__item'>
          <h4>2019</h4>
          <h3>{education[1].degree}</h3>
          <p>{education[1].description}</p>
          <h5>{education[1].school}</h5>
          <span class='number'>5</span>
        </article>

        <article class='timeline__item'>
          <h4>2019</h4>
          <h3>{work[1].title}</h3>
          <p>{work[1].description}</p>
          <h5>{work[1].company}</h5>
          <span class='number'>4</span>
        </article>
        <article class='timeline__item'>
          <h4>2019</h4>
          <h3>{education[2].degree}</h3>
          <p>{education[2].description}</p>
          <h5>{education[2].school}</h5>
          <span class='number'>3</span>
        </article>

        <article class='timeline__item'>
          <h4>2017</h4>
          <h3>{work[2].title}</h3>
          <p>{work[2].description}</p>
          <h5>{work[2].company}</h5>
          <span class='number'>2</span>
        </article>

        <article class='timeline__item'>
          <h4>2016</h4>
          <h3>{work[3].title}</h3>
          <p>{work[3].description}</p>
          <h5>{work[3].company}</h5>
          <span class='number'>1</span>
        </article>
      </div>
    </section>
  )
}

export default Timline
