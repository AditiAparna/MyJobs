import "./App.css";
import React from "react";
import Login from "./Screens/login";
import SignUP from "./Screens/SignUP";
import Homepage from "./Screens/homepage";
import Profile from "./Screens/profile";
import PostAJob from "./Screens/PostAJob";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Screens/ForgotPassword";

function App() {
  // const [logState, setLogState] = useState(false);
  return (
    <div className="App">
      <div className="bottoBackground"></div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Homepage />} />
          <Route
            path="/login"
            exact
            component={() => (
              <Login/>
            )}
          />
          <Route path="/signup" exact component={() => <SignUP />} />
          <Route
            path="/forgotpassword"
            exact
            component={() => <ForgotPassword />}
          />
          <Route
            path="/profile"
            exact
            component={() => <Profile />}
          />
          <Route path="/postjob" exact component={() => <PostAJob />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
