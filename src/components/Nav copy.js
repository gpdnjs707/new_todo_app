import React, { Component } from "react";
import "./css/Nav.css"
import "./css/AddGroup.css"
import GroupList from "./GroupList";


class NavContainer extends Component {

    render() {
        const {groups, onClick, selected, selectedId} = this.props;

        return (
                <div className="navContainer">
                    <div className="groupList">
                        <GroupList groups={groups} onSelect={selected} selectedId={selectedId}/>
                    </div>
                    <div className="doneGroup">
                        
                    </div>
                    <button className="groupAddBtn" onClick={() => onClick()}>+</button>
                    
                </div>
        );
    }
    
}

export default NavContainer;