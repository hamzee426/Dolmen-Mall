import React from 'react'
import { useState } from 'react';
import css from '../../../Widgets/LoginForm.module.css'
import './mainpage.css'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
  
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function RegistrationForm(props)
{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [fname, setfname] = useState("");
  const [sname, setsname] = useState("");
  const [cnic, setcnic] = useState("");
  const [dob, setdob] = useState("");
  const [bg, setbg] = useState("");
  const [showpopup,setShowPopup]=useState(false);
  
  const handlelogin=()=>{
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }
 



  return(
    <>
<form >

    <MDBContainer>

<MDBRow className={css.rowfr}>

  <h1 style={{color:"#000", marginLeft:"50px", marginTop:"40px"}}>Registration Form</h1>
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
    {/* <h7>DOB</h7> */}
    <li><MDBInput className={css.label} wrapperClass='mb-4' placeholder='DOB' label='' id='DOB' type='text' size="lg" 
     value={dob}
     onChange={(event) => setdob(event.target.value)}
    > 
    </MDBInput></li>
    {/* <h7>BG</h7> */}
    <li><MDBInput className={css.label2} wrapperClass='mb-4' placeholder='Blood Group' label='' id='BG' type='text' size="lg" 
     value={bg}
     onChange={(event) => setbg(event.target.value)}
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
    <li><MyDropdown /></li>
    <li><button className={css.mdbbtnreg1} type="submit" onClick={handlelogin}>Sign in</button></li>
    <ResetConfirmationPopup show={showpopup}/>
    </ul>

   
  
      
    
    </div>
  </MDBCol>

</MDBRow>
</MDBContainer>
</form>
    </>
  );
}

const ResetConfirmationPopup = ({ show}) => {
  

  return (
    <div>
     
      {show && (
        <div className="popup1">
          <div className="popup-content1">
            <div className="check-icon1" style={{marginTop:"30px"}}>
              <i className="fa fa-check"></i>
            </div>
            <h6 style={{color:"#808080", fontWeight:"400", fontSize:"19px"}}>Registered !!</h6>
          
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
          <DropdownToggle caret className='inp12'>
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
