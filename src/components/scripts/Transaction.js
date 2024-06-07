// src/components/Transaction.js
import React, { useState } from 'react';
import '../styles/transaction.css'; // Import your CSS file for styling
import Popup from './Popup';
import TransactionList from './TransactionList';

function Transaction() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="app">
      <button className='add-transaction-button' onClick={togglePopup}>Add Transaction</button>
      {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={togglePopup} />}
      <TransactionList />
      <filter></filter>
    </div>
  );
}

export default Transaction;
