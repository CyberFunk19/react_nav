import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Predetors = () => {
  return (
    <div style={{backgroundColor:"beige"}}>
        <h1>Predetors: </h1>
        <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/Zoo/Predetors/Lion">Lion</Link> | {" "}
        <Link to="/Zoo/Predetors/Bear">Bear</Link> | {" "}
        </nav>
        <Outlet />
    </div>
  )
}

export default Predetors