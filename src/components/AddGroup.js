import React, { Component } from "react";
import classNames from "classnames";

class AddGroupPopup extends Component {
    render() {
        const {id, title, onChange, onCreate, display} = this.props;
        return (
            <div className={classNames("addGroupPopupContainer", {display})}>
                <div className="closeBtn">x</div>
                <p>그룹 추가</p>
                <input />
                <button className="btn btn-primary" >Save</button>

            </div>
        )
    }

}

export default AddGroupPopup;