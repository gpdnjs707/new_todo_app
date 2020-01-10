import React from "react";
import "./css/Nav.css"

const NavContainer = ({ children }) => {
    return (
        <div className="navContainer">
            <div className="groupList">
                {children}
            </div>
            <div className="doneGroup">
                
            </div>
            <button className="groupAddBtn">+</button>
        </div>
    );
}

export default NavContainer;