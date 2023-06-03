import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import { SnackbarProvider } from "notistack";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{
    vertical: "bottom", horizontal: "center"
  }} >

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </SnackbarProvider>
);

