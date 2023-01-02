import './App.css';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div style={{textAlign: "center", backgroundColor:"burlywood"}} >
      <h1>My Zoo: </h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem" }}>
      <Link to="/Zoo">Zoo</Link> | {" "}
        
      </nav>
      <Outlet />
    </div>
     );
}

export default App
