import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../redux/transactionReducer';
import '../styles/popup.css';

const Popup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    type: 'income', // Default type
    date: '',
    time: '',
    category: 'Salary', // Default category for income
    amount: '',
    description: ''
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Validation: check if all fields are filled
    const { date, time, category, amount, description } = formData;
    if (!date || !time || !category || !amount || !description) {
      alert('Please fill in all fields');
      return;
    }
    const transactionData = { ...formData };
    dispatch(addTransaction(transactionData)); // Dispatch action to add transaction
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const incomeCategories = ['Salary', 'Interest', 'Extra Income', 'Discount'];
  const expenseCategories = ['Rent', 'Food', 'Bills', 'Transportation', 'Insurance', 'Shopping', 'Entertainment', 'HealthCare', 'Taxes', 'Cloths', 'Education', 'Miscellaneous', 'Personalcare'];

  return (
    <div className={`popup-overlay ${isOpen ? 'visible' : ''}`}>
      <div className="popup-content">
        <form onSubmit={onSubmitHandler} className='form-container'>
          <h3 className='input-form-heading'>Transaction</h3>
          <div className='radio-container'>
            <div className='radio-input-container'>
              <label htmlFor='income'>Income</label>
              <input
                type='radio'
                id='income'
                name='type'
                value='income'
                checked={formData.type === 'income'}
                onChange={handleChange}
              />
            </div>
            <div className='radio-input-container'>
              <label htmlFor='expense'>Expense</label>
              <input
                type='radio'
                id='expense'
                name='type'
                value='expense'
                checked={formData.type === 'expense'}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='input-container'>
            <label htmlFor='date'>Date :</label>
            <input type='date' id='date' name='date' value={formData.date} onChange={handleChange} />
          </div>
          <div className='input-container'>
            <label htmlFor='time'>Time :</label>
            <input type='time' id='time' name='time' value={formData.time} onChange={handleChange} />
          </div>
          <div className='input-container'>
            <label htmlFor='category'>Category :</label>
            <select id='category' name='category' value={formData.category} onChange={handleChange}>
              {(formData.type === 'income' ? incomeCategories : expenseCategories).map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className='input-container'>
            <label htmlFor='amount'>Amount :</label>
            <input type='number' id='amount' name='amount' value={formData.amount} onChange={handleChange} />
          </div>
          <div className='input-container'>
            <label htmlFor='description'>Description :</label>
            <input type='text' id='description' name='description' value={formData.description} onChange={handleChange} />
          </div>
          <div className='button-container'>
            <button className='submit-button' type='submit' value='Submit' >Submit</button>
            <button className='cancel-button' type='button' onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;