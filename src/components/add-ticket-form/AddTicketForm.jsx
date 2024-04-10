import React from 'react'
import {Breadcrumb} from "react-bootstrap";
import {Card, Form, Button, Row, Col} from "react-bootstrap";
import propTypes from 'prop-types';
import './Add.style.css';



export const AddTicketForm = ({
   handleOnSubmit,
    handleOnChange,
     frmDt,
      frmDataError

   }) => {
  
   console.log(frmDt);

  return (
   
   <div>

    <Card className='mt-3 add-new-ticket bg-light'>

  <br/>
    <h1 className='text-info text-center'>Add New Ticket</h1>

   <hr/>

        <Form autoComplete='off' 
        onSubmit={handleOnSubmit}
        >
           <Form.Group as={Row}>

              <Form.Label column sm ={3}>Subject :</Form.Label>
              <Col sm ={9}>
              <Form.Control 
                 placeholder="Subject"
                 minLength="3"
                 maxLength="100"
                 onChange={handleOnChange}
                 name="subject"
                 value ={frmDt.subject} //-> .subject
                 required
              />

              <Form.Text className="text-danger">
                 {frmDataError.subject && "subject is required"}
              </Form.Text>

              </Col>

           </Form.Group>
       <br/>
           <Form.Group as ={Row}>

              <Form.Label column sm={3}>Issue Found :</Form.Label>
            <Col sm ={9}>

              <Form.Control 
                 type="date" 
                 onChange={handleOnChange}
                 name="issueDate"
                 value ={frmDt.issueDate} //-> .date
                 required
                 />

            </Col>

           </Form.Group>

       <br/>

           <Form.Group as ={Row}>

              <Form.Label column sm ={3}>Details :</Form.Label>

             <Col sm ={9}>
              <Form.Control 
                 as="textarea" 
                 onChange={handleOnChange}
                 name="details"
                 rows ="s"
                 value ={frmDt.details} //-> .detail
                 required
                 />
             </Col>
           </Form.Group>

        <br/>

          <Button type="submit" variant = "info"  block="true"
           onChange={handleOnSubmit}
           > Add New Ticket </Button>
          

        </Form>
    </Card>
    

    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit:propTypes.func.isRequired,
  handleOnChange:propTypes.func.isRequired,
  frmDt:propTypes.object.isRequired,
  frmDataError:propTypes.object.isRequired,
};
