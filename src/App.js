import React, { Component } from 'react';
import './App.css';
//import {animals} from './animals';
import SearchBox from './SearchBox';
import CardList from './CardList.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';
class App extends Component {
  constructor(){
    super();
    this.state={
      animals: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  componentDidMount(){
    fetch('https://shielded-mountain-16033.herokuapp.com/')
    .then(res => res.json())
    .then(animals => this.setState({animals}));
  }

  render() {
    const filteredAnimals = this.state.animals.filter(
      animal =>{
        return animal.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact={true} path='/' render={() => (
              <div id='bg'>
                <h1 id='title'>Animals</h1>
                <p id='sTitle'>Learn about our Animal friends</p>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList animals={filteredAnimals}/>
                </div>
            )}/>
            <Route exact={true} path='/info' render={() => (
              <div id='bg'>
                <h1 id='title'>This is a website about the animals</h1>
                <h2 id='stitle'>You can learn more through <Link to="wiki-page">wikipedia</Link>
                </h2>
              </div>
            )}/>
            <Route path='/wiki-page' component={() => { window.location = 'https://en.wikipedia.org/wiki/Animal'; return null;} }/>
          </div>
        </BrowserRouter>
    </div>
    );
  }
}

export default App;
