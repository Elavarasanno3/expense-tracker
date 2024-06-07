import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { deleteTransaction } from '../../redux/transactionReducer'; // Import the deleteTransaction action
import '../styles/transactionList.css';

const TransactionList = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const transactions = useSelector((state) => state.transaction.transactions);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // Calculate the index of the first and last transaction to display on the current page
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this transaction?");
    if (confirmDelete) {
      // Dispatch deleteTransaction action
      dispatch(deleteTransaction(index));
    }
  };

  const handleEdit = (index) => {
    // Implement edit functionality here
    console.log(`Editing transaction at index ${index}`);
  };

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.time}</td>
              <td>{entry.type}</td>
              <td>{entry.category}</td>
              <td>{entry.amount}</td>
              <td>{entry.description.length > 30 ? `${entry.description.slice(0, 30)}...` : entry.description}</td>
              <td><button onClick={() => handleDelete(index)}>X</button></td>
              <td><button onClick={() => handleEdit(index)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(transactions.length / transactionsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
