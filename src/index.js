import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';


import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Contacts from './routes/contacts';
import Info from './routes/info';
import Invoice from './routes/invoice';

import Games from './routes/games';
import Game from './routes/game';

const store = createStore(reducer);

// const {inc, dec, rand} = bindActionCreators(actions, dispatch);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/games" element={<Games/>}>
            <Route path=":gamesId" element={<Game/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// update(); 

// store.subscribe(update); // выполняется при каждом обновлении state


