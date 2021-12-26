import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals'; 

 

// Suspense is a general way for components to suspend rendering while they load data from a cache. 
// render a component tree "in background"
// while components are fetching data, and 
// display them only after the whole tree is ready.
ReactDOM.render(
  <Suspense fallback={(
    <div className="loading-content">
      <div className="spinner-grow text-success"></div>
      <span> Loading... </span>
    </div>)}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
