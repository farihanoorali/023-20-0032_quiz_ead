import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img1 from '../assets/images/Rectangle2.png'
import img2 from '../assets/images/Rectangle3.png'
import img3 from '../assets/images/Rectangle4.png'
import img4 from '../assets/images/Rectangle5.png'
import img5 from '../assets/images/Rectangle6.png'
import img6 from '../assets/images/Rectangle7.png'

export const Offerings = () => {
  return (
    <>
      <div
        className={' offering-section text-white'}
        style={{ backgroundColor: '#464343' }}
      >
        <h1 className='container-row text-heading text-start col-sm-12 col-lg-6 col-md-12'>
          Our offerings
        </h1>
        <div className='row'>
          <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem', background: '#464343' }}>
              <Card.Img variant='top' src={img1} />
              <Card.Body>
                <Card.Title>
                  <div className='text text-white'>
                    Barfi <br />
                    Rs900/-
                  </div>
                </Card.Title>
                <Button variant='light'>Order now</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem', background: '#464343' }}>
              <Card.Img variant='top' src={img2} />
              <Card.Body>
                <Card.Title>
                  <div className='text text-white'>
                    Barfi <br />
                    Rs900/-
                  </div>
                </Card.Title>
                <Button variant='light'>Order now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem', background: '#464343' }}>
              <Card.Img variant='top' src={img3} />
              <Card.Body>
                <Card.Title>
                  <div className='text text-white'>
                    Barfi <br />
                    Rs900/-
                  </div>
                </Card.Title>
                <Button variant='light'>Order now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem', background: '#464343' }}>
              <Card.Img variant='top' src={img4} />
              <Card.Body>
                <Card.Title>
                  <div className='text text-white'>
                    Barfi <br />
                    Rs900/-
                  </div>
                </Card.Title>
                <Button variant='light'>Order now</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem', background: '#464343' }}>
              <Card.Img variant='top' src={img5} />
              <Card.Body>
                <Card.Title>
                  <div className='text text-white'>
                    Barfi <br />
                    Rs900/-
                  </div>
                </Card.Title>
                <Button variant='light'>Order now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem', background: '#464343' }}>
              <Card.Img variant='top' src={img6} />
              <Card.Body>
                <Card.Title>
                  <div className='text text-white'>
                    Barfi <br />
                    Rs900/-
                  </div>
                </Card.Title>
                <Button variant='light'>Order now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
