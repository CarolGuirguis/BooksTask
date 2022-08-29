import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Details from './Details';
import {BrowserRouter as Router,Routes,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookDetails/works/:id/:state" element={<Details/>}/>
        </Routes>
   </Router>
   
  );
}

export default App;
