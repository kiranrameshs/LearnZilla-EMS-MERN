import TodoRouter from './todo.route';

//exporting the needed routes
export default (app) => {
    app.use('/', TodoRouter );
}
