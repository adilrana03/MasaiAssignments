var initData = {
        users: [
          {
            email: "John@gmail.com",
            name: "John Doe",
            image:
              "https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTkvMDkvMjQvMDgvNTIvMjcvNjgxL2h1bnRlcnMtcmFjZS1NWWJoTjhLYWFFYy11bnNwbGFzaC1taW4uanBnIl0sWyJwIiwidGh1bWIiLCIyMDAweDYwMFx1MDAzZSJdLFsicCIsIm9wdGltaXplIl1d"
          },
          {
            email: "ashu647@gmail.com",
            name: "Ashu Laksha",
            image:
              "https://carleycreativeconcepts.com/wp-content/uploads/2021/03/Professional-Image.png"
          }
        ]
      };
      
      export const MyReducer = (storeData = initData, action) => {
        switch (action.type) {
          case "Users": {
            return {
              ...storeData,
              users: [...storeData.users, action.payload]
            };
          }
          case "delete": {
            return {
              ...storeData,
              users: action.payload
            };
          }
          default: {
            return storeData;
          }
        }
      };
      