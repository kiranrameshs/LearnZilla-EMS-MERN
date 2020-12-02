import express from 'express';
import authController from './../controllers/auth.controller';

const router = express.Router();

/**
 * Search - GET /stickies
 * Create - POST /stickies
*/
router.route('/login')
    .post(authController.login);


export default router;
