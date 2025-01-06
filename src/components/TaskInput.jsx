import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function TaskInput({ addTask, editingTask }) {
    const [task, setTask] = useState("");

    useEffect(() => {
        if (editingTask) {
            setTask(editingTask.task);
        } else {
            setTask("");
        }
    }, [editingTask]);

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-12 mt-9 flex items-center gap-5" >
            <input type="text" value={task} onChange={handleChange} placeholder="Add a task" className="bg-bg border-2 border-outline rounded-lg px-5 py-3 placeholder-text text-text text-lg" />
            <button type="submit" className="bg-add px-4 py-3 text-lg rounded-lg border-2 text-bg border-outline whitespace-nowrap">{editingTask ? "Update Task" : "Add Task"}</button>
        </form>
    );
}

TaskInput.propTypes = {
    addTask: PropTypes.func.isRequired,
    editingTask: PropTypes.shape({
        task: PropTypes.string.isRequired,
    }),
};

TaskInput.defaultProps = {
    editingTask: null,
};

export default TaskInput;
