import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="bg-black w-full h-[70px] flex flex-col justify-center items-center sticky top-0 mt-0">
            <div className='w-full h-[60%]  flex items-center justify-evenly'>
                <ul><i className='text-white text-3xl'>xyz<span className='text-xl'>.Com</span></i></ul>
                <ul className='h-[79%] w-[23%] bg-white rounded-md'>
                    <div className='h-[90%] w-full flex'>
                        <input className='ml-[2%] border-none h-full w-full rounded-md focus:outline-none' placeholder='Serach'></input>
                        <span className="mt-[1%] mr-[2%] material-symbols-outlined cursor-pointer">search</span>
                    </div>
                </ul>
                <ul className='flex justify-between w-[6%]'>
                    <ul ><span className="material-symbols-outlined text-white text-3xl cursor-pointer" >login</span></ul>
                    <ul className='w-[20px] h-[80%]'><span className="material-symbols-outlined text-white text-2xl cursor-pointer absolute" >shopping_cart</span></ul>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar