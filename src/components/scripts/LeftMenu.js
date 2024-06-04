import React from 'react'
import '../styles/leftMenu.css'

const LeftMenu = () => {
  return (
    <div className='left-menu-container'>
        <div className='profile-container'>
            <p className='title'>EXPENSE TRACKER</p>
            <div className='profile'>
                <img className='profile-img' src='https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg'></img>
                <p className='profile-name' >Prince</p>
            </div>
        </div>
        <div className='left-menu'>
            <a>DashBoard</a>
            <a>Transactions</a>
        </div>
        
      
    </div>
  )
}

export default LeftMenu
