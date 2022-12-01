import { useState } from "react";
import {createCategory} from '../../utils/mutations';
import { useMutation } from "@apollo/client";

export default function NewCategory(){
    const [inputName, setName] = useState('');
    const [newCategory, {error}] = useMutation(createCategory);

    function handleNameChange(e){
        setName(e.target.value);
    }
    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        
            await newCategory({variables: {name: inputName}});
       
        }
    
    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Create a category.</h2>
            <input className="" value={inputName} onChange={handleNameChange} placeholder='Category Name'></input>
            <button className="" onClick={handleFormSubmit} type='submit'>Create!</button>
        </form>
    )
}