import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transaction from './components/scripts/Transaction.js';
import Home from './components/scripts/Home.js';
import LeftMenu from './components/scripts/LeftMenu.js'; // Importing LeftMenu component
import './App.css';
import SignIn from './components/scripts/SignIn.js'
import CreateAccount from './components/scripts/CreateAccount.js'

const App = () => {
  const currentPath = window.location.pathname;
  const showLeftMenu = currentPath === '/dashboard' || currentPath === '/transaction';

  return (
    <Router>
      <div className="app">
        {showLeftMenu && <LeftMenu />}
        <Routes>
          <Route path='/' element = {<SignIn/>} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/transaction' element={<Transaction />} />
          <Route path='/createaccount'element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
