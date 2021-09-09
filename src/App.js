import "./App.css";
import Login from "./Screens/login";
import SignUP from "./Screens/SignUP";
import Homepage from "./Screens/homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="bottoBackground"></div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Homepage />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <SignUP />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
