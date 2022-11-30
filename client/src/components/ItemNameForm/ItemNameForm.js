import { useState } from "react";
import { useFinanceContext } from "../../utils/stateManagment/GlobalState";
import { useQuery, useMutation } from '@apollo/client'

export default function ItemNameForm(props){
    const [inputValue, setInputValue] = useState();
    const [optionValue, setOptionValue] = useState();

    const [ addItemToCat, {error}] = useMutation();//add item to category

    function handleInputChange(e){
        setInputValue(e.target.value);
    };

    function handleFormSubmit(e){
        e.preventDefault();
        addItemToCat({variables: {_id: optionValue, itemName: inputValue}});
        props.setSearch(true)
    };

    function handleOptionChange(e){
        setOptionValue(e.target.id);
    };
    

    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Item Name" value={inputValue} onChange={handleInputChange} />
            <label>Choose a category:
                <select value={optionValue} onChange={handleOptionChange}>
                    {props.category.map((category)=> <option key={category.name} id={category._id} value={category.name}>{category.name}</option>)}
                </select>
            </label>
            <button type="submit">Add item to list</button>
        </form>
    )
};