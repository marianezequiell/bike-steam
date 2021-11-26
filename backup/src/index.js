import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AsideProvider from './Context/Aside-provider';

ReactDOM.render(
  <React.StrictMode>
      <AsideProvider>
        <App />
      </AsideProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
