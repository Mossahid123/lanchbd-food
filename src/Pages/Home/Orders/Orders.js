import React from 'react';
import './Orders.css'

import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <div className='meal-container'>
            <div className='meal-nav'>
                <Link to='/brackfast'>Brackfast</Link>
                <Link to='/lunch'>Lunch</Link>
                <Link to='/dinner'>Dinner</Link>
            </div>
        </div>
    );
};

export default Orders;