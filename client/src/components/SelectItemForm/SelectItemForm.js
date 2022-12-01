import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import {updateExpense} from '../../utils/CRUD/Mutation/mutation'

export default function SelectItemNameForm(props){
    const [optionValue, setOptionValue] = useState();
    const [items, setItems] = useState();
    const [cost, setCost] = useState();
    const [itemId, setItemId] = useState();

    const [upDateExpenseCost] = useMutation(updateExpense);
    

    function handleOptionChange(e){
        setOptionValue(e.target.id);
        selectedItems();
    };
    const selectedItems = () => {
        const newCat = props.category.filter((category)=> category._id === optionValue);
        setItems(newCat)
    };
    const costChange = (e) => {
        setCost(e.target.value)
    }
    const itemChange = (e) => {
        setItemId(e.target.id)
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await upDateExpenseCost({variables:{ expense: cost, expenseId: itemId}});
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Choose a category:
                <select value={optionValue} onChange={handleOptionChange}>
                    {props.category.map((category)=> <option key={category.name} id={category._id} value={category.name}>{category.name}</option>)}
                </select>
            </label>
            <label>Select An Item:
                <select value={itemId} onChange={itemChange}>
                    {items.items.map((item)=> <option key={item} id={item._id} value={item}>{item}</option>)}
                </select>
            </label>
            <input value={cost} placeholder='cost' name="cost" onChange={costChange} />
            <button>Add cost</button>
        </form>
    )
};