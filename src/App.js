import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Solitaire from './solitaire.js';
import Deck from './deck.js';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">

          <Route exact path="/" component={Solitaire} />
          <Route path="/" component={Deck} />

        </div>
      </BrowserRouter>
    );
  }
}
export default App;