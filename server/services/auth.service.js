import User from './../models/userSchema';

const login = (email, password) => {
    const promise = User.findOne({email: email});
    return promise;
}

const register = (newUser) => {
    const user = new User(newUser);
    const promise = user.save();
    return promise;
}

export default {
    login: login,
    register: register
}
