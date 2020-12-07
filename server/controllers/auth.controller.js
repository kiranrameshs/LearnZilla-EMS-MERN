import bcrypt from 'bcrypt';
import authService from './../services/auth.service';

const saltRounds = 10;

const login = (request, response) => {

    const email = request.body.email;
    const password = request.body.password;
    const role = request.body.role;
    // console.log(email);
    // console.log(password);
    // console.log(role);
    authService.login(email, role)
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
    console.log("user saved");
    authService.checkuser(request.body.email)
      .then((foundUser) => {
        if (foundUser) {
          return response.status(409).json({"message": "Email already exsists"});
        } else {
          bcrypt.hash(request.body.password, saltRounds).then(hash => {
            request.body.password = hash;
            const newUser = Object.assign({}, request.body);
            console.log(newUser);
            authService.register(newUser, request.body.role)
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
