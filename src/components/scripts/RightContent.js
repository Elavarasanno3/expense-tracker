import React from 'react'
import '../styles/rightContent.css'
import DonutChart from './DonutChart.js'
import BarChart from './BarChart.js'
import LineChart from './LineChart.js'
const RightContent = () => {
  return (
    <div className='right-container'>
      <p>Dashboard</p>
      <div className='income-expence-balance-transaction'>
        <div className='income-box'>
          <p className='card-value'>₹43,000</p>
          <p className='card-desc'>Income</p>
        </div>
        <div className='expense-box'>
          <p className='card-value'>₹43,000</p>
          <p className='card-desc'>Expense</p>
        </div>
        <div className='balance-box'>
          <p className='card-value'>₹43,000</p>
          <p className='card-desc'>Balance</p>
        </div>
        <div className='transaction-box'>
          <p className='card-value'>43,000</p>
          <p className='card-desc'>Transactions</p>
        </div>
      </div>
      <div className='total-expences-container'>
        <DonutChart/>
      </div>
      <div className='account-balance-and-income-container'>
        <div className='account-balance-container'><LineChart/></div>
        <div className='income-container' ><BarChart/></div>
      </div>
      <div className='recent-transactions'>
        <div>Recent-Transactions</div>
      </div>
    </div>
  )
}

export default RightContent
