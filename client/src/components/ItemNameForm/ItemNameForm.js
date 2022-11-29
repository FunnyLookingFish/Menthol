import { useState } from "react";
import { useFinanceContext } from "../../utils/stateManagment/GlobalState";
import { useQuery, useMutation } from '@apollo/client'

export default function ItemNameForm(){
    const [inputValue, setInputValue] = useState();
    const [optionValue, setOptionValue] = useState();

    const { data } = useQuery();//search for categories
    const [ addItemToCat, {error}] = useMutation();//add item to category

    function handleInputChange(e){
        setInputValue(e.target.value);
    };

    function handleFormSubmit(e){
        e.preventDefault();
        addItemToCat({variables: {_id: optionValue, itemName: inputValue}});
    };

    function handleOptionChange(e){
        setOptionValue(e.target.id);
    };
    

    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Item Name" value={inputValue} onChange={handleInputChange} />
            <label>Choose a category:
                <select value={optionValue} onChange={handleOptionChange}>
                    {data.map((category)=> <option key={category.name} id={category._id} value={category.name}>{category.name}</option>)}
                </select>
            </label>
            <button type="submit">Add item to list</button>
        </form>
    )
};