import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

type Task = {
    id: number;
    text: string;
    completed: boolean;
};

function App() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text: string): void => {
        if (text.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    };

    const toggleTask = (id: number): void => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: number): void => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Daily Task Tracker ✅</h1>
                <TaskInput onAdd={addTask} />
                <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
            </div>
        </div>
    );
}

export default App;
