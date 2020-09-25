import React from 'react';
import Create from './Create';
import AllDetail from './AllDetail';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Create}/>
      <Route path='/detail' component={AllDetail}/> 
    </Switch>
    </Router>
  );
}

export default App;
