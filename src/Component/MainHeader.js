import React from 'react'
import Navbar from './Navbar';
import Carousel from './carousel';
import { useSelector } from 'react-redux'
import Midele from './Midele';

export const MainHeader = () => {
    const image=useSelector(state=>state.img.image);
    
  return (
    <div>
        <Navbar/>
        <Carousel images={image}/>
        <Midele/>
    </div>
    
  )
}
