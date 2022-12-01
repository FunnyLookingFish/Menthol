import { useEffect, useState } from "react"
import { useLazyQuery } from "@apollo/client";
import ItemNameForm from "../components/ItemNameForm/ItemNameForm";
import SelectItemNameForm from "../components/SelectItemForm/SelectItemForm";

import { getCatAndItems } from "../utils/CRUD/Query/query";

export default function AddItems(){
    const [category, setCategory] = useState();
    const [search, setSearch] = useState(false);
    const [searchForItemAndCat] = useLazyQuery(getCatAndItems);

    useEffect(async () =>{
        const data = await searchForItemAndCat();
        setCategory(data.category);
    }, [search]);

    return (
        <div>
            <ItemNameForm category={category} setSearch={setSearch} />
            <SelectItemNameForm category={category} />
        </div>
    )
}