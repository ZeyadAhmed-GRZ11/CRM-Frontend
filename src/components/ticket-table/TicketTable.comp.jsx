import React from 'react'
import {Table} from "react-bootstrap";
import PropTypes from "prop-types";


export const TicketTable = ({ tickets }) => {

   if(!tickets.length)

  return (
     <Table striped  hover>

      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      
      <tbody>

         {tickets.length ? (
            tickets.map((row) => (
        <tr key = {row.id}>
            <td>{row.id}</td>
             <td>{row.subject}</td>
              <td>{row.status}</td>
               <td>{row.addedAt}</td>
        </tr>
        ))

      ) : (

         <tr>
           <td>No Ticket To Show</td>
         </tr>    

      )}
        
      </tbody>
     </Table>
  );
};

TicketTable.prototype = {
    tickets: PropTypes.array.isRequired,
};