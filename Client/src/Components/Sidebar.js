import React from 'react'
import '../App.css';
import {SidebarData} from './SidebarData'
import logo from '../assets/img/logo_isrcm.PNG';
import mintra from '../assets/img/Mintra.png';

function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={logo} className="Sidebar-logo" alt="logo" />
      <ul className='SidebarList'>        
        {SidebarData.map((val,key)=>{
        return (
        <li key={key} 
        className="row"
        id={window.location.pathname === val.link ? "active" : ""}
        onClick={()=>{
            window.location.pathname =val.link;
            }}
        >
          {""}<div id="title">{val.title}</div>
        </li>
        );
        })}
      </ul>  
      <img src={mintra} className="Sidebar-mintra" alt="mintra" />  
    </div>
  )
}

export default Sidebar