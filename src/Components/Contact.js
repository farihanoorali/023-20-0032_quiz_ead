import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>

      <Form>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label></Form.Label>
            <Form.Control placeholder='Full Name' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label></Form.Label>
            <Form.Control placeholder='Phone' />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label></Form.Label>
            <Form.Control placeholder='Address' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label></Form.Label>
            <Form.Control type='password' placeholder='Email' />
          </Form.Group>
        </Row>

        <div class='form-group'>
          <label for='exampleFormControlTextarea1'></label>
          <textarea
            class='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
          ></textarea>
        </div>
        <Button variant='success' type='submit' className='btn-lg '>
          Submit
        </Button>
      </Form>
    </>
  )
}
