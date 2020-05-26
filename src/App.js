import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './Main';
import Artistes from './Artistes';
import Header from './Header';

import './sass/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <div class="container">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/artistes">
                <Artistes />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
