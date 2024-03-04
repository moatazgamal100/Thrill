import axios from 'axios';
import Joi, { string } from 'joi';
import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import backgroundImage from '../../images/background1.jpg'

export default function Login({setData}) {
  let [user, setUser] = useState({
    email: '',
    password:''
  });
  let [errorList, setErrorList] = useState([]);
  let navigate = useNavigate();
  function getuserdata(eventinfo) {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
    
  }
  let [found, setFound] = useState(false);
  function validateLoginForm() {
    let schema=Joi.object({
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(/^[A-Z][a-z]{3,6}/)
    });
    return schema.validate(user, { abortEarly: false });

  }
  let usersArray = [];
  async function sendLogindatatoapi() {
    validateLoginForm();
  }
  function submitRigisterform(e) {
    e.preventDefault();
    sendLogindatatoapi();
    let validation = validateLoginForm();
    if (validation.error) {
      setErrorList(validation.error.details)
    }
    else {
      let myusers = JSON.parse(localStorage.getItem('users'));
      if (myusers) {
        let sameuser = myusers.filter((us) => us.email == user.email);
        if (sameuser.length > 0) {
          console.log(sameuser);
          localStorage.setItem('user', JSON.stringify(sameuser));
          setData();
          navigate('/');
        }
        else {
          setFound(true);
        }
      }
      else {
        setFound(true);
      }
    }
 
  }
  return <>
    <div className="row  align-items-center">
      <div className="col-md-6 d-flex justify-content-center"  >
        <div className=" w-75">
        {found === true ?<div className="alert alert-danger">The Email is Not Found</div>:''}
          <form onSubmit={submitRigisterform}>
            <label htmlFor="email">E=Mail</label>
            <input onChange={getuserdata} type="email" className='w-100 form-control myinput my-2' name='email' id='email' />
            {errorList.filter((err)=>err.context.label==='email')[0]?<div className="alert alert-danger my-2">
              <p>{errorList.filter((err)=>err.context.label==='email')[0]?.message}</p>
            </div>:''}
            <label htmlFor="password">Password</label>
            <input onChange={getuserdata} type="password" className=' form-control myinput w-100 my-2' name='password' id='password' />
            {errorList.filter((err)=>err.context.label==='password')[0]?<div className="alert alert-danger my-2">
              <p>Invalid Password</p>
            </div>:''}
            <button className='btn log my-2 w-100'>Login</button>
          </form>
          </div>
      </div>
      <div className="col-md-6 login rounded-start-pill">
        
      </div>
    </div>
  </>
}
