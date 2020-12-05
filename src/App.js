import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Navbar/Home';
import Restaurant from './components/Navbar/Restaurant';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Footer from './components/Footer';
import Food from './components/Navbar/food';
import Gridlist from './components/Navbar/grid';
import Carosel from './components/Navbar/carosel';
import Grid2 from './components/Navbar/grid2';
import Example from './components/Navbar/example';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 
  
  return (
    <div className="App">
        <Nav/>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/Restaurant" component={Restaurant}/> 
        <Route exact path="/About" component={About} /> 
        <Route exact path="/Contact" component={Contact} /> 
        <Route exact path="/food" component={Food} />
        <Route exact path="/free-Demo" component={Grid2} />
        <Route exact path="/Ex" component={Example} />
       </Switch>     
<Footer/>
</div>
  );
}
export default App;
