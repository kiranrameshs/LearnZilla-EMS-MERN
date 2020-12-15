import CourseService from "../services/course.services";
import StudentService from "../services/student.services"

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
        response.json({
          "status": 200,
          "course": course,
          "message": "Course created Successfully"
        });
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

const getStudents = (request, response) => {
    const id = request.params.id;
    //get all students and add them to a list
    StudentService.search({ })
   .then( (students) => {
    
    var allStudentList = students.map((c,i) => {
        return c;
    })
    students.find({courses : {
        $in: allStudentList.map(function(o){ return mongoose.Types.ObjectId(o); })
      }}, callback);
    console.log("all students are "+allStudentList);
    
    //loop through their courses array
    // allStudentList.forEach(element => {
    //     element.courses.forEach(course => {
    //         if(course)
    //     });
    // });
   })
   .catch( handleError(response));
    
    //if course id is present then add them to new student list
}

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
    remove: remove,
    getStudents : getStudents
}
