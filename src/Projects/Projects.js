import React from 'react'
import './Projects.css'
import Project from './Project'
import Meta from '../Meta/Meta'
import { homeMetaObj } from '../data'
import { useGlobalContext } from '../context'
function Projects(props) {
  const {
    savedData: {
      portfolio: { projects },
    },
  } = useGlobalContext()
  return (
    <>
      <Meta
        title='Aleksa Mitic - Projcets'
        description='Hey, this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me!'
        imageUrl={homeMetaObj.metaImg}
        imageAlt={homeMetaObj.imageAlt}
      />
      <section className='section__projects'>
        <div className='section__projects__title'>
          <h2>Projects</h2>
          <div className='underline'></div>
        </div>
        <div className='section__center projects__center'>
          {projects.map((project) => (
            <Project key={`${props.id}_${project.title}`} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
