import React from "react";

const TaskCount = ({ count }) => {
    return <p>{count <= 1 ? `${count} task left` : `${count} tasks left`} </p>;
};

export default TaskCount;
