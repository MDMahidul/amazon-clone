import React from 'react';
import './App.css';
import Header from "./component/Header";
import Home from "./component/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from "./component/Checkout";

function App() {
  return (
      //BEM
   <Router>
       <div className="App">
           {/* Header */}
           <Header/>
          <Switch>
              <Route path="/checkout" >
                  <Checkout/>
              </Route>
              <Route path="/" >
                  {/* Home */}
                  <Home/>
              </Route>
          </Switch>
       </div>
   </Router>
  );
}

export default App;
