import React from 'react'
import './About.css'
import Meta from '../Meta/Meta'
import { useGlobalContext } from '../context'
import Skills from '../Skills/Skills'
import Timeline from '../Timeline/Timeline'
import { homeMetaObj } from '../data'
function About() {
  const {
    savedData: { main },
  } = useGlobalContext()
  return (
    <>
      <Meta
        title='Aleksa Mitic - About'
        description='Hey, this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me!'
        imageUrl={homeMetaObj.metaImg}
        imageAlt={homeMetaObj.imageAlt}
      />
      <section className='section__about'>
        <div className='section__center about__center'>
          <article className='about__img'>
            <img
              src={main.image}
              className='hero__photo'
              alt='Aleksa Mitic about img'
            />
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
