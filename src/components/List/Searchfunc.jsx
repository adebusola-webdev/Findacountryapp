import React from 'react'



export const Searchfunc = ({country,name}) => {



  return <>
  <div className='container mt-5 d-flex justify-content-center'>
   <div>
   {country.map((item,index)=>{
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
            <a href="" className="text-danger">
              Learnmore
            </a>
          </div>
        </div>
      </div>
     )

   })} 
   </div>

  </div>
  
  
  
  
  </>
}
