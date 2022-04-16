import React from 'react';
import auth from '../../../firebase.init';
import logo from '../../../images/logo2.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SingUp.css';
import { Link, useNavigate } from 'react-router-dom';

const SingUp = () => {

    const [ createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

const handleSingUp = event =>{

    const name = event.target.name.value;
    console.log(name);
    const email = event.target.email.value;
    console.log(email);
    const password = event.target.password.value;
    console.log(password);
    const confirmPassword = event.target.confirmPassword.value;
    console.log(confirmPassword);
    createUserWithEmailAndPassword(name , email , password ,confirmPassword)
    event.preventDefault();
    navigate('/home')
} 


    return (
        <div>
            <div className='container' id='login'>
            <div className='img-container'>
                <img style={{width:'200px' , height:'50px'}} src={logo} alt="logo" />
            </div>
            <form onSubmit={handleSingUp} className='form-container mt-5'>
                <input type="text" name="name" placeholder='Enter name' />
                <input type="email" name="email" placeholder='Enter email'/>
                <input type="password" name="password" placeholder='Enter password'/>
                <input type="password" name="confirmPassword" placeholder='Enter confirm password'/>
                <input className='bg-info' type="submit" value="Sing Up" />
                <p className='text-center'><Link className='text-decoration-none ms-2' to='/login'>Alreday have an account?</Link></p>
            </form>

        </div>
        </div>
    );
};

export default SingUp;