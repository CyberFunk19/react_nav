import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const zoo = () => {
  return (
    <div style={{backgroundColor:"blanchedalmond"}}>
        <h1>Categories: </h1>
        <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/Zoo/Predetors">Predetors</Link> | {" "}
        <Link to="/Zoo/Friendly">Friendly</Link> | {" "}

        </nav>
        <Outlet />
    </div>
  )
}

export default zoo