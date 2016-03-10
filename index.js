import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store , TodoApp } from './src/app';


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
