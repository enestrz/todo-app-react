import { useContext } from "react";
import { TodoContext } from "../lib/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const data = useContext(TodoContext);

    return (
        <ul>
            {data.todoList?.map((item) => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    );
};

export default TodoList;
