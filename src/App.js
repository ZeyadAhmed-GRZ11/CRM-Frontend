import React from 'react';
import './App.css';

import { Entry } from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
// import { Dashboard } from './page/dashboard/Dashboard.page';
// import { AddTicket } from './page/new-ticket/AddTicketpage';
import { TicketLists } from './page/ticket-list/TicketLists.page';
import { Ticket } from './page/ticket/Ticket.page';
import { UpdateTicket } from './components/Update-Ticket/UpdateTicket.comp';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
          {/* <Dashboard /> */}
          {/* <AddTicket /> */}
          {/* <TicketLists/> */}
          <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
