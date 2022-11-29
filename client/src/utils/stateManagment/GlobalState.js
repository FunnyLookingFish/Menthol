import { createContext, useContext } from "react";
import useStateReducer from "./reducer";

const FinanceContext = createContext();
const { Provider } = FinanceContext;

const FinanceProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useStateReducer({
        categories:[{name:"Vehicles", items:[]}, {name:"Home", items:[]}, {name:"MISC", items:[]}]
    });

    return <Provider value={[state, dispatch]} {...props}/>
};

const useFinanceContext = () => useContext(FinanceContext);

export {FinanceProvider, useFinanceContext}