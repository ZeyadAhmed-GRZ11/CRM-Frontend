import React from 'react';
import './App.css';

import { Entry } from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
// import { Dashboard } from './page/dashboard/Dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicketpage';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
          {/* <Dashboard /> */}
          <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
