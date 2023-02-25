import { MDBInput,}from 'mdb-react-ui-kit';
import React from "react";
import { useState } from "react";
import css from '../mainpage.module.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



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
          <div className={css.content}>
            {status==="Create" ?
            <>
             <h3 className={css.header}>Create Department User</h3>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>User Name</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" placeholder='Name'> </MDBInput>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>CNIC</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" placeholder='CNIC'> </MDBInput>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>Date Of Birth</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='password' type='password' size="md" placeholder='dd-mm-yy'></MDBInput>
            <MyDropdown />
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>Email</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" placeholder='Email'> </MDBInput>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>Password</p>
            <MDBInput className='inp' style={{marginBottom:"-45px"}} wrapperClass='mb-4' label='' id='password' type='password' size="md" placeholder='Password'></MDBInput>
            
            </>
            :status==="Edit" ?
            <>
             <h3 className={css.header}>Edit Department User</h3>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>{titlee} Name</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" value="abc"> </MDBInput>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>{titlee} Admin</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md"value="abc" > </MDBInput>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>Date Of Birth</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='password' type='password' size="md" value='abc'></MDBInput>
            <MyDropdown />
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>Email</p>
            <MDBInput className='inp' wrapperClass='mb-4' label='' id='DOB' type='DOB' size="md" value="abc"> </MDBInput>
            <p style={{color:"#000",fontWeight:"400",fontSize:"17px", marginBottom:"4px", marginLeft:"80px"}}>Password</p>
            <MDBInput className='inp' style={{marginBottom:"-45px"}} wrapperClass='mb-4' label='' id='password' type='password' size="md" value="abc"></MDBInput>
            </>
            :<></>    
        }
           
            <button className={css.clsbtnu}  onClick={onClose}>
              Close
            </button>
            
            <button className={css.savebtnu} onClick={() => setShowPopup(true)}>
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
  
  
  
  
  class MyDropdown extends React.Component {
    

    constructor(props) {
      super(props);
      this.state = {
        dropdownOpen: false,
        selectedItem: null
      };
      this.toggle = this.toggle.bind(this);
      this.onItemClick = this.onItemClick.bind(this);
    }
  
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
  
    onItemClick(item) {
      this.setState({
        selectedItem: item,
        dropdownOpen: false
      });
    }
  
    render() {
      
      const { selectedItem } = this.state;
  
      return (
        <div>
          
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret className='inp1'>
              {selectedItem || 'Select Department'}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.onItemClick('Teanut 1')}>
                Department 1
              </DropdownItem>
              <DropdownItem onClick={() => this.onItemClick('Teanut 2')}>
              Department 2
              </DropdownItem>
              <DropdownItem onClick={() => this.onItemClick('Teanut 3')}>
              Department 3
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    }
  }
  