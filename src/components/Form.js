import React from "react";
import "./css/Form.css";

const Form = ({ value, onChange, onKeypress, onClick }) => {
    return (
        <div className="formContainer">
            <input 
                className="form-control"
                value={ value }
                onChange={ onChange }
                onKeyPress={ onKeypress }
                placeholder="할일을 입력하세요."
            />
            <button className="btn btn-primary">
                +
            </button>
        </div>
    );
}

export default Form