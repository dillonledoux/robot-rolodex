import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response  => response.json())
      .then(users  => {this.setState({robots: users}); console.log(users)})
      .catch(err => console.log('Something went wrong'));
  }
  
  render() { 

    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return ( 
      <div className="App">
        <h1>Robot Rolodex</h1>
        <SearchBox
          placeholder='search robots'
          handleChange= {e => this.setState({ searchField: e.target.value })}
        />
        <CardList robots={ filteredRobots }/>
      </div>
    );
  }
}

export default App;
