import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import Routes from './routes'
import { blue, indigo } from '@material-ui/core/colors'
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import {Button} from './button'
import {reducer} from './reducer'
import {rootSaga} from "./sagas"

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);


class App extends Component {
  render() {
    return (
      <div>
        // <ThemeProvider theme={theme}>
        //   <Routes />
        // </ThemeProvider>
        <Button />
      </div>
    );
  }
}

export default App;
