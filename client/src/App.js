import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './components/SignUp';
import Game from './pages/Game';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/game" component={Game}/>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
