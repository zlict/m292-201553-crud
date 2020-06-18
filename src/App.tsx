import React from 'react';
import { UsersContainer } from './containers/Users';
import { HelloContainer } from './containers/Hello';
import { UppercaseContainer } from './containers/Uppercase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/users'>
            <UsersContainer />
          </Route>
          <Route path='/hallo/:name'>
            <HelloContainer />
          </Route>
          <Route path='/uppercase'>
            <UppercaseContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
