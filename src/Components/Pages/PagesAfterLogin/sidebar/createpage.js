import React from "react";
import { useState } from "react";
import css from './mainpage.module.css'
import Data from './deptdet.json'
import Data1 from './userdet.json'
import './mainpage.css'
import { MDBInput,}from 'mdb-react-ui-kit';
import DeptAdminpopup from './popups/deptadmin'
import TeanAdminpopup from './popups/teanadmin'
import DeptUserpopup from './popups/deptuser'
import TeanUserpopup from './popups/teanuser'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Mainpage(props){


    const [showPopup, setShowPopup] = useState(false);
    

    

    return (
      <>
        <h4 className={css.head}>
          {props.title} {props.title1}
        </h4>
        <hr className="hr"></hr>
        <div className="icon-wrapper">
          <h5 className="admins">
            {props.title1}
            <FontAwesomeIcon
              icon={faPlus}
              className="icon-add"
              onClick={() => setShowPopup(true)}
            />
            {/*create popup show here */}
            {props.title === "Department" && props.title1 === "Admin" ? 
              <>
                <DeptAdminpopup
                  show={showPopup}
                  status="Create"
                  onClose={() => setShowPopup(false)}
                  titlee={props.title}
                  
                />
              </>
              :props.title==="Department" && props.title1==="User" ?
              <>
              <DeptUserpopup
                  show={showPopup}
                  status="Create"
                  onClose={() => setShowPopup(false)}
                  titlee={props.title}
                />
              </>
              :props.title==="Teanut" && props.title1==="Admin" ?
              <>
              <TeanAdminpopup
                  show={showPopup}
                  status="Create"
                  onClose={() => setShowPopup(false)}
                  titlee={props.title}
                />
              </>
              :props.title==="Teanut" && props.title1==="User" ?
              <>
              <TeanUserpopup
                  show={showPopup}
                  status="Create"
                  onClose={() => setShowPopup(false)}
                  titlee={props.title}
                />
              </>
              
              :<></>
             
             }

          </h5>
          <Searchbar />
        </div>
        <hr className="hr1"></hr>
        <Admins title={props.title} title1={props.title1} />
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
        <ul className="ul">
          {props.title1 === "Admin" ? (
            <>
              <li className="aid">
                <p style={{ fontWeight: "500" }}>ID</p>
              </li>
              <li className="dnamee">
                <p style={{ fontWeight: "500" }}>{props.title} Name</p>
              </li>
            </>
          ) : props.title1 === "User" ? (
            <>
              <li className="id">
                <p style={{ fontWeight: "500" }}>ID</p>
              </li>
            <li className="dn">
              <p style={{ fontWeight: "500" }}>{props.title1} Name</p>
            </li>
            </>
          ) : (
            <></>
          )}

          {props.title1 === "Admin" ? (
            <>
              <li className="usr">
                <p style={{ fontWeight: "500" }}>Users</p>
              </li>
              <li className="doca">
                <p style={{ fontWeight: "500" }}>Date of Creation</p>
              </li>
            </>
          ) : props.title1 === "User" ? (
            <>
              <li className="dnn">
                <p style={{ fontWeight: "500", marginLeft: "10px" }}>
                  {props.title} Name
                </p>
              </li>
              <li className="dnic">
                <p style={{ fontWeight: "500", marginLeft: "10px" }}>NIC</p>
              </li>
              <li className="du">
                <p style={{ fontWeight: "500", marginLeft: "40px" }}>
                  Date of Birth
                </p>
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
          {Data.map((item, index) => (
            <>
              <div key={item.title} className={css.cont}>
                <ul className={css.ul}>
                 
                  {props.title1 === "Admin" ? (
                    <>
                     <li>
                    <p className={css.id} key={item.id}>
                      {item.id}
                    </p>
                  </li>
                      <li>
                        <p className={css.dnamee} key={item.id}>
                          {item.deptname}
                        </p>
                      </li>

                      <li>
                        <p className={css.nusr} key={item.id}>
                          {item.Users}
                        </p>
                      </li>
                      <li>
                        <p className={css.ndoc} key={item.id}>
                          {item.DOC}
                        </p>
                      </li>
                      <li>
                        
                      </li>

                      <li>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={css.icndlt1}
                      onClick={() => setShowPopup1(true)}
                    />
                    <ResetConfirmationPopup
                      show={showPopup1}
                      onClose={() => setShowPopup1(false)}
                      content="Deleted Successfully !"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className={css.icnedit1}
                      onClick={() => setShowPopup2(true)}
                    />
                    {props.title === "Department" &&
                    props.title1 === "Admin" ? (
                      <>
                        <DeptAdminpopup
                          show={showPopup2}
                          status="Edit"
                          onClose={() => setShowPopup2(false)}
                          titlee={props.title}
                        />
                      </>
                    ) : props.title === "Department" &&
                      props.title1 === "User" ? (
                      <>
                        <DeptUserpopup
                          show={showPopup2}
                          status="Edit"
                          onClose={() => setShowPopup2(false)}
                          titlee={props.title}
                        />
                      </>
                    ) : props.title === "Teanut" && props.title1 === "Admin" ? (
                      <>
                        <TeanAdminpopup
                          show={showPopup2}
                          status="Edit"
                          onClose={() => setShowPopup2(false)}
                          titlee={props.title}
                        />
                      </>
                    ) : props.title === "Teanut" && props.title1 === "User" ? (
                      <>
                        <TeanUserpopup
                          show={showPopup2}
                          status="Edit"
                          onClose={() => setShowPopup2(false)}
                          titlee={props.title}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </li>
                    </>
                  ) : props.title1 === "User" ? (
                    <>
                     <li>
                    <p className={css.uid} key={item.id}>
                      {item.id}
                    </p>
                  </li>
                      <li>
                        <p className={css.nme} key={item.id}>
                          {Data1[index].name}
                        </p>
                      </li>

                      <li>
                        <p className={css.deptt} key={item.id}>
                          {Data1[index].dept}
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
                      <li>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={css.icndlt}
                      onClick={() => setShowPopup1(true)}
                    />
                    <ResetConfirmationPopup
                      show={showPopup1}
                      onClose={() => setShowPopup1(false)}
                      content="Deleted Successfully !"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className={css.icnedit}
                      onClick={() => setShowPopup2(true)}
                    />
                    {props.title === "Department" &&
                    props.title1 === "Admin" ? (
                      <>
                        <DeptAdminpopup
                          show={showPopup2}
                          status="Edit"
                          onClose={() => setShowPopup2(false)}
                          titlee={props.title}
                        />
                      </>
                    ) : props.title === "Department" &&
                      props.title1 === "User" ? (
                      <>
                        <DeptUserpopup
                          show={showPopup2}
                          status="Edit"
                          onClose={() => setShowPopup2(false)}
                          titlee={props.title}
                        />
                      </>
                    ) : props.title === "Teanut" && props.title1 === "Admin" ? (
                      <>
                        <TeanAdminpopup
                          show={showPopup2}
                          status="Edit"
                          onClose={() => setShowPopup2(false)}
                          titlee={props.title}
                        />
                      </>
                    ) : props.title === "Teanut" && props.title1 === "User" ? (
                      <>
                        <TeanUserpopup
                          show={showPopup2}
                          status="Edit"
                          onClose={() => setShowPopup2(false)}
                          titlee={props.title}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </li>
                    </>
                  ) : (
                    <></>
                  )}

                  
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


