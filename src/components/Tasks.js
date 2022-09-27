import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onClick }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <Task tasks={tasks} task={task} onClick={onClick} />
            ))}
        </ul>
    );
};

export default Tasks;
