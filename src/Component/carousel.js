import React from 'react'
import { useEffect,useState } from 'react'


function Carousel({ images }) {
    const [currentIndex,setCurrentIndex]=useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
    
        return () => {
          clearInterval(interval);
        };

        
      }, [images.length], currentIndex);


  return (
    <div className='relative overflow-hidden'>
        <div className="flex transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={()=>{console.log("image",image)}}
            className={`w-full flex-shrink-0 h-[300px] bg-cover bg-center `}
            style={{ backgroundImage: `url(${require(`../image/${image}`)})` }}
          ></div>
        ))}
        </div>
    </div>
  )
}

export default Carousel