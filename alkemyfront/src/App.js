import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homeComponent'
import AddRoute from './components/addComponent'
import NavComponent from './components/navComponent'

import './App.css';

function App() {
    return (
      <Router>
           <div className="App">
             <NavComponent />
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/add' component={AddRoute}></Route>
            </Switch>
          </div>
       </Router>
);
}
export default App;