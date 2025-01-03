import PropTypes from "prop-types";

function TaskList({ tasks, deleteTask, startEditing }) {
    return (
        <ul className="">
            {tasks.map((task, index) => (
                <li key={index} className="text-text pr-3 py-3 border-2 border-outline rounded-lg flex justify-between items-center mb-3">
                    <span className="px-5">{task}</span>
                    <div className="justify-end float-right flex gap-3">
                        <button className="px-3 py-1 bg-edit text-bg rounded-lg border border-outline" onClick={() => startEditing(index)}>Edit</button>
                        <button className="px-3 py-1 bg-delete text-bg rounded-lg border border-outline" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    deleteTask: PropTypes.func.isRequired,
    startEditing: PropTypes.func.isRequired,
};

export default TaskList;