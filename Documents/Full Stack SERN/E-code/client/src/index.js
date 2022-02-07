import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRoutes from './MainRoutes';
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './redux/reducers/index';

const store = createStore( rootReducer, compose(applyMiddleware(thunk)))

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} >
  <Router>
  <ThemeProvider theme={darkTheme}>
    <MainRoutes />
    </ThemeProvider>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
