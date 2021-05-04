import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { SwipeableDrawer } from '@material-ui/core';

function App() {
  return (
    //BEM convention
    <Router>
    <div className="App">
     <Header />  
      <Switch>
        {/* Checkout route */}
        <Route path="/checkout">            
                 
          <Checkout/>
       </Route>
       {/* home /deafault */}
        <Route path="/">            
                    
          <Home />
       </Route>       
      </Switch>
    </div>
    </Router>
  );
}

export default App;
