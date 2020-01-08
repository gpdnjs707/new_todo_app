import React from "react";
import "./css/Form.css";

const Form = ({ value, onChange, onKeyPress, onInsert }) => {
    return (
        <div className="formContainer">
            <input 
                className="form-control"
                value={ value }
                onChange={ onChange }
                onKeyPress={ onKeyPress }
                placeholder="할일을 입력하세요."
            />
            <button className="btn btn-primary" onClick={onInsert}>
                +
            </button>
        </div>
    );
}

export default Form