import React from 'react'
import css from './rightpage.module.css'
import Deptlogin from '../../PagesBeforeLogin/deptadmin'
import Pendingreq from './pendingreq'
import SADefault from './sadefault'
import Deptadmin from './deptadmin'
import Teanadmin from './teanadmin'
import Dashboard from '../dashboard'
import Deptuser from './deptuser'
import Teanuser from './teanuser'
import Settings from './settings'
import RegForm from './regform'
import Status from './status'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import sadefault from './sadefault'
import Nopage from './nopage'






export default function Rightpage(props) {
  
  return (
    <>
    
    <div className={css.shape}>
     {props.title==='Super Admin' ? 
     <>
     <Router>
      <Switch>
        <Route exact path='/sadashboard/' component={SADefault}/>
        <Route path="/sadashboard/defaultpage"  component={SADefault} />
        <Route path="/sadashboard/deptuser"  component={Deptuser} />
        <Route path="/sadashboard/teanuser"  component={Teanuser} />
        <Route path="/sadashboard/deptadm"  component={Deptadmin} />
        <Route path="/sadashboard/teanadm"  component={Teanadmin} />
        <Route path="/sadashboard/pendingreq"  component={Pendingreq} />
        <Route path="/sadashboard/settings"  component={Settings} />

      </Switch>
      </Router>
     </>
     :props.title==='Department Admin' ?
     <>
     <Router>
      <Switch>
        <Route exact path='/dadashboard/' component={Deptuser}/>
        <Route path='/dadashboard/deptusers' component={Deptuser}/>
        <Route path="/dadashboard/pendingreq"  component={Pendingreq} />
        <Route path="/dadashboard/settings"  component={Settings} />

      </Switch>
      </Router>
     </>
     :props.title==='Teanut Admin' ?
     <>
     <Router>
      <Switch>
      <Route exact path='/tadashboard/' component={Teanuser}/>
        <Route path='/tadashboard/deptusers' component={Teanuser}/>
        <Route path="/tadashboard/pendingreq"  component={Pendingreq} />
        <Route path="/tadashboard/settings"  component={Settings} />

      </Switch>
      </Router>
     </>
     :props.title==='Teanut User' ?
     <>
     <Router>
      <Switch>
        <Route exact path='/tudashboard/' component={RegForm}/>
        <Route path='/tudashboard/regtu' component={RegForm}/>
        <Route path="/tudashboard/pendingreq"  component={Pendingreq} />
        <Route path="/tudashboard/settings"  component={Settings} />
        <Route path="/tudashboard/status"  component={Status} />
      </Switch>
      </Router>
     </>
     :props.title ==='Department User' ?
     <>
     <Router>
      <Switch>
        <Route exact path='/dudashboard/' component={RegForm}/>
        <Route path='/dudashboard/regtu' component={RegForm}/>
        <Route path="/dudashboard/pendingreq"  component={Pendingreq} />
        <Route path="/dudashboard/settings"  component={Settings} />
        <Route path="/dudashboard/status"  component={Status} />
      </Switch>
      </Router>
     </>
     :<></> 
    }
      
    </div>
    </>
  )
}
