import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Details from "./Components/Details/Details";
import Admin from "./Components/Admin/Admin/Admin";
import BuyBook from "./Components/BuyBook/BuyBook/BuyBook";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Admin">
          <Admin></Admin>
        </Route>
        <Route path="/details/:id">
          <Details></Details>
        </Route>
        <Route path="/buyBook/:id">
          <BuyBook></BuyBook>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
