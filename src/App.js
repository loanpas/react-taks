import React, { Component } from 'react';

import Navigation from './components/Navigation'
import './App.css';
import { tasks } from './tasks.json'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      tareas:tasks 
    }
  }

  render() { 
    const task = this.state.tareas.map((tareas, index) => {
      return(
        <div className="col-md-4"  key={index}>
          <div className="card mt-4">
            <div className="card-header">
              <h4>{tareas.title}</h4>
              <span className="badge badge-fill badge-danger ml-2">
                {tareas.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{tareas.description}</p>
              <p><mark>{tareas.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-warning">
                Delete
              </button>              
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation titulo="Aplicación de Tareas" numero={ this.state.tareas.length } />
        <div className="container">
          <div className="row mt-4">
            { task }
          </div>
        </div>        
      </div>
    );
  }
}
