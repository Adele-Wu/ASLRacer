import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Register from './components/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path="/registeration" exact render={(props) => <Register />}/>
        <Route path="/" exact render={(props) => <Home />} />
      </Router> */}
      <Login/>
  
    </div>
  );
}

export default App;
