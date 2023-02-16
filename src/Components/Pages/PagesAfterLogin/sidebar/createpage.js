import React from "react";
import { useState } from "react";
import css from './mainpage.module.css'
import Data from './deptdet.json'
import Data1 from './userdet.json'
import './mainpage.css'
import { MDBInput,}from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Mainpage(props){


    const [showPopup, setShowPopup] = useState(false);
    

    

    return(
        <>
        <h4 className={css.head}>{props.title} {props.title1}</h4>
        <hr className="hr"></hr>
        <div className="icon-wrapper">
          <h5 className="admins">
            {props.title1}
            <FontAwesomeIcon icon={faPlus} className="icon-add" onClick={() => setShowPopup(true)}/>
            <Popup show={showPopup} status="Create" onClose={() => setShowPopup(false)} titlee={props.title} />
            

          </h5>
          <Searchbar/>
        </div>
        <hr className="hr1"></hr> 
          <Admins title={props.title} title1={props.title1}/>
        </>
    );
}

function Admins(props){
  
  

  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetch(Data1)
      .then(response => response.json())
      .then(json => setData(json))
  }, []);


    return (
      <>
        {/* <div className="container"> */}
        <ul className="ul">
          <li className="id">
            <p style={{ fontWeight: "500" }}>ID</p>
          </li>
          {props.title1 === "Admin" ? (
            <li className="dn">
              <p style={{ fontWeight: "500" }}>{props.title} Name</p>
            </li>
          ) : props.title1 === "User" ? (
            <li className="dn">
              <p style={{ fontWeight: "500" }}>{props.title1} Name</p>
            </li>
          ) : (
            <></>
          )}

          {props.title1 === "Admin" ? (
            <>
              <li className="dn">
                <p style={{ fontWeight: "500" }}>Admin</p>
              </li>
              <li className="du">
                <p style={{ fontWeight: "500" }}>Users</p>
              </li>
              <li className="doc">
                <p style={{ fontWeight: "500" }}>Date of Creation</p>
              </li>
            </>
          ) : props.title1 === "User" ? (
            <>
              <li className="dn">
                <p style={{ fontWeight: "500",marginLeft:"10px" }}>NIC</p>
              </li>
              <li className="du">
                <p style={{ fontWeight: "500",marginLeft:"40px" }}>Date of Birth</p>
              </li>
              <li className="doc">
                <p style={{ fontWeight: "500" }}>Status</p>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <ul>
          
          {Data.map((item,index) => (
            
            <>
              <div key={item.title} className={css.cont}>
                <ul className={css.ul}>
                  <li>
                    <p className={css.id} key={item.id}>
                      {item.id}
                    </p>
                  </li>
                  {props.title1 === "Admin" ? (
                    <>
                      <li>
                        <p className={css.dn} key={item.id}>
                          {props.title}
                          {item.deptname}
                        </p>
                      </li>
                      <li>
                        <p className={css.da} key={item.id}>
                          {item.deptadmin}
                        </p>
                      </li>
                      <li>
                        <p className={css.usr} key={item.id}>
                          {item.Users}
                        </p>
                      </li>
                      <li>
                        <p className={css.doc} key={item.id}>
                          {item.DOC}
                        </p>
                      </li>
                    </>
                  ) : props.title1 === "User" ? (
                    <>
                    
                       <li>
                        <p className={css.nme} key={item.id}>
                          {Data1[index].name}
                        </p>
                      </li>
                      <li>
                        <p className={css.nicc} key={item.id}>
                          {Data1[index].NIC}
                        </p>
                      </li>
                      <li>
                        <p className={css.dobb} key={item.id}>
                          {Data1[index].DOB}
                        </p>
                      </li>
                      <li>
                        <p className={css.sts} key={item.id}>
                          {Data1[index].status}
                        </p>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}

                  <li>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={css.icndlt}
                      onClick={() => setShowPopup1(true)}
                    />
                    <ResetConfirmationPopup
                      show={showPopup1}
                      onClose={() => setShowPopup1(false)}
                      content="Deleted Successfully 
                    !"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className={css.icnedit}
                      onClick={() => setShowPopup2(true)}
                    />
                    <Popup
                      show={showPopup2}
                      title={props.title}
                      status="Edit"
                      onClose={() => setShowPopup2(false)}
                    />
                  </li>
                </ul>
              </div>
            </>
          ))}
        </ul>
        {/* </div> */}
      </>
    );
}

function Searchbar(){

    return(
        <>
       
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input"/>
    </div>
 
        </>
    );
}


const Popup = ({ show, onClose,titlee,status }) => {


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
        <div className={css.content}>
          <h3 className={css.header}>{status} {titlee}</h3>
          <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>{titlee} Name</p>
          <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" > </MDBInput>
          <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>{titlee} Admin</p>
          <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" > </MDBInput>
          <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>Username</p>
          <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" > </MDBInput>
          <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>Password</p>
          <MDBInput className='inp' wrapperClass='mb-4' label='' id='password' type='password' size="md"></MDBInput>

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
  const [showPopup, setShowPopup] = useState(false);

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


