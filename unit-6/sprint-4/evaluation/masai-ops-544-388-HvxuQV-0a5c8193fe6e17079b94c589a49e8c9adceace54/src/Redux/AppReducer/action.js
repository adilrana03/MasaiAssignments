//Write the ActionCreator functions here'
export const WatchDataAction = (data,dispatch)=>{
        dispatch({
         type : "GET_WATCHES_DATA_REQUEST",
         payload : data
        })
     }