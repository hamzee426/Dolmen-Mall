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

function PrivateRoute({component: Component,isAuthenticated,...rest}){

  return(
    <Route {...rest} render={(props) => {
      if (isAuthenticated) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/tulogin" />;
      }
    }} />
  );
}

 

function App() {
  const isAuthenticated = true;
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
        {/* <PrivateRoute exact path="/sadashboard" component={(props) => <Dashboardd title="Super Admin" {...props} />} isAuthenticated={isAuthenticated} />
        <PrivateRoute exact path="/dadashboard" component={(props) => <Dashboardd title="Department Admin" {...props} />} isAuthenticated={isAuthenticated} />
        <PrivateRoute exact path="/tadashboard" component={(props) => <Dashboardd title="Teanut Admin" {...props} />} isAuthenticated={isAuthenticated} />
        <PrivateRoute exact path="/dudashboard" component={(props) => <Dashboardd title="Department User" {...props} />} isAuthenticated={isAuthenticated} />
        <PrivateRoute exact path="/tudashboard" component={(props) => <Dashboardd title="Teanut User" {...props} />} isAuthenticated={isAuthenticated} /> */}
        <PrivateRoute path="/dashboard" component={()=><Dashboardd title="Super Admin"/>} isAuthenticated={isAuthenticated}></PrivateRoute>
         
      </Switch>
    </Router>
  );
}

export default App;
