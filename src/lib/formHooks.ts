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
            // const newId = nanoid();
            setItem((prevState) => ({
                ...prevState,
                text: event.target.value,
            }));
        },
        [setItem]
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

            const newItem: Item = {
                ...initialValue,
                id: nanoid(),
            };

            setList((prevList) => [...prevList, newItem]);
            setValue({ id: "", text: "" });
        },
        [initialValue, setList, setValue]
    );

    return [list, handleSubmit];
}
