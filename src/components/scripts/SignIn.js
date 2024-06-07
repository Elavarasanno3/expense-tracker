import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from '../../redux/userReducer'
import '../styles/signIn.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:8080/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailId, password }),
      });
      if (response.ok) {
        console.log('Sign-in successful');
        dispatch(addUser({ email: emailId, password }));
        console.log('Updated user state:', { email: emailId, password });
        navigate('/dashboard');
      } else {
        alert("No user found")
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Sign-in failed');
      }
    } catch (error) {
      console.error('Sign-in failed:', error.message);
      
    }
  };

  const goToCreateAccount = () => {
    navigate('/createaccount');
  };

  return (
    <div className='sign_in'>
      <div className='sign_in_container'>
        <div className='sign_in_block'>
          <h2 className='sign_in_block_header'>Sign in</h2>
          <form onSubmit={handleSignIn}>
            <label>
              <h5 className='sign_in_text'> Email or mobile phone number</h5>
              <input className='sign_in_email_input' type='text' value={emailId} onChange={(e) => setEmailId(e.target.value)}></input>
            </label>
            <label>
              <h5 className='sign_in_text'> Enter your password</h5>
              <input className='sign_in_email_input' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <button className='continue_button' type='submit'> Continue</button>
            <button onClick={goToCreateAccount} className='create_account_button'>Create Your account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
