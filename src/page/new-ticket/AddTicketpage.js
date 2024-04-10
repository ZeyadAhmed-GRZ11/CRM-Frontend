import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm';
// import { shortText } from '../../utils/validation';

export const AddTicket= () => {

  const initialFrmDt = {
   subject: "",
   issueDate: "",
   details: "",
  };
  const initialFrmDtError = {
   subject: false,
   issueDate:false,
   details: false,
  };

  const [frmData, setFrmData] = useState( initialFrmDt );
  const [frmDataError, setFrmDataError] = useState( initialFrmDtError );

   useEffect(() => {},[frmData, frmDataError]);
   
   const handleOnChange = e => {
    const {name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
      console.log(name, value);
   };

  
   function shortText(str) {
      return str.length >= 3 && str.length <= 100;
      }

  const handleOnSubmit = async (e) => {
      e.preventDefault();
      setFrmDataError(initialFrmDtError);
      const isSubjectValid = await shortText(frmData.subject);
      setFrmDataError({
        ...initialFrmDtError,
        subject : !isSubjectValid,
      });
      console.log("Form is submit request received", frmData)
  }


  return (
    <div>
        <Container>
          <Row>
            <Col>

               <PageBreadcrumb page = "New Ticket"/>

            </Col>
          </Row>
          <Row>
            <Col>

               <AddTicketForm handleOnChange= {handleOnChange}
                              handleOnSubmit= {handleOnSubmit}
                              frmDataError= {frmDataError}
                              frmDt= {frmData}/>

            </Col>
          </Row>
        </Container>
        

    </div>
  )
}
