import React, { Component } from "react";
import classNames from "classnames";

class AddGroupPopup extends Component {
    render() {
        const {id, text, onChange, onCreate, display, dismiss} = this.props;
        return (
            <div className={classNames("addGroupPopupContainer", {display})}>
                <div className="closeBtn" onClick={() => dismiss()}>x</div>
                <p>그룹 추가</p>
                <input value={text} onChange={(e) => onChange(e)}/>
                <button className="btn btn-primary" onClick={(e) => onCreate(e)}>Save</button>

            </div>
        )
    }

}

export default AddGroupPopup;