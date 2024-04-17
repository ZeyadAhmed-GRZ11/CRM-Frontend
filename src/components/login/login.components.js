import React from 'react'
import './login.style.css'
import propTypes from 'prop-types';
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";


export const LoginForm = ({handleOnchange, handleOnSubmit, formSwitcher, email, password}) => {
  return (
    
  <div>

    <Container>
      <Row>
        <Col>

           <h1 className='text-danger text-center'>Client Login</h1>
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

           <Form.Group>

              <Form.Label>Password:</Form.Label>
              <Form.Control 
                 type="password" 
                 placeholder="Password" 
                 onChange={handleOnchange}
                 name="password"
                 value={password}
                 required
                 />
           </Form.Group>
        <br/>
           <Button type="submit" onChange={handleOnSubmit}> Login </Button>

        </Form>

        </Col>
      </Row>
        <hr/>
      <Row>
        <Col>
           <a href="#" className='text-info text-center'onClick={() => formSwitcher('reset')}>Forget Password?</a>
        </Col>
      </Row>

    </Container>
    </div>
  )
}
LoginForm.propTypes = {
  handleOnchange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,
  email:propTypes.string.isRequired,
  password:propTypes.string.isRequired,
};
