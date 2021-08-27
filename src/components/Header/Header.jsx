import React from 'react';
import { useDispatch } from 'react-redux';
import {fetchRandomUser, logOut} from '../../redux/Slices/authSlice';

const Header = () => {

  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOut());
  }
  function handleRandomUser() {
    dispatch(fetchRandomUser());
  }

  return (
    <div className='header'>
         <button onClick={handleRandomUser} className='logout'>Random user</button>
         <h1>Personal Library</h1>
         <button onClick={handleLogOut} className='logout'>LogOut</button>
    </div>
  );
};

export default Header;