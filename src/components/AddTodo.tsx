import React from "react";

type Item = {
    id: string;
    text: string;
};

type AddTodoProps = {
    todoItem: Item;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({
    todoItem,
    handleChange,
    handleSubmit,
}) => {
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
