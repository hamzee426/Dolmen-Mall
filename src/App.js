import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import TeanAdminPage from './Components/Pages/PagesBeforeLogin/teanadmin'
import HomePage from'./Components/Pages/initial_page'
import SuperAdminPage from './Components/Pages/PagesBeforeLogin/super_admin'
import DeptAdminPage from './Components/Pages/PagesBeforeLogin/deptadmin'
import DeptUsrPage from './Components/Pages/PagesBeforeLogin/deptuser'
import TeanUsrPage from './Components/Pages/PagesBeforeLogin/teanuser'
import Dashboardd from './Components/Pages/PagesAfterLogin/dashboard'
import Nopage from './Components/Pages/PagesAfterLogin/sidebar/nopage';

function PrivateRoute({component: Component,isAuthenticated,...rest}){
  return(
    <Route {...rest} render={(props) => {
      if (isAuthenticated) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/salogin" />;
      }
    }} />
  );
}


function App() {

 let isAuthenticated=true;



  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/salogin">
          <SuperAdminPage />
        </Route>
        <Route exact path="/dalogin">
          <DeptAdminPage />
        </Route>
        <Route exact path="/talogin">
          <TeanAdminPage />
        </Route>
        <Route exact path="/dulogin">
          <DeptUsrPage />
        </Route>
        <Route exact path="/tulogin">
          <TeanUsrPage />
        </Route>
       
        
        <PrivateRoute path="/sadashboard" component={()=><Dashboardd title="Super Admin"/>} isAuthenticated={isAuthenticated}></PrivateRoute>
        <PrivateRoute path="/dadashboard" component={()=><Dashboardd title="Department Admin"/>} isAuthenticated={isAuthenticated}></PrivateRoute>
        <PrivateRoute path="/tadashboard" component={()=><Dashboardd title="Teanut Admin"/>} isAuthenticated={isAuthenticated}></PrivateRoute>
        <PrivateRoute path="/dudashboard" component={()=><Dashboardd title="Department User"/>} isAuthenticated={isAuthenticated}></PrivateRoute>
        <PrivateRoute path="/tudashboard" component={()=><Dashboardd title="Teanut User"/>} isAuthenticated={isAuthenticated}></PrivateRoute>
        <Route exact path="/*"><Nopage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
