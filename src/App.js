import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 

function App() {
  return (
   
    <div>

      <Router>
        <Switch>
        <Route path="/contact">
            <Header/>
            <Contact />
          </Route>  

        <Route path="/explore">
            <Header/>
            <Explore />
          </Route>  
          <Route path="/about">
            <Header/>
            <About />
          </Route>  
          <Route path="/">
            <Header/>
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  )
}

export default App;
