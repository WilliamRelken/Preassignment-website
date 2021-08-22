import Login from './Login';
import Home from './Home';
import Volunteers from './MngVo';
import Opportunities from './MngOp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddVolunteer from './AddVol';
import AddOpportunities from './AddOp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/Home">
            <Home/>
          </Route>
          <Route exact path="/Volunteers">
            <Volunteers/>
          </Route>
          <Route exact path="/Volunteers/add">
            <AddVolunteer/>
          </Route>
          <Route exact path="/Opportunities">
            <Opportunities/>
          </Route>
          <Route exact path="/Opportunities/add">
            <AddOpportunities/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
