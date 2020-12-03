import bcrypt from 'bcrypt';
import authService from './../services/auth.service';

const saltRounds = 10;

// Build logic for creating new record. This will be called for POST method with no id provided
const login = (request, response) => {
    //const newSticky = Object.assign({}, request.body);
    const email = request.body.email;
    const password = request.body.password;
    console.log(email);
    console.log(password);
    authService.login(email, password)
      .then((foundUser) => {
        console.log(foundUser);
        if (foundUser) {
          bcrypt.compare(password, foundUser.password).then(result => {
            if (result === false) {
              return response.status(401).json({
                "message": "This is the wrong password"
              })
            } else {
              response.status(200);
              response.json({
                "message": "Successfully Logged in"
              });
            }
          })
        } else {
          return response.status(401).json({
            "message": "No user with this email"
          })
        }
      })
      .catch(handleError(response));
};

const register = (request, response) => {

    authService.login(request.body.email, request.body.password)
      .then((foundUser) => {
        if (foundUser) {
          return response.status(409).json({"message": "Email already exsists"});
        } else {
          bcrypt.hash(request.body.password, saltRounds).then(hash => {
            request.body.password = hash;
            const newUser = Object.assign({}, request.body);
            //console.log(newUser);
            authService.register(newUser)
          }).then((user) => {
            response.status(200);
            response.json({"message": "Successfully Registered"});
          }).catch(handleError(response));
        }
      });
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
