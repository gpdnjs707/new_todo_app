import React, { Component, Fragment } from "react";
import "./css/Nav.css"
import "./css/AddGroup.css"
import GroupList from "./GroupList";
import AddGroupPopup from "./AddGroup";


class NavContainer extends Component {
    state = {
        activeId: null,
        groups: [
            {id: 0, title: "Inbox"}
        ],
        popupDisplay: false
    }

    handlePopup = () => {
        const {popupDisplay} = this.state;

        this.setState({
            popupDisplay: true
            }   
        )
    }

    render() {
        const {groups, popupDisplay} = this.state;

        const {
            handlePopup
        } = this;

        return (
            <Fragment>
                <AddGroupPopup display={popupDisplay}/>
                <div className="navContainer">
                    <div className="groupList">
                        <GroupList groups={groups}/>
                    </div>
                    <div className="doneGroup">
                        
                    </div>
                    <button className="groupAddBtn" onClick={() => handlePopup()}>+</button>
                    
                </div>
                
            </Fragment>
            
        );
    }
    
}

export default NavContainer;