import authServices from "../services/auth.services";

const loginreq = (request, response) => {
    const email = request.body.email;
    const password = request.body.password;


    authServices.loginreq(email, password)
    .then(() => {
        response.status(200);
        response.json({
          message: "Successfully Logged in"
        });
    })
    .catch(handleError(response));
};

export default {
    loginreq: loginreq
}
