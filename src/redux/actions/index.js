import axios from 'axios';



export const commonAPI = (url, data, method) => async () => {
  let headers = { 'Content-Type': 'application/json' };
  return await new Promise((resolve, reject) => {
    axios({ method, url, headers, data })
      .then(response => {
        if (response) {
          if (response ) {
            let responseData = response.data
            resolve(responseData);
          }
        }
      })
      .catch((error) => {
        console.log("error is ", error);
        reject(error);
      });
  })
}

export const COUNT = 'count';
export const count_search = (body,callback) => dispatch => {
  console.log("body",body);
  let payload = {
    no_of_attempts: body
  }
  dispatch({
    type: COUNT,
    payload
  });
}







