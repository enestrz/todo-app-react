import { ITodoItem } from "./TodoContext";

export interface ITodoAction {
    type: string;
    payload: ITodoItem | string;
}

export function todoReducer(todoList: Array<ITodoItem>, action: ITodoAction) {
    switch (action.type) {
        case "ADD_TODO":
            return [...todoList, action.payload];
        case "REMOVE_TODO":
            return todoList.filter((todo) => todo.id !== action.payload);
        case "TOGGLE_TODO":
            return todoList.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            );
        case "UPDATE_TODO":
            return todoList.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo
            );
        default:
            throw new Error("Invalid action type");
    }
}
