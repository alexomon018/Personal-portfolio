import React from 'react'
import './Contact.css'
import Meta from '../Meta/Meta'
import { Button } from '../Button/Button'
import { useGlobalContext } from '../context'
import { homeMetaObj } from '../data'
function Contact() {
  const {
    savedData: { main },
  } = useGlobalContext()
  return (
    <>
      <Meta
        title='Aleksa Mitic - Contact'
        description='Hey, this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me!'
        imageUrl={homeMetaObj.metaImg}
        imageAlt={homeMetaObj.imageAlt}
      />
      <section className='contact'>
        <video controls autoPlay muted loop className='video__container'>
          <source src='/videos/contact.mp4' type='video/mp4' />
          Sorry, your browser does not support embedded videos
        </video>
        <div className='video__banner'>
          <div className='section__title'>
            <h2>let's get in touch</h2>
            <div className='underline'></div>
          </div>

          <h4>Address and Phone</h4>
          <p className='video__text'>
            {main.name}
            <br />
            {main.address.street} <br />
            {main.address.city}, {main.address.state} {main.address.zip}
            <br />
            <span>{main.phone}</span>
          </p>
          <a href='mailto:aleksa.mitic5859@gmail.com'>
            <Button buttonSize='btn__mobile' buttonColor='red'>
              Email Me
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact
