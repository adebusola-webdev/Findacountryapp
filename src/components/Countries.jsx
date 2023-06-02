import CountriesList from "./List/CountriesList";
import { useState, useEffect, useCallback } from "react"
import Navbar from "./Navbar";
import { Search } from "./Search";


function Countries(){
    const[loading,setLoading]=useState(true);
    const[data,setdata]=useState([]);
    const baseUrl="https://restcountries.com/v3.1/all"



    const fetchData=async()=>{
        try{
            const response= await fetch(baseUrl);
            const data =await response.json()
            console.log(data)
            setdata(data)
            setLoading(false)

        }catch(err){

        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    let page='';
    if(loading){
        page= <div>
            <h1 className="text-danger">Loading! Please wait.</h1>
        </div>
    }else{
        page = <div>
        <CountriesList country={data}/>
        </div>
    }
    return(
        <>
        <div className="">
        <Navbar/>
        
            {page}
           
        
        </div>

        </>
    )
}
export default Countries;