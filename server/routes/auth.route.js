import express from 'express';
import LoginController from '../controllers/login.controller';

const router = express.Router();

// search- GET /login
// create- POST/ login
router.route('/login')
.get(TodoController.index)
.post(TodoController.create);

// retrieve - GET /todo/${id}
// update - GET /todo/${id}
// delete - DELETE /todos/${id}

router.route('/todos/:id')
.get(TodoController.get)
.put(TodoController.update)
.delete(TodoController.remove)

//module.exports = router;

export default router;
