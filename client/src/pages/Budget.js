import { useQuery } from "@apollo/client";
import ExpenseTable from "../components/ExpenseTable/expenseTable";
// import Header from '../components/Header/index/Header/header';
import Footer from '../components/Footer/Footer'
export default function Budget(){
    const {data} = useQuery('expenses', )//expenses reducer goes here
    return (
        <div>
            
            <ExpenseTable items={data} />
            <Footer/>
        </div>
    ) 
}