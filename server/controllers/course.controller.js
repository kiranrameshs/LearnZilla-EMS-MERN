import CourseService from "../services/course.services";

//fetch all courses
const index = (request, response) => {
    CourseService.search({ })
   .then( (courses) => {
    response.status(200);
    response.json(courses);
   })
   .catch( handleError(response));


};

//get specific course by id
const get = (request, response) => {
    const id = request.params.id;
    CourseService.get(id)
        .then((course) => {
            response.status(200);
            response.json(course == null? {message:"course not present"}: course);

        })
        .catch(handleError(response));

};

//add new course
const create = (request, response) => {
    const newCourse = Object.assign({ }, request.body);
    CourseService.create(newCourse)
    .then((course) => {
        response.status(200);
        response.json(course);
    })
    .catch(handleError(response));


};

//update specific course
const update = (request, response) => {
    const id = request.params.id;
    if(id == undefined){
        response.status(200);
        response.json("Invalid Input");
        return response;
    }
    const updatecourse = Object.assign({ }, request.body);
    CourseService.update(id,updatecourse)
        .then((course) => {
            response.status(200);
            response.json(course == null? {message:"course not present"}: course);

        })
        .catch(handleError(response));

};

//delete a course
const remove = (request, response) => {
    const id = request.params.id;
    if(id == undefined){
        response.status(200);
        response.json("Invalid Input");
        return response;
    }
    CourseService.remove(id)
        .then((course) => {
            response.status(200);
            response.json({
                message: "Delete Sucessful"
            });

        })
        .catch(handleError(response));

};

const handleError = (response) => {
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
