



function CountriesList({country}){
    return(
    <>
     <div className=" d-flex flex-wrap justify-content-evenly">
        {country.map((item,index)=>{
              return(
                <div className="card col-4 mb-5 shadow  text-danger" key={index}>
                    <div>
                        <div>  <img src={item.flags.png}/></div>
                     
                        <h4 className="pt-4 w-100"> Country Name:{item.name.common}</h4>
                        <hr />
                         <h4 className="pt-4 w-100">Capital: {item.capital}</h4>
                         <hr />
                         <h4 className="pt-4 w-100">Area:{item.area}</h4>
                         <hr />
                         <h4 className="pt-4 w-100">Population:{item.population}</h4>
                         </div>

                </div>
            )
        })}
     </div>
    </>
    )
}
export default CountriesList;