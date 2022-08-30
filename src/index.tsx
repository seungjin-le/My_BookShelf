import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.min.css';
import create from './redux/create';
import { Provider } from 'react-redux';
import history from './history';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';

const store = create();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
);
