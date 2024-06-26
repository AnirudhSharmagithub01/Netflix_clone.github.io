import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut} = UserAuth();
  const navigate = useNavigate();
  const logOutHandler = async(e) =>{
    
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className='flex justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
      <h1 className='text-red-600 text-4xl font-bo
       cursor-pointer'>NETFLIX</h1>
      
      </Link>
      {user?.email ? (
        <div className=''>
        <Link to='/account-profile'>
        <button className='text-white pr-4 '>
          Account
        </button>
        </Link>
        
        <button 
        onClick={logOutHandler}
        className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white
        '
        >logOut</button>
      </div>
      ) : (
      <div>
        <Link to='/login'>
        <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to="/signup">
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white
        '>SignUp </button>
        </Link>
      </div>
      )}
    </div>
  )
}

export default Navbar
