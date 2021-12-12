import { createContext,useReducer } from "react";
import {
    SET_BUS_NAME
}from '../utils/constants'

export const StoreContext = createContext();

const initialState={
    page:{
        title:"No words",
    }
}

function reducer(state,action){
    switch(action.type){
        case SET_BUS_NAME:
            return{
                ...state
            }
        default:
            return state;
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