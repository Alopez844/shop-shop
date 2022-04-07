import React, { createContext, useContext } from "react";
import { useProdutReducer } from "./reducers";


const StoreContext =  createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProdutReducer({
        products: [], 
        categories: [],
        currentCategory: '',
    });

    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
