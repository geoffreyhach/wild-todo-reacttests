import React, { useState } from "react";
import Tasks from "./components/Tasks";
import Input from "./components/Input";
import TaskCount from "./components/TaskCount";

function App() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAdd = () => {
        setTasks([...tasks, newTask]);
        document.querySelector("#newtask").value = "";
    };

    const handleRemove = (index) => {
        setTasks(tasks.filter((task) => tasks.indexOf(task) !== index));
    };

    return (
        <div className="App">
            <Input onChange={handleChange} onClick={handleAdd} />
            <Tasks tasks={tasks} onClick={handleRemove} />
            <TaskCount count={tasks.length} />
        </div>
    );
}

export default App;
