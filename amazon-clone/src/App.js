import React, {useEffect} from 'react';
import './App.css';
import Header from "./component/Header";
import Home from "./component/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
    const [{},dispatch] = useStateValue()

    useEffect(()=>{
        auth.onAuthStateChanged(authUser =>{
            console.log('The User Is >>>', authUser);

            if(authUser){
                //the user just logged in /the user was logged in
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })
            }else {
                //the user is logged out
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        })
    },[])

  return (
      //BEM
   <Router>
       <div className="App">
          <Switch>
              <Route path="/login" >
                  <Login/>
              </Route>
              <Route path="/checkout" >
                  {/* Header */}
                  <Header/>
                  <Checkout/>
              </Route>
              <Route path="/" >
                  {/* Header */}
                  <Header/>
                  {/* Home */}
                  <Home/>
              </Route>
          </Switch>
       </div>
   </Router>
  );
}

export default App;
