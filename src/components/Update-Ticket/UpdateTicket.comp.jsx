import React from 'react'
import { Form, Button } from 'react-bootstrap';
import propTypes from "prop-types";
import { MessageHistory } from '../../components/messege-history/MessageHistory.comp';

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {

  return (

    <Form onSubmit={handleOnSubmit}>
          <Form.Label>Reply : </Form.Label>
          <Form.Text> please replay your message here or update the ticket</Form.Text>
          <Form.Control
           value={msg}
           onChange={handleOnChange}
           as = "textarea"
           rows = "5"
           name ="detail"
          />

    <div className="text-right mt-4">
       <Button variant='info' type="submit">
          Reply
       </Button>
    </div>
     
    </Form>
  )
};

MessageHistory.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  msg: propTypes.string.isRequired,
}
