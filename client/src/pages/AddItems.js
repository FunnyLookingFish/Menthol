import { useEffect, useState } from "react"
import { useLazyQuery } from "@apollo/client";
import ItemNameForm from "../components/ItemNameForm/ItemNameForm";
import SelectItemNameForm from "../components/SelectItemForm/SelectItemForm";
import Header from "../components/Header/Header.js";

import { getCatAndItems } from "../utils/CRUD/Query/query";

export default function AddItems() {
    const [category, setCategory] = useState();
    const [search, setSearch] = useState(false);
    const [searchForItemAndCat] = useLazyQuery(getCatAndItems);

    useEffect(async () => {
        const data = await searchForItemAndCat();
        setCategory(data.category);
    }, [search]);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <section className="flex-col">
                    <section className="flex-col p-16 border-4 border-purple-600 bg-white max-h-screen">
                        <ItemNameForm category={category} setSearch={setSearch} />
                        <SelectItemNameForm category={category} />
                    </section>
                </section>
            </div>
        </div>
    );
};