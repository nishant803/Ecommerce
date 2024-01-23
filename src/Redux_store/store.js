import React from 'react'
 import { configureStore } from '@reduxjs/toolkit' 
import Courosel_img from './Courosel_img';


const store= configureStore({
reducer:{
    img:Courosel_img,
},

})
export default store;