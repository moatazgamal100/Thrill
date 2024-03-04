import axios from 'axios';
import Joi, { string } from 'joi';
import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';


export default function Register() {
  let [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password:''
  });
  let [errorList, setErrorList] = useState([]);
  let [found, setFound] = useState(false);
  let navigate = useNavigate();
  function getuserdata(eventinfo) {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
    
  }
  function validateRegisterForm() {
    let schema=Joi.object({
      first_name: Joi.string().pattern(/^[A-z]/).min(3).max(9).required(),
      last_name: Joi.string().min(3).max(9).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(/^[A-Z][a-z]{3,6}/)
    });
    return schema.validate(user, { abortEarly: false });

  }
  let usersArray = [];
  async function sendregisterdatatoapi() {
    validateRegisterForm();
  }
  function submitRigisterform(e) {
    e.preventDefault();
    sendregisterdatatoapi();
    let validation = validateRegisterForm();
    if (validation.error) {
      setErrorList(validation.error.details)
    }
    else {
      let myusers = JSON.parse(localStorage.getItem('users'));
      if (myusers) {
        let sameuser = myusers.filter((us) => us.email == user.email);
        if (sameuser.length>0) {
          setFound(true);
        }
        else {
          myusers.push(user);
          localStorage.setItem("users", JSON.stringify(myusers));
          navigate('/login');
        }
      }
      else {
        usersArray.push(user)
        localStorage.setItem("users", JSON.stringify(usersArray));
        navigate('/login');
      }
    }
 
  }
  return <>
    <div className="row m-0">
      <div className="col-md-6 fo p-5 ">
          {found === true ?<div className="alert alert-danger">The Email is already registerd</div>:''}
        
        <form onSubmit={submitRigisterform} className='w-100 h-100 d-flex flex-column justify-content-center'>
          <label htmlFor="first_name">First_Name</label>
          <input onChange={getuserdata} type="text" className='w-100 form-control myinput my-2' name='first_name' id='first_name' />
          {errorList.filter((err)=>err.context.label==='first_name')[0]?<div className="alert alt alert-danger my-2">
            <p>{errorList.filter((err)=>err.context.label==='first_name')[0]?.message}</p>
          </div>:''}
          <label htmlFor="last_name">Last_Name</label>
          <input onChange={getuserdata} type="text" className='w-100 form-control myinput my-2' name='last_name' id='last_name' />
          {errorList.filter((err)=>err.context.label==='last_name')[0]?<div className="alert alt alert-danger my-2">
            <p>{errorList.filter((err)=>err.context.label==='last_name')[0]?.message}</p>
          </div>:''}
          <label htmlFor="age">Age</label>
          <input onChange={getuserdata} type="number" className='w-100 form-control myinput my-2' name='age' id='age' />
          {errorList.filter((err)=>err.context.label==='age')[0]?<div className="alert alt alert-danger my-2">
            <p>{errorList.filter((err)=>err.context.label==='age')[0]?.message}</p>
          </div>:''}
          <label htmlFor="email">E=Mail</label>
          <input onChange={getuserdata} type="email" className='w-100 form-control myinput my-2' name='email' id='email' />
          {errorList.filter((err)=>err.context.label==='email')[0]?<div className="alert alt alert-danger my-2">
            <p>{errorList.filter((err)=>err.context.label==='email')[0]?.message}</p>
          </div>:''}
          <label htmlFor="password">Password</label>
          <input onChange={getuserdata} type="password" className='w-100 form-control myinput my-2' name='password' id='password' />
          {errorList.filter((err)=>err.context.label==='password')[0]?<div className="alert alt alert-danger my-2">
            <p>Invalid Password</p>
          </div>:''}
          <button className='btn btn-info my-2 w-100'>Register</button>
        </form>
      </div>
      <div className="col-md-6 regist">
        
    </div>
    </div>
   
  </>
}
