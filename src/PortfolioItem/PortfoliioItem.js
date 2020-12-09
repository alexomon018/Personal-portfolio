import React, { useState } from 'react'
import './PortfolioItem.css'
function PortfolioItem() {
  const [hover, setHover] = useState(true)
  const handleHover = () => {
    setHover(!hover)
  }
  const handleHoverOut = () => {
    setHover(!hover)
  }
  return (
    <div className='portfolio__item__wrapper'>
      <div
        style={
          hover
            ? {
                backgroundImage: `url('https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2014/03/programming-730x548.jpg')`,
              }
            : {
                backgroundImage: `url('https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2014/03/programming-730x548.jpg')`,
                transition: '1s',
                filter: 'brightness(20%)',
              }
        }
        className='portfolio__img__background'
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      >
        <div className='img__text__wrapper'>
          <div className='logo__wrapper'>
            <img src='' alt='' />
          </div>
          <div className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore
            perspiciatis rerum! Ipsam, magnam rem.
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
