import React from "react";

const Task = ({ tasks, task, onClick }) => {
    return (
        <li key={tasks.indexOf(task)}>
            <span
                onClick={() => onClick(tasks.indexOf(task))}
                data-testid="remove"
            >
                (-)
            </span>
            {task}
        </li>
    );
};

export default Task;
