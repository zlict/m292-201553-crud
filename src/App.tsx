import React, { createContext, useContext, useState } from 'react';
import { UsersContainer } from './containers/Users';
import { HelloContainer } from './containers/Hello';
import { UppercaseContainer } from './containers/Uppercase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const CounterContext = createContext<[number, React.Dispatch<number>]>([0, (newCounter: number) => {}]);

export const PlusOne = () => {
  const [counter, setCounter] = useContext(CounterContext);
  
  return (<button onClick={() => setCounter(counter + 1) }>+1</button>);
}

export const App = () => {
  const counterState = useState(0);

  return (
    <CounterContext.Provider value={counterState}>
      <BrowserRouter>
        <PlusOne />
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
    </CounterContext.Provider>
  );
}
