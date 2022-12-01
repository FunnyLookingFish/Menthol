import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

export default function SelectItemNameForm(props){
    const [optionValue, setOptionValue] = useState();
    const [items, setItems] = useState();
    const [cost, setCost] = useState();

    const [upDateExpenseCost] = useMutation();
    

    function handleOptionChange(e){
        setOptionValue(e.target.id);
        selectedItems();
    };
    const selectedItems = () => {
        const newCat = props.category.filter((category)=> category === optionValue);
        setItems(newCat)
    };
    const costChange = (e) => {
        setCost(e.target.value)
    }
    const onSubmit = () => {

    };
    return (
        <form>
            <label>Choose a category:
                <select value={optionValue} onChange={handleOptionChange}>
                    {props.category.map((category)=> <option key={category.name} id={category._id} value={category.name}>{category.name}</option>)}
                </select>
            </label>
            <label>Select An Item:
                <select>
                    {items.items.map((item)=> <option key={item} value={item}>{item}</option>)}
                </select>
            </label>
            <input value={cost} placeholder='cost' name="cost" onChange={costChange} />
            <button>Add cost</button>
        </form>
    )
};