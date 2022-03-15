import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './Components/Footer';
import Menu from '../src/pages/Menu.jsx';
import About from './pages/About';
import Contact from '../src/pages/Contact.jsx';
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
            <Route  path='/' exact component={Home}/>
            <Route path='/menu' exact component={Menu} />
            <Route path='/about' exact component={About} />
             <Route component={Contact} path='/contact' />
          </Switch>
          <Footer />
</Router>
    </div>
  );
}

export default App;
