import express from 'express';
import StudentController from '../controllers/student.controller';

const router = express.Router();

// all students / GET
// add students  /POST
router.route('/')
.get(StudentController.index)
.post(StudentController.create);

// get single user- GET /students/${id}
// update single USER- PUT  /students/${id}
// delete single USER- DELETE  /students/${id}
router.route('/:id')
.get(TeacherController.get)
.put(StudentController.update)
.delete(StudentController.remove);

export default router;
