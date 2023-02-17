import React from 'react'
import css from './rightpage.module.css'
import Pendingreq from './pendingreq'
import SADefault from './sadefault'
import Deptadmin from './deptadmin'
import Teanadmin from './teanadmin'
import Dashboard from '../dashboard'
import Deptuser from './deptuser'
import Teanuser from './teanuser'
import Settings from './settings'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import sadefault from './sadefault'

export default function Rightpage(props) {
  
  return (
    <>
    
    <div className={css.shape}>
     
      <Router>
      <Switch>
        <Route exact path='/sadashboard/' component={SADefault}/>
        <Route path="/sadashboard/defaultpage"  component={SADefault} />
        <Route path="/dashboard/deptuser"  component={Deptuser} />
        <Route path="/dashboard/teanuser"  component={Teanuser} />
        <Route path="/dashboard/deptadm"  component={Deptadmin} />
        <Route path="/dashboard/teanadm"  component={Teanadmin} />
        <Route path="/dashboard/pendingreq"  component={Pendingreq} />
        <Route path="/dashboard/settings"  component={Settings} />
        
       
 
      </Switch>
      </Router>
    </div>
    </>
  )
}
