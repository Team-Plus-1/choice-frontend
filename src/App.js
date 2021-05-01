import React from "react";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Navbar from "./components/Navbar";
import ReportPage from "./pages/ReportPage";
import LandingPage from "./pages/LandingPage";
import SeeReportPage from "./pages/SeeReportPage";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={LandingPage} />
            <PrivateRoute exact path="/report" component={ReportPage} />
            <PrivateRoute exact path="/seereport" component={SeeReportPage} />
            <PrivateRoute exact path="/profile" component={ProfilePage} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
