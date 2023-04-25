import React from "react";
import { useTasksDispatch } from "../lib/TodoContext";

interface TodoItemProps {
    id: string;
    text: string;
    isDone: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, isDone }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [newText, setNewText] = React.useState(text);
    const dispatch = useTasksDispatch();

    const handleChange = () => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const handleDelete = () => {
        dispatch({ type: "REMOVE_TODO", payload: id });
    };

    const changeEdit = () => {
        setIsEditing(true);
    };

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewText(e.target.value);
    };

    const handleEditSubmit = () => {
        dispatch({ type: "UPDATE_TODO", payload: { id, text, isDone } });
        setIsEditing(false);
    };

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={handleChange}
                />
            </label>
            {isEditing ? (
                <input type="text" value={newText} onChange={handleEdit} />
            ) : (
                <span>{newText}</span>
            )}
            {isEditing ? (
                <button onClick={handleEditSubmit}>Save</button>
            ) : (
                <button onClick={changeEdit}>Edit</button>
            )}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;
