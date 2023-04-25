import { createContext, useContext, useReducer } from "react";
import { ITodoAction, todoReducer } from "./todoReducer";

export interface ITodoItem {
    id: string;
    text: string;
    isDone: boolean;
}

export const TodoContext = createContext<Array<ITodoItem>>([]);

export const TodoDispatchContext = createContext<React.Dispatch<ITodoAction>>(
    {} as React.Dispatch<ITodoAction>
);

interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [tasks, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={tasks}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
};

export function useTasks() {
    return useContext(TodoContext);
}

export function useTasksDispatch() {
    return useContext(TodoDispatchContext);
}
