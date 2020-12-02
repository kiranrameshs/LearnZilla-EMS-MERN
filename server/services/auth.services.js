import User from './../models/userSchema';

const loginreq = (email, password) => {
  //  const promise = todos.find(id).exec();

    const promise = User.findOne({email: email}, function(error, foundUser){
      if (error) {
        console.log(error);
      } else {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password);
        }
      }
    }).exec();
    return promise;

}

export default {
    loginreq: loginreq

}
