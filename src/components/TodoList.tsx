import TodoItem from "./TodoItem";
import { useTasks } from "../lib/TodoContext";

const TodoList = () => {
    const todoList = useTasks();

    return (
        <ul>
            {todoList?.map((item) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    isDone={item.isDone}
                />
            ))}
        </ul>
    );
};

export default TodoList;
