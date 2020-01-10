import React, { Component } from "react";
import "./css/GroupItem.css"

class GroupItem extends Component {
    render() {
        const { id, onClick, title } = this.props;
        return (
            <div className="groupItemContainer" onClick={() => onClick()}>
                <div className="groupTitle">
                    {title}
                </div>
            </div>
        );
    }
}

export default GroupItem;
