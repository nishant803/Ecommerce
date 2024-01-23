import { createSlice} from '@reduxjs/toolkit'

export const Courosel_img=createSlice({
    name:'img',
    initialState:{
        image:[
            'img1.webp',
            'img2.webp',
            'img3.webp',
            'img4.webp'
        ]
    },
    reducers: { }
})
export default Courosel_img.reducer 