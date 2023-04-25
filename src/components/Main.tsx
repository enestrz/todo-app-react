import { TodoProvider } from "../lib/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Main() {
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
            <TodoProvider>
                <section>
                    <AddTodo />
                </section>
                <section>
                    <TodoList />
                </section>
            </TodoProvider>
        </main>
    );
}
