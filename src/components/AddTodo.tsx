import React from "react";
import { useTasksDispatch } from "../lib/TodoContext";
import { nanoid } from "nanoid";

const AddTodo = () => {
    const [todoItem, setTodoItem] = React.useState({
        id: "",
        text: "",
        isDone: false,
    });

    const dispatch = useTasksDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoItem({ ...todoItem, text: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodoItem = { ...todoItem, id: nanoid() };
        dispatch({ type: "ADD_TODO", payload: newTodoItem });
        setTodoItem({ ...todoItem, text: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder=""
                value={todoItem.text}
                onChange={handleChange}
            />
            <button type="submit" className="">
                Add
            </button>
        </form>
    );
};

export default AddTodo;
