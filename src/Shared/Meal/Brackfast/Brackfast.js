import React from 'react';
import brackfast1 from '../../../images/breakfast/breakfast1.png';
import brackfast2 from '../../../images/breakfast/breakfast2.png';
import brackfast3 from '../../../images/breakfast/breakfast3.png';
import brackfast4 from '../../../images/breakfast/breakfast4.png';
import brackfast5 from '../../../images/breakfast/breakfast5.png';
import brackfast6 from '../../../images/breakfast/breakfast6.png';
import BrackfastItem from '../BrackfastItem/BrackfastItem';
import './Brackfast.css'

const Brackfast = () => {
    const brackfast = [
        {id:1 ,name:'Healthy meal plan' ,discription:'how we dream about our future.' , price:23.99 ,img:'https://i.ibb.co/wN3CKjC/breakfast1.png'},
        {id:2 ,name:'fried chicken bento' ,discription:'how we dream about our future.' , price:9.99 ,img:'https://i.ibb.co/BwQxTbY/breakfast2.png'},
        {id:3 ,name:'tarragon rubbed salmon' ,discription:'how we dream about our future.' , price:6.99,img:'https://i.ibb.co/tXKhfny/breakfast3.png'},
        {id:4 ,name:'Indian lunch' ,discription:'how we dream about our future.' , price:8.99,img:'https://i.ibb.co/5Wr8nHy/breakfast4.png'},
        {id:5 ,name:'Beef stick' ,discription:'how we dream about our future.' , price:15.99,img:'https://i.ibb.co/XXC12vg/breakfast5.png'},
        {id:6 ,name:'Salmon with pappers' ,discription:'how we dream about our future.' , price:7.99,img:'https://i.ibb.co/Jqd3RMd/breakfast6.png'},
    ];
    return (
        <div className='card-container'>
       {
           brackfast.map(item=><BrackfastItem
           key={item.id}
           item={item}
           ></BrackfastItem>)
       }
        </div>
    );
};

export default Brackfast;