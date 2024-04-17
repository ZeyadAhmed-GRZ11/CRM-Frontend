import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
// import { DebounceInput } from 'react-debounce-input';
import PropTypes from "prop-types"
// import { useSearchParams } from 'react-router-dom';



export const SearchForm = ({handleOnChange, str}) => {

  //  const [state, setState] = useState('')
  //  const[searchParams, setSearchParams] =useSearchParams()
   
    console.log(str);

  return (
    <div>

       <Form>
         <Form.Group as = {Row}>
            <Form.Label column sm={3}> 
                 Search:{""}
            </Form.Label>
            <Col sm="9">
               <Form.Control name="search"
               onChange={handleOnChange}
               value= {str}
               placeholder= "Search...."/>
            </Col>
         </Form.Group>
       </Form>
       
        {/* <label>Search:</label>
       <DebounceInput minLength={2} debounceTimeout={300} onChange={(e) => {
         setState(e.target.value)
         setTimeout(() => {
         setSearchParams({q: e.target.value})
         } , 300)
       
       }}/> */}
           
      
      

        
    </div>
  )
}

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
};
