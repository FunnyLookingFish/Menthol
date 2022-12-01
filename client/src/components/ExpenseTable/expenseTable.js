import Expense from "../../../../server/models/Expense";
import { useEffect, useState } from "react";


export default function ExpenseTable(){
    useEffect(() => {
        const expenses = Expense.map((expense)=>{
            return(
                <table class="table-fixed">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{expense.name}</td>
                            <td>{expense.expense}</td>
                        </tr>
                    </tbody>
                </table>
            )
        })
        return(
            <div>
                {expenses}
            </div>
        )
    })
}
