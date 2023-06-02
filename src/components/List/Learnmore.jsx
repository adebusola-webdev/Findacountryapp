import React from 'react'
import { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom';

export const Learnmore = () => {
  
    const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {id}=useParams()
  const myid = id
  const fetchEuropecounties = useCallback(async (id) => {
    setError(null);
    try {
      const response = await fetch(`https://restcountries.com/v3.1/3`);
      const data = await response.json();
      const api = data
      console.log(api);
      setData(api);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }, []);
  useEffect(() => {
    fetchEuropecounties();
  }, [fetchEuropecounties]);
 
  return (
   <>
    <div className='container mt-5 d-flex justify-content-center'>
   <div>
   {/* {data.map((item,index)=>{
     return(
        <div
        className="mb-5 shadow  text-danger flex-wrap contentcontainer"
        key={index}
      >
        <div>
          <div className="countryimg">
            <img src={item.flags.png} />
            <hr />
          </div>

          <div className="contentinfo  mt-4 p-4 d-flex justify-content-between">
            <p className="fw-bold">{item.name.common}</p>
            
          </div>
        </div>
      </div>
     )

   })}  */}
   </div>

  </div>
   
   </>
  )
}
