import { useState } from "react";

interface TaskInputProps {
    onAdd: (text: string) => void;
}

/**
 * A component for capturing user input to create and add a new task.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onAdd - Callback function to handle adding a new task. It receives the input text as an argument.
 * @return The rendered input form for adding tasks.
 */
function TaskInput({ onAdd }: TaskInputProps) {
    const [text, setText] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder="Enter a new task..."
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskInput;
