import React , { useEffect , useState}from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { Link } from 'react-router-dom';
import { url } from '../../utils/axios';


export const Dashboard = () => {
  const [data , setData] = useState([])
  // useEffect(async () => {
  //   const data = await url('http://localhost:3000/14')
  //  setData(data)
  // })
// 
  useEffect(async () => {
   const data = await url('http://localhost:3000/data')
   setData(data)
  } , [])
  return (
    <div>
     <Container>
      <Row>
        <Col>
          <PageBreadcrumb page = "Dashboard"/>
        </Col>
      </Row>
       <Row>
         <Col className='text-center mt-5 mb-2'>

         <Link to="/add-ticket">
           <Button variant='info'
             style={{'fontSize':'2rem','padding':'10px 30px' }}>
              Add New Ticket
           </Button>
           </Link>

         </Col>
       </Row>

       <Row>
         <Col className='text-center mb-2'>
           
           <div>Total Tickets: 50</div>
           <div>pending Tickets: 5</div>
            
         </Col>
       </Row>

       <Row>
         <Col className='mt-2'>
            <div>Recently Added Tickets:</div>  
         </Col>
       </Row>
    <hr />
       <Row>
         <Col className='recent-ticket'>
            <TicketTable tickets={data}/>
         </Col>
       </Row>
    

     </Container>
    </div>
  )
}
