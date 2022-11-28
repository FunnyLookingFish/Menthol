import { useState } from "react";
import { useFinanceContext } from "../../utils/stateManagment/GlobalState";

export default function ItemNameForm(){
    const [inputValue, setInputValue] = useState();
    const [optionValue, setOptionValue] = useState();
    const [state, dispatch] = useFinanceContext();

    function handleInputChange(e){
        setInputValue(e.target.value);
    };

    function handleFormSubmit(e){
        e.preventDefault();
        dispatch({
            type: 'ADD_ITEM_TO_CAT',
            payload:{
                item: [inputValue],
                name: optionValue
            }
        })
    };

    function handleOptionChange(e){
        setOptionValue(e.target.value)
    };
    
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Item Name" value={inputValue} onChange={handleInputChange} />
            <label>Choose a category:
                <select value={optionValue} onChange={handleOptionChange}>
                    {state.categories.map((category)=> <option key={category.name} value={category.name}>{category.name}</option>)}
                </select>
            </label>
            <button type="submit">Add item to list</button>
        </form>
    )
};