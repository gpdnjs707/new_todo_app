import React, { Component } from "react";
import "./css/GroupItem.css";
import classNames from "classnames";

class GroupItem extends Component {
    render() {
        const { groupId, onSelect, title, active } = this.props;
        return (
            <div className={classNames("groupItemContainer", {active})} onClick={() => onSelect(groupId)}>
                <div className="groupTitle">
                    {title}
                </div>
            </div>
        );
    }
}

export default GroupItem;
