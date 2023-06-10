const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducers = (state = initialState,action) => {
  switch(action.type){
    case "GET_WATCHES_DATA_REQUEST" : 
    return state = {
      ...state,
       watches : action.payload
    }
  }
  return state;
};

export { reducers };