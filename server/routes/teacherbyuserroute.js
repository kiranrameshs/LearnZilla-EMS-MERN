import express from 'express';
import TeacherByUserController from '../controllers/teacherbyuser.controller';

const router = express.Router();

router.route('/:userid')
.get(TeacherByUserController.getByUserid);


export default router;
