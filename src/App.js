import React from 'react';
import './App.css';
import Mainfeed from './components/Mainfeed.js';
import Userfeed from './components/Userfeed.js';

import { HashRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1>Twatter-app</h1>
          </header>
          <Switch>
            <Route path="/" component={Mainfeed}/>
            <Route path="/:username" component={Userfeed}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
