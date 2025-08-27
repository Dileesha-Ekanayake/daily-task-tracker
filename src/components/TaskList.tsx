import TaskItem from "./TaskItem";
import type {Task} from "../entity/Task.ts";

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

/**
 * Displays a list of tasks with options to toggle or delete each task.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.tasks - An array of task objects to display.
 * @param {Function} props.onToggle - A function to handle toggling task completion status.
 * @param {Function} props.onDelete - A function to handle deleting a task.
 *
 * @return A list of task items or a message if no tasks are present.
 */
function TaskList({tasks, onToggle, onDelete}: TaskListProps) {
    if (tasks.length === 0) {
        return <p className="empty">No tasks yet 🎉</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />

            ))}
        </ul>
    );
}

export default TaskList;
