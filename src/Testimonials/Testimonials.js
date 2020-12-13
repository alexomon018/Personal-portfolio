import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import './Testimonials.css'
import { useGlobalContext } from '../context'
function Testimonials(props) {
  const {
    savedData: { testimonials },
  } = useGlobalContext()

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = testimonials.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [testimonials, index])
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1)
    }, 4000)

    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className='section__testimonials'>
      <div className='section__testimonials__title'>
        <h2>
          <span>/</span>Testimonials
        </h2>
      </div>
      <div className='section__testimonials__center'>
        {testimonials.map((person, personIndex) => {
          const { image, name, title, qoute } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === testimonials.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article
              className={`testimonial__article ${position}`}
              key={`${props.id}__${name}`}
            >
              <img src={image} alt={name} className='person__img' />
              <h4 className='article__name'>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{qoute}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button
          className='prev'
          onClick={() => setIndex((prevIndex) => prevIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => setIndex((prevIndex) => prevIndex + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
