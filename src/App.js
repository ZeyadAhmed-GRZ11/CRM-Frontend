import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';

import { Entry } from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';

import { AddTicket } from './page/new-ticket/AddTicketpage';
import { TicketLists } from './page/ticket-list/TicketLists.page';
import { Ticket } from './page/ticket/Ticket.page';
import { QaHelp } from './page/QAhelp/QaHelp';
// import { UpdateTicket } from './components/Update-Ticket/UpdateTicket.comp';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>

        <Route path = "/" element = {<Entry/> } /> 

      {/* <DefaultLayout> */}

        <Route path='/defaultLayout' element={ <DefaultLayout/> }/>   
        <Route path='/dashboard' element={<Dashboard/>}/>   
        <Route path='/add-ticket' element={<AddTicket/>}/>   
        <Route path='/tickets' element={<TicketLists/>}/>   
        <Route path='/ticket/:tid' element={ <Ticket/>}/>   
        <Route path='/QaHelp' element={ <QaHelp/>}/>   
      
        
      </Routes>
     </Router>
    </div>
  );
}

export default App;
