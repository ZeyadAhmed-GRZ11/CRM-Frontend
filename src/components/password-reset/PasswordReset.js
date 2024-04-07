import React from 'react'
import './login.style.css'
import propTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from "react-bootstrap";


export const ResetPassword = ({handleOnchange, handleOnSubmit, formSwitcher, email}) => {
  return (
    <Container>
      <Row>
        <Col>

           <h1 className='text-info text-center'>Reset Password</h1>
           <hr />

        <Form autoComplete='off' onSubmit={handleOnSubmit}>
           <Form.Group>

              <Form.Label>Email-address:</Form.Label>
              <Form.Control 
                 type="email" 
                 placeholder="Enter E-mail" 
                 onChange={handleOnchange}
                 name="email"
                 value={email}
                 required
              />
           </Form.Group>

        <br/>
           <Button type="submit" onChange={handleOnSubmit}> Reset Password </Button>

        </Form>

        </Col>
      </Row>
        <hr/>
      <Row>
        <Col>
           <a href="#" className='text-info text-center'onClick={() => formSwitcher('login')}>Login Now</a>
        </Col>
      </Row>

    </Container>
  )
}
ResetPassword.propTypes = {
  handleOnchange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,
  email:propTypes.string.isRequired,
};
