import { createContext,useReducer } from "react";
import {
    SET_BUS_NAME
}from '../utils/constants'

export const StoreContext = createContext();

const initialState={
    busName:'278'
}

function reducer(state,action){
    switch(action.type){
        case 'changeBus':{
            console.log(state);
            return state
        }
        default:{
            throw new Error(`Error: ${action.type}`)
        }
    }
}

export function StoreProvider(props){
    const [state,dispatch] = useReducer(reducer, initialState);
    const value = {state,dispatch};

    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}