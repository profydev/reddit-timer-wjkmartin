import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
    </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Search() {
  return (
    <div>
      <h2>Search</h2>
    </div>
  )
}

export default App;
