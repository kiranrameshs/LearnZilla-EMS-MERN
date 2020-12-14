import StudentService from "./../services/student.services";

//fetch all users
const index = (request, response) => {
    StudentService.search({ })
   .then( (students) => {
    response.status(200);
    response.json(students);
   })
   .catch( handleError(response));
};

//get specific user by id
const get = (request, response) => {
    const id = request.params.id;
    // console.log(id);
    StudentService.get(id)
        .then((student) => {
            response.status(200);
            response.json({message: student});
        })
        .catch(handleError(response));
};

//add new user
const create = (request, response) => {
    const newUser = Object.assign({ }, request.body);
    StudentService.create(newUser)
    .then((student) => {
        response.status(200);
        response.json(student);
    })
    .catch(handleError(response));
};

//update specific user
const update = (request, response) => {

    const id = request.params.id;
    if(id == undefined){
        response.status(200);
        response.json("Invalid Input");
        return response;
    }
    const updateStudent = Object.assign({}, request.body);

    StudentService.update(id,updateStudent)
        .then((student) => {
            response.status(200);
            response.json({message:"Student Updated Successfully"});
        })
        .catch(handleError(response));

};

//delete a user
const remove = (request, response) => {
    const id = request.params.id;
    if(id == undefined){
        response.status(200);
        response.json("Invalid Input");
        return response;
    }
    StudentService.remove(id)
        .then((user) => {
            response.status(200);
            response.json({
                message: "Delete Sucessful"
            });
        })
        .catch(handleError(response));

};

const handleError = (response) => {
    console.log(response)
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}
