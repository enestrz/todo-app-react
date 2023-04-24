import { useContext } from "react";
import { TodoContext } from "../lib/TodoContext";
import { useHandleChange, useHandleSubmit } from "../lib/formHooks";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Main() {
    const [todoItem, setTodoItem, handleChange] = useHandleChange({
        id: "",
        text: "",
    });
    const [todoList, handleSubmit] = useHandleSubmit([], todoItem, setTodoItem);

    const data = {
        todoList,
    };

    return (
        <main
            className="flex-1
                bg-gradient-to-r from-teal-900/75 to-emerald-900/75
                rounded-3xl mt-5
                md:p-5
                p-2
                font-normal
                flex
                flex-col
                items-center
            "
        >
            <h2>What are you planning to do?</h2>
            <TodoContext.Provider value={data}>
                <section>
                    <AddTodo
                        todoItem={todoItem}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </section>
                <section>
                    <TodoList />
                </section>
            </TodoContext.Provider>
        </main>
    );
}
