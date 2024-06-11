import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions, removeTransaction } from '../../redux/transactionReducer';
import '../styles/transactionList.css';

const TransactionList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const transactions = useSelector((state) => state.transaction.transactions || []);
  const loading = useSelector((state) => state.transaction.loading);
  const error = useSelector((state) => state.transaction.error);

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  useEffect(() => {
    if (user.id) {
      dispatch(fetchTransactions(user.id));
    }
  }, [user.id, dispatch]);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this transaction?");
    if (confirmDelete) {
      await dispatch(removeTransaction(id));
      dispatch(fetchTransactions(user.id)); // Fetch updated transactions
    }
  };

  const handleEdit = (index) => {
    console.log(`Editing transaction at index ${index}`);
  };

  useEffect(() => {
    console.log("Fetched transactions:", transactions);
  }, [transactions]);

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      {loading && <p>Loading transactions...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && transactions.length > 0 ? (
        <>
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
              {currentTransactions.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.date}</td>
                  <td>{entry.time}</td>
                  <td>{entry.type}</td>
                  <td>{entry.category}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.description ? (entry.description.length > 30 ? `${entry.description.slice(0, 30)}...` : entry.description) : 'No description'}</td>
                  <td><button onClick={() => handleDelete(entry.id)}>X</button></td>
                  <td><button onClick={() => handleEdit(entry.id)}>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {Array.from({ length: Math.ceil(transactions.length / transactionsPerPage) }, (_, i) => (
              <button 
                key={i} 
                onClick={() => paginate(i + 1)} 
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        !loading && !error && <p>No transactions found.</p>
      )}
    </div>
  );
};

export default TransactionList;
