import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter basename="/">
          <div>
            <Routes>
              {routes.map((prop, key) => {
                return <Route path={prop.path} key={key} element={<prop.element/>} />;
              })}
            </Routes>
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
