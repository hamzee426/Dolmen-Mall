import React from 'react';
import { useAuth } from 'react-use-auth';
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
import Sadefault from './Components/Pages/PagesAfterLogin/sidebar/sadefault';
import Pendingreq from './Components/Pages/PagesAfterLogin/sidebar/pendingreq';
import Settings from './Components/Pages/PagesAfterLogin/sidebar/settings';

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated,login,logout } = useAuth();

  return (
    
    <Route
    
      {...rest}
      render={({ location }) =>
      
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/salogin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
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
        <PrivateRoute path="/dashboard">
          <Dashboardd title="Super Admin" />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
