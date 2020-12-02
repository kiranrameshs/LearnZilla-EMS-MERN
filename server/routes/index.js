//import TodoRouter from './todo.route';
import AuthRouter from './auth.route';

//exporting the needed routes
export default (app) => {
    app.use('/', AuthRouter);
}
