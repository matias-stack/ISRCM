import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Creargrupos from './pages/Creargrupos';
import CreateGroup from './Components/CreateGroup';
//import Navbar from './Components/Navbar';
import VerEmpleados from './pages/VerEmpleados';
import Login from './pages/Login';
//import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div>
      <Sidebar/>
      </div>
      <Creargrupos/>
    </div>
  );
}
// function App() {
//   return (
//     <div id='background'>
//       <Login/>
//     </div>
//   );
// }

export default App;

// <div className="App"><Sidebar/></div>

/*
import CerrarSesion from './pages/CerrarSesion';
import CrearGrupo from './pages/CrearGrupo';
import Monitorear from './pages/Monitorear';

import VerGrupos from './pages/VerGrupos'; 
*/

/* 
<Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component ={VerEmpleados} />
      </Switch>
    </Router>
*/