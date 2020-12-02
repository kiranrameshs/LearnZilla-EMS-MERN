// export const loginUser = userData => dispatch => {
//   axios.post('/api/user/login', userData)
//     .then(res =>{
//
//       // Ref: Seen example from https://goo.gl/HCaXX2
//       let token = res.data.token
//       localStorage.setItem('jwtToken', token)
//       setAuthToken(token)
//       let dUser = jwtDecode(token)
//       dispatch(setUser(dUser))
//     })
//     .catch(err =>
//       dispatch({
//         type: ERRORS,
//         payload: err.response.data
//       })
//     );
// };

function loginUser(userData) {
  let loginUrl = 'http://localhost:8080/login';
  fetch(loginUrl,  {
    method: 'POST',
    body: JSON.stringify(userData => {
        console.log(userData);
      }
    ),
    headers: {"Content-Type": "application/json"}
  })
  .then(res => res.json())
  .then((responseJson) => {
    console.log(responseJson);
  });
}

export default loginUser;
