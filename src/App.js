import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import Logout from './components/Logout';
import Postlist from './components/Postlist';
import Stylepage from './components/Stylepage';

class App extends Component {


render(){
  return(
    <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Admin" component={Admin} />
      <Route path="/Logout" component={Logout} />
    </Switch>
    {/* <Postlist/> */}
    {/* <Stylepage testprop={true}/> */}
    </div>
  )

}}

export default App;
