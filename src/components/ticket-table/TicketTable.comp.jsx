import React from 'react'
import {Table} from "react-bootstrap";

export const TicketTable = ({tickets}) => {
  return (
    <div>
     <Table striped borderd hover>

      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      
      <tbody>
         {tickets.length && 
            tickets.map((row,i) => (
        <tr>
          <td>{row.id}</td>
          <td>{row.subject}</td>
          <td>{row.status}</td>
          <td>{row.addedAt}</td>
        </tr>
        ))}
        <tr>
          <td>2</td>
          <td>cpu issue</td>
          <td>client response pending</td>
          <td>2020-11-13</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ram issue</td>
          <td>client response pending</td>
          <td>2020-11-14</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Processor issue</td>
          <td>client response pending</td>
          <td>2020-11-15</td>
        </tr>
      </tbody>

     </Table>
    </div>
  )
}
