import { useState } from "react";
import { useQuery } from "@apollo/client";

export default function SelectItemNameForm(){
    const [selectedItem, setSelectedItem] = useState();
    const [categoryId, setCatId] = useState();
    const { data: items } = useQuery();//Retrieves all saved items in category
    const { data: categories } = useQuery();//Retrieves all categories

    return (
        <form>
            <label>Select A Category:
                <select>

                </select>
            </label>
            <label>Select An Item:
                <select>
                    {items.map((item)=> <option key={item} value={item}>{item}</option>)}
                </select>
            </label>
        </form>
    )
};