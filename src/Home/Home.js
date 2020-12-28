import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Meta from '../Meta/Meta'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeMetaObj,
} from '../data'

function Home() {
  return (
    <>
      <Meta
        title='Aleksa Mitic Portfolio - Home'
        description='Hey, this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me! '
        imageUrl={homeMetaObj.metaImg}
        imageAlt={homeMetaObj.imageAlt}
      />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home
