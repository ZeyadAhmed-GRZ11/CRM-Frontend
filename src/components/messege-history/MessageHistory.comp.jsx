import React from 'react'
import propTypes from 'prop-types';
import './MessageHistory.style.css';

export const MessageHistory = ({ msg }) => {
 
  console.log(msg);
  if (!msg) return null;

  return msg.map((row, i) => (

    <div key={i} className="message-history mt-3">
       <div className='send font-weight-bold text-secondary'>
          <div className='sender'>{row.sender}</div>
          <div className='date'>{row. date}</div>
       </div>

       <div className='message'>{row.message}</div>
    </div>

  ));
};

MessageHistory.propTypes = {
    msg: propTypes.object.isRequired
}
