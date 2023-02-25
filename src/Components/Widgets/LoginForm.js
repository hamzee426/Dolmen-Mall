import React, { useState } from "react";
import css from './LoginForm.module.css'
import { useHistory } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logindata from '../Pages/PagesBeforeLogin/utils/login.json'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
}
from 'mdb-react-ui-kit';




export default function Login_Form(props) {

  

 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
 
    var path='';
    fetch(logindata)
    .then(data=>{
      let user="";
      if(props.title === "SUPER ADMIN"){ user = logindata.SA.find(user => user.username === username && user.password === password); path='/sadashboard'}
      if(props.title === "DEPARTMENT ADMIN"){ user = logindata.DA.find(user => user.username === username && user.password === password); path='/dadashboard'}
      if(props.title === "TEANUT ADMIN"){ user = logindata.TA.find(user => user.username === username && user.password === password); path='/tadashboard'}
      if(props.title === "DEPARTMENT USER"){ user = logindata.DU.find(user => user.username === username && user.password === password); path='/dudashboard'}
      if(props.title === "TEANUT USER"){ user = logindata.TU.find(user => user.username === username && user.password === password); path='/tudashboard'}
      
      if(user){
       
        setShowPopup2(true);
        setTimeout(() => {
          setShowPopup2(false);
          history.push(path); 
        }, 900);
      }
      else{
        
        setShowPopup1(true);
        setTimeout(() => {
          setShowPopup1(false);
          
        }, 900);
      }
    })
   
  };
    
    return (
<form >
    <MDBContainer>

      <MDBRow className={css.row}>

        <MDBCol col='10' md='6'>
          <img src={props.imagesrc} className={css.sideimage} alt={props.imagealt} />
        </MDBCol>

        <MDBCol className={css.heigh} col='4' md='6'>
            <div className={css.mdbcol}>
           <h1 className={css.title}>{props.title}</h1>
           <h6>Email address</h6>
          <MDBInput wrapperClass='mb-4' label='' id='email' type='text' name='username' size="lg" 
          value={username} 
          autoComplete="new-username"
          onChange={(event) => setUsername(event.target.value)} 
          
          > 
          </MDBInput>
          <h6>Password</h6>
          <MDBInput wrapperClass='mb-4' label='' id='password' type='password' name='password' size="lg"
          value={password} 
          autoComplete="new-password"
          onChange={(event) => setPassword(event.target.value)} 
          ></MDBInput>
          
          <button className={css.mdbbtn} type="submit" onClick={handleLogin}>Sign in</button>
          <ResetConfirmationPopup show={showPopup1} onClose={() => setShowPopup1(false)} />
          <ResetConfirmationPopup1 show={showPopup2} onClose={() => setShowPopup2(false)}/>
          </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  
    </form>

  );
}


const ResetConfirmationPopup = ({ show}) => {
  

  return (
    <div>
     
      {show && (
        <div className="popup1">
          <div className="popup-content1">
            <div className="check-icon1" style={{marginTop:"30px"}}>
              <i className="fa fa-multiply" style={{color:"red"}}></i>
            </div>
            <h6 style={{color:"#808080", fontWeight:"400", fontSize:"15px"}}>Invalid Username or Password</h6>
          
          </div>
        </div>
      )}
    </div>
  );
};

const ResetConfirmationPopup1 = ({ show}) => {
  

  return (
    <div>
     
      {show && (
        <div className="popup1">
          <div className="popup-content1">
            <div className="check-icon1" style={{marginTop:"30px"}}>
              <i className="fa fa-check"></i>
            </div>
            <h6 style={{color:"#808080", fontWeight:"400", fontSize:"15px"}}>Logged In</h6>
          
          </div>
        </div>
      )}
    </div>
  );
};