import { MDBInput,}from 'mdb-react-ui-kit';
import React from "react";
import { useState } from "react";
import css from '../mainpage.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";



export default function Popup  ({ show, onClose,titlee,status })  {


    const [showPopup, setShowPopup] = useState(false);
    let conte="";
    if (status==="Create") {
       conte="Created";
    }
    else if(status==="Edit"){
       conte="Edited";
    }
    
    return (
      
      show && (
        <>
        
        <div className={css.overlay}>
          <div className={css.contenta}>
           
            {status==="Create" ?
            <>
            <h3 className={css.header}>Create Teanut</h3>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>{titlee} Name</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" placeholder='Name'> </MDBInput>
            
            </>
            :status==="Edit" ?
            <>
            <h3 className={css.header}>Edit Teanut</h3>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>{titlee} Name</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" value='I am --- Teanut'> </MDBInput>
            
            </>
            :<></>
            
            
            }
           
            <button className={css.clsbtn}  onClick={onClose}>
              Close
            </button>
            
            <button className={css.savebtn} onClick={() => setShowPopup(true)}>
              {status}
            </button>
            <ResetConfirmationPopup show={showPopup} onClose={()=>setShowPopup(false)} content={conte}/>
          </div>
        </div>
       
        </>
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
              <button onClick={onClose} className="button-ok">ok</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  
  