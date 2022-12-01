import { useQuery } from "@apollo/client";
import ExpenseTable from "../components/ExpenseTable/expenseTable";
import Header from '../components'
export default function Budget(){
    const {data} = useQuery('expenses', )//expenses resolver goes here
    return (
        <div>
            <Header/>
            <ExpenseTable items={data} />
        </div>
    ) 
}