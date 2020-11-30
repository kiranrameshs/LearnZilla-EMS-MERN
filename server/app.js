import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import model from './models';
import mongoose from 'mongoose';
import routes from  './routes';

<<<<<<< HEAD
//connection

mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

=======
// Connect to MongoURI exported from config
const keys = require('./config/keys');

//connection to local db
mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('Connected to local db successfully')}).catch((err) =>
{console.log("Failed to connect "+err)});

mongoose.Promise = global.Promise;

//connect to remote db using keys imported above
// mongoose.connect(keys.MongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {console.log('Connected to remote db successfully')}).catch((err) =>
// {console.log("Failed to connect "+err)});

>>>>>>> 02fb7326c92f35d4c168b381628cb295f4b4b597
//initialize new express app
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//initialize created routes
routes(app);


export default app;
