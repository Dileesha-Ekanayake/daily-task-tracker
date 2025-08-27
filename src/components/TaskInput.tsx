import { useState } from "react";

interface TaskInputProps {
    onAdd: (text: string) => void;
}

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
