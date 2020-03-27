import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ScrollContext } from 'react-router-scroll-4';
import { store, persistor } from './redux/store';
import  { BreakpointProvider } from 'react-socks';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
      <ScrollContext>
         <BreakpointProvider>
            <App />
        </BreakpointProvider>
        </ScrollContext>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
