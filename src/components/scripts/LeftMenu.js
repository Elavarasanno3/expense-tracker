import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/leftMenu.css'

const LeftMenu = () => {
  const location = useLocation();
  
  return (
    <div className='left-menu-container'>
      <div className='profile-container'>
        <p className='title'>EXPENSE TRACKER</p>
        <div className='profile'>
          <img className='profile-img' src='https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' alt='profile' />
          <p className='profile-name'>Prince</p>
        </div>
      </div>
      <div className='left-menu'>
        <Link to='/dashboard' className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
        <Link to='/transaction' className={location.pathname === '/transaction' ? 'active' : ''}>Transaction</Link>
      </div>
    </div>
  )
}

export default LeftMenu
