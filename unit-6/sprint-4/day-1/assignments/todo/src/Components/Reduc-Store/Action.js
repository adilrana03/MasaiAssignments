export const MyAction = (data, dispatch) => {
        dispatch({
          type: "Users",
          payload: data
        });
      };
      
      export const DeleteAction = (data, index, dispatch) => {
        data.splice(index, 1);
        var newArr = [...data];
        dispatch({
          type: "delete",
          payload: newArr
        });
      };
      
      export const AuthAction = (data, dispatch) => {
        // alert("action")
        dispatch({
          type: "Auth",
          payload: data
        });
      };
      