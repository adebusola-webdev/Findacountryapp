
import { useState } from 'react';
// event onClick, onSubmit, Onchange
function Test(){
    const[input, setInput]=useState({
        name:'',
        email:'',
        state:'',
        message:'',
    });
    const[error,seterror]=useState('')
    const [message,setMessage]=useState('')
    const [bool, setbool]=useState('false')

    const inputHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
        
    }
    const database=[{
        name:'busola',
        email:'badejoadebusola@gmail.com',

    }]
    const usernamCheck=()=>{
        if(input.name===database[0].name && input.email===database[0].email){
            setMessage('info is matching!')
            setbool(true)
        }else{
            seterror('info not matching!')
            setbool(false)
        }
       
    }
    let content=''
    if(bool){
        content=<small className='text- info'>{message}</small>
    }else{
        content=<small className='text-danger'>{error}</small>
    }
    return(
        <>
        <div className="container shadow">
            
            <input type="text" className="form-control m-2" value={input.name} name="name" onChange={inputHandler} placeholder="Name:" />
            <small>{content}</small>
            <input type="text" className="form-control m-2" value={input.email} name="email" onChange={inputHandler}  placeholder="Email:" />
            <small>{content}</small>
            <input type="text" className="form-control m-2" value={input.state} name="state" onChange={inputHandler}  placeholder="State:"/>
            <textarea id="" cols="30" rows="10" className="form-control m-2" name="message" value={input.message} onChange={inputHandler}  placeholder="message:"></textarea>
            <button className="btn btn-primary bg-danger px-4 py-2 mb-4" onClick={usernamCheck}>submit</button>
        </div>





        </>
    )

}
export default Test;