import * as Types from "./actionType"
import axios from "axios"


export const getData = (query)=> (dispatch) => {

    dispatch({type:Types.GET_PRODUCT_LOADING})  
  return   axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${query.category}&sort=price&order=${query.sortByPrice}&page=${query.page}&limit=12`)
  .then((res)=>{
    dispatch({type:Types.GET_PRODUCT_SUCCESS,payload:res.data})
}).catch((err)=>{
    dispatch({type:Types.GET_PRODUCT_ERROR})   
})
 
}
// {data:[],
// totalPages:"4"}


export const getDetailData = (id)=> (dispatch) => {

    dispatch({type:Types.Single_PRODUCT_REQUEST})  
  return   axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
  .then((res)=>{
    dispatch({type:Types.Single_PRODUCT_SUCCESS,payload:res.data.data})
}).catch((err)=>{
    dispatch({type:Types.Single_PRODUCT_FAILURE})   
})
 
}

export const getCart = (id)=> (dispatch)=>{

    dispatch({type:Types.GET_CART_LOADING})  
  return   axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
  .then((res)=>{
    dispatch({type:Types.GET_CART_SUCCESS,payload:res.data.data});
}).catch((err)=>{
    dispatch({type:Types.GET_CART_ERROR});
})
 
}

export const getOrder = (id)=> (dispatch)=>{

  dispatch({type:Types.ORDER_PRODUCT_REQUEST})  
return   axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
.then((res)=>{
  dispatch({type:Types.ORDER_PRODUCT_SUCCESS,payload:res.data.data});
}).catch((err)=>{
  dispatch({type:Types.ORDER_PRODUCT_FAILURE});
})

}

