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
    <Pendingrequestssa />
    <Settingssa />
    </>
    :props.title==="Department Admin" ?
    <>
    <DeptUsers/>
    <Pendingrequestsda />
    <Settingsda />
    </>
    :props.title==="Teanut Admin" ?
    <>
    <TeanUsers/>
    <Pendingrequeststa />
    <Settingsta />
    </>
    :props.title==="Department User" ?
    <>
    <RegistrationFormdu/>
    <Statusdu/>
    <Settingsdu />
    </>
  :props.title ==="Teanut User" ?
  <>
  <RegistrationFormtu/>
  <Statustu/>
  <Settingstu />
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

function RegistrationFormdu(){
  const title="Registration Form";
  return(
    <>
    <a href='/dudashboard/regtu'><Label icon={regicon} title={title}></Label></a>
    </>
  );
}
function RegistrationFormtu(){
  const title="Registration Form";
  return(
    <>
    <a href='/tudashboard/regtu'><Label icon={regicon} title={title}></Label></a>
    </>
  );
}
function Statusdu(){
  const title="Status";
  return(
    <>
    <a href='/dudashboard/status'><Label icon={statusicon} title={title}/></a>
    </>
  );
}
function Statustu(){
  const title="Status";
  return(
    <>
    <a href='/tudashboard/status'><Label icon={statusicon} title={title}/></a>
    </>
  );
}

function DeptUsers() {
  const title = "Department Users";
  
  return (
    <>
      <a href='/dadashboard/deptusers'><Label icon={usricon} title={title}  /></a>
    </>
  );
}
function TeanUsers() {
  const title = "Teanut Users";
  
  return (
    <>
      <a href='/tadashboard/deptusers'><Label icon={usricon} title={title}  /></a>
    </>
  );
}

function Pendingrequestssa() {
  const title = "Pending Requests";
  return (
    <>
   
    <a href='/sadashboard/pendingreq'><Label icon={pendingicon} title={title} /></a>
   
    </>
  );
}
function Pendingrequestsda() {
  const title = "Pending Requests";
  return (
    <>
   
    <a href='/dadashboard/pendingreq'><Label icon={pendingicon} title={title} /></a>
   
    </>
  );
}
function Pendingrequeststa() {
  const title = "Pending Requests";
  return (
    <>
   
    <a href='/tadashboard/pendingreq'><Label icon={pendingicon} title={title} /></a>
   
    </>
  );
}
function Settingssa() {
  const title = "Settings";
  return (
    <>
      <a href='/sadashboard/settings'><Label icon={settingsicon} title={title} /></a>
    </>
  );
}
function Settingsda() {
  const title = "Settings";
  return (
    <>
      <a href='/dadashboard/settings'><Label icon={settingsicon} title={title} /></a>
    </>
  );
}
function Settingsta() {
  const title = "Settings";
  return (
    <>
      <a href='/tadashboard/settings'><Label icon={settingsicon} title={title} /></a>
    </>
  );
}
function Settingsdu() {
  const title = "Settings";
  return (
    <>
      <a href='/dudashboard/settings'><Label icon={settingsicon} title={title} /></a>
    </>
  );
}
function Settingstu() {
  const title = "Settings";
  return (
    <>
      <a href='/tudashboard/settings'><Label icon={settingsicon} title={title} /></a>
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
            <a href='/sadashboard/deptadm'><li><p className={css.opt1}>Department Admin</p></li></a>
          </ul>
        </div>
        <div className={css.label}>
          <ul className={css.ul2}>
            <li><img className={css.subicon} src={teanicon} alt="teanicon"/></li>
            <a href='/sadashboard/teanadm'><li><p className={css.opt1}>Teanut Admin</p></li></a>
          </ul>
        </div>
      </>
    ) : props.title === "Users" ? (
      <>
        <div  className={css.label}>
          <ul className={css.ul2}>
            <li><img className={css.subicon} src={depticon} alt="depticon"/></li>
            <a href='/sadashboard/deptuser'><li><p className={css.opt1}>Department User</p></li></a>
          </ul>
        </div>
        <div  className={css.label}>
          <ul className={css.ul2}>
            <li><img className={css.subicon} src={teanicon} alt="teanicon"/></li>
            <a href='/sadashboard/teanuser'><li><p className={css.opt1}>Teanut User</p></li></a>
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


