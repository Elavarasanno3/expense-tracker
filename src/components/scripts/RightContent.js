import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions } from '../../redux/transactionReducer';
import '../styles/rightContent.css';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import LineChart from './LineChart';


const RightContent = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state)=>state.user.id);

  useEffect(() => {
    dispatch(fetchTransactions(userId)); // Fetch transactions when component mounts
  }, [dispatch]);

  const { totalIncome, totalExpense, totalCount } = useSelector(state => state.transaction);

  return (
    <div className='right-container'>
      <p>Dashboard</p>
      <div className='income-expense-balance-transaction'>
        <div className='income-box'>
          <p className='card-value'>₹{totalIncome}</p>
          <p className='card-desc'>Income</p>
        </div>
        <div className='expense-box'>
          <p className='card-value'>₹{totalExpense}</p>
          <p className='card-desc'>Expense</p>
        </div>
        <div className='balance-box'>
          <p className='card-value'>₹{totalIncome - totalExpense}</p> {/* Calculate balance here */}
          <p className='card-desc'>Balance</p>
        </div>
        <div className='transaction-box'>
          <p className='card-value'>{totalCount}</p>
          <p className='card-desc'>Transactions</p>
        </div>
      </div>
      <div className='total-expenses-container'>
        <DonutChart />
      </div>
      <div className='account-balance-and-income-container'>
        <div className='account-balance-container'><LineChart /></div>
        <div className='income-container'><BarChart /></div>
      </div>
      {/* <div className='recent-transactions'>
        <div>Recent Transactions</div>
      </div> */}
    </div>
  );
};

export default RightContent;
