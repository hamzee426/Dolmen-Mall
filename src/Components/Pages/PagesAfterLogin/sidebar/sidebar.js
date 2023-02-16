import React from 'react';
import "./sidebar.css";
import css from "./sidebar.module.css";
import admin from "../Navbar/utils/admin.png";
import adicon from "./utils/admin.png";
import plus from "./utils/plus.png";
import depticon from "./utils/department.png";
import teanicon from "./utils/teanut.png";
import usricon from './utils/user.png'
import pendingicon from './utils/pending.png'
import regicon from './utils/reg.png'
import statusicon from './utils/status.png'
import settingsicon from "./utils/settings.png";


export default function sidebar(props) {
  return (
    <>
      <div className={css.sidebar}>
        <Accounttitle title={props.title}/>
        <Options title={props.title}/>
      </div>
    </>
  );
}

function Accounttitle(props) {
  return (
    <>
      <div className={css.margin}>
        <div className={css.fulltag}>
          <img className={css.admin} src={admin} alt="admincon" />
          <ul className={css.ul}>
            <p className={css.usrname}>HAMZA HUSSAIN</p>
            <p className={css.acctitle}>{props.title}</p>
          </ul>
        </div>
      </div>
    </>
  );
}

function Options(props) {
  return (
    <>
    {props.title ==="Super Admin" ? 
    <>
    <Admin />
    <Users />
    <Pendingrequests />
    <Settings />
    </>
    :props.title ==="Department Admin" || props.title ==="Teanut Admin" ? 
    <>
    {props.title==="Department Admin" ? <DeptUsers/> :props.title==="Teanut Admin" ? <TeanUsers/> : <></>}
    <Pendingrequests />
    <Settings />
    </>
  :props.title ==="Department User" || props.title ==="Teanut User" ?
  <>
  <RegistrationForm/>
  <Status/>
  <Settings />
  </>
  :
  <></>}
      
    </>
  );
}

function Admin() {
  const title = "Admins";
  
  return (
    <>
      <Label icon={adicon} title={title} addicon={plus}/>
    </>
  );
}

function Users() {
  const title = "Users";
  
  return (
    <>
      <Label icon={usricon} title={title} addicon={plus} />
    </>
  );
}

function RegistrationForm(){
  const title="Registration Form";
  return(
    <>
    <Label icon={regicon} title={title}></Label>
    </>
  );
}
function Status(){
  const title="Status";
  return(
    <>
    <Label icon={statusicon} title={title}/>
    </>
  );
}
function DeptUsers() {
  const title = "Department Users";
  
  return (
    <>
      <Label icon={usricon} title={title}  />
    </>
  );
}
function TeanUsers() {
  const title = "Teanut Users";
  
  return (
    <>
      <Label icon={usricon} title={title}  />
    </>
  );
}

function Pendingrequests() {
  const title = "Pending Requests";
  return (
    <>
   
    <a href='/dashboard/pendingreq'><Label icon={pendingicon} title={title} /></a>
   
    </>
  );
}

function Settings() {
  const title = "Settings";
  return (
    <>
      <a href='/dashboard/settings'><Label icon={settingsicon} title={title} /></a>
    </>
  );
}

function Label(props) {
  const [showToggleScreen, setShowToggleScreen] = React.useState(false);

  const handleAddIconClick = () => {
    setShowToggleScreen(!showToggleScreen);
  };

  return (
    <>
      <div className={css.label}>
        <ul className={css.ul2}>
          <div>
            <li>
              <img className={css.mainicon} src={props.icon} alt="icons" />
            </li>
          </div>
          {props.title === "Admin" || props.title === "User" ? (
            <div>
              <li>
                <p className={css.opttitle}>{props.title}</p>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <p className={css.opttitle}>{props.title}</p>
              </li>
            </div>
          )}
          {props.title !== "Pending Requests" &&
          (props.title!=="Registration Form" &&
          (props.title!=="Department Users" &&
          (props.title!=="Teanut Users" &&
          (props.title!=="Status" &&
            (props.title !== "Settings" && (
              <div>
                <li>
                  <img
                    className={css.plusicon}
                    src={props.addicon}
                    alt="icons"
                    onClick={handleAddIconClick}
                  />
                </li>
              </div>
            ))))))}
            
        </ul>
      </div>
      {showToggleScreen && (
  <div>
    {props.title === "Admins" ? (
      <>
        <div className={css.label}>
          <ul className={css.ul2}>
            <li><img className={css.subicon} src={depticon} alt="depticon"/></li>
            <a href='/dashboard/teanadm'><li><p className={css.opt1}>Department Admin</p></li></a>
          </ul>
        </div>
        <div className={css.label}>
          <ul className={css.ul2}>
            <li><img className={css.subicon} src={teanicon} alt="teanicon"/></li>
            <a href='/dashboard/teanadm'><li><p className={css.opt1}>Teanut Admin</p></li></a>
          </ul>
        </div>
      </>
    ) : props.title === "Users" ? (
      <>
        <div  className={css.label}>
          <ul className={css.ul2}>
            <li><img className={css.subicon} src={depticon} alt="depticon"/></li>
            <a href='/dashboard/deptuser'><li><p className={css.opt1}>Department User</p></li></a>
          </ul>
        </div>
        <div  className={css.label}>
          <ul className={css.ul2}>
            <li><img className={css.subicon} src={teanicon} alt="teanicon"/></li>
            <a href='/dashboard/teanuser'><li><p className={css.opt1}>Teanut User</p></li></a>
          </ul>
        </div>
      </>
    ) : (
      <></>
    )}
  </div>
)}

    </>
  );
}


