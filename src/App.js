import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './Main';
import Artistes from './Artistes';
import Header from './Header';
import Artista from './Artista';

import './sass/App.scss';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <div className="container flex-column space-between">
            <Switch>
              <Route path="/artistes/:artistId">
                <Artista />
              </Route>
              <Route exact path="/artistes">
                <Artistes />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
