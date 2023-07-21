import React from 'react';

import './App.css';
import { Store } from 'redux';

type Props = {
  store: Store;
};

function App({ store }: Props) {
  return (
    <div className='App'>
      <div className='CounterApp'>
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
        <span> {store.getState().counter} </span>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
