import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks , setTasks] = useState([]);
  const [editingTask , setEditingTask] = useState(null);

  const addTask = (task) => {
    if(editingTask) {
      setTasks(tasks.map((t , i) => (
        i === editingTask.index ? task : t
      )));
      setEditingTask(null);
    } else {
    setTasks([...tasks , task]);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => (
      i !== index
    )));
  };

  const startEditing = (index) => {
    setEditingTask({ index , task: tasks[index] });
  };

  return (
    <div className="flex justify-center border-2 border-outline p-10 w-min-[700px] bouder rounded-xl bg-bg shadow-xl">
      <div>
        <h1 className="text-text font-semibold text-3xl text-center">Daily Todos</h1>
        <TaskInput addTask={addTask} editingTask={editingTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} startEditing={startEditing} />
        <p className="text-text text-sm text-center mt-7">ayman - &copy; 2025</p>
      </div>
    </div>
  );
}

export default App;