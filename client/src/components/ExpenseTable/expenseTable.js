import Expense from "../../../../server/models/Expense";
import { useEffect, useState } from "react";


export default function ExpenseTable(){
        return(
            <div>
                {expenses.map((expense)=> (
                <table class="table-fixed">
                    <thead>
                        <tr>
                            <th>Name</th>
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
                ))}
            </div>
        )
}

