import authRouter from './auth.route';
//import TodoRouter from './todo.route';

//exporting the needed routes
export default (app) => {
    app.use('/', authRouter);
}
