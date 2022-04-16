import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='' style={{ backgroundColor: 'black' }}>
            <div className='mt-5 pt-2'>
                <Container>
                    <Row>
                        <Col>
                            <img style={{ width: '100px', height: "30px" }} src={logo} alt="logo" />
                        </Col>
                        <Col md="auto">
                            <a className='text-decoration-none text-white' href="https://restaurant.indianretailer.com/article/tag/Online-Food-Delivery">About online food</a><br />
                            <a className='text-decoration-none text-white' href="https://restaurant.indianretailer.com/article/tag/Online-Food-Delivery">Read our Blogs</a><br />
                            <a className='text-decoration-none text-white' href="https://restaurant.indianretailer.com/article/tag/Online-Food-Delivery">Sing up to deliver</a><br />
                            <a className='text-decoration-none text-white' href="https://restaurant.indianretailer.com/article/tag/Online-Food-Delivery">Add your restuarant</a><br />
                        </Col>
                        <Col xs lg="2">
                            <a className='text-decoration-none text-white' href="https://restaurant.indianretailer.com/article/tag/Online-Food-Delivery">About online food</a><br />
                            <a className='text-decoration-none text-white' href="https://restaurant.indianretailer.com/article/tag/Online-Food-Delivery">Read our Blogs</a><br />
                            <a className='text-decoration-none text-white' href="https://restaurant.indianretailer.com/article/tag/Online-Food-Delivery">Sing up to deliver</a><br />
                            <a className='text-decoration-none text-white' href="https://restaurant.indianretailer.com/article/tag/Online-Food-Delivery">Add your restuarant</a><br />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='d-flex justify-content-around mt-5'>
                <div>
                    <p className='text-white'><small>copyright@{year}</small></p>
                </div>
                <div className='d-flex justify-content-around text-white'>
                    <p className='pe-4'><small>Privacy Policy</small></p>
                    <p  className='pe-4'><small>Terms of use</small></p>
                    <p><small>Pricing</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;