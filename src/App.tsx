import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import type {Task} from "./entity/Task.ts";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    /**
     * Adds a new task to the task list.
     *
     * This function takes a string input and creates a new task object with a unique identifier,
     * the provided text, and a default completed status of false. The new task is then appended
     * to the existing list of tasks. If the input string is empty or contains only whitespace,
     * the function does not perform any operation.
     *
     * @param {string} text - The text description of the task to be added.
     * @returns {void}
     */
    const addTask = (text: string): void => {
        if (text.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    };

    /**
     * Toggles the completion status of a task in the task list.
     *
     * This function updates the state of tasks by locating the task with the given
     * identifier and toggling its 'completed' property. If the task's 'completed'
     * property is `true`, it will be set to `false` and vice versa. Tasks that do
     * not match the given identifier remain unchanged.
     *
     * @param {number} id - The unique identifier of the task to toggle.
     * @returns {void} This function does not return a value.
     */
    const toggleTask = (id: number): void => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    /**
     * Deletes a task from the list based on the provided task ID.
     *
     * @param {number} id - The unique identifier of the task to be deleted.
     * @returns {void}
     */
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
