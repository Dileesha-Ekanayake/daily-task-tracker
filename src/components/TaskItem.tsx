type Task = {
    id: number;
    text: string;
    completed: boolean;
};

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

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
