import React, { useEffect } from 'react'
import { useState } from 'react';
export default function Midele() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const URL = "http://localhost:7079/products";
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(URL);
            if (!response.ok) {
              throw new Error('Network request failed');
            }
            const result = await response.json();
            setData(result);
            console.log(result[0].name);
          } catch (error) {
           setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    
  return (
    <div className='h-[48vh] w-[100vw] flex justify-evenly bg-black items-center'>
        {data?.slice(0,5).map((product) => (
            <div key={product.id} className='h-[45vh] w-[18%] bg-white flex-col'>
                <div className='h-[75%] w-full'>
                    <img className='h-full w-full' src={`data:image/jpeg;base64,${product.image}`}></img>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xl'>{product.name}</p>
                    <p className='text-2xl'>{product.product_ratings}<span className="material-symbols-outlined text-[#F5bf03]">grade</span></p>
                </div>
                <div  className='text-xl'><span>&#8360;</span>{product.product_price}</div>
            </div>
        ))}
    </div>
  )
}
