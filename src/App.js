import './App.css';
import Labs from "./Labs";
import React from 'react';
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";




function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/"         element={<Navigate to="/Labs"/>}/>
              <Route path="/hello"    element={<HelloWorld/>}/>
              <Route path="/Labs/*" element={<Labs/>}/>
              <Route path="/Kanbas/*" element={<Kanbas/>}/>
          </Routes>
      </HashRouter>
  );
}

export default App;
