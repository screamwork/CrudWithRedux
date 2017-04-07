import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import GamesPage from './GamesPage';
import GameForm from './GameForm';
import './App.css';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <ActiveLink className="item" activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink className="item" activeOnlyWhenExact to="/games" label="Games" />
          <ActiveLink className="item" activeOnlyWhenExact to="/games/new" label="Add New Game" />
        </div>

        <Route exact path="/games" component={GamesPage} />
        <Route path="/games/new" component={GameForm} />
        <Route path="/game/:_id" component={GameForm} />
      </div>
    );
  }
}

export default App;
