export const SEARCH_NAME ="SEARCH_NAME";
// export function setSearchName(name){
//     console.log(name);
//     return{
//         type:SEARCH_NAME,
//         payload:{
//             routeName:name
//         }
//     }
// }

export const setSearchName=(dispatch,busName)=>{
    dispatch({
        type:SEARCH_NAME,
        payload:busName
    })
}