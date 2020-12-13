import express from 'express';
import TeacherController from '../controllers/teacher.controller';

const router = express.Router();

// all users / GET
// add user  /POST
router.route('/')
.get(TeacherController.index)
.post(TeacherController.create);

// get single user- GET /users/${id}
// update single USER- PUT  /users/${id}
// delete single USER- DELETE  /users/${id}
router.route('/:id')
.get(TeacherController.get)
.put(TeacherController.update)
.delete(TeacherController.remove);



export default router;
