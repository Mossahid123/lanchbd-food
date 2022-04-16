import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BrackfastItem = ({ item }) => {

    const navigate = useNavigate();

    const handleNaviate=()=>{
        navigate('/home')
    }
    console.log(item);
    const { name, img, discription, price } = item;
    return (
        <div className='mb-5' onClick={handleNaviate}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-center fw-bold fs-2'>{name}</Card.Title>
                    <Card.Text className='text-center fw-light'>
                        {discription}
                    </Card.Text>
                    <Card.Text className='text-center fw-bold'>
                        ${price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BrackfastItem;