import AuthService from "./../services/auth.services";

//login
const login = (request, response) => {
    AuthService.login({ })
   .then( (auth) => {
    response.status(200);
    response.json(auth);
   })
   .catch( handleError(response));
};

//logout
const logout = (request, response) => {
    AuthService.logout({ })
   .then( (auth) => {
    response.status(200);
    response.json(auth);
   })
   .catch( handleError(response));
};




const handleError = (error, response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })

    };
    

}

export default {
    login: login,
    logout: logout
}