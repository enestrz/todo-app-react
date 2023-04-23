import { nanoid } from "nanoid";
import { useState, ChangeEvent, useCallback, FormEvent } from "react";

type Item = {
    id: string;
    text: string;
};

type UseItemReturnType = [
    Item,
    React.Dispatch<React.SetStateAction<Item>>,
    (event: ChangeEvent<HTMLInputElement>) => void
];

type UseArrayReturnType = [Item[], (event: FormEvent<HTMLFormElement>) => void];

export function useHandleChange(initialValue: Item): UseItemReturnType {
    const [item, setItem] = useState<Item>(initialValue);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setItem({ ...item, text: event.target.value });
        },
        [item, setItem]
    );

    return [item, setItem, handleChange];
}

export function useHandleSubmit(
    initialArray: Item[],
    initialValue: Item,
    setValue: React.Dispatch<React.SetStateAction<Item>>
): UseArrayReturnType {
    const [list, setList] = useState<Item[]>(initialArray);
    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const newId = nanoid();
            console.log(newId);
            setValue({ ...initialValue, id: newId });
            const newItems = [...list];
            newItems.push(initialValue);
            setList(newItems);
            // setValue({ id: "", text: "" });
        },
        [initialValue, setList, list, setValue]
    );

    return [list, handleSubmit];
}
