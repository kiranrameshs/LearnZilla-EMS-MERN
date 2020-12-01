import express from 'express';
import AuthController from '../controllers/auth.controller';

const router = express.Router();

router.get("/login", function(req, res) {
  res.render("login");
});

router.get("/register", function(req, res) {
  res.render("register");
});

// get- GET /login
// post- POST/ login
router.route('/login')
.post(AuthController.create);

// get- GET /register
// post- POST/ register
router.route('/register')
.post(AuthController.update)

//module.exports = router;

export default router;
