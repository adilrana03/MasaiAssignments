var data = {
        isAuth: false
      };
      
      export const AuthReducer = (storeData = data, action) => {
        switch (action.type) {
          case "Auth": {
            return {
              ...storeData,
              isAuth: action.payload
            };
          }
      
          default: {
            return storeData;
          }
        }
      };
      