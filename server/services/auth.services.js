import users from '../models/user';

//Methods to perform CRUD actions on user collection

const login = (id) => {
    const promise = users.find(id).exec();
    return promise;

}

const logout = (id) => {
    const promise = users.findById(id).exec();
    return promise;

}



export default {
    login: login,
    logout: logout
}