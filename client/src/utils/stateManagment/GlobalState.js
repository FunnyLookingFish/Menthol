import { createContext, useContext } from "react";
import useStateReducer from "./reducer";

const FinanceContext = createContext();
const { Provider } = FinanceContext;

const FinanceProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useStateReducer({
        categories:
    });

    return <Provider value={[state, dispatch]} {...props}/>
};

const useFinanceContext = () => useContext(FinanceContext);

export {FinanceProvider, useFinanceContext}