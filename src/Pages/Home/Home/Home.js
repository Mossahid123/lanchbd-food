import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div id='home' className='mt-5'>
            <h1 className='text-center'>Best food waiting for your belly</h1>
            <InputGroup className="mb-3 w-50 mx-auto mt-5">
                <FormControl placeholder="Search" />
                <Button variant="outline-secondary">Search</Button>
            </InputGroup>
        </div>
    );
};

export default Home;