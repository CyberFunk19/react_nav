import React from 'react'
import { Link, Outlet } from 'react-router-dom';


const Friendly = () => {
  return (
    <div style={{backgroundColor:"beige"}}>
        <h1>Friendly: </h1>
        <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem" }}></nav>
        <Link to="/Zoo/Friendly/Elephant">Elephant</Link> | {" "}

        <Link to="/Zoo/Friendly/Kangaroo">Kangaroo</Link> | {" "}
        <Outlet/>


    </div>
  )
}

export default Friendly