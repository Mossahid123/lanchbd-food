import React from 'react';
import './Login.css';
import logo from '../../../images/logo2.png';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleSingIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email , password)
        navigate('/home')
    }


    return (
        <div className='container' id='login'>
            <div className='w-50 mx-auto'>
                <img style={{ width: '200px', height: '50px' }} src={logo} alt="logo" />
            </div>
            <form onSubmit={handleSingIn} className='form-container mt-5'>
                <input type="email" name="email" placeholder='Enter email' />
                <input type="password" name="password" placeholder='Enter password' />
                <input className='bg-info' type="submit" value="LogIn" />
                <p className='text-center'><Link to='/singup' className='text-decoration-none ms-2'>DO you have an account?</Link></p>
            </form>
        </div>
    );
};

export default Login;