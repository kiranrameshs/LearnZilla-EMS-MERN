import authService from './../services/auth.service';

// Build logic for creating new record. This will be called for POST method with no id provided
const login = (request, response) => {
    //const newSticky = Object.assign({}, request.body);
    const email = request.body.email;
    const password = request.body.password;
    console.log(email);
    console.log(password);
    authService.login(email, password)
        .then((err, foundUser) => {
            if (err) {
              console.log(err);
            }else {
              if (foundUser) {
                bcrypt.compare(password, foundUser.password).then(result => {
                  if (result === false) {
                    return response.status(400).json({err: 'This is the wrong password'})
                  }
                })
              }
            }
            response.status(200);
            response.json(myJson);
        })
        .catch(handleError(response));
};

// Display Error message in case any error occurs
const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

// Export functions
export default {
    login: login,
    register: register
}
