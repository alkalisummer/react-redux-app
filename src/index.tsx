import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = createStore(rootReducer);

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux',
});

console.log(store.getState());

const render = () =>
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );

render();

store.subscribe(render);
