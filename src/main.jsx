import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';
import './assets/global-styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
);
