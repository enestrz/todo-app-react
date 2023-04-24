import { createContext } from "react";

interface ITodoItem {
    id: string;
    text: string;
}

type ITodoList = Array<ITodoItem>;

type ITodoContext = {
    todoList?: Array<ITodoItem>;
};

export const TodoContext = createContext<ITodoContext>({});
