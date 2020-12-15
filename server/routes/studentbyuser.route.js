import express from 'express';
import StudentByUserController from '../controllers/studentbyuser.controller';

const router = express.Router();

router.route('/:userid')
.get(StudentByUserController.getByUserid);


export default router;
