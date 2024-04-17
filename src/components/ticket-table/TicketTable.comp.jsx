import React from 'react'
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';



export const TicketTable = ({ tickets }) => {

  if(tickets.length > 0) {
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
       {
        tickets.map((e ,i) => {
           return <tr key={i}>
              <td>{e.id}</td>
              <Link to="/ticket/:tid">
                 <td>{e.subject}</td>
              </Link>
              <td>{e.status}</td>
              <td>{e.addedAt}</td>
           </tr>
         })
       }
         
       </tbody>
      </Table>
   );
  } else {
    return <div>No Ticket to show</div>
  }
  
};
