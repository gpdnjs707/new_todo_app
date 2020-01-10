import React, { Component, Fragment } from "react";
import "./css/Nav.css"
import "./css/AddGroup.css"
import GroupList from "./GroupList";


class NavContainer extends Component {

    render() {
        const {groups, onClick} = this.props;

        return (
                <div className="navContainer">
                    <div className="groupList">
                        <GroupList groups={groups}/>
                    </div>
                    <div className="doneGroup">
                        
                    </div>
                    <button className="groupAddBtn" onClick={() => onClick()}>+</button>
                    
                </div>
        );
    }
    
}

export default NavContainer;