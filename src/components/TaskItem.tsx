import type {Task} from "../entity/Task.ts";

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

/**
 * Represents a single task item in a task list.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.task - The task object containing details about the task.
 * @param {string} props.task.id - The unique identifier of the task.
 * @param {string} props.task.text - The description or text of the task.
 * @param {boolean} props.task.completed - Indicates if the task is completed or not.
 * @param {Function} props.onToggle - Callback function triggered when the task is toggled (e.g., marked as complete or incomplete).
 * @param {Function} props.onDelete - Callback function triggered when the task is deleted.
 * @return A list item element representing the task with a toggle and delete button.
 */
function TaskItem({task, onToggle, onDelete} : TaskItemProps) {
    return (
        <li className="task-item">
      <span
          onClick={() => onToggle(task.id)}
          className={task.completed ? "completed" : ""}
      >
        {task.text}
      </span>
            <button onClick={() => onDelete(task.id)}>✖</button>
        </li>
    );
}

export default TaskItem
