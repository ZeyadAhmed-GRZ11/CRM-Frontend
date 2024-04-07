import React, {useState} from 'react';
import './Entry.style.css';


import { Card } from "react-bootstrap";
import { LoginForm } from "../../components/login/login.components";
import { ResetPassword } from "../../components/password-reset/PasswordReset";


export const Entry = () => {

   const [email, setEmail]= useState("");
   const [password, setPssword]= useState("");
   const [frmload, setfrmload]= useState("login");

const handleOnchange = e =>{
  const {name, value}= e.target
  switch(name){

      case'email':
          setEmail(value);
      break;

      case'password':
          setPssword(value);
      break;

      default:
        break;

    }
};

const handleOnSubmit = e => {
  e.preventDefault()

  if(!email || !password){
    
  }
  console.log(email, password);
};
const handleOnResetSubmit = e => {
  e.preventDefault()

  if(!email){
    alert("please enter the Email");
  }
  console.log(email);
};
   
const formSwitcher = frmType =>{
  setfrmload(frmType);
}

  return (
    <div className="entry-page bg-info">
        
     <Card className='form-box'>
      {frmload === 'login' &&(
       <LoginForm handleOnchange={handleOnchange}
        handleOnChange={handleOnchange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        password={password}
       />)}
       {frmload === 'reset' &&(
       <ResetPassword handleOnchange={handleOnchange}
        handleOnChange={handleOnchange}
        handleOnResetSubmit={handleOnResetSubmit}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
       />)}
     </Card>
         
    </div>
  );
};
