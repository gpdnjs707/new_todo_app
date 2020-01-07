import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onKeypress, onClick }) => {
    return (
        <div className="formContainer">
            <input className="todoInput"
                value = { value }
                onChange = { onChange }
                onKeypress = { onKeypress }
                placeholder = "할일을 입력하세요."
            />
            <button className="addTodoBtn">
                추가
            </button>
        </div>
    );
}

export default Form