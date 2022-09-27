import React from "react";

const Input = ({ onChange, onClick }) => {
    return (
        <>
            <label htmlFor="newtask">Add new task</label>
            <div>
                <input
                    type="text"
                    name="newtask"
                    id="newtask"
                    onChange={onChange}
                ></input>
                <input type="submit" value="Add" onClick={onClick}></input>
            </div>
        </>
    );
};

export default Input;
