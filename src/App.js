import './App.css';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>My Animals: </h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/Lion">Lion</Link> | {" "}
        <Link to="/Elephant">Elephant</Link> | {" "}
        <Link to="/Bear">Bear</Link> | {" "}
        <Link to="/Kangaroo">Kangaroo</Link>
      </nav>
      <Outlet />
    </div>
     );
}

export default App
