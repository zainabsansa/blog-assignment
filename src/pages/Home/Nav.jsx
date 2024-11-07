import React from "react";
import { Link } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";

function Nav() {
  return (
    <div className="starter">
      <h4 className="logo">Starter</h4>
      <ul className="nav-link">
        <li >
          <Link style={{textDecoration:'none', color: '#3D3D3D'}} to={"/about"}>About</Link>
        </li>
        <li> <Link style={{textDecoration:'none', color: '#3D3D3D'}} to={"/blog"}>Blog</Link> </li>
        <li> <Link style={{textDecoration:'none', color: '#3D3D3D'}} to={"/article"}>Article</Link> </li>
        <IoIosMoon />
      </ul>
    </div>
  );
}

export default Nav;
