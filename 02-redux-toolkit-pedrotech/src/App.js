import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from './components/ChangeColor';

import { store } from "./store";
import { Provider } from 'react-redux'





function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Profile/>
          <Login/>
          <ChangeColor/>
        </div>
    </Provider>
  );
}

export default App;
