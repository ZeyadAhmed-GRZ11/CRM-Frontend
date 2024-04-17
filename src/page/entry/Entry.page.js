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

    <div className="entry-page" >
     
     <Card style={{'padding': '10px 10px', 'margin':'40px 40px 40px 40px'}}>
      <Card.Title>What is Dern-Support?</Card.Title>
        <Card.Body>
          Dern-Support is a company specialized in hardware
           maintenance and providing technical support services
            for individuals and businesses. The company offers a
             wide range of services including repair and
              maintenance of computers, laptops, smartphones,
               tablets, and network devices.
        </Card.Body>
       </Card>

      <hr />
        
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
