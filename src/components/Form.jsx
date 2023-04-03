import Header from "./Header";


import { useState } from 'react';

function Form(){
    // const name ='this'
    // const[inputName,setInputName]=useState('busola');
    // const[person,setPerson]=useState({name:'busola' ,age:24,level:'level 1'})
    const[inputName, setInputName]=useState('')
    const [inputEmail,setInputEmail]=useState('')
    const[inputAddress, setAddress]=useState('')

    // event, onchange for input, onclick for button,onsubmit=forms
    const inputNameHandler=(event)=>{
        setInputName(event.target.value)//this will update the current value in the input
        console.log(event.target.value)
    
    }
    const inputEmailHandler=(event)=>{
        setInputEmail(event.target.value)//this will update the current value in the input
        console.log(event.target.value)
    

    }
    const AddressHandler=(event)=>{
        setAddress(event.target.value)//this will update the current value in the input
        console.log(event.target.value)
    

    }
    

    return(
        <>
        <div className="w-auto py-4 bg-white shadow container d-flex ">
        <form className="container ms-4 ">
            <Header/>

        <input type="text" value={inputName} onChange={inputNameHandler} className="form-control mb-4"/>
        <input type="text" value={inputEmail} onChange={inputEmailHandler} className="form-control mb-4"/>
        <input type="text" value={inputAddress} onChange={AddressHandler} className="form-control mb-4"/>
        <button className="btn btn-100 w-100 btn-danger">submit</button>
        </form>
        </div>
        </>
    )
}
export default Form;