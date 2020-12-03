import User from './../models/userSchema';

const login = (email, role) => {
    const promise = User.findOne({
      email: email,
      role: role
    });
    return promise;
}

const checkuser = (email) => {
    const promise = User.findOne({
      email: email
    });
    return promise;
}

const register = (newUser) => {
    const user = new User(newUser);
    const promise = user.save();
    return promise;
}

export default {
    login: login,
    checkuser: checkuser,
    register: register
}
