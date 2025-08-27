import TaskItem from "./TaskItem";

type Task = {
    id: number;
    text: string;
    completed: boolean;
};

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
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
