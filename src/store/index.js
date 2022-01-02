import { SEARCH_NAME } from "../action";
import { useReducer,createContext } from "react";
// import{createStore} from "redux";

// const store = createStore(rootReducer);

// export function StoreProvider(props){
//     return(
//         <StoreContext.Provider store={store}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

export const StoreContext = createContext();
const initialState = {
    searching:{
        busName:"278",
    }
}

function reducer(state,action){
    switch (action.type){
        case SEARCH_NAME:
            console.log(action.payload)
            return{
                ...state,
                searching:{busName:action.payload}
            }
        default:
            return state;
    }
}

export function StoreProvider(props){
    const [state,dispatch] = useReducer(reducer,initialState);
    const value = {state,dispatch};

    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}
