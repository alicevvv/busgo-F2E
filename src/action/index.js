import { getUsers } from "../api/busApi";
export const SEARCH_NAME ="SEARCH_NAME";
export const LOGIN = "LOGIN";
export const LOGIN_STATE = "LOGIN_STATE";
export const GET_USERS = "GET_USERS";
// export function setSearchName(name){
//     console.log(name);
//     return{
//         type:SEARCH_NAME,
//         payload:{
//             routeName:name
//         }
//     }
// }
export const setLogin = async(dispatch,userInfo)=>{
    dispatch({
        type:LOGIN,
        payload:userInfo
    })
}

export const setSearchName=(dispatch,busName)=>{
    dispatch({
        type:SEARCH_NAME,
        payload:busName
    })
}

export const setLoginState =async(dispatch,status)=>{
    dispatch({
        type:LOGIN_STATE,
        payload:status
    })
}

export const getUsersData = async(dispatch,info)=>{
    console.log(info);
    // const userInfo = await getUsers();
    // console.log(userInfo);
    // dispatch({
    //     type:GET_USERS,
    //     payload:{info}
    // })
    // if(info.email === 'atain625@gmail.com'){
    //     dispatch({
    //         type:GET_USERS,
    //         payload:{info}
    //     })
    // }else{
        
    // }
}