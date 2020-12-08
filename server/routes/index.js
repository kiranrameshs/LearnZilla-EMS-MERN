import AuthRouter from './authroute';
import UserRouter from './userroute';
import CourseRouter from './courseroute';
import AssignmentRouter from './assignmentroute';

//exporting the needed routes
export default (app) => {
    app.use('/auth', AuthRouter );
    app.use('/users', UserRouter );
    app.use('/courses', CourseRouter );
    app.use('/assignments', AssignmentRouter );
}
