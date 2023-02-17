import React from 'react'
import Navbar from './Navbar/Navdash'
import Sidebar from './sidebar/sidebar'
import Rightpage from './sidebar/rightpage'
import css from '../PagesAfterLogin/dashboard.css'
 

export default function dashboard(props) {








  return (
   <>
   
    <div className="grid-container">
    <Navbar title={props.title}/>
      <div className="row">
        <div className="column">
        <Sidebar title={props.title}/>
        </div>
        <div className="column" >
        <Rightpage/>
        </div>
      </div>
    </div>

   </>
  )
}


