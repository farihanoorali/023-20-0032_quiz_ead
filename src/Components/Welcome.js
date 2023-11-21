import React from 'react'
import myImage from '../assets/images/mainImage.png'

export const Welcome = () => {
  return (
    <>
      <div
        style={{ backgroundColor: '#464343' }}
        className={'projects-section text-white'}
      >
        <div className='row'>
          <div className='container col-sm-12 col-md-12 col-lg-6'>
            <p className='text-subheading text-start text-white'>
              Indulge in a symphony of flavors at our artisanal bakery. Welcome
              to a world where the aroma of freshly baked wonders captivates
              your senses. Our master bakers craft each creation with passion,
              using only the finest ingredients to ensure every bite is pure
              delight.
              <br />
              <br />
              From flaky croissants to decadent cakes, experience the epitome of
              taste and craftsmanship. Whether it's a special occasion or a
              craving for the extraordinary, our bakery offers a haven for your
              palate. Elevate your moments with the magic of our oven-fresh
              delights. Your journey to exceptional taste begins here.
            </p>
          </div>
          <div className='container col-sm-12 col-md-12 col-lg-6'>
            <img src={myImage} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}
