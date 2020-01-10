import React, { Component } from "react";
import GroupItem from "./GroupItem"

class GroupList extends Component {
    render() {
        const {groups} = this.props
        const groupList = groups.map(({id, title}) => 
            <GroupItem 
                id={id}
                title={title}
            />
        )
        return (
            <div>
                {groupList}
            </div>
            
        );
    }
}

export default GroupList;