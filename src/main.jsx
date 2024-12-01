import React from 'react';
import ReactDom from 'react-dom/client'; 
import App from "./containers/App.jsx";
import './styles/main.css'

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <>
    <App />
  </>
);