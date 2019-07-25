import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './views/navBar';
import List from './views/list';
import Story from './views/story';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <List />
        <Route path="/story/:id" exact component={Story} />
      </div>
    </div>
  );
}

export default App;
