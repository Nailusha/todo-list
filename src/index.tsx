import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
}

reportWebVitals();
