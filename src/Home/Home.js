import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Meta from '../Meta/Meta'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../data'
function Home() {
  return (
    <>
      <Meta />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home
