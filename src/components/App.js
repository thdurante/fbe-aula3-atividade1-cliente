import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import ListaFuncionarios from './ListaFuncionarios';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/funcionarios' exact component={ListaFuncionarios} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
