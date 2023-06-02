import React from 'react'
import Navbar from '../Navbar';
import { useCallback,useEffect,useState } from 'react';
export const Antarctica= () => {
    const[data,setData]=useState('');
    const[loading, setLoading]=useState(true);
    const[error, setError]=useState(null);
  
    const fetchAntarcticacountries=useCallback(async()=>{
     setError(null)
     try{
      const response = await fetch('https://restcountries.com/v3.1/all')
              const data = await response.json()
              console.log(data)
              setData(data)
              setLoading(false)
  
     }catch(err){
      setError(err.message);
  
     }
  
  
    },[]);
    useEffect(()=>{
     fetchAntarcticacountries();
  
    },[fetchAntarcticacountries])
  
    let content = "";
    if (error) {
      content = (
        <h1
          className=""
          style={{ color: "red", fontSize: "40px", textAlign: "center" }}
        >
          {" "}
          ERROR WITH SERVER OR NETWORK
        </h1>
      );
    }
    if (loading) {
      content = (
        <h1
          className=""
          style={{ color: "red", fontSize: "40px", textAlign: "center" }}
        >
          loading.........
        </h1>
      );
    } else {
      content = (
        <div className="d-flex justify-content-around g-2 mt-5 flex-wrap">
          {data
            .filter((item) => {
              return item.continents[0] === 'Antarctica';
            })
            .map((item, index) => {
              return (
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
                      <a href="" className="text-danger">
                        Learnmore
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
  return<>
  <div className=''>
    <Navbar/>
    <br />
        <h1 className="text-danger">Antarctica-Countries</h1>
    {content}

  </div>
  
  </>
  
}
