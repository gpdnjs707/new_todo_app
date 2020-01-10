import React, { Component } from "react";
import GroupItem from "./GroupItem"

class GroupList extends Component {
    render() {
        const {selectedId, onSelect, groups} = this.props
        const groupList = groups.map(({groupId, title}) => 
            <GroupItem 
                groupId={groupId}
                title={title}
                onSelect={onSelect}
                key={groupId}
                active={groupId === selectedId}
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