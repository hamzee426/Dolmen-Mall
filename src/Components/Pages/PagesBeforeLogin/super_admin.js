import React from 'react'
import LoginForm from '../../Widgets/LoginForm'
import { useState } from 'react'
import Navbar from '../../Widgets/Navbar'
import '../../Widgets/LoginForm'
import logindata from './utils/login.json'
import image from '../../graphics/Admin.svg'
import css from '../../Widgets/LoginForm.module.css'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
}
from 'mdb-react-ui-kit';


export default function Super_admin() {
 
  const [userData, setUserData] = useState(null);

  

  const handlesubmit=()=>{
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setShowRegister(false);
    }, 900);
   
  }

  
  const titleadmin="SUPER ADMIN";
  const subimagealt="SuperAdminImage"
  
  const [showRegister, setShowRegister] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar/>

      {showRegister ? (
        <>
        <RegistrationForm title={titleadmin} imagesrc={image} imagealt={subimagealt}/>
        <button className={css.mdbbtnreg} type="submit" onClick={handlesubmit}>Register</button>
        <ResetConfirmationPopup show={showPopup} content="Registered"/>
          
        </>
      ) : (
        <div>
          <LoginForm title={titleadmin} imagesrc={image} imagealt={subimagealt}/>
          <button className={css.mdbbtnreg} type="submit" onClick={() => setShowRegister(true)}>Register new Admin</button>
          
        </div>
      )}


      
    </>
  )

 
}




function RegistrationForm(props)
{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [fname, setfname] = useState("");
  const [sname, setsname] = useState("");
  const [cnic, setcnic] = useState("");
 
  
  
 
  return(
    <>
<form >

    <MDBContainer>

<MDBRow className={css.row}>

  <MDBCol col='10' md='6'>
    <img src={props.imagesrc} class={css.sideimage} alt={props.imagealt} />
    
  </MDBCol>

  <MDBCol col='4' md='6'>
      <div className={css.mdbcol}>
     <h1 className={css.title}>{props.title}</h1>
     <ul className={css.ul}>
     {/* <h7>First Name</h7> */}
    <li><MDBInput className={css.label} wrapperClass='mb-4' placeholder='First Name' label='' type='firstname' size="lg" 
     value={fname}
     onChange={(event)=>setfname(event.target.value)
      
    }
    > 
    </MDBInput></li>
    {/* <h7>Second Name</h7> */}
    <li><MDBInput className={css.label2} wrapperClass='mb-4' placeholder='Second Name' label=''  type='secondname' size="lg" 
     value={sname}
     onChange={(event) => setsname(event.target.value)}
    > 
    </MDBInput></li>
    </ul>
    <ul className={css.ul}>
    {/* <h7>Email</h7> */}
    <li><MDBInput className={css.label} wrapperClass='mb-4' placeholder='Email' label='' id='email' type='email' size="lg" 
     value={email}
     onChange={(event) => setEmail(event.target.value)}
    > 
    </MDBInput></li>
    {/* <h7>CNIC</h7> */}
    <li><MDBInput className={css.label2} wrapperClass='mb-4' placeholder='CNIC' label='' id='cnic' type='cnic' size="lg" 
     value={cnic}
     onChange={(event) => setcnic(event.target.value)}
    > 
    </MDBInput></li>
    </ul>
    
    <ul className={css.ul}>
    {/* <h7>Password</h7> */}
   
   <li> <MDBInput wrapperClass='mb-4' className={css.label} label='' placeholder='Password' type='password' size="lg"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    ></MDBInput></li>
     {/* <h7>Confirm Password</h7> */}
    <li><MDBInput wrapperClass='mb-4' className={css.label2} label='' placeholder='Confirm Password' type='password' size="lg"
    value={cpassword}
    onChange={(event) => setcPassword(event.target.value)}
    ></MDBInput></li>
    </ul>

   
  
      
    
    </div>
  </MDBCol>

</MDBRow>
</MDBContainer>
</form>
    </>
  );
}

const ResetConfirmationPopup = ({ show, content }) => {
  

  return (
    <div>
     
      {show && (
        <div className="popup1">
          <div className="popup-content1">
            <div className="check-icon1" style={{marginTop:"30px"}}>
              <i className="fa fa-check"></i>
            </div>
            <h6 style={{color:"#808080", fontWeight:"400", fontSize:"19px"}}>{content}</h6>
          
          </div>
        </div>
      )}
    </div>
  );
};
