import React from "react";

interface TodoItemProps {
    text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
    return (
        <li>
            <span>{text}</span>
        </li>
    );
};

export default TodoItem;
