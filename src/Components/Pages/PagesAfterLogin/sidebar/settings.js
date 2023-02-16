import css from './settings.module.css'
import React, { useState } from "react";
import './settings.css';
import "./ResetConfirmationPopup.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  
  MDBInput,
}
from 'mdb-react-ui-kit';



export default function Settings(props){


    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);

    const conte="Signed Out";
    return(
        <>
        <div>
        <h3 className={css.head}>SETTINGS</h3>
        </div>
        <div>
            <ul>
            <li className={css.ul}><p className={css.line1}>Change username or Password </p></li>
            <li><button className={css.button} onClick={() => setShowPopup(true)}>Change</button></li>
            <Popup show={showPopup} onClose={() => setShowPopup(false)} />
            </ul>
            <div>
           


            <p className={css.line2}>Sign out<button className={css.button1} onClick={() => setShowPopup1(true)}>Sign out</button></p>
            <ResetConfirmationPopup show={showPopup1} onClose={() => setShowPopup1(false)} content={conte}/>
            </div>
        </div>
        
        </>
    );
}


const Popup = ({ show, onClose }) => {


    const [showPopup, setShowPopup] = useState(false);

    const conte="Password Changed Successfully";
    return (
      show && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3 className="popup-header">RESET</h3>
            <p style={{color:"#000", marginBottom:"4px", marginLeft:"80px"}}>Date of Birth</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" > </MDBInput>
            <p style={{color:"#000", marginBottom:"4px", marginLeft:"80px"}}>Password</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='password' type='password' size="md"></MDBInput>

            <button className="popup-close-button"  onClick={onClose}>
              Close
            </button>
            
            <button className="popup-save-button" onClick={() => setShowPopup(true)}>
              Save
            </button>
            <ResetConfirmationPopup show={showPopup} onClose={() => setShowPopup(false)} content={conte}/>
          </div>
        </div>
      )
    );
  };

  const ResetConfirmationPopup = ({ show, onClose, content }) => {
    
  
    return (
      <div>
       
        {show && (
          <div className="popup1">
            <div className="popup-content1">
              <div className="check-icon1">
                <i className="fa fa-check"></i>
              </div>
              <h6 style={{color:"#000"}}>{content}</h6>
              <button onClick={onClose} className="button-ok">Ok</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  

  