import React, { useState } from 'react';
import '../styles/transaction.css'; // Import your CSS file for styling

function Transaction() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className={`Transaction ${showForm ? 'blur' : ''}`}>
      <h1>React Form Example</h1>
      <div className="button-container">
        <button onClick={handleButtonClick}>Open Form</button>
      </div>
      {showForm && (
        <div className="form-container">
          <form>
            <div>
              <label>
                <input type="radio" name="transactionType" value="income" />
                Income
              </label>
              <label>
                <input type="radio" name="transactionType" value="expense" />
                Expense
              </label>
            </div>
            <div>
              <label>Date:</label>
              <input type="date" />
            </div>
            <div>
              <label>Time:</label>
              <input type="time" />
            </div>
            <div>
              <label>Select Category:</label>
              {/* Dropdown for selecting category */}
              <select>
                {/* Options for categories */}
              </select>
            </div>
            <div>
              <label>Enter Amount:</label>
              <input type="number" />
            </div>
            <div>
              <label>Description:</label>
              <textarea />
            </div>
            <div>
              <label>Payment Mode:</label>
              <label>
                <input type="radio" name="paymentMode" value="cash" />
                Cash
              </label>
              <label>
                <input type="radio" name="paymentMode" value="debitCard" />
                Debit Card
              </label>
              <label>
                <input type="radio" name="paymentMode" value="creditCard" />
                Credit Card
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Transaction;
