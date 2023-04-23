import { useHandleChange, useHandleSubmit } from "../lib/formHooks";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function Main() {
    const [todoItem, setTodoItem, handleChange] = useHandleChange({
        id: "",
        text: "",
    });
    const [todoList, handleSubmit] = useHandleSubmit([], todoItem, setTodoItem);

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

            <section>
                <AddTodo
                    todoItem={todoItem}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </section>
            <section>
                <ul>
                    {todoList.map((item) => (
                        <li key={item.id}> {item.text} </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
